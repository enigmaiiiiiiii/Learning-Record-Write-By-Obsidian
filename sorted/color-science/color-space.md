# Computer Graphics - Color Space

* [What Is Color Space](#what-is-color-space)
* [Summary](#summary)
* [CIE 1931 XYZ Color Space](#cie-1931-xyz-color-space)
* [CIELAB Color Space](#cielab-color-space)
* [HSL And HSV](#hsl-and-hsv)
* [RGB](#rgb)
* [sRGB](#srgb)
* [HEX](#hex)
* [perceptual color space](#perceptual-color-space)

## What Is Color Space

## Summary

absolute color space

- [CIE 1931 Color Space](#cie-1931-xyz-color-space)

relative color space

- [rgb](#rgb)

perceptual color space

- [Lab](color-perceptual-color-space.md#lab)
- [LCh](color-perceptual-color-space.md#lch)

* [HSL And HSV](#hsl-and-hsv)

## CIE 1931 XYZ Color Space

![CIE1931xy](CIE1931xy_CIERGB.svg)

- s absolute color space
- based on [human color sensation](color-fundamental.md#human-color-sensation)

meaning of X, Y axis

D65 white point

- definition
  - in cie1931 color space, D65 white point is (0.3127, 0.3290)
  - XYZ tristimulus values of D65 is (95.047, 100.000, 108.883)
- represent standard illuminant, roughly equal to average midday light in western Europe

relative spectral power distribution of D65

![power distribution of D65](CIE_Standard_Illuminant_D65.svg)

## CIELAB Color Space

`lab(lightness, a, b)`

- $L$ perceived lightness, 0% is black, 1 is white
- $a$ green/red
- $b$ blue/yellow

## CIELCH Color Space

> CIELAB is intended as a [perceptually uniform color space]()

`lch(lightness, chroma, hue)`

- $L$ perceived lightness, same as Oklab
- $C$ [chroma](color-glossary.md#saturation/chroma)
- $h$ [hue](color-hue.md) angle


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
- commonly used describing color in **display devices**
- doesn't cover all colors defined by [CIE 1931 Color Space](#cie-1931-xyz-color-space)
- for facilitate display, RGB color space exclude some colors that human can't distinguish

for example

- `RGB(0, 0, 0)` is black

how to determine what standard red, green, blue look like

- get color from [CIE 1931 color space](#cie-1931-xyz-color-space)
- which means different ways of define red, green, blue will result in different RGB Color Space
- REC.709, sRGB, Adobe RGB, DCI-P3, etc all of them are different RGB Color Space, their difference is **how they choose  their standard color**

RGB Cube

![rbg cube](rgb-cube-show-lowgamma-cutout-b.png)

different RGB Color Space comparison

![rgb color space](CIE1931xy_gamut_comparison.svg)

## sRGB

- standard [RGB](#RGB) create by HP and Microsoft

## HEX

- `#000000` black

## perceptual color space

[perceptual color space](color-perceptual-color-space.md)

