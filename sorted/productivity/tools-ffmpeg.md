# Tools - ffmpeg

## convert audio format

```sh
ffmpeg -i input.mp3 output.wav
```

## scale image

```sh
ffmpeg -i input.png -vf scale=320:240 output.png
```

keep aspect ratio

```sh
ffmpeg -i input.png -vf scale=320:-1 output.png
```
