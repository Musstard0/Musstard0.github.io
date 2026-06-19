const Mh = () => Promise.resolve().then(() => kh), Ko = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: ns, jsx: f, jsxs: C } = Ko;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function is(t) {
  const e = t?.props?._fgT, n = typeof e == "function" || typeof e == "string" || typeof e == "object" && e !== null && "$$typeof" in e;
  return globalThis.__GLOBALS__.React.isValidElement(t) && n;
}
function Rt(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function ss(t) {
  const { _fgT: e, _fgS: n, _fgB: i, _fgD: s, ...r } = t.props;
  return globalThis.__GLOBALS__.React.createElement(e, {
    ...r,
    key: t.key
  }, r.children);
}
function Xt(t) {
  return is(t) ? ss(t) : Rt(t) ? t.props.children : t;
}
const Mt = globalThis.__GLOBALS__.React.Children, Xo = {
  map(t, e, n) {
    return Mt.map(t, (i, s) => {
      const r = Xt(i);
      return Rt(i) ? null : e.call(n, r, s);
    });
  },
  forEach(t, e, n) {
    Mt.forEach(t, (i, s) => {
      if (Rt(i))
        return;
      const r = Xt(i);
      e.call(n, r, s);
    });
  },
  count(t) {
    let e = 0;
    return Mt.forEach(t, (n) => {
      Rt(n) || e++;
    }), e;
  },
  toArray(t) {
    const e = [];
    return Mt.forEach(t, (n) => {
      Rt(n) || e.push(Xt(n));
    }), e;
  },
  only(t) {
    const e = Mt.only(t);
    return Xt(e);
  }
}, me = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Yo(t) {
  if (t == null || typeof t != "object") return t;
  const e = Object.keys(t);
  let n = !1;
  for (let s = 0; s < me.length; s++)
    if (me[s] in t) {
      n = !0;
      break;
    }
  if (!n) return t;
  const i = {};
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    me.indexOf(r) === -1 && (i[r] = t[r]);
  }
  return i;
}
const Nn = globalThis.__GLOBALS__.React.cloneElement, qo = (t, ...e) => {
  if (is(t)) {
    const n = ss(t), i = e[0];
    return i != null && typeof i == "object" && (e = [
      Yo(i),
      ...e.slice(1)
    ]), Nn(n, ...e);
  }
  return Nn(t, ...e);
};
({
  ...globalThis.__GLOBALS__.React
});
const { Component: os, createContext: Pt, createElement: ie, createFactory: Dh, createRef: Rh, forwardRef: Je, Fragment: rs, isValidElement: Zo, lazy: Eh, memo: Lh, Profiler: Ih, PureComponent: Fh, startTransition: Bh, StrictMode: Oh, Suspense: jh, use: _h, useCallback: ue, useContext: j, useDebugValue: Nh, useDeferredValue: Wh, useEffect: it, useId: Qe, useImperativeHandle: zh, useInsertionEffect: as, useLayoutEffect: Jo, useMemo: pt, useReducer: Gh, useRef: W, useState: Tt, useSyncExternalStore: Uh, useTransition: $h, version: Hh, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Kh } = globalThis.__GLOBALS__.React, tn = Pt({});
function en(t) {
  const e = W(null);
  return e.current === null && (e.current = t()), e.current;
}
const nn = typeof window < "u", ls = nn ? Jo : it, he = /* @__PURE__ */ Pt(null);
function sn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function on(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const Q = (t, e, n) => n > e ? e : n < t ? t : n;
let rn = () => {
};
const tt = {}, cs = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function us(t) {
  return typeof t == "object" && t !== null;
}
const hs = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function an(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const X = /* @__NO_SIDE_EFFECTS__ */ (t) => t, Qo = (t, e) => (n) => e(t(n)), Ut = (...t) => t.reduce(Qo), jt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class ln {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return sn(this.subscriptions, e), () => on(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let r = 0; r < s; r++) {
          const o = this.subscriptions[r];
          o && o(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const q = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, K = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function ds(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const fs = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, tr = 1e-7, er = 12;
function nr(t, e, n, i, s) {
  let r, o, a = 0;
  do
    o = e + (n - e) / 2, r = fs(o, i, s) - t, r > 0 ? n = o : e = o;
  while (Math.abs(r) > tr && ++a < er);
  return o;
}
function $t(t, e, n, i) {
  if (t === e && n === i)
    return X;
  const s = (r) => nr(r, 0, 1, t, n);
  return (r) => r === 0 || r === 1 ? r : fs(s(r), e, i);
}
const ps = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ms = (t) => (e) => 1 - t(1 - e), gs = /* @__PURE__ */ $t(0.33, 1.53, 0.69, 0.99), cn = /* @__PURE__ */ ms(gs), ys = /* @__PURE__ */ ps(cn), vs = (t) => (t *= 2) < 1 ? 0.5 * cn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), un = (t) => 1 - Math.sin(Math.acos(t)), bs = ms(un), xs = ps(un), ir = /* @__PURE__ */ $t(0.42, 0, 1, 1), sr = /* @__PURE__ */ $t(0, 0, 0.58, 1), Ss = /* @__PURE__ */ $t(0.42, 0, 0.58, 1), or = (t) => Array.isArray(t) && typeof t[0] != "number", Ts = (t) => Array.isArray(t) && typeof t[0] == "number", rr = {
  linear: X,
  easeIn: ir,
  easeInOut: Ss,
  easeOut: sr,
  circIn: un,
  circInOut: xs,
  circOut: bs,
  backIn: cn,
  backInOut: ys,
  backOut: gs,
  anticipate: vs
}, ar = (t) => typeof t == "string", Wn = (t) => {
  if (Ts(t)) {
    rn(t.length === 4);
    const [e, n, i, s] = t;
    return $t(e, n, i, s);
  } else if (ar(t))
    return rr[t];
  return t;
}, Yt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function lr(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, r = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    o.has(u) && (c.schedule(u), t()), u(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, h = !1, d = !1) => {
      const m = d && s ? n : i;
      return h && o.add(u), m.has(u) || m.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      i.delete(u), o.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (a = u, s) {
        r = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, r && (r = !1, c.process(u));
    }
  };
  return c;
}
const cr = 40;
function ws(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Yt.reduce((y, A) => (y[A] = lr(r), y), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: u, update: h, preRender: d, render: p, postRender: m } = o, x = () => {
    const y = tt.useManualTiming ? s.timestamp : performance.now();
    n = !1, tt.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(y - s.timestamp, cr), 1)), s.timestamp = y, s.isProcessing = !0, a.process(s), l.process(s), c.process(s), u.process(s), h.process(s), d.process(s), p.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(x));
  }, S = () => {
    n = !0, i = !0, s.isProcessing || t(x);
  };
  return { schedule: Yt.reduce((y, A) => {
    const w = o[A];
    return y[A] = (k, v = !1, T = !1) => (n || S(), w.schedule(k, v, T)), y;
  }, {}), cancel: (y) => {
    for (let A = 0; A < Yt.length; A++)
      o[Yt[A]].cancel(y);
  }, state: s, steps: o };
}
const { schedule: D, cancel: st, state: B, steps: ge } = /* @__PURE__ */ ws(typeof requestAnimationFrame < "u" ? requestAnimationFrame : X, !0);
let Qt;
function ur() {
  Qt = void 0;
}
const z = {
  now: () => (Qt === void 0 && z.set(B.isProcessing || tt.useManualTiming ? B.timestamp : performance.now()), Qt),
  set: (t) => {
    Qt = t, queueMicrotask(ur);
  }
}, Cs = (t) => (e) => typeof e == "string" && e.startsWith(t), hn = /* @__PURE__ */ Cs("--"), hr = /* @__PURE__ */ Cs("var(--"), dn = (t) => hr(t) ? dr.test(t.split("/*")[0].trim()) : !1, dr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, At = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, _t = {
  ...At,
  transform: (t) => Q(0, 1, t)
}, qt = {
  ...At,
  default: 1
}, Lt = (t) => Math.round(t * 1e5) / 1e5, fn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fr(t) {
  return t == null;
}
const pr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, pn = (t, e) => (n) => !!(typeof n == "string" && pr.test(n) && n.startsWith(t) || e && !fr(n) && Object.prototype.hasOwnProperty.call(n, e)), Ps = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, r, o, a] = i.match(fn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, mr = (t) => Q(0, 255, t), ye = {
  ...At,
  transform: (t) => Math.round(mr(t))
}, ut = {
  test: /* @__PURE__ */ pn("rgb", "red"),
  parse: /* @__PURE__ */ Ps("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + ye.transform(t) + ", " + ye.transform(e) + ", " + ye.transform(n) + ", " + Lt(_t.transform(i)) + ")"
};
function gr(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Re = {
  test: /* @__PURE__ */ pn("#"),
  parse: gr,
  transform: ut.transform
}, Ht = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), nt = /* @__PURE__ */ Ht("deg"), Z = /* @__PURE__ */ Ht("%"), P = /* @__PURE__ */ Ht("px"), yr = /* @__PURE__ */ Ht("vh"), vr = /* @__PURE__ */ Ht("vw"), zn = {
  ...Z,
  parse: (t) => Z.parse(t) / 100,
  transform: (t) => Z.transform(t * 100)
}, gt = {
  test: /* @__PURE__ */ pn("hsl", "hue"),
  parse: /* @__PURE__ */ Ps("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + Z.transform(Lt(e)) + ", " + Z.transform(Lt(n)) + ", " + Lt(_t.transform(i)) + ")"
}, I = {
  test: (t) => ut.test(t) || Re.test(t) || gt.test(t),
  parse: (t) => ut.test(t) ? ut.parse(t) : gt.test(t) ? gt.parse(t) : Re.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? ut.transform(t) : gt.transform(t),
  getAnimatableNone: (t) => {
    const e = I.parse(t);
    return e.alpha = 0, I.transform(e);
  }
}, br = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xr(t) {
  return isNaN(t) && typeof t == "string" && (t.match(fn)?.length || 0) + (t.match(br)?.length || 0) > 0;
}
const As = "number", ks = "color", Sr = "var", Tr = "var(", Gn = "${}", wr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nt(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let r = 0;
  const a = e.replace(wr, (l) => (I.test(l) ? (i.color.push(r), s.push(ks), n.push(I.parse(l))) : l.startsWith(Tr) ? (i.var.push(r), s.push(Sr), n.push(l)) : (i.number.push(r), s.push(As), n.push(parseFloat(l))), ++r, Gn)).split(Gn);
  return { values: n, split: a, indexes: i, types: s };
}
function Vs(t) {
  return Nt(t).values;
}
function Ms(t) {
  const { split: e, types: n } = Nt(t), i = e.length;
  return (s) => {
    let r = "";
    for (let o = 0; o < i; o++)
      if (r += e[o], s[o] !== void 0) {
        const a = n[o];
        a === As ? r += Lt(s[o]) : a === ks ? r += I.transform(s[o]) : r += s[o];
      }
    return r;
  };
}
const Cr = (t) => typeof t == "number" ? 0 : I.test(t) ? I.getAnimatableNone(t) : t;
function Pr(t) {
  const e = Vs(t);
  return Ms(t)(e.map(Cr));
}
const ot = {
  test: xr,
  parse: Vs,
  createTransformer: Ms,
  getAnimatableNone: Pr
};
function ve(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Ar({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, r = 0, o = 0;
  if (!e)
    s = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = ve(l, a, t + 1 / 3), r = ve(l, a, t), o = ve(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: i
  };
}
function se(t, e) {
  return (n) => n > 0 ? e : t;
}
const R = (t, e, n) => t + (e - t) * n, be = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, kr = [Re, ut, gt], Vr = (t) => kr.find((e) => e.test(t));
function Un(t) {
  const e = Vr(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === gt && (n = Ar(n)), n;
}
const $n = (t, e) => {
  const n = Un(t), i = Un(e);
  if (!n || !i)
    return se(t, e);
  const s = { ...n };
  return (r) => (s.red = be(n.red, i.red, r), s.green = be(n.green, i.green, r), s.blue = be(n.blue, i.blue, r), s.alpha = R(n.alpha, i.alpha, r), ut.transform(s));
}, Ee = /* @__PURE__ */ new Set(["none", "hidden"]);
function Mr(t, e) {
  return Ee.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Dr(t, e) {
  return (n) => R(t, e, n);
}
function mn(t) {
  return typeof t == "number" ? Dr : typeof t == "string" ? dn(t) ? se : I.test(t) ? $n : Lr : Array.isArray(t) ? Ds : typeof t == "object" ? I.test(t) ? $n : Rr : se;
}
function Ds(t, e) {
  const n = [...t], i = n.length, s = t.map((r, o) => mn(r)(r, e[o]));
  return (r) => {
    for (let o = 0; o < i; o++)
      n[o] = s[o](r);
    return n;
  };
}
function Rr(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = mn(t[s])(t[s], e[s]));
  return (s) => {
    for (const r in i)
      n[r] = i[r](s);
    return n;
  };
}
function Er(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const r = e.types[s], o = t.indexes[r][i[r]], a = t.values[o] ?? 0;
    n[s] = a, i[r]++;
  }
  return n;
}
const Lr = (t, e) => {
  const n = ot.createTransformer(e), i = Nt(t), s = Nt(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ee.has(t) && !s.values.length || Ee.has(e) && !i.values.length ? Mr(t, e) : Ut(Ds(Er(i, s), s.values), n) : se(t, e);
};
function Rs(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? R(t, e, n) : mn(t)(t, e);
}
const Ir = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => D.update(e, n),
    stop: () => st(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => B.isProcessing ? B.timestamp : z.now()
  };
}, Es = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let r = 0; r < s; r++)
    i += Math.round(t(r / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, oe = 2e4;
function gn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < oe; )
    e += n, i = t.next(e);
  return e >= oe ? 1 / 0 : e;
}
function Fr(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(gn(i), oe);
  return {
    type: "keyframes",
    ease: (r) => i.next(s * r).value / e,
    duration: /* @__PURE__ */ K(s)
  };
}
const Br = 5;
function Ls(t, e, n) {
  const i = Math.max(e - Br, 0);
  return ds(n - t(i), e - i);
}
const E = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, xe = 1e-3;
function Or({ duration: t = E.duration, bounce: e = E.bounce, velocity: n = E.velocity, mass: i = E.mass }) {
  let s, r, o = 1 - e;
  o = Q(E.minDamping, E.maxDamping, o), t = Q(E.minDuration, E.maxDuration, /* @__PURE__ */ K(t)), o < 1 ? (s = (c) => {
    const u = c * o, h = u * t, d = u - n, p = Le(c, o), m = Math.exp(-h);
    return xe - d / p * m;
  }, r = (c) => {
    const h = c * o * t, d = h * n + n, p = Math.pow(o, 2) * Math.pow(c, 2) * t, m = Math.exp(-h), x = Le(Math.pow(c, 2), o);
    return (-s(c) + xe > 0 ? -1 : 1) * ((d - p) * m) / x;
  }) : (s = (c) => {
    const u = Math.exp(-c * t), h = (c - n) * t + 1;
    return -xe + u * h;
  }, r = (c) => {
    const u = Math.exp(-c * t), h = (n - c) * (t * t);
    return u * h;
  });
  const a = 5 / t, l = _r(s, r, a);
  if (t = /* @__PURE__ */ q(t), isNaN(l))
    return {
      stiffness: E.stiffness,
      damping: E.damping,
      duration: t
    };
  {
    const c = Math.pow(l, 2) * i;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(i * c),
      duration: t
    };
  }
}
const jr = 12;
function _r(t, e, n) {
  let i = n;
  for (let s = 1; s < jr; s++)
    i = i - t(i) / e(i);
  return i;
}
function Le(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Nr = ["duration", "bounce"], Wr = ["stiffness", "damping", "mass"];
function Hn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function zr(t) {
  let e = {
    velocity: E.velocity,
    stiffness: E.stiffness,
    damping: E.damping,
    mass: E.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Hn(t, Wr) && Hn(t, Nr))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, r = 2 * Q(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: E.mass,
        stiffness: s,
        damping: r
      };
    } else {
      const n = Or(t);
      e = {
        ...e,
        ...n,
        mass: E.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function re(t = E.visualDuration, e = E.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: l, damping: c, mass: u, duration: h, velocity: d, isResolvedFromDuration: p } = zr({
    ...n,
    velocity: -/* @__PURE__ */ K(n.velocity || 0)
  }), m = d || 0, x = c / (2 * Math.sqrt(l * u)), S = o - r, b = /* @__PURE__ */ K(Math.sqrt(l / u)), g = Math.abs(S) < 5;
  i || (i = g ? E.restSpeed.granular : E.restSpeed.default), s || (s = g ? E.restDelta.granular : E.restDelta.default);
  let y;
  if (x < 1) {
    const w = Le(b, x);
    y = (k) => {
      const v = Math.exp(-x * b * k);
      return o - v * ((m + x * b * S) / w * Math.sin(w * k) + S * Math.cos(w * k));
    };
  } else if (x === 1)
    y = (w) => o - Math.exp(-b * w) * (S + (m + b * S) * w);
  else {
    const w = b * Math.sqrt(x * x - 1);
    y = (k) => {
      const v = Math.exp(-x * b * k), T = Math.min(w * k, 300);
      return o - v * ((m + x * b * S) * Math.sinh(T) + w * S * Math.cosh(T)) / w;
    };
  }
  const A = {
    calculatedDuration: p && h || null,
    next: (w) => {
      const k = y(w);
      if (p)
        a.done = w >= h;
      else {
        let v = w === 0 ? m : 0;
        x < 1 && (v = w === 0 ? /* @__PURE__ */ q(m) : Ls(y, w, k));
        const T = Math.abs(v) <= i, V = Math.abs(o - k) <= s;
        a.done = T && V;
      }
      return a.value = a.done ? o : k, a;
    },
    toString: () => {
      const w = Math.min(gn(A), oe), k = Es((v) => A.next(w * v).value, w, 30);
      return w + "ms " + k;
    },
    toTransition: () => {
    }
  };
  return A;
}
re.applyToOptions = (t) => {
  const e = Fr(t, 100, re);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ q(e.duration), t.type = "keyframes", t;
};
function Ie({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, p = (T) => a !== void 0 && T < a || l !== void 0 && T > l, m = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let x = n * e;
  const S = h + x, b = o === void 0 ? S : o(S);
  b !== S && (x = b - h);
  const g = (T) => -x * Math.exp(-T / i), y = (T) => b + g(T), A = (T) => {
    const V = g(T), M = y(T);
    d.done = Math.abs(V) <= c, d.value = d.done ? b : M;
  };
  let w, k;
  const v = (T) => {
    p(d.value) && (w = T, k = re({
      keyframes: [d.value, m(d.value)],
      velocity: Ls(y, T, d.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: r,
      restDelta: c,
      restSpeed: u
    }));
  };
  return v(0), {
    calculatedDuration: null,
    next: (T) => {
      let V = !1;
      return !k && w === void 0 && (V = !0, A(T), v(T)), w !== void 0 && T >= w ? k.next(T - w) : (!V && A(T), d);
    }
  };
}
function Gr(t, e, n) {
  const i = [], s = n || tt.mix || Rs, r = t.length - 1;
  for (let o = 0; o < r; o++) {
    let a = s(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || X : e;
      a = Ut(l, a);
    }
    i.push(a);
  }
  return i;
}
function Ur(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const r = t.length;
  if (rn(r === e.length), r === 1)
    return () => e[0];
  if (r === 2 && e[0] === e[1])
    return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Gr(e, i, s), l = a.length, c = (u) => {
    if (o && u < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(u < t[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ jt(t[h], t[h + 1], u);
    return a[h](d);
  };
  return n ? (u) => c(Q(t[0], t[r - 1], u)) : c;
}
function $r(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ jt(0, e, i);
    t.push(R(n, 1, s));
  }
}
function Hr(t) {
  const e = [0];
  return $r(e, t.length - 1), e;
}
function Kr(t, e) {
  return t.map((n) => n * e);
}
function Xr(t, e) {
  return t.map(() => e || Ss).splice(0, t.length - 1);
}
function It({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = or(i) ? i.map(Wn) : Wn(i), r = {
    done: !1,
    value: e[0]
  }, o = Kr(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Hr(e),
    t
  ), a = Ur(o, e, {
    ease: Array.isArray(s) ? s : Xr(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (r.value = a(l), r.done = l >= t, r)
  };
}
const Yr = (t) => t !== null;
function yn(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const r = t.filter(Yr), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !a || i === void 0 ? r[a] : i;
}
const qr = {
  decay: Ie,
  inertia: Ie,
  tween: It,
  keyframes: It,
  spring: re
};
function Is(t) {
  typeof t.type == "string" && (t.type = qr[t.type]);
}
class vn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const Zr = (t) => t / 100;
class bn extends vn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== z.now() && this.tick(z.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Is(e);
    const { type: n = It, repeat: i = 0, repeatDelay: s = 0, repeatType: r, velocity: o = 0 } = e;
    let { keyframes: a } = e;
    const l = n || It;
    l !== It && typeof a[0] != "number" && (this.mixKeyframes = Ut(Zr, Rs(a[0], a[1])), a = [0, 100]);
    const c = l({ ...e, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -o
    })), c.calculatedDuration === null && (c.calculatedDuration = gn(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = c;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: c = 0, keyframes: u, repeat: h, repeatType: d, repeatDelay: p, type: m, onUpdate: x, finalKeyframe: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const b = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), g = this.playbackSpeed >= 0 ? b < 0 : b > s;
    this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let y = this.currentTime, A = i;
    if (h) {
      const T = Math.min(this.currentTime, s) / a;
      let V = Math.floor(T), M = T % 1;
      !M && T >= 1 && (M = 1), M === 1 && V--, V = Math.min(V, h + 1), !!(V % 2) && (d === "reverse" ? (M = 1 - M, p && (M -= p / a)) : d === "mirror" && (A = o)), y = Q(0, 1, M) * a;
    }
    const w = g ? { done: !1, value: u[0] } : A.next(y);
    r && (w.value = r(w.value));
    let { done: k } = w;
    !g && l !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const v = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return v && m !== Ie && (w.value = yn(u, this.options, S, this.speed)), x && x(w.value), v && this.finish(), w;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ K(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ K(e);
  }
  get time() {
    return /* @__PURE__ */ K(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ q(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(z.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ K(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = Ir, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(z.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function Jr(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const ht = (t) => t * 180 / Math.PI, Fe = (t) => {
  const e = ht(Math.atan2(t[1], t[0]));
  return Be(e);
}, Qr = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Fe,
  rotateZ: Fe,
  skewX: (t) => ht(Math.atan(t[1])),
  skewY: (t) => ht(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Be = (t) => (t = t % 360, t < 0 && (t += 360), t), Kn = Fe, Xn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Yn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), ta = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Xn,
  scaleY: Yn,
  scale: (t) => (Xn(t) + Yn(t)) / 2,
  rotateX: (t) => Be(ht(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Be(ht(Math.atan2(-t[2], t[0]))),
  rotateZ: Kn,
  rotate: Kn,
  skewX: (t) => ht(Math.atan(t[4])),
  skewY: (t) => ht(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Oe(t) {
  return t.includes("scale") ? 1 : 0;
}
function je(t, e) {
  if (!t || t === "none")
    return Oe(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = ta, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Qr, s = a;
  }
  if (!s)
    return Oe(e);
  const r = i[e], o = s[1].split(",").map(na);
  return typeof r == "function" ? r(o) : o[r];
}
const ea = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return je(n, e);
};
function na(t) {
  return parseFloat(t.trim());
}
const kt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Vt = new Set(kt), qn = (t) => t === At || t === P, ia = /* @__PURE__ */ new Set(["x", "y", "z"]), sa = kt.filter((t) => !ia.has(t));
function oa(t) {
  const e = [];
  return sa.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const dt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => je(e, "x"),
  y: (t, { transform: e }) => je(e, "y")
};
dt.translateX = dt.x;
dt.translateY = dt.y;
const ft = /* @__PURE__ */ new Set();
let _e = !1, Ne = !1, We = !1;
function Fs() {
  if (Ne) {
    const t = Array.from(ft).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = oa(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([r, o]) => {
        i.getValue(r)?.set(o);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  Ne = !1, _e = !1, ft.forEach((t) => t.complete(We)), ft.clear();
}
function Bs() {
  ft.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ne = !0);
  });
}
function ra() {
  We = !0, Bs(), Fs(), We = !1;
}
class xn {
  constructor(e, n, i, s, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ft.add(this), _e || (_e = !0, D.read(Bs), D.resolveKeyframes(Fs))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const r = s?.get(), o = e[e.length - 1];
      if (r !== void 0)
        e[0] = r;
      else if (i && n) {
        const a = i.readValue(n, o);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = o), s && r === void 0 && s.set(e[0]);
    }
    Jr(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ft.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ft.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const aa = (t) => t.startsWith("--");
function la(t, e, n) {
  aa(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const ca = /* @__PURE__ */ an(() => window.ScrollTimeline !== void 0), ua = {};
function ha(t, e) {
  const n = /* @__PURE__ */ an(t);
  return () => ua[e] ?? n();
}
const Os = /* @__PURE__ */ ha(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Et = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Zn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Et([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Et([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Et([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Et([0.33, 1.53, 0.69, 0.99])
};
function js(t, e) {
  if (t)
    return typeof t == "function" ? Os() ? Es(t, e) : "ease-out" : Ts(t) ? Et(t) : Array.isArray(t) ? t.map((n) => js(n, e) || Zn.easeOut) : Zn[t];
}
function da(t, e, n, { delay: i = 0, duration: s = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const u = {
    [e]: n
  };
  l && (u.offset = l);
  const h = js(a, s);
  Array.isArray(h) && (u.easing = h);
  const d = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return c && (d.pseudoElement = c), t.animate(u, d);
}
function _s(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function fa({ type: t, ...e }) {
  return _s(t) && Os() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class pa extends vn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = e, rn(typeof e.type != "string");
    const c = fa(e);
    this.animation = da(n, i, s, c, r), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const u = yn(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : la(n, i, u), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ K(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ K(e);
  }
  get time() {
    return /* @__PURE__ */ K(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ q(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && ca() ? (this.animation.timeline = e, X) : n(this);
  }
}
const Ns = {
  anticipate: vs,
  backInOut: ys,
  circInOut: xs
};
function ma(t) {
  return t in Ns;
}
function ga(t) {
  typeof t.ease == "string" && ma(t.ease) && (t.ease = Ns[t.ease]);
}
const Jn = 10;
class ya extends pa {
  constructor(e) {
    ga(e), Is(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: r, ...o } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new bn({
      ...o,
      autoplay: !1
    }), l = /* @__PURE__ */ q(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Jn).value, a.sample(l).value, Jn), a.stop();
  }
}
const Qn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ot.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function va(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ba(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const r = t[t.length - 1], o = Qn(s, e), a = Qn(r, e);
  return !o || !a ? !1 : va(t) || (n === "spring" || _s(n)) && i;
}
function ze(t) {
  t.duration = 0, t.type = "keyframes";
}
const xa = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Sa = /* @__PURE__ */ an(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ta(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: r, type: o } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: c } = e.owner.getProps();
  return Sa() && n && xa.has(n) && (n !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && s !== "mirror" && r !== 0 && o !== "inertia";
}
const wa = 40;
class Ca extends vn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: l, motionValue: c, element: u, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = z.now();
    const d = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: r,
      repeatType: o,
      name: l,
      motionValue: c,
      element: u,
      ...h
    }, p = u?.KeyframeResolver || xn;
    this.keyframeResolver = new p(a, (m, x, S) => this.onKeyframesResolved(m, x, d, !S), l, c, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: l, isHandoff: c, onUpdate: u } = i;
    this.resolvedAt = z.now(), ba(e, r, o, a) || ((tt.instantAnimations || !l) && u?.(yn(e, i, n)), e[0] = e[e.length - 1], ze(i), i.repeat = 0);
    const d = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > wa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, p = !c && Ta(d) ? new ya({
      ...d,
      element: d.motionValue.owner.current
    }) : new bn(d);
    p.finished.then(() => this.notifyFinished()).catch(X), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ra()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Pa = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Aa(t) {
  const e = Pa.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function Ws(t, e, n = 1) {
  const [i, s] = Aa(t);
  if (!i)
    return;
  const r = window.getComputedStyle(e).getPropertyValue(i);
  if (r) {
    const o = r.trim();
    return cs(o) ? parseFloat(o) : o;
  }
  return dn(s) ? Ws(s, e, n + 1) : s;
}
function Sn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const zs = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...kt
]), ka = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Gs = (t) => (e) => e.test(t), Us = [At, P, Z, nt, vr, yr, ka], ti = (t) => Us.find(Gs(t));
function Va(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || hs(t) : !0;
}
const Ma = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Da(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(fn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let r = Ma.has(e) ? 1 : 0;
  return i !== n && (r *= 100), e + "(" + r + s + ")";
}
const Ra = /\b([a-z-]*)\(.*?\)/gu, Ge = {
  ...ot,
  getAnimatableNone: (t) => {
    const e = t.match(Ra);
    return e ? e.map(Da).join(" ") : t;
  }
}, ei = {
  ...At,
  transform: Math.round
}, Ea = {
  rotate: nt,
  rotateX: nt,
  rotateY: nt,
  rotateZ: nt,
  scale: qt,
  scaleX: qt,
  scaleY: qt,
  scaleZ: qt,
  skew: nt,
  skewX: nt,
  skewY: nt,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: _t,
  originX: zn,
  originY: zn,
  originZ: P
}, Tn = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...Ea,
  zIndex: ei,
  // SVG
  fillOpacity: _t,
  strokeOpacity: _t,
  numOctaves: ei
}, La = {
  ...Tn,
  // Color props
  color: I,
  backgroundColor: I,
  outlineColor: I,
  fill: I,
  stroke: I,
  // Border props
  borderColor: I,
  borderTopColor: I,
  borderRightColor: I,
  borderBottomColor: I,
  borderLeftColor: I,
  filter: Ge,
  WebkitFilter: Ge
}, $s = (t) => La[t];
function Hs(t, e) {
  let n = $s(t);
  return n !== Ge && (n = ot), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Ia = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Fa(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const r = t[i];
    typeof r == "string" && !Ia.has(r) && Nt(r).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const r of e)
      t[r] = Hs(n, s);
}
class Ba extends xn {
  constructor(e, n, i, s, r) {
    super(e, n, i, s, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && (c = c.trim(), dn(c))) {
        const u = Ws(c, n.current);
        u !== void 0 && (e[l] = u), l === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !zs.has(i) || e.length !== 2)
      return;
    const [s, r] = e, o = ti(s), a = ti(r);
    if (o !== a)
      if (qn(o) && qn(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == "string" && (e[l] = parseFloat(c));
        }
      else dt[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || Va(e[s])) && i.push(s);
    i.length && Fa(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = dt[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const r = i.length - 1, o = i[r];
    i[r] = dt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Oa(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const s = n?.[t] ?? i.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const Ks = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Xs(t) {
  return us(t) && "offsetHeight" in t;
}
const ni = 30, ja = (t) => !isNaN(parseFloat(t));
class _a {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = z.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = z.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ja(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ln());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), D.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = z.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ni)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ni);
    return ds(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function wt(t, e) {
  return new _a(t, e);
}
const { schedule: wn } = /* @__PURE__ */ ws(queueMicrotask, !1), Y = {
  x: !1,
  y: !1
};
function Ys() {
  return Y.x || Y.y;
}
function Na(t) {
  return t === "x" || t === "y" ? Y[t] ? null : (Y[t] = !0, () => {
    Y[t] = !1;
  }) : Y.x || Y.y ? null : (Y.x = Y.y = !0, () => {
    Y.x = Y.y = !1;
  });
}
function qs(t, e) {
  const n = Oa(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function ii(t) {
  return !(t.pointerType === "touch" || Ys());
}
function Wa(t, e, n = {}) {
  const [i, s, r] = qs(t, n), o = (a) => {
    if (!ii(a))
      return;
    const { target: l } = a, c = e(l, a);
    if (typeof c != "function" || !l)
      return;
    const u = (h) => {
      ii(h) && (c(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), r;
}
const Zs = (t, e) => e ? t === e ? !0 : Zs(t, e.parentElement) : !1, Cn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, za = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ga(t) {
  return za.has(t.tagName) || t.tabIndex !== -1;
}
const te = /* @__PURE__ */ new WeakSet();
function si(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Se(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ua = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = si(() => {
    if (te.has(n))
      return;
    Se(n, "down");
    const s = si(() => {
      Se(n, "up");
    }), r = () => Se(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", r, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function oi(t) {
  return Cn(t) && !Ys();
}
function $a(t, e, n = {}) {
  const [i, s, r] = qs(t, n), o = (a) => {
    const l = a.currentTarget;
    if (!oi(a))
      return;
    te.add(l);
    const c = e(l, a), u = (p, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), te.has(l) && te.delete(l), oi(p) && typeof c == "function" && c(p, { success: m });
    }, h = (p) => {
      u(p, l === window || l === document || n.useGlobalTarget || Zs(l, p.target));
    }, d = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), Xs(a) && (a.addEventListener("focus", (c) => Ua(c, s)), !Ga(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), r;
}
function Js(t) {
  return us(t) && "ownerSVGElement" in t;
}
function Ha(t) {
  return Js(t) && t.tagName === "svg";
}
const _ = (t) => !!(t && t.getVelocity), Ka = [...Us, I, ot], Xa = (t) => Ka.find(Gs(t)), Pn = Pt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ri(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Ya(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((s) => {
      const r = ri(s, e);
      return !n && typeof r == "function" && (n = !0), r;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const r = i[s];
          typeof r == "function" ? r() : ri(t[s], null);
        }
      };
  };
}
function qa(...t) {
  return ue(Ya(...t), t);
}
class Za extends os {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const i = n.offsetParent, s = Xs(i) && i.offsetWidth || 0, r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft, r.right = s - r.width - r.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Ja({ children: t, isPresent: e, anchorX: n, root: i }) {
  const s = Qe(), r = W(null), o = W({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = j(Pn), l = qa(r, t?.ref);
  return as(() => {
    const { width: c, height: u, top: h, left: d, right: p } = o.current;
    if (e || !r.current || !c || !u)
      return;
    const m = n === "left" ? `left: ${d}` : `right: ${p}`;
    r.current.dataset.motionPopId = s;
    const x = document.createElement("style");
    a && (x.nonce = a);
    const S = i ?? document.head;
    return S.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${m}px !important;
            top: ${h}px !important;
          }
        `), () => {
      S.contains(x) && S.removeChild(x);
    };
  }, [e]), f(Za, { isPresent: e, childRef: r, sizeRef: o, children: qo(t, { ref: l }) });
}
const Qa = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: r, mode: o, anchorX: a, root: l }) => {
  const c = en(tl), u = Qe();
  let h = !0, d = pt(() => (h = !1, {
    id: u,
    initial: e,
    isPresent: n,
    custom: s,
    onExitComplete: (p) => {
      c.set(p, !0);
      for (const m of c.values())
        if (!m)
          return;
      i && i();
    },
    register: (p) => (c.set(p, !1), () => c.delete(p))
  }), [n, c, i]);
  return r && h && (d = { ...d }), pt(() => {
    c.forEach((p, m) => c.set(m, !1));
  }, [n]), it(() => {
    !n && !c.size && i && i();
  }, [n]), o === "popLayout" && (t = f(Ja, { isPresent: n, anchorX: a, root: l, children: t })), f(he.Provider, { value: d, children: t });
};
function tl() {
  return /* @__PURE__ */ new Map();
}
function Qs(t = !0) {
  const e = j(he);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, r = Qe();
  it(() => {
    if (t)
      return s(r);
  }, [t]);
  const o = ue(() => t && i && i(r), [r, i, t]);
  return !n && i ? [!1, o] : [!0];
}
const Zt = (t) => t.key || "";
function ai(t) {
  const e = [];
  return Xo.forEach(t, (n) => {
    Zo(n) && e.push(n);
  }), e;
}
const ae = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: r = "sync", propagate: o = !1, anchorX: a = "left", root: l }) => {
  const [c, u] = Qs(o), h = pt(() => ai(t), [t]), d = o && !c ? [] : h.map(Zt), p = W(!0), m = W(h), x = en(() => /* @__PURE__ */ new Map()), [S, b] = Tt(h), [g, y] = Tt(h);
  ls(() => {
    p.current = !1, m.current = h;
    for (let k = 0; k < g.length; k++) {
      const v = Zt(g[k]);
      d.includes(v) ? x.delete(v) : x.get(v) !== !0 && x.set(v, !1);
    }
  }, [g, d.length, d.join("-")]);
  const A = [];
  if (h !== S) {
    let k = [...h];
    for (let v = 0; v < g.length; v++) {
      const T = g[v], V = Zt(T);
      d.includes(V) || (k.splice(v, 0, T), A.push(T));
    }
    return r === "wait" && A.length && (k = A), y(ai(k)), b(h), null;
  }
  const { forceRender: w } = j(tn);
  return f(ns, { children: g.map((k) => {
    const v = Zt(k), T = o && !c ? !1 : h === g || d.includes(v), V = () => {
      if (x.has(v))
        x.set(v, !0);
      else
        return;
      let M = !0;
      x.forEach((et) => {
        et || (M = !1);
      }), M && (w?.(), y(m.current), o && u?.(), i && i());
    };
    return f(Qa, { isPresent: T, initial: !p.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: r, root: l, onExitComplete: T ? void 0 : V, anchorX: a, children: k }, v);
  }) });
}, to = Pt({ strict: !1 }), li = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ct = {};
for (const t in li)
  Ct[t] = {
    isEnabled: (e) => li[t].some((n) => !!e[n])
  };
function el(t) {
  for (const e in t)
    Ct[e] = {
      ...Ct[e],
      ...t[e]
    };
}
const nl = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function le(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || nl.has(t);
}
let eo = (t) => !le(t);
function il(t) {
  typeof t == "function" && (eo = (e) => e.startsWith("on") ? !le(e) : t(e));
}
try {
  il(require("@emotion/is-prop-valid").default);
} catch {
}
function sl(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (eo(s) || n === !0 && le(s) || !e && !le(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const de = /* @__PURE__ */ Pt({});
function fe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Wt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const An = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], kn = ["initial", ...An];
function pe(t) {
  return fe(t.animate) || kn.some((e) => Wt(t[e]));
}
function no(t) {
  return !!(pe(t) || t.variants);
}
function ol(t, e) {
  if (pe(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Wt(n) ? n : void 0,
      animate: Wt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function rl(t) {
  const { initial: e, animate: n } = ol(t, j(de));
  return pt(() => ({ initial: e, animate: n }), [ci(e), ci(n)]);
}
function ci(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const zt = {};
function al(t) {
  for (const e in t)
    zt[e] = t[e], hn(e) && (zt[e].isCSSVariable = !0);
}
function io(t, { layout: e, layoutId: n }) {
  return Vt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!zt[t] || t === "opacity");
}
const ll = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, cl = kt.length;
function ul(t, e, n) {
  let i = "", s = !0;
  for (let r = 0; r < cl; r++) {
    const o = kt[r], a = t[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = Ks(a, Tn[o]);
      if (!l) {
        s = !1;
        const u = ll[o] || o;
        i += `${u}(${c}) `;
      }
      n && (e[o] = c);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Vn(t, e, n) {
  const { style: i, vars: s, transformOrigin: r } = t;
  let o = !1, a = !1;
  for (const l in e) {
    const c = e[l];
    if (Vt.has(l)) {
      o = !0;
      continue;
    } else if (hn(l)) {
      s[l] = c;
      continue;
    } else {
      const u = Ks(c, Tn[l]);
      l.startsWith("origin") ? (a = !0, r[l] = u) : i[l] = u;
    }
  }
  if (e.transform || (o || n ? i.transform = ul(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = r;
    i.transformOrigin = `${l} ${c} ${u}`;
  }
}
const Mn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function so(t, e, n) {
  for (const i in e)
    !_(e[i]) && !io(i, n) && (t[i] = e[i]);
}
function hl({ transformTemplate: t }, e) {
  return pt(() => {
    const n = Mn();
    return Vn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function dl(t, e) {
  const n = t.style || {}, i = {};
  return so(i, n, t), Object.assign(i, hl(t, e)), i;
}
function fl(t, e) {
  const n = {}, i = dl(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const pl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ml = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function gl(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const r = s ? pl : ml;
  t[r.offset] = P.transform(-i);
  const o = P.transform(e), a = P.transform(n);
  t[r.array] = `${o} ${a}`;
}
function oo(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, u) {
  if (Vn(t, a, c), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: d } = t;
  h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = u?.transformBox ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && gl(h, s, r, o, !1);
}
const ro = () => ({
  ...Mn(),
  attrs: {}
}), ao = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function yl(t, e, n, i) {
  const s = pt(() => {
    const r = ro();
    return oo(r, e, ao(i), t.transformTemplate, t.style), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [e]);
  if (t.style) {
    const r = {};
    so(r, t.style, t), s.style = { ...r, ...s.style };
  }
  return s;
}
const vl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Dn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(vl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function bl(t, e, n, { latestValues: i }, s, r = !1) {
  const a = (Dn(t) ? yl : fl)(e, i, s, t), l = sl(e, typeof t == "string", r), c = t !== rs ? { ...l, ...a, ref: n } : {}, { children: u } = e, h = pt(() => _(u) ? u.get() : u, [u]);
  return ie(t, {
    ...c,
    children: h
  });
}
function ui(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Rn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, r] = ui(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, r] = ui(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  return e;
}
function ee(t) {
  return _(t) ? t.get() : t;
}
function xl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: Sl(n, i, s, t),
    renderState: e()
  };
}
function Sl(t, e, n, i) {
  const s = {}, r = i(t, {});
  for (const d in r)
    s[d] = ee(r[d]);
  let { initial: o, animate: a } = t;
  const l = pe(t), c = no(t);
  e && c && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const h = u ? a : o;
  if (h && typeof h != "boolean" && !fe(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const m = Rn(t, d[p]);
      if (m) {
        const { transitionEnd: x, transition: S, ...b } = m;
        for (const g in b) {
          let y = b[g];
          if (Array.isArray(y)) {
            const A = u ? y.length - 1 : 0;
            y = y[A];
          }
          y !== null && (s[g] = y);
        }
        for (const g in x)
          s[g] = x[g];
      }
    }
  }
  return s;
}
const lo = (t) => (e, n) => {
  const i = j(de), s = j(he), r = () => xl(t, e, i, s);
  return n ? r() : en(r);
};
function En(t, e, n) {
  const { style: i } = t, s = {};
  for (const r in i)
    (_(i[r]) || e.style && _(e.style[r]) || io(r, t) || n?.getValue(r)?.liveStyle !== void 0) && (s[r] = i[r]);
  return s;
}
const Tl = /* @__PURE__ */ lo({
  scrapeMotionValuesFromProps: En,
  createRenderState: Mn
});
function co(t, e, n) {
  const i = En(t, e, n);
  for (const s in t)
    if (_(t[s]) || _(e[s])) {
      const r = kt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[r] = t[s];
    }
  return i;
}
const wl = /* @__PURE__ */ lo({
  scrapeMotionValuesFromProps: co,
  createRenderState: ro
}), Cl = Symbol.for("motionComponentSymbol");
function yt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Pl(t, e, n) {
  return ue(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : yt(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const Ln = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Al = "framerAppearId", uo = "data-" + Ln(Al), ho = Pt({});
function kl(t, e, n, i, s) {
  const { visualElement: r } = j(de), o = j(to), a = j(he), l = j(Pn).reducedMotion, c = W(null);
  i = i || o.renderer, !c.current && i && (c.current = i(t, {
    visualState: e,
    parent: r,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = c.current, h = j(ho);
  u && !u.projection && s && (u.type === "html" || u.type === "svg") && Vl(c.current, n, s, h);
  const d = W(!1);
  as(() => {
    u && d.current && u.update(n, a);
  });
  const p = n[uo], m = W(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
  return ls(() => {
    u && (d.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), m.current && u.animationState && u.animationState.animateChanges());
  }), it(() => {
    u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(p);
    }), m.current = !1), u.enteringChildren = void 0);
  }), u;
}
function Vl(t, e, n, i) {
  const { layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutCrossfade: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : fo(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: r,
    alwaysMeasureLayout: !!o || a && yt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: i,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c
  });
}
function fo(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : fo(t.parent);
}
function Te(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && el(n);
  const s = Dn(t) ? wl : Tl;
  function r(a, l) {
    let c;
    const u = {
      ...j(Pn),
      ...a,
      layoutId: Ml(a)
    }, { isStatic: h } = u, d = rl(a), p = s(a, h);
    if (!h && nn) {
      Dl();
      const m = Rl(u);
      c = m.MeasureLayout, d.visualElement = kl(t, p, u, i, m.ProjectionNode);
    }
    return C(de.Provider, { value: d, children: [c && d.visualElement ? f(c, { visualElement: d.visualElement, ...u }) : null, bl(t, a, Pl(p, d.visualElement, l), p, h, e)] });
  }
  r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const o = Je(r);
  return o[Cl] = t, o;
}
function Ml({ layoutId: t }) {
  const e = j(tn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Dl(t, e) {
  j(to).strict;
}
function Rl(t) {
  const { drag: e, layout: n } = Ct;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function El(t, e) {
  if (typeof Proxy > "u")
    return Te;
  const n = /* @__PURE__ */ new Map(), i = (r, o) => Te(r, o, t, e), s = (r, o) => i(r, o);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? i : (n.has(o) || n.set(o, Te(o, void 0, t, e)), n.get(o))
  });
}
function po({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Ll({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Il(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function we(t) {
  return t === void 0 || t === 1;
}
function Ue({ scale: t, scaleX: e, scaleY: n }) {
  return !we(t) || !we(e) || !we(n);
}
function ct(t) {
  return Ue(t) || mo(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function mo(t) {
  return hi(t.x) || hi(t.y);
}
function hi(t) {
  return t && t !== "0%";
}
function ce(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function di(t, e, n, i, s) {
  return s !== void 0 && (t = ce(t, s, i)), ce(t, n, i) + e;
}
function $e(t, e = 0, n = 1, i, s) {
  t.min = di(t.min, e, n, i, s), t.max = di(t.max, e, n, i, s);
}
function go(t, { x: e, y: n }) {
  $e(t.x, e.translate, e.scale, e.originPoint), $e(t.y, n.translate, n.scale, n.originPoint);
}
const fi = 0.999999999999, pi = 1.0000000000001;
function Fl(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    r = n[a], o = r.projectionDelta;
    const { visualElement: l } = r.options;
    l && l.props.style && l.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && bt(t, {
      x: -r.scroll.offset.x,
      y: -r.scroll.offset.y
    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, go(t, o)), i && ct(r.latestValues) && bt(t, r.latestValues));
  }
  e.x < pi && e.x > fi && (e.x = 1), e.y < pi && e.y > fi && (e.y = 1);
}
function vt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function mi(t, e, n, i, s = 0.5) {
  const r = R(t.min, t.max, s);
  $e(t, e, n, r, i);
}
function bt(t, e) {
  mi(t.x, e.x, e.scaleX, e.scale, e.originX), mi(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function yo(t, e) {
  return po(Il(t.getBoundingClientRect(), e));
}
function Bl(t, e, n) {
  const i = yo(t, n), { scroll: s } = e;
  return s && (vt(i.x, s.offset.x), vt(i.y, s.offset.y)), i;
}
const gi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xt = () => ({
  x: gi(),
  y: gi()
}), yi = () => ({ min: 0, max: 0 }), L = () => ({
  x: yi(),
  y: yi()
}), He = { current: null }, vo = { current: !1 };
function Ol() {
  if (vo.current = !0, !!nn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => He.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      He.current = !1;
}
const jl = /* @__PURE__ */ new WeakMap();
function _l(t, e, n) {
  for (const i in e) {
    const s = e[i], r = n[i];
    if (_(s))
      t.addValue(i, s);
    else if (_(r))
      t.addValue(i, wt(s, { owner: t }));
    else if (r !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, wt(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const vi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Nl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: r, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = xn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = z.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, D.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = pe(n), this.isVariantNode = no(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const p = h[d];
      l[d] !== void 0 && _(p) && p.set(l[d]);
    }
  }
  mount(e) {
    this.current = e, jl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), vo.current || Ol(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : He.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), st(this.notifyUpdate), st(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = Vt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      this.latestValues[e] = o, this.props.onUpdate && D.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Ct) {
      const n = Ct[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : L();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < vi.length; i++) {
      const s = vi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const r = "on" + s, o = e[r];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = _l(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = wt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (cs(i) || hs(i)) ? i = parseFloat(i) : !Xa(i) && ot.test(n) && (i = Hs(e, n)), this.setBaseTarget(e, _(i) ? i.get() : i)), _(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const r = Rn(this.props, n, this.presenceContext?.custom);
      r && (i = r[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !_(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ln()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    wn.render(this.render);
  }
}
class bo extends Nl {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ba;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    _(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function xo(t, { style: e, vars: n }, i, s) {
  const r = t.style;
  let o;
  for (o in e)
    r[o] = e[o];
  s?.applyProjectionStyles(r, i);
  for (o in n)
    r.setProperty(o, n[o]);
}
function Wl(t) {
  return window.getComputedStyle(t);
}
class zl extends bo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = xo;
  }
  readValueFromInstance(e, n) {
    if (Vt.has(n))
      return this.projection?.isProjecting ? Oe(n) : ea(e, n);
    {
      const i = Wl(e), s = (hn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return yo(e, n);
  }
  build(e, n, i) {
    Vn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return En(e, n, i);
  }
}
const So = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Gl(t, e, n, i) {
  xo(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(So.has(s) ? s : Ln(s), e.attrs[s]);
}
class Ul extends bo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = L;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Vt.has(n)) {
      const i = $s(n);
      return i && i.default || 0;
    }
    return n = So.has(n) ? n : Ln(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return co(e, n, i);
  }
  build(e, n, i) {
    oo(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    Gl(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = ao(e.tagName), super.mount(e);
  }
}
const $l = (t, e) => Dn(t) ? new Ul(e) : new zl(e, {
  allowProjection: t !== rs
});
function St(t, e, n) {
  const i = t.getProps();
  return Rn(i, e, n !== void 0 ? n : i.custom, t);
}
const Ke = (t) => Array.isArray(t);
function Hl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, wt(n));
}
function Kl(t) {
  return Ke(t) ? t[t.length - 1] || 0 : t;
}
function Xl(t, e) {
  const n = St(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...r } = n || {};
  r = { ...r, ...i };
  for (const o in r) {
    const a = Kl(r[o]);
    Hl(t, o, a);
  }
}
function Yl(t) {
  return !!(_(t) && t.add);
}
function Xe(t, e) {
  const n = t.getValue("willChange");
  if (Yl(n))
    return n.add(e);
  if (!n && tt.WillChange) {
    const i = new tt.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function To(t) {
  return t.props[uo];
}
const ql = (t) => t !== null;
function Zl(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(ql), r = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[r];
}
const Jl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Ql = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), tc = {
  type: "keyframes",
  duration: 0.8
}, ec = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, nc = (t, { keyframes: e }) => e.length > 2 ? tc : Vt.has(t) ? t.startsWith("scale") ? Ql(e[1]) : Jl : ec;
function ic({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const In = (t, e, n, i = {}, s, r) => (o) => {
  const a = Sn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: c = 0 } = i;
  c = c - /* @__PURE__ */ q(l);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: r ? void 0 : s
  };
  ic(a) || Object.assign(u, nc(t, u)), u.duration && (u.duration = /* @__PURE__ */ q(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ q(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (ze(u), u.delay === 0 && (h = !0)), (tt.instantAnimations || tt.skipAnimations) && (h = !0, ze(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, h && !r && e.get() !== void 0) {
    const d = Zl(u.keyframes, a);
    if (d !== void 0) {
      D.update(() => {
        u.onUpdate(d), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new bn(u) : new Ca(u);
};
function sc({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function wo(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: r = t.getDefaultTransition(), transitionEnd: o, ...a } = e;
  i && (r = i);
  const l = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const u in a) {
    const h = t.getValue(u, t.latestValues[u] ?? null), d = a[u];
    if (d === void 0 || c && sc(c, u))
      continue;
    const p = {
      delay: n,
      ...Sn(r || {}, u)
    }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(d) && d === m && !p.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const b = To(t);
      if (b) {
        const g = window.MotionHandoffAnimation(b, u, D);
        g !== null && (p.startTime = g, x = !0);
      }
    }
    Xe(t, u), h.start(In(u, h, d, t.shouldReduceMotion && zs.has(u) ? { type: !1 } : p, t, x));
    const S = h.animation;
    S && l.push(S);
  }
  return o && Promise.all(l).then(() => {
    D.update(() => {
      o && Xl(t, o);
    });
  }), l;
}
function Co(t, e, n, i = 0, s = 1) {
  const r = Array.from(t).sort((c, u) => c.sortNodePosition(u)).indexOf(e), o = t.size, a = (o - 1) * i;
  return typeof n == "function" ? n(r, o) : s === 1 ? r * i : a - r * i;
}
function Ye(t, e, n = {}) {
  const i = St(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const r = i ? () => Promise.all(wo(t, i, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: h } = s;
    return oc(t, e, l, c, u, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [r, o] : [o, r];
    return l().then(() => c());
  } else
    return Promise.all([r(), o(n.delay)]);
}
function oc(t, e, n = 0, i = 0, s = 0, r = 1, o) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(Ye(l, e, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + Co(t.variantChildren, l, i, s, r)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function rc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((r) => Ye(t, r, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Ye(t, e, n);
  else {
    const s = typeof e == "function" ? St(t, e, n.custom) : e;
    i = Promise.all(wo(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Po(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const ac = kn.length;
function Ao(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Ao(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < ac; n++) {
    const i = kn[n], s = t.props[i];
    (Wt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const lc = [...An].reverse(), cc = An.length;
function uc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => rc(t, n, i)));
}
function hc(t) {
  let e = uc(t), n = bi(), i = !0;
  const s = (l) => (c, u) => {
    const h = St(t, u, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: p, ...m } = h;
      c = { ...c, ...m, ...p };
    }
    return c;
  };
  function r(l) {
    e = l(t);
  }
  function o(l) {
    const { props: c } = t, u = Ao(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let S = 0; S < cc; S++) {
      const b = lc[S], g = n[b], y = c[b] !== void 0 ? c[b] : u[b], A = Wt(y), w = b === l ? g.isActive : null;
      w === !1 && (m = S);
      let k = y === u[b] && y !== c[b] && A;
      if (k && i && t.manuallyAnimateOnMount && (k = !1), g.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !y && !g.prevProp || // Or if the prop doesn't define an animation
      fe(y) || typeof y == "boolean")
        continue;
      const v = dc(g.prevProp, y);
      let T = v || // If we're making this variant active, we want to always make it active
      b === l && g.isActive && !k && A || // If we removed a higher-priority variant (i is in reverse order)
      S > m && A, V = !1;
      const M = Array.isArray(y) ? y : [y];
      let et = M.reduce(s(b), {});
      w === !1 && (et = {});
      const { prevResolvedValues: On = {} } = g, $o = {
        ...On,
        ...et
      }, jn = (F) => {
        T = !0, d.has(F) && (V = !0, d.delete(F)), g.needsAnimating[F] = !0;
        const U = t.getValue(F);
        U && (U.liveStyle = !1);
      };
      for (const F in $o) {
        const U = et[F], at = On[F];
        if (p.hasOwnProperty(F))
          continue;
        let mt = !1;
        Ke(U) && Ke(at) ? mt = !Po(U, at) : mt = U !== at, mt ? U != null ? jn(F) : d.add(F) : U !== void 0 && d.has(F) ? jn(F) : g.protectedKeys[F] = !0;
      }
      g.prevProp = y, g.prevResolvedValues = et, g.isActive && (p = { ...p, ...et }), i && t.blockInitialAnimation && (T = !1);
      const _n = k && v;
      T && (!_n || V) && h.push(...M.map((F) => {
        const U = { type: b };
        if (typeof F == "string" && i && !_n && t.manuallyAnimateOnMount && t.parent) {
          const { parent: at } = t, mt = St(at, F);
          if (at.enteringChildren && mt) {
            const { delayChildren: Ho } = mt.transition || {};
            U.delay = Co(at.enteringChildren, t, Ho);
          }
        }
        return {
          animation: F,
          options: U
        };
      }));
    }
    if (d.size) {
      const S = {};
      if (typeof c.initial != "boolean") {
        const b = St(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        b && b.transition && (S.transition = b.transition);
      }
      d.forEach((b) => {
        const g = t.getBaseTarget(b), y = t.getValue(b);
        y && (y.liveStyle = !0), S[b] = g ?? null;
      }), h.push({ animation: S });
    }
    let x = !!h.length;
    return i && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (x = !1), i = !1, x ? e(h) : Promise.resolve();
  }
  function a(l, c) {
    if (n[l].isActive === c)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(l, c)), n[l].isActive = c;
    const u = o(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      n = bi();
    }
  };
}
function dc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Po(e, t) : !1;
}
function lt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function bi() {
  return {
    animate: lt(!0),
    whileInView: lt(),
    whileHover: lt(),
    whileTap: lt(),
    whileDrag: lt(),
    whileFocus: lt(),
    exit: lt()
  };
}
class rt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class fc extends rt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = hc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    fe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let pc = 0;
class mc extends rt {
  constructor() {
    super(...arguments), this.id = pc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const gc = {
  animation: {
    Feature: fc
  },
  exit: {
    Feature: mc
  }
};
function Gt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Kt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const yc = (t) => (e) => Cn(e) && t(e, Kt(e));
function Ft(t, e, n, i) {
  return Gt(t, e, yc(n), i);
}
const ko = 1e-4, vc = 1 - ko, bc = 1 + ko, Vo = 0.01, xc = 0 - Vo, Sc = 0 + Vo;
function N(t) {
  return t.max - t.min;
}
function Tc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function xi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = R(e.min, e.max, t.origin), t.scale = N(n) / N(e), t.translate = R(n.min, n.max, t.origin) - t.originPoint, (t.scale >= vc && t.scale <= bc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= xc && t.translate <= Sc || isNaN(t.translate)) && (t.translate = 0);
}
function Bt(t, e, n, i) {
  xi(t.x, e.x, n.x, i ? i.originX : void 0), xi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Si(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + N(e);
}
function wc(t, e, n) {
  Si(t.x, e.x, n.x), Si(t.y, e.y, n.y);
}
function Ti(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + N(e);
}
function Ot(t, e, n) {
  Ti(t.x, e.x, n.x), Ti(t.y, e.y, n.y);
}
function H(t) {
  return [t("x"), t("y")];
}
const Mo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, wi = (t, e) => Math.abs(t - e);
function Cc(t, e) {
  const n = wi(t.x, e.x), i = wi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Do {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: r = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Pe(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, m = Cc(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !m)
        return;
      const { point: x } = d, { timestamp: S } = B;
      this.history.push({ ...x, timestamp: S });
      const { onStart: b, onMove: g } = this.handlers;
      p || (b && b(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, p) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Ce(p, this.transformPagePoint), D.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, p) => {
      this.end();
      const { onEnd: m, onSessionEnd: x, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Pe(d.type === "pointercancel" ? this.lastMoveEventInfo : Ce(p, this.transformPagePoint), this.history);
      this.startEvent && m && m(d, b), x && x(d, b);
    }, !Cn(e))
      return;
    this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = Kt(e), l = Ce(a, this.transformPagePoint), { point: c } = l, { timestamp: u } = B;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: h } = n;
    h && h(e, Pe(l, this.history)), this.removeListeners = Ut(Ft(this.contextWindow, "pointermove", this.handlePointerMove), Ft(this.contextWindow, "pointerup", this.handlePointerUp), Ft(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), st(this.updatePoint);
  }
}
function Ce(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Ci(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Pe({ point: t }, e) {
  return {
    point: t,
    delta: Ci(t, Ro(e)),
    offset: Ci(t, Pc(e)),
    velocity: Ac(e, 0.1)
  };
}
function Pc(t) {
  return t[0];
}
function Ro(t) {
  return t[t.length - 1];
}
function Ac(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Ro(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ q(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const r = /* @__PURE__ */ K(s.timestamp - i.timestamp);
  if (r === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - i.x) / r,
    y: (s.y - i.y) / r
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function kc(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? R(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? R(n, t, i.max) : Math.min(t, n)), t;
}
function Pi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Vc(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Pi(t.x, n, s),
    y: Pi(t.y, e, i)
  };
}
function Ai(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Mc(t, e) {
  return {
    x: Ai(t.x, e.x),
    y: Ai(t.y, e.y)
  };
}
function Dc(t, e) {
  let n = 0.5;
  const i = N(t), s = N(e);
  return s > i ? n = /* @__PURE__ */ jt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ jt(t.min, t.max - s, e.min)), Q(0, 1, n);
}
function Rc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const qe = 0.35;
function Ec(t = qe) {
  return t === !1 ? t = 0 : t === !0 && (t = qe), {
    x: ki(t, "left", "right"),
    y: ki(t, "top", "bottom")
  };
}
function ki(t, e, n) {
  return {
    min: Vi(t, e),
    max: Vi(t, n)
  };
}
function Vi(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Lc = /* @__PURE__ */ new WeakMap();
class Ic {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = L(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (h) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Kt(h).point);
    }, o = (h, d) => {
      const { drag: p, dragPropagation: m, onDragStart: x } = this.getProps();
      if (p && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = Na(p), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((b) => {
        let g = this.getAxisMotionValue(b).get() || 0;
        if (Z.test(g)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const A = y.layout.layoutBox[b];
            A && (g = N(A) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[b] = g;
      }), x && D.postRender(() => x(h, d)), Xe(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, a = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d;
      const { dragPropagation: p, dragDirectionLock: m, onDirectionLock: x, onDrag: S } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: b } = d;
      if (m && this.currentDirection === null) {
        this.currentDirection = Fc(b), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, b), this.updateAxis("y", d.point, b), this.visualElement.render(), S && S(h, d);
    }, l = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d, this.stop(h, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => H((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Do(e, {
      onSessionStart: r,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: i,
      contextWindow: Mo(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, r = this.isDragging;
    if (this.cancel(), !r || !s || !i)
      return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && D.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !Jt(e, s, this.currentDirection))
      return;
    const r = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (o = kc(o, this.constraints[e], this.elastic[e])), r.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && yt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Vc(i.layoutBox, e) : this.constraints = !1, this.elastic = Ec(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && H((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Rc(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !yt(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const r = Bl(i, s.root, this.visualElement.getTransformPagePoint());
    let o = Mc(s.layout.layoutBox, r);
    if (n) {
      const a = n(Ll(o));
      this.hasMutatedConstraints = !!a, a && (o = po(a));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = H((u) => {
      if (!Jt(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
      o && (h = { min: 0, max: 0 });
      const d = s ? 200 : 1e6, p = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[u] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...h
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Xe(this.visualElement, e), i.start(In(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    H((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    H((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    H((n) => {
      const { drag: i } = this.getProps();
      if (!Jt(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, r = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        r.set(e[n] - R(o, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!yt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    H((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Dc({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), H((o) => {
      if (!Jt(o, e, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: c } = this.constraints[o];
      a.set(R(l, c, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Lc.set(this.visualElement, this);
    const e = this.visualElement.current, n = Ft(e, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      yt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, r = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), D.read(i);
    const o = Gt(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (H((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o(), n(), r(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: r = !1, dragElastic: o = qe, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function Jt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Fc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Bc extends rt {
  constructor(e) {
    super(e), this.removeGroupControls = X, this.removeListeners = X, this.controls = new Ic(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || X;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mi = (t) => (e, n) => {
  t && D.postRender(() => t(e, n));
};
class Oc extends rt {
  constructor() {
    super(...arguments), this.removePointerDownListener = X;
  }
  onPointerDown(e) {
    this.session = new Do(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Mo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Mi(e),
      onStart: Mi(n),
      onMove: i,
      onEnd: (r, o) => {
        delete this.session, s && D.postRender(() => s(r, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ft(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ne = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Di(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Dt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Di(t, e.target.x), i = Di(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, jc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = ot.parse(t);
    if (s.length > 5)
      return i;
    const r = ot.createTransformer(t), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const c = R(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= c), typeof s[3 + o] == "number" && (s[3 + o] /= c), r(s);
  }
};
let Ae = !1;
class _c extends os {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: r } = e;
    al(Nc), r && (n.group && n.group.add(r), i && i.register && s && i.register(r), Ae && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      onExitComplete: () => this.safeToRemove()
    })), ne.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: r } = this.props, { projection: o } = i;
    return o && (o.isPresent = r, Ae = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== r ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || D.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), wn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    Ae = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Eo(t) {
  const [e, n] = Qs(), i = j(tn);
  return f(_c, { ...t, layoutGroup: i, switchLayoutGroup: j(ho), isPresent: e, safeToRemove: n });
}
const Nc = {
  borderRadius: {
    ...Dt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Dt,
  borderTopRightRadius: Dt,
  borderBottomLeftRadius: Dt,
  borderBottomRightRadius: Dt,
  boxShadow: jc
};
function Wc(t, e, n) {
  const i = _(t) ? t : wt(t);
  return i.start(In("", i, e, n)), i.animation;
}
const zc = (t, e) => t.depth - e.depth;
class Gc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    sn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    on(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(zc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Uc(t, e) {
  const n = z.now(), i = ({ timestamp: s }) => {
    const r = s - n;
    r >= e && (st(i), t(r - e));
  };
  return D.setup(i, !0), () => st(i);
}
const Lo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], $c = Lo.length, Ri = (t) => typeof t == "string" ? parseFloat(t) : t, Ei = (t) => typeof t == "number" || P.test(t);
function Hc(t, e, n, i, s, r) {
  s ? (t.opacity = R(0, n.opacity ?? 1, Kc(i)), t.opacityExit = R(e.opacity ?? 1, 0, Xc(i))) : r && (t.opacity = R(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let o = 0; o < $c; o++) {
    const a = `border${Lo[o]}Radius`;
    let l = Li(e, a), c = Li(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Ei(l) === Ei(c) ? (t[a] = Math.max(R(Ri(l), Ri(c), i), 0), (Z.test(c) || Z.test(l)) && (t[a] += "%")) : t[a] = c;
  }
  (e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, i));
}
function Li(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Kc = /* @__PURE__ */ Io(0, 0.5, bs), Xc = /* @__PURE__ */ Io(0.5, 0.95, X);
function Io(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ jt(t, e, i));
}
function Ii(t, e) {
  t.min = e.min, t.max = e.max;
}
function $(t, e) {
  Ii(t.x, e.x), Ii(t.y, e.y);
}
function Fi(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Bi(t, e, n, i, s) {
  return t -= e, t = ce(t, 1 / n, i), s !== void 0 && (t = ce(t, 1 / s, i)), t;
}
function Yc(t, e = 0, n = 1, i = 0.5, s, r = t, o = t) {
  if (Z.test(e) && (e = parseFloat(e), e = R(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let a = R(r.min, r.max, i);
  t === r && (a -= e), t.min = Bi(t.min, e, n, a, s), t.max = Bi(t.max, e, n, a, s);
}
function Oi(t, e, [n, i, s], r, o) {
  Yc(t, e[n], e[i], e[s], e.scale, r, o);
}
const qc = ["x", "scaleX", "originX"], Zc = ["y", "scaleY", "originY"];
function ji(t, e, n, i) {
  Oi(t.x, e, qc, n ? n.x : void 0, i ? i.x : void 0), Oi(t.y, e, Zc, n ? n.y : void 0, i ? i.y : void 0);
}
function _i(t) {
  return t.translate === 0 && t.scale === 1;
}
function Fo(t) {
  return _i(t.x) && _i(t.y);
}
function Ni(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Jc(t, e) {
  return Ni(t.x, e.x) && Ni(t.y, e.y);
}
function Wi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Bo(t, e) {
  return Wi(t.x, e.x) && Wi(t.y, e.y);
}
function zi(t) {
  return N(t.x) / N(t.y);
}
function Gi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Qc {
  constructor() {
    this.members = [];
  }
  add(e) {
    sn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (on(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const r = this.members[s];
      if (r.isPresent !== !1) {
        i = r;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function tu(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, r = t.y.translate / e.y, o = n?.z || 0;
  if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: h, rotateY: d, skewX: p, skewY: m } = n;
    c && (i = `perspective(${c}px) ${i}`), u && (i += `rotate(${u}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), p && (i += `skewX(${p}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const ke = ["", "X", "Y", "Z"], eu = 1e3;
let nu = 0;
function Ve(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Oo(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = To(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", D, !(s || r));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Oo(i);
}
function jo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(o = {}, a = e?.()) {
      this.id = nu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(ou), this.nodes.forEach(cu), this.nodes.forEach(uu), this.nodes.forEach(ru);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gc());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new ln()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o) {
      if (this.instance)
        return;
      this.isSVG = Js(o) && !Ha(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let u, h = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        D.read(() => {
          h = window.innerWidth;
        }), t(o, () => {
          const p = window.innerWidth;
          p !== h && (h = p, this.root.updateBlockedByResize = !0, u && u(), u = Uc(d, 250), ne.hasAnimatedSinceResize && (ne.hasAnimatedSinceResize = !1, this.nodes.forEach(Hi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || c.getDefaultTransition() || mu, { onLayoutAnimationStart: x, onLayoutAnimationComplete: S } = c.getProps(), b = !this.targetLayout || !Bo(this.targetLayout, p), g = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || g || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const y = {
            ...Sn(m, "layout"),
            onPlay: x,
            onComplete: S
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(u, g);
        } else
          h || Hi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), st(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Oo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ui);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach($i);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(lu), this.nodes.forEach(iu), this.nodes.forEach(su)) : this.nodes.forEach($i), this.clearAllSnapshots();
      const a = z.now();
      B.delta = Q(0, 1e3 / 60, a - B.timestamp), B.timestamp = a, B.isProcessing = !0, ge.update.process(B), ge.preRender.process(B), ge.render.process(B), B.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, wn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(au), this.sharedNodes.forEach(du);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, D.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      D.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !N(this.snapshot.measuredBox.x) && !N(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = L(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Fo(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      o && this.instance && (a || ct(this.latestValues) || u) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), gu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return L();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(yu))) {
        const { scroll: c } = this.root;
        c && (vt(a.x, c.offset.x), vt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = L();
      if ($(a, o), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: h } = c;
        c !== this.root && u && h.layoutScroll && (u.wasRoot && $(a, o), vt(a.x, u.offset.x), vt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = L();
      $(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && bt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), ct(u.latestValues) && bt(l, u.latestValues);
      }
      return ct(this.latestValues) && bt(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = L();
      $(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !ct(c.latestValues))
          continue;
        Ue(c.latestValues) && c.updateSnapshot();
        const u = L(), h = c.measurePageBox();
        $(u, h), ji(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return ct(this.latestValues) && ji(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (this.resolvedRelativeTargetAt = B.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L(), this.relativeTargetOrigin = L(), Ot(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = L(), this.targetWithTransforms = L()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), wc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $(this.target, this.layout.layoutBox), go(this.target, this.targetDelta)) : $(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L(), this.relativeTargetOrigin = L(), Ot(this.relativeTargetOrigin, this.target, d.target), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ue(this.parent.latestValues) || mo(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === B.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      $(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      Fl(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = L());
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fi(this.prevProjectionDelta.x, this.projectionDelta.x), Fi(this.prevProjectionDelta.y, this.projectionDelta.y)), Bt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !Gi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Gi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.visualElement?.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = xt(), this.projectionDelta = xt(), this.projectionDeltaWithTransform = xt();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, h = xt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = L(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, x = p !== m, S = this.getStack(), b = !S || S.members.length <= 1, g = !!(x && !b && this.options.crossfade === !0 && !this.path.some(pu));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (A) => {
        const w = A / 1e3;
        Ki(h.x, o.x, w), Ki(h.y, o.y, w), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ot(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), fu(this.relativeTarget, this.relativeTargetOrigin, d, w), y && Jc(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = L()), $(y, this.relativeTarget)), x && (this.animationValues = u, Hc(u, c, this.latestValues, w, g, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (st(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = D.update(() => {
        ne.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = wt(0)), this.currentAnimation = Wc(this.motionValue, [0, 1e3], {
          ...o,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(eu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = o;
      if (!(!a || !l || !c)) {
        if (this !== o && this.layout && c && _o(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || L();
          const h = N(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + h;
          const d = N(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + d;
        }
        $(a, l), bt(a, u), Bt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Qc()), this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: l } = o;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Ve("z", o, c, this.animationValues);
      for (let u = 0; u < ke.length; u++)
        Ve(`rotate${ke[u]}`, o, c, this.animationValues), Ve(`skew${ke[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = ee(a?.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = ee(a?.pointerEvents) || ""), this.hasProjected && !ct(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let h = tu(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), o.transform = h;
      const { x: d, y: p } = this.projectionDelta;
      o.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`, c.animationValues ? o.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : o.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const m in zt) {
        if (u[m] === void 0)
          continue;
        const { correct: x, applyTo: S, isCSSVariable: b } = zt[m], g = h === "none" ? u[m] : x(u[m], c);
        if (S) {
          const y = S.length;
          for (let A = 0; A < y; A++)
            o[S[A]] = g;
        } else
          b ? this.options.visualElement.renderState.vars[m] = g : o[m] = g;
      }
      this.options.layoutId && (o.pointerEvents = c === this ? ee(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => o.currentAnimation?.stop()), this.root.nodes.forEach(Ui), this.root.sharedNodes.clear();
    }
  };
}
function iu(t) {
  t.updateLayout();
}
function su(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, r = e.source !== t.layout.source;
    s === "size" ? H((u) => {
      const h = r ? e.measuredBox[u] : e.layoutBox[u], d = N(h);
      h.min = n[u].min, h.max = h.min + d;
    }) : _o(s, e.layoutBox, n) && H((u) => {
      const h = r ? e.measuredBox[u] : e.layoutBox[u], d = N(n[u]);
      h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[u].max = t.relativeTarget[u].min + d);
    });
    const o = xt();
    Bt(o, n, e.layoutBox);
    const a = xt();
    r ? Bt(a, t.applyTransform(i, !0), e.measuredBox) : Bt(a, n, e.layoutBox);
    const l = !Fo(o);
    let c = !1;
    if (!t.resumeFrom) {
      const u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: d } = u;
        if (h && d) {
          const p = L();
          Ot(p, e.layoutBox, h.layoutBox);
          const m = L();
          Ot(m, n, d.layoutBox), Bo(p, m) || (c = !0), u.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = u);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function ou(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ru(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function au(t) {
  t.clearSnapshot();
}
function Ui(t) {
  t.clearMeasurements();
}
function $i(t) {
  t.isLayoutDirty = !1;
}
function lu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Hi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function cu(t) {
  t.resolveTargetDelta();
}
function uu(t) {
  t.calcProjection();
}
function hu(t) {
  t.resetSkewAndRotation();
}
function du(t) {
  t.removeLeadSnapshot();
}
function Ki(t, e, n) {
  t.translate = R(e.translate, 0, n), t.scale = R(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Xi(t, e, n, i) {
  t.min = R(e.min, n.min, i), t.max = R(e.max, n.max, i);
}
function fu(t, e, n, i) {
  Xi(t.x, e.x, n.x, i), Xi(t.y, e.y, n.y, i);
}
function pu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const mu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Yi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), qi = Yi("applewebkit/") && !Yi("chrome/") ? Math.round : X;
function Zi(t) {
  t.min = qi(t.min), t.max = qi(t.max);
}
function gu(t) {
  Zi(t.x), Zi(t.y);
}
function _o(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Tc(zi(e), zi(n), 0.2);
}
function yu(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const vu = jo({
  attachResizeListener: (t, e) => Gt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Me = {
  current: void 0
}, No = jo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Me.current) {
      const t = new vu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Me.current = t;
    }
    return Me.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), bu = {
  pan: {
    Feature: Oc
  },
  drag: {
    Feature: Bc,
    ProjectionNode: No,
    MeasureLayout: Eo
  }
};
function Ji(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, r = i[s];
  r && D.postRender(() => r(e, Kt(e)));
}
class xu extends rt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Wa(e, (n, i) => (Ji(this.node, i, "Start"), (s) => Ji(this.node, s, "End"))));
  }
  unmount() {
  }
}
class Su extends rt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ut(Gt(this.node.current, "focus", () => this.onFocus()), Gt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Qi(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), r = i[s];
  r && D.postRender(() => r(e, Kt(e)));
}
class Tu extends rt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = $a(e, (n, i) => (Qi(this.node, i, "Start"), (s, { success: r }) => Qi(this.node, s, r ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ze = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), wu = (t) => {
  const e = Ze.get(t.target);
  e && e(t);
}, Cu = (t) => {
  t.forEach(wu);
};
function Pu({ root: t, ...e }) {
  const n = t || document;
  De.has(n) || De.set(n, {});
  const i = De.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Cu, { root: t, ...e })), i[s];
}
function Au(t, e, n) {
  const i = Pu(e);
  return Ze.set(t, n), i.observe(t), () => {
    Ze.delete(t), i.unobserve(t);
  };
}
const ku = {
  some: 0,
  all: 1
};
class Vu extends rt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: r } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : ku[s]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, r && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), d = c ? u : h;
      d && d(l);
    };
    return Au(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Mu(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Mu({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Du = {
  inView: {
    Feature: Vu
  },
  tap: {
    Feature: Tu
  },
  focus: {
    Feature: Su
  },
  hover: {
    Feature: xu
  }
}, Ru = {
  layout: {
    ProjectionNode: No,
    MeasureLayout: Eo
  }
}, Eu = {
  ...gc,
  ...Du,
  ...bu,
  ...Ru
}, O = /* @__PURE__ */ El(Eu, $l);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Iu = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, i) => i ? i.toUpperCase() : n.toLowerCase()
), ts = (t) => {
  const e = Iu(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wo = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bu = Je(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: r,
    iconNode: o,
    ...a
  }, l) => ie(
    "svg",
    {
      ref: l,
      ...Fu,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: i ? Number(n) * 24 / Number(e) : n,
      className: Wo("lucide", s),
      ...a
    },
    [
      ...o.map(([c, u]) => ie(c, u)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = (t, e) => {
  const n = Je(
    ({ className: i, ...s }, r) => ie(Bu, {
      ref: r,
      iconNode: e,
      className: Wo(
        `lucide-${Lu(ts(t))}`,
        `lucide-${t}`,
        i
      ),
      ...s
    })
  );
  return n.displayName = ts(t), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], ju = G("arrow-down", Ou);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Nu = G("calendar", _u);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], zu = G("chevron-left", Wu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Uu = G("chevron-right", Gu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Hu = G("external-link", $u);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
], Fn = G("gamepad-2", Ku);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], zo = G("github", Xu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], qu = G("mail", Yu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], Ju = G("menu", Zu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = [
  [
    "path",
    {
      d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
      key: "80a601"
    }
  ],
  [
    "path",
    {
      d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
      key: "j0ngtp"
    }
  ],
  ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }]
], Bn = G("mic-vocal", Qu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], eh = G("send", th);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Go = G("x", nh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
], Uo = G("youtube", ih), sh = [
  {
    title: "Neon Abyss 2",
    desc: "A roguelite platformer set in a neon-soaked underworld. 200k+ copies sold on Steam. Systems design, gameplay programming, and custom shader work.",
    tags: ["Unity", "C#", "HLSL", "Steam"],
    year: "2024",
    type: "Commercial Release",
    link: { type: "steam", url: "https://store.steampowered.com" },
    details: [
      "Designed the core roguelite loop — item synergies, room scaling, and run pacing",
      "Wrote all gameplay systems in C#: weapons, status effects, enemy AI, and boss phases",
      "Authored 14 custom HLSL shaders including neon glow, dissolve, and portal distortion",
      "Implemented Steam Workshop support for community room and item modding",
      "Optimized render pipeline to maintain 60fps on mid-range hardware",
      "Shipped 3 post-launch DLC expansions and 12 balance patches"
    ]
  },
  {
    title: "Siege Protocol",
    desc: "Real-time multiplayer strategy with destructible environments. Built in Unreal Engine 5 with rollback netcode.",
    tags: ["Unreal Engine 5", "C++", "Multiplayer", "EOS"],
    year: "2023",
    type: "Studio Project",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Architected the C++ networking layer using Unreal's GAS + custom rollback netcode",
      "Built a fully destructible environment system using Chaos Physics and procedural damage meshes",
      "Designed and implemented all unit abilities, resource systems, and win conditions",
      "Integrated Epic Online Services (EOS) for matchmaking, lobbies, and anti-cheat",
      "Led a team of 4 programmers, reviewed all gameplay-side pull requests",
      "Reduced average match latency from 180ms to 42ms through server-side prediction fixes"
    ]
  },
  {
    title: "Chromaveil",
    desc: "A narrative puzzle game exploring grief through color mechanics. 48-hour jam winner, later expanded to a full release. Solo dev.",
    tags: ["Godot", "GDScript", "Solo Dev", "Narrative"],
    year: "2022",
    type: "Indie Release",
    link: { type: "itch", url: "https://itch.io" },
    details: [
      "Designed and built the entire game solo — concept, code, art direction, sound, and narrative",
      "Invented a color-mixing puzzle system where emotional states map to RGB light blending",
      "Wrote a branching dialogue system in GDScript with state-tracked memory",
      "Composed the ambient soundtrack using a generative synthesis script",
      'Won "Best Narrative" and "Best Mechanic" at the 48-hour Global Game Jam',
      "Post-jam: expanded to 3 hours of content, sold 18k copies on itch.io"
    ]
  },
  {
    title: "Voidstep Engine",
    desc: "A custom 2D game engine written in C++ with an ECS architecture, integrated level editor, and a Lua scripting layer.",
    tags: ["C++", "OpenGL", "ECS", "Lua"],
    year: "2021",
    type: "Open Source",
    link: { type: "github", url: "https://github.com" },
    details: [
      "Implemented a cache-friendly ECS (Entity Component System) in C++ from scratch",
      "Wrote a custom OpenGL 3.3 renderer with batched sprite drawing and texture atlases",
      "Built an integrated scene editor with drag-and-drop entity placement and live preview",
      "Embedded a Lua 5.4 scripting layer with sandboxed game logic API",
      "Wrote a tile-based physics system with sweep-based collision detection",
      "400+ GitHub stars, 30+ community contributors, used in 5 shipped indie titles"
    ]
  }
], oh = [
  {
    title: "Neon Abyss 2",
    desc: "Рогалик-платформер в неоновом подземном мире. Более 200 тыс. копий в Steam. Системный дизайн, программирование, кастомные шейдеры.",
    tags: ["Unity", "C#", "HLSL", "Steam"],
    year: "2024",
    type: "Коммерческий",
    link: { type: "steam", url: "https://store.steampowered.com" },
    details: [
      "Разработал основной рогалик-цикл: синергии предметов, масштабирование комнат, темп забегов",
      "Написал все игровые системы на C#: оружие, статус-эффекты, AI врагов и фазы боссов",
      "Создал 14 кастомных HLSL-шейдеров: неоновое свечение, растворение, искажение портала",
      "Реализовал поддержку Steam Workshop для моддинга комнат и предметов сообществом",
      "Оптимизировал рендер-пайплайн до стабильных 60fps на бюджетном железе",
      "Выпустил 3 DLC-расширения и 12 патчей баланса после релиза"
    ]
  },
  {
    title: "Siege Protocol",
    desc: "Мультиплеерная стратегия в реальном времени с разрушаемым окружением. Unreal Engine 5, откат-неткод.",
    tags: ["Unreal Engine 5", "C++", "Мультиплеер", "EOS"],
    year: "2023",
    type: "Студийный проект",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Спроектировал сетевой слой на C++ с GAS и кастомным откат-неткодом",
      "Создал систему разрушаемого окружения на Chaos Physics с процедурными мешами повреждений",
      "Разработал все способности юнитов, систему ресурсов и условия победы",
      "Интегрировал Epic Online Services: матчмейкинг, лобби, античит",
      "Руководил командой из 4 программистов, ревьюил все геймплейные PR",
      "Снизил среднюю задержку с 180мс до 42мс через исправления серверного предсказания"
    ]
  },
  {
    title: "Chromaveil",
    desc: "Нарративный паззл о переживании потери через механики цвета. Победитель геймджема, расширен до полного релиза.",
    tags: ["Godot", "GDScript", "Соло", "Нарратив"],
    year: "2022",
    type: "Инди",
    link: { type: "itch", url: "https://itch.io" },
    details: [
      "Создал игру полностью в одиночку: концепт, код, арт-дирекшн, звук и нарратив",
      "Разработал систему паззлов на смешении цветов, где эмоции отображаются в RGB-свет",
      "Написал ветвящуюся систему диалогов с памятью состояний на GDScript",
      "Скомпоновал эмбиент-саундтрек с помощью генеративного синтез-скрипта",
      "Победил в номинациях «Лучший нарратив» и «Лучшая механика» на Global Game Jam",
      "После джема расширен до 3 часов контента, продан тираж 18k копий на itch.io"
    ]
  },
  {
    title: "Voidstep Engine",
    desc: "Собственный 2D-движок на C++ с ECS-архитектурой, встроенным редактором уровней и Lua-скриптингом.",
    tags: ["C++", "OpenGL", "ECS", "Lua"],
    year: "2021",
    type: "Open Source",
    link: { type: "github", url: "https://github.com" },
    details: [
      "Написал кэш-дружественную ECS-архитектуру на C++ с нуля",
      "Создал кастомный рендерер на OpenGL 3.3 с батчингом спрайтов и атласами текстур",
      "Разработал встроенный редактор сцен с drag-and-drop и живым превью",
      "Встроил скриптинг на Lua 5.4 с изолированным API для игровой логики",
      "400+ звёзд на GitHub, 30+ контрибьюторов, использован в 5 вышедших инди-играх"
    ]
  }
], rh = [
  {
    title: "Ironclad Chronicles",
    desc: 'Lead antagonist "Lord Valen" in this 80-hour fantasy RPG. Over 12,000 lines of dialogue across 3 DLC expansions.',
    tags: ["Video Game", "AAA", "Character", "Fantasy"],
    year: "2024",
    type: "Video Game",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Voiced the main antagonist Lord Valen across the base game and all 3 DLC expansions",
      "Delivered 12,400+ lines covering combat taunts, cutscene monologues, and ambient barks",
      "Worked under AAA studio remote direction across 22 recording sessions",
      "Developed 4 distinct emotional registers for Valen as he evolves across the story arc",
      "Collaborated with the audio director on voice-processed villain effects in post",
      'Character was cited as "the best villain performance of 2024" by multiple gaming outlets'
    ]
  },
  {
    title: "Galaxy Drift — Audiobook",
    desc: "Narrator and 14 distinct characters across a 9-part sci-fi audiobook series. Produced in my home studio. 4.9★ rating.",
    tags: ["Audiobook", "Narration", "Sci-Fi", "Solo Produced"],
    year: "2023",
    type: "Audiobook Series",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Performed the main narrator voice and all 14 distinct recurring characters across 9 episodes",
      "Recorded, edited, mixed and mastered entirely in my home studio — no external post-production",
      "Maintained distinct vocal identities across characters with ages ranging 19–87",
      "Delivered 47 hours of finished audio at ACX broadcast-ready standard",
      "Series hit #3 on Audible Sci-Fi charts within 2 weeks of launch",
      "Listener rating held at 4.9★ across 2,300+ reviews"
    ]
  },
  {
    title: "Midnight Tactics",
    desc: 'Squad commander "Captain Rhys" in this tactical shooter. Directed remotely, 6,000 lines, plus additional soldier voices.',
    tags: ["Video Game", "Tactical", "Character", "Remote"],
    year: "2023",
    type: "Video Game",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Voiced lead character Captain Rhys — mission briefings, in-combat callouts, and story cutscenes",
      "Also provided 3 additional enemy soldier voice variants to broaden the audio cast",
      "All sessions recorded and delivered remotely via Source Connect",
      "Worked closely with narrative director on Rhys's arc from arrogant to humbled soldier",
      "Total delivered: 6,200 lines across 18 remote sessions",
      "Rhys's voice became a fan-favourite, requested in the sequel announcement comments"
    ]
  },
  {
    title: "TechNova Campaign",
    desc: "National commercial campaign for a fintech startup. 40+ broadcast spots in English and Spanish.",
    tags: ["Commercial", "Broadcast", "Bilingual", "VO"],
    year: "2022",
    type: "Commercial",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Cast as the primary brand voice for TechNova's national launch campaign",
      "Delivered 43 broadcast spots in both English and Spanish across TV, radio, and digital",
      'Developed a "warm authority" tone profile with the brand team to guide all VO sessions',
      "Completed all deliverables within 48 hours of each script approval",
      "Campaign ran for 18 months — became synonymous with the TechNova brand identity",
      "Client re-engaged for follow-up product campaign the following year"
    ]
  }
], ah = [
  {
    title: "Ironclad Chronicles",
    desc: "Главный антагонист «Лорд Вален» в 80-часовой фэнтези-RPG. Более 12 000 строк диалогов в 3 DLC.",
    tags: ["Видеоигра", "AAA", "Персонаж", "Фэнтези"],
    year: "2024",
    type: "Видеоигра",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Озвучил главного антагониста Лорда Валена в основной игре и всех 3 DLC-дополнениях",
      "Исполнил 12 400+ строк: боевые провокации, катсцены-монологи, фоновые реплики",
      "Работал под AAA-студийной удалённой режиссурой в ходе 22 сессий записи",
      "Разработал 4 разных эмоциональных регистра для Валена по мере развития сюжетной дуги",
      "Совместно с аудиодиректором проработал обработанные эффекты голоса злодея в пост-продакшне",
      "Персонаж назван «лучшим злодейским перформансом 2024» несколькими игровыми изданиями"
    ]
  },
  {
    title: "Galaxy Drift — Аудиокнига",
    desc: "Нарратор и 14 уникальных персонажей в 9-частной науч-фант. аудиосерии. Собственная студия. Рейтинг 4.9★.",
    tags: ["Аудиокнига", "Нарратив", "Sci-Fi", "Своя продакшн"],
    year: "2023",
    type: "Аудиосерия",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Исполнил голос основного нарратора и всех 14 уникальных повторяющихся персонажей",
      "Записал, отредактировал, смикшировал и смастерил всё в домашней студии без внешнего пост-продакшна",
      "Сохранил узнаваемые голосовые образы персонажей в возрасте от 19 до 87 лет",
      "Сдал 47 часов финального аудио в стандарте ACX broadcast-ready",
      "Серия вошла в топ-3 Audible Sci-Fi в течение 2 недель после выхода",
      "Рейтинг слушателей 4.9★ по 2 300+ отзывам"
    ]
  },
  {
    title: "Midnight Tactics",
    desc: "Командир отряда «Капитан Райс» в тактическом шутере. Удалённая запись, 6 000 строк.",
    tags: ["Видеоигра", "Тактика", "Персонаж", "Удалённо"],
    year: "2023",
    type: "Видеоигра",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Озвучил главного персонажа капитана Райса: брифинги, боевые команды, сюжетные катсцены",
      "Записал 3 дополнительных варианта голосов вражеских солдат для расширения актёрского состава",
      "Все сессии записаны и сданы удалённо через Source Connect",
      "Совместно с нарративным директором проработал дугу Райса от высокомерия до смирения",
      "Итого сдано: 6 200 строк за 18 удалённых сессий",
      "Голос Райса стал любимым у фанатов — его просят вернуть в комментариях к анонсу сиквела"
    ]
  },
  {
    title: "Кампания TechNova",
    desc: "Национальная рекламная кампания для финтех-стартапа. Более 40 роликов на английском и испанском.",
    tags: ["Реклама", "Эфирный", "Двуязычный", "VO"],
    year: "2022",
    type: "Коммерческий",
    link: { type: "youtube", url: "https://youtube.com" },
    details: [
      "Утверждён основным голосом бренда для национальной кампании запуска TechNova",
      "Записал 43 эфирных ролика на английском и испанском для ТВ, радио и digital",
      "Разработал профиль «тёплой авторитетности» с командой бренда для всех сессий",
      "Выполнял все поставки в течение 48 часов после утверждения скрипта",
      "Кампания шла 18 месяцев и стала синонимом фирменного стиля TechNova",
      "Клиент вернулся для сопутствующей кампании нового продукта в следующем году"
    ]
  }
], J = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    modeSwitcher: { game: "Game Developer", voice: "Voice Actor" },
    hero: {
      game: {
        greeting: "Hello, I'm",
        name: "Alex Mercer",
        role: "Game Developer",
        tagline: "Crafting immersive worlds, one pixel at a time.",
        sub: "I build games that pull players in and don't let go — from rapid prototypes to full commercial releases.",
        cta: "View My Games",
        ctaSub: "Switch to voice actor portfolio →"
      },
      voice: {
        greeting: "Hello, I'm",
        name: "Alex Mercer",
        role: "Voice Actor",
        tagline: "Giving breath and soul to every character.",
        sub: "From fierce villains to gentle narrators, I deliver performances that linger long after the last line.",
        cta: "Hear My Reel",
        ctaSub: "Switch to game developer portfolio →"
      }
    },
    about: {
      heading: "About Me",
      game: {
        p1: "I'm a game developer with 7 years of professional experience shipping titles across PC, console, and mobile. My expertise spans systems design, gameplay programming, and real-time rendering.",
        p2: "I've worked on everything from solo indie experiments to 15-person studio productions. I love the moment a mechanic clicks — when play becomes feel.",
        p3: "Currently open to new collaborations, freelance contracts, and full-time roles.",
        tag1: "Systems Design",
        tag2: "Gameplay Programming",
        tag3: "Shader / VFX",
        tag4: "Solo & Team"
      },
      voice: {
        p1: "I'm a professional voice actor with a four-octave range and a background in theatre and audio production. I've voiced characters for video games, animated series, audiobooks, and commercial campaigns.",
        p2: "My home studio is fully treated and equipped for remote sessions. I deliver broadcast-quality audio quickly and take direction with precision.",
        p3: "Available for character work, narration, e-learning, and commercial VO.",
        tag1: "Character Range",
        tag2: "Home Studio",
        tag3: "Fast Turnaround",
        tag4: "Remote Sessions"
      }
    },
    projects: { heading: "Projects", game: sh, voice: rh },
    skills: {
      heading: "Skills",
      game: [
        { name: "Unity / C#", level: 95 },
        { name: "Unreal Engine 5 / C++", level: 88 },
        { name: "HLSL / GLSL Shaders", level: 82 },
        { name: "Godot / GDScript", level: 78 },
        { name: "Multiplayer Netcode", level: 75 },
        { name: "Blender 3D", level: 70 },
        { name: "Python / Tools Dev", level: 85 },
        { name: "Git / Version Control", level: 92 }
      ],
      voice: [
        { name: "Character Performance", level: 97 },
        { name: "Commercial VO", level: 93 },
        { name: "Narration", level: 90 },
        { name: "Animation / Cartoons", level: 85 },
        { name: "ADR / Dubbing", level: 80 },
        { name: "Audio Production / DAW", level: 82 },
        { name: "Spanish (Bilingual)", level: 88 },
        { name: "Cold Reading", level: 94 }
      ]
    },
    contact: {
      heading: "Let's Work Together",
      game: "Looking to hire a game developer or collaborate on a project? Reach out.",
      voice: "Need a voice for your game, film, or commercial? Let's make something unforgettable.",
      emailLabel: "Email",
      telegramLabel: "Telegram",
      email: "alex@mercerdev.com",
      telegram: "@alexmercer_vo"
    },
    footer: { rights: "© 2025 Alex Mercer. All rights reserved.", madeWith: "Designed & coded with care." }
  },
  ru: {
    nav: { about: "Обо мне", projects: "Проекты", skills: "Навыки", contact: "Контакт" },
    modeSwitcher: { game: "Геймдев", voice: "Актёр озвучки" },
    hero: {
      game: {
        greeting: "Привет, я",
        name: "Alex Mercer",
        role: "Разработчик игр",
        tagline: "Создаю миры, в которые хочется возвращаться.",
        sub: "Разрабатываю игры, которые захватывают с первых секунд — от прототипов до коммерческих релизов.",
        cta: "Смотреть игры",
        ctaSub: "Перейти к портфолио актёра озвучки →"
      },
      voice: {
        greeting: "Привет, я",
        name: "Alex Mercer",
        role: "Актёр озвучки",
        tagline: "Вдыхаю жизнь в каждого персонажа.",
        sub: "От свирепых злодеев до мягких нарраторов — создаю голоса, которые запоминаются.",
        cta: "Слушать демо",
        ctaSub: "Перейти к портфолио геймдева →"
      }
    },
    about: {
      heading: "Обо мне",
      game: {
        p1: "Разработчик игр с 7-летним опытом. Выпускал проекты на PC, консолях и мобильных платформах. Специализируюсь на геймплейном программировании и системном дизайне.",
        p2: "Работал как в одиночку, так и в командах до 15 человек. Люблю момент, когда механика начинает работать именно так, как задумано.",
        p3: "Открыт к новым коллаборациям, фрилансу и штатным позициям.",
        tag1: "Системный дизайн",
        tag2: "Геймплей-прог.",
        tag3: "Шейдеры / VFX",
        tag4: "Соло и команда"
      },
      voice: {
        p1: "Профессиональный актёр озвучки с диапазоном четыре октавы. Озвучивал персонажей для видеоигр, анимационных сериалов, аудиокниг и рекламных кампаний.",
        p2: "Домашняя студия полностью звукоизолирована для удалённых сессий. Быстро сдаю материал студийного качества.",
        p3: "Доступен для работы с персонажами, нарративом, e-learning и коммерческим VO.",
        tag1: "Широкий диапазон",
        tag2: "Домашняя студия",
        tag3: "Быстрая сдача",
        tag4: "Удалённо"
      }
    },
    projects: { heading: "Проекты", game: oh, voice: ah },
    skills: {
      heading: "Навыки",
      game: [
        { name: "Unity / C#", level: 95 },
        { name: "Unreal Engine 5 / C++", level: 88 },
        { name: "Шейдеры HLSL / GLSL", level: 82 },
        { name: "Godot / GDScript", level: 78 },
        { name: "Мультиплеер Netcode", level: 75 },
        { name: "Blender 3D", level: 70 },
        { name: "Python / Tools", level: 85 },
        { name: "Git", level: 92 }
      ],
      voice: [
        { name: "Игра персонажей", level: 97 },
        { name: "Коммерческий VO", level: 93 },
        { name: "Нарратив", level: 90 },
        { name: "Анимация", level: 85 },
        { name: "ADR / Дублирование", level: 80 },
        { name: "Аудиопродакшн", level: 82 },
        { name: "Испанский (Билингв)", level: 88 },
        { name: "Читка с листа", level: 94 }
      ]
    },
    contact: {
      heading: "Давайте работать вместе",
      game: "Нужен разработчик или хотите сотрудничать? Пишите.",
      voice: "Нужен голос для игры, фильма или рекламы? Свяжитесь со мной.",
      emailLabel: "Email",
      telegramLabel: "Telegram",
      email: "alex@mercerdev.com",
      telegram: "@alexmercer_vo"
    },
    footer: { rights: "© 2025 Alex Mercer. Все права защищены.", madeWith: "Разработано с душой." }
  }
};
function lh({ mode: t, lang: e, onModeChange: n, onLangChange: i }) {
  const s = J[e].nav, [r, o] = Tt(!1), a = [
    { label: s.about, href: "#about" },
    { label: s.projects, href: "#projects" },
    { label: s.skills, href: "#skills" },
    { label: s.contact, href: "#contact" }
  ], l = (c) => {
    document.querySelector(c)?.scrollIntoView({ behavior: "smooth" }), o(!1);
  };
  return /* @__PURE__ */ C(ns, { children: [
    /* @__PURE__ */ C(
      "header",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          fontFamily: "var(--font-body)"
        },
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              style: {
                background: "rgba(8,8,11,0.9)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)"
              },
              children: /* @__PURE__ */ C(
                "div",
                {
                  style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 24px",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  },
                  children: [
                    /* @__PURE__ */ f(
                      "button",
                      {
                        onClick: () => l("#hero"),
                        style: {
                          background: "none",
                          border: "none",
                          fontFamily: "var(--font-display)",
                          fontSize: 18,
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          color: "#f0f0f5",
                          cursor: "pointer",
                          padding: 0,
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ f("span", { style: { color: t === "game" ? "#e53535" : "#2563eb", transition: "color 0.4s" }, children: "AM" })
                      }
                    ),
                    /* @__PURE__ */ f("nav", { style: { display: "flex", alignItems: "center", gap: 28 }, className: "hide-mobile", children: a.map((c) => /* @__PURE__ */ f(
                      "button",
                      {
                        onClick: () => l(c.href),
                        style: {
                          background: "none",
                          border: "none",
                          color: "#6a6a82",
                          fontSize: 13,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          padding: "4px 0",
                          fontFamily: "var(--font-mono)",
                          transition: "color 0.2s"
                        },
                        onMouseEnter: (u) => u.target.style.color = "#f0f0f5",
                        onMouseLeave: (u) => u.target.style.color = "#6a6a82",
                        children: c.label
                      },
                      c.href
                    )) }),
                    /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
                      /* @__PURE__ */ f(
                        "div",
                        {
                          style: {
                            display: "flex",
                            background: "#111118",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 8,
                            overflow: "hidden"
                          },
                          children: ["en", "ru"].map((c) => /* @__PURE__ */ f(
                            "button",
                            {
                              onClick: () => i(c),
                              style: {
                                padding: "6px 14px",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                fontFamily: "var(--font-mono)",
                                transition: "all 0.2s",
                                background: e === c ? t === "game" ? "#e53535" : "#2563eb" : "transparent",
                                color: e === c ? "#fff" : "#55556a"
                              },
                              children: c.toUpperCase()
                            },
                            c
                          ))
                        }
                      ),
                      /* @__PURE__ */ f(
                        "button",
                        {
                          onClick: () => o(!r),
                          style: {
                            background: "none",
                            border: "none",
                            color: "#f0f0f5",
                            cursor: "pointer",
                            padding: 4,
                            display: "none"
                          },
                          className: "show-mobile",
                          children: r ? /* @__PURE__ */ f(Go, { size: 20 }) : /* @__PURE__ */ f(Ju, { size: 20 })
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ C(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "rgba(6,6,9,0.96)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
              },
              children: [
                /* @__PURE__ */ C(
                  "button",
                  {
                    onClick: () => n("game"),
                    style: {
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "13px 0",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      transition: "all 0.3s",
                      background: t === "game" ? "linear-gradient(135deg, rgba(229,53,53,0.18) 0%, rgba(229,53,53,0.06) 100%)" : "transparent",
                      color: t === "game" ? "#e53535" : "#44445a",
                      borderRight: "1px solid rgba(255,255,255,0.05)"
                    },
                    children: [
                      /* @__PURE__ */ f(Fn, { size: 16, style: { transition: "color 0.3s" } }),
                      /* @__PURE__ */ f("span", { className: "hide-tiny", children: J[e].modeSwitcher.game }),
                      t === "game" && /* @__PURE__ */ f(
                        O.div,
                        {
                          layoutId: "mode-indicator",
                          style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            background: "#e53535",
                            boxShadow: "0 0 12px rgba(229,53,53,0.6)"
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ C(
                  "button",
                  {
                    onClick: () => n("voice"),
                    style: {
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "13px 0",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      transition: "all 0.3s",
                      background: t === "voice" ? "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 100%)" : "transparent",
                      color: t === "voice" ? "#2563eb" : "#44445a"
                    },
                    children: [
                      /* @__PURE__ */ f(Bn, { size: 16, style: { transition: "color 0.3s" } }),
                      /* @__PURE__ */ f("span", { className: "hide-tiny", children: J[e].modeSwitcher.voice }),
                      t === "voice" && /* @__PURE__ */ f(
                        O.div,
                        {
                          layoutId: "mode-indicator",
                          style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            background: "#2563eb",
                            boxShadow: "0 0 12px rgba(37,99,235,0.6)"
                          }
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ f(ae, { children: r && /* @__PURE__ */ f(
            O.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.2 },
              style: {
                overflow: "hidden",
                background: "rgba(8,8,11,0.98)",
                borderBottom: "1px solid rgba(255,255,255,0.06)"
              },
              children: /* @__PURE__ */ f("div", { style: { padding: "12px 24px 16px", display: "flex", flexDirection: "column", gap: 2 }, children: a.map((c) => /* @__PURE__ */ f(
                "button",
                {
                  onClick: () => l(c.href),
                  style: {
                    background: "none",
                    border: "none",
                    color: "#c0c0d0",
                    fontSize: 15,
                    textAlign: "left",
                    padding: "10px 0",
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontFamily: "var(--font-body)"
                  },
                  children: c.label
                },
                c.href
              )) })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ f("style", { children: `
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .hide-tiny { display: none !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
          .hide-tiny { display: inline !important; }
        }
      ` })
  ] });
}
const ch = "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=1600&h=900&fit=crop&auto=format", uh = "https://images.unsplash.com/photo-1531651008558-ed1740375b39?w=1600&h=900&fit=crop&auto=format";
function hh({ mode: t, lang: e, onModeSwitch: n }) {
  const i = J[e].hero[t], s = t === "game" ? "#e53535" : "#2563eb", r = t === "game" ? "rgba(229,53,53,0.35)" : "rgba(37,99,235,0.35)", o = t === "game" ? ch : uh, a = W(null);
  it(() => {
    const c = a.current;
    if (!c) return;
    const u = c.getContext("2d");
    if (!u) return;
    let h, d = 0;
    const p = () => {
      const x = c.width, S = c.height;
      if (u.clearRect(0, 0, x, S), t === "game") {
        u.strokeStyle = "rgba(229,53,53,0.07)", u.lineWidth = 1;
        const b = 60;
        for (let g = 0; g < x; g += b)
          u.beginPath(), u.moveTo(g, 0), u.lineTo(g, S), u.stroke();
        for (let g = 0; g < S; g += b)
          u.beginPath(), u.moveTo(0, g), u.lineTo(x, g), u.stroke();
        u.fillStyle = "rgba(229,53,53,0.25)";
        for (let g = 0; g < x; g += b)
          for (let y = 0; y < S; y += b) {
            const A = Math.sin(d * 0.03 + g * 0.02 + y * 0.02) * 0.5 + 0.5;
            u.globalAlpha = A * 0.4, u.beginPath(), u.arc(g, y, 1.5, 0, Math.PI * 2), u.fill();
          }
        u.globalAlpha = 1;
      } else {
        const g = x / 80;
        for (let y = 0; y < 80; y++) {
          const A = Math.sin(d * 0.04 + y * 0.3) * 0.5 + Math.sin(d * 0.07 + y * 0.5) * 0.3 + 0.2, w = A * S * 0.35, k = 0.05 + A * 0.15;
          u.fillStyle = `rgba(37,99,235,${k})`, u.fillRect(y * g, S / 2 - w / 2, g - 2, w);
        }
      }
      d++, h = requestAnimationFrame(p);
    }, m = () => {
      c.width = c.offsetWidth, c.height = c.offsetHeight;
    };
    return m(), window.addEventListener("resize", m), p(), () => {
      cancelAnimationFrame(h), window.removeEventListener("resize", m);
    };
  }, [t]);
  const l = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ C(
    "section",
    {
      id: "hero",
      style: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#08080b"
      },
      children: [
        /* @__PURE__ */ f(ae, { children: /* @__PURE__ */ f(
          O.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 1 },
            style: {
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${o})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.08) saturate(0.4)"
            }
          },
          t + "-bg"
        ) }),
        /* @__PURE__ */ f(
          "canvas",
          {
            ref: a,
            style: { position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            style: {
              position: "absolute",
              top: "20%",
              right: "10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: r,
              filter: "blur(120px)",
              opacity: 0.4,
              transition: "background 0.8s",
              zIndex: 1,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ C(
          "div",
          {
            style: {
              position: "relative",
              zIndex: 2,
              maxWidth: 1200,
              margin: "0 auto",
              padding: "140px 24px 80px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ f(ae, { mode: "wait", children: /* @__PURE__ */ C(
                O.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.5, ease: "easeOut" },
                  children: [
                    /* @__PURE__ */ C(
                      "div",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          background: t === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)",
                          border: `1px solid ${t === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)"}`,
                          borderRadius: 999,
                          padding: "6px 16px",
                          marginBottom: 32
                        },
                        children: [
                          t === "game" ? /* @__PURE__ */ f(Fn, { size: 14, color: s }) : /* @__PURE__ */ f(Bn, { size: 14, color: s }),
                          /* @__PURE__ */ f(
                            "span",
                            {
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: s
                              },
                              children: t === "game" ? "Game Developer" : "Voice Actor"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ f(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 18,
                          color: "#8888a0",
                          marginBottom: 8,
                          letterSpacing: "0.02em"
                        },
                        children: i.greeting
                      }
                    ),
                    /* @__PURE__ */ f(
                      "h1",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(52px, 8vw, 96px)",
                          fontWeight: 800,
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                          marginBottom: 8,
                          color: "#f0f0f5"
                        },
                        children: i.name
                      }
                    ),
                    /* @__PURE__ */ f(
                      "div",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(28px, 4.5vw, 52px)",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
                          marginBottom: 28,
                          color: s,
                          textShadow: `0 0 40px ${r}`,
                          transition: "color 0.5s, text-shadow 0.5s"
                        },
                        children: i.role
                      }
                    ),
                    /* @__PURE__ */ C(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(16px, 2vw, 22px)",
                          fontWeight: 400,
                          color: "#c0c0d0",
                          maxWidth: 580,
                          lineHeight: 1.5,
                          marginBottom: 12,
                          fontStyle: "italic"
                        },
                        children: [
                          '"',
                          i.tagline,
                          '"'
                        ]
                      }
                    ),
                    /* @__PURE__ */ f(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          maxWidth: 520,
                          lineHeight: 1.7,
                          marginBottom: 48,
                          color: "#777790"
                        },
                        children: i.sub
                      }
                    ),
                    /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }, children: [
                      /* @__PURE__ */ f(
                        O.button,
                        {
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.97 },
                          onClick: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
                          style: {
                            background: s,
                            color: "#fff",
                            border: "none",
                            borderRadius: 8,
                            padding: "14px 32px",
                            fontSize: 15,
                            fontWeight: 700,
                            fontFamily: "var(--font-display)",
                            letterSpacing: "0.05em",
                            cursor: "pointer",
                            boxShadow: `0 0 32px ${r}`,
                            transition: "background 0.3s, box-shadow 0.3s"
                          },
                          children: i.cta
                        }
                      ),
                      /* @__PURE__ */ f(
                        "button",
                        {
                          onClick: n,
                          style: {
                            background: "transparent",
                            color: "#8888a0",
                            border: "none",
                            fontSize: 14,
                            fontFamily: "var(--font-body)",
                            cursor: "pointer",
                            textDecoration: "underline",
                            textUnderlineOffset: 4,
                            transition: "color 0.2s",
                            padding: 0
                          },
                          onMouseEnter: (c) => c.target.style.color = "#f0f0f5",
                          onMouseLeave: (c) => c.target.style.color = "#8888a0",
                          children: i.ctaSub
                        }
                      )
                    ] })
                  ]
                },
                t + e
              ) }),
              /* @__PURE__ */ f(
                O.button,
                {
                  onClick: l,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1.2 },
                  style: {
                    position: "absolute",
                    bottom: 40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6
                  },
                  children: /* @__PURE__ */ f(
                    O.div,
                    {
                      animate: { y: [0, 6, 0] },
                      transition: { repeat: 1 / 0, duration: 1.8 },
                      children: /* @__PURE__ */ f(ju, { size: 18, color: "#8888a0" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 200,
              background: "linear-gradient(to bottom, transparent, #08080b)",
              zIndex: 2,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  );
}
const dh = "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=600&h=700&fit=crop&auto=format", fh = "https://images.unsplash.com/photo-1476136236990-838240be4859?w=600&h=700&fit=crop&auto=format";
function ph({ mode: t, lang: e }) {
  const n = J[e].about, i = t === "game" ? n.game : n.voice, s = t === "game" ? "#e53535" : "#2563eb", r = t === "game" ? "rgba(229,53,53,0.12)" : "rgba(37,99,235,0.12)", o = t === "game" ? dh : fh, a = [i.tag1, i.tag2, i.tag3, i.tag4];
  return /* @__PURE__ */ C(
    "section",
    {
      id: "about",
      style: {
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "var(--font-body)"
      },
      children: [
        /* @__PURE__ */ C(
          O.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.6 },
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center"
            },
            className: "about-grid",
            children: [
              /* @__PURE__ */ C("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ C(
                  "div",
                  {
                    style: {
                      position: "relative",
                      borderRadius: 16,
                      overflow: "hidden",
                      aspectRatio: "4/5",
                      background: "#0f0f14"
                    },
                    children: [
                      /* @__PURE__ */ f(
                        "img",
                        {
                          src: o,
                          alt: t === "game" ? "Game development setup" : "Voice recording setup",
                          style: { width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.8)" }
                        }
                      ),
                      /* @__PURE__ */ f(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: s,
                            transition: "background 0.5s"
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ C(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: -20,
                      right: -20,
                      background: s,
                      color: "#fff",
                      borderRadius: 12,
                      padding: "12px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: `0 8px 32px ${r}`,
                      transition: "background 0.5s"
                    },
                    children: [
                      t === "game" ? /* @__PURE__ */ f(Fn, { size: 18 }) : /* @__PURE__ */ f(Bn, { size: 18 }),
                      /* @__PURE__ */ f("span", { style: { fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }, children: t === "game" ? "7 YRS EXP" : "PRO VO" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ C("div", { children: [
                /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }, children: [
                  /* @__PURE__ */ f("div", { style: { width: 32, height: 2, background: s, transition: "background 0.5s" } }),
                  /* @__PURE__ */ f(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: s,
                        transition: "color 0.5s"
                      },
                      children: "About Me"
                    }
                  )
                ] }),
                /* @__PURE__ */ f(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 3.5vw, 44px)",
                      fontWeight: 800,
                      color: "#f0f0f5",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      marginBottom: 28
                    },
                    children: n.heading
                  }
                ),
                /* @__PURE__ */ f("p", { style: { color: "#a0a0b8", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }, children: i.p1 }),
                /* @__PURE__ */ f("p", { style: { color: "#a0a0b8", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }, children: i.p2 }),
                /* @__PURE__ */ f("p", { style: { color: "#a0a0b8", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }, children: i.p3 }),
                /* @__PURE__ */ f("div", { style: { display: "flex", flexWrap: "wrap", gap: 10 }, children: a.map((l) => /* @__PURE__ */ f(
                  "span",
                  {
                    style: {
                      background: r,
                      color: s,
                      border: `1px solid ${s}33`,
                      borderRadius: 6,
                      padding: "6px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.06em",
                      transition: "background 0.3s, color 0.3s"
                    },
                    children: l
                  },
                  l
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f("style", { children: `
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      ` })
      ]
    }
  );
}
const mh = [
  "https://images.unsplash.com/photo-1771014817844-327a14245bd1?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1766601269332-6f012c9e80f9?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=500&fit=crop&auto=format"
], gh = [
  "https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531651008558-ed1740375b39?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1476136236990-838240be4859?w=800&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=500&fit=crop&auto=format"
];
function yh({ size: t = 16 }) {
  return /* @__PURE__ */ f("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ f("path", { d: "M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.492 1.009 2.447-.397.957-1.488 1.41-2.455 1.02zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.662 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" }) });
}
function vh({ size: t = 16 }) {
  return /* @__PURE__ */ f("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ f("path", { d: "M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.13 2.41 2.458 2.41h.024c1.328 0 2.458-1.102 2.458-2.41 0 1.308 1.034 2.41 2.362 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.948.795 12.116.75 12 .75c-.116 0-7.948.045-8.87.588zM8.5 10.09c-.27 0-.53.025-.78.072l-.495.098C5.754 10.554 4.56 11.8 4.56 13.42v5.214c0 2.157 1.743 3.616 3.866 3.616h7.148c2.123 0 3.866-1.459 3.866-3.616V13.42c0-1.62-1.194-2.866-2.665-3.16l-.495-.098a5.028 5.028 0 0 0-.78-.072H8.5zm1.348 2.57h4.304c.483 0 .872.39.872.872v1.74c0 .483-.39.872-.872.872H9.848a.872.872 0 0 1-.872-.872v-1.74c0-.483.39-.872.872-.872z" }) });
}
function bh({ size: t = 16 }) {
  return /* @__PURE__ */ f("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ f("path", { d: "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11.002 10.93c.317.069.645.049.946-.181l13.31-7.55-3.254-3.199z" }) });
}
function xh({ size: t = 16 }) {
  return /* @__PURE__ */ f("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ f("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" }) });
}
function es({ link: t, accent: e }) {
  const n = {
    steam: /* @__PURE__ */ f(yh, { size: 14 }),
    youtube: /* @__PURE__ */ f(Uo, { size: 14 }),
    itch: /* @__PURE__ */ f(vh, { size: 14 }),
    github: /* @__PURE__ */ f(zo, { size: 14 }),
    playmarket: /* @__PURE__ */ f(bh, { size: 14 }),
    tiktok: /* @__PURE__ */ f(xh, { size: 14 })
  }, i = {
    steam: "Steam",
    youtube: "YouTube",
    itch: "itch.io",
    github: "GitHub",
    playmarket: "Play Store",
    tiktok: "TikTok"
  };
  return /* @__PURE__ */ C(
    "a",
    {
      href: t.url,
      target: "_blank",
      rel: "noopener noreferrer",
      title: i[t.type],
      onClick: (s) => s.stopPropagation(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 6,
        padding: "4px 9px",
        color: "#9090aa",
        textDecoration: "none",
        fontSize: 11,
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        letterSpacing: "0.04em",
        flexShrink: 0,
        transition: "color 0.2s, border-color 0.2s, background 0.2s"
      },
      onMouseEnter: (s) => {
        s.currentTarget.style.color = e, s.currentTarget.style.borderColor = e + "66", s.currentTarget.style.background = "rgba(255,255,255,0.08)";
      },
      onMouseLeave: (s) => {
        s.currentTarget.style.color = "#9090aa", s.currentTarget.style.borderColor = "rgba(255,255,255,0.1)", s.currentTarget.style.background = "rgba(255,255,255,0.06)";
      },
      children: [
        n[t.type],
        i[t.type],
        /* @__PURE__ */ f(Hu, { size: 9, style: { opacity: 0.5 } })
      ]
    }
  );
}
function Sh({ mode: t, lang: e }) {
  const n = J[e].projects, i = t === "game" ? n.game : n.voice, s = t === "game" ? mh : gh, r = t === "game" ? "#e53535" : "#2563eb", o = t === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)", a = t === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)", l = W(null), [c, u] = Tt(null), h = W(!1), d = W(0), p = W(0), m = W(!1);
  it(() => {
    u(null);
  }, [t]);
  const x = (v) => {
    l.current?.scrollBy({ left: v === "right" ? 360 : -360, behavior: "smooth" });
  }, S = ue((v) => {
    v.preventDefault(), l.current?.scrollBy({ left: v.deltaY + v.deltaX, behavior: "auto" });
  }, []);
  it(() => {
    const v = l.current;
    if (v)
      return v.addEventListener("wheel", S, { passive: !1 }), () => v.removeEventListener("wheel", S);
  }, [S]);
  const b = (v) => {
    h.current = !0, m.current = !1, d.current = v.clientX, p.current = l.current?.scrollLeft ?? 0, l.current && (l.current.style.cursor = "grabbing");
  }, g = (v) => {
    if (!h.current) return;
    const T = v.clientX - d.current;
    Math.abs(T) > 4 && (m.current = !0), l.current && (l.current.scrollLeft = p.current - T);
  }, y = () => {
    h.current = !1, l.current && (l.current.style.cursor = "grab");
  }, A = (v) => {
    m.current || u((T) => T === v ? null : v);
  }, w = c !== null ? i[c] : null, k = c !== null ? s[c] : null;
  return /* @__PURE__ */ C(
    "section",
    {
      id: "projects",
      style: {
        padding: "100px 0 80px",
        background: "linear-gradient(180deg, #08080b 0%, #0a0a10 50%, #08080b 100%)",
        fontFamily: "var(--font-body)"
      },
      children: [
        /* @__PURE__ */ f("div", { style: { padding: "0 24px", maxWidth: 1200, margin: "0 auto 40px" }, children: /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }, children: [
          /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }, children: [
              /* @__PURE__ */ f("div", { style: { width: 32, height: 2, background: r, transition: "background 0.5s" } }),
              /* @__PURE__ */ f("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: r, transition: "color 0.5s" }, children: t === "game" ? "Games & Tools" : "Voice Work" })
            ] }),
            /* @__PURE__ */ f("h2", { style: { fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, color: "#f0f0f5", letterSpacing: "-0.02em", margin: 0 }, children: n.heading })
          ] }),
          /* @__PURE__ */ f("div", { style: { display: "flex", gap: 8 }, children: ["left", "right"].map((v) => /* @__PURE__ */ f(
            "button",
            {
              onClick: () => x(v),
              style: { width: 38, height: 38, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "#0f0f14", color: "#6a6a82", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" },
              onMouseEnter: (T) => {
                T.currentTarget.style.borderColor = a, T.currentTarget.style.color = r;
              },
              onMouseLeave: (T) => {
                T.currentTarget.style.borderColor = "rgba(255,255,255,0.1)", T.currentTarget.style.color = "#6a6a82";
              },
              children: v === "left" ? /* @__PURE__ */ f(zu, { size: 17 }) : /* @__PURE__ */ f(Uu, { size: 17 })
            },
            v
          )) })
        ] }) }),
        /* @__PURE__ */ C(
          "div",
          {
            ref: l,
            onMouseDown: b,
            onMouseMove: g,
            onMouseUp: y,
            onMouseLeave: y,
            style: {
              display: "flex",
              gap: 18,
              overflowX: "auto",
              paddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
              paddingRight: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
              paddingBottom: 8,
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
              cursor: "grab",
              userSelect: "none"
            },
            children: [
              i.map((v, T) => {
                const V = c === T;
                return /* @__PURE__ */ C(
                  O.article,
                  {
                    onClick: () => A(T),
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: T * 0.07 },
                    style: {
                      flex: "0 0 300px",
                      background: V ? t === "game" ? "rgba(229,53,53,0.07)" : "rgba(37,99,235,0.07)" : "#0f0f14",
                      border: `1px solid ${V ? a : "rgba(255,255,255,0.06)"}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      scrollSnapAlign: "start",
                      cursor: "pointer",
                      transition: "border-color 0.3s, background 0.3s, transform 0.22s, box-shadow 0.3s",
                      boxShadow: V ? `0 0 32px ${t === "game" ? "rgba(229,53,53,0.2)" : "rgba(37,99,235,0.2)"}` : "none"
                    },
                    onMouseEnter: (M) => {
                      V || (M.currentTarget.style.borderColor = a, M.currentTarget.style.transform = "translateY(-4px)");
                    },
                    onMouseLeave: (M) => {
                      V || (M.currentTarget.style.borderColor = "rgba(255,255,255,0.06)", M.currentTarget.style.transform = "translateY(0)");
                    },
                    children: [
                      /* @__PURE__ */ C("div", { style: { height: 150, background: "#1a1a22", overflow: "hidden", position: "relative" }, children: [
                        /* @__PURE__ */ f(
                          "img",
                          {
                            src: s[T],
                            alt: v.title,
                            draggable: !1,
                            style: { width: "100%", height: "100%", objectFit: "cover", filter: `brightness(${V ? 0.65 : 0.45}) saturate(${V ? 0.9 : 0.6})`, transition: "filter 0.4s" }
                          }
                        ),
                        /* @__PURE__ */ f("div", { style: { position: "absolute", top: 10, left: 10, background: "rgba(8,8,11,0.85)", backdropFilter: "blur(6px)", border: `1px solid ${a}`, borderRadius: 4, padding: "3px 8px", fontSize: 9, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: r }, children: v.type }),
                        V && /* @__PURE__ */ f("div", { style: { position: "absolute", top: 10, right: 10, width: 8, height: 8, borderRadius: "50%", background: r, boxShadow: `0 0 8px ${r}` } })
                      ] }),
                      /* @__PURE__ */ C("div", { style: { padding: "16px 18px 18px" }, children: [
                        /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 8 }, children: [
                          /* @__PURE__ */ f("h3", { style: { fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#f0f0f5", letterSpacing: "-0.01em", lineHeight: 1.25, margin: 0, flex: 1 }, children: v.title }),
                          /* @__PURE__ */ f("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }, children: /* @__PURE__ */ f(es, { link: v.link, accent: r }) })
                        ] }),
                        /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 4, marginBottom: 10, color: "#44445a" }, children: [
                          /* @__PURE__ */ f(Nu, { size: 10 }),
                          /* @__PURE__ */ f("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)" }, children: v.year })
                        ] }),
                        /* @__PURE__ */ f("p", { style: { fontSize: 12, color: "#565670", lineHeight: 1.6, marginBottom: 12 }, children: v.desc }),
                        /* @__PURE__ */ f("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 }, children: v.tags.map((M) => /* @__PURE__ */ f("span", { style: { background: o, color: r, borderRadius: 4, padding: "2px 6px", fontSize: 9, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }, children: M }, M)) })
                      ] })
                    ]
                  },
                  v.title + t
                );
              }),
              /* @__PURE__ */ f("div", { style: { flex: "0 0 1px" } })
            ]
          }
        ),
        /* @__PURE__ */ f(ae, { children: w !== null && c !== null && /* @__PURE__ */ f(
          O.div,
          {
            initial: { opacity: 0, y: 32, height: 0 },
            animate: { opacity: 1, y: 0, height: "auto" },
            exit: { opacity: 0, y: 24, height: 0 },
            transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ f(
              "div",
              {
                style: {
                  margin: "24px max(24px, calc((100vw - 1200px) / 2 + 24px)) 0",
                  background: "#0d0d12",
                  border: `1px solid ${a}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: `0 0 60px ${t === "game" ? "rgba(229,53,53,0.12)" : "rgba(37,99,235,0.12)"}`
                },
                children: /* @__PURE__ */ C("div", { style: { display: "grid", gridTemplateColumns: "340px 1fr", minHeight: 380 }, className: "detail-grid", children: [
                  /* @__PURE__ */ C("div", { style: { position: "relative", background: "#1a1a22", overflow: "hidden" }, children: [
                    /* @__PURE__ */ f(
                      "img",
                      {
                        src: k,
                        alt: w.title,
                        style: { width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) saturate(0.7)" }
                      }
                    ),
                    /* @__PURE__ */ f("div", { style: { position: "absolute", inset: 0, background: `linear-gradient(135deg, ${t === "game" ? "rgba(229,53,53,0.25)" : "rgba(37,99,235,0.25)"} 0%, transparent 60%)` } }),
                    /* @__PURE__ */ f("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, #0d0d12, transparent)" } })
                  ] }),
                  /* @__PURE__ */ C("div", { style: { padding: "32px 36px", position: "relative" }, children: [
                    /* @__PURE__ */ f(
                      "button",
                      {
                        onClick: () => u(null),
                        style: {
                          position: "absolute",
                          top: 20,
                          right: 20,
                          width: 32,
                          height: 32,
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 8,
                          color: "#8888a0",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s"
                        },
                        onMouseEnter: (v) => {
                          v.currentTarget.style.color = "#f0f0f5", v.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                        },
                        onMouseLeave: (v) => {
                          v.currentTarget.style.color = "#8888a0", v.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        },
                        children: /* @__PURE__ */ f(Go, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 6, paddingRight: 40 }, children: [
                      /* @__PURE__ */ f("h3", { style: { fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, color: "#f0f0f5", letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }, children: w.title }),
                      /* @__PURE__ */ f("div", { style: { paddingTop: 4 }, children: /* @__PURE__ */ f(es, { link: w.link, accent: r }) })
                    ] }),
                    /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }, children: [
                      /* @__PURE__ */ f("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: r, background: o, border: `1px solid ${a}`, borderRadius: 4, padding: "3px 8px" }, children: w.type }),
                      /* @__PURE__ */ f("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, color: "#44445a" }, children: w.year })
                    ] }),
                    /* @__PURE__ */ f("p", { style: { fontSize: 14, color: "#7070888", lineHeight: 1.7, marginBottom: 20, color: "#6a6a82" }, children: w.desc }),
                    /* @__PURE__ */ C("div", { style: { marginBottom: 20 }, children: [
                      /* @__PURE__ */ f("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: r, marginBottom: 12 }, children: "What I did" }),
                      /* @__PURE__ */ f("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }, children: w.details.map((v, T) => /* @__PURE__ */ C(
                        O.li,
                        {
                          initial: { opacity: 0, x: -10 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: 0.1 + T * 0.05 },
                          style: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#a0a0b8", lineHeight: 1.5 },
                          children: [
                            /* @__PURE__ */ f("span", { style: { color: r, flexShrink: 0, marginTop: 2, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }, children: "—" }),
                            v
                          ]
                        },
                        T
                      )) })
                    ] }),
                    /* @__PURE__ */ f("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: w.tags.map((v) => /* @__PURE__ */ f("span", { style: { background: o, color: r, borderRadius: 4, padding: "3px 8px", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }, children: v }, v)) })
                  ] })
                ] })
              }
            )
          },
          c
        ) }),
        /* @__PURE__ */ f("style", { children: `
        div[style*="grab"]::-webkit-scrollbar { display: none; }
        @media (max-width: 720px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .detail-grid > div:first-child { height: 200px !important; }
        }
      ` })
      ]
    }
  );
}
function Th({ mode: t, lang: e }) {
  const n = J[e].skills, i = t === "game" ? n.game : n.voice, s = t === "game" ? "#e53535" : "#2563eb", r = t === "game" ? "rgba(229,53,53,0.15)" : "rgba(37,99,235,0.15)";
  return /* @__PURE__ */ C(
    "section",
    {
      id: "skills",
      style: {
        padding: "80px 24px 100px",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "var(--font-body)"
      },
      children: [
        /* @__PURE__ */ C(
          O.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.4 },
            style: { marginBottom: 48 },
            children: [
              /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }, children: [
                /* @__PURE__ */ f("div", { style: { width: 32, height: 2, background: s, transition: "background 0.5s" } }),
                /* @__PURE__ */ f("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: s, transition: "color 0.5s" }, children: t === "game" ? "Tech Stack" : "Capabilities" })
              ] }),
              /* @__PURE__ */ f("h2", { style: { fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, color: "#f0f0f5", letterSpacing: "-0.02em", margin: 0 }, children: n.heading })
            ]
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px 64px" },
            className: "skills-grid",
            children: i.map((o, a) => /* @__PURE__ */ C(
              O.div,
              {
                initial: { opacity: 0, x: -16 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.35, delay: a * 0.06 },
                children: [
                  /* @__PURE__ */ C("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 }, children: [
                    /* @__PURE__ */ f("span", { style: { fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#c0c0d8", letterSpacing: "0.01em" }, children: o.name }),
                    /* @__PURE__ */ C("span", { style: { fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: s, transition: "color 0.5s" }, children: [
                      o.level,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ f("div", { style: { height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }, children: /* @__PURE__ */ f(
                    O.div,
                    {
                      initial: { width: 0 },
                      whileInView: { width: `${o.level}%` },
                      viewport: { once: !0 },
                      transition: { duration: 0.85, delay: a * 0.06 + 0.15, ease: "easeOut" },
                      style: {
                        height: "100%",
                        background: `linear-gradient(90deg, ${s}, ${s}99)`,
                        borderRadius: 999,
                        boxShadow: `0 0 8px ${r}`,
                        transition: "background 0.5s, box-shadow 0.5s"
                      }
                    }
                  ) })
                ]
              },
              o.name + t
            ))
          }
        ),
        /* @__PURE__ */ f("style", { children: `
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      ` })
      ]
    }
  );
}
function wh({ size: t = 20 }) {
  return /* @__PURE__ */ f("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
    "path",
    {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.01c-.12.57-.46.7-.93.44l-2.57-1.9-1.24 1.19c-.14.14-.26.26-.53.26l.19-2.66 4.83-4.36c.21-.19-.05-.29-.32-.1L8.29 14.58 5.76 13.8c-.55-.17-.56-.55.12-.82l8.95-3.45c.46-.16.86.11.81.27z",
      fill: "currentColor"
    }
  ) });
}
function Ch({ mode: t, lang: e }) {
  const n = J[e].contact, i = t === "game" ? "#e53535" : "#2563eb", s = t === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)", r = t === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)", o = t === "game" ? "rgba(229,53,53,0.25)" : "rgba(37,99,235,0.25)", a = [
    {
      label: n.emailLabel,
      value: n.email,
      href: `mailto:${n.email}`,
      icon: /* @__PURE__ */ f(qu, { size: 22 }),
      display: n.email
    },
    {
      label: n.telegramLabel,
      value: n.telegram,
      href: `https://t.me/${n.telegram.replace("@", "")}`,
      icon: /* @__PURE__ */ f(wh, { size: 22 }),
      display: n.telegram
    }
  ];
  return /* @__PURE__ */ f(
    "section",
    {
      id: "contact",
      style: {
        padding: "80px 24px 120px",
        fontFamily: "var(--font-body)"
      },
      children: /* @__PURE__ */ f("div", { style: { maxWidth: 700, margin: "0 auto" }, children: /* @__PURE__ */ C(
        O.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }, children: [
              /* @__PURE__ */ f("div", { style: { width: 32, height: 2, background: i, transition: "background 0.5s" } }),
              /* @__PURE__ */ f(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: i,
                    transition: "color 0.5s"
                  },
                  children: "Contact"
                }
              )
            ] }),
            /* @__PURE__ */ f(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  fontWeight: 800,
                  color: "#f0f0f5",
                  letterSpacing: "-0.02em",
                  marginBottom: 14
                },
                children: n.heading
              }
            ),
            /* @__PURE__ */ f("p", { style: { color: "#6a6a82", fontSize: 15, lineHeight: 1.7, marginBottom: 48 }, children: t === "game" ? n.game : n.voice }),
            /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: a.map((l) => /* @__PURE__ */ C(
              O.a,
              {
                href: l.href,
                target: l.href.startsWith("http") ? "_blank" : void 0,
                rel: "noopener noreferrer",
                whileHover: { x: 6 },
                transition: { type: "spring", stiffness: 400, damping: 25 },
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#0f0f14",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "22px 28px",
                  textDecoration: "none",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                  cursor: "pointer"
                },
                onMouseEnter: (c) => {
                  c.currentTarget.style.borderColor = r, c.currentTarget.style.boxShadow = `0 0 32px ${o}`;
                },
                onMouseLeave: (c) => {
                  c.currentTarget.style.borderColor = "rgba(255,255,255,0.07)", c.currentTarget.style.boxShadow = "none";
                },
                children: [
                  /* @__PURE__ */ f(
                    "div",
                    {
                      style: {
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: s,
                        border: `1px solid ${r}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: i,
                        flexShrink: 0,
                        transition: "background 0.3s, border-color 0.3s, color 0.3s"
                      },
                      children: l.icon
                    }
                  ),
                  /* @__PURE__ */ C("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ f(
                      "div",
                      {
                        style: {
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#44445a",
                          marginBottom: 4
                        },
                        children: l.label
                      }
                    ),
                    /* @__PURE__ */ f(
                      "div",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: 18,
                          fontWeight: 600,
                          color: "#d0d0e8",
                          letterSpacing: "0.01em",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: l.display
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f(eh, { size: 16, color: i, style: { flexShrink: 0, opacity: 0.7 } })
                ]
              },
              l.label
            )) })
          ]
        }
      ) })
    }
  );
}
function Ph({ mode: t, lang: e }) {
  const n = J[e].footer, i = t === "game" ? "#e53535" : "#2563eb";
  return /* @__PURE__ */ f(
    "footer",
    {
      style: {
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "36px 24px",
        fontFamily: "var(--font-body)"
      },
      children: /* @__PURE__ */ C(
        "div",
        {
          style: {
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20
          },
          children: [
            /* @__PURE__ */ C("div", { children: [
              /* @__PURE__ */ C(
                "div",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#f0f0f5",
                    marginBottom: 4
                  },
                  children: [
                    /* @__PURE__ */ f("span", { style: { color: i, transition: "color 0.5s" }, children: "AM" }),
                    /* @__PURE__ */ f("span", { style: { color: "#333344", margin: "0 8px" }, children: "—" }),
                    "Alex Mercer"
                  ]
                }
              ),
              /* @__PURE__ */ f("p", { style: { fontSize: 11, color: "#33334a", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }, children: n.madeWith })
            ] }),
            /* @__PURE__ */ f("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
              { icon: zo, label: "GitHub" },
              { icon: Uo, label: "YouTube" }
            ].map(({ icon: s, label: r }) => /* @__PURE__ */ f(
              "button",
              {
                "aria-label": r,
                style: {
                  background: "#0f0f14",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: "8px 10px",
                  color: "#44445a",
                  cursor: "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                onMouseEnter: (o) => {
                  o.currentTarget.style.color = i, o.currentTarget.style.borderColor = i + "55";
                },
                onMouseLeave: (o) => {
                  o.currentTarget.style.color = "#44445a", o.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                },
                children: /* @__PURE__ */ f(s, { size: 16 })
              },
              r
            )) }),
            /* @__PURE__ */ f("p", { style: { fontSize: 11, color: "#2a2a3a", fontFamily: "var(--font-mono)" }, children: n.rights })
          ]
        }
      )
    }
  );
}
function Ah() {
  const [t, e] = Tt("game"), [n, i] = Tt("en");
  it(() => {
    const a = localStorage.getItem("portfolio-mode"), l = localStorage.getItem("portfolio-lang");
    a && e(a), l && i(l);
  }, []);
  const s = (a) => {
    e(a), localStorage.setItem("portfolio-mode", a);
  };
  return /* @__PURE__ */ C(
    "div",
    {
      "data-mode": t,
      style: {
        minHeight: "100vh",
        background: "#08080b",
        color: "#f0f0f5",
        fontFamily: "var(--font-body)",
        scrollBehavior: "smooth",
        overflowX: "hidden"
      },
      children: [
        /* @__PURE__ */ f(
          lh,
          {
            mode: t,
            lang: n,
            onModeChange: s,
            onLangChange: (a) => {
              i(a), localStorage.setItem("portfolio-lang", a);
            }
          }
        ),
        /* @__PURE__ */ C("main", { children: [
          /* @__PURE__ */ f(hh, { mode: t, lang: n, onModeSwitch: () => s(t === "game" ? "voice" : "game") }),
          /* @__PURE__ */ f(ph, { mode: t, lang: n }),
          /* @__PURE__ */ f(Sh, { mode: t, lang: n }),
          /* @__PURE__ */ f(Th, { mode: t, lang: n }),
          /* @__PURE__ */ f(Ch, { mode: t, lang: n })
        ] }),
        /* @__PURE__ */ f(Ph, { mode: t, lang: n }),
        /* @__PURE__ */ f("style", { children: `
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
        }
        *::-webkit-scrollbar {
          width: 4px;
        }
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.08);
          border-radius: 99px;
        }
        html {
          font-family: 'DM Sans', sans-serif;
        }
      ` })
      ]
    }
  );
}
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ah
}, Symbol.toStringTag, { value: "Module" }));
export {
  Mh as Code0_8
};
