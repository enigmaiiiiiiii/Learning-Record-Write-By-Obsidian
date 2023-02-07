# vscode setting.json

```json
{
    "files.autoSave": "afterDelay",
    "editor.formatOnType": true,
    "workbench.iconTheme": "material-icon-theme",
    "editor.inlineSuggest.enabled": true,
    "github.copilot.enable": {
        "*": true,
        "yaml": true,
        "plaintext": true,
        "markdown": true,
        "Log": true,
        "cpp": true,
        "java": true
    },

    "workbench.colorTheme": "Ayu Mirage Bordered",
    "debug.console.fontSize": 20,
    "markdown.preview.fontSize": 20,
    "terminal.integrated.fontSize": 16,
    "scm.inputFontSize": 20,

    "vim.normalModeKeyBindings": [
        {
            "before": ["<C-j>"],
            "after": ["1", "0", "j"],
            "silent": true
        },
        {
            "before": ["<C-k>"],
            "after": ["1", "0", "k"]
        },
        {
            "before": [":"],
            "commands": ["workbench.action.showCommands"]
        },
        {
            "before": ["<leader>", "e"],
            "commands": ["workbench.action.toggleSidebarVisibility"]
        },
        {
            "before": ["<leader>", "f"],
            "commands": ["workbench.action.quickOpen"]
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
    "vim.operatorPendingModeKeyBindings": [
        {
            "before": ["L"],
            "after": ["$"]
        },
        {
            "before": ["H"],
            "after": ["^"]
        }
    ],

    "vim.easymotion": true,
    "vim.enableNeovim": false,
    "vim.neovimPath": "C:\\Program Files\\Neovim\\bin\\nvim.exe",
    "vim.neovimUseConfigFile": true,
    "vim.neovimConfigPath": "C:\\Users\\lixin\\AppData\\Local\\nvim\\init.lua",
    "vim.leader": "<space>",
    "vim.highlightedyank.enable": true,
    "vim.hlsearch": true,
    "vim.foldfix": true,
    "vim.statusBarColors.easymotionmode": "",
    "vim.sneak": true,
    "redhat.telemetry.enabled": true,
    "editor.fontFamily": "Fira Code",

    "terminal.integrated.fontFamily": "MesloLGM NF",
    "workbench.preferredDarkColorTheme": "Ayu Mirage Bordered",
    "window.autoDetectColorScheme": true,
    "vim.commandLineModeKeyBindings": [],

    "settingsSync.ignoredExtensions": [],
    "editor.fontSize": 16,
    "sonarlint.rules": {
        "java:S2189": {
            "level": "off"
        }
    },

    "explorer.autoReveal": false,
    "java.configuration.maven.globalSettings": "C:\\Users\\lixin\\.m2\\settings.xml",
    "editor.mouseWheelZoom": true,

    "editor.defaultFormatter": "esbenp.prettier-vscode",

    "prettier.tabWidth": 4,

    "emmet.showAbbreviationSuggestions": false,
    "java.jdt.ls.vmargs": "-XX:+UseParallelGC -XX:GCTimeRatio=4 -XX:AdaptiveSizePolicyWeight=90 -Dsun.zip.disableMemoryMapping=true -Xmx1G -Xms100m -Xlog:jni+resolve=off -javaagent:\"c:\\Users\\lixin\\.vscode\\extensions\\vscjava.vscode-lombok-1.0.1\\server\\lombok.jar\"",
    "[java]": {
        "editor.defaultFormatter": "redhat.java"
    },

    "files.exclude": {
        "target/**": true
    },

    "editor.unicodeHighlight.ambiguousCharacters": false,

    "[xml]": {
        "editor.defaultFormatter": "redhat.vscode-xml"
    },

    "[javascript]": {
        "editor.tabSize": 2,
        "editor.defaultFormatter": null
    },

    "[typescript]": {
        "editor.tabSize": 2,
        "editor.defaultFormatter": null
    },

    "[json]": {
        "editor.tabSize": 2,
        "editor.defaultFormatter": null
    },
    "[html]": {
        "editor.tabSize": 2,
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[css]": {
        "editor.tabSize": 2,
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[markdown]": {
        "editor.tabSize": 2,
        "editor.wordWrap": "off"
    },

    "indentRainbow.indicatorStyle": "light",
    "indentRainbow.lightIndicatorStyleLineWidth": 1,
    "indentRainbow.colors": [
        "rgba(255,255,64,0.3)",
        "rgba(127,255,127,0.3)",
        "rgba(255,127,255,0.3)",
        "rgba(79,236,236,0.3)"
    ],
    "indentRainbow.excludedLanguages": ["plaintext"],

    "todo-tree.highlights.defaultHighlight": {
        "type": "text",
        "foreground": "yellow",
        "background": "#10408f",
        "iconColour": "yellow"
    },

    "git.confirmSync": false,

    "remote.SSH.remotePlatform": {
        "192.168.213.131": "linux"
    },
    "terminal.external.linuxExec": "",
    "terminal.integrated.defaultProfile.linux": "zsh",

    "terminal.external.windowsExec": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
    "diffEditor.renderSideBySide": false,
    "terminal.explorerKind": "external",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "markdown.extension.toc.levels": "2..6",
    "markdown.extension.toc.updateOnSave": false,
    "markdown.preview.typographer": true,
    "window.zoomLevel": 1,
    "github.copilot.advanced": {},
    "editor.stickyScroll.enabled": true,
    "editor.stickyScroll.maxLineCount": 10
}
```
