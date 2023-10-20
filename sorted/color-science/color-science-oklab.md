# Color Science - OkLab/OkLch

## Features

- make smooth and uniform looking transitions between colors 
- turning image [grayscale](), keep lightness
- increase the [saturation](color-glossary.md#saturation/chroma) of colors
- maintaining percieved [hue](color-glossary.md#hue) and [lightness]()

## Implementation

## Conversion between OkLCh and Oklab

lab to lch

$$
C = \sqrt{a^2+b^2} \hspace{10mm} h^\degree = \arctan(\frac{b}{a})
$$

lch to lab

$$
a = C \cos(h^\degree) \hspace{10mm} b = C \sin(h^\degree)
$$


## Oklab VS HSV

## Convertion Between Oklab and sRGB


