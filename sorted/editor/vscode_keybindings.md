# vscode keybindings

keybindings.json

```json
[
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "ctrl+j",
        "command": "-workbench.action.togglePanel"
    },

    {
        "key": "ctrl+p",
        "command": "-workbench.action.quickOpen"
    },

    {
        "key": "ctrl+\\",
        "command": "-workbench.action.splitEditor"
    },
    {
        "key": "ctrl+\\",
        "command": "workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    },
    {
        "key": "ctrl+`",
        "command": "-workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    },
    {
        "key": "ctrl+j",
        "command": "selectNextSuggestion",
        "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
    },
    {
        "key": "ctrl+k",
        "command": "selectPrevSuggestion",
        "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
    },
    {
        "key": "ctrl+j",
        "command": "workbench.action.quickOpenNavigateNext",
        "when": "inQuickOpen"
    },
    {
        "key": "ctrl+k",
        "command": "workbench.action.quickOpenNavigatePrevious",
        "when": "inQuickOpen"
    },
    {
        "key": "r",
        "command": "renameFile",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "a",
        "command": "explorer.newFile",
        "when": "filesExplorerFocus && !inputFocus"
    },
    {
        "key": "shift+a",
        "command": "explorer.newFolder",
        "when": "filesExplorerFocus && !inputFocus"
    },
    {
        "key": "l",
        "command": "list.select",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "o",
        "command": "list.toggleExpand",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "h",
        "command": "list.collapse",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "j",
        "command": "list.focusDown",
        "when": "listFocus && explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "k",
        "command": "list.focusUp",
        "when": "listFocus && explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "tab",
        "command": "selectNextSuggestion",
        "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
    },
    {
        "key": "tab",
        "command": "workbench.action.quickOpenNavigateNext",
        "when": "inQuickOpen"
    },
    {
        "key": "shift+tab",
        "command": "selectPrevSuggestion",
        "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
    },
    {
        "key": "shift+tab",
        "command": "workbench.action.quickOpenNavigatePrevious",
        "when": "inQuickOpen"
    },
    {
        "key": "ctrl+l",
        "when": "sideBarFocus",
        "command": "workbench.action.focusActiveEditorGroup"
    }
]
```
