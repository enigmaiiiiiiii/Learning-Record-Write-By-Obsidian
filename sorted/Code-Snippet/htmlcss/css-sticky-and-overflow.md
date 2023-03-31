# sticky and overflow

- to make sticky element to scrolling anscestor, the anscestor must have:
  - `overflow` is `hidden`, `auto`, `scroll`, `overlay`
    - note that with `overflow: hidden`, the element seems like relative to its ancestor
    - cause there is no scrollbar
  - fixed `height` or `width`

## code

index.html

```html
<div class="container">
  <div>
    <p className="paragraph">hello world</p>
    <p className="paragraph">hello world</p>
    <p className="paragraph">hello world</p>
    <p className="paragraph">hello world</p>
    <p className="paragraph">hello world</p>
    <p className="paragraph">hello world</p>
    <!-- a lot of line same as above -->

  </div>
  <div className="block">sticky</div>
</div>
```

style.css

```css
.block {
  width: 300px;
  height: 300px;
  background-color: #222;
  position: sticky;
  bottom: 150px;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #333;
  height: 90vh;
  overflow: auto;
}

.paragraph:nth-child(odd) {
  background-color: #999;
}
```