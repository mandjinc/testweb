(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [19],
  {
    7607: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(6070);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7561: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(6070),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3222: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(1024),
        i = r(8533),
        o = i._(r(2265)),
        s = r(4887),
        a = n._(r(2912)),
        l = r(2301),
        u = r(7709),
        c = r(9469);
      r(7873);
      let h = r(2706),
        d = n._(r(5033)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(e, t, r, n, i, o) {
        let s = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === s) return;
        e["data-loaded-src"] = s;
        let a = "decode" in e ? e.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("empty" !== t && i(!0), null == r ? void 0 : r.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let n = !1,
                i = !1;
              r.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => n,
                isPropagationStopped: () => i,
                persist: () => {},
                preventDefault: () => {
                  (n = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (i = !0), t.stopPropagation();
                },
              });
            }
            (null == n ? void 0 : n.current) && n.current(e);
          }
        });
      }
      function m(e) {
        let [t, r] = o.version.split("."),
          n = parseInt(t, 10),
          i = parseInt(r, 10);
        return n > 18 || (18 === n && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let g = (0, o.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: i,
          height: s,
          width: a,
          decoding: l,
          className: u,
          style: c,
          fetchPriority: h,
          placeholder: d,
          loading: f,
          unoptimized: g,
          fill: y,
          onLoadRef: v,
          onLoadingCompleteRef: b,
          setBlurComplete: x,
          setShowAltText: P,
          onLoad: w,
          onError: S,
          ...E
        } = e;
        return o.default.createElement("img", {
          ...E,
          ...m(h),
          loading: f,
          width: a,
          height: s,
          decoding: l,
          "data-nimg": y ? "fill" : "1",
          className: u,
          style: c,
          sizes: i,
          srcSet: n,
          src: r,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (S && (e.src = e.src), e.complete && p(e, d, v, b, x, g));
            },
            [r, d, v, b, x, S, g, t]
          ),
          onLoad: (e) => {
            let t = e.currentTarget;
            p(t, d, v, b, x, g);
          },
          onError: (e) => {
            P(!0), "empty" !== d && x(!0), S && S(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return t && s.preload
          ? ((0, s.preload)(r.src, n), null)
          : o.default.createElement(
              a.default,
              null,
              o.default.createElement("link", {
                key: "__nimg-" + r.src + r.srcSet + r.sizes,
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...n,
              })
            );
      }
      let v = (0, o.forwardRef)((e, t) => {
        let r = (0, o.useContext)(h.RouterContext),
          n = (0, o.useContext)(c.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            let e = f || n || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: s, onLoadingComplete: a } = e,
          p = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          p.current = s;
        }, [s]);
        let m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let [v, b] = (0, o.useState)(!1),
          [x, P] = (0, o.useState)(!1),
          { props: w, meta: S } = (0, l.getImgProps)(e, {
            defaultLoader: d.default,
            imgConf: i,
            blurComplete: v,
            showAltText: x,
          });
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(g, {
            ...w,
            unoptimized: S.unoptimized,
            placeholder: S.placeholder,
            fill: S.fill,
            onLoadRef: p,
            onLoadingCompleteRef: m,
            setBlurComplete: b,
            setShowAltText: P,
            ref: t,
          }),
          S.priority
            ? o.default.createElement(y, { isAppRouter: !r, imgAttributes: w })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6685: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = r(1024),
        i = n._(r(2265)),
        o = r(2156),
        s = r(3954),
        a = r(6162),
        l = r(5090),
        u = r(7607),
        c = r(2706),
        h = r(6656),
        d = r(283),
        f = r(7561),
        p = r(6711),
        m = r(5685),
        g = new Set();
      function y(e, t, r, n, i, o) {
        if (!o && !(0, s.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let i =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            o = t + "%" + r + "%" + i;
          if (g.has(o)) return;
          g.add(o);
        }
        let a = o ? e.prefetch(t, i) : e.prefetch(t, r, n);
        Promise.resolve(a).catch((e) => {});
      }
      function v(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let b = i.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: a,
            as: g,
            children: b,
            prefetch: x = null,
            passHref: P,
            replace: w,
            shallow: S,
            scroll: E,
            locale: A,
            onClick: C,
            onMouseEnter: T,
            onTouchStart: M,
            legacyBehavior: j = !1,
            ...R
          } = e;
          (r = b),
            j &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = i.default.createElement("a", null, r));
          let k = i.default.useContext(c.RouterContext),
            O = i.default.useContext(h.AppRouterContext),
            V = null != k ? k : O,
            L = !k,
            D = !1 !== x,
            _ = null === x ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
            { href: I, as: F } = i.default.useMemo(() => {
              if (!k) {
                let e = v(a);
                return { href: e, as: g ? v(g) : e };
              }
              let [e, t] = (0, o.resolveHref)(k, a, !0);
              return { href: e, as: g ? (0, o.resolveHref)(k, g) : t || e };
            }, [k, a, g]),
            B = i.default.useRef(I),
            U = i.default.useRef(F);
          j && (n = i.default.Children.only(r));
          let N = j ? n && "object" == typeof n && n.ref : t,
            [z, $, W] = (0, d.useIntersection)({ rootMargin: "200px" }),
            H = i.default.useCallback(
              (e) => {
                (U.current !== F || B.current !== I) &&
                  (W(), (U.current = F), (B.current = I)),
                  z(e),
                  N &&
                    ("function" == typeof N
                      ? N(e)
                      : "object" == typeof N && (N.current = e));
              },
              [F, N, I, W, z]
            );
          i.default.useEffect(() => {
            V && $ && D && y(V, I, F, { locale: A }, { kind: _ }, L);
          }, [F, I, $, A, D, null == k ? void 0 : k.locale, V, L, _]);
          let Z = {
            ref: H,
            onClick(e) {
              j || "function" != typeof C || C(e),
                j &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                V &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, o, a, l, u, c, h) {
                    let { nodeName: d } = e.currentTarget,
                      f = "A" === d.toUpperCase();
                    if (
                      f &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!c && !(0, s.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let p = () => {
                      let e = null == l || l;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](r, n, {
                            shallow: a,
                            locale: u,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !h,
                            scroll: e,
                          });
                    };
                    c ? i.default.startTransition(p) : p();
                  })(e, V, I, F, w, S, E, A, L, D);
            },
            onMouseEnter(e) {
              j || "function" != typeof T || T(e),
                j &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                V &&
                  (D || !L) &&
                  y(
                    V,
                    I,
                    F,
                    { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: _ },
                    L
                  );
            },
            onTouchStart(e) {
              j || "function" != typeof M || M(e),
                j &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                V &&
                  (D || !L) &&
                  y(
                    V,
                    I,
                    F,
                    { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: _ },
                    L
                  );
            },
          };
          if ((0, l.isAbsoluteUrl)(F)) Z.href = F;
          else if (!j || P || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== A ? A : null == k ? void 0 : k.locale,
              t =
                (null == k ? void 0 : k.isLocaleDomain) &&
                (0, f.getDomainLocale)(
                  F,
                  e,
                  null == k ? void 0 : k.locales,
                  null == k ? void 0 : k.domainLocales
                );
            Z.href =
              t ||
              (0, p.addBasePath)(
                (0, u.addLocale)(F, e, null == k ? void 0 : k.defaultLocale)
              );
          }
          return j
            ? i.default.cloneElement(n, Z)
            : i.default.createElement("a", { ...R, ...Z }, r);
        }),
        x = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8043: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          requestIdleCallback: function () {
            return r;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    283: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(2265),
        i = r(8043),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !o,
          [c, h] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          f = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (o) {
            if (u || c) return;
            let e = d.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: i,
                  elements: o,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = a.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = s.get(n))) return t;
                  let i = new Map(),
                    o = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = i.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: o, elements: i }),
                    a.push(r),
                    s.set(r, t),
                    t
                  );
                })(r);
                return (
                  o.set(e, t),
                  i.observe(e),
                  function () {
                    if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                      i.disconnect(), s.delete(n);
                      let e = a.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && h(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!c) {
            let e = (0, i.requestIdleCallback)(() => h(!0));
            return () => (0, i.cancelIdleCallback)(e);
          }
        }, [u, r, t, c, d.current]);
        let p = (0, n.useCallback)(() => {
          h(!1);
        }, []);
        return [f, c, p];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7555: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(1024),
        i = n._(r(2265)),
        o = i.default.createContext({});
    },
    8551: function (e, t) {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    8864: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(1024);
      r(2265);
      let i = n._(r(533));
      function o(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function s(e, t) {
        let r = i.default,
          n = {
            loading: (e) => {
              let { error: t, isLoading: r, pastDelay: n } = e;
              return null;
            },
          };
        "function" == typeof e && (n.loader = e), Object.assign(n, t);
        let s = n.loader;
        return r({
          ...n,
          loader: () =>
            null != s ? s().then(o) : Promise.resolve(o(() => null)),
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3805: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function i(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    2301: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(7873);
      let n = r(9540),
        i = r(7709);
      function o(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          l,
          u,
          {
            src: c,
            sizes: h,
            unoptimized: d = !1,
            priority: f = !1,
            loading: p,
            className: m,
            quality: g,
            width: y,
            height: v,
            fill: b = !1,
            style: x,
            onLoad: P,
            onLoadingComplete: w,
            placeholder: S = "empty",
            blurDataURL: E,
            fetchPriority: A,
            layout: C,
            objectFit: T,
            objectPosition: M,
            lazyBoundary: j,
            lazyRoot: R,
            ...k
          } = e,
          { imgConf: O, showAltText: V, blurComplete: L, defaultLoader: D } = t,
          _ = O || i.imageConfigDefault;
        if ("allSizes" in _) a = _;
        else {
          let e = [..._.deviceSizes, ..._.imageSizes].sort((e, t) => e - t),
            t = _.deviceSizes.sort((e, t) => e - t);
          a = { ..._, allSizes: e, deviceSizes: t };
        }
        let I = k.loader || D;
        delete k.loader, delete k.srcSet;
        let F = "__next_img_default" in I;
        if (F) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = I;
          I = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (C) {
          "fill" === C && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !h && (h = t);
        }
        let B = "",
          U = s(y),
          N = s(v);
        if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
          let e = o(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (E = E || e.blurDataURL),
            (B = e.src),
            !b)
          ) {
            if (U || N) {
              if (U && !N) {
                let t = U / e.width;
                N = Math.round(e.height * t);
              } else if (!U && N) {
                let t = N / e.height;
                U = Math.round(e.width * t);
              }
            } else (U = e.width), (N = e.height);
          }
        }
        let z = !f && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : B) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((d = !0), (z = !1)),
          a.unoptimized && (d = !0),
          F && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0),
          f && (A = "high");
        let $ = s(g),
          W = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: T,
                  objectPosition: M,
                }
              : {},
            V ? {} : { color: "transparent" },
            x
          ),
          H =
            L || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: U,
                  heightInt: N,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: E || "",
                  objectFit: W.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          Z = H
            ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          G = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: s,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                if ("number" != typeof t) return { widths: n, kind: "w" };
                let o = [
                  ...new Set(
                    [t, 2 * t].map(
                      (e) => i.find((t) => t >= e) || i[i.length - 1]
                    )
                  ),
                ];
                return { widths: o, kind: "x" };
              })(t, i, s),
              c = l.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: o, width: l[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: d,
            width: U,
            quality: $,
            sizes: h,
            loader: I,
          }),
          q = {
            ...k,
            loading: z ? "lazy" : p,
            fetchPriority: A,
            width: U,
            height: N,
            decoding: "async",
            className: m,
            style: { ...W, ...Z },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: G.src,
          },
          Y = { unoptimized: d, priority: f, placeholder: S, fill: b };
        return { props: q, meta: Y };
      }
    },
    2912: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          defaultHead: function () {
            return c;
          },
          default: function () {
            return p;
          },
        });
      let n = r(1024),
        i = r(8533),
        o = i._(r(2265)),
        s = n._(r(2378)),
        a = r(7555),
        l = r(1330),
        u = r(8551);
      function c(e) {
        void 0 === e && (e = !1);
        let t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(7873);
      let d = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(c(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = d.length; e < t; e++) {
                      let t = d[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (o = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !s) && r.has(e)
                            ? (o = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: n });
          });
      }
      let p = function (e) {
        let { children: t } = e,
          r = (0, o.useContext)(a.AmpStateContext),
          n = (0, o.useContext)(l.HeadManagerContext);
        return o.default.createElement(
          s.default,
          {
            reduceComponentsToState: f,
            headManager: n,
            inAmpMode: (0, u.isInAmpMode)(r),
          },
          t
        );
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9540: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: s,
          } = e,
          a = n ? 40 * n : t,
          l = i ? 40 * i : r,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    9469: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(1024),
        i = n._(r(2265)),
        o = r(7709),
        s = i.default.createContext(o.imageConfigDefault);
    },
    7709: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    1295: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return u;
          },
          unstable_getImgProps: function () {
            return l;
          },
        });
      let n = r(1024),
        i = r(2301),
        o = r(7873),
        s = r(3222),
        a = n._(r(5033)),
        l = (e) => {
          (0, o.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        u = s.Image;
    },
    5033: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    3699: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          suspense: function () {
            return i;
          },
          NoSSR: function () {
            return o;
          },
        }),
        r(1024),
        r(2265);
      let n = r(7669);
      function i() {
        let e = Error(n.NEXT_DYNAMIC_NO_SSR_CODE);
        throw ((e.digest = n.NEXT_DYNAMIC_NO_SSR_CODE), e);
      }
      function o(e) {
        let { children: t } = e;
        return t;
      }
    },
    533: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(1024),
        i = n._(r(2265)),
        o = r(3699),
        s = function (e) {
          let t = Object.assign({ loader: null, loading: null, ssr: !0 }, e);
          function r(e) {
            let r = t.loading,
              n = i.default.createElement(r, {
                isLoading: !0,
                pastDelay: !0,
                error: null,
              }),
              s = t.ssr ? i.default.Fragment : o.NoSSR,
              a = t.lazy;
            return i.default.createElement(
              i.default.Suspense,
              { fallback: n },
              i.default.createElement(s, null, i.default.createElement(a, e))
            );
          }
          return (
            (t.lazy = i.default.lazy(t.loader)),
            (r.displayName = "LoadableComponent"),
            r
          );
        };
    },
    2706: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(1024),
        i = n._(r(2265)),
        o = i.default.createContext(null);
    },
    6162: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return s;
          },
          urlObjectKeys: function () {
            return a;
          },
          formatWithValidation: function () {
            return l;
          },
        });
      let n = r(8533),
        i = n._(r(5769)),
        o = /https?|ftp|gopher|file/;
      function s(e) {
        let { auth: t, hostname: r } = e,
          n = e.protocol || "",
          s = e.pathname || "",
          a = e.hash || "",
          l = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(i.urlQueryToSearchParams(l)));
        let c = e.search || (l && "?" + l) || "";
        return (
          n && !n.endsWith(":") && (n += ":"),
          e.slashes || ((!n || o.test(n)) && !1 !== u)
            ? ((u = "//" + (u || "")), s && "/" !== s[0] && (s = "/" + s))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            n +
            u +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(e) {
        return s(e);
      }
    },
    9232: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3658),
        i = r(8489);
      function o(e, t, r) {
        let o = "",
          s = (0, i.getRouteRegex)(e),
          a = s.groups,
          l = (t !== e ? (0, n.getRouteMatcher)(s)(t) : "") || r;
        o = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = l[e] || "",
              { repeat: r, optional: n } = a[e],
              i = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (i = (t ? "" : "/") + "[" + i + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in l) &&
                (o =
                  o.replace(
                    i,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    8354: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = /\/\[[^/]+?\](?=\/|$)/;
      function n(e) {
        return r.test(e);
      }
    },
    3954: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(5090),
        i = r(3719);
      function o(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, i.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    3259: function (e, t) {
      "use strict";
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    5769: function (e, t) {
      "use strict";
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, i] = e;
            Array.isArray(i)
              ? i.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(i));
          }),
          t
        );
      }
      function o(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
          assign: function () {
            return o;
          },
        });
    },
    2156: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let n = r(5769),
        i = r(6162),
        o = r(3259),
        s = r(5090),
        a = r(6070),
        l = r(3954),
        u = r(8354),
        c = r(9232);
      function h(e, t, r) {
        let h;
        let d = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
          f = d.match(/^[a-zA-Z]{1,}:\/\//),
          p = f ? d.slice(f[0].length) : d;
        if ((p.split("?")[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, s.normalizeRepeatedSlashes)(p);
          d = (f ? f[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(d)) return r ? [d] : d;
        try {
          h = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          h = new URL("/", "http://n");
        }
        try {
          let e = new URL(d, h);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: s, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            s &&
              (t = (0, i.formatWithValidation)({
                pathname: s,
                hash: e.hash,
                query: (0, o.omit)(r, a),
              }));
          }
          let s =
            e.origin === h.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [s, t || s] : s;
        } catch (e) {
          return r ? [d] : d;
        }
      }
    },
    3658: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(5090);
      function i(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let i = t.exec(e);
          if (!i) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = i[t.pos];
              void 0 !== n &&
                (s[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => o(e))
                  : t.repeat
                  ? [o(n)]
                  : o(n));
            }),
            s
          );
        };
      }
    },
    8489: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRouteRegex: function () {
            return l;
          },
          getNamedRouteRegex: function () {
            return h;
          },
          getNamedMiddlewareRegex: function () {
            return d;
          },
        });
      let n = r(4507),
        i = r(3805),
        o = r(7369);
      function s(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && o) {
                let { key: e, optional: n, repeat: l } = s(o[1]);
                return (
                  (r[e] = { pos: a++, repeat: l, optional: n }),
                  "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, i.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = s(o[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function u(e) {
        let { getSafeRouteKey: t, segment: r, routeKeys: n, keyPrefix: i } = e,
          { key: o, optional: a, repeat: l } = s(r),
          u = o.replace(/\W/g, "");
        i && (u = "" + i + u);
        let c = !1;
        return (
          (0 === u.length || u.length > 30) && (c = !0),
          isNaN(parseInt(u.slice(0, 1))) || (c = !0),
          c && (u = t()),
          i ? (n[u] = "" + i + o) : (n[u] = "" + o),
          l
            ? a
              ? "(?:/(?<" + u + ">.+?))?"
              : "/(?<" + u + ">.+?)"
            : "/(?<" + u + ">[^/]+?)"
        );
      }
      function c(e, t) {
        let r;
        let s = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          l = {};
        return {
          namedParameterizedRoute: s
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              return r && o
                ? u({
                    getSafeRouteKey: a,
                    segment: o[1],
                    routeKeys: l,
                    keyPrefix: t ? "nxtI" : void 0,
                  })
                : o
                ? u({
                    getSafeRouteKey: a,
                    segment: o[1],
                    routeKeys: l,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, i.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function h(e, t) {
        let r = c(e, t);
        return {
          ...l(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function d(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = c(e, !1);
        return { namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    2378: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(8533),
        i = n._(r(2265)),
        o = i.useLayoutEffect,
        s = i.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function n() {
          if (t && t.mountedInstances) {
            let n = i.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(n, e));
          }
        }
        return (
          o(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = n),
              () => {
                t && (t._pendingUpdate = n);
              }
            )
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    5090: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          getDisplayName: function () {
            return l;
          },
          isResSent: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return h;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return f;
          },
          DecodeError: function () {
            return p;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return y;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          stringifyError: function () {
            return b;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return r || ((r = !0), (t = e(...i))), t;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => i.test(e);
      function s() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = s();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?"),
          r = t[0];
        return (
          r.replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function h(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await h(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n) {
          let t =
            '"' +
            l(e) +
            '.getInitialProps()" should resolve to an object. But found "' +
            n +
            '" instead.';
          throw Error(t);
        }
        return n;
      }
      let d = "undefined" != typeof performance,
        f =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class p extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class y extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    7873: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e) => {};
    },
    622: function (e, t, r) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2265),
        i = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, t, r) {
        var n,
          l = {},
          u = null,
          c = null;
        for (n in (void 0 !== r && (u = "" + r),
        void 0 !== t.key && (u = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          o.call(t, n) && !a.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: u,
          ref: c,
          props: l,
          _owner: s.current,
        };
      }
      (t.jsx = l), (t.jsxs = l);
    },
    7437: function (e, t, r) {
      "use strict";
      e.exports = r(622);
    },
    6691: function (e, t, r) {
      e.exports = r(1295);
    },
    1396: function (e, t, r) {
      e.exports = r(6685);
    },
    2400: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return h;
        },
      });
      var n = r(2265);
      function i(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function o(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function s(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function a(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            s.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function l(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function u(e, t, r, n) {
        for (var u = [], h = 4; h < arguments.length; h++)
          u[h - 4] = arguments[h];
        return i(this, void 0, void 0, function () {
          var h, d, f, p, m;
          return o(this, function (g) {
            switch (g.label) {
              case 0:
                g.trys.push([0, 12, 13, 14]),
                  (d = (h = s(u)).next()),
                  (g.label = 1);
              case 1:
                if (d.done) return [3, 11];
                switch (typeof (f = d.value)) {
                  case "string":
                    return [3, 2];
                  case "number":
                    return [3, 4];
                  case "function":
                    return [3, 6];
                }
                return [3, 8];
              case 2:
                return [
                  4,
                  (function (e, t, r, n, u) {
                    return i(this, void 0, void 0, function () {
                      var h;
                      return o(this, function (d) {
                        switch (d.label) {
                          case 0:
                            var f, p;
                            return (
                              (f = e.textContent),
                              (p = a(t).slice(0)),
                              (h = l(l([], a(f), !1), [NaN], !1).findIndex(
                                function (e, t) {
                                  return p[t] !== e;
                                }
                              )),
                              [
                                4,
                                (function (e, t, r, n, l) {
                                  return i(this, void 0, void 0, function () {
                                    var i, u, h, d, f, p, m, g, y, v, b, x;
                                    return o(this, function (P) {
                                      switch (P.label) {
                                        case 0:
                                          if (((i = t), l)) {
                                            for (
                                              u = 0, h = 1;
                                              h < t.length;
                                              h++
                                            )
                                              if (
                                                ((f = (d = a(
                                                  [t[h - 1], t[h]],
                                                  2
                                                ))[0]),
                                                (p = d[1]).length > f.length ||
                                                  "" === p)
                                              ) {
                                                u = h;
                                                break;
                                              }
                                            i = t.slice(u, t.length);
                                          }
                                          P.label = 1;
                                        case 1:
                                          P.trys.push([1, 6, 7, 8]),
                                            (g = (m = s(
                                              (function (e) {
                                                var t, r, n, i, a;
                                                return o(this, function (l) {
                                                  switch (l.label) {
                                                    case 0:
                                                      (t = function (e) {
                                                        return o(
                                                          this,
                                                          function (t) {
                                                            switch (t.label) {
                                                              case 0:
                                                                return [
                                                                  4,
                                                                  {
                                                                    op: function (
                                                                      t
                                                                    ) {
                                                                      return requestAnimationFrame(
                                                                        function () {
                                                                          return (t.textContent =
                                                                            e);
                                                                        }
                                                                      );
                                                                    },
                                                                    opCode:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return "" ===
                                                                          e ||
                                                                          t
                                                                            .textContent
                                                                            .length >
                                                                            e.length
                                                                          ? "DELETE"
                                                                          : "WRITING";
                                                                      },
                                                                  },
                                                                ];
                                                              case 1:
                                                                return (
                                                                  t.sent(), [2]
                                                                );
                                                            }
                                                          }
                                                        );
                                                      }),
                                                        (l.label = 1);
                                                    case 1:
                                                      l.trys.push([1, 6, 7, 8]),
                                                        (n = (r = s(e)).next()),
                                                        (l.label = 2);
                                                    case 2:
                                                      return n.done
                                                        ? [3, 5]
                                                        : [5, t(n.value)];
                                                    case 3:
                                                      l.sent(), (l.label = 4);
                                                    case 4:
                                                      return (
                                                        (n = r.next()), [3, 2]
                                                      );
                                                    case 5:
                                                      return [3, 8];
                                                    case 6:
                                                      return (
                                                        (i = {
                                                          error: l.sent(),
                                                        }),
                                                        [3, 8]
                                                      );
                                                    case 7:
                                                      try {
                                                        n &&
                                                          !n.done &&
                                                          (a = r.return) &&
                                                          a.call(r);
                                                      } finally {
                                                        if (i) throw i.error;
                                                      }
                                                      return [7];
                                                    case 8:
                                                      return [2];
                                                  }
                                                });
                                              })(i)
                                            )).next()),
                                            (P.label = 2);
                                        case 2:
                                          return g.done
                                            ? [3, 5]
                                            : ((v =
                                                "WRITING" ===
                                                (y = g.value).opCode(e)
                                                  ? r +
                                                    r * (Math.random() - 0.5)
                                                  : n +
                                                    n * (Math.random() - 0.5)),
                                              y.op(e),
                                              [4, c(v)]);
                                        case 3:
                                          P.sent(), (P.label = 4);
                                        case 4:
                                          return (g = m.next()), [3, 2];
                                        case 5:
                                          return [3, 8];
                                        case 6:
                                          return (
                                            (b = { error: P.sent() }), [3, 8]
                                          );
                                        case 7:
                                          try {
                                            g &&
                                              !g.done &&
                                              (x = m.return) &&
                                              x.call(m);
                                          } finally {
                                            if (b) throw b.error;
                                          }
                                          return [7];
                                        case 8:
                                          return [2];
                                      }
                                    });
                                  });
                                })(
                                  e,
                                  l(
                                    l(
                                      [],
                                      a(
                                        (function (e, t, r) {
                                          var n = a(e).slice(0);
                                          return (
                                            void 0 === t && (t = 0),
                                            void 0 === r && (r = n.length),
                                            o(this, function (e) {
                                              switch (e.label) {
                                                case 0:
                                                  return r > t
                                                    ? [
                                                        4,
                                                        n
                                                          .slice(0, --r)
                                                          .join(""),
                                                      ]
                                                    : [3, 2];
                                                case 1:
                                                  return e.sent(), [3, 0];
                                                case 2:
                                                  return [2];
                                              }
                                            })
                                          );
                                        })(e.textContent, h)
                                      ),
                                      !1
                                    ),
                                    a(
                                      (function (e, t, r) {
                                        var n = a(e).slice(0);
                                        return (
                                          void 0 === t && (t = 0),
                                          void 0 === r && (r = n.length),
                                          o(this, function (e) {
                                            switch (e.label) {
                                              case 0:
                                                return t < r
                                                  ? [
                                                      4,
                                                      n.slice(0, ++t).join(""),
                                                    ]
                                                  : [3, 2];
                                              case 1:
                                                return e.sent(), [3, 0];
                                              case 2:
                                                return [2];
                                            }
                                          })
                                        );
                                      })(t, h)
                                    ),
                                    !1
                                  ),
                                  r,
                                  n,
                                  u
                                ),
                              ]
                            );
                          case 1:
                            return d.sent(), [2];
                        }
                      });
                    });
                  })(e, f, t, r, n),
                ];
              case 3:
              case 5:
              case 7:
                return g.sent(), [3, 10];
              case 4:
                return [4, c(f)];
              case 6:
                return [4, f.apply(void 0, l([e, t, r, n], a(u), !1))];
              case 8:
                return [4, f];
              case 9:
                g.sent(), (g.label = 10);
              case 10:
                return (d = h.next()), [3, 1];
              case 11:
                return [3, 14];
              case 12:
                return (p = { error: g.sent() }), [3, 14];
              case 13:
                try {
                  d && !d.done && (m = h.return) && m.call(h);
                } finally {
                  if (p) throw p.error;
                }
                return [7];
              case 14:
                return [2];
            }
          });
        });
      }
      function c(e) {
        return i(this, void 0, void 0, function () {
          return o(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  new Promise(function (t) {
                    return setTimeout(t, e);
                  }),
                ];
              case 1:
                return t.sent(), [2];
            }
          });
        });
      }
      !(function (e, t) {
        void 0 === t && (t = {});
        var r = t.insertAt;
        if (e && "undefined" != typeof document) {
          var n = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          (i.type = "text/css"),
            "top" === r && n.firstChild
              ? n.insertBefore(i, n.firstChild)
              : n.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = e)
              : i.appendChild(document.createTextNode(e));
        }
      })(
        ".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n"
      );
      var h = (0, n.memo)(
        (0, n.forwardRef)(function (e, t) {
          var r = e.sequence,
            i = e.repeat,
            o = e.className,
            s = e.speed,
            c = void 0 === s ? 40 : s,
            h = e.deletionSpeed,
            d = e.omitDeletionAnimation,
            f = void 0 !== d && d,
            p = e.preRenderFirstString,
            m = e.wrapper,
            g = e.cursor,
            y = void 0 === g || g,
            v = e.style,
            b = (function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                  0 > t.indexOf(n[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                    (r[n[i]] = e[n[i]]);
              }
              return r;
            })(e, [
              "sequence",
              "repeat",
              "className",
              "speed",
              "deletionSpeed",
              "omitDeletionAnimation",
              "preRenderFirstString",
              "wrapper",
              "cursor",
              "style",
            ]),
            x = b["aria-label"],
            P = b["aria-hidden"];
          h || (h = c);
          var w = [, ,].fill(40);
          [c, h].forEach(function (e, t) {
            switch (typeof e) {
              case "number":
                w[t] = Math.abs(e - 100);
                break;
              case "object":
                var r = e.type,
                  n = e.value;
                if ("number" != typeof n) break;
                "keyStrokeDelayInMs" === r && (w[t] = n);
            }
          });
          var S,
            E,
            A,
            C,
            T,
            M,
            j,
            R,
            k = w[0],
            O = w[1],
            V =
              (void 0 === S && (S = null),
              (E = (0, n.useRef)(S)),
              (0, n.useEffect)(
                function () {
                  t &&
                    ("function" == typeof t
                      ? t(E.current)
                      : (t.current = E.current));
                },
                [t]
              ),
              E),
            L = "index-module_type__E-SaG";
          (A = o ? "".concat(y ? L + " " : "").concat(o) : y ? L : ""),
            (C = (0, n.useRef)(function () {
              var e,
                t = r;
              return (
                i === 1 / 0
                  ? (e = u)
                  : "number" == typeof i &&
                    (t = Array(1 + i)
                      .fill(r)
                      .flat()),
                u.apply(void 0, l(l([V.current, k, O, f], a(t), !1), [e], !1)),
                function () {
                  V.current;
                }
              );
            })),
            (T = (0, n.useRef)()),
            (M = (0, n.useRef)(!1)),
            (j = (0, n.useRef)(!1)),
            (R = a((0, n.useState)(0), 2)[1]),
            M.current && (j.current = !0),
            (0, n.useEffect)(function () {
              return (
                M.current || ((T.current = C.current()), (M.current = !0)),
                R(function (e) {
                  return e + 1;
                }),
                function () {
                  j.current && T.current && T.current();
                }
              );
            }, []);
          var D =
            void 0 !== p && p
              ? r.find(function (e) {
                  return "string" == typeof e;
                }) || ""
              : null;
          return n.createElement(void 0 === m ? "span" : m, {
            "aria-hidden": P,
            "aria-label": x,
            style: v,
            className: A,
            children: x
              ? n.createElement("span", {
                  "aria-hidden": "true",
                  ref: V,
                  children: D,
                })
              : D,
            ref: x ? void 0 : V,
          });
        }),
        function (e, t) {
          return !0;
        }
      );
    },
    7287: function (e, t, r) {
      "use strict";
      var n = r(2265);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: i,
              "aria-labelledby": t,
            },
            r
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
          })
        );
      });
      t.Z = i;
    },
    9367: function (e, t, r) {
      "use strict";
      var n = r(2265);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: i,
              "aria-labelledby": t,
            },
            r
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
          }),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          })
        );
      });
      t.Z = i;
    },
    2364: function (e, t, r) {
      "use strict";
      var n = r(2265);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: i,
              "aria-labelledby": t,
            },
            r
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
            clipRule: "evenodd",
          })
        );
      });
      t.Z = i;
    },
    4027: function (e, t, r) {
      "use strict";
      var n = r(2265);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: i,
              "aria-labelledby": t,
            },
            r
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
            clipRule: "evenodd",
          })
        );
      });
      t.Z = i;
    },
    9094: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        E: function () {
          return iB;
        },
      });
      var i,
        o,
        s = r(2265);
      let a = (0, s.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        l = (0, s.createContext)({}),
        u = (0, s.createContext)(null),
        c = "undefined" != typeof document,
        h = c ? s.useLayoutEffect : s.useEffect,
        d = (0, s.createContext)({ strict: !1 });
      function f(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function p(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function m(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      let g = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        y = ["initial", ...g];
      function v(e) {
        return m(e.animate) || y.some((t) => p(e[t]));
      }
      function b(e) {
        return !!(v(e) || e.variants);
      }
      function x(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let P = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        w = {};
      for (let e in P) w[e] = { isEnabled: (t) => P[e].some((e) => !!t[e]) };
      let S = (0, s.createContext)({}),
        E = (0, s.createContext)({}),
        A = Symbol.for("motionComponentSymbol"),
        C = [
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
          "view",
        ];
      function T(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (C.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let M = {},
        j = [
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
          "skewY",
        ],
        R = new Set(j);
      function k(e, { layout: t, layoutId: r }) {
        return (
          R.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!M[e] || "opacity" === e))
        );
      }
      let O = (e) => !!(e && e.getVelocity),
        V = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        L = j.length,
        D = (e) => (t) => "string" == typeof t && t.startsWith(e),
        _ = D("--"),
        I = D("var(--"),
        F = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        B = (e, t, r) => Math.min(Math.max(r, e), t),
        U = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        N = { ...U, transform: (e) => B(0, 1, e) },
        z = { ...U, default: 1 },
        $ = (e) => Math.round(1e5 * e) / 1e5,
        W = /(-)?([\d]*\.?[\d])+/g,
        H =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Z =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function G(e) {
        return "string" == typeof e;
      }
      let q = (e) => ({
          test: (t) => G(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        Y = q("deg"),
        X = q("%"),
        K = q("px"),
        Q = q("vh"),
        J = q("vw"),
        ee = {
          ...X,
          parse: (e) => X.parse(e) / 100,
          transform: (e) => X.transform(100 * e),
        },
        et = { ...U, transform: Math.round },
        er = {
          borderWidth: K,
          borderTopWidth: K,
          borderRightWidth: K,
          borderBottomWidth: K,
          borderLeftWidth: K,
          borderRadius: K,
          radius: K,
          borderTopLeftRadius: K,
          borderTopRightRadius: K,
          borderBottomRightRadius: K,
          borderBottomLeftRadius: K,
          width: K,
          maxWidth: K,
          height: K,
          maxHeight: K,
          size: K,
          top: K,
          right: K,
          bottom: K,
          left: K,
          padding: K,
          paddingTop: K,
          paddingRight: K,
          paddingBottom: K,
          paddingLeft: K,
          margin: K,
          marginTop: K,
          marginRight: K,
          marginBottom: K,
          marginLeft: K,
          rotate: Y,
          rotateX: Y,
          rotateY: Y,
          rotateZ: Y,
          scale: z,
          scaleX: z,
          scaleY: z,
          scaleZ: z,
          skew: Y,
          skewX: Y,
          skewY: Y,
          distance: K,
          translateX: K,
          translateY: K,
          translateZ: K,
          x: K,
          y: K,
          z: K,
          perspective: K,
          transformPerspective: K,
          opacity: N,
          originX: ee,
          originY: ee,
          originZ: K,
          zIndex: et,
          fillOpacity: N,
          strokeOpacity: N,
          numOctaves: et,
        };
      function en(e, t, r, n) {
        let { style: i, vars: o, transform: s, transformOrigin: a } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let r = t[e];
          if (_(e)) {
            o[e] = r;
            continue;
          }
          let n = er[e],
            h = F(r, n);
          if (R.has(e)) {
            if (((l = !0), (s[e] = h), !c)) continue;
            r !== (n.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (a[e] = h)) : (i[e] = h);
        }
        if (
          (!t.transform &&
            (l || n
              ? (i.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: r = !0,
                  },
                  n,
                  i
                ) {
                  let o = "";
                  for (let t = 0; t < L; t++) {
                    let r = j[t];
                    if (void 0 !== e[r]) {
                      let t = V[r] || r;
                      o += `${t}(${e[r]}) `;
                    }
                  }
                  return (
                    t && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"),
                    o
                  );
                })(e.transform, r, c, n))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = a;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let ei = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function eo(e, t, r) {
        for (let n in t) O(t[n]) || k(n, r) || (e[n] = t[n]);
      }
      function es(e, t, r) {
        let n = {},
          i = (function (e, t, r) {
            let n = e.style || {},
              i = {};
            return (
              eo(i, n, e),
              Object.assign(
                i,
                (function ({ transformTemplate: e }, t, r) {
                  return (0, s.useMemo)(() => {
                    let n = ei();
                    return (
                      en(n, t, { enableHardwareAcceleration: !r }, e),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [t]);
                })(e, t, r)
              ),
              e.transformValues ? e.transformValues(i) : i
            );
          })(e, t, r);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((n.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (n.tabIndex = 0),
          (n.style = i),
          n
        );
      }
      let ea = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
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
        "ignoreStrict",
        "viewport",
      ]);
      function el(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          ea.has(e)
        );
      }
      let eu = (e) => !el(e);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (eu = (e) => (e.startsWith("on") ? !el(e) : i(e)));
      } catch (e) {}
      function ec(e, t, r) {
        return "string" == typeof e ? e : K.transform(t + r * e);
      }
      let eh = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ed = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ef(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        h,
        d
      ) {
        if ((en(e, u, c, d), h)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: f, style: p, dimensions: m } = e;
        f.transform && (m && (p.transform = f.transform), delete f.transform),
          m &&
            (void 0 !== i || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (e, t, r) {
              let n = ec(t, e.x, e.width),
                i = ec(r, e.y, e.height);
              return `${n} ${i}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== r && (f.y = r),
          void 0 !== n && (f.scale = n),
          void 0 !== s &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? eh : ed;
              e[o.offset] = K.transform(-n);
              let s = K.transform(t),
                a = K.transform(r);
              e[o.array] = `${s} ${a}`;
            })(f, s, a, l, !1);
      }
      let ep = () => ({ ...ei(), attrs: {} }),
        em = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function eg(e, t, r, n) {
        let i = (0, s.useMemo)(() => {
          let r = ep();
          return (
            ef(
              r,
              t,
              { enableHardwareAcceleration: !1 },
              em(n),
              e.transformTemplate
            ),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [t]);
        if (e.style) {
          let t = {};
          eo(t, e.style, e), (i.style = { ...t, ...i.style });
        }
        return i;
      }
      let ey = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function ev(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let eb = new Set([
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
        "lengthAdjust",
      ]);
      function ex(e, t, r, n) {
        for (let r in (ev(e, t, void 0, n), t.attrs))
          e.setAttribute(eb.has(r) ? r : ey(r), t.attrs[r]);
      }
      function eP(e, t) {
        let { style: r } = e,
          n = {};
        for (let i in r)
          (O(r[i]) || (t.style && O(t.style[i])) || k(i, e)) && (n[i] = r[i]);
        return n;
      }
      function ew(e, t) {
        let r = eP(e, t);
        for (let n in e)
          if (O(e[n]) || O(t[n])) {
            let t =
              -1 !== j.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n;
            r[t] = e[n];
          }
        return r;
      }
      function eS(e, t, r, n = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          t
        );
      }
      let eE = (e) => Array.isArray(e),
        eA = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        eC = (e) => (eE(e) ? e[e.length - 1] || 0 : e);
      function eT(e) {
        let t = O(e) ? e.get() : e;
        return eA(t) ? t.toValue() : t;
      }
      let eM = (e) => (t, r) => {
        let n = (0, s.useContext)(l),
          i = (0, s.useContext)(u),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: r,
              },
              n,
              i,
              o
            ) {
              let s = {
                latestValues: (function (e, t, r, n) {
                  let i = {},
                    o = n(e, {});
                  for (let e in o) i[e] = eT(o[e]);
                  let { initial: s, animate: a } = e,
                    l = v(e),
                    u = b(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === s && (s = t.initial),
                    void 0 === a && (a = t.animate));
                  let c = !!r && !1 === r.initial;
                  c = c || !1 === s;
                  let h = c ? a : s;
                  if (h && "boolean" != typeof h && !m(h)) {
                    let t = Array.isArray(h) ? h : [h];
                    t.forEach((t) => {
                      let r = eS(e, t);
                      if (!r) return;
                      let { transitionEnd: n, transition: o, ...s } = r;
                      for (let e in s) {
                        let t = s[e];
                        if (Array.isArray(t)) {
                          let e = c ? t.length - 1 : 0;
                          t = t[e];
                        }
                        null !== t && (i[e] = t);
                      }
                      for (let e in n) i[e] = n[e];
                    });
                  }
                  return i;
                })(n, i, o, e),
                renderState: t(),
              };
              return r && (s.mount = (e) => r(n, e, s)), s;
            })(e, t, n, i);
        return r
          ? o()
          : (function (e) {
              let t = (0, s.useRef)(null);
              return null === t.current && (t.current = e()), t.current;
            })(o);
      };
      var ej = r(6977);
      let eR = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: ek,
          cancel: eO,
          state: eV,
          steps: eL,
        } = (function (e, t) {
          let r = !1,
            n = !0,
            i = { delta: 0, timestamp: 0, isProcessing: !1 },
            o = eR.reduce(
              (e, t) => (
                (e[t] = (function (e) {
                  let t = [],
                    r = [],
                    n = 0,
                    i = !1,
                    o = !1,
                    s = new WeakSet(),
                    a = {
                      schedule: (e, o = !1, a = !1) => {
                        let l = a && i,
                          u = l ? t : r;
                        return (
                          o && s.add(e),
                          -1 === u.indexOf(e) &&
                            (u.push(e), l && i && (n = t.length)),
                          e
                        );
                      },
                      cancel: (e) => {
                        let t = r.indexOf(e);
                        -1 !== t && r.splice(t, 1), s.delete(e);
                      },
                      process: (l) => {
                        if (i) {
                          o = !0;
                          return;
                        }
                        if (
                          ((i = !0),
                          ([t, r] = [r, t]),
                          (r.length = 0),
                          (n = t.length))
                        )
                          for (let r = 0; r < n; r++) {
                            let n = t[r];
                            n(l), s.has(n) && (a.schedule(n), e());
                          }
                        (i = !1), o && ((o = !1), a.process(l));
                      },
                    };
                  return a;
                })(() => (r = !0))),
                e
              ),
              {}
            ),
            s = (e) => o[e].process(i),
            a = () => {
              let o = performance.now();
              (r = !1),
                (i.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(o - i.timestamp, 40), 1)),
                (i.timestamp = o),
                (i.isProcessing = !0),
                eR.forEach(s),
                (i.isProcessing = !1),
                r && t && ((n = !1), e(a));
            },
            l = () => {
              (r = !0), (n = !0), i.isProcessing || e(a);
            },
            u = eR.reduce((e, t) => {
              let n = o[t];
              return (
                (e[t] = (e, t = !1, i = !1) => (r || l(), n.schedule(e, t, i))),
                e
              );
            }, {});
          return {
            schedule: u,
            cancel: (e) => eR.forEach((t) => o[t].cancel(e)),
            state: i,
            steps: o,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : ej.Z,
          !0
        ),
        eD = {
          useVisualState: eM({
            scrapeMotionValuesFromProps: ew,
            createRenderState: ep,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              ek.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                ek.render(() => {
                  ef(
                    r,
                    n,
                    { enableHardwareAcceleration: !1 },
                    em(t.tagName),
                    e.transformTemplate
                  ),
                    ex(t, r);
                });
            },
          }),
        },
        e_ = {
          useVisualState: eM({
            scrapeMotionValuesFromProps: eP,
            createRenderState: ei,
          }),
        };
      function eI(e, t, r, n = { passive: !0 }) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
      }
      let eF = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function eB(e, t = "page") {
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      let eU = (e) => (t) => eF(t) && e(t, eB(t));
      function eN(e, t, r, n) {
        return eI(e, t, eU(r), n);
      }
      let ez = (e, t) => (r) => t(e(r)),
        e$ = (...e) => e.reduce(ez);
      function eW(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let eH = eW("dragHorizontal"),
        eZ = eW("dragVertical");
      function eG(e) {
        let t = !1;
        if ("y" === e) t = eZ();
        else if ("x" === e) t = eH();
        else {
          let e = eH(),
            r = eZ();
          e && r
            ? (t = () => {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return t;
      }
      function eq() {
        let e = eG(!0);
        return !e || (e(), !1);
      }
      class eY {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function eX(e, t) {
        let r = "pointer" + (t ? "enter" : "leave"),
          n = "onHover" + (t ? "Start" : "End");
        return eN(
          e.current,
          r,
          (r, i) => {
            if ("touch" === r.type || eq()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t),
              o[n] && ek.update(() => o[n](r, i));
          },
          { passive: !e.getProps()[n] }
        );
      }
      let eK = (e, t) => !!t && (e === t || eK(e, t.parentElement));
      function eQ(e, t) {
        if (!t) return;
        let r = new PointerEvent("pointer" + e);
        t(r, eB(r));
      }
      let eJ = new WeakMap(),
        e0 = new WeakMap(),
        e1 = (e) => {
          let t = eJ.get(e.target);
          t && t(e);
        },
        e5 = (e) => {
          e.forEach(e1);
        },
        e2 = { some: 0, all: 1 };
      function e3(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function e6(e, t, r) {
        let n = e.getProps();
        return eS(
          n,
          t,
          void 0 !== r ? r : n.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.getVelocity())), t;
          })(e)
        );
      }
      let e7 = "data-" + ey("framerAppearId");
      var e4 = r(6567);
      let e9 = (e) => 1e3 * e,
        e8 = (e) => e / 1e3,
        te = { current: !1 },
        tt = (e) => Array.isArray(e) && "number" == typeof e[0],
        tr = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        tn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tr([0, 0.65, 0.55, 1]),
          circOut: tr([0.55, 0, 1, 0.45]),
          backIn: tr([0.31, 0.01, 0.66, -0.59]),
          backOut: tr([0.33, 1.53, 0.69, 0.99]),
        },
        ti = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function to(e, t, r, n) {
        if (e === t && r === n) return ej.Z;
        let i = (t) =>
          (function (e, t, r, n, i) {
            let o, s;
            let a = 0;
            do
              (o = ti((s = t + (r - t) / 2), n, i) - e) > 0 ? (r = s) : (t = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : ti(i(e), t, n));
      }
      let ts = to(0.42, 0, 1, 1),
        ta = to(0, 0, 0.58, 1),
        tl = to(0.42, 0, 0.58, 1),
        tu = (e) => Array.isArray(e) && "number" != typeof e[0],
        tc = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        th = (e) => (t) => 1 - e(1 - t),
        td = (e) => 1 - Math.sin(Math.acos(e)),
        tf = th(td),
        tp = tc(tf),
        tm = to(0.33, 1.53, 0.69, 0.99),
        tg = th(tm),
        ty = tc(tg),
        tv = {
          linear: ej.Z,
          easeIn: ts,
          easeInOut: tl,
          easeOut: ta,
          circIn: td,
          circInOut: tp,
          circOut: tf,
          backIn: tg,
          backInOut: ty,
          backOut: tm,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * tg(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        tb = (e) => {
          if (Array.isArray(e)) {
            (0, e4.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, i] = e;
            return to(t, r, n, i);
          }
          return "string" == typeof e
            ? ((0, e4.k)(void 0 !== tv[e], `Invalid easing type '${e}'`), tv[e])
            : e;
        },
        tx = (e, t) => (r) =>
          !!(
            (G(r) && Z.test(r) && r.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(r, t))
          ),
        tP = (e, t, r) => (n) => {
          if (!G(n)) return n;
          let [i, o, s, a] = n.match(W);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [r]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tw = (e) => B(0, 255, e),
        tS = { ...U, transform: (e) => Math.round(tw(e)) },
        tE = {
          test: tx("rgb", "red"),
          parse: tP("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            tS.transform(e) +
            ", " +
            tS.transform(t) +
            ", " +
            tS.transform(r) +
            ", " +
            $(N.transform(n)) +
            ")",
        },
        tA = {
          test: tx("#"),
          parse: function (e) {
            let t = "",
              r = "",
              n = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (n = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (n = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: tE.transform,
        },
        tC = {
          test: tx("hsl", "hue"),
          parse: tP("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            X.transform($(t)) +
            ", " +
            X.transform($(r)) +
            ", " +
            $(N.transform(n)) +
            ")",
        },
        tT = {
          test: (e) => tE.test(e) || tA.test(e) || tC.test(e),
          parse: (e) =>
            tE.test(e) ? tE.parse(e) : tC.test(e) ? tC.parse(e) : tA.parse(e),
          transform: (e) =>
            G(e)
              ? e
              : e.hasOwnProperty("red")
              ? tE.transform(e)
              : tC.transform(e),
        },
        tM = (e, t, r) => -r * e + r * t + e;
      function tj(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      let tR = (e, t, r) => {
          let n = e * e;
          return Math.sqrt(Math.max(0, r * (t * t - n) + n));
        },
        tk = [tA, tE, tC],
        tO = (e) => tk.find((t) => t.test(e));
      function tV(e) {
        let t = tO(e);
        (0, e4.k)(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = t.parse(e);
        return (
          t === tC &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              (e /= 360), (r /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  a = 2 * r - n;
                (i = tj(a, n, e + 1 / 3)),
                  (o = tj(a, n, e)),
                  (s = tj(a, n, e - 1 / 3));
              } else i = o = s = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let tL = (e, t) => {
          let r = tV(e),
            n = tV(t),
            i = { ...r };
          return (e) => (
            (i.red = tR(r.red, n.red, e)),
            (i.green = tR(r.green, n.green, e)),
            (i.blue = tR(r.blue, n.blue, e)),
            (i.alpha = tM(r.alpha, n.alpha, e)),
            tE.transform(i)
          );
        },
        tD = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: ej.Z,
        },
        t_ = { regex: H, countKey: "Colors", token: "${c}", parse: tT.parse },
        tI = { regex: W, countKey: "Numbers", token: "${n}", parse: U.parse };
      function tF(e, { regex: t, countKey: r, token: n, parse: i }) {
        let o = e.tokenised.match(t);
        o &&
          ((e["num" + r] = o.length),
          (e.tokenised = e.tokenised.replace(t, n)),
          e.values.push(...o.map(i)));
      }
      function tB(e) {
        let t = e.toString(),
          r = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && tF(r, tD), tF(r, t_), tF(r, tI), r;
      }
      function tU(e) {
        return tB(e).values;
      }
      function tN(e) {
        let { values: t, numColors: r, numVars: n, tokenised: i } = tB(e),
          o = t.length;
        return (e) => {
          let t = i;
          for (let i = 0; i < o; i++)
            t =
              i < n
                ? t.replace(tD.token, e[i])
                : i < n + r
                ? t.replace(t_.token, tT.transform(e[i]))
                : t.replace(tI.token, $(e[i]));
          return t;
        };
      }
      let tz = (e) => ("number" == typeof e ? 0 : e),
        t$ = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              G(e) &&
              ((null === (t = e.match(W)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(H)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: tU,
          createTransformer: tN,
          getAnimatableNone: function (e) {
            let t = tU(e),
              r = tN(e);
            return r(t.map(tz));
          },
        },
        tW = (e, t) => (r) => `${r > 0 ? t : e}`;
      function tH(e, t) {
        return "number" == typeof e
          ? (r) => tM(e, t, r)
          : tT.test(e)
          ? tL(e, t)
          : e.startsWith("var(")
          ? tW(e, t)
          : tq(e, t);
      }
      let tZ = (e, t) => {
          let r = [...e],
            n = r.length,
            i = e.map((e, r) => tH(e, t[r]));
          return (e) => {
            for (let t = 0; t < n; t++) r[t] = i[t](e);
            return r;
          };
        },
        tG = (e, t) => {
          let r = { ...e, ...t },
            n = {};
          for (let i in r)
            void 0 !== e[i] && void 0 !== t[i] && (n[i] = tH(e[i], t[i]));
          return (e) => {
            for (let t in n) r[t] = n[t](e);
            return r;
          };
        },
        tq = (e, t) => {
          let r = t$.createTransformer(t),
            n = tB(e),
            i = tB(t),
            o =
              n.numVars === i.numVars &&
              n.numColors === i.numColors &&
              n.numNumbers >= i.numNumbers;
          return o
            ? e$(tZ(n.values, i.values), r)
            : ((0, e4.K)(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              tW(e, t));
        },
        tY = (e, t, r) => {
          let n = t - e;
          return 0 === n ? 1 : (r - e) / n;
        },
        tX = (e, t) => (r) => tM(e, t, r);
      function tK(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
        let o = e.length;
        if (
          ((0, e4.k)(
            o === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === o)
        )
          return () => t[0];
        e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let s = (function (e, t, r) {
            let n = [],
              i =
                r ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e) return tT.test(e) ? tL : tq;
                  else if (Array.isArray(e)) return tZ;
                  else if ("object" == typeof e) return tG;
                  return tX;
                })(e[0]),
              o = e.length - 1;
            for (let r = 0; r < o; r++) {
              let o = i(e[r], e[r + 1]);
              if (t) {
                let e = Array.isArray(t) ? t[r] || ej.Z : t;
                o = e$(e, o);
              }
              n.push(o);
            }
            return n;
          })(t, n, i),
          a = s.length,
          l = (t) => {
            let r = 0;
            if (a > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
            let n = tY(e[r], e[r + 1], t);
            return s[r](n);
          };
        return r ? (t) => l(B(e[0], e[o - 1], t)) : l;
      }
      function tQ({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = tu(n) ? n.map(tb) : tb(n),
          o = { done: !1, value: t[0] },
          s = (
            r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let n = 1; n <= t; n++) {
                        let i = tY(0, t, n);
                        e.push(tM(r, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
          ).map((t) => t * e),
          a = tK(s, t, {
            ease: Array.isArray(i)
              ? i
              : t.map(() => i || tl).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      function tJ(e, t, r) {
        var n, i;
        let o = Math.max(t - 5, 0);
        return (n = r - e(o)), (i = t - o) ? n * (1e3 / i) : 0;
      }
      function t0(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let t1 = ["duration", "bounce"],
        t5 = ["stiffness", "damping", "mass"];
      function t2(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function t3({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
        let i;
        let o = e[0],
          s = e[e.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: h,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!t2(e, t5) && t2(e, t1)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let i, o;
                (0, e4.K)(
                  e <= e9(10),
                  "Spring duration must be 10 seconds or less"
                );
                let s = 1 - t;
                (s = B(0.05, 1, s)),
                  (e = B(0.01, 10, e8(e))),
                  s < 1
                    ? ((i = (t) => {
                        let n = t * s,
                          i = n * e,
                          o = t0(t, s);
                        return 0.001 - ((n - r) / o) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let n = t * s,
                          o = n * e,
                          a = Math.pow(s, 2) * Math.pow(t, 2) * e,
                          l = t0(Math.pow(t, 2), s),
                          u = -i(t) + 0.001 > 0 ? -1 : 1;
                        return (u * ((o * r + r - a) * Math.exp(-o))) / l;
                      }))
                    : ((i = (t) => {
                        let n = Math.exp(-t * e),
                          i = (t - r) * e + 1;
                        return -0.001 + n * i;
                      }),
                      (o = (t) => {
                        let n = Math.exp(-t * e),
                          i = (r - t) * (e * e);
                        return n * i;
                      }));
                let a = 5 / e,
                  l = (function (e, t, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                    return n;
                  })(i, o, a);
                if (((e = e9(e)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(l, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * s * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })(e);
              (t = {
                ...t,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return t;
          })(n),
          p = h ? -e8(h) : 0,
          m = u / (2 * Math.sqrt(l * c)),
          g = s - o,
          y = e8(Math.sqrt(l / c)),
          v = 5 > Math.abs(g);
        if ((r || (r = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5), m < 1)) {
          let e = t0(y, m);
          i = (t) => {
            let r = Math.exp(-m * y * t);
            return (
              s -
              r *
                (((p + m * y * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
            );
          };
        } else if (1 === m)
          i = (e) => s - Math.exp(-y * e) * (g + (p + y * g) * e);
        else {
          let e = y * Math.sqrt(m * m - 1);
          i = (t) => {
            let r = Math.exp(-m * y * t),
              n = Math.min(e * t, 300);
            return (
              s -
              (r * ((p + m * y * g) * Math.sinh(n) + e * g * Math.cosh(n))) / e
            );
          };
        }
        return {
          calculatedDuration: (f && d) || null,
          next: (e) => {
            let n = i(e);
            if (f) a.done = e >= d;
            else {
              let o = p;
              0 !== e && (o = m < 1 ? tJ(i, e, n) : 0);
              let l = Math.abs(o) <= r,
                u = Math.abs(s - n) <= t;
              a.done = l && u;
            }
            return (a.value = a.done ? s : n), a;
          },
        };
      }
      function t6({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let h, d;
        let f = e[0],
          p = { done: !1, value: f },
          m = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          g = (e) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - e) < Math.abs(l - e)
              ? a
              : l,
          y = r * t,
          v = f + y,
          b = void 0 === s ? v : s(v);
        b !== v && (y = b - f);
        let x = (e) => -y * Math.exp(-e / n),
          P = (e) => b + x(e),
          w = (e) => {
            let t = x(e),
              r = P(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? b : r);
          },
          S = (e) => {
            m(p.value) &&
              ((h = e),
              (d = t3({
                keyframes: [p.value, g(p.value)],
                velocity: tJ(P, e, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (d || void 0 !== h || ((t = !0), w(e), S(e)),
              void 0 !== h && e > h)
                ? d.next(e - h)
                : (t || w(e), p);
            },
          }
        );
      }
      let t7 = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => ek.update(t, !0),
          stop: () => eO(t),
          now: () => (eV.isProcessing ? eV.timestamp : performance.now()),
        };
      };
      function t4(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let t9 = { decay: t6, inertia: t6, tween: tQ, keyframes: tQ, spring: t3 };
      function t8({
        autoplay: e = !0,
        delay: t = 0,
        driver: r = t7,
        keyframes: n,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: s = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: h,
        ...d
      }) {
        let f,
          p,
          m,
          g,
          y,
          v = 1,
          b = !1,
          x = () => {
            p = new Promise((e) => {
              f = e;
            });
          };
        x();
        let P = t9[i] || tQ;
        P !== tQ &&
          "number" != typeof n[0] &&
          ((g = tK([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let w = P({ ...d, keyframes: n });
        "mirror" === a &&
          (y = P({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let S = "idle",
          E = null,
          A = null,
          C = null;
        null === w.calculatedDuration && o && (w.calculatedDuration = t4(w));
        let { calculatedDuration: T } = w,
          M = 1 / 0,
          j = 1 / 0;
        null !== T && (j = (M = T + s) * (o + 1) - s);
        let R = 0,
          k = (e) => {
            if (null === A) return;
            v > 0 && (A = Math.min(A, e)),
              v < 0 && (A = Math.min(e - j / v, A)),
              (R = null !== E ? E : Math.round(e - A) * v);
            let r = R - t * (v >= 0 ? 1 : -1),
              i = v >= 0 ? r < 0 : r > j;
            (R = Math.max(r, 0)), "finished" === S && null === E && (R = j);
            let l = R,
              u = w;
            if (o) {
              let e = R / M,
                t = Math.floor(e),
                r = e % 1;
              !r && e >= 1 && (r = 1), 1 === r && t--, (t = Math.min(t, o + 1));
              let n = !!(t % 2);
              n &&
                ("reverse" === a
                  ? ((r = 1 - r), s && (r -= s / M))
                  : "mirror" === a && (u = y));
              let i = B(0, 1, r);
              R > j && (i = "reverse" === a && n ? 1 : 0), (l = i * M);
            }
            let c = i ? { done: !1, value: n[0] } : u.next(l);
            g && (c.value = g(c.value));
            let { done: d } = c;
            i || null === T || (d = v >= 0 ? R >= j : R <= 0);
            let f = null === E && ("finished" === S || ("running" === S && d));
            return h && h(c.value), f && L(), c;
          },
          O = () => {
            m && m.stop(), (m = void 0);
          },
          V = () => {
            (S = "idle"), O(), f(), x(), (A = C = null);
          },
          L = () => {
            (S = "finished"), c && c(), O(), f();
          },
          D = () => {
            if (b) return;
            m || (m = r(k));
            let e = m.now();
            l && l(),
              null !== E ? (A = e - E) : (A && "finished" !== S) || (A = e),
              "finished" === S && x(),
              (C = A),
              (E = null),
              (S = "running"),
              m.start();
          };
        e && D();
        let _ = {
          then: (e, t) => p.then(e, t),
          get time() {
            return e8(R);
          },
          set time(newTime) {
            (R = newTime = e9(newTime)),
              null === E && m && 0 !== v
                ? (A = m.now() - newTime / v)
                : (E = newTime);
          },
          get duration() {
            let e =
              null === w.calculatedDuration ? t4(w) : w.calculatedDuration;
            return e8(e);
          },
          get speed() {
            return v;
          },
          set speed(newSpeed) {
            if (newSpeed === v || !m) return;
            (v = newSpeed), (_.time = e8(R));
          },
          get state() {
            return S;
          },
          play: D,
          pause: () => {
            (S = "paused"), (E = R);
          },
          stop: () => {
            (b = !0), "idle" !== S && ((S = "idle"), u && u(), V());
          },
          cancel: () => {
            null !== C && k(C), V();
          },
          complete: () => {
            S = "finished";
          },
          sample: (e) => ((A = 0), k(e)),
        };
        return _;
      }
      let re =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        rt = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        rr = (e, t) =>
          "spring" === t.type ||
          "backgroundColor" === e ||
          !(function e(t) {
            return !!(
              !t ||
              ("string" == typeof t && tn[t]) ||
              tt(t) ||
              (Array.isArray(t) && t.every(e))
            );
          })(t.ease),
        rn = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ri = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ro = { type: "keyframes", duration: 0.8 },
        rs = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ra = (e, { keyframes: t }) =>
          t.length > 2
            ? ro
            : R.has(e)
            ? e.startsWith("scale")
              ? ri(t[1])
              : rn
            : rs,
        rl = (e, t) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (t$.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        ru = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function rc(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(W) || [];
        if (!n) return e;
        let i = r.replace(n, ""),
          o = ru.has(t) ? 1 : 0;
        return n !== r && (o *= 100), t + "(" + o + i + ")";
      }
      let rh = /([a-z-]*)\(.*?\)/g,
        rd = {
          ...t$,
          getAnimatableNone: (e) => {
            let t = e.match(rh);
            return t ? t.map(rc).join(" ") : e;
          },
        },
        rf = {
          ...er,
          color: tT,
          backgroundColor: tT,
          outlineColor: tT,
          fill: tT,
          stroke: tT,
          borderColor: tT,
          borderTopColor: tT,
          borderRightColor: tT,
          borderBottomColor: tT,
          borderLeftColor: tT,
          filter: rd,
          WebkitFilter: rd,
        },
        rp = (e) => rf[e];
      function rm(e, t) {
        let r = rp(e);
        return (
          r !== rd && (r = t$),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let rg = (e) => /^0[^.\s]+$/.test(e);
      function ry(e, t) {
        return e[t] || e.default || e;
      }
      let rv =
        (e, t, r, n = {}) =>
        (i) => {
          let o = ry(n, e) || {},
            s = o.delay || n.delay || 0,
            { elapsed: a = 0 } = n;
          a -= e9(s);
          let l = (function (e, t, r, n) {
              let i, o;
              let s = rl(t, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let a = void 0 !== n.from ? n.from : e.get(),
                l = [];
              for (let e = 0; e < i.length; e++) {
                var u;
                null === i[e] && (i[e] = 0 === e ? a : i[e - 1]),
                  ("number" == typeof (u = i[e])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || rg(u)
                    : void 0) && l.push(e),
                  "string" == typeof i[e] &&
                    "none" !== i[e] &&
                    "0" !== i[e] &&
                    (o = i[e]);
              }
              if (s && l.length && o)
                for (let e = 0; e < l.length; e++) {
                  let r = l[e];
                  i[r] = rm(t, o);
                }
              return i;
            })(t, e, r, o),
            u = l[0],
            c = l[l.length - 1],
            h = rl(e, u),
            d = rl(e, c);
          (0, e4.K)(
            h === d,
            `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
          );
          let f = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -a,
            onUpdate: (e) => {
              t.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              i(), o.onComplete && o.onComplete();
            },
          };
          if (
            (!(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(o) && (f = { ...f, ...ra(e, f) }),
            f.duration && (f.duration = e9(f.duration)),
            f.repeatDelay && (f.repeatDelay = e9(f.repeatDelay)),
            !h || !d || te.current || !1 === o.type)
          )
            return (function ({
              keyframes: e,
              delay: t,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(e[e.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: ej.Z,
                  pause: ej.Z,
                  stop: ej.Z,
                  then: (e) => (e(), Promise.resolve()),
                  cancel: ej.Z,
                  complete: ej.Z,
                }
              );
              return t
                ? t8({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: t,
                    onComplete: i,
                  })
                : i();
            })(te.current ? { ...f, delay: 0 } : f);
          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            let r = (function (e, t, { onUpdate: r, onComplete: n, ...i }) {
              let o, s;
              let a =
                re() &&
                rt.has(t) &&
                !i.repeatDelay &&
                "mirror" !== i.repeatType &&
                0 !== i.damping &&
                "inertia" !== i.type;
              if (!a) return !1;
              let l = !1,
                u = () => {
                  s = new Promise((e) => {
                    o = e;
                  });
                };
              u();
              let { keyframes: c, duration: h = 300, ease: d, times: f } = i;
              if (rr(t, i)) {
                let e = t8({ ...i, repeat: 0, delay: 0 }),
                  t = { done: !1, value: c[0] },
                  r = [],
                  n = 0;
                for (; !t.done && n < 2e4; )
                  r.push((t = e.sample(n)).value), (n += 10);
                (f = void 0), (c = r), (h = n - 10), (d = "linear");
              }
              let p = (function (
                  e,
                  t,
                  r,
                  {
                    delay: n = 0,
                    duration: i,
                    repeat: o = 0,
                    repeatType: s = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [t]: r };
                  l && (u.offset = l);
                  let c = (function e(t) {
                    if (t)
                      return tt(t)
                        ? tr(t)
                        : Array.isArray(t)
                        ? t.map(e)
                        : tn[t];
                  })(a);
                  return (
                    Array.isArray(c) && (u.easing = c),
                    e.animate(u, {
                      delay: n,
                      duration: i,
                      easing: Array.isArray(c) ? "linear" : c,
                      fill: "both",
                      iterations: o + 1,
                      direction: "reverse" === s ? "alternate" : "normal",
                    })
                  );
                })(e.owner.current, t, c, {
                  ...i,
                  duration: h,
                  ease: d,
                  times: f,
                }),
                m = () => p.cancel(),
                g = () => {
                  ek.update(m), o(), u();
                };
              return (
                (p.onfinish = () => {
                  e.set(
                    (function (e, { repeat: t, repeatType: r = "loop" }) {
                      let n =
                        t && "loop" !== r && t % 2 == 1 ? 0 : e.length - 1;
                      return e[n];
                    })(c, i)
                  ),
                    n && n(),
                    g();
                }),
                {
                  then: (e, t) => s.then(e, t),
                  attachTimeline: (e) => (
                    (p.timeline = e), (p.onfinish = null), ej.Z
                  ),
                  get time() {
                    return e8(p.currentTime || 0);
                  },
                  set time(newTime) {
                    p.currentTime = e9(newTime);
                  },
                  get speed() {
                    return p.playbackRate;
                  },
                  set speed(newSpeed) {
                    p.playbackRate = newSpeed;
                  },
                  get duration() {
                    return e8(h);
                  },
                  play: () => {
                    l || (p.play(), eO(m));
                  },
                  pause: () => p.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === p.playState)) return;
                    let { currentTime: t } = p;
                    if (t) {
                      let r = t8({ ...i, autoplay: !1 });
                      e.setWithVelocity(
                        r.sample(t - 10).value,
                        r.sample(t).value,
                        10
                      );
                    }
                    g();
                  },
                  complete: () => p.finish(),
                  cancel: g,
                }
              );
            })(t, e, f);
            if (r) return r;
          }
          return t8(f);
        };
      function rb(e) {
        return !!(O(e) && e.add);
      }
      let rx = (e) => /^\-?\d*\.?\d+$/.test(e);
      function rP(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function rw(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      class rS {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return rP(this.subscriptions, e), () => rw(this.subscriptions, e);
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let rE = (e) => !isNaN(parseFloat(e)),
        rA = { current: void 0 };
      class rC {
        constructor(e, t = {}) {
          (this.version = "10.16.1"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: r, timestamp: n } = eV;
              this.lastUpdated !== n &&
                ((this.timeDelta = r),
                (this.lastUpdated = n),
                ek.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              ek.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = rE(this.current)),
            (this.owner = t.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new rS());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  ek.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t), (this.prev = e), (this.timeDelta = r);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return rA.current && rA.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e, t;
          return this.canTrackVelocity
            ? ((e = parseFloat(this.current) - parseFloat(this.prev)),
              (t = this.timeDelta) ? e * (1e3 / t) : 0)
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function rT(e, t) {
        return new rC(e, t);
      }
      let rM = (e) => (t) => t.test(e),
        rj = [U, K, X, Y, J, Q, { test: (e) => "auto" === e, parse: (e) => e }],
        rR = (e) => rj.find(rM(e)),
        rk = [...rj, tT, t$],
        rO = (e) => rk.find(rM(e));
      function rV(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        let {
            transition: o = e.getDefaultTransition(),
            transitionEnd: s,
            ...a
          } = e.makeTargetAnimatable(t),
          l = e.getValue("willChange");
        n && (o = n);
        let u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (let t in a) {
          let n = e.getValue(t),
            i = a[t];
          if (
            !n ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), n;
              })(c, t))
          )
            continue;
          let s = { delay: r, elapsed: 0, ...o };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            let r = e.getProps()[e7];
            r && (s.elapsed = window.HandoffAppearAnimations(r, t, n, ek));
          }
          n.start(
            rv(t, n, i, e.shouldReduceMotion && R.has(t) ? { type: !1 } : s)
          );
          let h = n.animation;
          rb(l) && (l.add(t), h.then(() => l.remove(t))), u.push(h);
        }
        return (
          s &&
            Promise.all(u).then(() => {
              s &&
                (function (e, t) {
                  let r = e6(e, t),
                    {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...o
                    } = r ? e.makeTargetAnimatable(r, !1) : {};
                  for (let t in (o = { ...o, ...n })) {
                    let r = eC(o[t]);
                    e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, rT(r));
                  }
                })(e, s);
            }),
          u
        );
      }
      function rL(e, t, r = {}) {
        let n = e6(e, t, r.custom),
          { transition: i = e.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let o = n ? () => Promise.all(rV(e, n, r)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = i;
                  return (function (e, t, r = 0, n = 0, i = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * n,
                      l = 1 === i ? (e = 0) => e * n : (e = 0) => a - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(rD)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            s.push(
                              rL(e, t, { ...o, delay: r + l(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, o + n, s, a, r);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([o(), s(r.delay)]);
        {
          let [e, t] = "beforeChildren" === a ? [o, s] : [s, o];
          return e().then(() => t());
        }
      }
      function rD(e, t) {
        return e.sortNodePosition(t);
      }
      let r_ = [...g].reverse(),
        rI = g.length;
      function rF(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let rB = 0,
        rU = (e, t) => Math.abs(e - t);
      class rN {
        constructor(e, t, { transformPagePoint: r } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = rW(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                r =
                  (function (e, t) {
                    let r = rU(e.x, t.x),
                      n = rU(e.y, t.y);
                    return Math.sqrt(r ** 2 + n ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !r) return;
              let { point: n } = e,
                { timestamp: i } = eV;
              this.history.push({ ...n, timestamp: i });
              let { onStart: o, onMove: s } = this.handlers;
              t ||
                (o && o(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                s && s(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = rz(t, this.transformPagePoint)),
                ek.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: r, onSessionEnd: n } = this.handlers,
                i = rW(
                  "pointercancel" === e.type
                    ? this.lastMoveEventInfo
                    : rz(t, this.transformPagePoint),
                  this.history
                );
              this.startEvent && r && r(e, i), n && n(e, i);
            }),
            !eF(e))
          )
            return;
          (this.handlers = t), (this.transformPagePoint = r);
          let n = eB(e),
            i = rz(n, this.transformPagePoint),
            { point: o } = i,
            { timestamp: s } = eV;
          this.history = [{ ...o, timestamp: s }];
          let { onSessionStart: a } = t;
          a && a(e, rW(i, this.history)),
            (this.removeListeners = e$(
              eN(window, "pointermove", this.handlePointerMove),
              eN(window, "pointerup", this.handlePointerUp),
              eN(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), eO(this.updatePoint);
        }
      }
      function rz(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function r$(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function rW({ point: e }, t) {
        return {
          point: e,
          delta: r$(e, rH(t)),
          offset: r$(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              n = null,
              i = rH(e);
            for (
              ;
              r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > e9(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = e8(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(t, 0),
        };
      }
      function rH(e) {
        return e[e.length - 1];
      }
      function rZ(e) {
        return e.max - e.min;
      }
      function rG(e, t = 0, r = 0.01) {
        return Math.abs(e - t) <= r;
      }
      function rq(e, t, r, n = 0.5) {
        (e.origin = n),
          (e.originPoint = tM(t.min, t.max, e.origin)),
          (e.scale = rZ(r) / rZ(t)),
          (rG(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = tM(r.min, r.max, e.origin) - e.originPoint),
          (rG(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function rY(e, t, r, n) {
        rq(e.x, t.x, r.x, n ? n.originX : void 0),
          rq(e.y, t.y, r.y, n ? n.originY : void 0);
      }
      function rX(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + rZ(t));
      }
      function rK(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + rZ(t));
      }
      function rQ(e, t, r) {
        rK(e.x, t.x, r.x), rK(e.y, t.y, r.y);
      }
      function rJ(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function r0(e, t) {
        let r = t.min - e.min,
          n = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function r1(e, t, r) {
        return { min: r5(e, t), max: r5(e, r) };
      }
      function r5(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let r2 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r3 = () => ({ x: r2(), y: r2() }),
        r6 = () => ({ min: 0, max: 0 }),
        r7 = () => ({ x: r6(), y: r6() });
      function r4(e) {
        return [e("x"), e("y")];
      }
      function r9({ top: e, left: t, right: r, bottom: n }) {
        return { x: { min: t, max: r }, y: { min: e, max: n } };
      }
      function r8(e) {
        return void 0 === e || 1 === e;
      }
      function ne({ scale: e, scaleX: t, scaleY: r }) {
        return !r8(e) || !r8(t) || !r8(r);
      }
      function nt(e) {
        return ne(e) || nr(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function nr(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function nn(e, t, r, n, i) {
        return void 0 !== i && (e = n + i * (e - n)), n + r * (e - n) + t;
      }
      function ni(e, t = 0, r = 1, n, i) {
        (e.min = nn(e.min, t, r, n, i)), (e.max = nn(e.max, t, r, n, i));
      }
      function no(e, { x: t, y: r }) {
        ni(e.x, t.translate, t.scale, t.originPoint),
          ni(e.y, r.translate, r.scale, r.originPoint);
      }
      function ns(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function na(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function nl(e, t, [r, n, i]) {
        let o = void 0 !== t[i] ? t[i] : 0.5,
          s = tM(e.min, e.max, o);
        ni(e, t[r], t[n], s, t.scale);
      }
      let nu = ["x", "scaleX", "originX"],
        nc = ["y", "scaleY", "originY"];
      function nh(e, t) {
        nl(e.x, t, nu), nl(e.y, t, nc);
      }
      function nd(e, t) {
        return r9(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              n = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let nf = new WeakMap();
      class np {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = r7()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          (r && !1 === r.isPresent) ||
            (this.panSession = new rN(
              e,
              {
                onSessionStart: (e) => {
                  this.stopAnimation(),
                    t && this.snapToCursor(eB(e, "page").point);
                },
                onStart: (e, t) => {
                  let {
                    drag: r,
                    dragPropagation: n,
                    onDragStart: i,
                  } = this.getProps();
                  if (
                    r &&
                    !n &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = eG(r)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    r4((e) => {
                      let t = this.getAxisMotionValue(e).get() || 0;
                      if (X.test(t)) {
                        let { projection: r } = this.visualElement;
                        if (r && r.layout) {
                          let n = r.layout.layoutBox[e];
                          if (n) {
                            let e = rZ(n);
                            t = e * (parseFloat(t) / 100);
                          }
                        }
                      }
                      this.originPoint[e] = t;
                    }),
                    i && ek.update(() => i(e, t), !1, !0);
                  let { animationState: o } = this.visualElement;
                  o && o.setActive("whileDrag", !0);
                },
                onMove: (e, t) => {
                  let {
                    dragPropagation: r,
                    dragDirectionLock: n,
                    onDirectionLock: i,
                    onDrag: o,
                  } = this.getProps();
                  if (!r && !this.openGlobalLock) return;
                  let { offset: s } = t;
                  if (n && null === this.currentDirection) {
                    (this.currentDirection = (function (e, t = 10) {
                      let r = null;
                      return (
                        Math.abs(e.y) > t
                          ? (r = "y")
                          : Math.abs(e.x) > t && (r = "x"),
                        r
                      );
                    })(s)),
                      null !== this.currentDirection &&
                        i &&
                        i(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", t.point, s),
                    this.updateAxis("y", t.point, s),
                    this.visualElement.render(),
                    o && o(e, t);
                },
                onSessionEnd: (e, t) => this.stop(e, t),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = t;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && ek.update(() => i(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, r) {
          let { drag: n } = this.getProps();
          if (!r || !nm(e, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: r }, n) {
              return (
                void 0 !== t && e < t
                  ? (e = n ? tM(t, e, n.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = n ? tM(r, e, n.max) : Math.min(e, r)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o);
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            n = this.constraints;
          e && f(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                e,
                { top: t, left: r, bottom: n, right: i }
              ) {
                return { x: rJ(e.x, r, i), y: rJ(e.y, t, n) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: r1(e, "left", "right"), y: r1(e, "top", "bottom") }
              );
            })(t)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              r4((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !f(t)) return !1;
          let n = t.current;
          (0, e4.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, r) {
              let n = nd(e, r),
                { scroll: i } = t;
              return i && (na(n.x, i.offset.x), na(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: r0((e = i.layout.layoutBox).x, o.x), y: r0(e.y, o.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!e), e && (s = r9(e));
          }
          return s;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {},
            l = r4((s) => {
              if (!nm(s, t, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? e[s] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            });
          return Promise.all(l).then(s);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return r.start(rv(e, r, 0, t));
        }
        stopAnimation() {
          r4((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let t = "_drag" + e.toUpperCase(),
            r = this.visualElement.getProps(),
            n = r[t];
          return (
            n ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          r4((t) => {
            let { drag: r } = this.getProps();
            if (!nm(t, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[t];
              i.set(e[t] - tM(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!f(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          r4((e) => {
            let t = this.getAxisMotionValue(e);
            if (t) {
              let r = t.get();
              n[e] = (function (e, t) {
                let r = 0.5,
                  n = rZ(e),
                  i = rZ(t);
                return (
                  i > n
                    ? (r = tY(t.min, t.max - n, e.min))
                    : n > i && (r = tY(e.min, e.max - i, t.min)),
                  B(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            r4((t) => {
              if (!nm(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              r.set(tM(i, o, n[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nf.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = eN(e, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            r = () => {
              let { dragConstraints: e } = this.getProps();
              f(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", r);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            r();
          let o = eI(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (r4((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), t(), i(), s && s();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function nm(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      let ng = (e) => (t, r) => {
          e && ek.update(() => e(t, r));
        },
        ny = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nv(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let nb = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!K.test(e)) return e;
            e = parseFloat(e);
          }
          let r = nv(e, t.target.x),
            n = nv(e, t.target.y);
          return `${r}% ${n}%`;
        },
      };
      class nx extends s.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = e;
          Object.assign(M, nw),
            i &&
              (t.group && t.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ny.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || e.layoutDependency !== t || void 0 === t
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    ek.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = e;
          n &&
            (n.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function nP(e) {
        let [t, r] = (function () {
            let e = (0, s.useContext)(u);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: r, register: n } = e,
              i = (0, s.useId)();
            return (
              (0, s.useEffect)(() => n(i), []),
              !t && r ? [!1, () => r && r(i)] : [!0]
            );
          })(),
          n = (0, s.useContext)(S);
        return s.createElement(nx, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(E),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let nw = {
          borderRadius: {
            ...nb,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: nb,
          borderTopRightRadius: nb,
          borderBottomLeftRadius: nb,
          borderBottomRightRadius: nb,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let n = t$.parse(e);
              if (n.length > 5) return e;
              let i = t$.createTransformer(e),
                o = "number" != typeof n[0] ? 1 : 0,
                s = r.x.scale * t.x,
                a = r.y.scale * t.y;
              (n[0 + o] /= s), (n[1 + o] /= a);
              let l = tM(s, a, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= l),
                "number" == typeof n[3 + o] && (n[3 + o] /= l),
                i(n)
              );
            },
          },
        },
        nS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nE = nS.length,
        nA = (e) => ("string" == typeof e ? parseFloat(e) : e),
        nC = (e) => "number" == typeof e || K.test(e);
      function nT(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let nM = nR(0, 0.5, tf),
        nj = nR(0.5, 0.95, ej.Z);
      function nR(e, t, r) {
        return (n) => (n < e ? 0 : n > t ? 1 : r(tY(e, t, n)));
      }
      function nk(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function nO(e, t) {
        nk(e.x, t.x), nk(e.y, t.y);
      }
      function nV(e, t, r, n, i) {
        return (
          (e -= t),
          (e = n + (1 / r) * (e - n)),
          void 0 !== i && (e = n + (1 / i) * (e - n)),
          e
        );
      }
      function nL(e, t, [r, n, i], o, s) {
        !(function (e, t = 0, r = 1, n = 0.5, i, o = e, s = e) {
          if (X.test(t)) {
            t = parseFloat(t);
            let e = tM(s.min, s.max, t / 100);
            t = e - s.min;
          }
          if ("number" != typeof t) return;
          let a = tM(o.min, o.max, n);
          e === o && (a -= t),
            (e.min = nV(e.min, t, r, a, i)),
            (e.max = nV(e.max, t, r, a, i));
        })(e, t[r], t[n], t[i], t.scale, o, s);
      }
      let nD = ["x", "scaleX", "originX"],
        n_ = ["y", "scaleY", "originY"];
      function nI(e, t, r, n) {
        nL(e.x, t, nD, r ? r.x : void 0, n ? n.x : void 0),
          nL(e.y, t, n_, r ? r.y : void 0, n ? n.y : void 0);
      }
      function nF(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function nB(e) {
        return nF(e.x) && nF(e.y);
      }
      function nU(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function nN(e) {
        return rZ(e.x) / rZ(e.y);
      }
      class nz {
        constructor() {
          this.members = [];
        }
        add(e) {
          rP(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (rw(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: n } = e.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function n$(e, t, r) {
        let n = "",
          i = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if (
          ((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
          r)
        ) {
          let { rotate: e, rotateX: t, rotateY: i } = r;
          e && (n += `rotate(${e}deg) `),
            t && (n += `rotateX(${t}deg) `),
            i && (n += `rotateY(${i}deg) `);
        }
        let s = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return (1 !== s || 1 !== a) && (n += `scale(${s}, ${a})`), n || "none";
      }
      let nW = (e, t) => e.depth - t.depth;
      class nH {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          rP(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          rw(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(nW),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      let nZ = ["", "X", "Y", "Z"],
        nG = 0,
        nq = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nY({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = nG++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (nq.totalNodes =
                  nq.resolvedTargetDeltas =
                  nq.recalculatedProjection =
                    0),
                  this.nodes.forEach(nQ),
                  this.nodes.forEach(n6),
                  this.nodes.forEach(n7),
                  this.nodes.forEach(nJ),
                  window.MotionDebug && window.MotionDebug.record(nq);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nH());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new rS()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = performance.now(),
                      n = ({ timestamp: i }) => {
                        let o = i - r;
                        o >= t && (eO(n), e(o - t));
                      };
                    return ek.read(n, !0), () => eO(n);
                  })(n, 250)),
                  ny.hasAnimatedSinceResize &&
                    ((ny.hasAnimatedSinceResize = !1), this.nodes.forEach(n3));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        ir,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !nU(this.targetLayout, n) || r,
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...ry(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || n3(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              eO(this.updateProjection);
          }
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
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n4),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let e = this.isUpdateBlocked();
            if (e) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n1);
              return;
            }
            this.isUpdating || this.nodes.forEach(n5),
              (this.isUpdating = !1),
              this.nodes.forEach(n2),
              this.nodes.forEach(nX),
              this.nodes.forEach(nK),
              this.clearAllSnapshots();
            let t = performance.now();
            (eV.delta = B(0, 1e3 / 60, t - eV.timestamp)),
              (eV.timestamp = t),
              (eV.isProcessing = !0),
              eL.update.process(eV),
              eL.preRender.process(eV),
              eL.render.process(eV),
              (eV.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n0), this.sharedNodes.forEach(n9);
          }
          scheduleUpdateProjection() {
            ek.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            ek.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let t = this.path[e];
                t.updateScroll();
              }
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = r7()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !nB(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            e &&
              (t || nt(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              e && (n = this.removeTransform(n)),
              is((t = n).x),
              is(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return r7();
            let t = e.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (na(t.x, r.offset.x), na(t.y, r.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = r7();
            nO(t, e);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: o } = n;
              if (n !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  nO(t, e);
                  let { scroll: r } = this.root;
                  r && (na(t.x, -r.offset.x), na(t.y, -r.offset.y));
                }
                na(t.x, i.offset.x), na(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let r = r7();
            nO(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              !t &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                nh(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                nt(n.latestValues) && nh(r, n.latestValues);
            }
            return nt(this.latestValues) && nh(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = r7();
            nO(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !nt(r.latestValues)) continue;
              ne(r.latestValues) && r.updateSnapshot();
              let n = r7(),
                i = r.measurePageBox();
              nO(n, i),
                nI(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return nt(this.latestValues) && nI(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== eV.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o,
              a = !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = eV.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = r7()),
                    (this.relativeTargetOrigin = r7()),
                    rQ(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    nO(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = r7()), (this.targetWithTransforms = r7())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      rX(r.x, n.x, i.x),
                      rX(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nO(this.target, this.layout.layoutBox),
                      no(this.target, this.targetDelta))
                    : nO(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = r7()),
                      (this.relativeTargetOrigin = r7()),
                      rQ(this.relativeTargetOrigin, this.target, e.target),
                      nO(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nq.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ne(this.parent.latestValues) ||
              nr(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === eV.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            nO(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, r, n = !1) {
              let i, o;
              let s = r.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = r[a]).projectionDelta;
                  let s = i.instance;
                  (!s || !s.style || "contents" !== s.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      nh(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), no(e, o)),
                    n && nt(i.latestValues) && nh(e, i.latestValues));
                }
                (t.x = ns(t.x)), (t.y = ns(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (t.target = t.layout.layoutBox);
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = r3()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = r3()),
              (this.projectionDeltaWithTransform = r3()));
            let u = this.projectionTransform;
            rY(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = n$(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== s ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nq.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              s = r3();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = r7(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              c = l !== u,
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              f = !!(
                c &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(it)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let n = t / 1e3;
                if (
                  (n8(s.x, e.x, n),
                  n8(s.y, e.y, n),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, h, p;
                  rQ(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (h = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    ie(h.x, p.x, a.x, n),
                    ie(h.y, p.y, a.y, n),
                    r &&
                      ((l = this.relativeTarget),
                      (u = r),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    r || (r = r7()),
                    nO(r, this.relativeTarget);
                }
                c &&
                  ((this.animationValues = o),
                  (function (e, t, r, n, i, o) {
                    i
                      ? ((e.opacity = tM(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          nM(n)
                        )),
                        (e.opacityExit = tM(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          nj(n)
                        )))
                      : o &&
                        (e.opacity = tM(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < nE; i++) {
                      let o = `border${nS[i]}Radius`,
                        s = nT(t, o),
                        a = nT(r, o);
                      if (void 0 === s && void 0 === a) continue;
                      s || (s = 0), a || (a = 0);
                      let l = 0 === s || 0 === a || nC(s) === nC(a);
                      l
                        ? ((e[o] = Math.max(tM(nA(s), nA(a), n), 0)),
                          (X.test(a) || X.test(s)) && (e[o] += "%"))
                        : (e[o] = a);
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = tM(t.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, f, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (eO(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = ek.update(() => {
                (ny.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let n = O(e) ? e : rT(e);
                    return n.start(rv("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: n,
                latestValues: i,
              } = e;
            if (t && r && n) {
              if (
                this !== e &&
                this.layout &&
                n &&
                ia(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || r7();
                let t = rZ(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let n = rZ(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + n);
              }
              nO(t, r),
                nh(t, i),
                rY(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new nz());
            let r = this.sharedNodes.get(e);
            r.add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (t = !0),
              !t)
            )
              return;
            let n = {};
            for (let t = 0; t < nZ.length; t++) {
              let i = "rotate" + nZ[t];
              r[i] && ((n[i] = r[i]), e.setStaticValue(i, 0));
            }
            for (let t in (e.render(), n)) e.setStaticValue(t, n[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e = {}) {
            var t, r;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = eT(e.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents = eT(e.pointerEvents) || "")),
                this.hasProjected &&
                  !nt(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = n$(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              i && (n.transform = i(s, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            M)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: r } = M[e],
                i = "none" === n.transform ? s[e] : t(s[e], o);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) n[r[t]] = i;
              } else n[e] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this ? eT(e.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(n1),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nX(e) {
        e.updateLayout();
      }
      function nK(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: n } = e.layout,
            { animationType: i } = e.options,
            o = r.source !== e.layout.source;
          "size" === i
            ? r4((e) => {
                let n = o ? r.measuredBox[e] : r.layoutBox[e],
                  i = rZ(n);
                (n.min = t[e].min), (n.max = n.min + i);
              })
            : ia(i, r.layoutBox, t) &&
              r4((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  s = rZ(t[n]);
                (i.max = i.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[n].max = e.relativeTarget[n].min + s));
              });
          let s = r3();
          rY(s, t, r.layoutBox);
          let a = r3();
          o
            ? rY(a, e.applyTransform(n, !0), r.measuredBox)
            : rY(a, t, r.layoutBox);
          let l = !nB(s),
            u = !1;
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let s = r7();
                rQ(s, r.layoutBox, i.layoutBox);
                let a = r7();
                rQ(a, t, o.layoutBox),
                  nU(s, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = s),
                    (e.relativeParent = n));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function nQ(e) {
        nq.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function nJ(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function n0(e) {
        e.clearSnapshot();
      }
      function n1(e) {
        e.clearMeasurements();
      }
      function n5(e) {
        e.isLayoutDirty = !1;
      }
      function n2(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function n3(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function n6(e) {
        e.resolveTargetDelta();
      }
      function n7(e) {
        e.calcProjection();
      }
      function n4(e) {
        e.resetRotation();
      }
      function n9(e) {
        e.removeLeadSnapshot();
      }
      function n8(e, t, r) {
        (e.translate = tM(t.translate, 0, r)),
          (e.scale = tM(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function ie(e, t, r, n) {
        (e.min = tM(t.min, r.min, n)), (e.max = tM(t.max, r.max, n));
      }
      function it(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let ir = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ii = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(e),
        io = ii("applewebkit/") && !ii("chrome/") ? Math.round : ej.Z;
      function is(e) {
        (e.min = io(e.min)), (e.max = io(e.max));
      }
      function ia(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !rG(nN(t), nN(r), 0.2))
        );
      }
      let il = nY({
          attachResizeListener: (e, t) => eI(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iu = { current: void 0 },
        ic = nY({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!iu.current) {
              let e = new il({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (iu.current = e);
            }
            return iu.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        }),
        ih = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function id(e, t, r = 1) {
        (0, e4.k)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [n, i] = (function (e) {
          let t = ih.exec(e);
          if (!t) return [,];
          let [, r, n] = t;
          return [r, n];
        })(e);
        if (!n) return;
        let o = window.getComputedStyle(t).getPropertyValue(n);
        if (o) {
          let e = o.trim();
          return rx(e) ? parseFloat(e) : e;
        }
        return I(i) ? id(i, t, r + 1) : i;
      }
      let ip = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        im = (e) => ip.has(e),
        ig = (e) => Object.keys(e).some(im),
        iy = (e) => e === U || e === K,
        iv = (e, t) => parseFloat(e.split(", ")[t]),
        ib =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return iv(i[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/);
              return t ? iv(t[1], e) : 0;
            }
          },
        ix = new Set(["x", "y", "z"]),
        iP = j.filter((e) => !ix.has(e)),
        iw = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: ib(4, 13),
          y: ib(5, 14),
        };
      (iw.translateX = iw.x), (iw.translateY = iw.y);
      let iS = (e, t, r) => {
          let n = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            { display: s } = o,
            a = {};
          "none" === s && t.setStaticValue("display", e.display || "block"),
            r.forEach((e) => {
              a[e] = iw[e](n, o);
            }),
            t.render();
          let l = t.measureViewportBox();
          return (
            r.forEach((r) => {
              let n = t.getValue(r);
              n && n.jump(a[r]), (e[r] = iw[r](l, o));
            }),
            e
          );
        },
        iE = (e, t, r = {}, n = {}) => {
          (t = { ...t }), (n = { ...n });
          let i = Object.keys(t).filter(im),
            o = [],
            s = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = r[i],
                h = rR(c),
                d = t[i];
              if (eE(d)) {
                let e = d.length,
                  t = null === d[0] ? 1 : 0;
                h = rR((c = d[t]));
                for (let r = t; r < e && null !== d[r]; r++)
                  l
                    ? (0, e4.k)(
                        rR(d[r]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = rR(d[r])),
                      (0, e4.k)(
                        l === h || (iy(h) && iy(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = rR(d);
              if (h !== l) {
                if (iy(h) && iy(l)) {
                  let e = u.get();
                  "string" == typeof e && u.set(parseFloat(e)),
                    "string" == typeof d
                      ? (t[i] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === K &&
                        (t[i] = d.map(parseFloat));
                } else
                  (null == h ? void 0 : h.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (t[i] = h.transform(d))
                    : (s ||
                        ((o = (function (e) {
                          let t = [];
                          return (
                            iP.forEach((r) => {
                              let n = e.getValue(r);
                              void 0 !== n &&
                                (t.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (s = !0)),
                      a.push(i),
                      (n[i] = void 0 !== n[i] ? n[i] : t[i]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: t, transitionEnd: n };
          {
            let r = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = iS(t, e, a);
            return (
              o.length &&
                o.forEach(([t, r]) => {
                  e.getValue(t).set(r);
                }),
              e.render(),
              c && null !== r && window.scrollTo({ top: r }),
              { target: i, transitionEnd: n }
            );
          }
        },
        iA = (e, t, r, n) => {
          var i, o;
          let s = (function (e, { ...t }, r) {
            let n = e.current;
            if (!(n instanceof Element)) return { target: t, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            e.values.forEach((e) => {
              let t = e.get();
              if (!I(t)) return;
              let r = id(t, n);
              r && e.set(r);
            }),
            t)) {
              let e = t[i];
              if (!I(e)) continue;
              let o = id(e, n);
              o && ((t[i] = o), r || (r = {}), void 0 === r[i] && (r[i] = e));
            }
            return { target: t, transitionEnd: r };
          })(e, t, n);
          return (
            (t = s.target),
            (n = s.transitionEnd),
            (i = t),
            (o = n),
            ig(i) ? iE(e, i, r, o) : { target: i, transitionEnd: o }
          );
        },
        iC = { current: null },
        iT = { current: !1 },
        iM = new WeakMap(),
        ij = Object.keys(w),
        iR = ij.length,
        ik = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        iO = y.length;
      class iV {
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: n,
            visualState: i,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => ek.render(this.render, !1, !0));
          let { latestValues: s, renderState: a } = i;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = t.initial ? { ...s } : {}),
            (this.renderState = a),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.isControllingVariants = v(t)),
            (this.isVariantNode = b(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {});
          for (let e in u) {
            let t = u[e];
            void 0 !== s[e] && O(t) && (t.set(s[e], !1), rb(l) && l.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {};
        }
        mount(e) {
          (this.current = e),
            iM.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            iT.current ||
              (function () {
                if (((iT.current = !0), c)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (iC.current = e.matches);
                    e.addListener(t), t();
                  } else iC.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iC.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (iM.delete(this.current),
          this.projection && this.projection.unmount(),
          eO(this.notifyUpdate),
          eO(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r = R.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && ek.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            n(), i();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, r, n, i) {
          let o, s;
          for (let e = 0; e < iR; e++) {
            let r = ij[e],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l,
              } = w[r];
            a && (o = a),
              n(t) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (s = l));
          }
          if (!this.projection && o) {
            this.projection = new o(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: e,
              layout: r,
              drag: n,
              dragConstraints: s,
              layoutScroll: a,
              layoutRoot: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: !!n || (s && f(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : r7();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t);
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < ik.length; t++) {
            let r = ik[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = e["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (e, t, r) {
            let { willChange: n } = t;
            for (let i in t) {
              let o = t[i],
                s = r[i];
              if (O(o)) e.addValue(i, o), rb(n) && n.add(i);
              else if (O(s))
                e.addValue(i, rT(o, { owner: e })), rb(n) && n.remove(i);
              else if (s !== o) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  t.hasAnimated || t.set(o);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, rT(void 0 !== t ? t : o, { owner: e }));
                }
              }
            }
            for (let n in r) void 0 === t[n] && e.removeValue(n);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < iO; e++) {
            let r = y[e],
              n = this.props[r];
            (p(n) || !1 === n) && (t[r] = n);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          t !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, t)),
            this.values.set(e, t),
            (this.latestValues[e] = t.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = rT(t, { owner: this })), this.addValue(e, r)),
            r
          );
        }
        readValue(e) {
          var t;
          return void 0 === this.latestValues[e] && this.current
            ? null !== (t = this.getBaseTargetFromProps(this.props, e)) &&
              void 0 !== t
              ? t
              : this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let { initial: r } = this.props,
            n =
              "string" == typeof r || "object" == typeof r
                ? null === (t = eS(this.props, r)) || void 0 === t
                  ? void 0
                  : t[e]
                : void 0;
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || O(i)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new rS()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class iL extends iV {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: t, ...r },
          { transformValues: n },
          i
        ) {
          let o = (function (e, t, r) {
            let n = {};
            for (let i in e) {
              let e = (function (e, t) {
                if (!t) return;
                let r = t[e] || t.default || t;
                return r.from;
              })(i, t);
              if (void 0 !== e) n[i] = e;
              else {
                let e = r.getValue(i);
                e && (n[i] = e.get());
              }
            }
            return n;
          })(r, e || {}, this);
          if ((n && (t && (t = n(t)), r && (r = n(r)), o && (o = n(o))), i)) {
            !(function (e, t, r) {
              var n, i;
              let o = Object.keys(t).filter((t) => !e.hasValue(t)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let s = o[a],
                    l = t[s],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (i =
                            null !== (n = r[s]) && void 0 !== n
                              ? n
                              : e.readValue(s)) && void 0 !== i
                          ? i
                          : t[s]),
                    null != u &&
                      ("string" == typeof u && (rx(u) || rg(u))
                        ? (u = parseFloat(u))
                        : !rO(u) && t$.test(l) && (u = rm(s, l)),
                      e.addValue(s, rT(u, { owner: e })),
                      void 0 === r[s] && (r[s] = u),
                      null !== u && e.setBaseTarget(s, u));
                }
            })(this, r, o);
            let e = iA(this, r, o, t);
            (t = e.transitionEnd), (r = e.target);
          }
          return { transition: e, transitionEnd: t, ...r };
        }
      }
      class iD extends iL {
        readValueFromInstance(e, t) {
          if (R.has(t)) {
            let e = rp(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              n = (_(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return nd(e, t);
        }
        build(e, t, r, n) {
          en(e, t, r, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t) {
          return eP(e, t);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          O(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, r, n) {
          ev(e, t, r, n);
        }
      }
      class i_ extends iL {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (R.has(t)) {
            let e = rp(t);
            return (e && e.default) || 0;
          }
          return (t = eb.has(t) ? t : ey(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return r7();
        }
        scrapeMotionValuesFromProps(e, t) {
          return ew(e, t);
        }
        build(e, t, r, n) {
          ef(e, t, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, r, n) {
          ex(e, t, r, n);
        }
        mount(e) {
          (this.isSVGTag = em(e.tagName)), super.mount(e);
        }
      }
      let iI = (e, t) =>
          T(e)
            ? new i_(t, { enableHardwareAcceleration: !1 })
            : new iD(t, { enableHardwareAcceleration: !0 }),
        iF = {
          animation: {
            Feature: class extends eY {
              constructor(e) {
                super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let t = (t) =>
                          Promise.all(
                            t.map(({ animation: t, options: r }) =>
                              (function (e, t, r = {}) {
                                let n;
                                if (
                                  (e.notify("AnimationStart", t),
                                  Array.isArray(t))
                                ) {
                                  let i = t.map((t) => rL(e, t, r));
                                  n = Promise.all(i);
                                } else if ("string" == typeof t)
                                  n = rL(e, t, r);
                                else {
                                  let i =
                                    "function" == typeof t
                                      ? e6(e, t, r.custom)
                                      : t;
                                  n = Promise.all(rV(e, i, r));
                                }
                                return n.then(() =>
                                  e.notify("AnimationComplete", t)
                                );
                              })(e, t, r)
                            )
                          ),
                        r = {
                          animate: rF(!0),
                          whileInView: rF(),
                          whileHover: rF(),
                          whileTap: rF(),
                          whileDrag: rF(),
                          whileFocus: rF(),
                          exit: rF(),
                        },
                        n = !0,
                        i = (t, r) => {
                          let n = e6(e, r);
                          if (n) {
                            let { transition: e, transitionEnd: r, ...i } = n;
                            t = { ...t, ...i, ...r };
                          }
                          return t;
                        };
                      function o(o, s) {
                        let a = e.getProps(),
                          l = e.getVariantContext(!0) || {},
                          u = [],
                          c = new Set(),
                          h = {},
                          d = 1 / 0;
                        for (let t = 0; t < rI; t++) {
                          var f;
                          let g = r_[t],
                            y = r[g],
                            v = void 0 !== a[g] ? a[g] : l[g],
                            b = p(v),
                            x = g === s ? y.isActive : null;
                          !1 === x && (d = t);
                          let P = v === l[g] && v !== a[g] && b;
                          if (
                            (P && n && e.manuallyAnimateOnMount && (P = !1),
                            (y.protectedKeys = { ...h }),
                            (!y.isActive && null === x) ||
                              (!v && !y.prevProp) ||
                              m(v) ||
                              "boolean" == typeof v)
                          )
                            continue;
                          let w =
                              ((f = y.prevProp),
                              "string" == typeof v
                                ? v !== f
                                : !!Array.isArray(v) && !e3(v, f)),
                            S =
                              w ||
                              (g === s && y.isActive && !P && b) ||
                              (t > d && b),
                            E = Array.isArray(v) ? v : [v],
                            A = E.reduce(i, {});
                          !1 === x && (A = {});
                          let { prevResolvedValues: C = {} } = y,
                            T = { ...C, ...A },
                            M = (e) => {
                              (S = !0), c.delete(e), (y.needsAnimating[e] = !0);
                            };
                          for (let e in T) {
                            let t = A[e],
                              r = C[e];
                            h.hasOwnProperty(e) ||
                              (t !== r
                                ? eE(t) && eE(r)
                                  ? !e3(t, r) || w
                                    ? M(e)
                                    : (y.protectedKeys[e] = !0)
                                  : void 0 !== t
                                  ? M(e)
                                  : c.add(e)
                                : void 0 !== t && c.has(e)
                                ? M(e)
                                : (y.protectedKeys[e] = !0));
                          }
                          (y.prevProp = v),
                            (y.prevResolvedValues = A),
                            y.isActive && (h = { ...h, ...A }),
                            n && e.blockInitialAnimation && (S = !1),
                            S &&
                              !P &&
                              u.push(
                                ...E.map((e) => ({
                                  animation: e,
                                  options: { type: g, ...o },
                                }))
                              );
                        }
                        if (c.size) {
                          let t = {};
                          c.forEach((r) => {
                            let n = e.getBaseTarget(r);
                            void 0 !== n && (t[r] = n);
                          }),
                            u.push({ animation: t });
                        }
                        let g = !!u.length;
                        return (
                          n &&
                            !1 === a.initial &&
                            !e.manuallyAnimateOnMount &&
                            (g = !1),
                          (n = !1),
                          g ? t(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: o,
                        setActive: function (t, n, i) {
                          var s;
                          if (r[t].isActive === n) return Promise.resolve();
                          null === (s = e.variantChildren) ||
                            void 0 === s ||
                            s.forEach((e) => {
                              var r;
                              return null === (r = e.animationState) ||
                                void 0 === r
                                ? void 0
                                : r.setActive(t, n);
                            }),
                            (r[t].isActive = n);
                          let a = o(i, t);
                          for (let e in r) r[e].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (r) {
                          t = r(e);
                        },
                        getState: () => r,
                      };
                    })(e));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                this.unmount(), m(e) && (this.unmount = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends eY {
              constructor() {
                super(...arguments), (this.id = rB++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: e,
                    onExitComplete: t,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n) return;
                let i = this.node.animationState.setActive("exit", !e, {
                  custom: null != r ? r : this.node.getProps().custom,
                });
                t && !e && i.then(() => t(this.id));
              }
              mount() {
                let { register: e } = this.node.presenceContext || {};
                e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends eY {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: e = {} } = this.node.getProps(),
                  { root: t, margin: r, amount: n = "some", once: i } = e,
                  o = {
                    root: t ? t.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof n ? n : e2[n],
                  };
                return (function (e, t, r) {
                  let n = (function ({ root: e, ...t }) {
                    let r = e || document;
                    e0.has(r) || e0.set(r, {});
                    let n = e0.get(r),
                      i = JSON.stringify(t);
                    return (
                      n[i] ||
                        (n[i] = new IntersectionObserver(e5, {
                          root: e,
                          ...t,
                        })),
                      n[i]
                    );
                  })(t);
                  return (
                    eJ.set(e, r),
                    n.observe(e),
                    () => {
                      eJ.delete(e), n.unobserve(e);
                    }
                  );
                })(this.node.current, o, (e) => {
                  let { isIntersecting: t } = e;
                  if (
                    this.isInView === t ||
                    ((this.isInView = t), i && !t && this.hasEnteredView)
                  )
                    return;
                  t && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", t);
                  let { onViewportEnter: r, onViewportLeave: n } =
                      this.node.getProps(),
                    o = t ? r : n;
                  o && o(e);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: e, prevProps: t } = this.node,
                  r = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: e = {} },
                      { viewport: t = {} } = {}
                    ) {
                      return (r) => e[r] !== t[r];
                    })(e, t)
                  );
                r && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends eY {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = ej.Z),
                  (this.removeEndListeners = ej.Z),
                  (this.removeAccessibleListeners = ej.Z),
                  (this.startPointerPress = (e, t) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let r = this.node.getProps(),
                      n = eN(
                        window,
                        "pointerup",
                        (e, t) => {
                          if (!this.checkPressEnd()) return;
                          let { onTap: r, onTapCancel: n } =
                            this.node.getProps();
                          ek.update(() => {
                            eK(this.node.current, e.target)
                              ? r && r(e, t)
                              : n && n(e, t);
                          });
                        },
                        { passive: !(r.onTap || r.onPointerUp) }
                      ),
                      i = eN(
                        window,
                        "pointercancel",
                        (e, t) => this.cancelPress(e, t),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                      );
                    (this.removeEndListeners = e$(n, i)), this.startPress(e, t);
                  }),
                  (this.startAccessiblePress = () => {
                    let e = eI(this.node.current, "keydown", (e) => {
                        "Enter" !== e.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = eI(
                            this.node.current,
                            "keyup",
                            (e) => {
                              "Enter" === e.key &&
                                this.checkPressEnd() &&
                                eQ("up", (e, t) => {
                                  let { onTap: r } = this.node.getProps();
                                  r && ek.update(() => r(e, t));
                                });
                            }
                          )),
                          eQ("down", (e, t) => {
                            this.startPress(e, t);
                          }));
                      }),
                      t = eI(this.node.current, "blur", () => {
                        this.isPressing &&
                          eQ("cancel", (e, t) => this.cancelPress(e, t));
                      });
                    this.removeAccessibleListeners = e$(e, t);
                  });
              }
              startPress(e, t) {
                this.isPressing = !0;
                let { onTapStart: r, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  r && ek.update(() => r(e, t));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let e = this.node.getProps();
                return (
                  e.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !eq()
                );
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: r } = this.node.getProps();
                r && ek.update(() => r(e, t));
              }
              mount() {
                let e = this.node.getProps(),
                  t = eN(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(e.onTapStart || e.onPointerStart) }
                  ),
                  r = eI(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = e$(t, r);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends eY {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (t) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = e$(
                  eI(this.node.current, "focus", () => this.onFocus()),
                  eI(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends eY {
              mount() {
                this.unmount = e$(eX(this.node, !0), eX(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends eY {
              constructor() {
                super(...arguments), (this.removePointerDownListener = ej.Z);
              }
              onPointerDown(e) {
                this.session = new rN(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: r,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: ng(e),
                  onStart: ng(t),
                  onMove: r,
                  onEnd: (e, t) => {
                    delete this.session, n && ek.update(() => n(e, t));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = eN(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends eY {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = ej.Z),
                  (this.removeListeners = ej.Z),
                  (this.controls = new np(e));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || ej.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: ic,
            MeasureLayout: nP,
          },
          layout: { ProjectionNode: ic, MeasureLayout: nP },
        },
        iB = (function (e) {
          function t(t, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: r,
              useVisualState: n,
              Component: i,
            }) {
              e &&
                (function (e) {
                  for (let t in e) w[t] = { ...w[t], ...e[t] };
                })(e);
              let o = (0, s.forwardRef)(function (o, m) {
                var g;
                let y;
                let b = {
                    ...(0, s.useContext)(a),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, s.useContext)(S).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(o),
                  },
                  { isStatic: P } = b,
                  w = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if (v(e)) {
                        let { initial: t, animate: r } = e;
                        return {
                          initial: !1 === t || p(t) ? t : void 0,
                          animate: p(r) ? r : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, s.useContext)(l));
                    return (0, s.useMemo)(
                      () => ({ initial: t, animate: r }),
                      [x(t), x(r)]
                    );
                  })(o),
                  A = n(o, P);
                if (!P && c) {
                  w.visualElement = (function (e, t, r, n) {
                    let { visualElement: i } = (0, s.useContext)(l),
                      o = (0, s.useContext)(d),
                      c = (0, s.useContext)(u),
                      f = (0, s.useContext)(a).reducedMotion,
                      p = (0, s.useRef)();
                    (n = n || o.renderer),
                      !p.current &&
                        n &&
                        (p.current = n(e, {
                          visualState: t,
                          parent: i,
                          props: r,
                          presenceContext: c,
                          blockInitialAnimation: !!c && !1 === c.initial,
                          reducedMotionConfig: f,
                        }));
                    let m = p.current;
                    (0, s.useInsertionEffect)(() => {
                      m && m.update(r, c);
                    });
                    let g = (0, s.useRef)(!!window.HandoffAppearAnimations);
                    return (
                      h(() => {
                        m &&
                          (m.render(),
                          g.current &&
                            m.animationState &&
                            m.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        m &&
                          (m.updateFeatures(),
                          !g.current &&
                            m.animationState &&
                            m.animationState.animateChanges(),
                          (window.HandoffAppearAnimations = void 0),
                          (g.current = !1));
                      }),
                      m
                    );
                  })(i, A, b, t);
                  let r = (0, s.useContext)(E),
                    n = (0, s.useContext)(d).strict;
                  w.visualElement &&
                    (y = w.visualElement.loadFeatures(b, n, e, r));
                }
                return s.createElement(
                  l.Provider,
                  { value: w },
                  y && w.visualElement
                    ? s.createElement(y, {
                        visualElement: w.visualElement,
                        ...b,
                      })
                    : null,
                  r(
                    i,
                    o,
                    ((g = w.visualElement),
                    (0, s.useCallback)(
                      (e) => {
                        e && A.mount && A.mount(e),
                          g && (e ? g.mount(e) : g.unmount()),
                          m &&
                            ("function" == typeof m
                              ? m(e)
                              : f(m) && (m.current = e));
                      },
                      [g]
                    )),
                    A,
                    P,
                    w.visualElement
                  )
                );
              });
              return (o[A] = i), o;
            })(e(t, r));
          }
          if ("undefined" == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, {
            get: (e, n) => (r.has(n) || r.set(n, t(n)), r.get(n)),
          });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, r, n) {
            let i = T(e) ? eD : e_;
            return {
              ...i,
              preloadedFeatures: r,
              useRender: (function (e = !1) {
                return (t, r, n, { latestValues: i }, o) => {
                  let a = T(t) ? eg : es,
                    l = a(r, i, o, t),
                    u = (function (e, t, r) {
                      let n = {};
                      for (let i in e)
                        ("values" !== i || "object" != typeof e.values) &&
                          (eu(i) ||
                            (!0 === r && el(i)) ||
                            (!t && !el(i)) ||
                            (e.draggable && i.startsWith("onDrag"))) &&
                          (n[i] = e[i]);
                      return n;
                    })(r, "string" == typeof t, e),
                    c = { ...u, ...l, ref: n },
                    { children: h } = r,
                    d = (0, s.useMemo)(() => (O(h) ? h.get() : h), [h]);
                  return (0, s.createElement)(t, { ...c, children: d });
                };
              })(t),
              createVisualElement: n,
              Component: e,
            };
          })(e, t, iF, iI)
        );
    },
    6567: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(6977);
      let i = n.Z,
        o = n.Z;
    },
    6977: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (e) => e;
    },
    6165: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(6567);
      let o = { some: 0, all: 1 };
      function s(e, { root: t, margin: r, amount: s, once: a = !1 } = {}) {
        let [l, u] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (a && l)) return;
            let n = { root: (t && t.current) || void 0, margin: r, amount: s };
            return (function (
              e,
              t,
              { root: r, margin: n, amount: s = "some" } = {}
            ) {
              let a = (function (e, t, r) {
                  var n;
                  if ("string" == typeof e) {
                    let o = document;
                    t &&
                      ((0, i.k)(
                        !!t.current,
                        "Scope provided, but no element detected."
                      ),
                      (o = t.current)),
                      r
                        ? ((null !== (n = r[e]) && void 0 !== n) ||
                            (r[e] = o.querySelectorAll(e)),
                          (e = r[e]))
                        : (e = o.querySelectorAll(e));
                  } else e instanceof Element && (e = [e]);
                  return Array.from(e || []);
                })(e),
                l = new WeakMap(),
                u = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let r = l.get(e.target);
                      if (!!r !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let r = t(e);
                          "function" == typeof r
                            ? l.set(e.target, r)
                            : u.unobserve(e.target);
                        } else r && (r(e), l.delete(e.target));
                      }
                    });
                  },
                  {
                    root: r,
                    rootMargin: n,
                    threshold: "number" == typeof s ? s : o[s],
                  }
                );
              return a.forEach((e) => u.observe(e)), () => u.disconnect();
            })(e.current, () => (u(!0), a ? void 0 : () => u(!1)), n);
          }, [t, e, r, a]),
          l
        );
      }
    },
  },
]);
