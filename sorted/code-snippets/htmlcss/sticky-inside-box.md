# Sticky Inside Box

index.html

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">
    <div class="content-sidebar">
      <div class="content">
        <h1>Article I</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, ad cupiditate nostrum</p>
      </div>
      <div class="sidebar">
        <h3>Lorom ipsum dolor</h3>
        <p>mastre the unknown fundamentals of CSS with my course CSS Demystified</p>
      </div>
    </div>

    <div class="content-sidebar">
      <div class="content">
        <h3>aritcle I</h3>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
        <p>justify content flest consterur adipiscing in grid container alive in size larger than content</p>
      </div>
    </div>
  </div>
</body>
```

style.css

```css
*, ::after, ::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.box {
  margin: 20px;
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
  background-color: #3300ff;
}

.content-sidebar {
  border: 5px solid #efcc00;
  background-color: #04a3ee;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  position: relative;
}

.content {
  padding: 10px;
  max-width: 70%;
  background-color: #23e031;
  border-radius: 10px;
  border: 5px solid #ef0000;
}

.sidebar {
  position: sticky;
  padding: 10px;
  margin: 5px;
  top: 0;
  background-color: #ffcc00;
  border-radius: 10px;
  align-self: start;
}
```