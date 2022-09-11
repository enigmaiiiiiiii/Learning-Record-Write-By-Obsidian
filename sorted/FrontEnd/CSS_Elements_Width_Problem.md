# 宽度问题


```css
.main {
    box-sizing: border-box;
    float: left;
    width: 70%;  
    background-color: #fff;
    border-radius: .5em;
}

.sidebar{
    box-sizing: border-box;
    float: left;
    width: calc(30% - 1.5em);
    margin-left: 1.5em;  /*列间隔*/
    padding: 1.5em;
    background-color: #404;
    border-radius: .5em;
} 
```