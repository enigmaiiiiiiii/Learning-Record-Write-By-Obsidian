# Color Science - Models

## HSL And HSV

Fig. HSL vs HSV 

![hsl vs hsv](hsl-hsv-models.svg)

- HSL(a–d), HSV (e–h). 
- Above (a, e): cut-away 3D models of each. 
- two-dimensional plots(b-h): holding one constant, varying the other two.
  - constant saturation(b, f): in this case the outside surface of each cylinder; 
  - constant HSL lightness or HSV value(c, g): in this case the slices halfway down each cylinder; 
  - constant hue(d, h): in this case of hues 0° red and its complement 180° cyan

`HSL(Hue, Saturation, Lightness)`

- [hue](color-hue.md)
- [saturation](color-glossary.md#saturation/chroma)
- [lightness](color-glossary.md#luminance)

`HSV(Hue, Saturation, Value)`

![hsv](hsv.png)

- hue
- saturation
- [value]()

## RGB

- use red, green, blue primary colors of light to reproduce a broad of colors
- `RGB(0, 0, 0)` black

how to determine what standard red, green, blue look like

- get color from [CIE 1931 color space](color-space.md#cie-1931-xyz-color-space)

## sRGB

- 

## HEX

- `#000000` black

## Lab

`lab(lightness, a, b)`

- $L$ perceived lightness, 0% is black, 1 is white
- $a$ green/red
- $b$ blue/yellow

## LCh

`lch(lightness, chroma, hue)`

- $L$ perceived lightness, same as Oklab
- $C$ [chroma](color-glossary.md#saturation/chroma)
- $h$ [hue](color-hue.md) angle



