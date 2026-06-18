const Sd = () => Promise.resolve().then(() => bd), Go = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: Uo, jsx: p, jsxs: S } = Go;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function ns(e) {
  const t = e?.props?._fgT, n = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && n;
}
function Ee(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function is(e) {
  const { _fgT: t, _fgS: n, _fgB: i, _fgD: s, ...r } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...r,
    key: e.key
  }, r.children);
}
function qe(e) {
  return ns(e) ? is(e) : Ee(e) ? e.props.children : e;
}
const De = globalThis.__GLOBALS__.React.Children, $o = {
  map(e, t, n) {
    return De.map(e, (i, s) => {
      const r = qe(i);
      return Ee(i) ? null : t.call(n, r, s);
    });
  },
  forEach(e, t, n) {
    De.forEach(e, (i, s) => {
      if (Ee(i))
        return;
      const r = qe(i);
      t.call(n, r, s);
    });
  },
  count(e) {
    let t = 0;
    return De.forEach(e, (n) => {
      Ee(n) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return De.forEach(e, (n) => {
      Ee(n) || t.push(qe(n));
    }), t;
  },
  only(e) {
    const t = De.only(e);
    return qe(t);
  }
}, gt = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Ho(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let n = !1;
  for (let s = 0; s < gt.length; s++)
    if (gt[s] in e) {
      n = !0;
      break;
    }
  if (!n) return e;
  const i = {};
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    gt.indexOf(r) === -1 && (i[r] = e[r]);
  }
  return i;
}
const _n = globalThis.__GLOBALS__.React.cloneElement, Ko = (e, ...t) => {
  if (ns(e)) {
    const n = is(e), i = t[0];
    return i != null && typeof i == "object" && (t = [
      Ho(i),
      ...t.slice(1)
    ]), _n(n, ...t);
  }
  return _n(e, ...t);
};
({
  ...globalThis.__GLOBALS__.React
});
const { Component: ss, createContext: Pe, createElement: it, createFactory: Td, createRef: wd, forwardRef: Qt, Fragment: os, isValidElement: qo, lazy: Pd, memo: Ad, Profiler: Cd, PureComponent: Vd, startTransition: Md, StrictMode: Dd, Suspense: kd, use: Ed, useCallback: en, useContext: j, useDebugValue: Rd, useDeferredValue: Ld, useEffect: Ae, useId: tn, useImperativeHandle: Fd, useInsertionEffect: rs, useLayoutEffect: Xo, useMemo: fe, useReducer: Id, useRef: J, useState: ne, useSyncExternalStore: jd, useTransition: Bd, version: Od, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Nd } = globalThis.__GLOBALS__.React, nn = Pe({});
function sn(e) {
  const t = J(null);
  return t.current === null && (t.current = e()), t.current;
}
const on = typeof window < "u", as = on ? Xo : Ae, ht = /* @__PURE__ */ Pe(null);
function rn(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function an(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Z = (e, t, n) => n > t ? t : n < e ? e : n;
let ln = () => {
};
const Q = {}, ls = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function cs(e) {
  return typeof e == "object" && e !== null;
}
const us = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function cn(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const K = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Yo = (e, t) => (n) => t(e(n)), Ue = (...e) => e.reduce(Yo), Oe = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const i = t - e;
  return i === 0 ? 1 : (n - e) / i;
};
class un {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return rn(this.subscriptions, t), () => an(this.subscriptions, t);
  }
  notify(t, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, i);
      else
        for (let r = 0; r < s; r++) {
          const o = this.subscriptions[r];
          o && o(t, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const X = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, H = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function ds(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const hs = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Jo = 1e-7, Zo = 12;
function Qo(e, t, n, i, s) {
  let r, o, a = 0;
  do
    o = t + (n - t) / 2, r = hs(o, i, s) - e, r > 0 ? n = o : t = o;
  while (Math.abs(r) > Jo && ++a < Zo);
  return o;
}
function $e(e, t, n, i) {
  if (e === t && n === i)
    return K;
  const s = (r) => Qo(r, 0, 1, e, n);
  return (r) => r === 0 || r === 1 ? r : hs(s(r), t, i);
}
const fs = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ps = (e) => (t) => 1 - e(1 - t), ms = /* @__PURE__ */ $e(0.33, 1.53, 0.69, 0.99), dn = /* @__PURE__ */ ps(ms), gs = /* @__PURE__ */ fs(dn), ys = (e) => (e *= 2) < 1 ? 0.5 * dn(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), hn = (e) => 1 - Math.sin(Math.acos(e)), vs = ps(hn), bs = fs(hn), er = /* @__PURE__ */ $e(0.42, 0, 1, 1), tr = /* @__PURE__ */ $e(0, 0, 0.58, 1), xs = /* @__PURE__ */ $e(0.42, 0, 0.58, 1), nr = (e) => Array.isArray(e) && typeof e[0] != "number", Ss = (e) => Array.isArray(e) && typeof e[0] == "number", ir = {
  linear: K,
  easeIn: er,
  easeInOut: xs,
  easeOut: tr,
  circIn: hn,
  circInOut: bs,
  circOut: vs,
  backIn: dn,
  backInOut: gs,
  backOut: ms,
  anticipate: ys
}, sr = (e) => typeof e == "string", zn = (e) => {
  if (Ss(e)) {
    ln(e.length === 4);
    const [t, n, i, s] = e;
    return $e(t, n, i, s);
  } else if (sr(e))
    return ir[e];
  return e;
}, Xe = [
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
function or(e, t) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, r = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    o.has(c) && (u.schedule(c), e()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, d = !1) => {
      const m = d && s ? n : i;
      return h && o.add(c), m.has(c) || m.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      i.delete(c), o.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, s) {
        r = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, r && (r = !1, u.process(c));
    }
  };
  return u;
}
const rr = 40;
function Ts(e, t) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Xe.reduce((y, A) => (y[A] = or(r), y), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: d, render: f, postRender: m } = o, b = () => {
    const y = Q.useManualTiming ? s.timestamp : performance.now();
    n = !1, Q.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(y - s.timestamp, rr), 1)), s.timestamp = y, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), f.process(s), m.process(s), s.isProcessing = !1, n && t && (i = !1, e(b));
  }, x = () => {
    n = !0, i = !0, s.isProcessing || e(b);
  };
  return { schedule: Xe.reduce((y, A) => {
    const T = o[A];
    return y[A] = (C, V = !1, P = !1) => (n || x(), T.schedule(C, V, P)), y;
  }, {}), cancel: (y) => {
    for (let A = 0; A < Xe.length; A++)
      o[Xe[A]].cancel(y);
  }, state: s, steps: o };
}
const { schedule: M, cancel: ie, state: I, steps: yt } = /* @__PURE__ */ Ts(typeof requestAnimationFrame < "u" ? requestAnimationFrame : K, !0);
let Qe;
function ar() {
  Qe = void 0;
}
const z = {
  now: () => (Qe === void 0 && z.set(I.isProcessing || Q.useManualTiming ? I.timestamp : performance.now()), Qe),
  set: (e) => {
    Qe = e, queueMicrotask(ar);
  }
}, ws = (e) => (t) => typeof t == "string" && t.startsWith(e), fn = /* @__PURE__ */ ws("--"), lr = /* @__PURE__ */ ws("var(--"), pn = (e) => lr(e) ? cr.test(e.split("/*")[0].trim()) : !1, cr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ce = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ne = {
  ...Ce,
  transform: (e) => Z(0, 1, e)
}, Ye = {
  ...Ce,
  default: 1
}, Le = (e) => Math.round(e * 1e5) / 1e5, mn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ur(e) {
  return e == null;
}
const dr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, gn = (e, t) => (n) => !!(typeof n == "string" && dr.test(n) && n.startsWith(e) || t && !ur(n) && Object.prototype.hasOwnProperty.call(n, t)), Ps = (e, t, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, r, o, a] = i.match(mn);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, hr = (e) => Z(0, 255, e), vt = {
  ...Ce,
  transform: (e) => Math.round(hr(e))
}, ce = {
  test: /* @__PURE__ */ gn("rgb", "red"),
  parse: /* @__PURE__ */ Ps("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) => "rgba(" + vt.transform(e) + ", " + vt.transform(t) + ", " + vt.transform(n) + ", " + Le(Ne.transform(i)) + ")"
};
function fr(e) {
  let t = "", n = "", i = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), i = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), i = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, i += i, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Rt = {
  test: /* @__PURE__ */ gn("#"),
  parse: fr,
  transform: ce.transform
}, He = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), te = /* @__PURE__ */ He("deg"), Y = /* @__PURE__ */ He("%"), w = /* @__PURE__ */ He("px"), pr = /* @__PURE__ */ He("vh"), mr = /* @__PURE__ */ He("vw"), Wn = {
  ...Y,
  parse: (e) => Y.parse(e) / 100,
  transform: (e) => Y.transform(e * 100)
}, ge = {
  test: /* @__PURE__ */ gn("hsl", "hue"),
  parse: /* @__PURE__ */ Ps("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(e) + ", " + Y.transform(Le(t)) + ", " + Y.transform(Le(n)) + ", " + Le(Ne.transform(i)) + ")"
}, R = {
  test: (e) => ce.test(e) || Rt.test(e) || ge.test(e),
  parse: (e) => ce.test(e) ? ce.parse(e) : ge.test(e) ? ge.parse(e) : Rt.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ce.transform(e) : ge.transform(e),
  getAnimatableNone: (e) => {
    const t = R.parse(e);
    return t.alpha = 0, R.transform(t);
  }
}, gr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function yr(e) {
  return isNaN(e) && typeof e == "string" && (e.match(mn)?.length || 0) + (e.match(gr)?.length || 0) > 0;
}
const As = "number", Cs = "color", vr = "var", br = "var(", Gn = "${}", xr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _e(e) {
  const t = e.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let r = 0;
  const a = t.replace(xr, (l) => (R.test(l) ? (i.color.push(r), s.push(Cs), n.push(R.parse(l))) : l.startsWith(br) ? (i.var.push(r), s.push(vr), n.push(l)) : (i.number.push(r), s.push(As), n.push(parseFloat(l))), ++r, Gn)).split(Gn);
  return { values: n, split: a, indexes: i, types: s };
}
function Vs(e) {
  return _e(e).values;
}
function Ms(e) {
  const { split: t, types: n } = _e(e), i = t.length;
  return (s) => {
    let r = "";
    for (let o = 0; o < i; o++)
      if (r += t[o], s[o] !== void 0) {
        const a = n[o];
        a === As ? r += Le(s[o]) : a === Cs ? r += R.transform(s[o]) : r += s[o];
      }
    return r;
  };
}
const Sr = (e) => typeof e == "number" ? 0 : R.test(e) ? R.getAnimatableNone(e) : e;
function Tr(e) {
  const t = Vs(e);
  return Ms(e)(t.map(Sr));
}
const se = {
  test: yr,
  parse: Vs,
  createTransformer: Ms,
  getAnimatableNone: Tr
};
function bt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function wr({ hue: e, saturation: t, lightness: n, alpha: i }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, r = 0, o = 0;
  if (!t)
    s = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    s = bt(l, a, e + 1 / 3), r = bt(l, a, e), o = bt(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: i
  };
}
function st(e, t) {
  return (n) => n > 0 ? t : e;
}
const D = (e, t, n) => e + (t - e) * n, xt = (e, t, n) => {
  const i = e * e, s = n * (t * t - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, Pr = [Rt, ce, ge], Ar = (e) => Pr.find((t) => t.test(e));
function Un(e) {
  const t = Ar(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === ge && (n = wr(n)), n;
}
const $n = (e, t) => {
  const n = Un(e), i = Un(t);
  if (!n || !i)
    return st(e, t);
  const s = { ...n };
  return (r) => (s.red = xt(n.red, i.red, r), s.green = xt(n.green, i.green, r), s.blue = xt(n.blue, i.blue, r), s.alpha = D(n.alpha, i.alpha, r), ce.transform(s));
}, Lt = /* @__PURE__ */ new Set(["none", "hidden"]);
function Cr(e, t) {
  return Lt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Vr(e, t) {
  return (n) => D(e, t, n);
}
function yn(e) {
  return typeof e == "number" ? Vr : typeof e == "string" ? pn(e) ? st : R.test(e) ? $n : kr : Array.isArray(e) ? Ds : typeof e == "object" ? R.test(e) ? $n : Mr : st;
}
function Ds(e, t) {
  const n = [...e], i = n.length, s = e.map((r, o) => yn(r)(r, t[o]));
  return (r) => {
    for (let o = 0; o < i; o++)
      n[o] = s[o](r);
    return n;
  };
}
function Mr(e, t) {
  const n = { ...e, ...t }, i = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (i[s] = yn(e[s])(e[s], t[s]));
  return (s) => {
    for (const r in i)
      n[r] = i[r](s);
    return n;
  };
}
function Dr(e, t) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const r = t.types[s], o = e.indexes[r][i[r]], a = e.values[o] ?? 0;
    n[s] = a, i[r]++;
  }
  return n;
}
const kr = (e, t) => {
  const n = se.createTransformer(t), i = _e(e), s = _e(t);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Lt.has(e) && !s.values.length || Lt.has(t) && !i.values.length ? Cr(e, t) : Ue(Ds(Dr(i, s), s.values), n) : st(e, t);
};
function ks(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? D(e, t, n) : yn(e)(e, t);
}
const Er = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => M.update(t, n),
    stop: () => ie(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => I.isProcessing ? I.timestamp : z.now()
  };
}, Es = (e, t, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(t / n), 2);
  for (let r = 0; r < s; r++)
    i += Math.round(e(r / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, ot = 2e4;
function vn(e) {
  let t = 0;
  const n = 50;
  let i = e.next(t);
  for (; !i.done && t < ot; )
    t += n, i = e.next(t);
  return t >= ot ? 1 / 0 : t;
}
function Rr(e, t = 100, n) {
  const i = n({ ...e, keyframes: [0, t] }), s = Math.min(vn(i), ot);
  return {
    type: "keyframes",
    ease: (r) => i.next(s * r).value / t,
    duration: /* @__PURE__ */ H(s)
  };
}
const Lr = 5;
function Rs(e, t, n) {
  const i = Math.max(t - Lr, 0);
  return ds(n - e(i), t - i);
}
const k = {
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
}, St = 1e-3;
function Fr({ duration: e = k.duration, bounce: t = k.bounce, velocity: n = k.velocity, mass: i = k.mass }) {
  let s, r, o = 1 - t;
  o = Z(k.minDamping, k.maxDamping, o), e = Z(k.minDuration, k.maxDuration, /* @__PURE__ */ H(e)), o < 1 ? (s = (u) => {
    const c = u * o, h = c * e, d = c - n, f = Ft(u, o), m = Math.exp(-h);
    return St - d / f * m;
  }, r = (u) => {
    const h = u * o * e, d = h * n + n, f = Math.pow(o, 2) * Math.pow(u, 2) * e, m = Math.exp(-h), b = Ft(Math.pow(u, 2), o);
    return (-s(u) + St > 0 ? -1 : 1) * ((d - f) * m) / b;
  }) : (s = (u) => {
    const c = Math.exp(-u * e), h = (u - n) * e + 1;
    return -St + c * h;
  }, r = (u) => {
    const c = Math.exp(-u * e), h = (n - u) * (e * e);
    return c * h;
  });
  const a = 5 / e, l = jr(s, r, a);
  if (e = /* @__PURE__ */ X(e), isNaN(l))
    return {
      stiffness: k.stiffness,
      damping: k.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(i * u),
      duration: e
    };
  }
}
const Ir = 12;
function jr(e, t, n) {
  let i = n;
  for (let s = 1; s < Ir; s++)
    i = i - e(i) / t(i);
  return i;
}
function Ft(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Br = ["duration", "bounce"], Or = ["stiffness", "damping", "mass"];
function Hn(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Nr(e) {
  let t = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Hn(e, Or) && Hn(e, Br))
    if (e.visualDuration) {
      const n = e.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, r = 2 * Z(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: k.mass,
        stiffness: s,
        damping: r
      };
    } else {
      const n = Fr(e);
      t = {
        ...t,
        ...n,
        mass: k.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function rt(e = k.visualDuration, t = k.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: i, restDelta: s } = n;
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: f } = Nr({
    ...n,
    velocity: -/* @__PURE__ */ H(n.velocity || 0)
  }), m = d || 0, b = u / (2 * Math.sqrt(l * c)), x = o - r, v = /* @__PURE__ */ H(Math.sqrt(l / c)), g = Math.abs(x) < 5;
  i || (i = g ? k.restSpeed.granular : k.restSpeed.default), s || (s = g ? k.restDelta.granular : k.restDelta.default);
  let y;
  if (b < 1) {
    const T = Ft(v, b);
    y = (C) => {
      const V = Math.exp(-b * v * C);
      return o - V * ((m + b * v * x) / T * Math.sin(T * C) + x * Math.cos(T * C));
    };
  } else if (b === 1)
    y = (T) => o - Math.exp(-v * T) * (x + (m + v * x) * T);
  else {
    const T = v * Math.sqrt(b * b - 1);
    y = (C) => {
      const V = Math.exp(-b * v * C), P = Math.min(T * C, 300);
      return o - V * ((m + b * v * x) * Math.sinh(P) + T * x * Math.cosh(P)) / T;
    };
  }
  const A = {
    calculatedDuration: f && h || null,
    next: (T) => {
      const C = y(T);
      if (f)
        a.done = T >= h;
      else {
        let V = T === 0 ? m : 0;
        b < 1 && (V = T === 0 ? /* @__PURE__ */ X(m) : Rs(y, T, C));
        const P = Math.abs(V) <= i, L = Math.abs(o - C) <= s;
        a.done = P && L;
      }
      return a.value = a.done ? o : C, a;
    },
    toString: () => {
      const T = Math.min(vn(A), ot), C = Es((V) => A.next(T * V).value, T, 30);
      return T + "ms " + C;
    },
    toTransition: () => {
    }
  };
  return A;
}
rt.applyToOptions = (e) => {
  const t = Rr(e, 100, rt);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ X(t.duration), e.type = "keyframes", e;
};
function It({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = e[0], d = {
    done: !1,
    value: h
  }, f = (P) => a !== void 0 && P < a || l !== void 0 && P > l, m = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let b = n * t;
  const x = h + b, v = o === void 0 ? x : o(x);
  v !== x && (b = v - h);
  const g = (P) => -b * Math.exp(-P / i), y = (P) => v + g(P), A = (P) => {
    const L = g(P), N = y(P);
    d.done = Math.abs(L) <= u, d.value = d.done ? v : N;
  };
  let T, C;
  const V = (P) => {
    f(d.value) && (T = P, C = rt({
      keyframes: [d.value, m(d.value)],
      velocity: Rs(y, P, d.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: r,
      restDelta: u,
      restSpeed: c
    }));
  };
  return V(0), {
    calculatedDuration: null,
    next: (P) => {
      let L = !1;
      return !C && T === void 0 && (L = !0, A(P), V(P)), T !== void 0 && P >= T ? C.next(P - T) : (!L && A(P), d);
    }
  };
}
function _r(e, t, n) {
  const i = [], s = n || Q.mix || ks, r = e.length - 1;
  for (let o = 0; o < r; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || K : t;
      a = Ue(l, a);
    }
    i.push(a);
  }
  return i;
}
function zr(e, t, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const r = e.length;
  if (ln(r === t.length), r === 1)
    return () => t[0];
  if (r === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[r - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = _r(t, i, s), l = a.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(c < e[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ Oe(e[h], e[h + 1], c);
    return a[h](d);
  };
  return n ? (c) => u(Z(e[0], e[r - 1], c)) : u;
}
function Wr(e, t) {
  const n = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const s = /* @__PURE__ */ Oe(0, t, i);
    e.push(D(n, 1, s));
  }
}
function Gr(e) {
  const t = [0];
  return Wr(t, e.length - 1), t;
}
function Ur(e, t) {
  return e.map((n) => n * t);
}
function $r(e, t) {
  return e.map(() => t || xs).splice(0, e.length - 1);
}
function Fe({ duration: e = 300, keyframes: t, times: n, ease: i = "easeInOut" }) {
  const s = nr(i) ? i.map(zn) : zn(i), r = {
    done: !1,
    value: t[0]
  }, o = Ur(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Gr(t),
    e
  ), a = zr(o, t, {
    ease: Array.isArray(s) ? s : $r(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (r.value = a(l), r.done = l >= e, r)
  };
}
const Hr = (e) => e !== null;
function bn(e, { repeat: t, repeatType: n = "loop" }, i, s = 1) {
  const r = e.filter(Hr), a = s < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : r.length - 1;
  return !a || i === void 0 ? r[a] : i;
}
const Kr = {
  decay: It,
  inertia: It,
  tween: Fe,
  keyframes: Fe,
  spring: rt
};
function Ls(e) {
  typeof e.type == "string" && (e.type = Kr[e.type]);
}
class xn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
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
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const qr = (e) => e / 100;
class Sn extends xn {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== z.now() && this.tick(z.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Ls(t);
    const { type: n = Fe, repeat: i = 0, repeatDelay: s = 0, repeatType: r, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const l = n || Fe;
    l !== Fe && typeof a[0] != "number" && (this.mixKeyframes = Ue(qr, ks(a[0], a[1])), a = [0, 100]);
    const u = l({ ...t, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = vn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: d, repeatDelay: f, type: m, onUpdate: b, finalKeyframe: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), g = this.playbackSpeed >= 0 ? v < 0 : v > s;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let y = this.currentTime, A = i;
    if (h) {
      const P = Math.min(this.currentTime, s) / a;
      let L = Math.floor(P), N = P % 1;
      !N && P >= 1 && (N = 1), N === 1 && L--, L = Math.min(L, h + 1), !!(L % 2) && (d === "reverse" ? (N = 1 - N, f && (N -= f / a)) : d === "mirror" && (A = o)), y = Z(0, 1, N) * a;
    }
    const T = g ? { done: !1, value: c[0] } : A.next(y);
    r && (T.value = r(T.value));
    let { done: C } = T;
    !g && l !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const V = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return V && m !== It && (T.value = bn(c, this.options, x, this.speed)), b && b(T.value), V && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ H(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ H(t);
  }
  get time() {
    return /* @__PURE__ */ H(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ X(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(z.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ H(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Er, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), this.options.onPlay?.();
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
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function Xr(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const ue = (e) => e * 180 / Math.PI, jt = (e) => {
  const t = ue(Math.atan2(e[1], e[0]));
  return Bt(t);
}, Yr = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: jt,
  rotateZ: jt,
  skewX: (e) => ue(Math.atan(e[1])),
  skewY: (e) => ue(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Bt = (e) => (e = e % 360, e < 0 && (e += 360), e), Kn = jt, qn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Xn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Jr = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: qn,
  scaleY: Xn,
  scale: (e) => (qn(e) + Xn(e)) / 2,
  rotateX: (e) => Bt(ue(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Bt(ue(Math.atan2(-e[2], e[0]))),
  rotateZ: Kn,
  rotate: Kn,
  skewX: (e) => ue(Math.atan(e[4])),
  skewY: (e) => ue(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ot(e) {
  return e.includes("scale") ? 1 : 0;
}
function Nt(e, t) {
  if (!e || e === "none")
    return Ot(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Jr, s = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Yr, s = a;
  }
  if (!s)
    return Ot(t);
  const r = i[t], o = s[1].split(",").map(Qr);
  return typeof r == "function" ? r(o) : o[r];
}
const Zr = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Nt(n, t);
};
function Qr(e) {
  return parseFloat(e.trim());
}
const Ve = [
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
], Me = new Set(Ve), Yn = (e) => e === Ce || e === w, ea = /* @__PURE__ */ new Set(["x", "y", "z"]), ta = Ve.filter((e) => !ea.has(e));
function na(e) {
  const t = [];
  return ta.forEach((n) => {
    const i = e.getValue(n);
    i !== void 0 && (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const de = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Nt(t, "x"),
  y: (e, { transform: t }) => Nt(t, "y")
};
de.translateX = de.x;
de.translateY = de.y;
const he = /* @__PURE__ */ new Set();
let _t = !1, zt = !1, Wt = !1;
function Fs() {
  if (zt) {
    const e = Array.from(he).filter((i) => i.needsMeasurement), t = new Set(e.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    t.forEach((i) => {
      const s = na(i);
      s.length && (n.set(i, s), i.render());
    }), e.forEach((i) => i.measureInitialState()), t.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([r, o]) => {
        i.getValue(r)?.set(o);
      });
    }), e.forEach((i) => i.measureEndState()), e.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  zt = !1, _t = !1, he.forEach((e) => e.complete(Wt)), he.clear();
}
function Is() {
  he.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (zt = !0);
  });
}
function ia() {
  Wt = !0, Is(), Fs(), Wt = !1;
}
class Tn {
  constructor(t, n, i, s, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = i, this.motionValue = s, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (he.add(this), _t || (_t = !0, M.read(Is), M.resolveKeyframes(Fs))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: i, motionValue: s } = this;
    if (t[0] === null) {
      const r = s?.get(), o = t[t.length - 1];
      if (r !== void 0)
        t[0] = r;
      else if (i && n) {
        const a = i.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), s && r === void 0 && s.set(t[0]);
    }
    Xr(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), he.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (he.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const sa = (e) => e.startsWith("--");
function oa(e, t, n) {
  sa(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const ra = /* @__PURE__ */ cn(() => window.ScrollTimeline !== void 0), aa = {};
function la(e, t) {
  const n = /* @__PURE__ */ cn(e);
  return () => aa[t] ?? n();
}
const js = /* @__PURE__ */ la(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Re = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`, Jn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Re([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Re([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Re([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Re([0.33, 1.53, 0.69, 0.99])
};
function Bs(e, t) {
  if (e)
    return typeof e == "function" ? js() ? Es(e, t) : "ease-out" : Ss(e) ? Re(e) : Array.isArray(e) ? e.map((n) => Bs(n, t) || Jn.easeOut) : Jn[e];
}
function ca(e, t, n, { delay: i = 0, duration: s = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  l && (c.offset = l);
  const h = Bs(a, s);
  Array.isArray(h) && (c.easing = h);
  const d = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return u && (d.pseudoElement = u), e.animate(c, d);
}
function Os(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function ua({ type: e, ...t }) {
  return Os(e) && js() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class da extends xn {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = t, ln(typeof t.type != "string");
    const u = ua(t);
    this.animation = ca(n, i, s, u, r), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const c = bn(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : oa(n, i, c), this.animation.cancel();
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
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
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
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ H(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ H(t);
  }
  get time() {
    return /* @__PURE__ */ H(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ X(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && ra() ? (this.animation.timeline = t, K) : n(this);
  }
}
const Ns = {
  anticipate: ys,
  backInOut: gs,
  circInOut: bs
};
function ha(e) {
  return e in Ns;
}
function fa(e) {
  typeof e.ease == "string" && ha(e.ease) && (e.ease = Ns[e.ease]);
}
const Zn = 10;
class pa extends da {
  constructor(t) {
    fa(t), Ls(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: r, ...o } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Sn({
      ...o,
      autoplay: !1
    }), l = /* @__PURE__ */ X(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Zn).value, a.sample(l).value, Zn), a.stop();
  }
}
const Qn = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(se.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function ma(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function ga(e, t, n, i) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const r = e[e.length - 1], o = Qn(s, t), a = Qn(r, t);
  return !o || !a ? !1 : ma(e) || (n === "spring" || Os(n)) && i;
}
function Gt(e) {
  e.duration = 0, e.type = "keyframes";
}
const ya = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), va = /* @__PURE__ */ cn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ba(e) {
  const { motionValue: t, name: n, repeatDelay: i, repeatType: s, damping: r, type: o } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return va() && n && ya.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && s !== "mirror" && r !== 0 && o !== "inertia";
}
const xa = 40;
class Sa extends xn {
  constructor({ autoplay: t = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = z.now();
    const d = {
      autoplay: t,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: r,
      repeatType: o,
      name: l,
      motionValue: u,
      element: c,
      ...h
    }, f = c?.KeyframeResolver || Tn;
    this.keyframeResolver = new f(a, (m, b, x) => this.onKeyframesResolved(m, b, d, !x), l, u, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = z.now(), ga(t, r, o, a) || ((Q.instantAnimations || !l) && c?.(bn(t, i, n)), t[0] = t[t.length - 1], Gt(i), i.repeat = 0);
    const d = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > xa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: t
    }, f = !u && ba(d) ? new pa({
      ...d,
      element: d.motionValue.owner.current
    }) : new Sn(d);
    f.finished.then(() => this.notifyFinished()).catch(K), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ia()), this._animation;
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
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
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
const Ta = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function wa(e) {
  const t = Ta.exec(e);
  if (!t)
    return [,];
  const [, n, i, s] = t;
  return [`--${n ?? i}`, s];
}
function _s(e, t, n = 1) {
  const [i, s] = wa(e);
  if (!i)
    return;
  const r = window.getComputedStyle(t).getPropertyValue(i);
  if (r) {
    const o = r.trim();
    return ls(o) ? parseFloat(o) : o;
  }
  return pn(s) ? _s(s, t, n + 1) : s;
}
function wn(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const zs = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ve
]), Pa = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ws = (e) => (t) => t.test(e), Gs = [Ce, w, Y, te, mr, pr, Pa], ei = (e) => Gs.find(Ws(e));
function Aa(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || us(e) : !0;
}
const Ca = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Va(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [i] = n.match(mn) || [];
  if (!i)
    return e;
  const s = n.replace(i, "");
  let r = Ca.has(t) ? 1 : 0;
  return i !== n && (r *= 100), t + "(" + r + s + ")";
}
const Ma = /\b([a-z-]*)\(.*?\)/gu, Ut = {
  ...se,
  getAnimatableNone: (e) => {
    const t = e.match(Ma);
    return t ? t.map(Va).join(" ") : e;
  }
}, ti = {
  ...Ce,
  transform: Math.round
}, Da = {
  rotate: te,
  rotateX: te,
  rotateY: te,
  rotateZ: te,
  scale: Ye,
  scaleX: Ye,
  scaleY: Ye,
  scaleZ: Ye,
  skew: te,
  skewX: te,
  skewY: te,
  distance: w,
  translateX: w,
  translateY: w,
  translateZ: w,
  x: w,
  y: w,
  z: w,
  perspective: w,
  transformPerspective: w,
  opacity: Ne,
  originX: Wn,
  originY: Wn,
  originZ: w
}, Pn = {
  // Border props
  borderWidth: w,
  borderTopWidth: w,
  borderRightWidth: w,
  borderBottomWidth: w,
  borderLeftWidth: w,
  borderRadius: w,
  radius: w,
  borderTopLeftRadius: w,
  borderTopRightRadius: w,
  borderBottomRightRadius: w,
  borderBottomLeftRadius: w,
  // Positioning props
  width: w,
  maxWidth: w,
  height: w,
  maxHeight: w,
  top: w,
  right: w,
  bottom: w,
  left: w,
  // Spacing props
  padding: w,
  paddingTop: w,
  paddingRight: w,
  paddingBottom: w,
  paddingLeft: w,
  margin: w,
  marginTop: w,
  marginRight: w,
  marginBottom: w,
  marginLeft: w,
  // Misc
  backgroundPositionX: w,
  backgroundPositionY: w,
  ...Da,
  zIndex: ti,
  // SVG
  fillOpacity: Ne,
  strokeOpacity: Ne,
  numOctaves: ti
}, ka = {
  ...Pn,
  // Color props
  color: R,
  backgroundColor: R,
  outlineColor: R,
  fill: R,
  stroke: R,
  // Border props
  borderColor: R,
  borderTopColor: R,
  borderRightColor: R,
  borderBottomColor: R,
  borderLeftColor: R,
  filter: Ut,
  WebkitFilter: Ut
}, Us = (e) => ka[e];
function $s(e, t) {
  let n = Us(e);
  return n !== Ut && (n = se), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Ea = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ra(e, t, n) {
  let i = 0, s;
  for (; i < e.length && !s; ) {
    const r = e[i];
    typeof r == "string" && !Ea.has(r) && _e(r).values.length && (s = e[i]), i++;
  }
  if (s && n)
    for (const r of t)
      e[r] = $s(n, s);
}
class La extends Tn {
  constructor(t, n, i, s, r) {
    super(t, n, i, s, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), pn(u))) {
        const c = _s(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !zs.has(i) || t.length !== 2)
      return;
    const [s, r] = t, o = ei(s), a = ei(r);
    if (o !== a)
      if (Yn(o) && Yn(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else de[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, i = [];
    for (let s = 0; s < t.length; s++)
      (t[s] === null || Aa(t[s])) && i.push(s);
    i.length && Ra(t, i, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: i } = this;
    if (!t || !t.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = de[i](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: i } = this;
    if (!t || !t.current)
      return;
    const s = t.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const r = i.length - 1, o = i[r];
    i[r] = de[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      t.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Fa(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const s = n?.[e] ?? i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const Hs = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Ks(e) {
  return cs(e) && "offsetHeight" in e;
}
const ni = 30, Ia = (e) => !isNaN(parseFloat(e));
class ja {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = z.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = z.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Ia(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
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
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new un());
    const i = this.events[t].add(n);
    return t === "change" ? () => {
      i(), M.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
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
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
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
    const t = z.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ni)
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
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
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
function Te(e, t) {
  return new ja(e, t);
}
const { schedule: An } = /* @__PURE__ */ Ts(queueMicrotask, !1), q = {
  x: !1,
  y: !1
};
function qs() {
  return q.x || q.y;
}
function Ba(e) {
  return e === "x" || e === "y" ? q[e] ? null : (q[e] = !0, () => {
    q[e] = !1;
  }) : q.x || q.y ? null : (q.x = q.y = !0, () => {
    q.x = q.y = !1;
  });
}
function Xs(e, t) {
  const n = Fa(e), i = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function ii(e) {
  return !(e.pointerType === "touch" || qs());
}
function Oa(e, t, n = {}) {
  const [i, s, r] = Xs(e, n), o = (a) => {
    if (!ii(a))
      return;
    const { target: l } = a, u = t(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      ii(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), r;
}
const Ys = (e, t) => t ? e === t ? !0 : Ys(e, t.parentElement) : !1, Cn = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Na = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function _a(e) {
  return Na.has(e.tagName) || e.tabIndex !== -1;
}
const et = /* @__PURE__ */ new WeakSet();
function si(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Tt(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const za = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const i = si(() => {
    if (et.has(n))
      return;
    Tt(n, "down");
    const s = si(() => {
      Tt(n, "up");
    }), r = () => Tt(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", r, t);
  });
  n.addEventListener("keydown", i, t), n.addEventListener("blur", () => n.removeEventListener("keydown", i), t);
};
function oi(e) {
  return Cn(e) && !qs();
}
function Wa(e, t, n = {}) {
  const [i, s, r] = Xs(e, n), o = (a) => {
    const l = a.currentTarget;
    if (!oi(a))
      return;
    et.add(l);
    const u = t(l, a), c = (f, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), et.has(l) && et.delete(l), oi(f) && typeof u == "function" && u(f, { success: m });
    }, h = (f) => {
      c(f, l === window || l === document || n.useGlobalTarget || Ys(l, f.target));
    }, d = (f) => {
      c(f, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), Ks(a) && (a.addEventListener("focus", (u) => za(u, s)), !_a(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), r;
}
function Js(e) {
  return cs(e) && "ownerSVGElement" in e;
}
function Ga(e) {
  return Js(e) && e.tagName === "svg";
}
const O = (e) => !!(e && e.getVelocity), Ua = [...Gs, R, se], $a = (e) => Ua.find(Ws(e)), Vn = Pe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function ri(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ha(...e) {
  return (t) => {
    let n = !1;
    const i = e.map((s) => {
      const r = ri(s, t);
      return !n && typeof r == "function" && (n = !0), r;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const r = i[s];
          typeof r == "function" ? r() : ri(e[s], null);
        }
      };
  };
}
function Ka(...e) {
  return en(Ha(...e), e);
}
class qa extends ss {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const i = n.offsetParent, s = Ks(i) && i.offsetWidth || 0, r = this.props.sizeRef.current;
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
function Xa({ children: e, isPresent: t, anchorX: n, root: i }) {
  const s = tn(), r = J(null), o = J({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = j(Vn), l = Ka(r, e?.ref);
  return rs(() => {
    const { width: u, height: c, top: h, left: d, right: f } = o.current;
    if (t || !r.current || !u || !c)
      return;
    const m = n === "left" ? `left: ${d}` : `right: ${f}`;
    r.current.dataset.motionPopId = s;
    const b = document.createElement("style");
    a && (b.nonce = a);
    const x = i ?? document.head;
    return x.appendChild(b), b.sheet && b.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${m}px !important;
            top: ${h}px !important;
          }
        `), () => {
      x.contains(b) && x.removeChild(b);
    };
  }, [t]), p(qa, { isPresent: t, childRef: r, sizeRef: o, children: Ko(e, { ref: l }) });
}
const Ya = ({ children: e, initial: t, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: r, mode: o, anchorX: a, root: l }) => {
  const u = sn(Ja), c = tn();
  let h = !0, d = fe(() => (h = !1, {
    id: c,
    initial: t,
    isPresent: n,
    custom: s,
    onExitComplete: (f) => {
      u.set(f, !0);
      for (const m of u.values())
        if (!m)
          return;
      i && i();
    },
    register: (f) => (u.set(f, !1), () => u.delete(f))
  }), [n, u, i]);
  return r && h && (d = { ...d }), fe(() => {
    u.forEach((f, m) => u.set(m, !1));
  }, [n]), Ae(() => {
    !n && !u.size && i && i();
  }, [n]), o === "popLayout" && (e = p(Xa, { isPresent: n, anchorX: a, root: l, children: e })), p(ht.Provider, { value: d, children: e });
};
function Ja() {
  return /* @__PURE__ */ new Map();
}
function Zs(e = !0) {
  const t = j(ht);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = t, r = tn();
  Ae(() => {
    if (e)
      return s(r);
  }, [e]);
  const o = en(() => e && i && i(r), [r, i, e]);
  return !n && i ? [!1, o] : [!0];
}
const Je = (e) => e.key || "";
function ai(e) {
  const t = [];
  return $o.forEach(e, (n) => {
    qo(n) && t.push(n);
  }), t;
}
const at = ({ children: e, custom: t, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: r = "sync", propagate: o = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = Zs(o), h = fe(() => ai(e), [e]), d = o && !u ? [] : h.map(Je), f = J(!0), m = J(h), b = sn(() => /* @__PURE__ */ new Map()), [x, v] = ne(h), [g, y] = ne(h);
  as(() => {
    f.current = !1, m.current = h;
    for (let C = 0; C < g.length; C++) {
      const V = Je(g[C]);
      d.includes(V) ? b.delete(V) : b.get(V) !== !0 && b.set(V, !1);
    }
  }, [g, d.length, d.join("-")]);
  const A = [];
  if (h !== x) {
    let C = [...h];
    for (let V = 0; V < g.length; V++) {
      const P = g[V], L = Je(P);
      d.includes(L) || (C.splice(V, 0, P), A.push(P));
    }
    return r === "wait" && A.length && (C = A), y(ai(C)), v(h), null;
  }
  const { forceRender: T } = j(nn);
  return p(Uo, { children: g.map((C) => {
    const V = Je(C), P = o && !u ? !1 : h === g || d.includes(V), L = () => {
      if (b.has(V))
        b.set(V, !0);
      else
        return;
      let N = !0;
      b.forEach((ee) => {
        ee || (N = !1);
      }), N && (T?.(), y(m.current), o && c?.(), i && i());
    };
    return p(Ya, { isPresent: P, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: s, mode: r, root: l, onExitComplete: P ? void 0 : L, anchorX: a, children: C }, V);
  }) });
}, Qs = Pe({ strict: !1 }), li = {
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
}, we = {};
for (const e in li)
  we[e] = {
    isEnabled: (t) => li[e].some((n) => !!t[n])
  };
function Za(e) {
  for (const t in e)
    we[t] = {
      ...we[t],
      ...e[t]
    };
}
const Qa = /* @__PURE__ */ new Set([
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
function lt(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Qa.has(e);
}
let eo = (e) => !lt(e);
function el(e) {
  typeof e == "function" && (eo = (t) => t.startsWith("on") ? !lt(t) : e(t));
}
try {
  el(require("@emotion/is-prop-valid").default);
} catch {
}
function tl(e, t, n) {
  const i = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (eo(s) || n === !0 && lt(s) || !t && !lt(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (i[s] = e[s]);
  return i;
}
const ft = /* @__PURE__ */ Pe({});
function pt(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ze(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Mn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Dn = ["initial", ...Mn];
function mt(e) {
  return pt(e.animate) || Dn.some((t) => ze(e[t]));
}
function to(e) {
  return !!(mt(e) || e.variants);
}
function nl(e, t) {
  if (mt(e)) {
    const { initial: n, animate: i } = e;
    return {
      initial: n === !1 || ze(n) ? n : void 0,
      animate: ze(i) ? i : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function il(e) {
  const { initial: t, animate: n } = nl(e, j(ft));
  return fe(() => ({ initial: t, animate: n }), [ci(t), ci(n)]);
}
function ci(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const We = {};
function sl(e) {
  for (const t in e)
    We[t] = e[t], fn(t) && (We[t].isCSSVariable = !0);
}
function no(e, { layout: t, layoutId: n }) {
  return Me.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!We[e] || e === "opacity");
}
const ol = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, rl = Ve.length;
function al(e, t, n) {
  let i = "", s = !0;
  for (let r = 0; r < rl; r++) {
    const o = Ve[r], a = e[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Hs(a, Pn[o]);
      if (!l) {
        s = !1;
        const c = ol[o] || o;
        i += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return i = i.trim(), n ? i = n(t, s ? "" : i) : s && (i = "none"), i;
}
function kn(e, t, n) {
  const { style: i, vars: s, transformOrigin: r } = e;
  let o = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (Me.has(l)) {
      o = !0;
      continue;
    } else if (fn(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Hs(u, Pn[l]);
      l.startsWith("origin") ? (a = !0, r[l] = c) : i[l] = c;
    }
  }
  if (t.transform || (o || n ? i.transform = al(t, e.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = r;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const En = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function io(e, t, n) {
  for (const i in t)
    !O(t[i]) && !no(i, n) && (e[i] = t[i]);
}
function ll({ transformTemplate: e }, t) {
  return fe(() => {
    const n = En();
    return kn(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function cl(e, t) {
  const n = e.style || {}, i = {};
  return io(i, n, e), Object.assign(i, ll(e, t)), i;
}
function ul(e, t) {
  const n = {}, i = cl(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const dl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, hl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function fl(e, t, n = 1, i = 0, s = !0) {
  e.pathLength = 1;
  const r = s ? dl : hl;
  e[r.offset] = w.transform(-i);
  const o = w.transform(t), a = w.transform(n);
  e[r.array] = `${o} ${a}`;
}
function so(e, {
  attrX: t,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (kn(e, a, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: d } = e;
  h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && fl(h, s, r, o, !1);
}
const oo = () => ({
  ...En(),
  attrs: {}
}), ro = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function pl(e, t, n, i) {
  const s = fe(() => {
    const r = oo();
    return so(r, t, ro(i), e.transformTemplate, e.style), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [t]);
  if (e.style) {
    const r = {};
    io(r, e.style, e), s.style = { ...r, ...s.style };
  }
  return s;
}
const ml = [
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
function Rn(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(ml.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function gl(e, t, n, { latestValues: i }, s, r = !1) {
  const a = (Rn(e) ? pl : ul)(t, i, s, e), l = tl(t, typeof e == "string", r), u = e !== os ? { ...l, ...a, ref: n } : {}, { children: c } = t, h = fe(() => O(c) ? c.get() : c, [c]);
  return it(e, {
    ...u,
    children: h
  });
}
function ui(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, i) => {
    t[0][i] = n.get(), t[1][i] = n.getVelocity();
  }), t;
}
function Ln(e, t, n, i) {
  if (typeof t == "function") {
    const [s, r] = ui(i);
    t = t(n !== void 0 ? n : e.custom, s, r);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, r] = ui(i);
    t = t(n !== void 0 ? n : e.custom, s, r);
  }
  return t;
}
function tt(e) {
  return O(e) ? e.get() : e;
}
function yl({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, i, s) {
  return {
    latestValues: vl(n, i, s, e),
    renderState: t()
  };
}
function vl(e, t, n, i) {
  const s = {}, r = i(e, {});
  for (const d in r)
    s[d] = tt(r[d]);
  let { initial: o, animate: a } = e;
  const l = mt(e), u = to(e);
  t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const h = c ? a : o;
  if (h && typeof h != "boolean" && !pt(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const m = Ln(e, d[f]);
      if (m) {
        const { transitionEnd: b, transition: x, ...v } = m;
        for (const g in v) {
          let y = v[g];
          if (Array.isArray(y)) {
            const A = c ? y.length - 1 : 0;
            y = y[A];
          }
          y !== null && (s[g] = y);
        }
        for (const g in b)
          s[g] = b[g];
      }
    }
  }
  return s;
}
const ao = (e) => (t, n) => {
  const i = j(ft), s = j(ht), r = () => yl(e, t, i, s);
  return n ? r() : sn(r);
};
function Fn(e, t, n) {
  const { style: i } = e, s = {};
  for (const r in i)
    (O(i[r]) || t.style && O(t.style[r]) || no(r, e) || n?.getValue(r)?.liveStyle !== void 0) && (s[r] = i[r]);
  return s;
}
const bl = /* @__PURE__ */ ao({
  scrapeMotionValuesFromProps: Fn,
  createRenderState: En
});
function lo(e, t, n) {
  const i = Fn(e, t, n);
  for (const s in e)
    if (O(e[s]) || O(t[s])) {
      const r = Ve.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[r] = e[s];
    }
  return i;
}
const xl = /* @__PURE__ */ ao({
  scrapeMotionValuesFromProps: lo,
  createRenderState: oo
}), Sl = Symbol.for("motionComponentSymbol");
function ye(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Tl(e, t, n) {
  return en(
    (i) => {
      i && e.onMount && e.onMount(i), t && (i ? t.mount(i) : t.unmount()), n && (typeof n == "function" ? n(i) : ye(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const In = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), wl = "framerAppearId", co = "data-" + In(wl), uo = Pe({});
function Pl(e, t, n, i, s) {
  const { visualElement: r } = j(ft), o = j(Qs), a = j(ht), l = j(Vn).reducedMotion, u = J(null);
  i = i || o.renderer, !u.current && i && (u.current = i(e, {
    visualState: t,
    parent: r,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, h = j(uo);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && Al(u.current, n, s, h);
  const d = J(!1);
  rs(() => {
    c && d.current && c.update(n, a);
  });
  const f = n[co], m = J(!!f && !window.MotionHandoffIsComplete?.(f) && window.MotionHasOptimisedAnimation?.(f));
  return as(() => {
    c && (d.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), m.current && c.animationState && c.animationState.animateChanges());
  }), Ae(() => {
    c && (!m.current && c.animationState && c.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(f);
    }), m.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Al(e, t, n, i) {
  const { layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : ho(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: r,
    alwaysMeasureLayout: !!o || a && ye(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: i,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function ho(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : ho(e.parent);
}
function wt(e, { forwardMotionProps: t = !1 } = {}, n, i) {
  n && Za(n);
  const s = Rn(e) ? xl : bl;
  function r(a, l) {
    let u;
    const c = {
      ...j(Vn),
      ...a,
      layoutId: Cl(a)
    }, { isStatic: h } = c, d = il(a), f = s(a, h);
    if (!h && on) {
      Vl();
      const m = Ml(c);
      u = m.MeasureLayout, d.visualElement = Pl(e, f, c, i, m.ProjectionNode);
    }
    return S(ft.Provider, { value: d, children: [u && d.visualElement ? p(u, { visualElement: d.visualElement, ...c }) : null, gl(e, a, Tl(f, d.visualElement, l), f, h, t)] });
  }
  r.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const o = Qt(r);
  return o[Sl] = e, o;
}
function Cl({ layoutId: e }) {
  const t = j(nn).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Vl(e, t) {
  j(Qs).strict;
}
function Ml(e) {
  const { drag: t, layout: n } = we;
  if (!t && !n)
    return {};
  const i = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function Dl(e, t) {
  if (typeof Proxy > "u")
    return wt;
  const n = /* @__PURE__ */ new Map(), i = (r, o) => wt(r, o, e, t), s = (r, o) => i(r, o);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? i : (n.has(o) || n.set(o, wt(o, void 0, e, t)), n.get(o))
  });
}
function fo({ top: e, left: t, right: n, bottom: i }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: i }
  };
}
function kl({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function El(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), i = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Pt(e) {
  return e === void 0 || e === 1;
}
function $t({ scale: e, scaleX: t, scaleY: n }) {
  return !Pt(e) || !Pt(t) || !Pt(n);
}
function le(e) {
  return $t(e) || po(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function po(e) {
  return di(e.x) || di(e.y);
}
function di(e) {
  return e && e !== "0%";
}
function ct(e, t, n) {
  const i = e - n, s = t * i;
  return n + s;
}
function hi(e, t, n, i, s) {
  return s !== void 0 && (e = ct(e, s, i)), ct(e, n, i) + t;
}
function Ht(e, t = 0, n = 1, i, s) {
  e.min = hi(e.min, t, n, i, s), e.max = hi(e.max, t, n, i, s);
}
function mo(e, { x: t, y: n }) {
  Ht(e.x, t.translate, t.scale, t.originPoint), Ht(e.y, n.translate, n.scale, n.originPoint);
}
const fi = 0.999999999999, pi = 1.0000000000001;
function Rl(e, t, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    r = n[a], o = r.projectionDelta;
    const { visualElement: l } = r.options;
    l && l.props.style && l.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && be(e, {
      x: -r.scroll.offset.x,
      y: -r.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, mo(e, o)), i && le(r.latestValues) && be(e, r.latestValues));
  }
  t.x < pi && t.x > fi && (t.x = 1), t.y < pi && t.y > fi && (t.y = 1);
}
function ve(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function mi(e, t, n, i, s = 0.5) {
  const r = D(e.min, e.max, s);
  Ht(e, t, n, r, i);
}
function be(e, t) {
  mi(e.x, t.x, t.scaleX, t.scale, t.originX), mi(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function go(e, t) {
  return fo(El(e.getBoundingClientRect(), t));
}
function Ll(e, t, n) {
  const i = go(e, n), { scroll: s } = t;
  return s && (ve(i.x, s.offset.x), ve(i.y, s.offset.y)), i;
}
const gi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xe = () => ({
  x: gi(),
  y: gi()
}), yi = () => ({ min: 0, max: 0 }), E = () => ({
  x: yi(),
  y: yi()
}), Kt = { current: null }, yo = { current: !1 };
function Fl() {
  if (yo.current = !0, !!on)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Kt.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Kt.current = !1;
}
const Il = /* @__PURE__ */ new WeakMap();
function jl(e, t, n) {
  for (const i in t) {
    const s = t[i], r = n[i];
    if (O(s))
      e.addValue(i, s);
    else if (O(r))
      e.addValue(i, Te(s, { owner: e }));
    else if (r !== s)
      if (e.hasValue(i)) {
        const o = e.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(i);
        e.addValue(i, Te(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const i in n)
    t[i] === void 0 && e.removeValue(i);
  return t;
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
class Bl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, i) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: r, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Tn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = z.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, M.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = mt(n), this.isVariantNode = to(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const f = h[d];
      l[d] !== void 0 && O(f) && f.set(l[d]);
    }
  }
  mount(t) {
    this.current = t, Il.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), yo.current || Fl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Kt.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ie(this.notifyUpdate), ie(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const i = Me.has(t);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && M.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      s(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in we) {
      const n = we[t];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const r = this.features[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < vi.length; i++) {
      const s = vi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const r = "on" + s, o = t[r];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = jl(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
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
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const i = this.values.get(t);
    n !== i && (i && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let i = this.values.get(t);
    return i === void 0 && n !== void 0 && (i = Te(n === null ? void 0 : n, { owner: this }), this.addValue(t, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (ls(i) || us(i)) ? i = parseFloat(i) : !$a(i) && se.test(n) && (i = $s(t, n)), this.setBaseTarget(t, O(i) ? i.get() : i)), O(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const r = Ln(this.props, n, this.presenceContext?.custom);
      r && (i = r[t]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !O(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new un()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    An.render(this.render);
  }
}
class vo extends Bl {
  constructor() {
    super(...arguments), this.KeyframeResolver = La;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: i }) {
    delete n[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    O(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function bo(e, { style: t, vars: n }, i, s) {
  const r = e.style;
  let o;
  for (o in t)
    r[o] = t[o];
  s?.applyProjectionStyles(r, i);
  for (o in n)
    r.setProperty(o, n[o]);
}
function Ol(e) {
  return window.getComputedStyle(e);
}
class Nl extends vo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = bo;
  }
  readValueFromInstance(t, n) {
    if (Me.has(n))
      return this.projection?.isProjecting ? Ot(n) : Zr(t, n);
    {
      const i = Ol(t), s = (fn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return go(t, n);
  }
  build(t, n, i) {
    kn(t, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, i) {
    return Fn(t, n, i);
  }
}
const xo = /* @__PURE__ */ new Set([
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
function _l(e, t, n, i) {
  bo(e, t, void 0, i);
  for (const s in t.attrs)
    e.setAttribute(xo.has(s) ? s : In(s), t.attrs[s]);
}
class zl extends vo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = E;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Me.has(n)) {
      const i = Us(n);
      return i && i.default || 0;
    }
    return n = xo.has(n) ? n : In(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, i) {
    return lo(t, n, i);
  }
  build(t, n, i) {
    so(t, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(t, n, i, s) {
    _l(t, n, i, s);
  }
  mount(t) {
    this.isSVGTag = ro(t.tagName), super.mount(t);
  }
}
const Wl = (e, t) => Rn(e) ? new zl(t) : new Nl(t, {
  allowProjection: e !== os
});
function Se(e, t, n) {
  const i = e.getProps();
  return Ln(i, t, n !== void 0 ? n : i.custom, e);
}
const qt = (e) => Array.isArray(e);
function Gl(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Te(n));
}
function Ul(e) {
  return qt(e) ? e[e.length - 1] || 0 : e;
}
function $l(e, t) {
  const n = Se(e, t);
  let { transitionEnd: i = {}, transition: s = {}, ...r } = n || {};
  r = { ...r, ...i };
  for (const o in r) {
    const a = Ul(r[o]);
    Gl(e, o, a);
  }
}
function Hl(e) {
  return !!(O(e) && e.add);
}
function Xt(e, t) {
  const n = e.getValue("willChange");
  if (Hl(n))
    return n.add(t);
  if (!n && Q.WillChange) {
    const i = new Q.WillChange("auto");
    e.addValue("willChange", i), i.add(t);
  }
}
function So(e) {
  return e.props[co];
}
const Kl = (e) => e !== null;
function ql(e, { repeat: t, repeatType: n = "loop" }, i) {
  const s = e.filter(Kl), r = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return s[r];
}
const Xl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Yl = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Jl = {
  type: "keyframes",
  duration: 0.8
}, Zl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ql = (e, { keyframes: t }) => t.length > 2 ? Jl : Me.has(e) ? e.startsWith("scale") ? Yl(t[1]) : Xl : Zl;
function ec({ when: e, delay: t, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const jn = (e, t, n, i = {}, s, r) => (o) => {
  const a = wn(i, e) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ X(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: r ? void 0 : s
  };
  ec(a) || Object.assign(c, Ql(e, c)), c.duration && (c.duration = /* @__PURE__ */ X(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ X(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Gt(c), c.delay === 0 && (h = !0)), (Q.instantAnimations || Q.skipAnimations) && (h = !0, Gt(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !r && t.get() !== void 0) {
    const d = ql(c.keyframes, a);
    if (d !== void 0) {
      M.update(() => {
        c.onUpdate(d), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Sn(c) : new Sa(c);
};
function tc({ protectedKeys: e, needsAnimating: t }, n) {
  const i = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, i;
}
function To(e, t, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: r = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  i && (r = i);
  const l = [], u = s && e.animationState && e.animationState.getState()[s];
  for (const c in a) {
    const h = e.getValue(c, e.latestValues[c] ?? null), d = a[c];
    if (d === void 0 || u && tc(u, c))
      continue;
    const f = {
      delay: n,
      ...wn(r || {}, c)
    }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(d) && d === m && !f.velocity)
      continue;
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const v = So(e);
      if (v) {
        const g = window.MotionHandoffAnimation(v, c, M);
        g !== null && (f.startTime = g, b = !0);
      }
    }
    Xt(e, c), h.start(jn(c, h, d, e.shouldReduceMotion && zs.has(c) ? { type: !1 } : f, e, b));
    const x = h.animation;
    x && l.push(x);
  }
  return o && Promise.all(l).then(() => {
    M.update(() => {
      o && $l(e, o);
    });
  }), l;
}
function wo(e, t, n, i = 0, s = 1) {
  const r = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t), o = e.size, a = (o - 1) * i;
  return typeof n == "function" ? n(r, o) : s === 1 ? r * i : a - r * i;
}
function Yt(e, t, n = {}) {
  const i = Se(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const r = i ? () => Promise.all(To(e, i, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = s;
    return nc(e, t, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [r, o] : [o, r];
    return l().then(() => u());
  } else
    return Promise.all([r(), o(n.delay)]);
}
function nc(e, t, n = 0, i = 0, s = 0, r = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(Yt(l, t, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + wo(e.variantChildren, l, i, s, r)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function ic(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let i;
  if (Array.isArray(t)) {
    const s = t.map((r) => Yt(e, r, n));
    i = Promise.all(s);
  } else if (typeof t == "string")
    i = Yt(e, t, n);
  else {
    const s = typeof t == "function" ? Se(e, t, n.custom) : t;
    i = Promise.all(To(e, s, n));
  }
  return i.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Po(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (t[i] !== e[i])
      return !1;
  return !0;
}
const sc = Dn.length;
function Ao(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Ao(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < sc; n++) {
    const i = Dn[n], s = e.props[i];
    (ze(s) || s === !1) && (t[i] = s);
  }
  return t;
}
const oc = [...Mn].reverse(), rc = Mn.length;
function ac(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: i }) => ic(e, n, i)));
}
function lc(e) {
  let t = ac(e), n = bi(), i = !0;
  const s = (l) => (u, c) => {
    const h = Se(e, c, l === "exit" ? e.presenceContext?.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: f, ...m } = h;
      u = { ...u, ...m, ...f };
    }
    return u;
  };
  function r(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e, c = Ao(e.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let f = {}, m = 1 / 0;
    for (let x = 0; x < rc; x++) {
      const v = oc[x], g = n[v], y = u[v] !== void 0 ? u[v] : c[v], A = ze(y), T = v === l ? g.isActive : null;
      T === !1 && (m = x);
      let C = y === c[v] && y !== u[v] && A;
      if (C && i && e.manuallyAnimateOnMount && (C = !1), g.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !y && !g.prevProp || // Or if the prop doesn't define an animation
      pt(y) || typeof y == "boolean")
        continue;
      const V = cc(g.prevProp, y);
      let P = V || // If we're making this variant active, we want to always make it active
      v === l && g.isActive && !C && A || // If we removed a higher-priority variant (i is in reverse order)
      x > m && A, L = !1;
      const N = Array.isArray(y) ? y : [y];
      let ee = N.reduce(s(v), {});
      T === !1 && (ee = {});
      const { prevResolvedValues: Bn = {} } = g, zo = {
        ...Bn,
        ...ee
      }, On = (F) => {
        P = !0, d.has(F) && (L = !0, d.delete(F)), g.needsAnimating[F] = !0;
        const G = e.getValue(F);
        G && (G.liveStyle = !1);
      };
      for (const F in zo) {
        const G = ee[F], re = Bn[F];
        if (f.hasOwnProperty(F))
          continue;
        let me = !1;
        qt(G) && qt(re) ? me = !Po(G, re) : me = G !== re, me ? G != null ? On(F) : d.add(F) : G !== void 0 && d.has(F) ? On(F) : g.protectedKeys[F] = !0;
      }
      g.prevProp = y, g.prevResolvedValues = ee, g.isActive && (f = { ...f, ...ee }), i && e.blockInitialAnimation && (P = !1);
      const Nn = C && V;
      P && (!Nn || L) && h.push(...N.map((F) => {
        const G = { type: v };
        if (typeof F == "string" && i && !Nn && e.manuallyAnimateOnMount && e.parent) {
          const { parent: re } = e, me = Se(re, F);
          if (re.enteringChildren && me) {
            const { delayChildren: Wo } = me.transition || {};
            G.delay = wo(re.enteringChildren, e, Wo);
          }
        }
        return {
          animation: F,
          options: G
        };
      }));
    }
    if (d.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const v = Se(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        v && v.transition && (x.transition = v.transition);
      }
      d.forEach((v) => {
        const g = e.getBaseTarget(v), y = e.getValue(v);
        y && (y.liveStyle = !0), x[v] = g ?? null;
      }), h.push({ animation: x });
    }
    let b = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (b = !1), i = !1, b ? t(h) : Promise.resolve();
  }
  function a(l, u) {
    if (n[l].isActive === u)
      return Promise.resolve();
    e.variantChildren?.forEach((h) => h.animationState?.setActive(l, u)), n[l].isActive = u;
    const c = o(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
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
function cc(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Po(t, e) : !1;
}
function ae(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function bi() {
  return {
    animate: ae(!0),
    whileInView: ae(),
    whileHover: ae(),
    whileTap: ae(),
    whileDrag: ae(),
    whileFocus: ae(),
    exit: ae()
  };
}
class oe {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class uc extends oe {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = lc(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    pt(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let dc = 0;
class hc extends oe {
  constructor() {
    super(...arguments), this.id = dc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const fc = {
  animation: {
    Feature: uc
  },
  exit: {
    Feature: hc
  }
};
function Ge(e, t, n, i = { passive: !0 }) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n);
}
function Ke(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const pc = (e) => (t) => Cn(t) && e(t, Ke(t));
function Ie(e, t, n, i) {
  return Ge(e, t, pc(n), i);
}
const Co = 1e-4, mc = 1 - Co, gc = 1 + Co, Vo = 0.01, yc = 0 - Vo, vc = 0 + Vo;
function _(e) {
  return e.max - e.min;
}
function bc(e, t, n) {
  return Math.abs(e - t) <= n;
}
function xi(e, t, n, i = 0.5) {
  e.origin = i, e.originPoint = D(t.min, t.max, e.origin), e.scale = _(n) / _(t), e.translate = D(n.min, n.max, e.origin) - e.originPoint, (e.scale >= mc && e.scale <= gc || isNaN(e.scale)) && (e.scale = 1), (e.translate >= yc && e.translate <= vc || isNaN(e.translate)) && (e.translate = 0);
}
function je(e, t, n, i) {
  xi(e.x, t.x, n.x, i ? i.originX : void 0), xi(e.y, t.y, n.y, i ? i.originY : void 0);
}
function Si(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + _(t);
}
function xc(e, t, n) {
  Si(e.x, t.x, n.x), Si(e.y, t.y, n.y);
}
function Ti(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + _(t);
}
function Be(e, t, n) {
  Ti(e.x, t.x, n.x), Ti(e.y, t.y, n.y);
}
function $(e) {
  return [e("x"), e("y")];
}
const Mo = ({ current: e }) => e ? e.ownerDocument.defaultView : null, wi = (e, t) => Math.abs(e - t);
function Sc(e, t) {
  const n = wi(e.x, t.x), i = wi(e.y, t.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Do {
  constructor(t, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: r = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Ct(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, m = Sc(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !m)
        return;
      const { point: b } = d, { timestamp: x } = I;
      this.history.push({ ...b, timestamp: x });
      const { onStart: v, onMove: g } = this.handlers;
      f || (v && v(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = At(f, this.transformPagePoint), M.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: m, onSessionEnd: b, resumeAnimation: x } = this.handlers;
      if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = Ct(d.type === "pointercancel" ? this.lastMoveEventInfo : At(f, this.transformPagePoint), this.history);
      this.startEvent && m && m(d, v), b && b(d, v);
    }, !Cn(t))
      return;
    this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = Ke(t), l = At(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = I;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(t, Ct(l, this.history)), this.removeListeners = Ue(Ie(this.contextWindow, "pointermove", this.handlePointerMove), Ie(this.contextWindow, "pointerup", this.handlePointerUp), Ie(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ie(this.updatePoint);
  }
}
function At(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Pi(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ct({ point: e }, t) {
  return {
    point: e,
    delta: Pi(e, ko(t)),
    offset: Pi(e, Tc(t)),
    velocity: wc(t, 0.1)
  };
}
function Tc(e) {
  return e[0];
}
function ko(e) {
  return e[e.length - 1];
}
function wc(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, i = null;
  const s = ko(e);
  for (; n >= 0 && (i = e[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ X(t))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const r = /* @__PURE__ */ H(s.timestamp - i.timestamp);
  if (r === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - i.x) / r,
    y: (s.y - i.y) / r
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Pc(e, { min: t, max: n }, i) {
  return t !== void 0 && e < t ? e = i ? D(t, e, i.min) : Math.max(e, t) : n !== void 0 && e > n && (e = i ? D(n, e, i.max) : Math.min(e, n)), e;
}
function Ai(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Ac(e, { top: t, left: n, bottom: i, right: s }) {
  return {
    x: Ai(e.x, n, s),
    y: Ai(e.y, t, i)
  };
}
function Ci(e, t) {
  let n = t.min - e.min, i = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Cc(e, t) {
  return {
    x: Ci(e.x, t.x),
    y: Ci(e.y, t.y)
  };
}
function Vc(e, t) {
  let n = 0.5;
  const i = _(e), s = _(t);
  return s > i ? n = /* @__PURE__ */ Oe(t.min, t.max - i, e.min) : i > s && (n = /* @__PURE__ */ Oe(e.min, e.max - s, t.min)), Z(0, 1, n);
}
function Mc(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Jt = 0.35;
function Dc(e = Jt) {
  return e === !1 ? e = 0 : e === !0 && (e = Jt), {
    x: Vi(e, "left", "right"),
    y: Vi(e, "top", "bottom")
  };
}
function Vi(e, t, n) {
  return {
    min: Mi(e, t),
    max: Mi(e, n)
  };
}
function Mi(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const kc = /* @__PURE__ */ new WeakMap();
class Ec {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (h) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ke(h).point);
    }, o = (h, d) => {
      const { drag: f, dragPropagation: m, onDragStart: b } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = Ba(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((v) => {
        let g = this.getAxisMotionValue(v).get() || 0;
        if (Y.test(g)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const A = y.layout.layoutBox[v];
            A && (g = _(A) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[v] = g;
      }), b && M.postRender(() => b(h, d)), Xt(this.visualElement, "transform");
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, a = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d;
      const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: b, onDrag: x } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: v } = d;
      if (m && this.currentDirection === null) {
        this.currentDirection = Rc(v), this.currentDirection !== null && b && b(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, v), this.updateAxis("y", d.point, v), this.visualElement.render(), x && x(h, d);
    }, l = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d, this.stop(h, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => $((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Do(t, {
      onSessionStart: r,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: Mo(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const i = t || this.latestPointerEvent, s = n || this.latestPanInfo, r = this.isDragging;
    if (this.cancel(), !r || !s || !i)
      return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && M.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !Ze(t, s, this.currentDirection))
      return;
    const r = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + i[t];
    this.constraints && this.constraints[t] && (o = Pc(o, this.constraints[t], this.elastic[t])), r.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    t && ye(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = Ac(i.layoutBox, t) : this.constraints = !1, this.elastic = Dc(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Mc(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ye(t))
      return !1;
    const i = t.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const r = Ll(i, s.root, this.visualElement.getTransformPagePoint());
    let o = Cc(s.layout.layoutBox, r);
    if (n) {
      const a = n(kl(o));
      this.hasMutatedConstraints = !!a, a && (o = fo(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = $((c) => {
      if (!Ze(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      o && (h = { min: 0, max: 0 });
      const d = s ? 200 : 1e6, f = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? t[c] : 0,
        bounceStiffness: d,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const i = this.getAxisMotionValue(t);
    return Xt(this.visualElement, t), i.start(jn(t, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    $((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    $((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    $((n) => {
      const { drag: i } = this.getProps();
      if (!Ze(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, r = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        r.set(t[n] - D(o, a, 0.5));
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
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!ye(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    $((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Vc({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), $((o) => {
      if (!Ze(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(D(l, u, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    kc.set(this.visualElement, this);
    const t = this.visualElement.current, n = Ie(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      ye(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, r = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), M.read(i);
    const o = Ge(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && ($((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o(), n(), r(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: r = !1, dragElastic: o = Jt, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function Ze(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Rc(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Lc extends oe {
  constructor(t) {
    super(t), this.removeGroupControls = K, this.removeListeners = K, this.controls = new Ec(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || K;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Di = (e) => (t, n) => {
  e && M.postRender(() => e(t, n));
};
class Fc extends oe {
  constructor() {
    super(...arguments), this.removePointerDownListener = K;
  }
  onPointerDown(t) {
    this.session = new Do(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Mo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Di(t),
      onStart: Di(n),
      onMove: i,
      onEnd: (r, o) => {
        delete this.session, s && M.postRender(() => s(r, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ie(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const nt = {
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
function ki(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ke = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (w.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ki(e, t.target.x), i = ki(e, t.target.y);
    return `${n}% ${i}%`;
  }
}, Ic = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const i = e, s = se.parse(e);
    if (s.length > 5)
      return i;
    const r = se.createTransformer(e), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const u = D(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), r(s);
  }
};
let Vt = !1;
class jc extends ss {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: r } = t;
    sl(Bc), r && (n.group && n.group.add(r), i && i.register && s && i.register(r), Vt && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      onExitComplete: () => this.safeToRemove()
    })), nt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: r } = this.props, { projection: o } = i;
    return o && (o.isPresent = r, Vt = !0, s || t.layoutDependency !== n || n === void 0 || t.isPresent !== r ? o.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? o.promote() : o.relegate() || M.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), An.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = t;
    Vt = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Eo(e) {
  const [t, n] = Zs(), i = j(nn);
  return p(jc, { ...e, layoutGroup: i, switchLayoutGroup: j(uo), isPresent: t, safeToRemove: n });
}
const Bc = {
  borderRadius: {
    ...ke,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ke,
  borderTopRightRadius: ke,
  borderBottomLeftRadius: ke,
  borderBottomRightRadius: ke,
  boxShadow: Ic
};
function Oc(e, t, n) {
  const i = O(e) ? e : Te(e);
  return i.start(jn("", i, t, n)), i.animation;
}
const Nc = (e, t) => e.depth - t.depth;
class _c {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    rn(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    an(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Nc), this.isDirty = !1, this.children.forEach(t);
  }
}
function zc(e, t) {
  const n = z.now(), i = ({ timestamp: s }) => {
    const r = s - n;
    r >= t && (ie(i), e(r - t));
  };
  return M.setup(i, !0), () => ie(i);
}
const Ro = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Wc = Ro.length, Ei = (e) => typeof e == "string" ? parseFloat(e) : e, Ri = (e) => typeof e == "number" || w.test(e);
function Gc(e, t, n, i, s, r) {
  s ? (e.opacity = D(0, n.opacity ?? 1, Uc(i)), e.opacityExit = D(t.opacity ?? 1, 0, $c(i))) : r && (e.opacity = D(t.opacity ?? 1, n.opacity ?? 1, i));
  for (let o = 0; o < Wc; o++) {
    const a = `border${Ro[o]}Radius`;
    let l = Li(t, a), u = Li(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ri(l) === Ri(u) ? (e[a] = Math.max(D(Ei(l), Ei(u), i), 0), (Y.test(u) || Y.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = D(t.rotate || 0, n.rotate || 0, i));
}
function Li(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Uc = /* @__PURE__ */ Lo(0, 0.5, vs), $c = /* @__PURE__ */ Lo(0.5, 0.95, K);
function Lo(e, t, n) {
  return (i) => i < e ? 0 : i > t ? 1 : n(/* @__PURE__ */ Oe(e, t, i));
}
function Fi(e, t) {
  e.min = t.min, e.max = t.max;
}
function U(e, t) {
  Fi(e.x, t.x), Fi(e.y, t.y);
}
function Ii(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ji(e, t, n, i, s) {
  return e -= t, e = ct(e, 1 / n, i), s !== void 0 && (e = ct(e, 1 / s, i)), e;
}
function Hc(e, t = 0, n = 1, i = 0.5, s, r = e, o = e) {
  if (Y.test(t) && (t = parseFloat(t), t = D(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = D(r.min, r.max, i);
  e === r && (a -= t), e.min = ji(e.min, t, n, a, s), e.max = ji(e.max, t, n, a, s);
}
function Bi(e, t, [n, i, s], r, o) {
  Hc(e, t[n], t[i], t[s], t.scale, r, o);
}
const Kc = ["x", "scaleX", "originX"], qc = ["y", "scaleY", "originY"];
function Oi(e, t, n, i) {
  Bi(e.x, t, Kc, n ? n.x : void 0, i ? i.x : void 0), Bi(e.y, t, qc, n ? n.y : void 0, i ? i.y : void 0);
}
function Ni(e) {
  return e.translate === 0 && e.scale === 1;
}
function Fo(e) {
  return Ni(e.x) && Ni(e.y);
}
function _i(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Xc(e, t) {
  return _i(e.x, t.x) && _i(e.y, t.y);
}
function zi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Io(e, t) {
  return zi(e.x, t.x) && zi(e.y, t.y);
}
function Wi(e) {
  return _(e.x) / _(e.y);
}
function Gi(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Yc {
  constructor() {
    this.members = [];
  }
  add(t) {
    rn(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (an(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
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
  promote(t, n) {
    const i = this.lead;
    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
      i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, n && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: i } = t;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
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
function Jc(e, t, n) {
  let i = "";
  const s = e.x.translate / t.x, r = e.y.translate / t.y, o = n?.z || 0;
  if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: f, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), f && (i += `skewX(${f}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Mt = ["", "X", "Y", "Z"], Zc = 1e3;
let Qc = 0;
function Dt(e, t, n, i) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), i && (i[e] = 0));
}
function jo(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = So(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", M, !(s || r));
  }
  const { parent: i } = e;
  i && !i.hasCheckedOptimisedAppear && jo(i);
}
function Bo({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t?.()) {
      this.id = Qc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(nu), this.nodes.forEach(ru), this.nodes.forEach(au), this.nodes.forEach(iu);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _c());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new un()), this.eventHandlers.get(o).add(a);
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
      this.isSVG = Js(o) && !Ga(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let c, h = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        M.read(() => {
          h = window.innerWidth;
        }), e(o, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, c && c(), c = zc(d, 250), nt.hasAnimatedSinceResize && (nt.hasAnimatedSinceResize = !1, this.nodes.forEach(Hi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || hu, { onLayoutAnimationStart: b, onLayoutAnimationComplete: x } = u.getProps(), v = !this.targetLayout || !Io(this.targetLayout, f), g = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || g || h && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const y = {
            ...wn(m, "layout"),
            onPlay: b,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(c, g);
        } else
          h || Hi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ie(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lu), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && jo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
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
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ou), this.nodes.forEach(eu), this.nodes.forEach(tu)) : this.nodes.forEach($i), this.clearAllSnapshots();
      const a = z.now();
      I.delta = Z(0, 1e3 / 60, a - I.timestamp), I.timestamp = a, I.isProcessing = !0, yt.update.process(I), yt.preRender.process(I), yt.render.process(I), I.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, An.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(su), this.sharedNodes.forEach(cu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, M.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      M.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !_(this.snapshot.measuredBox.x) && !_(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = E(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Fo(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || le(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), fu(l), {
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
        return E();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(pu))) {
        const { scroll: u } = this.root;
        u && (ve(a.x, u.offset.x), ve(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = E();
      if (U(a, o), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && U(a, o), ve(a.x, c.offset.x), ve(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = E();
      U(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && be(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), le(c.latestValues) && be(l, c.latestValues);
      }
      return le(this.latestValues) && be(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = E();
      U(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !le(u.latestValues))
          continue;
        $t(u.latestValues) && u.updateSnapshot();
        const c = E(), h = u.measurePageBox();
        U(c, h), Oi(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return le(this.latestValues) && Oi(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== I.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = I.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Be(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : U(this.target, this.layout.layoutBox), mo(this.target, this.targetDelta)) : U(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Be(this.relativeTargetOrigin, this.target, d.target), U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || $t(this.parent.latestValues) || po(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === I.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      U(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      Rl(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = E());
      const { target: f } = o;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ii(this.prevProjectionDelta.x, this.projectionDelta.x), Ii(this.prevProjectionDelta.y, this.projectionDelta.y)), je(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !Gi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Gi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
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
      this.prevProjectionDelta = xe(), this.projectionDelta = xe(), this.projectionDeltaWithTransform = xe();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = xe();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = E(), f = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, b = f !== m, x = this.getStack(), v = !x || x.members.length <= 1, g = !!(b && !v && this.options.crossfade === !0 && !this.path.some(du));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (A) => {
        const T = A / 1e3;
        Ki(h.x, o.x, T), Ki(h.y, o.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Be(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), uu(this.relativeTarget, this.relativeTargetOrigin, d, T), y && Xc(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = E()), U(y, this.relativeTarget)), b && (this.animationValues = c, Gc(c, u, this.latestValues, T, g, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ie(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = M.update(() => {
        nt.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Te(0)), this.currentAnimation = Oc(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Zc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Oo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || E();
          const h = _(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + h;
          const d = _(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + d;
        }
        U(a, l), be(a, c), je(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Yc()), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
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
      const u = this.getStack();
      u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
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
      const u = {};
      l.z && Dt("z", o, u, this.animationValues);
      for (let c = 0; c < Mt.length; c++)
        Dt(`rotate${Mt[c]}`, o, u, this.animationValues), Dt(`skew${Mt[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
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
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = tt(a?.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = tt(a?.pointerEvents) || ""), this.hasProjected && !le(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = Jc(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), o.transform = h;
      const { x: d, y: f } = this.projectionDelta;
      o.transformOrigin = `${d.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in We) {
        if (c[m] === void 0)
          continue;
        const { correct: b, applyTo: x, isCSSVariable: v } = We[m], g = h === "none" ? c[m] : b(c[m], u);
        if (x) {
          const y = x.length;
          for (let A = 0; A < y; A++)
            o[x[A]] = g;
        } else
          v ? this.options.visualElement.renderState.vars[m] = g : o[m] = g;
      }
      this.options.layoutId && (o.pointerEvents = u === this ? tt(a?.pointerEvents) || "" : "none");
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
function eu(e) {
  e.updateLayout();
}
function tu(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = e.layout, { animationType: s } = e.options, r = t.source !== e.layout.source;
    s === "size" ? $((c) => {
      const h = r ? t.measuredBox[c] : t.layoutBox[c], d = _(h);
      h.min = n[c].min, h.max = h.min + d;
    }) : Oo(s, t.layoutBox, n) && $((c) => {
      const h = r ? t.measuredBox[c] : t.layoutBox[c], d = _(n[c]);
      h.max = h.min + d, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[c].max = e.relativeTarget[c].min + d);
    });
    const o = xe();
    je(o, n, t.layoutBox);
    const a = xe();
    r ? je(a, e.applyTransform(i, !0), t.measuredBox) : je(a, n, t.layoutBox);
    const l = !Fo(o);
    let u = !1;
    if (!e.resumeFrom) {
      const c = e.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: d } = c;
        if (h && d) {
          const f = E();
          Be(f, t.layoutBox, h.layoutBox);
          const m = E();
          Be(m, n, d.layoutBox), Io(f, m) || (u = !0), c.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = f, e.relativeParent = c);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function nu(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function iu(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function su(e) {
  e.clearSnapshot();
}
function Ui(e) {
  e.clearMeasurements();
}
function $i(e) {
  e.isLayoutDirty = !1;
}
function ou(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Hi(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function ru(e) {
  e.resolveTargetDelta();
}
function au(e) {
  e.calcProjection();
}
function lu(e) {
  e.resetSkewAndRotation();
}
function cu(e) {
  e.removeLeadSnapshot();
}
function Ki(e, t, n) {
  e.translate = D(t.translate, 0, n), e.scale = D(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function qi(e, t, n, i) {
  e.min = D(t.min, n.min, i), e.max = D(t.max, n.max, i);
}
function uu(e, t, n, i) {
  qi(e.x, t.x, n.x, i), qi(e.y, t.y, n.y, i);
}
function du(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const hu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Xi = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Yi = Xi("applewebkit/") && !Xi("chrome/") ? Math.round : K;
function Ji(e) {
  e.min = Yi(e.min), e.max = Yi(e.max);
}
function fu(e) {
  Ji(e.x), Ji(e.y);
}
function Oo(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !bc(Wi(t), Wi(n), 0.2);
}
function pu(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const mu = Bo({
  attachResizeListener: (e, t) => Ge(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), kt = {
  current: void 0
}, No = Bo({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!kt.current) {
      const e = new mu({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), kt.current = e;
    }
    return kt.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), gu = {
  pan: {
    Feature: Fc
  },
  drag: {
    Feature: Lc,
    ProjectionNode: No,
    MeasureLayout: Eo
  }
};
function Zi(e, t, n) {
  const { props: i } = e;
  e.animationState && i.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, r = i[s];
  r && M.postRender(() => r(t, Ke(t)));
}
class yu extends oe {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Oa(t, (n, i) => (Zi(this.node, i, "Start"), (s) => Zi(this.node, s, "End"))));
  }
  unmount() {
  }
}
class vu extends oe {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ue(Ge(this.node.current, "focus", () => this.onFocus()), Ge(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Qi(e, t, n) {
  const { props: i } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && i.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), r = i[s];
  r && M.postRender(() => r(t, Ke(t)));
}
class bu extends oe {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Wa(t, (n, i) => (Qi(this.node, i, "Start"), (s, { success: r }) => Qi(this.node, s, r ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Zt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), xu = (e) => {
  const t = Zt.get(e.target);
  t && t(e);
}, Su = (e) => {
  e.forEach(xu);
};
function Tu({ root: e, ...t }) {
  const n = e || document;
  Et.has(n) || Et.set(n, {});
  const i = Et.get(n), s = JSON.stringify(t);
  return i[s] || (i[s] = new IntersectionObserver(Su, { root: e, ...t })), i[s];
}
function wu(e, t, n) {
  const i = Tu(t);
  return Zt.set(e, n), i.observe(e), () => {
    Zt.delete(e), i.unobserve(e);
  };
}
const Pu = {
  some: 0,
  all: 1
};
class Au extends oe {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: r } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Pu[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return wu(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Cu(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Cu({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Vu = {
  inView: {
    Feature: Au
  },
  tap: {
    Feature: bu
  },
  focus: {
    Feature: vu
  },
  hover: {
    Feature: yu
  }
}, Mu = {
  layout: {
    ProjectionNode: No,
    MeasureLayout: Eo
  }
}, Du = {
  ...fc,
  ...Vu,
  ...gu,
  ...Mu
}, B = /* @__PURE__ */ Dl(Du, Wl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ku = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Eu = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, i) => i ? i.toUpperCase() : n.toLowerCase()
), es = (e) => {
  const t = Eu(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, _o = (...e) => e.filter((t, n, i) => !!t && t.trim() !== "" && i.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ru = {
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
const Lu = Qt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: r,
    iconNode: o,
    ...a
  }, l) => it(
    "svg",
    {
      ref: l,
      ...Ru,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: i ? Number(n) * 24 / Number(t) : n,
      className: _o("lucide", s),
      ...a
    },
    [
      ...o.map(([u, c]) => it(u, c)),
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
const W = (e, t) => {
  const n = Qt(
    ({ className: i, ...s }, r) => it(Lu, {
      ref: r,
      iconNode: t,
      className: _o(
        `lucide-${ku(es(e))}`,
        `lucide-${e}`,
        i
      ),
      ...s
    })
  );
  return n.displayName = es(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Iu = W("arrow-down", Fu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ju = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Bu = W("calendar", ju);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Nu = W("chevron-down", Ou);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], zu = W("circle-check-big", _u);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = [
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
], ut = W("gamepad-2", Wu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], Uu = W("github", Gu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], Hu = W("linkedin", $u);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], qu = W("menu", Ku);
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
], dt = W("mic-vocal", Xu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Ju = W("send", Yu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
], Qu = W("twitter", Zu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], td = W("x", ed);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
], id = W("youtube", nd), ts = {
  en: "EN",
  es: "ES",
  fr: "FR",
  ja: "日本語"
}, pe = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      switchToVoice: "Voice Actor",
      switchToGame: "Game Dev"
    },
    hero: {
      game: {
        greeting: "Hello, I'm",
        name: "Alex Mercer",
        role: "Game Developer",
        tagline: "Crafting immersive worlds, one pixel at a time.",
        sub: "I build games that pull players in and don't let go — from rapid prototypes to full commercial releases.",
        cta: "View My Games",
        ctaSub: "Or explore my voice work →"
      },
      voice: {
        greeting: "Hello, I'm",
        name: "Alex Mercer",
        role: "Voice Actor",
        tagline: "Giving breath and soul to every character.",
        sub: "From fierce villains to gentle narrators, I deliver performances that linger long after the last line.",
        cta: "Hear My Reel",
        ctaSub: "Or explore my game dev work →"
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
    projects: {
      heading: "Projects",
      game: [
        {
          title: "Neon Abyss 2",
          desc: "A roguelite platformer set in a neon-soaked underworld. 200k+ copies sold on Steam. Systems design, gameplay programming, and custom shader work.",
          tags: ["Unity", "C#", "HLSL", "Steam"],
          year: "2024",
          type: "Commercial Release"
        },
        {
          title: "Siege Protocol",
          desc: "Real-time multiplayer strategy with destructible environments. Built entirely in Unreal Engine 5. Networked using dedicated servers with rollback netcode.",
          tags: ["Unreal Engine 5", "C++", "Multiplayer", "EOS"],
          year: "2023",
          type: "Studio Project"
        },
        {
          title: "Chromaveil",
          desc: "A narrative puzzle game exploring grief through color mechanics. 48-hour jam winner, later expanded to a full release. Solo dev.",
          tags: ["Godot", "GDScript", "Solo Dev", "Narrative"],
          year: "2022",
          type: "Indie Release"
        },
        {
          title: "Voidstep Engine",
          desc: "A custom 2D game engine written in C++ with an ECS architecture, an integrated level editor, and a Lua scripting layer.",
          tags: ["C++", "OpenGL", "ECS", "Lua"],
          year: "2021",
          type: "Open Source"
        }
      ],
      voice: [
        {
          title: "Ironclad Chronicles",
          desc: 'Lead antagonist "Lord Valen" in this 80-hour fantasy RPG. Over 12,000 lines of dialogue across 3 DLC expansions. Worked under AAA studio direction.',
          tags: ["Video Game", "AAA", "Character", "Fantasy"],
          year: "2024",
          type: "Video Game"
        },
        {
          title: "Galaxy Drift — Audiobook",
          desc: "Narrator and 14 distinct characters across a 9-part sci-fi audiobook series. Produced entirely in my home studio. 4.9★ listener rating.",
          tags: ["Audiobook", "Narration", "Sci-Fi", "Solo Produced"],
          year: "2023",
          type: "Audiobook Series"
        },
        {
          title: "Midnight Tactics",
          desc: 'Squad commander "Captain Rhys" in this tactical shooter. Directed remotely, 6,000 lines. Also provided additional enemy soldier voices.',
          tags: ["Video Game", "Tactical", "Character", "Remote"],
          year: "2023",
          type: "Video Game"
        },
        {
          title: "TechNova Brand Campaign",
          desc: "National commercial campaign for a fintech startup. Delivered 40+ broadcast spots in English and Spanish. Warm, authoritative brand voice.",
          tags: ["Commercial", "Broadcast", "Bilingual", "VO"],
          year: "2022",
          type: "Commercial"
        }
      ]
    },
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
      game: "Looking to hire a game developer or collaborate on a project? I'd love to hear about it.",
      voice: "Need a voice for your game, film, or commercial? Let's make something unforgettable.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      success: "Message sent! I'll get back to you within 24 hours."
    },
    footer: {
      rights: "© 2025 Alex Mercer. All rights reserved.",
      madeWith: "Designed & coded with care."
    }
  },
  es: {
    nav: {
      about: "Acerca de",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      switchToVoice: "Actor de Voz",
      switchToGame: "Desarrollador"
    },
    hero: {
      game: {
        greeting: "Hola, soy",
        name: "Alex Mercer",
        role: "Desarrollador de Videojuegos",
        tagline: "Construyendo mundos inmersivos, píxel a píxel.",
        sub: "Creo juegos que atrapan a los jugadores y no los sueltan — desde prototipos rápidos hasta lanzamientos comerciales completos.",
        cta: "Ver Mis Juegos",
        ctaSub: "O explora mi trabajo de voz →"
      },
      voice: {
        greeting: "Hola, soy",
        name: "Alex Mercer",
        role: "Actor de Voz",
        tagline: "Dando vida y alma a cada personaje.",
        sub: "Desde villanos feroces hasta narradores gentiles, ofrezco actuaciones que perduran mucho después de la última línea.",
        cta: "Escuchar mi Demo",
        ctaSub: "O explora mi trabajo en juegos →"
      }
    },
    about: {
      heading: "Sobre Mí",
      game: {
        p1: "Soy un desarrollador de videojuegos con 7 años de experiencia profesional lanzando títulos en PC, consola y móvil.",
        p2: "He trabajado en todo, desde experimentos indie en solitario hasta producciones de estudio con 15 personas. Me encanta el momento en que una mecánica encaja.",
        p3: "Actualmente abierto a nuevas colaboraciones, contratos freelance y roles a tiempo completo.",
        tag1: "Diseño de Sistemas",
        tag2: "Programación",
        tag3: "Shaders / VFX",
        tag4: "Solo & Equipo"
      },
      voice: {
        p1: "Soy actor de voz profesional con un rango de cuatro octavas y experiencia en teatro y producción de audio.",
        p2: "Mi estudio en casa está completamente tratado y equipado para sesiones remotas. Entrego audio de calidad broadcast rápidamente.",
        p3: "Disponible para trabajo de personajes, narración, e-learning y VO comercial.",
        tag1: "Rango de Personajes",
        tag2: "Estudio en Casa",
        tag3: "Entrega Rápida",
        tag4: "Sesiones Remotas"
      }
    },
    projects: {
      heading: "Proyectos",
      game: [
        { title: "Neon Abyss 2", desc: "Roguelite de plataformas ambientado en un inframundo impregnado de neón. Más de 200k copias vendidas en Steam.", tags: ["Unity", "C#", "HLSL", "Steam"], year: "2024", type: "Lanzamiento Comercial" },
        { title: "Siege Protocol", desc: "Estrategia multijugador en tiempo real con entornos destructibles. Construido en Unreal Engine 5.", tags: ["Unreal Engine 5", "C++", "Multijugador", "EOS"], year: "2023", type: "Proyecto de Estudio" },
        { title: "Chromaveil", desc: "Juego narrativo de puzles que explora el duelo a través de mecánicas de color. Ganador de game jam.", tags: ["Godot", "GDScript", "Solo Dev", "Narrativo"], year: "2022", type: "Indie" },
        { title: "Voidstep Engine", desc: "Un motor de juego 2D personalizado escrito en C++ con arquitectura ECS y capa de scripting Lua.", tags: ["C++", "OpenGL", "ECS", "Lua"], year: "2021", type: "Código Abierto" }
      ],
      voice: [
        { title: "Ironclad Chronicles", desc: 'Antagonista principal "Lord Valen" en este RPG de fantasía de 80 horas. Más de 12,000 líneas de diálogo.', tags: ["Videojuego", "AAA", "Personaje", "Fantasía"], year: "2024", type: "Videojuego" },
        { title: "Galaxy Drift — Audiolibro", desc: "Narrador y 14 personajes distintos en una serie de audiolibros de ciencia ficción de 9 partes.", tags: ["Audiolibro", "Narración", "Sci-Fi", "Producción Propia"], year: "2023", type: "Serie de Audiolibros" },
        { title: "Midnight Tactics", desc: 'Comandante "Capitán Rhys" en este shooter táctico. Sesión remota, 6,000 líneas.', tags: ["Videojuego", "Táctico", "Personaje", "Remoto"], year: "2023", type: "Videojuego" },
        { title: "Campaña TechNova", desc: "Campaña comercial nacional para una startup fintech. Más de 40 spots en inglés y español.", tags: ["Comercial", "Broadcast", "Bilingüe", "VO"], year: "2022", type: "Comercial" }
      ]
    },
    skills: {
      heading: "Habilidades",
      game: [
        { name: "Unity / C#", level: 95 },
        { name: "Unreal Engine 5 / C++", level: 88 },
        { name: "Shaders HLSL / GLSL", level: 82 },
        { name: "Godot / GDScript", level: 78 },
        { name: "Netcode Multijugador", level: 75 },
        { name: "Blender 3D", level: 70 },
        { name: "Python / Tools", level: 85 },
        { name: "Git", level: 92 }
      ],
      voice: [
        { name: "Actuación de Personajes", level: 97 },
        { name: "VO Comercial", level: 93 },
        { name: "Narración", level: 90 },
        { name: "Animación", level: 85 },
        { name: "ADR / Doblaje", level: 80 },
        { name: "Producción de Audio", level: 82 },
        { name: "Español (Bilingüe)", level: 88 },
        { name: "Lectura a Vista", level: 94 }
      ]
    },
    contact: {
      heading: "Trabajemos Juntos",
      game: "¿Buscas contratar un desarrollador o colaborar en un proyecto? Me encantaría escucharlo.",
      voice: "¿Necesitas una voz para tu juego, película o comercial? Creemos algo inolvidable.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Email",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar Mensaje",
      success: "¡Mensaje enviado! Te responderé en 24 horas."
    },
    footer: { rights: "© 2025 Alex Mercer. Todos los derechos reservados.", madeWith: "Diseñado y programado con cuidado." }
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      switchToVoice: "Comédien VO",
      switchToGame: "Dev Jeux"
    },
    hero: {
      game: {
        greeting: "Bonjour, je suis",
        name: "Alex Mercer",
        role: "Développeur de Jeux",
        tagline: "Forger des mondes immersifs, pixel après pixel.",
        sub: "Je crée des jeux qui captivent les joueurs et ne les lâchent pas — des prototypes rapides aux sorties commerciales complètes.",
        cta: "Voir Mes Jeux",
        ctaSub: "Ou explorer mon travail vocal →"
      },
      voice: {
        greeting: "Bonjour, je suis",
        name: "Alex Mercer",
        role: "Comédien de Doublage",
        tagline: "Donner souffle et âme à chaque personnage.",
        sub: "Des grands méchants aux narrateurs apaisants, je livre des performances qui restent longtemps après la dernière réplique.",
        cta: "Écouter ma Démo",
        ctaSub: "Ou explorer mon travail en jeux →"
      }
    },
    about: {
      heading: "À Propos",
      game: {
        p1: "Je suis développeur de jeux avec 7 ans d'expérience professionnelle sur PC, console et mobile.",
        p2: "J'ai travaillé sur tout, des expériences indie en solo aux productions de studio de 15 personnes.",
        p3: "Actuellement ouvert à de nouvelles collaborations, contrats freelance et postes à temps plein.",
        tag1: "Conception Systèmes",
        tag2: "Programmation",
        tag3: "Shaders / VFX",
        tag4: "Solo & Équipe"
      },
      voice: {
        p1: "Comédien de doublage professionnel avec une tessiture de quatre octaves et une formation en théâtre et production audio.",
        p2: "Mon studio maison est entièrement traité pour des sessions à distance. Je livre un audio de qualité broadcast rapidement.",
        p3: "Disponible pour les personnages, la narration, l'e-learning et le VO commercial.",
        tag1: "Large Registre",
        tag2: "Studio Maison",
        tag3: "Livraison Rapide",
        tag4: "Sessions Distantes"
      }
    },
    projects: {
      heading: "Projets",
      game: [
        { title: "Neon Abyss 2", desc: "Roguelite de plates-formes dans un monde souterrain baigné de néon. Plus de 200k exemplaires vendus sur Steam.", tags: ["Unity", "C#", "HLSL", "Steam"], year: "2024", type: "Sortie Commerciale" },
        { title: "Siege Protocol", desc: "Stratégie multijoueur en temps réel avec des environnements destructibles. Construit sous Unreal Engine 5.", tags: ["Unreal Engine 5", "C++", "Multijoueur", "EOS"], year: "2023", type: "Projet Studio" },
        { title: "Chromaveil", desc: "Jeu de puzzle narratif explorant le deuil à travers des mécaniques de couleur. Vainqueur de game jam.", tags: ["Godot", "GDScript", "Solo Dev", "Narratif"], year: "2022", type: "Indie" },
        { title: "Voidstep Engine", desc: "Un moteur de jeu 2D personnalisé en C++ avec une architecture ECS et une couche de script Lua.", tags: ["C++", "OpenGL", "ECS", "Lua"], year: "2021", type: "Open Source" }
      ],
      voice: [
        { title: "Ironclad Chronicles", desc: 'Antagoniste principal "Lord Valen" dans ce RPG de fantasy de 80 heures. Plus de 12 000 lignes de dialogue.', tags: ["Jeu Vidéo", "AAA", "Personnage", "Fantasy"], year: "2024", type: "Jeu Vidéo" },
        { title: "Galaxy Drift — Livre Audio", desc: "Narrateur et 14 personnages distincts dans une série de livres audio SF en 9 parties.", tags: ["Livre Audio", "Narration", "SF", "Prod. Propre"], year: "2023", type: "Série Livre Audio" },
        { title: "Midnight Tactics", desc: 'Commandant "Capitaine Rhys" dans ce shooter tactique. Session à distance, 6 000 lignes.', tags: ["Jeu Vidéo", "Tactique", "Personnage", "Distant"], year: "2023", type: "Jeu Vidéo" },
        { title: "Campagne TechNova", desc: "Campagne commerciale nationale pour une fintech. Plus de 40 spots en anglais et espagnol.", tags: ["Commercial", "Broadcast", "Bilingue", "VO"], year: "2022", type: "Commercial" }
      ]
    },
    skills: {
      heading: "Compétences",
      game: [
        { name: "Unity / C#", level: 95 },
        { name: "Unreal Engine 5 / C++", level: 88 },
        { name: "Shaders HLSL / GLSL", level: 82 },
        { name: "Godot / GDScript", level: 78 },
        { name: "Netcode Multijoueur", level: 75 },
        { name: "Blender 3D", level: 70 },
        { name: "Python / Tools", level: 85 },
        { name: "Git", level: 92 }
      ],
      voice: [
        { name: "Jeu de Personnages", level: 97 },
        { name: "VO Publicitaire", level: 93 },
        { name: "Narration", level: 90 },
        { name: "Animation", level: 85 },
        { name: "ADR / Doublage", level: 80 },
        { name: "Production Audio", level: 82 },
        { name: "Espagnol (Bilingue)", level: 88 },
        { name: "Lecture à Vue", level: 94 }
      ]
    },
    contact: {
      heading: "Travaillons Ensemble",
      game: "Vous cherchez à embaucher un développeur ou à collaborer ? J'adorerais en entendre parler.",
      voice: "Besoin d'une voix pour votre jeu, film ou commercial ? Créons quelque chose d'inoubliable.",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer",
      success: "Message envoyé ! Je vous répondrai dans les 24 heures."
    },
    footer: { rights: "© 2025 Alex Mercer. Tous droits réservés.", madeWith: "Conçu et codé avec soin." }
  },
  ja: {
    nav: {
      about: "自己紹介",
      projects: "プロジェクト",
      skills: "スキル",
      contact: "お問合せ",
      switchToVoice: "声優",
      switchToGame: "ゲーム開発"
    },
    hero: {
      game: {
        greeting: "こんにちは、",
        name: "Alex Mercer",
        role: "ゲーム開発者",
        tagline: "一ピクセルずつ、没入感あふれる世界を作る。",
        sub: "プレイヤーを引き込み、離さないゲームを作り続けています。プロトタイプから商業リリースまで。",
        cta: "ゲームを見る",
        ctaSub: "声優の仕事を見る →"
      },
      voice: {
        greeting: "こんにちは、",
        name: "Alex Mercer",
        role: "声優",
        tagline: "すべてのキャラクターに息吹と魂を。",
        sub: "凶悪な悪役から穏やかなナレーターまで、最後のセリフの後も長く残る演技を届けます。",
        cta: "デモを聴く",
        ctaSub: "ゲーム開発の仕事を見る →"
      }
    },
    about: {
      heading: "自己紹介",
      game: {
        p1: "ゲーム開発者として7年の実務経験を持ち、PC・コンソール・モバイル向けタイトルをリリースしてきました。",
        p2: "個人インディーゲームから15人規模のスタジオ制作まで、幅広く経験しています。",
        p3: "新たなコラボレーション、フリーランス契約、フルタイムのポジションを歓迎します。",
        tag1: "システム設計",
        tag2: "ゲームプログラミング",
        tag3: "シェーダー / VFX",
        tag4: "個人 & チーム"
      },
      voice: {
        p1: "4オクターブの音域を持つプロの声優で、演劇と音声制作のバックグラウンドを持ちます。",
        p2: "自宅スタジオは完全に防音処理済みで、リモートセッションに対応しています。",
        p3: "キャラクター、ナレーション、e-ラーニング、コマーシャルVOに対応可能です。",
        tag1: "幅広いキャラクター",
        tag2: "自宅スタジオ",
        tag3: "迅速な納品",
        tag4: "リモートセッション"
      }
    },
    projects: {
      heading: "プロジェクト",
      game: [
        { title: "Neon Abyss 2", desc: "ネオンに染まった地下世界を舞台にしたローグライトアクション。Steamで20万本以上販売。", tags: ["Unity", "C#", "HLSL", "Steam"], year: "2024", type: "商業リリース" },
        { title: "Siege Protocol", desc: "壊せる地形を持つリアルタイム多人数戦略ゲーム。Unreal Engine 5で制作。", tags: ["UE5", "C++", "マルチプレイヤー", "EOS"], year: "2023", type: "スタジオプロジェクト" },
        { title: "Chromaveil", desc: "カラーメカニクスで悲しみを探るナラティブパズルゲーム。ゲームジャム優勝作品。", tags: ["Godot", "GDScript", "個人開発", "ナラティブ"], year: "2022", type: "インディー" },
        { title: "Voidstep Engine", desc: "ECSアーキテクチャとLuaスクリプト層を持つカスタム2Dゲームエンジン。", tags: ["C++", "OpenGL", "ECS", "Lua"], year: "2021", type: "オープンソース" }
      ],
      voice: [
        { title: "Ironclad Chronicles", desc: '80時間のファンタジーRPGで主要悪役"ロード・ヴェイレン"を担当。12,000行以上のセリフ。', tags: ["ビデオゲーム", "AAA", "キャラクター", "ファンタジー"], year: "2024", type: "ビデオゲーム" },
        { title: "Galaxy Drift — 朗読", desc: "9部構成のSFオーディオブックシリーズでナレーターと14の異なるキャラクターを担当。", tags: ["朗読", "ナレーション", "SF", "自主制作"], year: "2023", type: "オーディオブック" },
        { title: "Midnight Tactics", desc: 'タクティカルシューターで隊長"ライス大尉"を担当。リモート録音、6,000行。', tags: ["ビデオゲーム", "タクティカル", "キャラクター", "リモート"], year: "2023", type: "ビデオゲーム" },
        { title: "TechNovaキャンペーン", desc: "フィンテックスタートアップの全国CMキャンペーン。英語・スペイン語で40本以上のスポット収録。", tags: ["CM", "放送", "バイリンガル", "VO"], year: "2022", type: "コマーシャル" }
      ]
    },
    skills: {
      heading: "スキル",
      game: [
        { name: "Unity / C#", level: 95 },
        { name: "Unreal Engine 5 / C++", level: 88 },
        { name: "HLSL / GLSL シェーダー", level: 82 },
        { name: "Godot / GDScript", level: 78 },
        { name: "マルチプレイヤーNetcode", level: 75 },
        { name: "Blender 3D", level: 70 },
        { name: "Python / ツール開発", level: 85 },
        { name: "Git", level: 92 }
      ],
      voice: [
        { name: "キャラクター演技", level: 97 },
        { name: "コマーシャルVO", level: 93 },
        { name: "ナレーション", level: 90 },
        { name: "アニメーション", level: 85 },
        { name: "ADR / 吹き替え", level: 80 },
        { name: "オーディオ制作", level: 82 },
        { name: "スペイン語（バイリンガル）", level: 88 },
        { name: "初見読み", level: 94 }
      ]
    },
    contact: {
      heading: "ご一緒に",
      game: "ゲーム開発者を探している、またはプロジェクトで協力したい方はぜひご連絡ください。",
      voice: "ゲーム・映像・CMに声が必要な方、忘れられない何かを一緒に作りましょう。",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "プロジェクトについて教えてください...",
      send: "送信する",
      success: "メッセージを受け取りました！24時間以内にご返信します。"
    },
    footer: { rights: "© 2025 Alex Mercer. All rights reserved.", madeWith: "丁寧に設計・実装しました。" }
  }
}, sd = ["en", "es", "fr", "ja"];
function od({ mode: e, lang: t, onModeChange: n, onLangChange: i }) {
  const s = pe[t].nav, [r, o] = ne(!1), [a, l] = ne(!1), u = e === "game" ? "#e53535" : "#2563eb", c = e === "game" ? "rgba(229,53,53,0.12)" : "rgba(37,99,235,0.12)", h = [
    { label: s.about, href: "#about" },
    { label: s.projects, href: "#projects" },
    { label: s.skills, href: "#skills" },
    { label: s.contact, href: "#contact" }
  ], d = (f) => {
    document.querySelector(f)?.scrollIntoView({ behavior: "smooth" }), o(!1);
  };
  return /* @__PURE__ */ S(
    "header",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(8,8,11,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "var(--font-body)"
      },
      children: [
        /* @__PURE__ */ S(
          "nav",
          {
            style: {
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16
            },
            children: [
              /* @__PURE__ */ S(
                "a",
                {
                  href: "#hero",
                  onClick: (f) => {
                    f.preventDefault(), d("#hero");
                  },
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#f0f0f5",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ p("span", { style: { color: u }, children: "AM" }),
                    /* @__PURE__ */ p("span", { style: { color: "rgba(255,255,255,0.3)", fontWeight: 300 }, children: "|" }),
                    /* @__PURE__ */ p("span", { style: { fontSize: 13, fontWeight: 400, color: "#8888a0", letterSpacing: "0.12em", textTransform: "uppercase" }, children: e === "game" ? "Game Dev" : "Voice Actor" })
                  ]
                }
              ),
              /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 32, flex: 1, justifyContent: "center" }, className: "hidden-mobile", children: h.map((f) => /* @__PURE__ */ p(
                "button",
                {
                  onClick: () => d(f.href),
                  style: {
                    background: "none",
                    border: "none",
                    color: "#8888a0",
                    fontSize: 14,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    padding: "4px 0",
                    transition: "color 0.2s",
                    fontFamily: "var(--font-body)"
                  },
                  onMouseEnter: (m) => m.target.style.color = "#f0f0f5",
                  onMouseLeave: (m) => m.target.style.color = "#8888a0",
                  children: f.label
                },
                f.href
              )) }),
              /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }, children: [
                /* @__PURE__ */ S(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      background: "#0f0f14",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 999,
                      padding: 3,
                      gap: 2
                    },
                    className: "hidden-mobile",
                    children: [
                      /* @__PURE__ */ S(
                        "button",
                        {
                          onClick: () => n("game"),
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "5px 12px",
                            borderRadius: 999,
                            border: "none",
                            cursor: "pointer",
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            fontFamily: "var(--font-display)",
                            transition: "all 0.25s",
                            background: e === "game" ? "#e53535" : "transparent",
                            color: e === "game" ? "#fff" : "#8888a0"
                          },
                          children: [
                            /* @__PURE__ */ p(ut, { size: 13 }),
                            "Game Dev"
                          ]
                        }
                      ),
                      /* @__PURE__ */ S(
                        "button",
                        {
                          onClick: () => n("voice"),
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "5px 12px",
                            borderRadius: 999,
                            border: "none",
                            cursor: "pointer",
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            fontFamily: "var(--font-display)",
                            transition: "all 0.25s",
                            background: e === "voice" ? "#2563eb" : "transparent",
                            color: e === "voice" ? "#fff" : "#8888a0"
                          },
                          children: [
                            /* @__PURE__ */ p(dt, { size: 13 }),
                            "Voice"
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ S("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ S(
                    "button",
                    {
                      onClick: () => l(!a),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        background: "#0f0f14",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 6,
                        padding: "6px 10px",
                        color: "#f0f0f5",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.06em"
                      },
                      children: [
                        ts[t],
                        /* @__PURE__ */ p(Nu, { size: 11, style: { opacity: 0.5 } })
                      ]
                    }
                  ),
                  /* @__PURE__ */ p(at, { children: a && /* @__PURE__ */ p(
                    B.div,
                    {
                      initial: { opacity: 0, y: -6 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -6 },
                      transition: { duration: 0.15 },
                      style: {
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        right: 0,
                        background: "#0f0f14",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 8,
                        overflow: "hidden",
                        minWidth: 80,
                        zIndex: 100
                      },
                      children: sd.map((f) => /* @__PURE__ */ p(
                        "button",
                        {
                          onClick: () => {
                            i(f), l(!1);
                          },
                          style: {
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            padding: "8px 14px",
                            background: f === t ? c : "transparent",
                            border: "none",
                            color: f === t ? u : "#8888a0",
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "var(--font-mono)",
                            transition: "background 0.15s"
                          },
                          onMouseEnter: (m) => {
                            f !== t && (m.currentTarget.style.background = "rgba(255,255,255,0.04)");
                          },
                          onMouseLeave: (m) => {
                            f !== t && (m.currentTarget.style.background = "transparent");
                          },
                          children: ts[f]
                        },
                        f
                      ))
                    }
                  ) })
                ] }),
                /* @__PURE__ */ p(
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
                    children: r ? /* @__PURE__ */ p(td, { size: 20 }) : /* @__PURE__ */ p(qu, { size: 20 })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ p(at, { children: r && /* @__PURE__ */ p(
          B.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2 },
            style: {
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(8,8,11,0.97)"
            },
            children: /* @__PURE__ */ S("div", { style: { padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }, children: [
              h.map((f) => /* @__PURE__ */ p(
                "button",
                {
                  onClick: () => d(f.href),
                  style: {
                    background: "none",
                    border: "none",
                    color: "#f0f0f5",
                    fontSize: 16,
                    textAlign: "left",
                    padding: "10px 0",
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontFamily: "var(--font-body)"
                  },
                  children: f.label
                },
                f.href
              )),
              /* @__PURE__ */ S("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
                /* @__PURE__ */ S(
                  "button",
                  {
                    onClick: () => {
                      n("game"), o(!1);
                    },
                    style: {
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "8px 0",
                      borderRadius: 6,
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      background: e === "game" ? "#e53535" : "#1a1a22",
                      color: e === "game" ? "#fff" : "#8888a0"
                    },
                    children: [
                      /* @__PURE__ */ p(ut, { size: 14 }),
                      " Game Dev"
                    ]
                  }
                ),
                /* @__PURE__ */ S(
                  "button",
                  {
                    onClick: () => {
                      n("voice"), o(!1);
                    },
                    style: {
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "8px 0",
                      borderRadius: 6,
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      background: e === "voice" ? "#2563eb" : "#1a1a22",
                      color: e === "voice" ? "#fff" : "#8888a0"
                    },
                    children: [
                      /* @__PURE__ */ p(dt, { size: 14 }),
                      " Voice"
                    ]
                  }
                )
              ] })
            ] })
          }
        ) }),
        /* @__PURE__ */ p("style", { children: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      ` })
      ]
    }
  );
}
const rd = "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=1600&h=900&fit=crop&auto=format", ad = "https://images.unsplash.com/photo-1531651008558-ed1740375b39?w=1600&h=900&fit=crop&auto=format";
function ld({ mode: e, lang: t, onModeSwitch: n }) {
  const i = pe[t].hero[e], s = e === "game" ? "#e53535" : "#2563eb", r = e === "game" ? "rgba(229,53,53,0.35)" : "rgba(37,99,235,0.35)", o = e === "game" ? rd : ad, a = J(null);
  Ae(() => {
    const u = a.current;
    if (!u) return;
    const c = u.getContext("2d");
    if (!c) return;
    let h, d = 0;
    const f = () => {
      const b = u.width, x = u.height;
      if (c.clearRect(0, 0, b, x), e === "game") {
        c.strokeStyle = "rgba(229,53,53,0.07)", c.lineWidth = 1;
        const v = 60;
        for (let g = 0; g < b; g += v)
          c.beginPath(), c.moveTo(g, 0), c.lineTo(g, x), c.stroke();
        for (let g = 0; g < x; g += v)
          c.beginPath(), c.moveTo(0, g), c.lineTo(b, g), c.stroke();
        c.fillStyle = "rgba(229,53,53,0.25)";
        for (let g = 0; g < b; g += v)
          for (let y = 0; y < x; y += v) {
            const A = Math.sin(d * 0.03 + g * 0.02 + y * 0.02) * 0.5 + 0.5;
            c.globalAlpha = A * 0.4, c.beginPath(), c.arc(g, y, 1.5, 0, Math.PI * 2), c.fill();
          }
        c.globalAlpha = 1;
      } else {
        const g = b / 80;
        for (let y = 0; y < 80; y++) {
          const A = Math.sin(d * 0.04 + y * 0.3) * 0.5 + Math.sin(d * 0.07 + y * 0.5) * 0.3 + 0.2, T = A * x * 0.35, C = 0.05 + A * 0.15;
          c.fillStyle = `rgba(37,99,235,${C})`, c.fillRect(y * g, x / 2 - T / 2, g - 2, T);
        }
      }
      d++, h = requestAnimationFrame(f);
    }, m = () => {
      u.width = u.offsetWidth, u.height = u.offsetHeight;
    };
    return m(), window.addEventListener("resize", m), f(), () => {
      cancelAnimationFrame(h), window.removeEventListener("resize", m);
    };
  }, [e]);
  const l = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ S(
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
        /* @__PURE__ */ p(at, { children: /* @__PURE__ */ p(
          B.div,
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
          e + "-bg"
        ) }),
        /* @__PURE__ */ p(
          "canvas",
          {
            ref: a,
            style: { position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }
          }
        ),
        /* @__PURE__ */ p(
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
        /* @__PURE__ */ S(
          "div",
          {
            style: {
              position: "relative",
              zIndex: 2,
              maxWidth: 1200,
              margin: "0 auto",
              padding: "120px 24px 80px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ p(at, { mode: "wait", children: /* @__PURE__ */ S(
                B.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.5, ease: "easeOut" },
                  children: [
                    /* @__PURE__ */ S(
                      "div",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          background: e === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)",
                          border: `1px solid ${e === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)"}`,
                          borderRadius: 999,
                          padding: "6px 16px",
                          marginBottom: 32
                        },
                        children: [
                          e === "game" ? /* @__PURE__ */ p(ut, { size: 14, color: s }) : /* @__PURE__ */ p(dt, { size: 14, color: s }),
                          /* @__PURE__ */ p(
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
                              children: e === "game" ? "Game Developer" : "Voice Actor"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ p(
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
                    /* @__PURE__ */ p(
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
                    /* @__PURE__ */ p(
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
                    /* @__PURE__ */ S(
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
                    /* @__PURE__ */ p(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          color: "#6666808",
                          maxWidth: 520,
                          lineHeight: 1.7,
                          marginBottom: 48,
                          color: "#777790"
                        },
                        children: i.sub
                      }
                    ),
                    /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }, children: [
                      /* @__PURE__ */ p(
                        B.button,
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
                      /* @__PURE__ */ p(
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
                          onMouseEnter: (u) => u.target.style.color = "#f0f0f5",
                          onMouseLeave: (u) => u.target.style.color = "#8888a0",
                          children: i.ctaSub
                        }
                      )
                    ] })
                  ]
                },
                e + t
              ) }),
              /* @__PURE__ */ p(
                B.button,
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
                  children: /* @__PURE__ */ p(
                    B.div,
                    {
                      animate: { y: [0, 6, 0] },
                      transition: { repeat: 1 / 0, duration: 1.8 },
                      children: /* @__PURE__ */ p(Iu, { size: 18, color: "#8888a0" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
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
const cd = "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=600&h=700&fit=crop&auto=format", ud = "https://images.unsplash.com/photo-1476136236990-838240be4859?w=600&h=700&fit=crop&auto=format";
function dd({ mode: e, lang: t }) {
  const n = pe[t].about, i = e === "game" ? n.game : n.voice, s = e === "game" ? "#e53535" : "#2563eb", r = e === "game" ? "rgba(229,53,53,0.12)" : "rgba(37,99,235,0.12)", o = e === "game" ? cd : ud, a = [i.tag1, i.tag2, i.tag3, i.tag4];
  return /* @__PURE__ */ S(
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
        /* @__PURE__ */ S(
          B.div,
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
              /* @__PURE__ */ S("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ S(
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
                      /* @__PURE__ */ p(
                        "img",
                        {
                          src: o,
                          alt: e === "game" ? "Game development setup" : "Voice recording setup",
                          style: { width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.8)" }
                        }
                      ),
                      /* @__PURE__ */ p(
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
                /* @__PURE__ */ S(
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
                      e === "game" ? /* @__PURE__ */ p(ut, { size: 18 }) : /* @__PURE__ */ p(dt, { size: 18 }),
                      /* @__PURE__ */ p("span", { style: { fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }, children: e === "game" ? "7 YRS EXP" : "PRO VO" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ S("div", { children: [
                /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }, children: [
                  /* @__PURE__ */ p("div", { style: { width: 32, height: 2, background: s, transition: "background 0.5s" } }),
                  /* @__PURE__ */ p(
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
                /* @__PURE__ */ p(
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
                /* @__PURE__ */ p("p", { style: { color: "#a0a0b8", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }, children: i.p1 }),
                /* @__PURE__ */ p("p", { style: { color: "#a0a0b8", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }, children: i.p2 }),
                /* @__PURE__ */ p("p", { style: { color: "#a0a0b8", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }, children: i.p3 }),
                /* @__PURE__ */ p("div", { style: { display: "flex", flexWrap: "wrap", gap: 10 }, children: a.map((l) => /* @__PURE__ */ p(
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
        /* @__PURE__ */ p("style", { children: `
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
const hd = [
  "https://images.unsplash.com/photo-1771014817844-327a14245bd1?w=600&h=340&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1766601269332-6f012c9e80f9?w=600&h=340&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=340&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=340&fit=crop&auto=format"
], fd = [
  "https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?w=600&h=340&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531651008558-ed1740375b39?w=600&h=340&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1476136236990-838240be4859?w=600&h=340&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=340&fit=crop&auto=format"
];
function pd({ mode: e, lang: t }) {
  const n = pe[t].projects, i = e === "game" ? n.game : n.voice, s = e === "game" ? hd : fd, r = e === "game" ? "#e53535" : "#2563eb", o = e === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)", a = e === "game" ? "rgba(229,53,53,0.25)" : "rgba(37,99,235,0.25)";
  return /* @__PURE__ */ S(
    "section",
    {
      id: "projects",
      style: {
        padding: "100px 24px",
        background: "linear-gradient(180deg, #08080b 0%, #0a0a10 50%, #08080b 100%)",
        fontFamily: "var(--font-body)"
      },
      children: [
        /* @__PURE__ */ S("div", { style: { maxWidth: 1200, margin: "0 auto" }, children: [
          /* @__PURE__ */ S(
            B.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5 },
              style: { marginBottom: 64 },
              children: [
                /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }, children: [
                  /* @__PURE__ */ p("div", { style: { width: 32, height: 2, background: r, transition: "background 0.5s" } }),
                  /* @__PURE__ */ p(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: r,
                        transition: "color 0.5s"
                      },
                      children: e === "game" ? "Games & Tools" : "Voice Work"
                    }
                  )
                ] }),
                /* @__PURE__ */ p(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 3.5vw, 44px)",
                      fontWeight: 800,
                      color: "#f0f0f5",
                      letterSpacing: "-0.02em"
                    },
                    children: n.heading
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ p(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24
              },
              className: "projects-grid",
              children: i.map((l, u) => /* @__PURE__ */ S(
                B.article,
                {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-50px" },
                  transition: { duration: 0.5, delay: u * 0.1 },
                  whileHover: { y: -6 },
                  style: {
                    background: "#0f0f14",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16,
                    overflow: "hidden",
                    cursor: "default",
                    transition: "border-color 0.3s",
                    position: "relative"
                  },
                  onMouseEnter: (c) => {
                    c.currentTarget.style.borderColor = a;
                  },
                  onMouseLeave: (c) => {
                    c.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  },
                  children: [
                    /* @__PURE__ */ S(
                      "div",
                      {
                        style: {
                          height: 180,
                          background: "#1a1a22",
                          overflow: "hidden",
                          position: "relative"
                        },
                        children: [
                          /* @__PURE__ */ p(
                            "img",
                            {
                              src: s[u],
                              alt: l.title,
                              style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: "brightness(0.55) saturate(0.7)",
                                transition: "transform 0.4s, filter 0.4s"
                              },
                              onMouseEnter: (c) => {
                                c.target.style.transform = "scale(1.05)", c.target.style.filter = "brightness(0.7) saturate(0.9)";
                              },
                              onMouseLeave: (c) => {
                                c.target.style.transform = "scale(1)", c.target.style.filter = "brightness(0.55) saturate(0.7)";
                              }
                            }
                          ),
                          /* @__PURE__ */ p(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                top: 12,
                                left: 12,
                                background: "rgba(8,8,11,0.85)",
                                backdropFilter: "blur(8px)",
                                border: `1px solid ${a}`,
                                borderRadius: 4,
                                padding: "4px 10px",
                                fontSize: 10,
                                fontWeight: 700,
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: r
                              },
                              children: l.type
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ S("div", { style: { padding: "20px 24px 24px" }, children: [
                      /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }, children: [
                        /* @__PURE__ */ p(
                          "h3",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: 20,
                              fontWeight: 700,
                              color: "#f0f0f5",
                              letterSpacing: "-0.01em",
                              lineHeight: 1.2
                            },
                            children: l.title
                          }
                        ),
                        /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 4, color: "#55556a", flexShrink: 0, marginLeft: 12 }, children: [
                          /* @__PURE__ */ p(Bu, { size: 12 }),
                          /* @__PURE__ */ p("span", { style: { fontSize: 12, fontFamily: "var(--font-mono)" }, children: l.year })
                        ] })
                      ] }),
                      /* @__PURE__ */ p(
                        "p",
                        {
                          style: {
                            fontSize: 14,
                            color: "#7777909",
                            lineHeight: 1.7,
                            marginBottom: 16,
                            color: "#6a6a82"
                          },
                          children: l.desc
                        }
                      ),
                      /* @__PURE__ */ p("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: l.tags.map((c) => /* @__PURE__ */ p(
                        "span",
                        {
                          style: {
                            background: o,
                            color: r,
                            borderRadius: 4,
                            padding: "3px 8px",
                            fontSize: 11,
                            fontWeight: 600,
                            fontFamily: "var(--font-mono)",
                            letterSpacing: "0.05em",
                            transition: "background 0.3s, color 0.3s"
                          },
                          children: c
                        },
                        c
                      )) })
                    ] })
                  ]
                },
                l.title
              ))
            }
          )
        ] }),
        /* @__PURE__ */ p("style", { children: `
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` })
      ]
    }
  );
}
function md({ mode: e, lang: t }) {
  const n = pe[t].skills, i = e === "game" ? n.game : n.voice, s = e === "game" ? "#e53535" : "#2563eb", r = e === "game" ? "rgba(229,53,53,0.15)" : "rgba(37,99,235,0.15)";
  return /* @__PURE__ */ S(
    "section",
    {
      id: "skills",
      style: {
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "var(--font-body)"
      },
      children: [
        /* @__PURE__ */ S(
          B.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            style: { marginBottom: 64 },
            children: [
              /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }, children: [
                /* @__PURE__ */ p("div", { style: { width: 32, height: 2, background: s, transition: "background 0.5s" } }),
                /* @__PURE__ */ p(
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
                    children: e === "game" ? "Tech Stack" : "Capabilities"
                  }
                )
              ] }),
              /* @__PURE__ */ p(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 800,
                    color: "#f0f0f5",
                    letterSpacing: "-0.02em"
                  },
                  children: n.heading
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px 64px"
            },
            className: "skills-grid",
            children: i.map((o, a) => /* @__PURE__ */ S(
              B.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.4, delay: a * 0.06 },
                children: [
                  /* @__PURE__ */ S(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 8
                      },
                      children: [
                        /* @__PURE__ */ p(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: 15,
                              fontWeight: 600,
                              color: "#d0d0e0",
                              letterSpacing: "0.01em"
                            },
                            children: o.name
                          }
                        ),
                        /* @__PURE__ */ S(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-mono)",
                              fontSize: 12,
                              fontWeight: 700,
                              color: s,
                              transition: "color 0.5s"
                            },
                            children: [
                              o.level,
                              "%"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ p(
                    "div",
                    {
                      style: {
                        height: 6,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 999,
                        overflow: "hidden"
                      },
                      children: /* @__PURE__ */ p(
                        B.div,
                        {
                          initial: { width: 0 },
                          whileInView: { width: `${o.level}%` },
                          viewport: { once: !0 },
                          transition: { duration: 0.9, delay: a * 0.06 + 0.2, ease: "easeOut" },
                          style: {
                            height: "100%",
                            background: `linear-gradient(90deg, ${s}, ${s}cc)`,
                            borderRadius: 999,
                            boxShadow: `0 0 12px ${r}`,
                            transition: "background 0.5s, box-shadow 0.5s"
                          }
                        }
                      )
                    }
                  )
                ]
              },
              o.name
            ))
          }
        ),
        /* @__PURE__ */ p("style", { children: `
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      ` })
      ]
    }
  );
}
function gd({ mode: e, lang: t }) {
  const n = pe[t].contact, i = e === "game" ? "#e53535" : "#2563eb", s = e === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)", r = e === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)", [o, a] = ne({ name: "", email: "", message: "" }), [l, u] = ne(!1), c = (d) => {
    d.preventDefault(), setTimeout(() => u(!0), 400);
  }, h = {
    width: "100%",
    background: "#0f0f14",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    padding: "12px 16px",
    color: "#f0f0f5",
    fontSize: 15,
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ p(
    "section",
    {
      id: "contact",
      style: {
        padding: "100px 24px 120px",
        background: "linear-gradient(180deg, #08080b 0%, #0a0810 100%)",
        fontFamily: "var(--font-body)"
      },
      children: /* @__PURE__ */ p("div", { style: { maxWidth: 640, margin: "0 auto" }, children: /* @__PURE__ */ S(
        B.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }, children: [
              /* @__PURE__ */ p("div", { style: { width: 32, height: 2, background: i, transition: "background 0.5s" } }),
              /* @__PURE__ */ p(
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
                  children: "Get In Touch"
                }
              )
            ] }),
            /* @__PURE__ */ p(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 800,
                  color: "#f0f0f5",
                  letterSpacing: "-0.02em",
                  marginBottom: 16
                },
                children: n.heading
              }
            ),
            /* @__PURE__ */ p("p", { style: { color: "#6a6a82", fontSize: 15, lineHeight: 1.7, marginBottom: 48 }, children: e === "game" ? n.game : n.voice }),
            l ? /* @__PURE__ */ S(
              B.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                style: {
                  background: s,
                  border: `1px solid ${i}33`,
                  borderRadius: 12,
                  padding: "32px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  color: i
                },
                children: [
                  /* @__PURE__ */ p(zu, { size: 28 }),
                  /* @__PURE__ */ p("span", { style: { fontSize: 15, fontWeight: 600 }, children: n.success })
                ]
              }
            ) : /* @__PURE__ */ S("form", { onSubmit: c, style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
              /* @__PURE__ */ p(
                "input",
                {
                  type: "text",
                  placeholder: n.namePlaceholder,
                  value: o.name,
                  required: !0,
                  onChange: (d) => a({ ...o, name: d.target.value }),
                  style: h,
                  onFocus: (d) => {
                    d.target.style.borderColor = i, d.target.style.boxShadow = `0 0 0 3px ${s}`;
                  },
                  onBlur: (d) => {
                    d.target.style.borderColor = "rgba(255,255,255,0.08)", d.target.style.boxShadow = "none";
                  }
                }
              ),
              /* @__PURE__ */ p(
                "input",
                {
                  type: "email",
                  placeholder: n.emailPlaceholder,
                  value: o.email,
                  required: !0,
                  onChange: (d) => a({ ...o, email: d.target.value }),
                  style: h,
                  onFocus: (d) => {
                    d.target.style.borderColor = i, d.target.style.boxShadow = `0 0 0 3px ${s}`;
                  },
                  onBlur: (d) => {
                    d.target.style.borderColor = "rgba(255,255,255,0.08)", d.target.style.boxShadow = "none";
                  }
                }
              ),
              /* @__PURE__ */ p(
                "textarea",
                {
                  placeholder: n.messagePlaceholder,
                  value: o.message,
                  required: !0,
                  rows: 5,
                  onChange: (d) => a({ ...o, message: d.target.value }),
                  style: { ...h, resize: "vertical", minHeight: 120 },
                  onFocus: (d) => {
                    d.target.style.borderColor = i, d.target.style.boxShadow = `0 0 0 3px ${s}`;
                  },
                  onBlur: (d) => {
                    d.target.style.borderColor = "rgba(255,255,255,0.08)", d.target.style.boxShadow = "none";
                  }
                }
              ),
              /* @__PURE__ */ S(
                B.button,
                {
                  type: "submit",
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: i,
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "14px 32px",
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    marginTop: 8,
                    boxShadow: `0 0 32px ${r}`,
                    transition: "background 0.3s, box-shadow 0.3s"
                  },
                  children: [
                    /* @__PURE__ */ p(Ju, { size: 16 }),
                    n.send
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
}
function yd({ mode: e, lang: t }) {
  const n = pe[t].footer, i = e === "game" ? "#e53535" : "#2563eb";
  return /* @__PURE__ */ p(
    "footer",
    {
      style: {
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 24px",
        fontFamily: "var(--font-body)"
      },
      children: /* @__PURE__ */ S(
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
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ S(
                "div",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#f0f0f5",
                    marginBottom: 4
                  },
                  children: [
                    /* @__PURE__ */ p("span", { style: { color: i }, children: "AM" }),
                    " Alex Mercer"
                  ]
                }
              ),
              /* @__PURE__ */ p("p", { style: { fontSize: 12, color: "#55556a", fontFamily: "var(--font-mono)" }, children: n.madeWith })
            ] }),
            /* @__PURE__ */ p("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
              { icon: Uu, label: "GitHub" },
              { icon: Qu, label: "Twitter" },
              { icon: Hu, label: "LinkedIn" },
              { icon: id, label: "YouTube" }
            ].map(({ icon: s, label: r }) => /* @__PURE__ */ p(
              "button",
              {
                "aria-label": r,
                style: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: 8,
                  color: "#55556a",
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
                  o.currentTarget.style.color = "#55556a", o.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                },
                children: /* @__PURE__ */ p(s, { size: 16 })
              },
              r
            )) }),
            /* @__PURE__ */ p("p", { style: { fontSize: 12, color: "#44445a", fontFamily: "var(--font-mono)" }, children: n.rights })
          ]
        }
      )
    }
  );
}
function vd() {
  const [e, t] = ne("game"), [n, i] = ne("en");
  Ae(() => {
    const a = localStorage.getItem("portfolio-mode"), l = localStorage.getItem("portfolio-lang");
    a && t(a), l && i(l);
  }, []);
  const s = (a) => {
    t(a), localStorage.setItem("portfolio-mode", a);
  };
  return /* @__PURE__ */ S(
    "div",
    {
      "data-mode": e,
      style: {
        minHeight: "100vh",
        background: "#08080b",
        color: "#f0f0f5",
        fontFamily: "var(--font-body)",
        scrollBehavior: "smooth",
        overflowX: "hidden"
      },
      children: [
        /* @__PURE__ */ p(
          od,
          {
            mode: e,
            lang: n,
            onModeChange: s,
            onLangChange: (a) => {
              i(a), localStorage.setItem("portfolio-lang", a);
            }
          }
        ),
        /* @__PURE__ */ S("main", { children: [
          /* @__PURE__ */ p(ld, { mode: e, lang: n, onModeSwitch: () => s(e === "game" ? "voice" : "game") }),
          /* @__PURE__ */ p(dd, { mode: e, lang: n }),
          /* @__PURE__ */ p(pd, { mode: e, lang: n }),
          /* @__PURE__ */ p(md, { mode: e, lang: n }),
          /* @__PURE__ */ p(gd, { mode: e, lang: n })
        ] }),
        /* @__PURE__ */ p(yd, { mode: e, lang: n }),
        /* @__PURE__ */ p("style", { children: `
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
const bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vd
}, Symbol.toStringTag, { value: "Module" }));
export {
  Sd as Code0_8
};
