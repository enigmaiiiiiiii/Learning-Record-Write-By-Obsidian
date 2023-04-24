# WebGL Boilerplate

* [Compiling A Shader](#compiling-a-shader)
* [Linking A Program](#linking-a-program)
* [Triangle](#triangle)

## Compiling A Shader

```js
function compileShader(gl, shaderSource, shaderType) {
  const shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    throw "could not compile shader: " + gl.getShaderInfoLog(shader);
  }

  return shader;
}
```

## Linking A Program

```js
function createShaderFromScript(gl, scriptId, opt_shaderType) {
  const shaderScript = document.getElementById(scriptId);
  if (!shaderScript) {
    throw("=== Error: unknown script element" + scriptId);
  }
  const shaderSource = shaderScript.text;

  if (!opt_shaderType) {
    if (shaderScript.type == "x-shader/x-vertex") {
      opt_shaderType = gl.VERTEX_SHADER
    } else if (shaderScript.type == "x-shader/x-fragment") {
      opt_shaderType = gl.FRAGMENT_SHADER
    } else if (!opt_shaderType) {
      throw("=== Error: shader type not set");
    }
  }
  return compileShader(gl, shaderSource, opt_shaderType);
}
```

create shader

```js
const shader = compileShaderFromScript(gl, "someScriptTagId");
```

## Triangle

```js
'use strict';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

const vsGLSL = `
attribute vec4 position;
void main() {
    gl_Position = position;
}
`;

const fsGLSL = `
precision highp float;

void main() {
    gl_FragColor = vec4(0, 1, 0.5, 1);
}
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vsGLSL);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog(vertexShader))
};

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fsGLSL);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog(fragmentShader))
};

const prg = gl.createProgram();
gl.attachShader(prg, vertexShader);
gl.attachShader(prg, fragmentShader);
gl.linkProgram(prg);
if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(prg))
};


// NOTE! These are only here to unclutter the diagram.
// It is safe to detach and delete shaders once
// a program is linked though it is arguably not common.
// and I usually don't do it.
gl.detachShader(prg, vertexShader);
gl.deleteShader(vertexShader);
gl.detachShader(prg, fragmentShader);
gl.deleteShader(fragmentShader);

const positionLoc = gl.getAttribLocation(prg, 'position');

// in clip space
const vertexPositions = new Float32Array([
    0,   0.7,
  0.5,  -0.7,
 -0.5,  -0.7,
]);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexPositions, gl.STATIC_DRAW);

gl.enableVertexAttribArray(positionLoc);
gl.vertexAttribPointer(
    positionLoc,
    2,            // 2 values per vertex shader iteration
    gl.FLOAT,     // data is 32bit floats
    false,        // don't normalize
    0,            // stride (0 = auto)
    0,            // offset into buffer
);

gl.useProgram(prg);

// compute 3 vertices for 1 triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

