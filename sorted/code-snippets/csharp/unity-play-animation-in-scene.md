# Code

```c#
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(PlayerController))] 
public class EditAnimatorInspector : Editor
{
    private float m_CurTime;

    private bool m_HasBake;

    private bool m_Playing;

    private float m_RunningTime;

    private double m_PreviousTime;

    private float m_RecorderStopTime;

    private const float kDuration = 30f;

    private Animator m_Animator;

    private PlayerController ObjectToContoll
    {
        get { return target as PlayerController; }
    }

    private Animator animator
    {
        get { return m_Animator ?? (m_Animator = ObjectToContoll.GetComponent<Animator>()); }
    }

    void OnEnable()
    {
        m_PreviousTime = EditorApplication.timeSinceStartup;
        EditorApplication.update += inspectorUpdate;
    }

    void OnDisable()
    {
        EditorApplication.update -= inspectorUpdate;
    }

    public override void OnInspectorGUI()
    {
        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("Bake")) {
            m_HasBake = false;
            bake();
        }

        if (GUILayout.Button("Play")) {
            play();
        }

        if (GUILayout.Button("Stop")) {
            stop();
        }

        EditorGUILayout.EndHorizontal();
        m_CurTime = EditorGUILayout.Slider("Time:", m_CurTime, 0f, kDuration);
        manualUpdate();
        
    }

    private void bake()
    {
        if (m_HasBake) {
            return;
        }

        if (Application.isPlaying || animator == null) {
            return;
        }

        const float frameRate = 30f;
        const int frameCount = (int)((kDuration * frameRate) + 2);
        animator.Rebind();
        animator.StopPlayback();
        animator.recorderStartTime = 0;

        animator.StartRecording(frameCount);

        for (var i = 0; i < frameCount - 1; i++) {
            if (i == 200) {
                animator.SetTrigger("walk");
            }

            animator.Update(1.0f / frameRate);
        }

        animator.StopRecording();

        animator.StartPlayback();
        m_HasBake = true;
        m_RecorderStopTime = animator.recorderStopTime;
    }

    private void play()
    {
        if (Application.isPlaying || animator == null) {
            return;
        }

        bake();
        m_RunningTime = 0f;
        m_Playing = true;
    }

    private void stop()
    {
        if (Application.isPlaying || animator == null) {
            return;
        }

        m_Playing = false;
        m_CurTime = 0f;
    }

    private void update()
    {
        if (Application.isPlaying || animator == null) {
            return;
        }

        if (m_RunningTime > m_RecorderStopTime) {
            m_Playing = false;
            return;
        }

        animator.playbackTime = m_RunningTime;
        animator.Update(0);
        m_CurTime = m_RunningTime;
    }

    private void manualUpdate()
    {
        if (animator && !m_Playing && m_HasBake && m_CurTime < m_RecorderStopTime) {
            animator.playbackTime = m_CurTime;
            animator.Update(0);
        }
    }

    private void inspectorUpdate()
    {
        var delta = EditorApplication.timeSinceStartup - m_PreviousTime;
        m_PreviousTime = EditorApplication.timeSinceStartup;

        if (!Application.isPlaying && m_Playing) {
            m_RunningTime = Mathf.Clamp(m_RunningTime + (float)delta, 0f, kDuration);
            update();
        }
    }
}
```
