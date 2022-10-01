# vscode 设置

我的setting.json

```json
{
    "files.autoSave": "afterDelay",
    "python.linting.flake8Enabled": true,
    "editor.formatOnType": true,
    "python.formatting.provider": "yapf",
    "editor.detectIndentation": false,
    "workbench.iconTheme": "vscode-icons",
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "editor.fontLigatures": null,
    // "editor.lineNumbers": "relative",
    "editor.inlineSuggest.enabled": true,
    "github.copilot.enable": {
        "*": false,
        "yaml": true,
        "plaintext": false,
        "markdown": true,
        "Log": false,
        "cpp": true,
        "java": true
    },
    "debug.console.fontSize": 20,
    "markdown.preview.fontSize": 20,
    "terminal.integrated.fontSize": 20,
    "scm.inputFontSize": 20,

    "vim.normalModeKeyBindings": [
        {
            "before": ["<C-j>"],
            "after": ["1", "0", "j"]
        },
        {
            "before": ["<C-k>"],
            "after": ["1", "0", "k"]
        }
    ],
    "vim.visualModeKeyBindings": [
        {
            "before": ["<C-j>"],
            "after": ["1", "0", "j"]
        },
        {
            "before": ["<C-k>"],
            "after": ["1", "0", "k"]
        }
    ],
    "vim.highlightedyank.enable": true,
    "vim.hlsearch": true,
    "vim.foldfix": true,
    "vim.statusBarColors.easymotionmode": "",
    "redhat.telemetry.enabled": true,
    "editor.fontFamily": "Fira Code",
    "workbench.preferredDarkColorTheme": "Default Light+",
    "window.autoDetectColorScheme": true,
    "vim.commandLineModeKeyBindings": [],
    "workbench.colorTheme": "Ayu Dark Bordered",
    "settingsSync.ignoredExtensions": [],
    "editor.fontSize": 20,
    "vsicons.dontShowNewVersionMessage": true,
    "sonarlint.rules": {
        "java:S2189": {
            "level": "off"
        }
    },
    "explorer.autoReveal": false,
    "java.configuration.maven.globalSettings": "C:\\Users\\lixin\\.m2\\settings.xml",
    "foam.dateSnippets.afterCompletion": "noop",
    "editor.mouseWheelZoom": true,
    "editor.wordWrap": "on",
    "liveServer.settings.CustomBrowser": "chrome",
    "vim.easymotion": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "prettier.tabWidth": 4,
    "[java]": {
        "editor.defaultFormatter": "redhat.java"
    },
    "liveServer.settings.donotShowInfoMsg": true,
    "emmet.showAbbreviationSuggestions": false,
    "java.jdt.ls.vmargs": "-XX:+UseParallelGC -XX:GCTimeRatio=4 -XX:AdaptiveSizePolicyWeight=90 -Dsun.zip.disableMemoryMapping=true -Xmx1G -Xms100m -Xlog:jni+resolve=off -javaagent:\"c:\\Users\\lixin\\.vscode\\extensions\\vscjava.vscode-lombok-1.0.1\\server\\lombok.jar\"",
    "[xml]": {
        "editor.defaultFormatter": "redhat.vscode-xml"
    },
    "[sql]": {
        "editor.defaultFormatter": "mtxr.sqltools"
    },
    "editor.unicodeHighlight.ambiguousCharacters": false
}


```