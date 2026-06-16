import { useEffect, useRef, useState } from 'react';

// A live WebGL fragment shader: domain-warped simplex-noise flow, posterized
// with interleaved-gradient-noise ordered dithering (a risograph / halftone
// print look), in the brand palette, gently reacting to the cursor. Hand-coded
// GLSL, not an image. Falls back to a static gradient if WebGL is unavailable.

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;

vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x){ return mod289(((x * 34.0) + 1.0) * x); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float fbm(vec2 p){
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) { s += a * snoise(p); p *= 2.0; a *= 0.5; }
  return s;
}
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
vec3 palette(float t){
  vec3 c0 = vec3(0.957, 0.945, 0.914);
  vec3 c1 = vec3(0.906, 0.878, 1.0);
  vec3 c2 = vec3(0.18, 0.169, 0.69);
  vec3 c3 = vec3(0.831, 0.925, 0.322);
  if (t < 0.40) return mix(c0, c1, t / 0.40);
  if (t < 0.72) return mix(c1, c2, (t - 0.40) / 0.32);
  return mix(c2, c3, (t - 0.72) / 0.28);
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = uv * 2.6;
  float tm = uTime * 0.06;
  vec2 q = vec2(fbm(p + tm), fbm(p + vec2(3.2, 1.7) - tm));
  vec2 r = vec2(
    fbm(p + 1.6 * q + vec2(1.7, 9.2) + tm * 0.7),
    fbm(p + 1.6 * q + vec2(8.3, 2.8) - tm * 0.6)
  );
  float f = fbm(p + 2.2 * r);
  float t = f * 0.5 + 0.5;
  float md = distance(uv, uMouse);
  t += 0.18 * smoothstep(0.55, 0.0, md);
  t = clamp(t, 0.0, 1.0);
  float levels = 6.0;
  float d = ign(gl_FragCoord.xy) - 0.5;
  float tq = clamp(floor(t * levels + 0.5 + d) / levels, 0.0, 1.0);
  gl_FragColor = vec4(palette(tq), 1.0);
}
`;

function compile(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function ShaderPanel({ caption = 'rendered live · webgl' }) {
  const canvasRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let gl;
    try {
      gl = canvas.getContext('webgl', { antialias: true, alpha: false, powerPreference: 'low-power' });
    } catch {
      gl = null;
    }
    if (!gl) {
      setFailed(true);
      return undefined;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      setFailed(true);
      return undefined;
    }
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFailed(true);
      return undefined;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'uTime');
    const uRes = gl.getUniformLocation(program, 'uRes');
    const uMouse = gl.getUniformLocation(program, 'uMouse');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 1;
    let height = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width * dpr));
      height = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };
    resize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    ro?.observe(canvas);

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = (event.clientX - rect.left) / rect.width;
      mouse.ty = 1.0 - (event.clientY - rect.top) / rect.height;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0;
    let running = false;
    let visible = true;
    const start = performance.now();

    const render = (now) => {
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      gl.uniform1f(uTime, reduced ? 8.0 : (now - start) / 1000);
      gl.uniform2f(uRes, width, height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduced && visible) {
        raf = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };
    // Run only while visible; restart when the panel scrolls back into view.
    const kick = () => {
      if (!reduced && visible && !running) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver((entries) => {
            visible = entries[0]?.isIntersecting ?? true;
            if (visible) kick();
          })
        : null;
    io?.observe(canvas);

    if (reduced) {
      render(performance.now());
    } else {
      kick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      ro?.disconnect();
      io?.disconnect();
      const ext = gl.getExtension('WEBGL_lose_context');
      ext?.loseContext();
    };
  }, []);

  return (
    <div className="relative overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_#16150f]">
      <div className="flex items-center justify-between border-b-2 border-ink bg-paper px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-ink/60">
        <span>{caption}</span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 bg-cobalt" />
          <span className="h-2 w-2 bg-lime" />
        </span>
      </div>
      <div className="relative aspect-square">
        {failed ? (
          <div className="absolute inset-0 bg-gradient-to-br from-lilac via-paper to-lime" />
        ) : (
          <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
