# Computer Graphics - Color Space

* [Pantone](#pantone)
* [RGB](#rgb)
* [HSV](#hsv)
* [Lab](#lab)
* [LCh](#lch)
* [Conversion between OkLCh and Oklab](#conversion-between-oklch-and-oklab)

## Pantone

- s absolute color space

## RGB

## HSV

- $H$ hue
- $S$ saturation
- $V$ value

## Lab

- $L$ perceived lightness
- $a$ green/red
- $b$ blue/yellow

## LCh

- $L$ perceived lightness, same as Oklab
- $C$ chroma
- $h$ hue angle

## Conversion between OkLCh and Oklab

lab to lch

$$
C = \sqrt{a^2+b^2} \hspace{10mm} h^\degree = \arctan(\frac{b}{a})
$$

lch to lab

$$
a = C \cos(h^\degree) \hspace{10mm} b = C \sin(h^\degree)
$$

