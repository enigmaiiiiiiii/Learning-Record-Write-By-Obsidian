# Grid

## Foundation

[Grid Foundation](CSS_Grid_Foundation.md)

## flexible number of tracks(rows, columns)

- use `auto-fit` and `minmax()` in repeat() function to implment flexible number of tracks

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

## Grid And Absolutely Positioned Elements

grid container as an absolute positioned element [containing block](CSS_Containing_Block.md)

- give a grid item `position: absolute`

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  position: relative;
}

.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```
