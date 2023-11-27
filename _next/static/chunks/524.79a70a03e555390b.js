(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [524],
  {
    9524: function (e, t, r) {
      var n, i;
      self,
        (e.exports =
          ((n = r(2265)),
          (i = r(4887)),
          (() => {
            "use strict";
            var e = {
                297: (e) => {
                  e.exports = n;
                },
                268: (e) => {
                  e.exports = i;
                },
              },
              t = {};
            function r(n) {
              var i = t[n];
              if (void 0 !== i) return i.exports;
              var s = (t[n] = { exports: {} });
              return e[n](s, s.exports, r), s.exports;
            }
            (r.n = (e) => {
              var t = e && e.__esModule ? () => e.default : () => e;
              return r.d(t, { a: t }), t;
            }),
              (r.d = (e, t) => {
                for (var n in t)
                  r.o(t, n) &&
                    !r.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
              }),
              (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (r.r = (e) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              });
            var s = {};
            return (
              (() => {
                let e, t;
                r.r(s), r.d(s, { default: () => rx });
                var n,
                  i = r(297),
                  a = r.n(i);
                let o = P(),
                  l = (e) => b(e, o),
                  u = P();
                l.write = (e) => b(e, u);
                let d = P();
                l.onStart = (e) => b(e, d);
                let h = P();
                l.onFrame = (e) => b(e, h);
                let c = P();
                l.onFinish = (e) => b(e, c);
                let p = [];
                l.setTimeout = (e, t) => {
                  let r = l.now() + t,
                    n = () => {
                      let e = p.findIndex((e) => e.cancel == n);
                      ~e && p.splice(e, 1), (y -= ~e ? 1 : 0);
                    },
                    i = { time: r, handler: e, cancel: n };
                  return p.splice(f(r), 0, i), (y += 1), _(), i;
                };
                let f = (e) => ~(~p.findIndex((t) => t.time > e) || ~p.length);
                (l.cancel = (e) => {
                  d.delete(e),
                    h.delete(e),
                    o.delete(e),
                    u.delete(e),
                    c.delete(e);
                }),
                  (l.sync = (e) => {
                    (v = !0), l.batchedUpdates(e), (v = !1);
                  }),
                  (l.throttle = (e) => {
                    let t;
                    function r() {
                      try {
                        e(...t);
                      } finally {
                        t = null;
                      }
                    }
                    function n(...e) {
                      (t = e), l.onStart(r);
                    }
                    return (
                      (n.handler = e),
                      (n.cancel = () => {
                        d.delete(r), (t = null);
                      }),
                      n
                    );
                  });
                let m =
                  "undefined" != typeof window
                    ? window.requestAnimationFrame
                    : () => {};
                (l.use = (e) => (m = e)),
                  (l.now =
                    "undefined" != typeof performance
                      ? () => performance.now()
                      : Date.now),
                  (l.batchedUpdates = (e) => e()),
                  (l.catch = console.error),
                  (l.frameLoop = "always"),
                  (l.advance = () => {
                    "demand" !== l.frameLoop
                      ? console.warn(
                          "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
                        )
                      : k();
                  });
                let g = -1,
                  y = 0,
                  v = !1;
                function b(e, t) {
                  v ? (t.delete(e), e(0)) : (t.add(e), _());
                }
                function _() {
                  g < 0 && ((g = 0), "demand" !== l.frameLoop && m(w));
                }
                function w() {
                  ~g && (m(w), l.batchedUpdates(k));
                }
                function k() {
                  let e = g;
                  g = l.now();
                  let t = f(g);
                  t && (S(p.splice(0, t), (e) => e.handler()), (y -= t)),
                    d.flush(),
                    o.flush(e ? Math.min(64, g - e) : 16.667),
                    h.flush(),
                    u.flush(),
                    c.flush(),
                    y || (g = -1);
                }
                function P() {
                  let e = new Set(),
                    t = e;
                  return {
                    add(r) {
                      (y += t != e || e.has(r) ? 0 : 1), e.add(r);
                    },
                    delete: (r) => (
                      (y -= t == e && e.has(r) ? 1 : 0), e.delete(r)
                    ),
                    flush(r) {
                      t.size &&
                        ((e = new Set()),
                        (y -= t.size),
                        S(t, (t) => t(r) && e.add(t)),
                        (y += e.size),
                        (t = e));
                    },
                  };
                }
                function S(e, t) {
                  e.forEach((e) => {
                    try {
                      t(e);
                    } catch (e) {
                      l.catch(e);
                    }
                  });
                }
                function x() {}
                let V = {
                  arr: Array.isArray,
                  obj: (e) => !!e && "Object" === e.constructor.name,
                  fun: (e) => "function" == typeof e,
                  str: (e) => "string" == typeof e,
                  num: (e) => "number" == typeof e,
                  und: (e) => void 0 === e,
                };
                function O(e, t) {
                  if (V.arr(e)) {
                    if (!V.arr(t) || e.length !== t.length) return !1;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t[r]) return !1;
                    return !0;
                  }
                  return e === t;
                }
                let C = (e, t) => e.forEach(t);
                function A(e, t, r) {
                  if (V.arr(e))
                    for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
                  else
                    for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n);
                }
                let I = (e) => (V.und(e) ? [] : V.arr(e) ? e : [e]);
                function R(e, t) {
                  if (e.size) {
                    let r = Array.from(e);
                    e.clear(), C(r, t);
                  }
                }
                let j = (e, ...t) => R(e, (e) => e(...t)),
                  E = () =>
                    "undefined" == typeof window ||
                    !window.navigator ||
                    /ServerSideRendering|^Deno\//.test(
                      window.navigator.userAgent
                    ),
                  M,
                  N,
                  q = null,
                  T = !1,
                  z = x;
                var $ = Object.freeze({
                  __proto__: null,
                  get createStringInterpolator() {
                    return M;
                  },
                  get to() {
                    return N;
                  },
                  get colors() {
                    return q;
                  },
                  get skipAnimation() {
                    return T;
                  },
                  get willAdvance() {
                    return z;
                  },
                  assign: (e) => {
                    e.to && (N = e.to),
                      e.now && (l.now = e.now),
                      void 0 !== e.colors && (q = e.colors),
                      null != e.skipAnimation && (T = e.skipAnimation),
                      e.createStringInterpolator &&
                        (M = e.createStringInterpolator),
                      e.requestAnimationFrame && l.use(e.requestAnimationFrame),
                      e.batchedUpdates && (l.batchedUpdates = e.batchedUpdates),
                      e.willAdvance && (z = e.willAdvance),
                      e.frameLoop && (l.frameLoop = e.frameLoop);
                  },
                });
                let F = new Set(),
                  U = [],
                  D = [],
                  L = 0,
                  Q = {
                    get idle() {
                      return !F.size && !U.length;
                    },
                    start(e) {
                      L > e.priority ? (F.add(e), l.onStart(W)) : (G(e), l(Y));
                    },
                    advance: Y,
                    sort(e) {
                      if (L) l.onFrame(() => Q.sort(e));
                      else {
                        let t = U.indexOf(e);
                        ~t && (U.splice(t, 1), B(e));
                      }
                    },
                    clear() {
                      (U = []), F.clear();
                    },
                  };
                function W() {
                  F.forEach(G), F.clear(), l(Y);
                }
                function G(e) {
                  U.includes(e) || B(e);
                }
                function B(e) {
                  U.splice(
                    (function (t, r) {
                      let n = t.findIndex((t) => t.priority > e.priority);
                      return n < 0 ? t.length : n;
                    })(U),
                    0,
                    e
                  );
                }
                function Y(e) {
                  let t = D;
                  for (let r = 0; r < U.length; r++) {
                    let n = U[r];
                    (L = n.priority),
                      n.idle || (z(n), n.advance(e), n.idle || t.push(n));
                  }
                  return (L = 0), ((D = U).length = 0), (U = t).length > 0;
                }
                let Z = "[-+]?\\d*\\.?\\d+",
                  H = Z + "%";
                function J(...e) {
                  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
                }
                let X = RegExp("rgb" + J(Z, Z, Z)),
                  K = RegExp("rgba" + J(Z, Z, Z, Z)),
                  ee = RegExp("hsl" + J(Z, H, H)),
                  et = RegExp("hsla" + J(Z, H, H, Z)),
                  er = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                  en =
                    /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                  ei = /^#([0-9a-fA-F]{6})$/,
                  es = /^#([0-9a-fA-F]{8})$/;
                function ea(e, t, r) {
                  return (
                    r < 0 && (r += 1),
                    r > 1 && (r -= 1),
                    r < 1 / 6
                      ? e + 6 * (t - e) * r
                      : r < 0.5
                      ? t
                      : r < 2 / 3
                      ? e + (t - e) * (2 / 3 - r) * 6
                      : e
                  );
                }
                function eo(e, t, r) {
                  let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                    i = 2 * r - n,
                    s = ea(i, n, e + 1 / 3),
                    a = ea(i, n, e),
                    o = ea(i, n, e - 1 / 3);
                  return (
                    (Math.round(255 * s) << 24) |
                    (Math.round(255 * a) << 16) |
                    (Math.round(255 * o) << 8)
                  );
                }
                function el(e) {
                  let t = parseInt(e, 10);
                  return t < 0 ? 0 : t > 255 ? 255 : t;
                }
                function eu(e) {
                  return (((parseFloat(e) % 360) + 360) % 360) / 360;
                }
                function ed(e) {
                  let t = parseFloat(e);
                  return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
                }
                function eh(e) {
                  let t = parseFloat(e);
                  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
                }
                function ec(e) {
                  let t;
                  let r =
                    "number" == typeof e
                      ? e >>> 0 === e && e >= 0 && e <= 4294967295
                        ? e
                        : null
                      : (t = ei.exec(e))
                      ? parseInt(t[1] + "ff", 16) >>> 0
                      : q && void 0 !== q[e]
                      ? q[e]
                      : (t = X.exec(e))
                      ? ((el(t[1]) << 24) |
                          (el(t[2]) << 16) |
                          (el(t[3]) << 8) |
                          255) >>>
                        0
                      : (t = K.exec(e))
                      ? ((el(t[1]) << 24) |
                          (el(t[2]) << 16) |
                          (el(t[3]) << 8) |
                          ed(t[4])) >>>
                        0
                      : (t = er.exec(e))
                      ? parseInt(
                          t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff",
                          16
                        ) >>> 0
                      : (t = es.exec(e))
                      ? parseInt(t[1], 16) >>> 0
                      : (t = en.exec(e))
                      ? parseInt(
                          t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                          16
                        ) >>> 0
                      : (t = ee.exec(e))
                      ? (255 | eo(eu(t[1]), eh(t[2]), eh(t[3]))) >>> 0
                      : (t = et.exec(e))
                      ? (eo(eu(t[1]), eh(t[2]), eh(t[3])) | ed(t[4])) >>> 0
                      : null;
                  return null === r
                    ? e
                    : ((r = r || 0),
                      `rgba(${(4278190080 & r) >>> 24}, ${
                        (16711680 & r) >>> 16
                      }, ${(65280 & r) >>> 8}, ${(255 & r) / 255})`);
                }
                let ep = (e, t, r) => {
                  if (V.fun(e)) return e;
                  if (V.arr(e))
                    return ep({ range: e, output: t, extrapolate: r });
                  if (V.str(e.output[0])) return M(e);
                  let n = e.output,
                    i = e.range || [0, 1],
                    s = e.extrapolateLeft || e.extrapolate || "extend",
                    a = e.extrapolateRight || e.extrapolate || "extend",
                    o = e.easing || ((e) => e);
                  return (t) => {
                    let r = (function (e, t) {
                      for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                      return r - 1;
                    })(t, i);
                    return (function (e, t, r, n, i, s, a, o, l) {
                      let u = l ? l(e) : e;
                      if (u < t) {
                        if ("identity" === a) return u;
                        "clamp" === a && (u = t);
                      }
                      if (u > r) {
                        if ("identity" === o) return u;
                        "clamp" === o && (u = r);
                      }
                      return n === i
                        ? n
                        : t === r
                        ? e <= t
                          ? n
                          : i
                        : (t === -1 / 0
                            ? (u = -u)
                            : r === 1 / 0
                            ? (u -= t)
                            : (u = (u - t) / (r - t)),
                          (u = s(u)),
                          n === -1 / 0
                            ? (u = -u)
                            : i === 1 / 0
                            ? (u += n)
                            : (u = u * (i - n) + n),
                          u);
                    })(t, i[r], i[r + 1], n[r], n[r + 1], o, s, a, e.map);
                  };
                };
                function ef() {
                  return (ef =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n]);
                      }
                      return e;
                    }).apply(this, arguments);
                }
                let em = Symbol.for("FluidValue.get"),
                  eg = Symbol.for("FluidValue.observers"),
                  ey = (e) => !!(e && e[em]),
                  ev = (e) => (e && e[em] ? e[em]() : e),
                  eb = (e) => e[eg] || null;
                function e_(e, t) {
                  let r = e[eg];
                  r &&
                    r.forEach((e) => {
                      e.eventObserved ? e.eventObserved(t) : e(t);
                    });
                }
                class ew {
                  constructor(e) {
                    if (
                      ((this[em] = void 0),
                      (this[eg] = void 0),
                      !e && !(e = this.get))
                    )
                      throw Error("Unknown getter");
                    ek(this, e);
                  }
                }
                let ek = (e, t) => ex(e, em, t);
                function eP(e, t) {
                  if (e[em]) {
                    let r = e[eg];
                    r || ex(e, eg, (r = new Set())),
                      r.has(t) ||
                        (r.add(t),
                        e.observerAdded && e.observerAdded(r.size, t));
                  }
                  return t;
                }
                function eS(e, t) {
                  let r = e[eg];
                  if (r && r.has(t)) {
                    let n = r.size - 1;
                    n ? r.delete(t) : (e[eg] = null),
                      e.observerRemoved && e.observerRemoved(n, t);
                  }
                }
                let ex = (e, t, r) =>
                    Object.defineProperty(e, t, {
                      value: r,
                      writable: !0,
                      configurable: !0,
                    }),
                  eV = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  eO =
                    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                  eC = RegExp(`(${eV.source})(%|[a-z]+)`, "i"),
                  eA =
                    /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                  eI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                  eR = (e) => {
                    let [t, r] = ej(e);
                    if (!t || E()) return e;
                    let n = window
                      .getComputedStyle(document.documentElement)
                      .getPropertyValue(t);
                    return n
                      ? n.trim()
                      : r && r.startsWith("--")
                      ? window
                          .getComputedStyle(document.documentElement)
                          .getPropertyValue(r) || e
                      : r && eI.test(r)
                      ? eR(r)
                      : r || e;
                  },
                  ej = (e) => {
                    let t = eI.exec(e);
                    if (!t) return [,];
                    let [, r, n] = t;
                    return [r, n];
                  },
                  eE = (e, t, r, n, i) =>
                    `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(
                      n
                    )}, ${i})`,
                  eM = (t) => {
                    e ||
                      (e = q
                        ? RegExp(`(${Object.keys(q).join("|")})(?!\\w)`, "g")
                        : /^\b$/);
                    let r = t.output.map((t) =>
                        ev(t).replace(eI, eR).replace(eO, ec).replace(e, ec)
                      ),
                      n = r.map((e) => e.match(eV).map(Number)),
                      i = n[0]
                        .map((e, t) =>
                          n.map((e) => {
                            if (!(t in e))
                              throw Error(
                                'The arity of each "output" value must be equal'
                              );
                            return e[t];
                          })
                        )
                        .map((e) => ep(ef({}, t, { output: e })));
                    return (e) => {
                      var t;
                      let n =
                          !eC.test(r[0]) &&
                          (null == (t = r.find((e) => eC.test(e)))
                            ? void 0
                            : t.replace(eV, "")),
                        s = 0;
                      return r[0]
                        .replace(eV, () => `${i[s++](e)}${n || ""}`)
                        .replace(eA, eE);
                    };
                  },
                  eN = "react-spring: ",
                  eq = (e) => {
                    let t = !1;
                    if ("function" != typeof e)
                      throw TypeError(
                        `${eN}once requires a function parameter`
                      );
                    return (...r) => {
                      t || (e(...r), (t = !0));
                    };
                  },
                  eT = eq(console.warn),
                  ez = eq(console.warn);
                function e$(e) {
                  return (
                    V.str(e) &&
                    ("#" == e[0] ||
                      /\d/.test(e) ||
                      (!E() && eI.test(e)) ||
                      e in (q || {}))
                  );
                }
                let eF =
                  "undefined" != typeof window &&
                  window.document &&
                  window.document.createElement
                    ? i.useLayoutEffect
                    : i.useEffect;
                function eU() {
                  let e = (0, i.useState)()[1],
                    t = (() => {
                      let e = (0, i.useRef)(!1);
                      return (
                        eF(
                          () => (
                            (e.current = !0),
                            () => {
                              e.current = !1;
                            }
                          ),
                          []
                        ),
                        e
                      );
                    })();
                  return () => {
                    t.current && e(Math.random());
                  };
                }
                let eD = (e) => (0, i.useEffect)(e, eL),
                  eL = [];
                function eQ(e) {
                  let t = (0, i.useRef)();
                  return (
                    (0, i.useEffect)(() => {
                      t.current = e;
                    }),
                    t.current
                  );
                }
                let eW = Symbol.for("Animated:node"),
                  eG = (e) => e && e[eW],
                  eB = (e, t) =>
                    Object.defineProperty(e, eW, {
                      value: t,
                      writable: !0,
                      configurable: !0,
                    }),
                  eY = (e) => e && e[eW] && e[eW].getPayload();
                class eZ {
                  constructor() {
                    (this.payload = void 0), eB(this, this);
                  }
                  getPayload() {
                    return this.payload || [];
                  }
                }
                class eH extends eZ {
                  constructor(e) {
                    super(),
                      (this.done = !0),
                      (this.elapsedTime = void 0),
                      (this.lastPosition = void 0),
                      (this.lastVelocity = void 0),
                      (this.v0 = void 0),
                      (this.durationProgress = 0),
                      (this._value = e),
                      V.num(this._value) && (this.lastPosition = this._value);
                  }
                  static create(e) {
                    return new eH(e);
                  }
                  getPayload() {
                    return [this];
                  }
                  getValue() {
                    return this._value;
                  }
                  setValue(e, t) {
                    return (
                      V.num(e) &&
                        ((this.lastPosition = e),
                        t &&
                          ((e = Math.round(e / t) * t),
                          this.done && (this.lastPosition = e))),
                      this._value !== e && ((this._value = e), !0)
                    );
                  }
                  reset() {
                    let { done: e } = this;
                    (this.done = !1),
                      V.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.durationProgress = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null));
                  }
                }
                class eJ extends eH {
                  constructor(e) {
                    super(0),
                      (this._string = null),
                      (this._toString = void 0),
                      (this._toString = ep({ output: [e, e] }));
                  }
                  static create(e) {
                    return new eJ(e);
                  }
                  getValue() {
                    let e = this._string;
                    return null == e
                      ? (this._string = this._toString(this._value))
                      : e;
                  }
                  setValue(e) {
                    if (V.str(e)) {
                      if (e == this._string) return !1;
                      (this._string = e), (this._value = 1);
                    } else {
                      if (!super.setValue(e)) return !1;
                      this._string = null;
                    }
                    return !0;
                  }
                  reset(e) {
                    e &&
                      (this._toString = ep({ output: [this.getValue(), e] })),
                      (this._value = 0),
                      super.reset();
                  }
                }
                let eX = { dependencies: null };
                class eK extends eZ {
                  constructor(e) {
                    super(), (this.source = e), this.setValue(e);
                  }
                  getValue(e) {
                    let t = {};
                    return (
                      A(this.source, (r, n) => {
                        r && r[eW] === r
                          ? (t[n] = r.getValue(e))
                          : ey(r)
                          ? (t[n] = ev(r))
                          : e || (t[n] = r);
                      }),
                      t
                    );
                  }
                  setValue(e) {
                    (this.source = e), (this.payload = this._makePayload(e));
                  }
                  reset() {
                    this.payload && C(this.payload, (e) => e.reset());
                  }
                  _makePayload(e) {
                    if (e) {
                      let t = new Set();
                      return A(e, this._addToPayload, t), Array.from(t);
                    }
                  }
                  _addToPayload(e) {
                    eX.dependencies && ey(e) && eX.dependencies.add(e);
                    let t = eY(e);
                    t && C(t, (e) => this.add(e));
                  }
                }
                class e0 extends eK {
                  constructor(e) {
                    super(e);
                  }
                  static create(e) {
                    return new e0(e);
                  }
                  getValue() {
                    return this.source.map((e) => e.getValue());
                  }
                  setValue(e) {
                    let t = this.getPayload();
                    return e.length == t.length
                      ? t.map((t, r) => t.setValue(e[r])).some(Boolean)
                      : (super.setValue(e.map(e1)), !0);
                  }
                }
                function e1(e) {
                  return (e$(e) ? eJ : eH).create(e);
                }
                function e2(e) {
                  let t = eG(e);
                  return t ? t.constructor : V.arr(e) ? e0 : e$(e) ? eJ : eH;
                }
                function e5() {
                  return (e5 =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n]);
                      }
                      return e;
                    }).apply(this, arguments);
                }
                let e3 = (e, t) => {
                  let r =
                    !V.fun(e) || (e.prototype && e.prototype.isReactComponent);
                  return (0, i.forwardRef)((n, s) => {
                    let a = (0, i.useRef)(null),
                      o =
                        r &&
                        (0, i.useCallback)(
                          (e) => {
                            a.current =
                              (s && (V.fun(s) ? s(e) : (s.current = e)), e);
                          },
                          [s]
                        ),
                      [u, d] = (function (e, t) {
                        let r = new Set();
                        return (
                          (eX.dependencies = r),
                          e.style &&
                            (e = e5({}, e, {
                              style: t.createAnimatedStyle(e.style),
                            })),
                          (e = new eK(e)),
                          (eX.dependencies = null),
                          [e, r]
                        );
                      })(n, t),
                      h = eU(),
                      c = () => {
                        let e = a.current;
                        (r && !e) ||
                          (!1 ===
                            (!!e && t.applyAnimatedValues(e, u.getValue(!0))) &&
                            h());
                      },
                      p = new e9(c, d),
                      f = (0, i.useRef)();
                    eF(
                      () => (
                        (f.current = p),
                        C(d, (e) => eP(e, p)),
                        () => {
                          f.current &&
                            (C(f.current.deps, (e) => eS(e, f.current)),
                            l.cancel(f.current.update));
                        }
                      )
                    ),
                      (0, i.useEffect)(c, []),
                      eD(() => () => {
                        let e = f.current;
                        C(e.deps, (t) => eS(t, e));
                      });
                    let m = t.getComponentProps(u.getValue());
                    return i.createElement(e, e5({}, m, { ref: o }));
                  });
                };
                class e9 {
                  constructor(e, t) {
                    (this.update = e), (this.deps = t);
                  }
                  eventObserved(e) {
                    "change" == e.type && l.write(this.update);
                  }
                }
                let e4 = Symbol.for("AnimatedComponent"),
                  e7 = (e) =>
                    V.str(e)
                      ? e
                      : e && V.str(e.displayName)
                      ? e.displayName
                      : (V.fun(e) && e.name) || null;
                function e8() {
                  return (e8 =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n]);
                      }
                      return e;
                    }).apply(this, arguments);
                }
                function e6(e, ...t) {
                  return V.fun(e) ? e(...t) : e;
                }
                let te = (e, t) =>
                    !0 === e ||
                    !!(t && e && (V.fun(e) ? e(t) : I(e).includes(t))),
                  tt = (e, t) => (V.obj(e) ? t && e[t] : e),
                  tr = (e, t) =>
                    !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
                  tn = (e) => e,
                  ti = (e, t = tn) => {
                    let r = ts;
                    e.default &&
                      !0 !== e.default &&
                      (r = Object.keys((e = e.default)));
                    let n = {};
                    for (let i of r) {
                      let r = t(e[i], i);
                      V.und(r) || (n[i] = r);
                    }
                    return n;
                  },
                  ts = [
                    "config",
                    "onProps",
                    "onStart",
                    "onChange",
                    "onPause",
                    "onResume",
                    "onRest",
                  ],
                  ta = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1,
                  };
                function to(e) {
                  let t = (function (e) {
                    let t = {},
                      r = 0;
                    if (
                      (A(e, (e, n) => {
                        ta[n] || ((t[n] = e), r++);
                      }),
                      r)
                    )
                      return t;
                  })(e);
                  if (t) {
                    let r = { to: t };
                    return A(e, (e, n) => n in t || (r[n] = e)), r;
                  }
                  return e8({}, e);
                }
                function tl(e) {
                  return (
                    (e = ev(e)),
                    V.arr(e)
                      ? e.map(tl)
                      : e$(e)
                      ? $.createStringInterpolator({
                          range: [0, 1],
                          output: [e, e],
                        })(1)
                      : e
                  );
                }
                function tu(e) {
                  return V.fun(e) || (V.arr(e) && V.obj(e[0]));
                }
                let td = e8(
                  {},
                  { tension: 170, friction: 26 },
                  { mass: 1, damping: 1, easing: (e) => e, clamp: !1 }
                );
                class th {
                  constructor() {
                    (this.tension = void 0),
                      (this.friction = void 0),
                      (this.frequency = void 0),
                      (this.damping = void 0),
                      (this.mass = void 0),
                      (this.velocity = 0),
                      (this.restVelocity = void 0),
                      (this.precision = void 0),
                      (this.progress = void 0),
                      (this.duration = void 0),
                      (this.easing = void 0),
                      (this.clamp = void 0),
                      (this.bounce = void 0),
                      (this.decay = void 0),
                      (this.round = void 0),
                      Object.assign(this, td);
                  }
                }
                function tc(e, t) {
                  if (V.und(t.decay)) {
                    let r = !V.und(t.tension) || !V.und(t.friction);
                    (!r &&
                      V.und(t.frequency) &&
                      V.und(t.damping) &&
                      V.und(t.mass)) ||
                      ((e.duration = void 0), (e.decay = void 0)),
                      r && (e.frequency = void 0);
                  } else e.duration = void 0;
                }
                let tp = [];
                class tf {
                  constructor() {
                    (this.changed = !1),
                      (this.values = tp),
                      (this.toValues = null),
                      (this.fromValues = tp),
                      (this.to = void 0),
                      (this.from = void 0),
                      (this.config = new th()),
                      (this.immediate = !1);
                  }
                }
                function tm(
                  e,
                  { key: t, props: r, defaultProps: n, state: i, actions: s }
                ) {
                  return new Promise((a, o) => {
                    var u;
                    let d,
                      h,
                      c = te(
                        null != (u = r.cancel)
                          ? u
                          : null == n
                          ? void 0
                          : n.cancel,
                        t
                      );
                    if (c) m();
                    else {
                      V.und(r.pause) || (i.paused = te(r.pause, t));
                      let e = null == n ? void 0 : n.pause;
                      !0 !== e && (e = i.paused || te(e, t)),
                        (d = e6(r.delay || 0, t)),
                        e
                          ? (i.resumeQueue.add(f), s.pause())
                          : (s.resume(), f());
                    }
                    function p() {
                      i.resumeQueue.add(f),
                        i.timeouts.delete(h),
                        h.cancel(),
                        (d = h.time - l.now());
                    }
                    function f() {
                      d > 0 && !$.skipAnimation
                        ? ((i.delayed = !0),
                          (h = l.setTimeout(m, d)),
                          i.pauseQueue.add(p),
                          i.timeouts.add(h))
                        : m();
                    }
                    function m() {
                      i.delayed && (i.delayed = !1),
                        i.pauseQueue.delete(p),
                        i.timeouts.delete(h),
                        e <= (i.cancelId || 0) && (c = !0);
                      try {
                        s.start(e8({}, r, { callId: e, cancel: c }), a);
                      } catch (e) {
                        o(e);
                      }
                    }
                  });
                }
                let tg = (e, t) =>
                    1 == t.length
                      ? t[0]
                      : t.some((e) => e.cancelled)
                      ? tb(e.get())
                      : t.every((e) => e.noop)
                      ? ty(e.get())
                      : tv(
                          e.get(),
                          t.every((e) => e.finished)
                        ),
                  ty = (e) => ({
                    value: e,
                    noop: !0,
                    finished: !0,
                    cancelled: !1,
                  }),
                  tv = (e, t, r = !1) => ({
                    value: e,
                    finished: t,
                    cancelled: r,
                  }),
                  tb = (e) => ({ value: e, cancelled: !0, finished: !1 });
                function t_(e, t, r, n) {
                  let { callId: i, parentId: s, onRest: a } = t,
                    { asyncTo: o, promise: u } = r;
                  return s || e !== o || t.reset
                    ? (r.promise = (async () => {
                        let d, h, c;
                        (r.asyncId = i), (r.asyncTo = e);
                        let p = ti(t, (e, t) => ("onRest" === t ? void 0 : e)),
                          f = new Promise((e, t) => ((d = e), (h = t))),
                          m = (e) => {
                            let t =
                              (i <= (r.cancelId || 0) && tb(n)) ||
                              (i !== r.asyncId && tv(n, !1));
                            if (t) throw ((e.result = t), h(e), e);
                          },
                          g = (e, t) => {
                            let s = new tk(),
                              a = new tP();
                            return (async () => {
                              if ($.skipAnimation)
                                throw (tw(r), (a.result = tv(n, !1)), h(a), a);
                              m(s);
                              let o = V.obj(e)
                                ? e8({}, e)
                                : e8({}, t, { to: e });
                              (o.parentId = i),
                                A(p, (e, t) => {
                                  V.und(o[t]) && (o[t] = e);
                                });
                              let l = await n.start(o);
                              return (
                                m(s),
                                r.paused &&
                                  (await new Promise((e) => {
                                    r.resumeQueue.add(e);
                                  })),
                                l
                              );
                            })();
                          };
                        if ($.skipAnimation) return tw(r), tv(n, !1);
                        try {
                          let t;
                          (t = V.arr(e)
                            ? (async (e) => {
                                for (let t of e) await g(t);
                              })(e)
                            : Promise.resolve(e(g, n.stop.bind(n)))),
                            await Promise.all([t.then(d), f]),
                            (c = tv(n.get(), !0, !1));
                        } catch (e) {
                          if (e instanceof tk) c = e.result;
                          else {
                            if (!(e instanceof tP)) throw e;
                            c = e.result;
                          }
                        } finally {
                          i == r.asyncId &&
                            ((r.asyncId = s),
                            (r.asyncTo = s ? o : void 0),
                            (r.promise = s ? u : void 0));
                        }
                        return (
                          V.fun(a) &&
                            l.batchedUpdates(() => {
                              a(c, n, n.item);
                            }),
                          c
                        );
                      })())
                    : u;
                }
                function tw(e, t) {
                  R(e.timeouts, (e) => e.cancel()),
                    e.pauseQueue.clear(),
                    e.resumeQueue.clear(),
                    (e.asyncId = e.asyncTo = e.promise = void 0),
                    t && (e.cancelId = t);
                }
                class tk extends Error {
                  constructor() {
                    super(
                      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
                    ),
                      (this.result = void 0);
                  }
                }
                class tP extends Error {
                  constructor() {
                    super("SkipAnimationSignal"), (this.result = void 0);
                  }
                }
                let tS = (e) => e instanceof tV,
                  tx = 1;
                class tV extends ew {
                  constructor(...e) {
                    super(...e),
                      (this.id = tx++),
                      (this.key = void 0),
                      (this._priority = 0);
                  }
                  get priority() {
                    return this._priority;
                  }
                  set priority(e) {
                    this._priority != e &&
                      ((this._priority = e), this._onPriorityChange(e));
                  }
                  get() {
                    let e = eG(this);
                    return e && e.getValue();
                  }
                  to(...e) {
                    return $.to(this, e);
                  }
                  interpolate(...e) {
                    return (
                      eT(
                        `${eN}The "interpolate" function is deprecated in v9 (use "to" instead)`
                      ),
                      $.to(this, e)
                    );
                  }
                  toJSON() {
                    return this.get();
                  }
                  observerAdded(e) {
                    1 == e && this._attach();
                  }
                  observerRemoved(e) {
                    0 == e && this._detach();
                  }
                  _attach() {}
                  _detach() {}
                  _onChange(e, t = !1) {
                    e_(this, {
                      type: "change",
                      parent: this,
                      value: e,
                      idle: t,
                    });
                  }
                  _onPriorityChange(e) {
                    this.idle || Q.sort(this),
                      e_(this, { type: "priority", parent: this, priority: e });
                  }
                }
                let tO = Symbol.for("SpringPhase"),
                  tC = (e) => (1 & e[tO]) > 0,
                  tA = (e) => (2 & e[tO]) > 0,
                  tI = (e) => (4 & e[tO]) > 0,
                  tR = (e, t) => (t ? (e[tO] |= 3) : (e[tO] &= -3)),
                  tj = (e, t) => (t ? (e[tO] |= 4) : (e[tO] &= -5));
                class tE extends tV {
                  constructor(e, t) {
                    if (
                      (super(),
                      (this.key = void 0),
                      (this.animation = new tf()),
                      (this.queue = void 0),
                      (this.defaultProps = {}),
                      (this._state = {
                        paused: !1,
                        delayed: !1,
                        pauseQueue: new Set(),
                        resumeQueue: new Set(),
                        timeouts: new Set(),
                      }),
                      (this._pendingCalls = new Set()),
                      (this._lastCallId = 0),
                      (this._lastToId = 0),
                      (this._memoizedDuration = 0),
                      !V.und(e) || !V.und(t))
                    ) {
                      let r = V.obj(e) ? e8({}, e) : e8({}, t, { from: e });
                      V.und(r.default) && (r.default = !0), this.start(r);
                    }
                  }
                  get idle() {
                    return !(tA(this) || this._state.asyncTo) || tI(this);
                  }
                  get goal() {
                    return ev(this.animation.to);
                  }
                  get velocity() {
                    let e = eG(this);
                    return e instanceof eH
                      ? e.lastVelocity || 0
                      : e.getPayload().map((e) => e.lastVelocity || 0);
                  }
                  get hasAnimated() {
                    return tC(this);
                  }
                  get isAnimating() {
                    return tA(this);
                  }
                  get isPaused() {
                    return tI(this);
                  }
                  get isDelayed() {
                    return this._state.delayed;
                  }
                  advance(e) {
                    let t = !0,
                      r = !1,
                      n = this.animation,
                      { config: i, toValues: s } = n,
                      a = eY(n.to);
                    !a && ey(n.to) && (s = I(ev(n.to))),
                      n.values.forEach((o, l) => {
                        if (o.done) return;
                        let u =
                            o.constructor == eJ
                              ? 1
                              : a
                              ? a[l].lastPosition
                              : s[l],
                          d = n.immediate,
                          h = u;
                        if (!d) {
                          let t;
                          if (((h = o.lastPosition), i.tension <= 0))
                            return void (o.done = !0);
                          let r = (o.elapsedTime += e),
                            s = n.fromValues[l],
                            a =
                              null != o.v0
                                ? o.v0
                                : (o.v0 = V.arr(i.velocity)
                                    ? i.velocity[l]
                                    : i.velocity);
                          if (V.und(i.duration)) {
                            if (i.decay) {
                              let e = !0 === i.decay ? 0.998 : i.decay,
                                n = Math.exp(-(1 - e) * r);
                              (h = s + (a / (1 - e)) * (1 - n)),
                                (d = 0.1 > Math.abs(o.lastPosition - h)),
                                (t = a * n);
                            } else {
                              t = null == o.lastVelocity ? a : o.lastVelocity;
                              let r =
                                  i.precision ||
                                  (s == u
                                    ? 0.005
                                    : Math.min(1, 0.001 * Math.abs(u - s))),
                                n = i.restVelocity || r / 10,
                                l = i.clamp ? 0 : i.bounce,
                                c = !V.und(l),
                                p = s == u ? o.v0 > 0 : s < u,
                                f = Math.ceil(e / 1);
                              for (
                                let e = 0;
                                e < f &&
                                (Math.abs(t) > n ||
                                  !(d = Math.abs(u - h) <= r));
                                ++e
                              )
                                c &&
                                  (h == u || h > u == p) &&
                                  ((t = -t * l), (h = u)),
                                  (t +=
                                    ((-(1e-6 * i.tension) * (h - u) +
                                      -(0.001 * i.friction) * t) /
                                      i.mass) *
                                    1),
                                  (h += 1 * t);
                            }
                          } else {
                            let n = 1;
                            i.duration > 0 &&
                              (this._memoizedDuration !== i.duration &&
                                ((this._memoizedDuration = i.duration),
                                o.durationProgress > 0 &&
                                  ((o.elapsedTime =
                                    i.duration * o.durationProgress),
                                  (r = o.elapsedTime += e))),
                              (n =
                                (n =
                                  (i.progress || 0) +
                                  r / this._memoizedDuration) > 1
                                  ? 1
                                  : n < 0
                                  ? 0
                                  : n),
                              (o.durationProgress = n)),
                              (t =
                                ((h = s + i.easing(n) * (u - s)) -
                                  o.lastPosition) /
                                e),
                              (d = 1 == n);
                          }
                          (o.lastVelocity = t),
                            Number.isNaN(h) &&
                              (console.warn("Got NaN while animating:", this),
                              (d = !0));
                        }
                        a && !a[l].done && (d = !1),
                          d ? (o.done = !0) : (t = !1),
                          o.setValue(h, i.round) && (r = !0);
                      });
                    let o = eG(this),
                      l = o.getValue();
                    if (t) {
                      let e = ev(n.to);
                      (l === e && !r) || i.decay
                        ? r && i.decay && this._onChange(l)
                        : (o.setValue(e), this._onChange(e)),
                        this._stop();
                    } else r && this._onChange(l);
                  }
                  set(e) {
                    return (
                      l.batchedUpdates(() => {
                        this._stop(), this._focus(e), this._set(e);
                      }),
                      this
                    );
                  }
                  pause() {
                    this._update({ pause: !0 });
                  }
                  resume() {
                    this._update({ pause: !1 });
                  }
                  finish() {
                    if (tA(this)) {
                      let { to: e, config: t } = this.animation;
                      l.batchedUpdates(() => {
                        this._onStart(),
                          t.decay || this._set(e, !1),
                          this._stop();
                      });
                    }
                    return this;
                  }
                  update(e) {
                    return (this.queue || (this.queue = [])).push(e), this;
                  }
                  start(e, t) {
                    let r;
                    return (
                      V.und(e)
                        ? ((r = this.queue || []), (this.queue = []))
                        : (r = [V.obj(e) ? e : e8({}, t, { to: e })]),
                      Promise.all(r.map((e) => this._update(e))).then((e) =>
                        tg(this, e)
                      )
                    );
                  }
                  stop(e) {
                    let { to: t } = this.animation;
                    return (
                      this._focus(this.get()),
                      tw(this._state, e && this._lastCallId),
                      l.batchedUpdates(() => this._stop(t, e)),
                      this
                    );
                  }
                  reset() {
                    this._update({ reset: !0 });
                  }
                  eventObserved(e) {
                    "change" == e.type
                      ? this._start()
                      : "priority" == e.type &&
                        (this.priority = e.priority + 1);
                  }
                  _prepareNode(e) {
                    let t = this.key || "",
                      { to: r, from: n } = e;
                    (null == (r = V.obj(r) ? r[t] : r) || tu(r)) &&
                      (r = void 0),
                      null == (n = V.obj(n) ? n[t] : n) && (n = void 0);
                    let i = { to: r, from: n };
                    return (
                      tC(this) ||
                        (e.reverse && ([r, n] = [n, r]),
                        (n = ev(n)),
                        V.und(n) ? eG(this) || this._set(r) : this._set(n)),
                      i
                    );
                  }
                  _update(e, t) {
                    let r = e8({}, e),
                      { key: n, defaultProps: i } = this;
                    r.default &&
                      Object.assign(
                        i,
                        ti(r, (e, t) => (/^on/.test(t) ? tt(e, n) : e))
                      ),
                      t$(this, r, "onProps"),
                      tF(this, "onProps", r, this);
                    let s = this._prepareNode(r);
                    if (Object.isFrozen(this))
                      throw Error(
                        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
                      );
                    let a = this._state;
                    return tm(++this._lastCallId, {
                      key: n,
                      props: r,
                      defaultProps: i,
                      state: a,
                      actions: {
                        pause: () => {
                          tI(this) ||
                            (tj(this, !0),
                            j(a.pauseQueue),
                            tF(
                              this,
                              "onPause",
                              tv(this, tM(this, this.animation.to)),
                              this
                            ));
                        },
                        resume: () => {
                          tI(this) &&
                            (tj(this, !1),
                            tA(this) && this._resume(),
                            j(a.resumeQueue),
                            tF(
                              this,
                              "onResume",
                              tv(this, tM(this, this.animation.to)),
                              this
                            ));
                        },
                        start: this._merge.bind(this, s),
                      },
                    }).then((e) => {
                      if (r.loop && e.finished && (!t || !e.noop)) {
                        let e = tN(r);
                        if (e) return this._update(e, !0);
                      }
                      return e;
                    });
                  }
                  _merge(e, t, r) {
                    if (t.cancel) return this.stop(!0), r(tb(this));
                    let n = !V.und(e.to),
                      i = !V.und(e.from);
                    if (n || i) {
                      if (!(t.callId > this._lastToId)) return r(tb(this));
                      this._lastToId = t.callId;
                    }
                    let { key: s, defaultProps: a, animation: o } = this,
                      { to: u, from: d } = o,
                      { to: h = u, from: c = d } = e;
                    !i || n || (t.default && !V.und(h)) || (h = c),
                      t.reverse && ([h, c] = [c, h]);
                    let p = !O(c, d);
                    p && (o.from = c), (c = ev(c));
                    let f = !O(h, u);
                    f && this._focus(h);
                    let m = tu(t.to),
                      { config: g } = o,
                      { decay: y, velocity: v } = g;
                    (n || i) && (g.velocity = 0),
                      t.config &&
                        !m &&
                        (function (e, t, r) {
                          for (let n in (r &&
                            (tc((r = e8({}, r)), t), (t = e8({}, r, t))),
                          tc(e, t),
                          Object.assign(e, t),
                          td))
                            null == e[n] && (e[n] = td[n]);
                          let { mass: n, frequency: i, damping: s } = e;
                          V.und(i) ||
                            (i < 0.01 && (i = 0.01),
                            s < 0 && (s = 0),
                            (e.tension = Math.pow((2 * Math.PI) / i, 2) * n),
                            (e.friction = (4 * Math.PI * s * n) / i));
                        })(
                          g,
                          e6(t.config, s),
                          t.config !== a.config ? e6(a.config, s) : void 0
                        );
                    let b = eG(this);
                    if (!b || V.und(h)) return r(tv(this, !0));
                    let _ = V.und(t.reset)
                        ? i && !t.default
                        : !V.und(c) && te(t.reset, s),
                      w = _ ? c : this.get(),
                      k = tl(h),
                      P = V.num(k) || V.arr(k) || e$(k),
                      S = !m && (!P || te(a.immediate || t.immediate, s));
                    if (f) {
                      let e = e2(h);
                      if (e !== b.constructor) {
                        if (!S)
                          throw Error(
                            `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`
                          );
                        b = this._set(k);
                      }
                    }
                    let x = b.constructor,
                      A = ey(h),
                      R = !1;
                    if (!A) {
                      let e = _ || (!tC(this) && p);
                      (f || e) && (A = !(R = O(tl(w), k))),
                        ((O(o.immediate, S) || S) &&
                          O(g.decay, y) &&
                          O(g.velocity, v)) ||
                          (A = !0);
                    }
                    if (
                      (R &&
                        tA(this) &&
                        (o.changed && !_ ? (A = !0) : A || this._stop(u)),
                      !m &&
                        ((A || ey(u)) &&
                          ((o.values = b.getPayload()),
                          (o.toValues = ey(h) ? null : x == eJ ? [1] : I(k))),
                        o.immediate != S &&
                          ((o.immediate = S), S || _ || this._set(u)),
                        A))
                    ) {
                      let { onRest: e } = o;
                      C(tz, (e) => t$(this, t, e));
                      let n = tv(this, tM(this, u));
                      j(this._pendingCalls, n),
                        this._pendingCalls.add(r),
                        o.changed &&
                          l.batchedUpdates(() => {
                            (o.changed = !_),
                              null == e || e(n, this),
                              _
                                ? e6(a.onRest, n)
                                : null == o.onStart || o.onStart(n, this);
                          });
                    }
                    _ && this._set(w),
                      m
                        ? r(t_(t.to, t, this._state, this))
                        : A
                        ? this._start()
                        : tA(this) && !f
                        ? this._pendingCalls.add(r)
                        : r(ty(w));
                  }
                  _focus(e) {
                    let t = this.animation;
                    e !== t.to &&
                      (eb(this) && this._detach(),
                      (t.to = e),
                      eb(this) && this._attach());
                  }
                  _attach() {
                    let e = 0,
                      { to: t } = this.animation;
                    ey(t) && (eP(t, this), tS(t) && (e = t.priority + 1)),
                      (this.priority = e);
                  }
                  _detach() {
                    let { to: e } = this.animation;
                    ey(e) && eS(e, this);
                  }
                  _set(e, t = !0) {
                    let r = ev(e);
                    if (!V.und(r)) {
                      let e = eG(this);
                      if (!e || !O(r, e.getValue())) {
                        let n = e2(r);
                        e && e.constructor == n
                          ? e.setValue(r)
                          : eB(this, n.create(r)),
                          e &&
                            l.batchedUpdates(() => {
                              this._onChange(r, t);
                            });
                      }
                    }
                    return eG(this);
                  }
                  _onStart() {
                    let e = this.animation;
                    e.changed ||
                      ((e.changed = !0),
                      tF(this, "onStart", tv(this, tM(this, e.to)), this));
                  }
                  _onChange(e, t) {
                    t ||
                      (this._onStart(), e6(this.animation.onChange, e, this)),
                      e6(this.defaultProps.onChange, e, this),
                      super._onChange(e, t);
                  }
                  _start() {
                    let e = this.animation;
                    eG(this).reset(ev(e.to)),
                      e.immediate ||
                        (e.fromValues = e.values.map((e) => e.lastPosition)),
                      tA(this) || (tR(this, !0), tI(this) || this._resume());
                  }
                  _resume() {
                    $.skipAnimation ? this.finish() : Q.start(this);
                  }
                  _stop(e, t) {
                    if (tA(this)) {
                      tR(this, !1);
                      let r = this.animation;
                      C(r.values, (e) => {
                        e.done = !0;
                      }),
                        r.toValues &&
                          (r.onChange = r.onPause = r.onResume = void 0),
                        e_(this, { type: "idle", parent: this });
                      let n = t
                        ? tb(this.get())
                        : tv(this.get(), tM(this, null != e ? e : r.to));
                      j(this._pendingCalls, n),
                        r.changed &&
                          ((r.changed = !1), tF(this, "onRest", n, this));
                    }
                  }
                }
                function tM(e, t) {
                  let r = tl(t);
                  return O(tl(e.get()), r);
                }
                function tN(e, t = e.loop, r = e.to) {
                  let n = e6(t);
                  if (n) {
                    let i = !0 !== n && to(n),
                      s = (i || e).reverse,
                      a = !i || i.reset;
                    return tq(
                      e8(
                        {},
                        e,
                        {
                          loop: t,
                          default: !1,
                          pause: void 0,
                          to: !s || tu(r) ? r : void 0,
                          from: a ? e.from : void 0,
                          reset: a,
                        },
                        i
                      )
                    );
                  }
                }
                function tq(e) {
                  let { to: t, from: r } = (e = to(e)),
                    n = new Set();
                  return (
                    V.obj(t) && tT(t, n),
                    V.obj(r) && tT(r, n),
                    (e.keys = n.size ? Array.from(n) : null),
                    e
                  );
                }
                function tT(e, t) {
                  A(e, (e, r) => null != e && t.add(r));
                }
                let tz = [
                  "onStart",
                  "onRest",
                  "onChange",
                  "onPause",
                  "onResume",
                ];
                function t$(e, t, r) {
                  e.animation[r] = t[r] !== tr(t, r) ? tt(t[r], e.key) : void 0;
                }
                function tF(e, t, ...r) {
                  var n, i, s, a;
                  null == (n = (i = e.animation)[t]) || n.call(i, ...r),
                    null == (s = (a = e.defaultProps)[t]) || s.call(a, ...r);
                }
                let tU = ["onStart", "onChange", "onRest"],
                  tD = 1;
                class tL {
                  constructor(e, t) {
                    (this.id = tD++),
                      (this.springs = {}),
                      (this.queue = []),
                      (this.ref = void 0),
                      (this._flush = void 0),
                      (this._initialProps = void 0),
                      (this._lastAsyncId = 0),
                      (this._active = new Set()),
                      (this._changed = new Set()),
                      (this._started = !1),
                      (this._item = void 0),
                      (this._state = {
                        paused: !1,
                        pauseQueue: new Set(),
                        resumeQueue: new Set(),
                        timeouts: new Set(),
                      }),
                      (this._events = {
                        onStart: new Map(),
                        onChange: new Map(),
                        onRest: new Map(),
                      }),
                      (this._onFrame = this._onFrame.bind(this)),
                      t && (this._flush = t),
                      e && this.start(e8({ default: !0 }, e));
                  }
                  get idle() {
                    return (
                      !this._state.asyncTo &&
                      Object.values(this.springs).every(
                        (e) => e.idle && !e.isDelayed && !e.isPaused
                      )
                    );
                  }
                  get item() {
                    return this._item;
                  }
                  set item(e) {
                    this._item = e;
                  }
                  get() {
                    let e = {};
                    return this.each((t, r) => (e[r] = t.get())), e;
                  }
                  set(e) {
                    for (let t in e) {
                      let r = e[t];
                      V.und(r) || this.springs[t].set(r);
                    }
                  }
                  update(e) {
                    return e && this.queue.push(tq(e)), this;
                  }
                  start(e) {
                    let { queue: t } = this;
                    return (
                      e ? (t = I(e).map(tq)) : (this.queue = []),
                      this._flush
                        ? this._flush(this, t)
                        : (tH(this, t), tQ(this, t))
                    );
                  }
                  stop(e, t) {
                    if ((!!e !== e && (t = e), t)) {
                      let r = this.springs;
                      C(I(t), (t) => r[t].stop(!!e));
                    } else
                      tw(this._state, this._lastAsyncId),
                        this.each((t) => t.stop(!!e));
                    return this;
                  }
                  pause(e) {
                    if (V.und(e)) this.start({ pause: !0 });
                    else {
                      let t = this.springs;
                      C(I(e), (e) => t[e].pause());
                    }
                    return this;
                  }
                  resume(e) {
                    if (V.und(e)) this.start({ pause: !1 });
                    else {
                      let t = this.springs;
                      C(I(e), (e) => t[e].resume());
                    }
                    return this;
                  }
                  each(e) {
                    A(this.springs, e);
                  }
                  _onFrame() {
                    let { onStart: e, onChange: t, onRest: r } = this._events,
                      n = this._active.size > 0,
                      i = this._changed.size > 0;
                    ((n && !this._started) || (i && !this._started)) &&
                      ((this._started = !0),
                      R(e, ([e, t]) => {
                        (t.value = this.get()), e(t, this, this._item);
                      }));
                    let s = !n && this._started,
                      a = i || (s && r.size) ? this.get() : null;
                    i &&
                      t.size &&
                      R(t, ([e, t]) => {
                        (t.value = a), e(t, this, this._item);
                      }),
                      s &&
                        ((this._started = !1),
                        R(r, ([e, t]) => {
                          (t.value = a), e(t, this, this._item);
                        }));
                  }
                  eventObserved(e) {
                    if ("change" == e.type)
                      this._changed.add(e.parent),
                        e.idle || this._active.add(e.parent);
                    else {
                      if ("idle" != e.type) return;
                      this._active.delete(e.parent);
                    }
                    l.onFrame(this._onFrame);
                  }
                }
                function tQ(e, t) {
                  return Promise.all(t.map((t) => tW(e, t))).then((t) =>
                    tg(e, t)
                  );
                }
                async function tW(e, t, r) {
                  let {
                      keys: n,
                      to: i,
                      from: s,
                      loop: a,
                      onRest: o,
                      onResolve: u,
                    } = t,
                    d = V.obj(t.default) && t.default;
                  a && (t.loop = !1),
                    !1 === i && (t.to = null),
                    !1 === s && (t.from = null);
                  let h = V.arr(i) || V.fun(i) ? i : void 0;
                  h
                    ? ((t.to = void 0),
                      (t.onRest = void 0),
                      d && (d.onRest = void 0))
                    : C(tU, (r) => {
                        let n = t[r];
                        if (V.fun(n)) {
                          let i = e._events[r];
                          (t[r] = ({ finished: e, cancelled: t }) => {
                            let r = i.get(n);
                            r
                              ? (e || (r.finished = !1),
                                t && (r.cancelled = !0))
                              : i.set(n, {
                                  value: null,
                                  finished: e || !1,
                                  cancelled: t || !1,
                                });
                          }),
                            d && (d[r] = t[r]);
                        }
                      });
                  let c = e._state;
                  !c.paused === t.pause
                    ? ((c.paused = t.pause),
                      j(t.pause ? c.pauseQueue : c.resumeQueue))
                    : c.paused && (t.pause = !0);
                  let p = (n || Object.keys(e.springs)).map((r) =>
                      e.springs[r].start(t)
                    ),
                    f = !0 === t.cancel || !0 === tr(t, "cancel");
                  (h || (f && c.asyncId)) &&
                    p.push(
                      tm(++e._lastAsyncId, {
                        props: t,
                        state: c,
                        actions: {
                          pause: x,
                          resume: x,
                          start(t, r) {
                            f
                              ? (tw(c, e._lastAsyncId), r(tb(e)))
                              : ((t.onRest = o), r(t_(h, t, c, e)));
                          },
                        },
                      })
                    ),
                    c.paused &&
                      (await new Promise((e) => {
                        c.resumeQueue.add(e);
                      }));
                  let m = tg(e, await Promise.all(p));
                  if (a && m.finished && (!r || !m.noop)) {
                    let r = tN(t, a, i);
                    if (r) return tH(e, [r]), tW(e, r, !0);
                  }
                  return u && l.batchedUpdates(() => u(m, e, e.item)), m;
                }
                function tG(e, t) {
                  let r = e8({}, e.springs);
                  return (
                    t &&
                      C(I(t), (e) => {
                        V.und(e.keys) && (e = tq(e)),
                          V.obj(e.to) || (e = e8({}, e, { to: void 0 })),
                          tZ(r, e, (e) => tY(e));
                      }),
                    tB(e, r),
                    r
                  );
                }
                function tB(e, t) {
                  A(t, (t, r) => {
                    e.springs[r] || ((e.springs[r] = t), eP(t, e));
                  });
                }
                function tY(e, t) {
                  let r = new tE();
                  return (r.key = e), t && eP(r, t), r;
                }
                function tZ(e, t, r) {
                  t.keys &&
                    C(t.keys, (n) => {
                      (e[n] || (e[n] = r(n)))._prepareNode(t);
                    });
                }
                function tH(e, t) {
                  C(t, (t) => {
                    tZ(e.springs, t, (t) => tY(t, e));
                  });
                }
                function tJ(e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    i = {},
                    s = Object.keys(e);
                  for (n = 0; n < s.length; n++)
                    (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i;
                }
                let tX = ["children"],
                  tK = (e) => {
                    let { children: t } = e,
                      r = tJ(e, tX),
                      n = (0, i.useContext)(t0),
                      s = r.pause || !!n.pause,
                      a = r.immediate || !!n.immediate;
                    r = (function (e, t) {
                      let [r] = (0, i.useState)(() => ({
                          inputs: t,
                          result: e(),
                        })),
                        n = (0, i.useRef)(),
                        s = n.current,
                        a = s;
                      return (
                        a
                          ? (t &&
                              a.inputs &&
                              (function (e, t) {
                                if (e.length !== t.length) return !1;
                                for (let r = 0; r < e.length; r++)
                                  if (e[r] !== t[r]) return !1;
                                return !0;
                              })(t, a.inputs)) ||
                            (a = { inputs: t, result: e() })
                          : (a = r),
                        (0, i.useEffect)(() => {
                          (n.current = a),
                            s == r && (r.inputs = r.result = void 0);
                        }, [a]),
                        a.result
                      );
                    })(() => ({ pause: s, immediate: a }), [s, a]);
                    let { Provider: o } = t0;
                    return i.createElement(o, { value: r }, t);
                  },
                  t0 =
                    (Object.assign(tK, i.createContext({})),
                    (tK.Provider._context = tK),
                    (tK.Consumer._context = tK),
                    tK);
                (tK.Provider = t0.Provider), (tK.Consumer = t0.Consumer);
                let t1 = () => {
                  let e = [],
                    t = function (t) {
                      ez(
                        `${eN}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
                      );
                      let n = [];
                      return (
                        C(e, (e, i) => {
                          if (V.und(t)) n.push(e.start());
                          else {
                            let s = r(t, e, i);
                            s && n.push(e.start(s));
                          }
                        }),
                        n
                      );
                    };
                  (t.current = e),
                    (t.add = function (t) {
                      e.includes(t) || e.push(t);
                    }),
                    (t.delete = function (t) {
                      let r = e.indexOf(t);
                      ~r && e.splice(r, 1);
                    }),
                    (t.pause = function () {
                      return C(e, (e) => e.pause(...arguments)), this;
                    }),
                    (t.resume = function () {
                      return C(e, (e) => e.resume(...arguments)), this;
                    }),
                    (t.set = function (t) {
                      C(e, (e) => e.set(t));
                    }),
                    (t.start = function (t) {
                      let r = [];
                      return (
                        C(e, (e, n) => {
                          if (V.und(t)) r.push(e.start());
                          else {
                            let i = this._getProps(t, e, n);
                            i && r.push(e.start(i));
                          }
                        }),
                        r
                      );
                    }),
                    (t.stop = function () {
                      return C(e, (e) => e.stop(...arguments)), this;
                    }),
                    (t.update = function (t) {
                      return (
                        C(e, (e, r) => e.update(this._getProps(t, e, r))), this
                      );
                    });
                  let r = function (e, t, r) {
                    return V.fun(e) ? e(r, t) : e;
                  };
                  return (t._getProps = r), t;
                };
                ((n = t || (t = {})).MOUNT = "mount"),
                  (n.ENTER = "enter"),
                  (n.UPDATE = "update"),
                  (n.LEAVE = "leave");
                let t2 = ["children"];
                function t5(e) {
                  let { children: t } = e;
                  return t(
                    (function (e, t) {
                      let r = V.fun(e),
                        [[n], s] = (function (e, t, r) {
                          let n = V.fun(t) && t;
                          n && !r && (r = []);
                          let s = (0, i.useMemo)(
                              () =>
                                n || 3 == arguments.length ? t1() : void 0,
                              []
                            ),
                            a = (0, i.useRef)(0),
                            o = eU(),
                            l = (0, i.useMemo)(
                              () => ({
                                ctrls: [],
                                queue: [],
                                flush(e, t) {
                                  let r = tG(e, t);
                                  return !(a.current > 0) ||
                                    l.queue.length ||
                                    Object.keys(r).some((t) => !e.springs[t])
                                    ? new Promise((n) => {
                                        tB(e, r),
                                          l.queue.push(() => {
                                            n(tQ(e, t));
                                          }),
                                          o();
                                      })
                                    : tQ(e, t);
                                },
                              }),
                              []
                            ),
                            u = (0, i.useRef)([...l.ctrls]),
                            d = [],
                            h = eQ(e) || 0;
                          function c(e, r) {
                            for (let i = e; i < r; i++) {
                              let e =
                                  u.current[i] ||
                                  (u.current[i] = new tL(null, l.flush)),
                                r = n ? n(i, e) : t[i];
                              r &&
                                (d[i] = (function (e) {
                                  let t = tq(e);
                                  return (
                                    V.und(t.default) && (t.default = ti(t)), t
                                  );
                                })(r));
                            }
                          }
                          (0, i.useMemo)(() => {
                            C(u.current.slice(e, h), (e) => {
                              var t;
                              null == (t = e.ref) || t.delete(e),
                                null == s || s.delete(e),
                                e.stop(!0);
                            }),
                              (u.current.length = e),
                              c(h, e);
                          }, [e]),
                            (0, i.useMemo)(() => {
                              c(0, Math.min(h, e));
                            }, r);
                          let p = u.current.map((e, t) => tG(e, d[t])),
                            f = (0, i.useContext)(tK),
                            m = eQ(f),
                            g =
                              f !== m &&
                              (function (e) {
                                for (let t in e) return !0;
                                return !1;
                              })(f);
                          eF(() => {
                            a.current++, (l.ctrls = u.current);
                            let { queue: e } = l;
                            e.length && ((l.queue = []), C(e, (e) => e())),
                              C(u.current, (e, t) => {
                                var r, n;
                                null == s || s.add(e),
                                  g && e.start({ default: f });
                                let i = d[t];
                                i &&
                                  ((r = i.ref) &&
                                    e.ref !== r &&
                                    (null == (n = e.ref) || n.delete(e),
                                    r.add(e),
                                    (e.ref = r)),
                                  e.ref ? e.queue.push(i) : e.start(i));
                              });
                          }),
                            eD(() => () => {
                              C(l.ctrls, (e) => e.stop(!0));
                            });
                          let y = p.map((e) => e8({}, e));
                          return s ? [y, s] : y;
                        })(1, r ? e : [e], r ? t || [] : t);
                      return r || 2 == arguments.length ? [n, s] : n;
                    })(tJ(e, t2))
                  );
                }
                class t3 extends tV {
                  constructor(e, t) {
                    super(),
                      (this.key = void 0),
                      (this.idle = !0),
                      (this.calc = void 0),
                      (this._active = new Set()),
                      (this.source = e),
                      (this.calc = ep(...t));
                    let r = this._get(),
                      n = e2(r);
                    eB(this, n.create(r));
                  }
                  advance(e) {
                    let t = this._get();
                    O(t, this.get()) ||
                      (eG(this).setValue(t), this._onChange(t, this.idle)),
                      !this.idle && t4(this._active) && t7(this);
                  }
                  _get() {
                    let e = V.arr(this.source)
                      ? this.source.map(ev)
                      : I(ev(this.source));
                    return this.calc(...e);
                  }
                  _start() {
                    this.idle &&
                      !t4(this._active) &&
                      ((this.idle = !1),
                      C(eY(this), (e) => {
                        e.done = !1;
                      }),
                      $.skipAnimation
                        ? (l.batchedUpdates(() => this.advance()), t7(this))
                        : Q.start(this));
                  }
                  _attach() {
                    let e = 1;
                    C(I(this.source), (t) => {
                      ey(t) && eP(t, this),
                        tS(t) &&
                          (t.idle || this._active.add(t),
                          (e = Math.max(e, t.priority + 1)));
                    }),
                      (this.priority = e),
                      this._start();
                  }
                  _detach() {
                    C(I(this.source), (e) => {
                      ey(e) && eS(e, this);
                    }),
                      this._active.clear(),
                      t7(this);
                  }
                  eventObserved(e) {
                    "change" == e.type
                      ? e.idle
                        ? this.advance()
                        : (this._active.add(e.parent), this._start())
                      : "idle" == e.type
                      ? this._active.delete(e.parent)
                      : "priority" == e.type &&
                        (this.priority = I(this.source).reduce(
                          (e, t) => Math.max(e, (tS(t) ? t.priority : 0) + 1),
                          0
                        ));
                  }
                }
                function t9(e) {
                  return !1 !== e.idle;
                }
                function t4(e) {
                  return !e.size || Array.from(e).every(t9);
                }
                function t7(e) {
                  e.idle ||
                    ((e.idle = !0),
                    C(eY(e), (e) => {
                      e.done = !0;
                    }),
                    e_(e, { type: "idle", parent: e }));
                }
                $.assign({
                  createStringInterpolator: eM,
                  to: (e, t) => new t3(e, t),
                }),
                  Q.advance;
                var t8 = r(268);
                function t6(e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    i = {},
                    s = Object.keys(e);
                  for (n = 0; n < s.length; n++)
                    (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i;
                }
                let re = ["style", "children", "scrollTop", "scrollLeft"],
                  rt = /^--/,
                  rr = {},
                  rn = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0,
                  },
                  ri = ["Webkit", "Ms", "Moz", "O"];
                rn = Object.keys(rn).reduce(
                  (e, t) => (
                    ri.forEach(
                      (r) =>
                        (e[r + t.charAt(0).toUpperCase() + t.substring(1)] =
                          e[t])
                    ),
                    e
                  ),
                  rn
                );
                let rs = ["x", "y", "z"],
                  ra = /^(matrix|translate|scale|rotate|skew)/,
                  ro = /^(translate)/,
                  rl = /^(rotate|skew)/,
                  ru = (e, t) => (V.num(e) && 0 !== e ? e + t : e),
                  rd = (e, t) =>
                    V.arr(e)
                      ? e.every((e) => rd(e, t))
                      : V.num(e)
                      ? e === t
                      : parseFloat(e) === t;
                class rh extends eK {
                  constructor(e) {
                    let { x: t, y: r, z: n } = e,
                      i = t6(e, rs),
                      s = [],
                      a = [];
                    (t || r || n) &&
                      (s.push([t || 0, r || 0, n || 0]),
                      a.push((e) => [
                        `translate3d(${e.map((e) => ru(e, "px")).join(",")})`,
                        rd(e, 0),
                      ])),
                      A(i, (e, t) => {
                        if ("transform" === t)
                          s.push([e || ""]), a.push((e) => [e, "" === e]);
                        else if (ra.test(t)) {
                          if ((delete i[t], V.und(e))) return;
                          let r = ro.test(t) ? "px" : rl.test(t) ? "deg" : "";
                          s.push(I(e)),
                            a.push(
                              "rotate3d" === t
                                ? ([e, t, n, i]) => [
                                    `rotate3d(${e},${t},${n},${ru(i, r)})`,
                                    rd(i, 0),
                                  ]
                                : (e) => [
                                    `${t}(${e.map((e) => ru(e, r)).join(",")})`,
                                    rd(e, t.startsWith("scale") ? 1 : 0),
                                  ]
                            );
                        }
                      }),
                      s.length && (i.transform = new rc(s, a)),
                      super(i);
                  }
                }
                class rc extends ew {
                  constructor(e, t) {
                    super(),
                      (this._value = null),
                      (this.inputs = e),
                      (this.transforms = t);
                  }
                  get() {
                    return this._value || (this._value = this._get());
                  }
                  _get() {
                    let e = "",
                      t = !0;
                    return (
                      C(this.inputs, (r, n) => {
                        let i = ev(r[0]),
                          [s, a] = this.transforms[n](V.arr(i) ? i : r.map(ev));
                        (e += " " + s), (t = t && a);
                      }),
                      t ? "none" : e
                    );
                  }
                  observerAdded(e) {
                    1 == e &&
                      C(this.inputs, (e) => C(e, (e) => ey(e) && eP(e, this)));
                  }
                  observerRemoved(e) {
                    0 == e &&
                      C(this.inputs, (e) => C(e, (e) => ey(e) && eS(e, this)));
                  }
                  eventObserved(e) {
                    "change" == e.type && (this._value = null), e_(this, e);
                  }
                }
                let rp = ["scrollTop", "scrollLeft"];
                $.assign({
                  batchedUpdates: t8.unstable_batchedUpdates,
                  createStringInterpolator: eM,
                  colors: {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199,
                  },
                });
                let rf = ((
                  e,
                  {
                    applyAnimatedValues: t = () => !1,
                    createAnimatedStyle: r = (e) => new eK(e),
                    getComponentProps: n = (e) => e,
                  } = {}
                ) => {
                  let i = {
                      applyAnimatedValues: t,
                      createAnimatedStyle: r,
                      getComponentProps: n,
                    },
                    s = (e) => {
                      let t = e7(e) || "Anonymous";
                      return (
                        ((e = V.str(e)
                          ? s[e] || (s[e] = e3(e, i))
                          : e[e4] ||
                            (e[e4] = e3(e, i))).displayName = `Animated(${t})`),
                        e
                      );
                    };
                  return (
                    A(e, (t, r) => {
                      V.arr(e) && (r = e7(t)), (s[r] = s(t));
                    }),
                    { animated: s }
                  );
                })(
                  [
                    "a",
                    "abbr",
                    "address",
                    "area",
                    "article",
                    "aside",
                    "audio",
                    "b",
                    "base",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "br",
                    "button",
                    "canvas",
                    "caption",
                    "cite",
                    "code",
                    "col",
                    "colgroup",
                    "data",
                    "datalist",
                    "dd",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "div",
                    "dl",
                    "dt",
                    "em",
                    "embed",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "head",
                    "header",
                    "hgroup",
                    "hr",
                    "html",
                    "i",
                    "iframe",
                    "img",
                    "input",
                    "ins",
                    "kbd",
                    "keygen",
                    "label",
                    "legend",
                    "li",
                    "link",
                    "main",
                    "map",
                    "mark",
                    "menu",
                    "menuitem",
                    "meta",
                    "meter",
                    "nav",
                    "noscript",
                    "object",
                    "ol",
                    "optgroup",
                    "option",
                    "output",
                    "p",
                    "param",
                    "picture",
                    "pre",
                    "progress",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "script",
                    "section",
                    "select",
                    "small",
                    "source",
                    "span",
                    "strong",
                    "style",
                    "sub",
                    "summary",
                    "sup",
                    "table",
                    "tbody",
                    "td",
                    "textarea",
                    "tfoot",
                    "th",
                    "thead",
                    "time",
                    "title",
                    "tr",
                    "track",
                    "u",
                    "ul",
                    "var",
                    "video",
                    "wbr",
                    "circle",
                    "clipPath",
                    "defs",
                    "ellipse",
                    "foreignObject",
                    "g",
                    "image",
                    "line",
                    "linearGradient",
                    "mask",
                    "path",
                    "pattern",
                    "polygon",
                    "polyline",
                    "radialGradient",
                    "rect",
                    "stop",
                    "svg",
                    "text",
                    "tspan",
                  ],
                  {
                    applyAnimatedValues: function (e, t) {
                      if (!e.nodeType || !e.setAttribute) return !1;
                      let r =
                          "filter" === e.nodeName ||
                          (e.parentNode && "filter" === e.parentNode.nodeName),
                        {
                          style: n,
                          children: i,
                          scrollTop: s,
                          scrollLeft: a,
                        } = t,
                        o = t6(t, re),
                        l = Object.values(o),
                        u = Object.keys(o).map((t) =>
                          r || e.hasAttribute(t)
                            ? t
                            : rr[t] ||
                              (rr[t] = t.replace(
                                /([A-Z])/g,
                                (e) => "-" + e.toLowerCase()
                              ))
                        );
                      for (let t in (void 0 !== i && (e.textContent = i), n))
                        if (n.hasOwnProperty(t)) {
                          var d;
                          let r =
                            null == (d = n[t]) ||
                            "boolean" == typeof d ||
                            "" === d
                              ? ""
                              : "number" != typeof d ||
                                0 === d ||
                                rt.test(t) ||
                                (rn.hasOwnProperty(t) && rn[t])
                              ? ("" + d).trim()
                              : d + "px";
                          rt.test(t)
                            ? e.style.setProperty(t, r)
                            : (e.style[t] = r);
                        }
                      u.forEach((t, r) => {
                        e.setAttribute(t, l[r]);
                      }),
                        void 0 !== s && (e.scrollTop = s),
                        void 0 !== a && (e.scrollLeft = a);
                    },
                    createAnimatedStyle: (e) => new rh(e),
                    getComponentProps: (e) => t6(e, rp),
                  }
                ).animated;
                function rm() {
                  return (rm =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n]);
                      }
                      return e;
                    }).apply(this, arguments);
                }
                function rg(e, t) {
                  return (rg =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    })(e, t);
                }
                var ry = new Map(),
                  rv = new WeakMap(),
                  rb = 0;
                function r_(e, t, r, n) {
                  if (
                    (void 0 === r && (r = {}),
                    void 0 === n && (n = void 0),
                    void 0 === window.IntersectionObserver && void 0 !== n)
                  ) {
                    var i = e.getBoundingClientRect();
                    return (
                      t(n, {
                        isIntersecting: n,
                        target: e,
                        intersectionRatio:
                          "number" == typeof r.threshold ? r.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i,
                      }),
                      function () {}
                    );
                  }
                  var s = (function (e) {
                      var t = Object.keys(e)
                          .sort()
                          .filter(function (t) {
                            return void 0 !== e[t];
                          })
                          .map(function (t) {
                            var r;
                            return (
                              t +
                              "_" +
                              ("root" === t
                                ? (r = e.root)
                                  ? (rv.has(r) ||
                                      ((rb += 1), rv.set(r, rb.toString())),
                                    rv.get(r))
                                  : "0"
                                : e[t])
                            );
                          })
                          .toString(),
                        r = ry.get(t);
                      if (!r) {
                        var n,
                          i = new Map(),
                          s = new IntersectionObserver(function (t) {
                            t.forEach(function (t) {
                              var r,
                                s =
                                  t.isIntersecting &&
                                  n.some(function (e) {
                                    return t.intersectionRatio >= e;
                                  });
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = s),
                                null == (r = i.get(t.target)) ||
                                  r.forEach(function (e) {
                                    e(s, t);
                                  });
                            });
                          }, e);
                        (n =
                          s.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (r = { id: t, observer: s, elements: i }),
                          ry.set(t, r);
                      }
                      return r;
                    })(r),
                    a = s.id,
                    o = s.observer,
                    l = s.elements,
                    u = l.get(e) || [];
                  return (
                    l.has(e) || l.set(e, u),
                    u.push(t),
                    o.observe(e),
                    function () {
                      u.splice(u.indexOf(t), 1),
                        0 === u.length && (l.delete(e), o.unobserve(e)),
                        0 === l.size && (o.disconnect(), ry.delete(a));
                    }
                  );
                }
                var rw = [
                  "children",
                  "as",
                  "tag",
                  "triggerOnce",
                  "threshold",
                  "root",
                  "rootMargin",
                  "onChange",
                  "skip",
                  "trackVisibility",
                  "delay",
                  "initialInView",
                  "fallbackInView",
                ];
                function rk(e) {
                  return "function" != typeof e.children;
                }
                var rP = (function (e) {
                  function t(t) {
                    var r;
                    return (
                      ((r = e.call(this, t) || this).node = null),
                      (r._unobserveCb = null),
                      (r.handleNode = function (e) {
                        r.node &&
                          (r.unobserve(),
                          e ||
                            r.props.triggerOnce ||
                            r.props.skip ||
                            r.setState({
                              inView: !!r.props.initialInView,
                              entry: void 0,
                            })),
                          (r.node = e || null),
                          r.observeNode();
                      }),
                      (r.handleChange = function (e, t) {
                        e && r.props.triggerOnce && r.unobserve(),
                          rk(r.props) || r.setState({ inView: e, entry: t }),
                          r.props.onChange && r.props.onChange(e, t);
                      }),
                      (r.state = { inView: !!t.initialInView, entry: void 0 }),
                      r
                    );
                  }
                  (t.prototype = Object.create(e.prototype)),
                    (t.prototype.constructor = t),
                    rg(t, e);
                  var r = t.prototype;
                  return (
                    (r.componentDidUpdate = function (e) {
                      (e.rootMargin === this.props.rootMargin &&
                        e.root === this.props.root &&
                        e.threshold === this.props.threshold &&
                        e.skip === this.props.skip &&
                        e.trackVisibility === this.props.trackVisibility &&
                        e.delay === this.props.delay) ||
                        (this.unobserve(), this.observeNode());
                    }),
                    (r.componentWillUnmount = function () {
                      this.unobserve(), (this.node = null);
                    }),
                    (r.observeNode = function () {
                      if (this.node && !this.props.skip) {
                        var e = this.props,
                          t = e.threshold,
                          r = e.root,
                          n = e.rootMargin,
                          i = e.trackVisibility,
                          s = e.delay,
                          a = e.fallbackInView;
                        this._unobserveCb = r_(
                          this.node,
                          this.handleChange,
                          {
                            threshold: t,
                            root: r,
                            rootMargin: n,
                            trackVisibility: i,
                            delay: s,
                          },
                          a
                        );
                      }
                    }),
                    (r.unobserve = function () {
                      this._unobserveCb &&
                        (this._unobserveCb(), (this._unobserveCb = null));
                    }),
                    (r.render = function () {
                      if (!rk(this.props)) {
                        var e = this.state,
                          t = e.inView,
                          r = e.entry;
                        return this.props.children({
                          inView: t,
                          entry: r,
                          ref: this.handleNode,
                        });
                      }
                      var n = this.props,
                        s = n.children,
                        a = n.as,
                        o = n.tag,
                        l = (function (e, t) {
                          if (null == e) return {};
                          var r,
                            n,
                            i = {},
                            s = Object.keys(e);
                          for (n = 0; n < s.length; n++)
                            (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                          return i;
                        })(n, rw);
                      return i.createElement(
                        a || o || "div",
                        rm({ ref: this.handleNode }, l),
                        s
                      );
                    }),
                    t
                  );
                })(i.Component);
                (rP.displayName = "InView"),
                  (rP.defaultProps = {
                    threshold: 0,
                    triggerOnce: !1,
                    initialInView: !1,
                  });
                let rS = [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                  ],
                  rx = a().memo(
                    ({
                      animateToNumber: e,
                      fontStyle: t,
                      configs: r,
                      includeComma: n,
                      locale: s,
                    }) => {
                      var o, l, u, d, h, c, p, f, m, g, y, v, b, _, w, k;
                      let { ref: P, inView: S } =
                          ((l = (o = { triggerOnce: !0 }).threshold),
                          (u = o.delay),
                          (d = o.trackVisibility),
                          (h = o.rootMargin),
                          (c = o.root),
                          (p = o.triggerOnce),
                          (f = o.skip),
                          (m = o.initialInView),
                          (g = o.fallbackInView),
                          (y = i.useRef()),
                          (b = (v = i.useState({ inView: !!m }))[0]),
                          (_ = v[1]),
                          (w = i.useCallback(
                            function (e) {
                              void 0 !== y.current &&
                                (y.current(), (y.current = void 0)),
                                f ||
                                  (e &&
                                    (y.current = r_(
                                      e,
                                      function (e, t) {
                                        _({ inView: e, entry: t }),
                                          t.isIntersecting &&
                                            p &&
                                            y.current &&
                                            (y.current(), (y.current = void 0));
                                      },
                                      {
                                        root: c,
                                        rootMargin: h,
                                        threshold: l,
                                        trackVisibility: d,
                                        delay: u,
                                      },
                                      g
                                    )));
                            },
                            [
                              Array.isArray(l) ? l.toString() : l,
                              c,
                              h,
                              p,
                              f,
                              d,
                              g,
                              u,
                            ]
                          )),
                          (0, i.useEffect)(function () {
                            y.current ||
                              !b.entry ||
                              p ||
                              f ||
                              _({ inView: !!m });
                          }),
                          ((k = [w, b.inView, b.entry]).ref = k[0]),
                          (k.inView = k[1]),
                          (k.entry = k[2]),
                          k),
                        x = a().useRef(0),
                        V = n
                          ? Math.abs(e).toLocaleString(s || "en-US")
                          : String(Math.abs(e)),
                        O = Array.from(V, Number).map((e, t) =>
                          isNaN(e) ? V[t] : e
                        ),
                        [C, A] = a().useState(0),
                        I = a().useRef(null),
                        R = (e, t, r) => {
                          var n, i;
                          return "function" == typeof e
                            ? e(t, r)
                            : e
                            ? e[
                                ((n = 0),
                                (i = e.length - 1),
                                (n = Math.ceil(n)),
                                Math.floor(
                                  Math.random() * ((i = Math.floor(i)) - n + 1)
                                ) + n)
                              ]
                            : void 0;
                        };
                      return (
                        a().useEffect(() => {
                          var e, t;
                          let r =
                            null === (e = I.current.getClientRects()) ||
                            void 0 === e ||
                            null === (t = e[0]) ||
                            void 0 === t
                              ? void 0
                              : t.height;
                          r && A(r);
                        }, [e, t]),
                        a().createElement(
                          a().Fragment,
                          null,
                          0 !== C &&
                            a().createElement(
                              "div",
                              {
                                ref: P,
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                },
                                className: "animated-container",
                              },
                              S &&
                                e < 0 &&
                                a().createElement("div", { style: t }, "-"),
                              S &&
                                O.map((e, n) =>
                                  "string" == typeof e
                                    ? a().createElement(
                                        "div",
                                        { key: n, style: { ...t } },
                                        e
                                      )
                                    : a().createElement(
                                        "div",
                                        {
                                          key: n,
                                          style: {
                                            height: C,
                                            overflow: "hidden",
                                          },
                                        },
                                        a().createElement(
                                          t5,
                                          {
                                            key: "" + x.current++,
                                            from: {
                                              transform: "translateY(0px)",
                                            },
                                            to: {
                                              transform: `translateY(${
                                                -(C * O[n] * 1) - 20 * C
                                              })`,
                                            },
                                            config: R(r, e, n),
                                          },
                                          (e) =>
                                            rS.map((r, n) =>
                                              a().createElement(
                                                rf.div,
                                                {
                                                  key: n,
                                                  style: { ...t, ...e },
                                                },
                                                r
                                              )
                                            )
                                        )
                                      )
                                )
                            ),
                          a().createElement(
                            "div",
                            {
                              ref: I,
                              style: { position: "absolute", top: -9999, ...t },
                            },
                            0
                          )
                        )
                      );
                    },
                    (e, t) =>
                      e.animateToNumber === t.animateToNumber &&
                      e.fontStyle === t.fontStyle &&
                      e.includeComma === t.includeComma
                  );
              })(),
              s
            );
          })()));
    },
  },
]);
