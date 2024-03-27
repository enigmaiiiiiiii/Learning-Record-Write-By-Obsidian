# Unity - Extending Editor by Delegate

## How to 

step 1: Add `[InitializeOnloadMethod]` before method
step 2: register method to [delegate](csharp-delegate.md) 

## Unity Editor Delegate 

`SceneView.duringSceneGui`

`EditorApplication.projectWindowItemOnGUI`

`EditorAppication.projectWindowChange`

- Listen on changes of [project](unity-editor-project-window.md) sources, like add, delete, move, rename

- `hierarchyWindowItemOnGUI`：

- Adding UI for object in [hierarchy]
