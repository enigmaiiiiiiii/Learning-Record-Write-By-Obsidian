# code

#c\# #Unity

```c#
using System.Collections;
using UnityEngine;
using UnityEditor;
using Random = UnityEngine.Random;

public class RandomCreate : EditorWindow
{
    private int num = 5;

    private int index = 0;

    private string[] obj_type = { "Cube", "Sphere", "Plane" };

    private PrimitiveType t;

    private Queue Created;
    
    [MenuItem("Tools/CreateCube")]
    static void OpenGUI()
    {
        GetWindow(typeof(RandomCreate));
    }

    private void OnGUI()
    {
        GUILayout.Label("Create Random distribute");

        num = EditorGUILayout.IntField("object num: ", num);
        index = EditorGUILayout.Popup("object type", index, obj_type);

        if (GUILayout.Button("create")) {
            Create();
        }

        if (GUILayout.Button("destory")) {
            Destory();
        }

    }

    private void Destory()
    {
    }

    private void Create()
    {
        switch (index) {
            case 0:
                t = PrimitiveType.Cube;
                break;
            case 1:    
                t = PrimitiveType.Sphere;
                break;
            case 2:
                t = PrimitiveType.Plane;
                break;
        }
        for (int i = 0; i < num; i++) {
            GameObject obj = GameObject.CreatePrimitive(t);
            var pos = new Vector3((Random.value - 0.5f) * 5, 0.5f, (Random.value - 0.5f) * 5);
            obj.transform.position = pos;
        }
    }
}

```