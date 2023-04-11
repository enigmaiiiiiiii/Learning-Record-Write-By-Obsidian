# WebGl

## vertex

## fragment

## GLSL

- GL Shader Language
- strictly typed like C/C++

a pair of functions

- 1. Vertex shader
  - compute the position of each vertex
- 2. fragment shader
  - compute color of each pixel

## shader code

- shader code
  - vertex shader code
  - fragment shader code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello WebGL</title>
    <style>
      canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"></script>
    <script>
      // Get the canvas element and WebGL rendering context
      const canvas = document.getElementById('canvas');
      const gl = canvas.getContext('webgl');

      // Define the vertex shader code
      const vertexShaderCode = `
        attribute vec3 position;
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `;

      // Define the fragment shader code
      const fragmentShaderCode = `
        precision mediump float;
        uniform vec4 color;
        void main() {
          gl_FragColor = color;
        }
      `;

      // Create the vertex shader
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexShaderCode);
      gl.compileShader(vertexShader);

      // Create the fragment shader
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentShaderCode);
      gl.compileShader(fragmentShader);

      // Create the shader program
      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      // Define the vertex data
      const vertices = [
        0.0, 0.5, 0.0,
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0
      ];

      // Create the vertex buffer
      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      // Enable the position attribute in the shader program
      const positionAttribute = gl.getAttribLocation(shaderProgram, 'position');
      gl.enableVertexAttribArray(positionAttribute);
      gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, 0, 0);

      // Set the uniform color variable
      const colorLocation = gl.getUniformLocation(shaderProgram, 'color');
      gl.uniform4f(colorLocation, 1.0, 0.0, 0.0, 1.0);

      // Clear the canvas and render the triangle
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(shaderProgram);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    </script>
  </body>
</html>
```

## uniform

- declared in [shader code](#shader-code)
- hold various types of data
  - floats
  - vectors
  - matrices
  - textures
  - ...
- called `uniform` is because they are constant for all [vertices](#vertex) and [fragments](fragment)

get uniform use WebGL api

```js
const gl = canvas.getContext('webgl');
gl.uniform1f();
```
