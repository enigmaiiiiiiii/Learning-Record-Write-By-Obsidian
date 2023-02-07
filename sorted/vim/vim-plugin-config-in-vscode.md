# vscode 中 vim插件配置

setting.json中的vim内容

```json
}
    "vim.normalModeKeyBindings":[
        {
            "before": ["<C-[>"],
            "after": ["g", "T"]
        },
        {
            "before": ["<C-]>"],
            "after": ["g", "t"]
        },
        {
            "before": ["<C-j>"],
            "after": ["1", "0", "j"]
        },
        {
            "before": ["<C-k>"],
            "after": ["1", "0", "k"]
        },
        {
            "before": [";"],
            "after": ["$"]
        },
    ],
    "vim.visualModeKeyBindings": [
        {
            "before": ["<C-j>"],
            "after": ["1", "0", "j"]
        },
        {
            "before": ["<C-k>"],
            "after": ["1", "0", "k"]
        },

    ],
    "vim.highlightedyank.enable": true,
    "vim.hlsearch": true,  
    "vim.foldfix": true  // 折叠后不自动展开
}
```