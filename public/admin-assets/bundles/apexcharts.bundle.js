!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e()
}(this, function () {
    "use strict";

    function v(t) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function o(t, e, i) {
        return e && a(t.prototype, e), i && a(t, i), t
    }

    function l(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function r(e, t) {
        var i, a = Object.keys(e);
        return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), t && (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), a.push.apply(a, i)), a
    }

    function M(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(i), !0).forEach(function (t) {
                l(e, t, i[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            })
        }
        return e
    }

    function n(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && i(t, e)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(i) {
        var a = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                })), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var t, e = h(i);
            return t = a ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" != typeof t && "function" != typeof t ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(e) : t
        }
    }

    function g(t) {
        return function (t) {
            if (Array.isArray(t)) return d(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function (t) {
            if (t) {
                if ("string" == typeof t) return d(t, void 0);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" === (e = "Object" === e && t.constructor ? t.constructor.name : e) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? d(t, void 0) : void 0
            }
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
        return a
    }

    var T = (o(z, [{
        key: "shadeRGBColor", value: function (t, e) {
            var i = e.split(","), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, e = parseInt(i[0].slice(4), 10),
                t = parseInt(i[1], 10), i = parseInt(i[2], 10);
            return "rgb(" + (Math.round((a - e) * s) + e) + "," + (Math.round((a - t) * s) + t) + "," + (Math.round((a - i) * s) + i) + ")"
        }
    }, {
        key: "shadeHexColor", value: function (t, e) {
            var i = parseInt(e.slice(1), 16), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, e = i >> 16,
                t = i >> 8 & 255, i = 255 & i;
            return "#" + (16777216 + 65536 * (Math.round((a - e) * s) + e) + 256 * (Math.round((a - t) * s) + t) + (Math.round((a - i) * s) + i)).toString(16).slice(1)
        }
    }, {
        key: "shadeColor", value: function (t, e) {
            return z.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e)
        }
    }], [{
        key: "bind", value: function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, {
        key: "isObject", value: function (t) {
            return t && "object" === v(t) && !Array.isArray(t) && null != t
        }
    }, {
        key: "is", value: function (t, e) {
            return Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }, {
        key: "listToArray", value: function (t) {
            for (var e = [], i = 0; i < t.length; i++) e[i] = t[i];
            return e
        }
    }, {
        key: "extend", value: function (e, i) {
            var a = this;
            "function" != typeof Object.assign && (Object.assign = function (t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var a = arguments[i];
                    if (null != a) for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s])
                }
                return e
            });
            var s = Object.assign({}, e);
            return this.isObject(e) && this.isObject(i) && Object.keys(i).forEach(function (t) {
                a.isObject(i[t]) && t in e ? s[t] = a.extend(e[t], i[t]) : Object.assign(s, l({}, t, i[t]))
            }), s
        }
    }, {
        key: "extendArray", value: function (t, e) {
            var i = [];
            return t.map(function (t) {
                i.push(z.extend(e, t))
            }), i
        }
    }, {
        key: "monthMod", value: function (t) {
            return t % 12
        }
    }, {
        key: "clone", value: function (t) {
            if (z.is("Array", t)) {
                for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
                return e
            }
            if (z.is("Null", t)) return null;
            if (z.is("Date", t)) return t;
            if ("object" !== v(t)) return t;
            var a, s = {};
            for (a in t) t.hasOwnProperty(a) && (s[a] = this.clone(t[a]));
            return s
        }
    }, {
        key: "log10", value: function (t) {
            return Math.log(t) / Math.LN10
        }
    }, {
        key: "roundToBase10", value: function (t) {
            return Math.pow(10, Math.floor(Math.log10(t)))
        }
    }, {
        key: "roundToBase", value: function (t, e) {
            return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
        }
    }, {
        key: "parseNumber", value: function (t) {
            return null === t ? t : parseFloat(t)
        }
    }, {
        key: "randomId", value: function () {
            return (Math.random() + 1).toString(36).substring(4)
        }
    }, {
        key: "noExponents", value: function (t) {
            var e = String(t).split(/[eE]/);
            if (1 === e.length) return e[0];
            var i = "", a = t < 0 ? "-" : "", t = e[0].replace(".", ""), s = Number(e[1]) + 1;
            if (s < 0) {
                for (i = a + "0."; s++;) i += "0";
                return i + t.replace(/^-/, "")
            }
            for (s -= t.length; s--;) i += "0";
            return t + i
        }
    }, {
        key: "getDimensions", value: function (t) {
            var e = getComputedStyle(t, null), i = t.clientHeight, t = t.clientWidth;
            return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [t -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i]
        }
    }, {
        key: "getBoundingClientRect", value: function (t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: t.clientWidth,
                height: t.clientHeight,
                x: e.left,
                y: e.top
            }
        }
    }, {
        key: "getLargestStringFromArr", value: function (t) {
            return t.reduce(function (t, e) {
                return Array.isArray(e) && (e = e.reduce(function (t, e) {
                    return t.length > e.length ? t : e
                })), t.length > e.length ? t : e
            }, 0)
        }
    }, {
        key: "hexToRgba", value: function () {
            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#999999", e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .6, i = (i = (t = "#" !== t.substring(0, 1) ? "#999999" : t).replace("#", "")).match(new RegExp("(.{" + i.length / 3 + "})", "g")), a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
            return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
        }
    }, {
        key: "getOpacityFromRGBA", value: function (t) {
            return parseFloat(t.replace(/^.*,(.+)\)/, "$1"))
        }
    }, {
        key: "rgb2hex", value: function (t) {
            return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
        }
    }, {
        key: "isColorHex", value: function (t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)
        }
    }, {
        key: "getPolygonPos", value: function (t, e) {
            for (var i = [], a = 2 * Math.PI / e, s = 0; s < e; s++) {
                var o = {};
                o.x = t * Math.sin(s * a), o.y = -t * Math.cos(s * a), i.push(o)
            }
            return i
        }
    }, {
        key: "polarToCartesian", value: function (t, e, i, a) {
            a = (a - 90) * Math.PI / 180;
            return {x: t + i * Math.cos(a), y: e + i * Math.sin(a)}
        }
    }, {
        key: "escapeString", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "x", t = t.toString().slice();
            return t.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, e)
        }
    }, {
        key: "negToZero", value: function (t) {
            return t < 0 ? 0 : t
        }
    }, {
        key: "moveIndexInArray", value: function (t, e, i) {
            if (i >= t.length) for (var a = i - t.length + 1; a--;) t.push(void 0);
            return t.splice(i, 0, t.splice(e, 1)[0]), t
        }
    }, {
        key: "extractNumber", value: function (t) {
            return parseFloat(t.replace(/[^\d.]*/g, ""))
        }
    }, {
        key: "findAncestor", value: function (t, e) {
            for (; (t = t.parentElement) && !t.classList.contains(e);) ;
            return t
        }
    }, {
        key: "setELstyles", value: function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
        }
    }, {
        key: "isNumber", value: function (t) {
            return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
        }
    }, {
        key: "isFloat", value: function (t) {
            return Number(t) === t && t % 1 != 0
        }
    }, {
        key: "isSafari", value: function () {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }
    }, {
        key: "isFirefox", value: function () {
            return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
        }
    }, {
        key: "isIE11", value: function () {
            if (-1 !== window.navigator.userAgent.indexOf("MSIE") || -1 < window.navigator.appVersion.indexOf("Trident/")) return !0
        }
    }, {
        key: "isIE", value: function () {
            var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
            if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
            if (0 < t.indexOf("Trident/")) {
                var i = t.indexOf("rv:");
                return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
            }
            i = t.indexOf("Edge/");
            return 0 < i && parseInt(t.substring(i + 5, t.indexOf(".", i)), 10)
        }
    }]), z), S = (o(L, [{
        key: "setEasingFunctions", value: function () {
            var t;
            if (!this.w.globals.easing) {
                switch (this.w.config.chart.animations.easing) {
                    case"linear":
                        t = "-";
                        break;
                    case"easein":
                        t = "<";
                        break;
                    case"easeout":
                        t = ">";
                        break;
                    case"easeinout":
                        t = "<>";
                        break;
                    case"swing":
                        t = function (t) {
                            return --t * t * (2.70158 * t + 1.70158) + 1
                        };
                        break;
                    case"bounce":
                        t = function (t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        };
                        break;
                    case"elastic":
                        t = function (t) {
                            return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                        };
                        break;
                    default:
                        t = "<>"
                }
                this.w.globals.easing = t
            }
        }
    }, {
        key: "animateLine", value: function (t, e, i, a) {
            t.attr(e).animate(a).attr(i)
        }
    }, {
        key: "animateMarker", value: function (t, e, i, a, s, o) {
            t.attr({r: e = e || 0, width: e, height: e}).animate(a, s).attr({
                r: i,
                width: i.width,
                height: i.height
            }).afterAll(function () {
                o()
            })
        }
    }, {
        key: "animateCircle", value: function (t, e, i, a, s) {
            t.attr({r: e.r, cx: e.cx, cy: e.cy}).animate(a, s).attr({r: i.r, cx: i.cx, cy: i.cy})
        }
    }, {
        key: "animateRect", value: function (t, e, i, a, s) {
            t.attr(e).animate(a).attr(i).afterAll(function () {
                return s()
            })
        }
    }, {
        key: "animatePathsGradually", value: function (t) {
            var e = t.el, i = t.realIndex, a = t.j, s = t.fill, o = t.pathFrom, r = t.pathTo, n = t.speed, l = t.delay,
                h = this.w, t = 0;
            h.config.chart.animations.animateGradually.enabled && (t = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && "bar" !== h.config.chart.type && (t = 0), this.morphSVG(e, i, a, "line" !== h.config.chart.type || h.globals.comboCharts ? s : "stroke", o, r, n, l * t)
        }
    }, {
        key: "showDelayedElements", value: function () {
            this.w.globals.delayedElements.forEach(function (t) {
                t.el.classList.remove("apexcharts-element-hidden")
            })
        }
    }, {
        key: "animationCompleted", value: function (t) {
            var e = this.w;
            e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, {
                el: t,
                w: e
            }))
        }
    }, {
        key: "morphSVG", value: function (t, e, i, a, s, o, r, n) {
            var l = this, h = this.w;
            s = s || t.attr("pathFrom"), o = o || t.attr("pathTo");

            function c(t) {
                return "radar" === h.config.chart.type && (r = 1), "M 0 ".concat(h.globals.gridHeight)
            }

            (!s || -1 < s.indexOf("undefined") || -1 < s.indexOf("NaN")) && (s = c()), (!o || -1 < o.indexOf("undefined") || -1 < o.indexOf("NaN")) && (o = c()), h.globals.shouldAnimate || (r = 1), t.plot(s).animate(1, h.globals.easing, n).plot(s).animate(r, h.globals.easing, n).plot(o).afterAll(function () {
                T.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && l.animationCompleted(t) : "none" !== a && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && l.animationCompleted(t), l.showDelayedElements()
            })
        }
    }]), L), C = (o(A, [{
        key: "getDefaultFilter", value: function (t, e) {
            var i = this.w;
            t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
        }
    }, {
        key: "addNormalFilter", value: function (t, e) {
            var i = this.w;
            i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e)
        }
    }, {
        key: "addLightenFilter", value: function (t, i, e) {
            var a = this, s = this.w, o = e.intensity;
            t.unfilter(!0), new window.SVG.Filter, t.filter(function (t) {
                var e = s.config.chart.dropShadow;
                (e.enabled ? a.addShadow(t, i, e) : t).componentTransfer({
                    rgb: {
                        type: "linear",
                        slope: 1.5,
                        intercept: o
                    }
                })
            }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
        }
    }, {
        key: "addDarkenFilter", value: function (t, i, e) {
            var a = this, s = this.w, o = e.intensity;
            t.unfilter(!0), new window.SVG.Filter, t.filter(function (t) {
                var e = s.config.chart.dropShadow;
                (e.enabled ? a.addShadow(t, i, e) : t).componentTransfer({rgb: {type: "linear", slope: o}})
            }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
        }
    }, {
        key: "applyFilter", value: function (t, e, i) {
            var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : .5;
            switch (i) {
                case"none":
                    this.addNormalFilter(t, e);
                    break;
                case"lighten":
                    this.addLightenFilter(t, e, {intensity: a});
                    break;
                case"darken":
                    this.addDarkenFilter(t, e, {intensity: a})
            }
        }
    }, {
        key: "addShadow", value: function (t, e, i) {
            var a = i.blur, s = i.top, o = i.left, r = i.color, i = i.opacity,
                a = t.flood(Array.isArray(r) ? r[e] : r, i).composite(t.sourceAlpha, "in").offset(o, s).gaussianBlur(a).merge(t.source);
            return t.blend(t.source, a)
        }
    }, {
        key: "dropShadow", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, a = e.top, s = e.left,
                o = e.blur, r = e.color, n = e.opacity, l = e.noUserSpaceOnUse, e = this.w;
            return t.unfilter(!0), T.isIE() && "radialBar" === e.config.chart.type || (r = Array.isArray(r) ? r[i] : r, t.filter(function (t) {
                var e = T.isSafari() || T.isFirefox() || T.isIE() ? t.flood(r, n).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(o) : t.flood(r, n).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(o).merge(t.source);
                t.blend(t.source, e)
            }), l || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t
        }
    }, {
        key: "setSelectionFilter", value: function (t, e, i) {
            var a = this.w;
            void 0 !== a.globals.selectedDataPoints[e] && -1 < a.globals.selectedDataPoints[e].indexOf(i) && (t.node.setAttribute("selected", !0), "none" !== (a = a.config.states.active.filter) && this.applyFilter(t, e, a.type, a.value))
        }
    }, {
        key: "_scaleFilterSize", value: function (i) {
            !function (t) {
                for (var e in t) t.hasOwnProperty(e) && i.setAttribute(e, t[e])
            }({width: "200%", height: "200%", x: "-50%", y: "-50%"})
        }
    }]), A), I = (o(k, [{
        key: "drawLine", value: function (t, e, i, a) {
            var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
                n = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : "butt";
            return this.w.globals.dom.Paper.line().attr({
                x1: t,
                y1: e,
                x2: i,
                y2: a,
                stroke: s,
                "stroke-dasharray": o,
                "stroke-width": r,
                "stroke-linecap": n
            })
        }
    }, {
        key: "drawRect", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 1,
                n = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
                l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : null,
                h = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 0,
                c = this.w.globals.dom.Paper.rect();
            return c.attr({
                x: t,
                y: e,
                width: 0 < i ? i : 0,
                height: 0 < a ? a : 0,
                rx: s,
                ry: s,
                opacity: r,
                "stroke-width": null !== n ? n : 0,
                stroke: null !== l ? l : "none",
                "stroke-dasharray": h
            }), c.node.setAttribute("fill", o), c
        }
    }, {
        key: "drawPolygon", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "none";
            return this.w.globals.dom.Paper.polygon(t).attr({fill: a, stroke: e, "stroke-width": i})
        }
    }, {
        key: "drawCircle", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                t = this.w.globals.dom.Paper.circle(2 * (t = t < 0 ? 0 : t));
            return null !== e && t.attr(e), t
        }
    }, {
        key: "drawPath", value: function (t) {
            var e = t.d, i = void 0 === e ? "" : e, a = t.stroke, s = void 0 === a ? "#a8a8a8" : a, o = t.strokeWidth,
                r = void 0 === o ? 1 : o, n = t.fill, l = t.fillOpacity, h = void 0 === l ? 1 : l, e = t.strokeOpacity,
                a = void 0 === e ? 1 : e, o = t.classes, l = t.strokeLinecap, e = void 0 === l ? null : l,
                l = t.strokeDashArray, t = void 0 === l ? 0 : l, l = this.w;
            return null === e && (e = l.config.stroke.lineCap), (-1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) && (i = "M 0 ".concat(l.globals.gridHeight)), l.globals.dom.Paper.path(i).attr({
                fill: n,
                "fill-opacity": h,
                stroke: s,
                "stroke-opacity": a,
                "stroke-linecap": e,
                "stroke-width": r,
                "stroke-dasharray": t,
                class: o
            })
        }
    }, {
        key: "group", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                e = this.w.globals.dom.Paper.group();
            return null !== t && e.attr(t), e
        }
    }, {
        key: "move", value: function (t, e) {
            return ["M", t, e].join(" ")
        }
    }, {
        key: "line", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, a = null;
            return null === i ? a = ["L", t, e].join(" ") : "H" === i ? a = ["H", t].join(" ") : "V" === i && (a = ["V", e].join(" ")), a
        }
    }, {
        key: "curve", value: function (t, e, i, a, s, o) {
            return ["C", t, e, i, a, s, o].join(" ")
        }
    }, {
        key: "quadraticCurve", value: function (t, e, i, a) {
            return ["Q", t, e, i, a].join(" ")
        }
    }, {
        key: "arc", value: function (t, e, i, a, s, o, r) {
            var n = "A";
            return [n = 7 < arguments.length && void 0 !== arguments[7] && arguments[7] ? "a" : n, t, e, i, a, s, o, r].join(" ")
        }
    }, {
        key: "renderPaths", value: function (t) {
            var e, i = t.j, a = t.realIndex, s = t.pathFrom, o = t.pathTo, r = t.stroke, n = t.strokeWidth,
                l = t.strokeLinecap, h = t.fill, c = t.animationDelay, d = t.initialSpeed, g = t.dataChangeSpeed,
                u = t.className, p = t.shouldClipToGrid, f = void 0 === p || p, x = t.bindEventsOnPaths,
                b = void 0 === x || x, m = t.drawShadow, v = void 0 === m || m, y = this.w, w = new C(this.ctx),
                k = new S(this.ctx), A = this.w.config.chart.animations.enabled,
                p = A && this.w.config.chart.animations.dynamicAnimation.enabled,
                x = !!(A && !y.globals.resized || p && y.globals.dataChanged && y.globals.shouldAnimate);
            x ? e = s : (e = o, y.globals.animationEnded = !0);
            t = y.config.stroke.dashArray, m = 0, m = Array.isArray(t) ? t[a] : y.config.stroke.dashArray, m = this.drawPath({
                d: e,
                stroke: r,
                strokeWidth: n,
                fill: h,
                fillOpacity: 1,
                classes: u,
                strokeLinecap: l,
                strokeDashArray: m
            });
            m.attr("index", a), f && m.attr({"clip-path": "url(#gridRectMask".concat(y.globals.cuid, ")")}), "none" !== y.config.states.normal.filter.type ? w.getDefaultFilter(m, a) : y.config.chart.dropShadow.enabled && v && (!y.config.chart.dropShadow.enabledOnSeries || y.config.chart.dropShadow.enabledOnSeries && -1 !== y.config.chart.dropShadow.enabledOnSeries.indexOf(a)) && (v = y.config.chart.dropShadow, w.dropShadow(m, v, a)), b && (m.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, m)), m.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, m)), m.node.addEventListener("mousedown", this.pathMouseDown.bind(this, m))), m.attr({
                pathTo: o,
                pathFrom: s
            });
            c = {el: m, j: i, realIndex: a, pathFrom: s, pathTo: o, fill: h, strokeWidth: n, delay: c};
            return !A || y.globals.resized || y.globals.dataChanged ? !y.globals.resized && y.globals.dataChanged || k.showDelayedElements() : k.animatePathsGradually(M(M({}, c), {}, {speed: d})), y.globals.dataChanged && p && x && k.animatePathsGradually(M(M({}, c), {}, {speed: g})), m
        }
    }, {
        key: "drawPattern", value: function (e, i, a) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0;
            return this.w.globals.dom.Paper.pattern(i, a, function (t) {
                "horizontalLines" === e ? t.line(0, 0, a, 0).stroke({
                    color: s,
                    width: o + 1
                }) : "verticalLines" === e ? t.line(0, 0, 0, i).stroke({
                    color: s,
                    width: o + 1
                }) : "slantedLines" === e ? t.line(0, 0, i, a).stroke({
                    color: s,
                    width: o
                }) : "squares" === e ? t.rect(i, a).fill("none").stroke({
                    color: s,
                    width: o
                }) : "circles" === e && t.circle(i).fill("none").stroke({color: s, width: o})
            })
        }
    }, {
        key: "drawGradient", value: function (t, e, i, a, s) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
                n = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
                l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 0, h = this.w;
            e.length < 9 && 0 === e.indexOf("#") && (e = T.hexToRgba(e, a)), i.length < 9 && 0 === i.indexOf("#") && (i = T.hexToRgba(i, s));
            var c = 0, d = 1, g = 1, u = null;
            null !== r && (c = void 0 !== r[0] ? r[0] / 100 : 0, d = void 0 !== r[1] ? r[1] / 100 : 1, g = void 0 !== r[2] ? r[2] / 100 : 1, u = void 0 !== r[3] ? r[3] / 100 : null);
            var p = !("donut" !== h.config.chart.type && "pie" !== h.config.chart.type && "polarArea" !== h.config.chart.type && "bubble" !== h.config.chart.type),
                f = null === n || 0 === n.length ? h.globals.dom.Paper.gradient(p ? "radial" : "linear", function (t) {
                    t.at(c, e, a), t.at(d, i, s), t.at(g, i, s), null !== u && t.at(u, e, a)
                }) : h.globals.dom.Paper.gradient(p ? "radial" : "linear", function (e) {
                    (Array.isArray(n[l]) ? n[l] : n).forEach(function (t) {
                        e.at(t.offset / 100, t.color, t.opacity)
                    })
                });
            return p ? (r = h.globals.gridWidth / 2, p = h.globals.gridHeight / 2, "bubble" !== h.config.chart.type ? f.attr({
                gradientUnits: "userSpaceOnUse",
                cx: r,
                cy: p,
                r: o
            }) : f.attr({
                cx: .5,
                cy: .5,
                r: .8,
                fx: .2,
                fy: .2
            })) : "vertical" === t ? f.from(0, 0).to(0, 1) : "diagonal" === t ? f.from(0, 0).to(1, 1) : "horizontal" === t ? f.from(0, 1).to(1, 1) : "diagonal2" === t && f.from(1, 0).to(0, 1), f
        }
    }, {
        key: "drawText", value: function (t) {
            var e = t.x, i = t.y, a = t.text, s = t.textAnchor, o = t.fontSize, r = t.fontFamily, n = t.fontWeight,
                l = t.foreColor, h = t.opacity, c = t.cssClass, d = void 0 === c ? "" : c, c = t.isPlainText,
                t = void 0 === c || c, c = this.w;
            return void 0 === a && (a = ""), s = s || "start", l && l.length || (l = c.config.chart.foreColor), r = r || c.config.chart.fontFamily, n = n || "regular", (c = Array.isArray(a) ? c.globals.dom.Paper.text(function (t) {
                for (var e = 0; e < a.length; e++) 0 === e ? t.tspan(a[e]) : t.tspan(a[e]).newLine()
            }) : t ? c.globals.dom.Paper.plain(a) : c.globals.dom.Paper.text(function (t) {
                return t.tspan(a)
            })).attr({
                x: e,
                y: i,
                "text-anchor": s,
                "dominant-baseline": "auto",
                "font-size": o,
                "font-family": r,
                "font-weight": n,
                fill: l,
                class: "apexcharts-text " + d
            }), c.node.style.fontFamily = r, c.node.style.opacity = h, c
        }
    }, {
        key: "drawMarker", value: function (t, e, i) {
            t = t || 0;
            var a, s, o = i.pSize || 0, r = null;
            return "square" === i.shape || "rect" === i.shape ? (s = void 0 === i.pRadius ? o / 2 : i.pRadius, null !== e && o || (s = o = 0), (s = this.drawRect(a = 1.2 * o + s, a, a, a, s)).attr({
                x: t - a / 2,
                y: e - a / 2,
                cx: t,
                cy: e,
                class: i.class || "",
                fill: i.pointFillColor,
                "fill-opacity": i.pointFillOpacity || 1,
                stroke: i.pointStrokeColor,
                "stroke-width": i.pointStrokeWidth || 0,
                "stroke-opacity": i.pointStrokeOpacity || 1
            }), r = s) : "circle" !== i.shape && i.shape || (T.isNumber(e) || (e = o = 0), r = this.drawCircle(o, {
                cx: t,
                cy: e,
                class: i.class || "",
                stroke: i.pointStrokeColor,
                fill: i.pointFillColor,
                "fill-opacity": i.pointFillOpacity || 1,
                "stroke-width": i.pointStrokeWidth || 0,
                "stroke-opacity": i.pointStrokeOpacity || 1
            })), r
        }
    }, {
        key: "pathMouseEnter", value: function (t, e) {
            var i = this.w, a = new C(this.ctx), s = parseInt(t.node.getAttribute("index"), 10),
                o = parseInt(t.node.getAttribute("j"), 10);
            "function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                seriesIndex: s,
                dataPointIndex: o,
                w: i
            }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, {
                seriesIndex: s,
                dataPointIndex: o,
                w: i
            }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" === i.config.states.hover.filter.type || i.globals.isTouchDevice || (i = i.config.states.hover.filter, a.applyFilter(t, s, i.type, i.value))
        }
    }, {
        key: "pathMouseLeave", value: function (t, e) {
            var i = this.w, a = new C(this.ctx), s = parseInt(t.node.getAttribute("index"), 10),
                o = parseInt(t.node.getAttribute("j"), 10);
            "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                seriesIndex: s,
                dataPointIndex: o,
                w: i
            }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, {
                seriesIndex: s,
                dataPointIndex: o,
                w: i
            }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t, s)
        }
    }, {
        key: "pathMouseDown", value: function (t, e) {
            var i, a, s, o = this.w, r = new C(this.ctx), n = parseInt(t.node.getAttribute("index"), 10),
                l = parseInt(t.node.getAttribute("j"), 10), h = "false";
            "true" === t.node.getAttribute("selected") ? (t.node.setAttribute("selected", "false"), -1 < o.globals.selectedDataPoints[n].indexOf(l) && (s = o.globals.selectedDataPoints[n].indexOf(l), o.globals.selectedDataPoints[n].splice(s, 1))) : (!o.config.states.active.allowMultipleDataPointsSelection && 0 < o.globals.selectedDataPoints.length && (o.globals.selectedDataPoints = [], i = o.globals.dom.Paper.select(".apexcharts-series path").members, a = o.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, (s = function (t) {
                Array.prototype.forEach.call(t, function (t) {
                    t.node.setAttribute("selected", "false"), r.getDefaultFilter(t, n)
                })
            })(i), s(a)), t.node.setAttribute("selected", "true"), h = "true", void 0 === o.globals.selectedDataPoints[n] && (o.globals.selectedDataPoints[n] = []), o.globals.selectedDataPoints[n].push(l)), "true" === h ? "none" !== (h = o.config.states.active.filter) && r.applyFilter(t, n, h.type, h.value) : "none" !== o.config.states.active.filter.type && r.getDefaultFilter(t, n), "function" == typeof o.config.chart.events.dataPointSelection && o.config.chart.events.dataPointSelection(e, this.ctx, {
                selectedDataPoints: o.globals.selectedDataPoints,
                seriesIndex: n,
                dataPointIndex: l,
                w: o
            }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, {
                selectedDataPoints: o.globals.selectedDataPoints,
                seriesIndex: n,
                dataPointIndex: l,
                w: o
            }])
        }
    }, {
        key: "rotateAroundCenter", value: function (t) {
            var e = {};
            return {
                x: (e = t && "function" == typeof t.getBBox ? t.getBBox() : e).x + e.width / 2,
                y: e.y + e.height / 2
            }
        }
    }, {
        key: "getTextRects", value: function (t, e, i, a) {
            var s = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4], o = this.w, i = this.drawText({
                x: -200,
                y: -200,
                text: t,
                textAnchor: "start",
                fontSize: e,
                fontFamily: i,
                foreColor: "#fff",
                opacity: 0
            });
            a && i.attr("transform", a), o.globals.dom.Paper.add(i);
            o = i.bbox();
            return s || (o = i.node.getBoundingClientRect()), i.remove(), {width: o.width, height: o.height}
        }
    }, {
        key: "placeTextWithEllipsis", value: function (t, e, i) {
            if ("function" == typeof t.getComputedTextLength && (0 < (t.textContent = e).length && t.getComputedTextLength() >= i / 1.1)) {
                for (var a = e.length - 3; 0 < a; a -= 3) if (t.getSubStringLength(0, a) <= i / 1.1) return void (t.textContent = e.substring(0, a) + "...");
                t.textContent = "."
            }
        }
    }], [{
        key: "setAttrs", value: function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
        }
    }]), k), e = (o(w, [{
        key: "setOrientations", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, i = this.w;
            "vertical" !== t.label.orientation || null !== (i = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(null !== e ? e : 0, "']"))) && (e = i.getBoundingClientRect(), i.setAttribute("x", parseFloat(i.getAttribute("x")) - e.height + 4), "top" === t.label.position ? i.setAttribute("y", parseFloat(i.getAttribute("y")) + e.width) : i.setAttribute("y", parseFloat(i.getAttribute("y")) - e.width), e = (t = this.annoCtx.graphics.rotateAroundCenter(i)).x, t = t.y, i.setAttribute("transform", "rotate(-90 ".concat(e, " ").concat(t, ")")))
        }
    }, {
        key: "addBackgroundToAnno", value: function (t, e) {
            var i = this.w;
            if (!t || !e.label.text || e.label.text && !e.label.text.trim()) return null;
            var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                s = t.getBoundingClientRect(), o = e.label.style.padding.left, r = e.label.style.padding.right,
                n = e.label.style.padding.top, l = e.label.style.padding.bottom;
            "vertical" === e.label.orientation && (n = e.label.style.padding.left, l = e.label.style.padding.right, o = e.label.style.padding.top, r = e.label.style.padding.bottom);
            t = s.left - a.left - o, a = s.top - a.top - n, l = this.annoCtx.graphics.drawRect(t - i.globals.barPadForNumericAxis, a, s.width + o + r, s.height + n + l, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
            return e.id && l.node.classList.add(e.id), l
        }
    }, {
        key: "annotationsBackground", value: function () {
            function i(t, e, i) {
                (i = s.globals.dom.baseEl.querySelector(".apexcharts-".concat(i, "-annotations .apexcharts-").concat(i, "-annotation-label[rel='").concat(e, "']"))) && (e = i.parentNode, (t = a.addBackgroundToAnno(i, t)) && e.insertBefore(t.node, i))
            }

            var a = this, s = this.w;
            s.config.annotations.xaxis.map(function (t, e) {
                i(t, e, "xaxis")
            }), s.config.annotations.yaxis.map(function (t, e) {
                i(t, e, "yaxis")
            }), s.config.annotations.points.map(function (t, e) {
                i(t, e, "point")
            })
        }
    }, {
        key: "getStringX", value: function (t) {
            var e = this.w, i = t;
            e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1);
            t = e.globals.labels.indexOf(t), t = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (t + 1) + ")");
            return i = t ? parseFloat(t.getAttribute("x")) : i
        }
    }]), w), u = (o(y, [{
        key: "addXaxisAnnotation", value: function (t, e, i) {
            var a = this.w, s = this.invertAxis ? a.globals.minY : a.globals.minX,
                o = this.invertAxis ? a.globals.maxY : a.globals.maxX,
                r = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange, n = (t.x - s) / (r / a.globals.gridWidth);
            this.annoCtx.inversedReversedAxis && (n = (o - t.x) / (r / a.globals.gridWidth));
            var l = t.label.text;
            "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || a.globals.dataFormatXNumeric || (n = this.annoCtx.helpers.getStringX(t.x));
            var h, c, d = t.strokeDashArray;
            T.isNumber(n) && (null === t.x2 || void 0 === t.x2 ? (h = this.annoCtx.graphics.drawLine(n + t.offsetX, 0 + t.offsetY, n + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, d, t.borderWidth), e.appendChild(h.node), t.id && h.node.classList.add(t.id)) : (c = (t.x2 - s) / (r / a.globals.gridWidth), this.annoCtx.inversedReversedAxis && (c = (o - t.x2) / (r / a.globals.gridWidth)), (c = !("category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || a.globals.dataFormatXNumeric) ? this.annoCtx.helpers.getStringX(t.x2) : c) < n && (r = n, n = c, c = r), (c = this.annoCtx.graphics.drawRect(n + t.offsetX, 0 + t.offsetY, c - n, a.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, d)).node.classList.add("apexcharts-annotation-rect"), c.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(c.node), t.id && c.node.classList.add(t.id)), c = "top" === t.label.position ? 4 : a.globals.gridHeight, a = this.annoCtx.graphics.getTextRects(l, parseFloat(t.label.style.fontSize)), (l = this.annoCtx.graphics.drawText({
                x: n + t.label.offsetX,
                y: c + t.label.offsetY - ("vertical" === t.label.orientation ? "top" === t.label.position ? a.width / 2 - 12 : -a.width / 2 : 0),
                text: l,
                textAnchor: t.label.textAnchor,
                fontSize: t.label.style.fontSize,
                fontFamily: t.label.style.fontFamily,
                fontWeight: t.label.style.fontWeight,
                foreColor: t.label.style.color,
                cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id || "")
            })).attr({rel: i}), e.appendChild(l.node), this.annoCtx.helpers.setOrientations(t, i))
        }
    }, {
        key: "drawXAxisAnnotations", value: function () {
            var i = this, t = this.w, a = this.annoCtx.graphics.group({class: "apexcharts-xaxis-annotations"});
            return t.config.annotations.xaxis.map(function (t, e) {
                i.addXaxisAnnotation(t, a.node, e)
            }), a
        }
    }]), y), P = (o(m, [{
        key: "getStackedSeriesTotals", value: function () {
            var t = this.w, e = [];
            if (0 === t.globals.series.length) return e;
            for (var i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                for (var a = 0, s = 0; s < t.globals.series.length; s++) void 0 !== t.globals.series[s][i] && (a += t.globals.series[s][i]);
                e.push(a)
            }
            return t.globals.stackedSeriesTotals = e
        }
    }, {
        key: "getSeriesTotalByIndex", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            return null === t ? this.w.config.series.reduce(function (t, e) {
                return t + e
            }, 0) : this.w.globals.series[t].reduce(function (t, e) {
                return t + e
            }, 0)
        }
    }, {
        key: "isSeriesNull", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            return 0 === (null === t ? this.w.config.series.filter(function (t) {
                return null !== t
            }) : this.w.config.series[t].data.filter(function (t) {
                return null !== t
            })).length
        }
    }, {
        key: "seriesHaveSameValues", value: function (t) {
            return this.w.globals.series[t].every(function (t, e, i) {
                return t === i[0]
            })
        }
    }, {
        key: "getCategoryLabels", value: function (t) {
            var i = this.w, e = t.slice();
            return e = i.config.xaxis.convertedCatToNumeric ? t.map(function (t, e) {
                return i.config.xaxis.labels.formatter(t - i.globals.minX + 1)
            }) : e
        }
    }, {
        key: "getLargestSeries", value: function () {
            var t = this.w;
            t.globals.maxValsInArrayIndex = t.globals.series.map(function (t) {
                return t.length
            }).indexOf(Math.max.apply(Math, t.globals.series.map(function (t) {
                return t.length
            })))
        }
    }, {
        key: "getLargestMarkerSize", value: function () {
            var t = this.w, e = 0;
            return t.globals.markers.size.forEach(function (t) {
                e = Math.max(e, t)
            }), t.globals.markers.largestSize = e
        }
    }, {
        key: "getSeriesTotals", value: function () {
            var t = this.w;
            t.globals.seriesTotals = t.globals.series.map(function (t, e) {
                var i = 0;
                if (Array.isArray(t)) for (var a = 0; a < t.length; a++) i += t[a]; else i += t;
                return i
            })
        }
    }, {
        key: "getSeriesTotalsXRange", value: function (s, o) {
            var r = this.w;
            return r.globals.series.map(function (t, e) {
                for (var i = 0, a = 0; a < t.length; a++) r.globals.seriesX[e][a] > s && r.globals.seriesX[e][a] < o && (i += t[a]);
                return i
            })
        }
    }, {
        key: "getPercentSeries", value: function () {
            var n = this.w;
            n.globals.seriesPercent = n.globals.series.map(function (t, e) {
                var i = [];
                if (Array.isArray(t)) for (var a = 0; a < t.length; a++) {
                    var s = n.globals.stackedSeriesTotals[a], o = 0;
                    s && (o = 100 * t[a] / s), i.push(o)
                } else {
                    var r = 100 * t / n.globals.seriesTotals.reduce(function (t, e) {
                        return t + e
                    }, 0);
                    i.push(r)
                }
                return i
            })
        }
    }, {
        key: "getCalculatedRatios", value: function () {
            var t, e, i, a, s = this.w.globals, o = [], r = 0, n = [], l = .1, h = 0;
            if (s.yRange = [], s.isMultipleYAxis) for (var c = 0; c < s.minYArr.length; c++) s.yRange.push(Math.abs(s.minYArr[c] - s.maxYArr[c])), n.push(0); else s.yRange.push(Math.abs(s.minY - s.maxY));
            s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ);
            for (var d = 0; d < s.yRange.length; d++) o.push(s.yRange[d] / s.gridHeight);
            if (e = s.xRange / s.gridWidth, i = Math.abs(s.initialMaxX - s.initialMinX) / s.gridWidth, t = s.yRange / s.gridWidth, a = s.xRange / s.gridHeight, (r = s.zRange / s.gridHeight * 16) || (r = 1), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (s.hasNegs = !0), s.isMultipleYAxis) for (var n = [], g = 0; g < o.length; g++) n.push(-s.minYArr[g] / o[g]); else n.push(-s.minY / o[0]), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (l = -s.minY / t, h = s.minX / e);
            return {
                yRatio: o,
                invertedYRatio: t,
                zRatio: r,
                xRatio: e,
                initialXRatio: i,
                invertedXRatio: a,
                baseLineInvertedY: l,
                baseLineY: n,
                baseLineX: h
            }
        }
    }, {
        key: "getLogSeries", value: function (t) {
            var i = this, a = this.w;
            return a.globals.seriesLog = t.map(function (t, e) {
                return a.config.yaxis[e] && a.config.yaxis[e].logarithmic ? t.map(function (t) {
                    return null === t ? null : i.getLogVal(t, e)
                }) : t
            }), a.globals.invalidLogScale ? t : a.globals.seriesLog
        }
    }, {
        key: "getLogVal", value: function (t, e) {
            var i = this.w;
            return (Math.log(t) - Math.log(i.globals.minYArr[e])) / (Math.log(i.globals.maxYArr[e]) - Math.log(i.globals.minYArr[e]))
        }
    }, {
        key: "getLogYRatios", value: function (t) {
            var o = this, r = this.w, n = this.w.globals;
            return n.yLogRatio = t.slice(), n.logYRange = n.yRange.map(function (t, e) {
                if (r.config.yaxis[e] && o.w.config.yaxis[e].logarithmic) {
                    var i, a = -Number.MAX_VALUE, s = Number.MIN_VALUE;
                    return n.seriesLog.forEach(function (t, e) {
                        t.forEach(function (t) {
                            r.config.yaxis[e] && r.config.yaxis[e].logarithmic && (a = Math.max(t, a), s = Math.min(t, s))
                        })
                    }), i = Math.pow(n.yRange[e], Math.abs(s - a) / n.yRange[e]), n.yLogRatio[e] = i / n.gridHeight, i
                }
            }), n.invalidLogScale ? t.slice() : n.yLogRatio
        }
    }], [{
        key: "checkComboSeries", value: function (t) {
            var e = !1, i = 0, a = 0;
            return t.length && void 0 !== t[0].type && t.forEach(function (t) {
                "bar" !== t.type && "column" !== t.type && "candlestick" !== t.type && "boxPlot" !== t.type || i++, void 0 !== t.type && a++
            }), {comboBarCount: i, comboCharts: e = 0 < a ? !0 : e}
        }
    }, {
        key: "extendArrayProps", value: function (t, e, i) {
            return (e = e.yaxis ? t.extendYAxis(e, i) : e).annotations && ((e = (e = e.annotations.yaxis ? t.extendYAxisAnnotations(e) : e).annotations.xaxis ? t.extendXAxisAnnotations(e) : e).annotations.points && (e = t.extendPointAnnotations(e))), e
        }
    }]), m), p = (o(b, [{
        key: "addYaxisAnnotation", value: function (t, e, i) {
            var a, s, o = this.w, r = t.strokeDashArray, n = this._getY1Y2("y1", t), l = t.label.text;
            null === t.y2 || void 0 === t.y2 ? (a = this.annoCtx.graphics.drawLine(0 + t.offsetX, n + t.offsetY, this._getYAxisAnnotationWidth(t), n + t.offsetY, t.borderColor, r, t.borderWidth), e.appendChild(a.node), t.id && a.node.classList.add(t.id)) : ((s = this._getY1Y2("y2", t)) > n && (a = n, n = s, s = a), (r = this.annoCtx.graphics.drawRect(0 + t.offsetX, s + t.offsetY, this._getYAxisAnnotationWidth(t), n - s, 0, t.fillColor, t.opacity, 1, t.borderColor, r)).node.classList.add("apexcharts-annotation-rect"), r.attr("clip-path", "url(#gridRectMask".concat(o.globals.cuid, ")")), e.appendChild(r.node), t.id && r.node.classList.add(t.id));
            o = "right" === t.label.position ? o.globals.gridWidth : 0, t = this.annoCtx.graphics.drawText({
                x: o + t.label.offsetX,
                y: (null != s ? s : n) + t.label.offsetY - 3,
                text: l,
                textAnchor: t.label.textAnchor,
                fontSize: t.label.style.fontSize,
                fontFamily: t.label.style.fontFamily,
                fontWeight: t.label.style.fontWeight,
                foreColor: t.label.style.color,
                cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id || "")
            });
            t.attr({rel: i}), e.appendChild(t.node)
        }
    }, {
        key: "_getY1Y2", value: function (t, e) {
            var i, a = "y1" === t ? e.y : e.y2, s = this.w;
            return this.annoCtx.invertAxis ? (t = s.globals.labels.indexOf(a), s.config.xaxis.convertedCatToNumeric && (t = s.globals.categoryLabels.indexOf(a)), (t = s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (t + 1) + ")")) && (i = parseFloat(t.getAttribute("y")))) : (a = s.config.yaxis[e.yAxisIndex].logarithmic ? (a = new P(this.annoCtx.ctx).getLogVal(a, e.yAxisIndex)) / s.globals.yLogRatio[e.yAxisIndex] : (a - s.globals.minYArr[e.yAxisIndex]) / (s.globals.yRange[e.yAxisIndex] / s.globals.gridHeight), i = s.globals.gridHeight - a, s.config.yaxis[e.yAxisIndex] && s.config.yaxis[e.yAxisIndex].reversed && (i = a)), i
        }
    }, {
        key: "_getYAxisAnnotationWidth", value: function (t) {
            var e = this.w;
            return e.globals.gridWidth, (-1 < t.width.indexOf("%") ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX
        }
    }, {
        key: "drawYAxisAnnotations", value: function () {
            var i = this, t = this.w, a = this.annoCtx.graphics.group({class: "apexcharts-yaxis-annotations"});
            return t.config.annotations.yaxis.map(function (t, e) {
                i.addYaxisAnnotation(t, a.node, e)
            }), a
        }
    }]), b), f = (o(x, [{
        key: "addPointAnnotation", value: function (t, e, i) {
            var a = this.w, s = 0, o = 0, r = 0;
            this.annoCtx.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts.");
            var n, l = parseFloat(t.y);
            "string" == typeof t.x || "category" === a.config.xaxis.type || a.config.xaxis.convertedCatToNumeric ? (n = a.globals.labels.indexOf(t.x), a.config.xaxis.convertedCatToNumeric && (n = a.globals.categoryLabels.indexOf(t.x)), s = this.annoCtx.helpers.getStringX(t.x), null === t.y && (l = a.globals.series[t.seriesIndex][n])) : s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth);
            for (var h = [], c = 0, d = 0; d <= t.seriesIndex; d++) {
                var g = a.config.yaxis[d].seriesName;
                if (g) for (var u = d + 1; u <= t.seriesIndex; u++) a.config.yaxis[u].seriesName === g && -1 === h.indexOf(g) && (c++, h.push(g))
            }
            p = a.config.yaxis[t.yAxisIndex].logarithmic ? (l = new P(this.annoCtx.ctx).getLogVal(l, t.yAxisIndex)) / a.globals.yLogRatio[t.yAxisIndex] : (p = t.yAxisIndex + c, (l - a.globals.minYArr[p]) / (a.globals.yRange[p] / a.globals.gridHeight));
            var p, f, o = a.globals.gridHeight - p - parseFloat(t.label.style.fontSize) - t.marker.size,
                r = a.globals.gridHeight - p;
            a.config.yaxis[t.yAxisIndex] && a.config.yaxis[t.yAxisIndex].reversed && (o = p + parseFloat(t.label.style.fontSize) + t.marker.size, r = p), T.isNumber(s) && (p = {
                pSize: t.marker.size,
                pointStrokeWidth: t.marker.strokeWidth,
                pointFillColor: t.marker.fillColor,
                pointStrokeColor: t.marker.strokeColor,
                shape: t.marker.shape,
                pRadius: t.marker.radius,
                class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id || "")
            }, p = this.annoCtx.graphics.drawMarker(s + t.marker.offsetX, r + t.marker.offsetY, p), e.appendChild(p.node), p = t.label.text || "", (p = this.annoCtx.graphics.drawText({
                x: s + t.label.offsetX,
                y: o + t.label.offsetY,
                text: p,
                textAnchor: t.label.textAnchor,
                fontSize: t.label.style.fontSize,
                fontFamily: t.label.style.fontFamily,
                fontWeight: t.label.style.fontWeight,
                foreColor: t.label.style.color,
                cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id || "")
            })).attr({rel: i}), e.appendChild(p.node), t.customSVG.SVG && ((f = this.annoCtx.graphics.group({class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass})).attr({transform: "translate(".concat(s + t.customSVG.offsetX, ", ").concat(o + t.customSVG.offsetY, ")")}), f.node.innerHTML = t.customSVG.SVG, e.appendChild(f.node)), t.image.path && (e = t.image.width || 20, f = t.image.height || 20, this.annoCtx.addImage({
                x: s + t.image.offsetX - e / 2,
                y: o + t.image.offsetY - f / 2,
                width: e,
                height: f,
                path: t.image.path,
                appendTo: ".apexcharts-point-annotations"
            })))
        }
    }, {
        key: "drawPointAnnotations", value: function () {
            var i = this, t = this.w, a = this.annoCtx.graphics.group({class: "apexcharts-point-annotations"});
            return t.config.annotations.points.map(function (t, e) {
                i.addPointAnnotation(t, a.node, e)
            }), a
        }
    }]), x);

    function x(t) {
        s(this, x), this.w = t.w, this.annoCtx = t
    }

    function b(t) {
        s(this, b), this.w = t.w, this.annoCtx = t
    }

    function m(t) {
        s(this, m), this.ctx = t, this.w = t.w
    }

    function y(t) {
        s(this, y), this.w = t.w, this.annoCtx = t, this.invertAxis = this.annoCtx.invertAxis
    }

    function w(t) {
        s(this, w), this.w = t.w, this.annoCtx = t
    }

    function k(t) {
        s(this, k), this.ctx = t, this.w = t.w
    }

    function A(t) {
        s(this, A), this.ctx = t, this.w = t.w
    }

    function L(t) {
        s(this, L), this.ctx = t, this.w = t.w, this.setEasingFunctions()
    }

    function z() {
        s(this, z)
    }

    var X = {
        name: "en",
        options: {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            toolbar: {
                exportToSVG: "Download SVG",
                exportToPNG: "Download PNG",
                exportToCSV: "Download CSV",
                menu: "Menu",
                selection: "Selection",
                selectionZoom: "Selection Zoom",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                pan: "Panning",
                reset: "Reset Zoom"
            }
        }
    }, E = (o(Ye, [{
        key: "init", value: function () {
            return {
                annotations: {
                    position: "front",
                    yaxis: [this.yAxisAnnotation],
                    xaxis: [this.xAxisAnnotation],
                    points: [this.pointAnnotation],
                    texts: [],
                    images: [],
                    shapes: []
                },
                chart: {
                    animations: {
                        enabled: !0,
                        easing: "easeinout",
                        speed: 800,
                        animateGradually: {delay: 150, enabled: !0},
                        dynamicAnimation: {enabled: !0, speed: 350}
                    },
                    background: "transparent",
                    locales: [X],
                    defaultLocale: "en",
                    dropShadow: {
                        enabled: !1,
                        enabledOnSeries: void 0,
                        top: 2,
                        left: 2,
                        blur: 4,
                        color: "#000",
                        opacity: .35
                    },
                    events: {
                        animationEnd: void 0,
                        beforeMount: void 0,
                        mounted: void 0,
                        updated: void 0,
                        click: void 0,
                        mouseMove: void 0,
                        mouseLeave: void 0,
                        legendClick: void 0,
                        markerClick: void 0,
                        selection: void 0,
                        dataPointSelection: void 0,
                        dataPointMouseEnter: void 0,
                        dataPointMouseLeave: void 0,
                        beforeZoom: void 0,
                        beforeResetZoom: void 0,
                        zoomed: void 0,
                        scrolled: void 0,
                        brushScrolled: void 0
                    },
                    foreColor: "#373d3f",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    height: "auto",
                    parentHeightOffset: 15,
                    redrawOnParentResize: !0,
                    redrawOnWindowResize: !0,
                    id: void 0,
                    group: void 0,
                    offsetX: 0,
                    offsetY: 0,
                    selection: {
                        enabled: !1,
                        type: "x",
                        fill: {color: "#24292e", opacity: .1},
                        stroke: {width: 1, color: "#24292e", opacity: .4, dashArray: 3},
                        xaxis: {min: void 0, max: void 0},
                        yaxis: {min: void 0, max: void 0}
                    },
                    sparkline: {enabled: !1},
                    brush: {enabled: !1, autoScaleYaxis: !0, target: void 0},
                    stacked: !1,
                    stackType: "normal",
                    toolbar: {
                        show: !0,
                        offsetX: 0,
                        offsetY: 0,
                        tools: {
                            download: !0,
                            selection: !0,
                            zoom: !0,
                            zoomin: !0,
                            zoomout: !0,
                            pan: !0,
                            reset: !0,
                            customIcons: []
                        },
                        export: {
                            csv: {
                                filename: void 0,
                                columnDelimiter: ",",
                                headerCategory: "category",
                                headerValue: "value",
                                dateFormatter: function (t) {
                                    return new Date(t).toDateString()
                                }
                            }, png: {filename: void 0}, svg: {filename: void 0}
                        },
                        autoSelected: "zoom"
                    },
                    type: "line",
                    width: "100%",
                    zoom: {
                        enabled: !0,
                        type: "x",
                        autoScaleYaxis: !1,
                        zoomedArea: {
                            fill: {color: "#90CAF9", opacity: .4},
                            stroke: {color: "#0D47A1", opacity: .4, width: 1}
                        }
                    }
                },
                plotOptions: {
                    area: {fillTo: "origin"},
                    bar: {
                        horizontal: !1,
                        columnWidth: "70%",
                        barHeight: "70%",
                        distributed: !1,
                        borderRadius: 0,
                        rangeBarOverlap: !0,
                        rangeBarGroupRows: !1,
                        colors: {ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0},
                        dataLabels: {
                            position: "top",
                            maxItems: 100,
                            hideOverflowingLabels: !0,
                            orientation: "horizontal"
                        }
                    },
                    bubble: {minBubbleRadius: void 0, maxBubbleRadius: void 0},
                    candlestick: {colors: {upward: "#00B746", downward: "#EF403C"}, wick: {useFillColor: !0}},
                    boxPlot: {colors: {upper: "#00E396", lower: "#008FFB"}},
                    heatmap: {
                        radius: 2,
                        enableShades: !0,
                        shadeIntensity: .5,
                        reverseNegativeShade: !1,
                        distributed: !1,
                        useFillColorAsStroke: !1,
                        colorScale: {inverse: !1, ranges: [], min: void 0, max: void 0}
                    },
                    treemap: {
                        enableShades: !0,
                        shadeIntensity: .5,
                        distributed: !1,
                        reverseNegativeShade: !1,
                        useFillColorAsStroke: !1,
                        colorScale: {inverse: !1, ranges: [], min: void 0, max: void 0}
                    },
                    radialBar: {
                        inverseOrder: !1,
                        startAngle: 0,
                        endAngle: 360,
                        offsetX: 0,
                        offsetY: 0,
                        hollow: {
                            margin: 5,
                            size: "50%",
                            background: "transparent",
                            image: void 0,
                            imageWidth: 150,
                            imageHeight: 150,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            imageClipped: !0,
                            position: "front",
                            dropShadow: {enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5}
                        },
                        track: {
                            show: !0,
                            startAngle: void 0,
                            endAngle: void 0,
                            background: "#f2f2f2",
                            strokeWidth: "97%",
                            opacity: 1,
                            margin: 5,
                            dropShadow: {enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5}
                        },
                        dataLabels: {
                            show: !0,
                            name: {
                                show: !0,
                                fontSize: "16px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 0,
                                formatter: function (t) {
                                    return t
                                }
                            },
                            value: {
                                show: !0,
                                fontSize: "14px",
                                fontFamily: void 0,
                                fontWeight: 400,
                                color: void 0,
                                offsetY: 16,
                                formatter: function (t) {
                                    return t + "%"
                                }
                            },
                            total: {
                                show: !1,
                                label: "Total",
                                fontSize: "16px",
                                fontWeight: 600,
                                fontFamily: void 0,
                                color: void 0,
                                formatter: function (t) {
                                    return t.globals.seriesTotals.reduce(function (t, e) {
                                        return t + e
                                    }, 0) / t.globals.series.length + "%"
                                }
                            }
                        }
                    },
                    pie: {
                        customScale: 1,
                        offsetX: 0,
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 360,
                        expandOnClick: !0,
                        dataLabels: {offset: 0, minAngleToShowLabel: 10},
                        donut: {
                            size: "65%",
                            background: "transparent",
                            labels: {
                                show: !1,
                                name: {
                                    show: !0,
                                    fontSize: "16px",
                                    fontFamily: void 0,
                                    fontWeight: 600,
                                    color: void 0,
                                    offsetY: -10,
                                    formatter: function (t) {
                                        return t
                                    }
                                },
                                value: {
                                    show: !0,
                                    fontSize: "20px",
                                    fontFamily: void 0,
                                    fontWeight: 400,
                                    color: void 0,
                                    offsetY: 10,
                                    formatter: function (t) {
                                        return t
                                    }
                                },
                                total: {
                                    show: !1,
                                    showAlways: !1,
                                    label: "Total",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    fontFamily: void 0,
                                    color: void 0,
                                    formatter: function (t) {
                                        return t.globals.seriesTotals.reduce(function (t, e) {
                                            return t + e
                                        }, 0)
                                    }
                                }
                            }
                        }
                    },
                    polarArea: {
                        rings: {strokeWidth: 1, strokeColor: "#e8e8e8"},
                        spokes: {strokeWidth: 1, connectorColors: "#e8e8e8"}
                    },
                    radar: {
                        size: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        polygons: {
                            strokeWidth: 1,
                            strokeColors: "#e8e8e8",
                            connectorColors: "#e8e8e8",
                            fill: {colors: void 0}
                        }
                    }
                },
                colors: void 0,
                dataLabels: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    formatter: function (t) {
                        return null !== t ? t : ""
                    },
                    textAnchor: "middle",
                    distributed: !1,
                    offsetX: 0,
                    offsetY: 0,
                    style: {fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0},
                    background: {
                        enabled: !0,
                        foreColor: "#fff",
                        borderRadius: 2,
                        padding: 4,
                        opacity: .9,
                        borderWidth: 1,
                        borderColor: "#fff",
                        dropShadow: {enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45}
                    },
                    dropShadow: {enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45}
                },
                fill: {
                    type: "solid",
                    colors: void 0,
                    opacity: .85,
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: .5,
                        gradientToColors: void 0,
                        inverseColors: !0,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100],
                        colorStops: []
                    },
                    image: {src: [], width: void 0, height: void 0},
                    pattern: {style: "squares", width: 6, height: 6, strokeWidth: 2}
                },
                forecastDataPoints: {count: 0, fillOpacity: .5, strokeWidth: void 0, dashArray: 4},
                grid: {
                    show: !0,
                    borderColor: "#e0e0e0",
                    strokeDashArray: 0,
                    position: "back",
                    xaxis: {lines: {show: !1}},
                    yaxis: {lines: {show: !0}},
                    row: {colors: void 0, opacity: .5},
                    column: {colors: void 0, opacity: .5},
                    padding: {top: 0, right: 10, bottom: 0, left: 12}
                },
                labels: [],
                legend: {
                    show: !0,
                    showForSingleSeries: !1,
                    showForNullSeries: !0,
                    showForZeroSeries: !0,
                    floating: !1,
                    position: "bottom",
                    horizontalAlign: "center",
                    inverseOrder: !1,
                    fontSize: "12px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    width: void 0,
                    height: void 0,
                    formatter: void 0,
                    tooltipHoverFormatter: void 0,
                    offsetX: -20,
                    offsetY: 4,
                    customLegendItems: [],
                    labels: {colors: void 0, useSeriesColors: !1},
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        fillColors: void 0,
                        strokeColor: "#fff",
                        radius: 12,
                        customHTML: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: void 0
                    },
                    itemMargin: {horizontal: 5, vertical: 2},
                    onItemClick: {toggleDataSeries: !0},
                    onItemHover: {highlightDataSeries: !0}
                },
                markers: {
                    discrete: [],
                    size: 0,
                    colors: void 0,
                    strokeColors: "#fff",
                    strokeWidth: 2,
                    strokeOpacity: .9,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    shape: "circle",
                    width: 8,
                    height: 8,
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: void 0,
                    onDblClick: void 0,
                    showNullDataPoints: !0,
                    hover: {size: void 0, sizeOffset: 3}
                },
                noData: {
                    text: void 0,
                    align: "center",
                    verticalAlign: "middle",
                    offsetX: 0,
                    offsetY: 0,
                    style: {color: void 0, fontSize: "14px", fontFamily: void 0}
                },
                responsive: [],
                series: void 0,
                states: {
                    normal: {filter: {type: "none", value: 0}},
                    hover: {filter: {type: "lighten", value: .1}},
                    active: {allowMultipleDataPointsSelection: !1, filter: {type: "darken", value: .5}}
                },
                title: {
                    text: void 0,
                    align: "left",
                    margin: 5,
                    offsetX: 0,
                    offsetY: 0,
                    floating: !1,
                    style: {fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0}
                },
                subtitle: {
                    text: void 0,
                    align: "left",
                    margin: 5,
                    offsetX: 0,
                    offsetY: 30,
                    floating: !1,
                    style: {fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0}
                },
                stroke: {show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0},
                tooltip: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    shared: !0,
                    followCursor: !1,
                    intersect: !1,
                    inverseOrder: !1,
                    custom: void 0,
                    fillSeriesColor: !1,
                    theme: "light",
                    style: {fontSize: "12px", fontFamily: void 0},
                    onDatasetHover: {highlightDataSeries: !1},
                    x: {show: !0, format: "dd MMM", formatter: void 0},
                    y: {
                        formatter: void 0, title: {
                            formatter: function (t) {
                                return t ? t + ": " : ""
                            }
                        }
                    },
                    z: {formatter: void 0, title: "Size: "},
                    marker: {show: !0, fillColors: void 0},
                    items: {display: "flex"},
                    fixed: {enabled: !1, position: "topRight", offsetX: 0, offsetY: 0}
                },
                xaxis: {
                    type: "category",
                    categories: [],
                    convertedCatToNumeric: !1,
                    offsetX: 0,
                    offsetY: 0,
                    overwriteCategories: void 0,
                    labels: {
                        show: !0,
                        rotate: -45,
                        rotateAlways: !1,
                        hideOverlappingLabels: !0,
                        trim: !1,
                        minHeight: void 0,
                        maxHeight: 120,
                        showDuplicates: !0,
                        style: {colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: ""},
                        offsetX: 0,
                        offsetY: 0,
                        format: void 0,
                        formatter: void 0,
                        datetimeUTC: !0,
                        datetimeFormatter: {
                            year: "yyyy",
                            month: "MMM 'yy",
                            day: "dd MMM",
                            hour: "HH:mm",
                            minute: "HH:mm:ss",
                            second: "HH:mm:ss"
                        }
                    },
                    axisBorder: {show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0},
                    axisTicks: {show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0},
                    tickAmount: void 0,
                    tickPlacement: "on",
                    min: void 0,
                    max: void 0,
                    range: void 0,
                    floating: !1,
                    decimalsInFloat: void 0,
                    position: "bottom",
                    title: {
                        text: void 0,
                        offsetX: 0,
                        offsetY: 0,
                        style: {color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: ""}
                    },
                    crosshairs: {
                        show: !0,
                        width: 1,
                        position: "back",
                        opacity: .9,
                        stroke: {color: "#b6b6b6", width: 1, dashArray: 3},
                        fill: {
                            type: "solid",
                            color: "#B1B9C4",
                            gradient: {
                                colorFrom: "#D8E3F0",
                                colorTo: "#BED1E6",
                                stops: [0, 100],
                                opacityFrom: .4,
                                opacityTo: .5
                            }
                        },
                        dropShadow: {enabled: !1, left: 0, top: 0, blur: 1, opacity: .4}
                    },
                    tooltip: {enabled: !0, offsetY: 0, formatter: void 0, style: {fontSize: "12px", fontFamily: void 0}}
                },
                yaxis: this.yAxis,
                theme: {
                    mode: "light",
                    palette: "palette1",
                    monochrome: {enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: .65}
                }
            }
        }
    }]), Ye), Y = (o(Ee, [{
        key: "drawAxesAnnotations", value: function () {
            var t = this.w;
            if (t.globals.axisCharts) {
                for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = t.config.chart.animations.enabled, o = [e, i, a], r = [i.node, e.node, a.node], n = 0; n < 3; n++) t.globals.dom.elGraphical.add(o[n]), !s || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && 1 < t.globals.dataPoints && r[n].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({
                    el: r[n],
                    index: 0
                });
                this.helpers.annotationsBackground()
            }
        }
    }, {
        key: "drawImageAnnos", value: function () {
            var i = this;
            this.w.config.annotations.images.map(function (t, e) {
                i.addImage(t, e)
            })
        }
    }, {
        key: "drawTextAnnos", value: function () {
            var i = this;
            this.w.config.annotations.texts.map(function (t, e) {
                i.addText(t, e)
            })
        }
    }, {
        key: "addXaxisAnnotation", value: function (t, e, i) {
            this.xAxisAnnotations.addXaxisAnnotation(t, e, i)
        }
    }, {
        key: "addYaxisAnnotation", value: function (t, e, i) {
            this.yAxisAnnotations.addYaxisAnnotation(t, e, i)
        }
    }, {
        key: "addPointAnnotation", value: function (t, e, i) {
            this.pointsAnnotations.addPointAnnotation(t, e, i)
        }
    }, {
        key: "addText", value: function (t, e) {
            var i = t.x, a = t.y, s = t.text, o = t.textAnchor, r = t.foreColor, n = t.fontSize, l = t.fontFamily,
                h = t.fontWeight, c = t.cssClass, d = t.backgroundColor, g = t.borderWidth, u = t.strokeDashArray,
                p = t.borderRadius, f = t.borderColor, x = t.appendTo, b = void 0 === x ? ".apexcharts-annotations" : x,
                m = t.paddingLeft, v = void 0 === m ? 4 : m, y = t.paddingRight, x = void 0 === y ? 4 : y,
                m = t.paddingBottom, y = void 0 === m ? 2 : m, m = t.paddingTop, t = void 0 === m ? 2 : m, m = this.w,
                c = this.graphics.drawText({
                    x: i,
                    y: a,
                    text: s,
                    textAnchor: o || "start",
                    fontSize: n || "12px",
                    fontWeight: h || "regular",
                    fontFamily: l || m.config.chart.fontFamily,
                    foreColor: r || m.config.chart.foreColor,
                    cssClass: c
                }), m = m.globals.dom.baseEl.querySelector(b);
            m && m.appendChild(c.node);
            b = c.bbox();
            s && (u = this.graphics.drawRect(b.x - v, b.y - t, b.width + v + x, b.height + y + t, p, d || "transparent", 1, g, f, u), m.insertBefore(u.node, c.node))
        }
    }, {
        key: "addImage", value: function (t, e) {
            var i = this.w, a = t.path, s = t.x, o = void 0 === s ? 0 : s, r = t.y, n = void 0 === r ? 0 : r,
                s = t.width, r = void 0 === s ? 20 : s, s = t.height, s = void 0 === s ? 20 : s, t = t.appendTo,
                t = void 0 === t ? ".apexcharts-annotations" : t, a = i.globals.dom.Paper.image(a);
            a.size(r, s).move(o, n);
            t = i.globals.dom.baseEl.querySelector(t);
            t && t.appendChild(a.node)
        }
    }, {
        key: "addXaxisAnnotationExternal", value: function (t, e, i) {
            return this.addAnnotationExternal({
                params: t,
                pushToMemory: e,
                context: i,
                type: "xaxis",
                contextMethod: i.addXaxisAnnotation
            }), i
        }
    }, {
        key: "addYaxisAnnotationExternal", value: function (t, e, i) {
            return this.addAnnotationExternal({
                params: t,
                pushToMemory: e,
                context: i,
                type: "yaxis",
                contextMethod: i.addYaxisAnnotation
            }), i
        }
    }, {
        key: "addPointAnnotationExternal", value: function (t, e, i) {
            return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({
                params: t,
                pushToMemory: e,
                context: i,
                type: "point",
                contextMethod: i.addPointAnnotation
            }), i
        }
    }, {
        key: "addAnnotationExternal", value: function (t) {
            var e = t.params, i = t.pushToMemory, a = t.context, s = t.type, o = t.contextMethod, r = a, n = r.w,
                l = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")),
                h = l.childNodes.length + 1, t = new E,
                t = Object.assign({}, "xaxis" === s ? t.xAxisAnnotation : "yaxis" === s ? t.yAxisAnnotation : t.pointAnnotation),
                c = T.extend(t, e);
            switch (s) {
                case"xaxis":
                    this.addXaxisAnnotation(c, l, h);
                    break;
                case"yaxis":
                    this.addYaxisAnnotation(c, l, h);
                    break;
                case"point":
                    this.addPointAnnotation(c, l, h)
            }
            t = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(h, "']")), s = this.helpers.addBackgroundToAnno(t, c);
            return s && l.insertBefore(s.node, t), i && n.globals.memory.methodsToExec.push({
                context: r,
                id: c.id || T.randomId(),
                method: o,
                label: "addAnnotation",
                params: e
            }), a
        }
    }, {
        key: "clearAnnotations", value: function (t) {
            var i = t.w,
                t = i.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
            i.globals.memory.methodsToExec.map(function (t, e) {
                "addText" !== t.label && "addAnnotation" !== t.label || i.globals.memory.methodsToExec.splice(e, 1)
            }), t = T.listToArray(t), Array.prototype.forEach.call(t, function (t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            })
        }
    }, {
        key: "removeAnnotation", value: function (t, i) {
            var a = t.w, t = a.globals.dom.baseEl.querySelectorAll(".".concat(i));
            t && (a.globals.memory.methodsToExec.map(function (t, e) {
                t.id === i && a.globals.memory.methodsToExec.splice(e, 1)
            }), Array.prototype.forEach.call(t, function (t) {
                t.parentElement.removeChild(t)
            }))
        }
    }]), Ee), F = (o(Xe, [{
        key: "clippedImgArea", value: function (t) {
            var e = this.w, i = e.config, a = parseInt(e.globals.gridWidth, 10), s = parseInt(e.globals.gridHeight, 10),
                o = s < a ? a : s, r = t.image, a = 0, s = 0,
                s = void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (a = i.fill.image.width + 1, i.fill.image.height) : (a = o + 1, o) : (a = t.width, t.height),
                i = document.createElementNS(e.globals.SVGNS, "pattern");
            I.setAttrs(i, {
                id: t.patternID,
                patternUnits: t.patternUnits || "userSpaceOnUse",
                width: a + "px",
                height: s + "px"
            });
            o = document.createElementNS(e.globals.SVGNS, "image");
            i.appendChild(o), o.setAttributeNS(window.SVG.xlink, "href", r), I.setAttrs(o, {
                x: 0,
                y: 0,
                preserveAspectRatio: "none",
                width: a + "px",
                height: s + "px"
            }), o.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(i)
        }
    }, {
        key: "getSeriesIndex", value: function (t) {
            var e = this.w;
            return ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type || "treemap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
        }
    }, {
        key: "fillPath", value: function (t) {
            var e = this.w;
            this.opts = t;
            var i, a, s = this.w.config;
            this.seriesIndex = this.getSeriesIndex(t);
            var o = this.getFillColors()[this.seriesIndex];
            "function" == typeof (o = void 0 !== e.globals.seriesColors[this.seriesIndex] ? e.globals.seriesColors[this.seriesIndex] : o) && (o = o({
                seriesIndex: this.seriesIndex,
                dataPointIndex: t.dataPointIndex,
                value: t.value,
                w: e
            }));
            var r = this.getFillType(this.seriesIndex),
                n = Array.isArray(s.fill.opacity) ? s.fill.opacity[this.seriesIndex] : s.fill.opacity,
                l = o = t.color ? t.color : o;
            return -1 === o.indexOf("rgb") ? o.length < 9 && (l = T.hexToRgba(o, n)) : -1 < o.indexOf("rgba") && (n = T.getOpacityFromRGBA(o)), t.opacity && (n = t.opacity), "pattern" === r && (i = this.handlePatternFill(i, o, n, l)), "gradient" === r && (a = this.handleGradientFill(o, n, this.seriesIndex)), i = "image" === r ? (o = s.fill.image.src, s = t.patternID || "", this.clippedImgArea({
                opacity: n,
                image: Array.isArray(o) ? t.seriesNumber < o.length ? o[t.seriesNumber] : o[0] : o,
                width: t.width || void 0,
                height: t.height || void 0,
                patternUnits: t.patternUnits,
                patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(s)
            }), "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(s, ")")) : "gradient" === r ? a : "pattern" === r ? i : l, i = t.solid ? l : i
        }
    }, {
        key: "getFillType", value: function (t) {
            var e = this.w;
            return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type
        }
    }, {
        key: "getFillColors", value: function () {
            var t = this.w, e = t.config, i = this.opts, a = [];
            return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a
        }
    }, {
        key: "handlePatternFill", value: function (t, e, i, a) {
            var s = this.w.config, o = this.opts, r = new I(this.ctx),
                n = void 0 === s.fill.pattern.strokeWidth ? Array.isArray(s.stroke.width) ? s.stroke.width[this.seriesIndex] : s.stroke.width : Array.isArray(s.fill.pattern.strokeWidth) ? s.fill.pattern.strokeWidth[this.seriesIndex] : s.fill.pattern.strokeWidth,
                e = e;
            return Array.isArray(s.fill.pattern.style) ? void 0 !== s.fill.pattern.style[o.seriesNumber] ? r.drawPattern(s.fill.pattern.style[o.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, e, n, i) : a : r.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, e, n, i)
        }
    }, {
        key: "handleGradientFill", value: function (t, e, i) {
            var a = this.w.config, s = this.opts, o = new I(this.ctx), r = new T, n = a.fill.gradient.type, l = t,
                h = void 0 === a.fill.gradient.opacityFrom ? e : Array.isArray(a.fill.gradient.opacityFrom) ? a.fill.gradient.opacityFrom[i] : a.fill.gradient.opacityFrom;
            -1 < l.indexOf("rgba") && (h = T.getOpacityFromRGBA(l));
            var c,
                e = void 0 === a.fill.gradient.opacityTo ? e : Array.isArray(a.fill.gradient.opacityTo) ? a.fill.gradient.opacityTo[i] : a.fill.gradient.opacityTo;
            return void 0 === a.fill.gradient.gradientToColors || 0 === a.fill.gradient.gradientToColors.length ? c = "dark" === a.fill.gradient.shade ? r.shadeColor(-1 * parseFloat(a.fill.gradient.shadeIntensity), -1 < t.indexOf("rgb") ? T.rgb2hex(t) : t) : r.shadeColor(parseFloat(a.fill.gradient.shadeIntensity), -1 < t.indexOf("rgb") ? T.rgb2hex(t) : t) : a.fill.gradient.gradientToColors[s.seriesNumber] ? -1 < (c = r = a.fill.gradient.gradientToColors[s.seriesNumber]).indexOf("rgba") && (e = T.getOpacityFromRGBA(r)) : c = t, a.fill.gradient.inverseColors && (t = l, l = c, c = t), -1 < l.indexOf("rgb") && (l = T.rgb2hex(l)), -1 < c.indexOf("rgb") && (c = T.rgb2hex(c)), o.drawGradient(n, l, c, h, e, s.size, a.fill.gradient.stops, a.fill.gradient.colorStops, i)
        }
    }]), Xe), R = (o(ze, [{
        key: "setGlobalMarkerSize", value: function () {
            var e = this.w;
            if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], 0 < e.globals.markers.size.length) {
                if (e.globals.markers.size.length < e.globals.series.length + 1) for (var t = 0; t <= e.globals.series.length; t++) void 0 === e.globals.markers.size[t] && e.globals.markers.size.push(e.globals.markers.size[0])
            } else e.globals.markers.size = e.config.series.map(function (t) {
                return e.config.markers.size
            })
        }
    }, {
        key: "plotChartMarkers", value: function (t, e, i, a) {
            var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = this.w, r = e, n = t, l = null,
                h = new I(this.ctx);
            if ((0 < o.globals.markers.size[e] || s) && (l = h.group({class: s ? "" : "apexcharts-series-markers"})).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(n.x)) for (var c = 0; c < n.x.length; c++) {
                var d, g = 1 === i && 1 === c ? 1 : 1 === i && 0 === c ? 0 : i, u = "apexcharts-marker";
                "line" !== o.config.chart.type && "area" !== o.config.chart.type || o.globals.comboCharts || o.config.tooltip.intersect || (u += " no-pointer-events"), (Array.isArray(o.config.markers.size) ? 0 < o.globals.markers.size[e] : 0 < o.config.markers.size) || s ? (T.isNumber(n.y[c]) ? u += " w".concat(T.randomId()) : u = "apexcharts-nullpoint", d = this.getMarkerConfig({
                    cssClass: u,
                    seriesIndex: e,
                    dataPointIndex: g
                }), o.config.series[r].data[g] && (o.config.series[r].data[g].fillColor && (d.pointFillColor = o.config.series[r].data[g].fillColor), o.config.series[r].data[g].strokeColor && (d.pointStrokeColor = o.config.series[r].data[g].strokeColor)), a && (d.pSize = a), (u = h.drawMarker(n.x[c], n.y[c], d)).attr("rel", g), u.attr("j", g), u.attr("index", e), u.node.setAttribute("default-marker-size", d.pSize), new C(this.ctx).setSelectionFilter(u, e, g), this.addEvents(u), l && l.add(u)) : (void 0 === o.globals.pointsArray[e] && (o.globals.pointsArray[e] = []), o.globals.pointsArray[e].push([n.x[c], n.y[c]]))
            }
            return l
        }
    }, {
        key: "getMarkerConfig", value: function (t) {
            var e = t.cssClass, i = t.seriesIndex, a = t.dataPointIndex, s = void 0 === a ? null : a,
                a = t.finishRadius, t = void 0 === a ? null : a, a = this.w, o = this.getMarkerStyle(i),
                r = a.globals.markers.size[i], a = a.config.markers;
            return null !== s && a.discrete.length && a.discrete.map(function (t) {
                t.seriesIndex === i && t.dataPointIndex === s && (o.pointStrokeColor = t.strokeColor, o.pointFillColor = t.fillColor, r = t.size, o.pointShape = t.shape)
            }), {
                pSize: null === t ? r : t,
                pRadius: a.radius,
                width: Array.isArray(a.width) ? a.width[i] : a.width,
                height: Array.isArray(a.height) ? a.height[i] : a.height,
                pointStrokeWidth: Array.isArray(a.strokeWidth) ? a.strokeWidth[i] : a.strokeWidth,
                pointStrokeColor: o.pointStrokeColor,
                pointFillColor: o.pointFillColor,
                shape: o.pointShape || (Array.isArray(a.shape) ? a.shape[i] : a.shape),
                class: e,
                pointStrokeOpacity: Array.isArray(a.strokeOpacity) ? a.strokeOpacity[i] : a.strokeOpacity,
                pointStrokeDashArray: Array.isArray(a.strokeDashArray) ? a.strokeDashArray[i] : a.strokeDashArray,
                pointFillOpacity: Array.isArray(a.fillOpacity) ? a.fillOpacity[i] : a.fillOpacity,
                seriesIndex: i
            }
        }
    }, {
        key: "addEvents", value: function (t) {
            var e = this.w, i = new I(this.ctx);
            t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), {passive: !0})
        }
    }, {
        key: "getMarkerStyle", value: function (t) {
            var e = this.w, i = e.globals.markers.colors,
                e = e.config.markers.strokeColor || e.config.markers.strokeColors;
            return {pointStrokeColor: Array.isArray(e) ? e[t] : e, pointFillColor: Array.isArray(i) ? i[t] : i}
        }
    }]), ze), H = (o(Ie, [{
        key: "draw", value: function (t, e, i) {
            var a = this.w, s = new I(this.ctx), o = i.realIndex, r = i.pointsPos, n = i.zRatio, l = i.elParent,
                h = s.group({class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});
            if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(r.x)) for (var c = 0; c < r.x.length; c++) {
                var d = e + 1, g = !0;
                0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1);
                var u = 0, p = a.globals.markers.size[o];
                n !== 1 / 0 && (p = a.globals.seriesZ[o][d] / n, (x = a.config.plotOptions.bubble).minBubbleRadius && p < x.minBubbleRadius && (p = x.minBubbleRadius), x.maxBubbleRadius && p > x.maxBubbleRadius && (p = x.maxBubbleRadius)), a.config.chart.animations.enabled || (u = p);
                var f = r.x[c], x = r.y[c], u = u || 0;
                (g = null !== x && void 0 !== a.globals.series[o][d] && g) && (d = this.drawPoint(f, x, u, p, o, d, e), h.add(d)), l.add(h)
            }
        }
    }, {
        key: "drawPoint", value: function (t, e, i, a, s, o, r) {
            var n = this.w, l = s, h = new S(this.ctx), c = new C(this.ctx), d = new F(this.ctx), g = new R(this.ctx),
                u = new I(this.ctx), p = g.getMarkerConfig({
                    cssClass: "apexcharts-marker",
                    seriesIndex: l,
                    dataPointIndex: o,
                    finishRadius: "bubble" === n.config.chart.type || n.globals.comboCharts && n.config.series[s] && "bubble" === n.config.series[s].type ? a : null
                });
            a = p.pSize;
            var f, x, d = d.fillPath({
                seriesNumber: s,
                dataPointIndex: o,
                color: p.pointFillColor,
                patternUnits: "objectBoundingBox",
                value: n.globals.series[s][r]
            });
            if ("circle" === p.shape ? f = u.drawCircle(i) : "square" !== p.shape && "rect" !== p.shape || (f = u.drawRect(0, 0, p.width - p.pointStrokeWidth / 2, p.height - p.pointStrokeWidth / 2, p.pRadius)), n.config.series[l].data[o] && n.config.series[l].data[o].fillColor && (d = n.config.series[l].data[o].fillColor), f.attr({
                x: t - p.width / 2 - p.pointStrokeWidth / 2,
                y: e - p.height / 2 - p.pointStrokeWidth / 2,
                cx: t,
                cy: e,
                fill: d,
                "fill-opacity": p.pointFillOpacity,
                stroke: p.pointStrokeColor,
                r: a,
                "stroke-width": p.pointStrokeWidth,
                "stroke-dasharray": p.pointStrokeDashArray,
                "stroke-opacity": p.pointStrokeOpacity
            }), n.config.chart.dropShadow.enabled && (x = n.config.chart.dropShadow, c.dropShadow(f, x, s)), !this.initialAnim || n.globals.dataChanged || n.globals.resized ? n.globals.animationEnded = !0 : (x = n.config.chart.animations.speed, h.animateMarker(f, 0, "circle" === p.shape ? a : {
                width: p.width,
                height: p.height
            }, x, n.globals.easing, function () {
                window.setTimeout(function () {
                    h.animationCompleted(f)
                }, 100)
            })), n.globals.dataChanged && "circle" === p.shape) if (this.dynamicAnim) {
                var b, m, v, y = n.config.chart.animations.dynamicAnimation.speed;
                null != (r = n.globals.previousPaths[s] && n.globals.previousPaths[s][r]) && (b = r.x, m = r.y, v = void 0 !== r.r ? r.r : a);
                for (var w = 0; w < n.globals.collapsedSeries.length; w++) n.globals.collapsedSeries[w].index === s && (y = 1, a = 0);
                h.animateCircle(f, {cx: b, cy: m, r: v}, {
                    cx: t,
                    cy: e,
                    r: a = 0 === t && 0 === e ? 0 : a
                }, y, n.globals.easing)
            } else f.attr({r: a});
            return f.attr({
                rel: o,
                j: o,
                index: s,
                "default-marker-size": a
            }), c.setSelectionFilter(f, s, o), g.addEvents(f), f.node.classList.add("apexcharts-marker"), f
        }
    }, {
        key: "centerTextInBubble", value: function (t) {
            var e = this.w;
            return {y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4}
        }
    }]), Ie), D = (o(Te, [{
        key: "dataLabelsCorrection", value: function (t, e, i, a, s, o, r) {
            var n = this.w, l = !1, h = new I(this.ctx).getTextRects(i, r), c = h.width, i = h.height;
            (e = e < 0 ? 0 : e) > n.globals.gridHeight + i && (e = n.globals.gridHeight + i / 2), void 0 === n.globals.dataLabelsRects[a] && (n.globals.dataLabelsRects[a] = []), n.globals.dataLabelsRects[a].push({
                x: t,
                y: e,
                width: c,
                height: i
            });
            r = n.globals.dataLabelsRects[a].length - 2, i = void 0 !== n.globals.lastDrawnDataLabelsIndexes[a] ? n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
            return void 0 === n.globals.dataLabelsRects[a][r] || (t > (i = n.globals.dataLabelsRects[a][i]).x + i.width + 2 || e > i.y + i.height + 2 || t + c < i.x) && (l = !0), {
                x: t,
                y: e,
                textRects: h,
                drawnextLabel: l = 0 === s || o ? !0 : l
            }
        }
    }, {
        key: "drawDataLabel", value: function (t, e, i) {
            var a = this, s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 2, o = this.w,
                r = new I(this.ctx), n = o.config.dataLabels, l = 0, h = i, c = null;
            if (!n.enabled || !Array.isArray(t.x)) return c;
            for (var c = r.group({class: "apexcharts-data-labels"}), d = 0; d < t.x.length; d++) {
                var g, u, p, f = t.x[d] + n.offsetX;
                l = t.y[d] + n.offsetY + s, isNaN(f) || (1 === i && 0 === d && (h = 0), 1 === i && 1 === d && (h = 1), g = o.globals.series[e][h], p = "", u = function (t) {
                    return o.config.dataLabels.formatter(t, {ctx: a.ctx, seriesIndex: e, dataPointIndex: h, w: o})
                }, "bubble" === o.config.chart.type ? (p = u(g = o.globals.seriesZ[e][h]), l = t.y[d], l = new H(this.ctx).centerTextInBubble(l, e, h).y) : void 0 !== g && (p = u(g)), this.plotDataLabelsText({
                    x: f,
                    y: l,
                    text: p,
                    i: e,
                    j: h,
                    parent: c,
                    offsetCorrection: !0,
                    dataLabelsConfig: o.config.dataLabels
                }))
            }
            return c
        }
    }, {
        key: "plotDataLabelsText", value: function (t) {
            var e = this.w, i = new I(this.ctx), a = t.x, s = t.y, o = t.i, r = t.j, n = t.text, l = t.textAnchor,
                h = t.fontSize, c = t.parent, d = t.dataLabelsConfig, g = t.color, u = t.alwaysDrawDataLabel,
                p = t.offsetCorrection;
            Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(o) < 0 || (t = {
                x: a,
                y: s,
                drawnextLabel: !0
            }, p && (t = this.dataLabelsCorrection(a, s, n, o, r, u, parseInt(d.style.fontSize, 10))), e.globals.zoomed || (a = t.x, s = t.y), t.textRects && (a < -10 - t.textRects.width || a > e.globals.gridWidth + t.textRects.width + 10) && (n = ""), p = e.globals.dataLabels.style.colors[o], "function" == typeof (p = ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed ? e.globals.dataLabels.style.colors[r] : p) && (p = p({
                series: e.globals.series,
                seriesIndex: o,
                dataPointIndex: r,
                w: e
            })), g && (p = g), u = d.offsetX, g = d.offsetY, "bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || (g = u = 0), t.drawnextLabel && ((h = i.drawText({
                width: 100,
                height: parseInt(d.style.fontSize, 10),
                x: a + u,
                y: s + g,
                foreColor: p,
                textAnchor: l || d.textAnchor,
                text: n,
                fontSize: h || d.style.fontSize,
                fontFamily: d.style.fontFamily,
                fontWeight: d.style.fontWeight || "normal"
            })).attr({
                class: "apexcharts-datalabel",
                cx: a,
                cy: s
            }), d.dropShadow.enabled && (d = d.dropShadow, new C(this.ctx).dropShadow(h, d)), c.add(h), void 0 === e.globals.lastDrawnDataLabelsIndexes[o] && (e.globals.lastDrawnDataLabelsIndexes[o] = []), e.globals.lastDrawnDataLabelsIndexes[o].push(r)))
        }
    }, {
        key: "addBackgroundToDataLabel", value: function (t, e) {
            var i = this.w, a = i.config.dataLabels.background, s = a.padding, o = a.padding / 2, r = e.width,
                n = e.height,
                i = new I(this.ctx).drawRect(e.x - s, e.y - o / 2, r + 2 * s, n + o, a.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor);
            return a.dropShadow.enabled && new C(this.ctx).dropShadow(i, a.dropShadow), i
        }
    }, {
        key: "dataLabelsBackground", value: function () {
            var t = this.w;
            if ("bubble" !== t.config.chart.type) for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) {
                var a = e[i], s = a.getBBox(), o = null;
                (o = s.width && s.height ? this.addBackgroundToDataLabel(a, s) : o) && (a.parentNode.insertBefore(o.node, a), s = a.getAttribute("fill"), (!t.config.chart.animations.enabled || t.globals.resized || t.globals.dataChanged ? o : o.animate()).attr({fill: s}), a.setAttribute("fill", t.config.dataLabels.background.foreColor))
            }
        }
    }, {
        key: "bringForward", value: function () {
            for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < e.length; a++) i && i.insertBefore(e[a], i.nextSibling)
        }
    }]), Te), N = (o(Me, [{
        key: "handleBarDataLabels", value: function (t) {
            var e = t.x, i = t.y, a = t.y1, s = t.y2, o = t.i, r = t.j, n = t.realIndex, l = t.series, h = t.barHeight,
                c = t.barWidth, d = t.barYPosition, g = t.visibleSeries, u = t.renderedPath, p = this.w,
                f = new I(this.barCtx.ctx),
                x = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[n] : this.barCtx.strokeWidth,
                b = e + parseFloat(c * g), m = i + parseFloat(h * g);
            p.globals.isXNumeric && !p.globals.isBarHorizontal && (b = e + parseFloat(c * (g + 1)), m = i + parseFloat(h * (g + 1)) - x);
            var v = e, y = i, w = p.config.dataLabels, k = this.barCtx.barOptions.dataLabels;
            void 0 !== d && this.barCtx.isRangeBar && (y = m = d);
            var A = w.offsetX, t = w.offsetY, g = {width: 0, height: 0};
            p.config.dataLabels.enabled && (d = this.barCtx.series[o][r], g = f.getTextRects(p.globals.yLabelFormatters[0](d), parseFloat(w.style.fontSize)));
            var t = {
                    x: e,
                    y: i,
                    i: o,
                    j: r,
                    renderedPath: u,
                    bcx: b,
                    bcy: m,
                    barHeight: h,
                    barWidth: c,
                    textRects: g,
                    strokeWidth: x,
                    dataLabelsX: v,
                    dataLabelsY: y,
                    barDataLabelsConfig: k,
                    offX: A,
                    offY: t
                },
                S = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(t) : this.calculateColumnsDataLabelsPosition(t);
            return u.attr({
                cy: S.bcy,
                cx: S.bcx,
                j: r,
                val: l[o][r],
                barHeight: h,
                barWidth: c
            }), this.drawCalculatedDataLabels({
                x: S.dataLabelsX,
                y: S.dataLabelsY,
                val: this.barCtx.isRangeBar ? [a, s] : l[o][r],
                i: n,
                j: r,
                barWidth: c,
                barHeight: h,
                textRects: g,
                dataLabelsConfig: w
            })
        }
    }, {
        key: "calculateColumnsDataLabelsPosition", value: function (t) {
            var e = this.w, i = t.i, a = t.j, s = t.y, o = t.bcx, r = t.barWidth, n = t.barHeight, l = t.textRects,
                h = t.dataLabelsY, c = t.barDataLabelsConfig, d = t.strokeWidth, g = t.offX, u = t.offY,
                n = Math.abs(n), p = "vertical" === e.config.plotOptions.bar.dataLabels.orientation;
            o -= d / 2;
            t = e.globals.gridWidth / e.globals.dataPoints, g = e.globals.isXNumeric ? o - r / 2 + g : o - t + r / 2 + g;
            p && (g = g + l.height / 2 - d / 2 - 2);
            var f = this.barCtx.series[i][a] < 0, x = s;
            switch (this.barCtx.isReversed && (x = s - n + (f ? 2 * n : 0), s -= n), c.position) {
                case"center":
                    h = p ? f ? x + n / 2 + u : x + n / 2 - u : f ? x - n / 2 + l.height / 2 + u : x + n / 2 + l.height / 2 - u;
                    break;
                case"bottom":
                    h = p ? f ? x + n + u : x + n - u : f ? x - n + l.height + d + u : x + n - l.height / 2 + d - u;
                    break;
                case"top":
                    h = p ? f ? x + u : x - u : f ? x - l.height / 2 - u : x + l.height + u
            }
            return e.config.chart.stacked || (h < 0 ? h = 0 + d : h + l.height / 3 > e.globals.gridHeight && (h = e.globals.gridHeight - d)), {
                bcx: o,
                bcy: s,
                dataLabelsX: g,
                dataLabelsY: h
            }
        }
    }, {
        key: "calculateBarsDataLabelsPosition", value: function (t) {
            var e = this.w, i = t.x, a = t.i, s = t.j, o = t.bcy, r = t.barHeight, n = t.barWidth, l = t.textRects,
                h = t.dataLabelsX, c = t.strokeWidth, d = t.barDataLabelsConfig, g = t.offX, u = t.offY,
                t = e.globals.gridHeight / e.globals.dataPoints, n = Math.abs(n),
                u = o - (this.barCtx.isRangeBar ? 0 : t) + r / 2 + l.height / 2 + u - 3,
                p = this.barCtx.series[a][s] < 0, f = i;
            switch (this.barCtx.isReversed && (f = i + n - (p ? 2 * n : 0), i = e.globals.gridWidth - n), d.position) {
                case"center":
                    h = p ? f + n / 2 - g : Math.max(l.width / 2, f - n / 2) + g;
                    break;
                case"bottom":
                    h = p ? f + n - c - Math.round(l.width / 2) - g : f - n + c + Math.round(l.width / 2) + g;
                    break;
                case"top":
                    h = p ? f - c + Math.round(l.width / 2) - g : f - c - Math.round(l.width / 2) + g
            }
            return e.config.chart.stacked || (h < 0 ? h = h + l.width + c : h + l.width / 2 > e.globals.gridWidth && (h = e.globals.gridWidth - l.width - c)), {
                bcx: i,
                bcy: o,
                dataLabelsX: h,
                dataLabelsY: u
            }
        }
    }, {
        key: "drawCalculatedDataLabels", value: function (t) {
            var e = t.x, i = t.y, a = t.val, s = t.i, o = t.j, r = t.textRects, n = t.barHeight, l = t.barWidth,
                h = t.dataLabelsConfig, c = this.w, d = "rotate(0)";
            "vertical" === c.config.plotOptions.bar.dataLabels.orientation && (d = "rotate(-90, ".concat(e, ", ").concat(i, ")"));
            var g = new D(this.barCtx.ctx), u = new I(this.barCtx.ctx), p = h.formatter, f = null,
                t = -1 < c.globals.collapsedSeriesIndices.indexOf(s);
            return h.enabled && !t && (f = u.group({
                class: "apexcharts-data-labels",
                transform: d
            }), t = "", void 0 !== a && (t = p(a, {
                seriesIndex: s,
                dataPointIndex: o,
                w: c
            })), d = c.globals.series[s][o] < 0, p = c.config.plotOptions.bar.dataLabels.position, "vertical" === c.config.plotOptions.bar.dataLabels.orientation && ("top" === p && (h.textAnchor = d ? "end" : "start"), "center" === p && (h.textAnchor = "middle"), "bottom" === p && (h.textAnchor = d ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && l < u.getTextRects(t, parseFloat(h.style.fontSize)).width && (t = ""), c.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? r.width / 1.6 > Math.abs(l) && (t = "") : r.height / 1.6 > Math.abs(n) && (t = "")), n = M({}, h), this.barCtx.isHorizontal && a < 0 && ("start" === h.textAnchor ? n.textAnchor = "end" : "end" === h.textAnchor && (n.textAnchor = "start")), g.plotDataLabelsText({
                x: e,
                y: i,
                text: t,
                i: s,
                j: o,
                parent: f,
                dataLabelsConfig: n,
                alwaysDrawDataLabel: !0,
                offsetCorrection: !0
            })), f
        }
    }]), Me), O = (o(Pe, [{
        key: "getAllSeriesEls", value: function () {
            return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")
        }
    }, {
        key: "getSeriesByName", value: function (t) {
            return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(T.escapeString(t), "']"))
        }
    }, {
        key: "isSeriesHidden", value: function (t) {
            var e = this.getSeriesByName(t), t = parseInt(e.getAttribute("data:realIndex"), 10);
            return {isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: t}
        }
    }, {
        key: "addCollapsedClassToSeries", value: function (i, a) {
            var t = this.w;

            function e(t) {
                for (var e = 0; e < t.length; e++) t[e].index === a && i.node.classList.add("apexcharts-series-collapsed")
            }

            e(t.globals.collapsedSeries), e(t.globals.ancillaryCollapsedSeries)
        }
    }, {
        key: "toggleSeries", value: function (t) {
            t = this.isSeriesHidden(t);
            return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, t.isHidden), t.isHidden
        }
    }, {
        key: "showSeries", value: function (t) {
            t = this.isSeriesHidden(t);
            t.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !0)
        }
    }, {
        key: "hideSeries", value: function (t) {
            t = this.isSeriesHidden(t);
            t.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !1)
        }
    }, {
        key: "resetSeries", value: function () {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], a = this.w,
                s = T.clone(a.globals.initialSeries);
            a.globals.previousPaths = [], i ? (a.globals.collapsedSeries = [], a.globals.ancillaryCollapsedSeries = [], a.globals.collapsedSeriesIndices = [], a.globals.ancillaryCollapsedSeriesIndices = []) : s = this.emptyCollapsedSeries(s), a.config.series = s, t && (e && (a.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled))
        }
    }, {
        key: "emptyCollapsedSeries", value: function (t) {
            for (var e = this.w, i = 0; i < t.length; i++) -1 < e.globals.collapsedSeriesIndices.indexOf(i) && (t[i].data = []);
            return t
        }
    }, {
        key: "toggleSeriesOnHover", value: function (t, e) {
            var i = this.w;
            e = e || t.target;
            var a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
            if ("mousemove" === t.type) {
                var s = parseInt(e.getAttribute("rel"), 10) - 1, o = null, e = null;
                i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? (o = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")), e = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"))) : o = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(1 + s, "']")) : o = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(1 + s, "'] path"));
                for (var r = 0; r < a.length; r++) a[r].classList.add(this.legendInactiveClass);
                null !== o && (i.globals.axisCharts || o.parentNode.classList.remove(this.legendInactiveClass), o.classList.remove(this.legendInactiveClass), null !== e && e.classList.remove(this.legendInactiveClass))
            } else if ("mouseout" === t.type) for (var n = 0; n < a.length; n++) a[n].classList.remove(this.legendInactiveClass)
        }
    }, {
        key: "highlightRangeInSeries", value: function (t, e) {
            function i(t) {
                for (var e = 0; e < o.length; e++) o[e].classList[t](a.legendInactiveClass)
            }

            var a = this, s = this.w, o = s.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect");
            "mousemove" === t.type ? (e = parseInt(e.getAttribute("rel"), 10) - 1, i("add"), function (t) {
                for (var e = 0; e < o.length; e++) {
                    var i = parseInt(o[e].getAttribute("val"), 10);
                    i >= t.from && i <= t.to && o[e].classList.remove(a.legendInactiveClass)
                }
            }(s.config.plotOptions.heatmap.colorScale.ranges[e])) : "mouseout" === t.type && i("remove")
        }
    }, {
        key: "getActiveConfigSeriesIndex", value: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "asc", s = this.w, e = 0;
            if (1 < s.config.series.length) for (var i = s.config.series.map(function (t, e) {
                var i = !1;
                return a && (i = "bar" === s.config.series[e].type || "column" === s.config.series[e].type), t.data && 0 < t.data.length && !i ? e : -1
            }), o = "asc" === t ? 0 : i.length - 1; "asc" === t ? o < i.length : 0 <= o; "asc" === t ? o++ : o--) if (-1 !== i[o]) {
                e = i[o];
                break
            }
            return e
        }
    }, {
        key: "getPreviousPaths", value: function () {
            var n = this.w;
            n.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "candlestick", "radar"].forEach(function (t) {
                for (var e = n.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series")), i = 0; i < e.length; i++) !function (t, e, i) {
                    for (var a, s = t[e].childNodes, o = {
                        type: i,
                        paths: [],
                        realIndex: t[e].getAttribute("data:realIndex")
                    }, r = 0; r < s.length; r++) s[r].hasAttribute("pathTo") && (a = s[r].getAttribute("pathTo"), o.paths.push({d: a}));
                    n.globals.previousPaths.push(o)
                }(e, i, t)
            }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
            var t = n.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n.config.chart.type, " .apexcharts-series"));
            if (0 < t.length) for (var e = 0; e < t.length; e++) !function (t) {
                for (var i = n.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(t, "'] rect")), a = [], e = 0; e < i.length; e++) !function (e) {
                    var t = function (t) {
                        return i[e].getAttribute(t)
                    }, t = {
                        x: parseFloat(t("x")),
                        y: parseFloat(t("y")),
                        width: parseFloat(t("width")),
                        height: parseFloat(t("height"))
                    };
                    a.push({rect: t, color: i[e].getAttribute("color")})
                }(e);
                n.globals.previousPaths.push(a)
            }(e);
            n.globals.axisCharts || (n.globals.previousPaths = n.globals.series)
        }
    }, {
        key: "handlePrevBubbleScatterPaths", value: function (t) {
            var e = this.w,
                i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
            if (0 < i.length) for (var a = 0; a < i.length; a++) {
                for (var s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(a, "'] circle")), o = [], r = 0; r < s.length; r++) o.push({
                    x: s[r].getAttribute("cx"),
                    y: s[r].getAttribute("cy"),
                    r: s[r].getAttribute("r")
                });
                e.globals.previousPaths.push(o)
            }
        }
    }, {
        key: "clearPreviousPaths", value: function () {
            var t = this.w;
            t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1
        }
    }, {
        key: "handleNoData", value: function () {
            var t = this.w, e = t.config.noData, i = new I(this.ctx), a = t.globals.svgWidth / 2,
                s = t.globals.svgHeight / 2, o = "middle";
            t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (a = 10, o = "start") : "right" === e.align && (a = t.globals.svgWidth - 10, o = "end"), "top" === e.verticalAlign ? s = 50 : "bottom" === e.verticalAlign && (s = t.globals.svgHeight - 50), a += e.offsetX, s = s + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text && (e = i.drawText({
                x: a,
                y: s,
                text: e.text,
                textAnchor: o,
                fontSize: e.style.fontSize,
                fontFamily: e.style.fontFamily,
                foreColor: e.style.color,
                opacity: 1,
                class: "apexcharts-text-nodata"
            }), t.globals.dom.Paper.add(e))
        }
    }, {
        key: "setNullSeriesToZeroValues", value: function (t) {
            for (var e = this.w, i = 0; i < t.length; i++) if (0 === t[i].length) for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
            return t
        }
    }, {
        key: "hasAllSeriesEqualX", value: function () {
            for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++) if (i[a][0] !== i[a + 1][0]) {
                t = !1;
                break
            }
            return e.globals.allSeriesHasEqualX = t
        }
    }, {
        key: "filteredSeriesX", value: function () {
            return this.w.globals.seriesX.map(function (t) {
                return 0 < t.length ? t : []
            })
        }
    }]), Pe), W = (o(Le, [{
        key: "initVariables", value: function (t) {
            var e = this.w;
            this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
            for (var i = 0; i < t.length; i++) if (0 < t[i].length && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric) for (var a = 0; a < t[i].length; a++) e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.barCtx.visibleItems++; else this.barCtx.visibleItems = e.globals.dataPoints;
            0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], this.barCtx.radiusOnSeriesNumber = t.length - 1, e.globals.comboCharts || this.checkZeroSeries({series: t})
        }
    }, {
        key: "initialPositions", value: function () {
            var t, e, i, a, s, o = this.w, r = o.globals.dataPoints;
            this.barCtx.isRangeBar && (r = o.globals.labels.length);
            var n, l, h, c = this.barCtx.seriesLen;
            return o.config.plotOptions.bar.rangeBarGroupRows && (c = 1), this.barCtx.isHorizontal ? (i = (e = o.globals.gridHeight / r) / c, i = (i = o.globals.isXNumeric ? (e = o.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen : i) * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, s = this.barCtx.baseLineInvertedY + o.globals.padHorizontal + (this.barCtx.isReversed ? o.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), t = (e - i * this.barCtx.seriesLen) / 2) : (l = o.globals.gridWidth / this.barCtx.visibleItems, h = (l = o.config.xaxis.convertedCatToNumeric ? o.globals.gridWidth / o.globals.dataPoints : l) / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, o.globals.isXNumeric && (n = this.barCtx.xRatio, o.config.xaxis.convertedCatToNumeric && (n = this.barCtx.initialXRatio), (h = (l = o.globals.minXDiff && .5 !== o.globals.minXDiff && 0 < o.globals.minXDiff / n ? o.globals.minXDiff / n : l) / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (h = 1)), a = o.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? o.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), n = o.globals.padHorizontal + (l - h * this.barCtx.seriesLen) / 2), {
                x: n,
                y: t,
                yDivision: e,
                xDivision: l,
                barHeight: i,
                barWidth: h,
                zeroH: a,
                zeroW: s
            }
        }
    }, {
        key: "getPathFillColor", value: function (e, i, a, t) {
            var s = this.w, o = new F(this.barCtx.ctx), r = null, n = this.barCtx.barOptions.distributed ? a : i;
            return 0 < this.barCtx.barOptions.colors.ranges.length && this.barCtx.barOptions.colors.ranges.map(function (t) {
                e[i][a] >= t.from && e[i][a] <= t.to && (r = t.color)
            }), s.config.series[i].data[a] && s.config.series[i].data[a].fillColor && (r = s.config.series[i].data[a].fillColor), o.fillPath({
                seriesNumber: this.barCtx.barOptions.distributed ? n : t,
                dataPointIndex: a,
                color: r,
                value: e[i][a]
            })
        }
    }, {
        key: "getStrokeWidth", value: function (t, e, i) {
            var a = 0, s = this.w;
            return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a
        }
    }, {
        key: "barBackground", value: function (t) {
            var e = t.j, i = t.i, a = t.x1, s = t.x2, o = t.y1, r = t.y2, n = t.elSeries, l = this.w,
                h = new I(this.barCtx.ctx), t = new O(this.barCtx.ctx).getActiveConfigSeriesIndex();
            0 < this.barCtx.barOptions.colors.backgroundBarColors.length && t === i && (e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e -= this.barCtx.barOptions.colors.backgroundBarColors.length), e = this.barCtx.barOptions.colors.backgroundBarColors[e], e = h.drawRect(void 0 !== a ? a : 0, void 0 !== o ? o : 0, void 0 !== s ? s : l.globals.gridWidth, void 0 !== r ? r : l.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, e, this.barCtx.barOptions.colors.backgroundBarOpacity), n.add(e), e.node.classList.add("apexcharts-backgroundBar"))
        }
    }, {
        key: "getColumnPaths", value: function (t) {
            var e = t.barWidth, i = t.barXPosition, a = t.yRatio, s = t.y1, o = t.y2, r = t.strokeWidth, n = t.series,
                l = t.realIndex, h = t.i, c = t.j, d = t.w, g = new I(this.barCtx.ctx);
            (r = Array.isArray(r) ? r[l] : r) || (r = 0);
            t = this.getRoundedBars(d, {
                barWidth: e,
                strokeWidth: r,
                yRatio: a,
                barXPosition: i,
                y1: s,
                y2: o
            }, n, h, c), a = i, o = i + e, n = g.move(a, s), i = g.move(a, s), e = g.line(o - r, s);
            return 0 < d.globals.previousPaths.length && (i = this.barCtx.getPreviousPath(l, c, !1)), n = n + g.line(a, t.y2) + t.pathWithRadius + g.line(o - r, t.y2) + e + e + "z", i = i + g.line(a, s) + e + e + e + e + e + g.line(a, s), d.config.chart.stacked && (this.barCtx.yArrj.push(t.y2), this.barCtx.yArrjF.push(Math.abs(s - t.y2)), this.barCtx.yArrjVal.push(this.barCtx.series[h][c])), {
                pathTo: n,
                pathFrom: i
            }
        }
    }, {
        key: "getBarpaths", value: function (t) {
            var e = t.barYPosition, i = t.barHeight, a = t.x1, s = t.x2, o = t.strokeWidth, r = t.series,
                n = t.realIndex, l = t.i, h = t.j, c = t.w, d = new I(this.barCtx.ctx);
            (o = Array.isArray(o) ? o[n] : o) || (o = 0);
            t = this.getRoundedBars(c, {
                barHeight: i,
                strokeWidth: o,
                barYPosition: e,
                x2: s,
                x1: a
            }, r, l, h), s = d.move(a, e), r = d.move(a, e);
            0 < c.globals.previousPaths.length && (r = this.barCtx.getPreviousPath(n, h, !1));
            n = e, e += i, i = d.line(a, e - o), s = s + d.line(t.x2, n) + t.pathWithRadius + d.line(t.x2, e - o) + i + i + "z", r = r + d.line(a, n) + i + i + i + i + i + d.line(a, n);
            return c.config.chart.stacked && (this.barCtx.xArrj.push(t.x2), this.barCtx.xArrjF.push(Math.abs(a - t.x2)), this.barCtx.xArrjVal.push(this.barCtx.series[l][h])), {
                pathTo: s,
                pathFrom: r
            }
        }
    }, {
        key: "getRoundedBars", value: function (t, e, i, a, s) {
            var o = new I(this.barCtx.ctx), r = 0, n = t.config.plotOptions.bar.borderRadius, l = Array.isArray(n),
                r = l ? n[a > n.length - 1 ? n.length - 1 : a] : n;
            if (t.config.chart.stacked && 1 < i.length && a !== this.barCtx.radiusOnSeriesNumber && !l && (r = 0), this.barCtx.isHorizontal) {
                var h = "", c = e.x2;
                return Math.abs(e.x1 - e.x2) < r && (r = Math.abs(e.x1 - e.x2)), void 0 === i[a][s] && null === i[a][s] || ((l = this.barCtx.isReversed ? 0 < i[a][s] : i[a][s] < 0) && (r *= -1), h = o.quadraticCurve((c -= r) + r, e.barYPosition, c + r, e.barYPosition + (l ? -1 * r : r)) + o.line(c + r, e.barYPosition + e.barHeight - e.strokeWidth - (l ? -1 * r : r)) + o.quadraticCurve(c + r, e.barYPosition + e.barHeight - e.strokeWidth, c, e.barYPosition + e.barHeight - e.strokeWidth)), {
                    pathWithRadius: h,
                    x2: c
                }
            }
            h = "", c = e.y2;
            return Math.abs(e.y1 - e.y2) < r && (r = Math.abs(e.y1 - e.y2)), void 0 === i[a][s] && null === i[a][s] || ((s = i[a][s] < 0) && (r *= -1), h = o.quadraticCurve(e.barXPosition, (c += r) - r, e.barXPosition + (s ? -1 * r : r), c - r) + o.line(e.barXPosition + e.barWidth - e.strokeWidth - (s ? -1 * r : r), c - r) + o.quadraticCurve(e.barXPosition + e.barWidth - e.strokeWidth, c - r, e.barXPosition + e.barWidth - e.strokeWidth, c)), {
                pathWithRadius: h,
                y2: c
            }
        }
    }, {
        key: "checkZeroSeries", value: function (t) {
            for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
                for (var s = 0, o = 0; o < e[i.globals.maxValsInArrayIndex].length; o++) s += e[a][o];
                0 === s && this.barCtx.zeroSerieses.push(a)
            }
            for (var r = e.length - 1; 0 <= r; r--) -1 < this.barCtx.zeroSerieses.indexOf(r) && r === this.radiusOnSeriesNumber && --this.barCtx.radiusOnSeriesNumber;
            for (var n = e.length - 1; 0 <= n; n--) -1 < i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber) && --this.barCtx.radiusOnSeriesNumber
        }
    }, {
        key: "getXForValue", value: function (t, e) {
            var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2] ? e : null;
            return i = null != t ? e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0) : i
        }
    }, {
        key: "getYForValue", value: function (t, e) {
            var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2] ? e : null;
            return i = null != t ? e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0) : i
        }
    }, {
        key: "getGoalValues", value: function (i, a, s, t, e) {
            var o = this, r = this.w, n = [];
            return r.globals.seriesGoals[t] && r.globals.seriesGoals[t][e] && Array.isArray(r.globals.seriesGoals[t][e]) && r.globals.seriesGoals[t][e].forEach(function (t) {
                var e;
                n.push((l(e = {}, i, "x" === i ? o.getXForValue(t.value, a, !1) : o.getYForValue(t.value, s, !1)), l(e, "attrs", t), e))
            }), n
        }
    }, {
        key: "drawGoalLine", value: function (t) {
            var a = t.barXPosition, s = t.barYPosition, e = t.goalX, i = t.goalY, o = t.barWidth, r = t.barHeight,
                n = new I(this.barCtx.ctx), l = n.group({className: "apexcharts-bar-goals-groups"}), h = null;
            return this.barCtx.isHorizontal ? Array.isArray(e) && e.forEach(function (t) {
                var e = void 0 !== t.attrs.strokeHeight ? t.attrs.strokeHeight : r / 2, i = s + e + r / 2;
                h = n.drawLine(t.x, i - 2 * e, t.x, i, t.attrs.strokeColor || void 0, t.attrs.strokeDashArray, t.attrs.strokeWidth || 2, t.attrs.strokeLineCap), l.add(h)
            }) : Array.isArray(i) && i.forEach(function (t) {
                var e = void 0 !== t.attrs.strokeWidth ? t.attrs.strokeWidth : o / 2, i = a + e + o / 2;
                h = n.drawLine(i - 2 * e, t.y, i, t.y, t.attrs.strokeColor || void 0, t.attrs.strokeDashArray, t.attrs.strokeHeight || 2, t.attrs.strokeLineCap), l.add(h)
            }), l
        }
    }]), Le), B = (o(Ce, [{
        key: "draw", value: function (t, e) {
            var i = this.w, a = new I(this.ctx), s = new P(this.ctx, i);
            t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
            var o = a.group({class: "apexcharts-bar-series apexcharts-plot-series"});
            i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
            for (var r = 0, n = 0; r < t.length; r++, n++) {
                var l = void 0, h = void 0, c = [], d = [], g = i.globals.comboCharts ? e[r] : r, u = a.group({
                    class: "apexcharts-series",
                    rel: r + 1,
                    seriesName: T.escapeString(i.globals.seriesNames[g]),
                    "data:realIndex": g
                });
                this.ctx.series.addCollapsedClassToSeries(u, g), 0 < t[r].length && (this.visibleI = this.visibleI + 1);
                var p = 0, f = 0;
                1 < this.yRatio.length && (this.yaxisIndex = g), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                var x = this.barHelpers.initialPositions(), h = x.y, p = x.barHeight, b = x.yDivision, m = x.zeroW,
                    l = x.x, f = x.barWidth, v = x.xDivision, y = x.zeroH;
                this.horizontal || d.push(l + f / 2);
                for (var w = a.group({
                    class: "apexcharts-datalabels",
                    "data:realIndex": g
                }), k = a.group({
                    class: "apexcharts-bar-goals-markers",
                    style: "pointer-events: none"
                }), A = 0; A < i.globals.dataPoints; A++) {
                    var S = this.barHelpers.getStrokeWidth(r, A, g), C = null,
                        L = {indexes: {i: r, j: A, realIndex: g, bc: n}, x: l, y: h, strokeWidth: S, elSeries: u};
                    this.isHorizontal ? (C = this.drawBarPaths(M(M({}, L), {}, {
                        barHeight: p,
                        zeroW: m,
                        yDivision: b
                    })), f = this.series[r][A] / this.invertedYRatio) : (C = this.drawColumnPaths(M(M({}, L), {}, {
                        xDivision: v,
                        barWidth: f,
                        zeroH: y
                    })), p = this.series[r][A] / this.yRatio[this.yaxisIndex]);
                    L = this.barHelpers.drawGoalLine({
                        barXPosition: C.barXPosition,
                        barYPosition: C.barYPosition,
                        goalX: C.goalX,
                        goalY: C.goalY,
                        barHeight: p,
                        barWidth: f
                    });
                    L && k.add(L), h = C.y, l = C.x, 0 < A && d.push(l + f / 2), c.push(h);
                    L = this.barHelpers.getPathFillColor(t, r, A, g);
                    this.renderSeries({
                        realIndex: g,
                        pathFill: L,
                        j: A,
                        i: r,
                        pathFrom: C.pathFrom,
                        pathTo: C.pathTo,
                        strokeWidth: S,
                        elSeries: u,
                        x: l,
                        y: h,
                        series: t,
                        barHeight: p,
                        barWidth: f,
                        elDataLabelsWrap: w,
                        elGoalsMarkers: k,
                        visibleSeries: this.visibleI,
                        type: "bar"
                    })
                }
                i.globals.seriesXvalues[g] = d, i.globals.seriesYvalues[g] = c, o.add(u)
            }
            return o
        }
    }, {
        key: "renderSeries", value: function (t) {
            var e = t.realIndex, i = t.pathFill, a = t.lineFill, s = t.j, o = t.i, r = t.pathFrom, n = t.pathTo,
                l = t.strokeWidth, h = t.elSeries, c = t.x, d = t.y, g = t.y1, u = t.y2, p = t.series, f = t.barHeight,
                x = t.barWidth, b = t.barYPosition, m = t.elDataLabelsWrap, v = t.elGoalsMarkers, y = t.visibleSeries,
                w = t.type, k = this.w, A = new I(this.ctx),
                a = a || (this.barOptions.distributed ? k.globals.stroke.colors[s] : k.globals.stroke.colors[e]);
            k.config.series[o].data[s] && k.config.series[o].data[s].strokeColor && (a = k.config.series[o].data[s].strokeColor), this.isNullValue && (i = "none");
            t = s / k.config.chart.animations.animateGradually.delay * (k.config.chart.animations.speed / k.globals.dataPoints) / 2.4, t = A.renderPaths({
                i: o,
                j: s,
                realIndex: e,
                pathFrom: r,
                pathTo: n,
                stroke: a,
                strokeWidth: l,
                strokeLineCap: k.config.stroke.lineCap,
                fill: i,
                animationDelay: t,
                initialSpeed: k.config.chart.animations.speed,
                dataChangeSpeed: k.config.chart.animations.dynamicAnimation.speed,
                className: "apexcharts-".concat(w, "-area")
            });
            t.attr("clip-path", "url(#gridRectMask".concat(k.globals.cuid, ")"));
            w = k.config.forecastDataPoints;
            0 < w.count && s >= k.globals.dataPoints - w.count && (t.node.setAttribute("stroke-dasharray", w.dashArray), t.node.setAttribute("stroke-width", w.strokeWidth), t.node.setAttribute("fill-opacity", w.fillOpacity)), void 0 !== g && void 0 !== u && (t.attr("data-range-y1", g), t.attr("data-range-y2", u)), new C(this.ctx).setSelectionFilter(t, e, s), h.add(t);
            y = new N(this).handleBarDataLabels({
                x: c,
                y: d,
                y1: g,
                y2: u,
                i: o,
                j: s,
                series: p,
                realIndex: e,
                barHeight: f,
                barWidth: x,
                barYPosition: b,
                renderedPath: t,
                visibleSeries: y
            });
            return null !== y && m.add(y), h.add(m), v && h.add(v), h
        }
    }, {
        key: "drawBarPaths", value: function (t) {
            var e = t.indexes, i = t.barHeight, a = t.strokeWidth, s = t.zeroW, o = (t.x, t.y), r = t.yDivision,
                n = t.elSeries, l = this.w, h = e.i, c = e.j,
                t = (o = l.globals.isXNumeric ? (l.globals.seriesX[h][c] - l.globals.minX) / this.invertedXRatio - i : o) + i * this.visibleI,
                d = this.barHelpers.getXForValue(this.series[h][c], s), e = this.barHelpers.getBarpaths({
                    barYPosition: t,
                    barHeight: i,
                    x1: s,
                    x2: d,
                    strokeWidth: a,
                    series: this.series,
                    realIndex: e.realIndex,
                    i: h,
                    j: c,
                    w: l
                });
            return l.globals.isXNumeric || (o += r), this.barHelpers.barBackground({
                j: c,
                i: h,
                y1: t - i * this.visibleI,
                y2: i * this.seriesLen,
                elSeries: n
            }), {
                pathTo: e.pathTo,
                pathFrom: e.pathFrom,
                x: d,
                y: o,
                goalX: this.barHelpers.getGoalValues("x", s, null, h, c),
                barYPosition: t
            }
        }
    }, {
        key: "drawColumnPaths", value: function (t) {
            var e = t.indexes, i = t.x, a = (t.y, t.xDivision), s = t.barWidth, o = t.zeroH, r = t.strokeWidth,
                n = t.elSeries, l = this.w, h = e.realIndex, c = e.i, d = e.j, t = e.bc;
            l.globals.isXNumeric && (l.globals.seriesX[g = h].length || (g = l.globals.maxValsInArrayIndex), i = (l.globals.seriesX[g][d] - l.globals.minX) / this.xRatio - s * this.seriesLen / 2);
            var g = i + s * this.visibleI, u = this.barHelpers.getYForValue(this.series[c][d], o),
                e = this.barHelpers.getColumnPaths({
                    barXPosition: g,
                    barWidth: s,
                    y1: o,
                    y2: u,
                    strokeWidth: r,
                    series: this.series,
                    realIndex: e.realIndex,
                    i: c,
                    j: d,
                    w: l
                });
            return l.globals.isXNumeric || (i += a), this.barHelpers.barBackground({
                bc: t,
                j: d,
                i: c,
                x1: g - r / 2 - s * this.visibleI,
                x2: s * this.seriesLen + r / 2,
                elSeries: n
            }), {
                pathTo: e.pathTo,
                pathFrom: e.pathFrom,
                x: i,
                y: u,
                goalY: this.barHelpers.getGoalValues("y", null, o, c, d),
                barXPosition: g
            }
        }
    }, {
        key: "getPreviousPath", value: function (t, e) {
            for (var i, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) {
                var o = a.globals.previousPaths[s];
                o.paths && 0 < o.paths.length && parseInt(o.realIndex, 10) === parseInt(t, 10) && void 0 !== a.globals.previousPaths[s].paths[e] && (i = a.globals.previousPaths[s].paths[e].d)
            }
            return i
        }
    }]), Ce), V = (o(Se, [{
        key: "isValidDate", value: function (t) {
            return !isNaN(this.parseDate(t))
        }
    }, {
        key: "getTimeStamp", value: function (t) {
            return Date.parse(t) ? (this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)) : new Date(t)).getTime() : t
        }
    }, {
        key: "getDate", value: function (t) {
            return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t)
        }
    }, {
        key: "parseDate", value: function (t) {
            var e = Date.parse(t);
            if (!isNaN(e)) return this.getTimeStamp(t);
            t = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
            return this.getTimeStamp(t)
        }
    }, {
        key: "parseDateWithTimezone", value: function (t) {
            return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "))
        }
    }, {
        key: "formatDate", value: function (t, e) {
            var i = this.w.globals.locale, a = this.w.config.xaxis.labels.datetimeUTC, s = ["\0"].concat(g(i.months)),
                o = [""].concat(g(i.shortMonths)), r = [""].concat(g(i.days)), n = [""].concat(g(i.shortDays));

            function l(t, e) {
                var i = t + "";
                for (e = e || 2; i.length < e;) i = "0" + i;
                return i
            }

            var h = a ? t.getUTCFullYear() : t.getFullYear();
            e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + h)).replace(/(^|[^\\])yy/g, "$1" + h.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h);
            var c = (a ? t.getUTCMonth() : t.getMonth()) + 1;
            e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + o[0])).replace(/(^|[^\\])MM/g, "$1" + l(c))).replace(/(^|[^\\])M/g, "$1" + c);
            var d = a ? t.getUTCDate() : t.getDate();
            e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + r[0])).replace(/(^|[^\\])ddd/g, "$1" + n[0])).replace(/(^|[^\\])dd/g, "$1" + l(d))).replace(/(^|[^\\])d/g, "$1" + d);
            i = a ? t.getUTCHours() : t.getHours(), h = 12 < i ? i - 12 : 0 === i ? 12 : i;
            e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + l(i))).replace(/(^|[^\\])H/g, "$1" + i)).replace(/(^|[^\\])hh+/g, "$1" + l(h))).replace(/(^|[^\\])h/g, "$1" + h);
            d = a ? t.getUTCMinutes() : t.getMinutes();
            e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + l(d))).replace(/(^|[^\\])m/g, "$1" + d);
            h = a ? t.getUTCSeconds() : t.getSeconds();
            e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + l(h))).replace(/(^|[^\\])s/g, "$1" + h);
            d = a ? t.getUTCMilliseconds() : t.getMilliseconds();
            e = e.replace(/(^|[^\\])fff+/g, "$1" + l(d, 3)), d = Math.round(d / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + l(d));
            d = Math.round(d / 10), h = i < 12 ? "AM" : "PM";
            e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + d)).replace(/(^|[^\\])TT+/g, "$1" + h)).replace(/(^|[^\\])T/g, "$1" + h.charAt(0));
            i = h.toLowerCase();
            e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + i)).replace(/(^|[^\\])t/g, "$1" + i.charAt(0));
            d = -t.getTimezoneOffset(), h = a || !d ? "Z" : 0 < d ? "+" : "-";
            a || (i = (d = Math.abs(d)) % 60, h += l(Math.floor(d / 60)) + ":" + l(i)), e = e.replace(/(^|[^\\])K/g, "$1" + h);
            t = (a ? t.getUTCDay() : t.getDay()) + 1;
            return (e = (e = (e = (e = e.replace(new RegExp(r[0], "g"), r[t])).replace(new RegExp(n[0], "g"), n[t])).replace(new RegExp(s[0], "g"), s[c])).replace(new RegExp(o[0], "g"), o[c])).replace(/\\(.)/g, "$1")
        }
    }, {
        key: "getTimeUnitsfromTimestamp", value: function (t, e, i) {
            var a = this.w;
            void 0 !== a.config.xaxis.min && (t = a.config.xaxis.min), void 0 !== a.config.xaxis.max && (e = a.config.xaxis.max);
            t = this.getDate(t), e = this.getDate(e), t = this.formatDate(t, "yyyy MM dd HH mm ss fff").split(" "), e = this.formatDate(e, "yyyy MM dd HH mm ss fff").split(" ");
            return {
                minMillisecond: parseInt(t[6], 10),
                maxMillisecond: parseInt(e[6], 10),
                minSecond: parseInt(t[5], 10),
                maxSecond: parseInt(e[5], 10),
                minMinute: parseInt(t[4], 10),
                maxMinute: parseInt(e[4], 10),
                minHour: parseInt(t[3], 10),
                maxHour: parseInt(e[3], 10),
                minDate: parseInt(t[2], 10),
                maxDate: parseInt(e[2], 10),
                minMonth: parseInt(t[1], 10) - 1,
                maxMonth: parseInt(e[1], 10) - 1,
                minYear: parseInt(t[0], 10),
                maxYear: parseInt(e[0], 10)
            }
        }
    }, {
        key: "isLeapYear", value: function (t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }
    }, {
        key: "calculcateLastDaysOfMonth", value: function (t, e, i) {
            return this.determineDaysOfMonths(t, e) - i
        }
    }, {
        key: "determineDaysOfYear", value: function (t) {
            var e = 365;
            return e = this.isLeapYear(t) ? 366 : e
        }
    }, {
        key: "determineRemainingDaysOfYear", value: function (t, e, i) {
            i = this.daysCntOfYear[e] + i;
            return 1 < e && this.isLeapYear() && i++, i
        }
    }, {
        key: "determineDaysOfMonths", value: function (t, e) {
            var i = 30;
            return t = T.monthMod(t), !0 == -1 < this.months30.indexOf(t) ? 2 === t && (i = this.isLeapYear(e) ? 29 : 28) : (this.months31.indexOf(t), i = 31), i
        }
    }]), Se), G = function () {
        n(e, B);
        var t = c(e);

        function e() {
            return s(this, e), t.apply(this, arguments)
        }

        return o(e, [{
            key: "draw", value: function (t, e) {
                var i = this.w, a = new I(this.ctx);
                this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.barHelpers.initVariables(t);
                for (var s = a.group({class: "apexcharts-rangebar-series apexcharts-plot-series"}), o = 0; o < t.length; o++) {
                    var r, n = void 0, l = void 0, h = i.globals.comboCharts ? e[o] : o, c = a.group({
                        class: "apexcharts-series",
                        seriesName: T.escapeString(i.globals.seriesNames[h]),
                        rel: o + 1,
                        "data:realIndex": h
                    });
                    this.ctx.series.addCollapsedClassToSeries(c, h), 0 < t[o].length && (this.visibleI = this.visibleI + 1);
                    var d = 0, g = 0;
                    1 < this.yRatio.length && (this.yaxisIndex = h);
                    var u = this.barHelpers.initialPositions();
                    l = u.y, r = u.zeroW, n = u.x;
                    for (var g = u.barWidth, p = u.xDivision, f = u.zeroH, x = a.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": h
                    }), b = a.group({
                        class: "apexcharts-rangebar-goals-markers",
                        style: "pointer-events: none"
                    }), m = 0; m < i.globals.dataPoints; m++) {
                        var v = this.barHelpers.getStrokeWidth(o, m, h), y = this.seriesRangeStart[o][m],
                            w = this.seriesRangeEnd[o][m], k = null, A = null,
                            S = {x: n, y: l, strokeWidth: v, elSeries: c}, C = u.yDivision;
                        if (d = u.barHeight, this.isHorizontal) {
                            A = l + d * this.visibleI;
                            var L = this.seriesLen,
                                L = (C - d * (L = i.config.plotOptions.bar.rangeBarGroupRows ? 1 : L)) / 2;
                            if (void 0 === i.config.series[o].data[m]) break;
                            i.config.series[o].data[m].x && (d = (P = this.detectOverlappingBars({
                                i: o,
                                j: m,
                                barYPosition: A,
                                srty: L,
                                barHeight: d,
                                yDivision: C,
                                initPositions: u
                            })).barHeight, A = P.barYPosition), g = (k = this.drawRangeBarPaths(M({
                                indexes: {
                                    i: o,
                                    j: m,
                                    realIndex: h
                                }, barHeight: d, barYPosition: A, zeroW: r, yDivision: C, y1: y, y2: w
                            }, S))).barWidth
                        } else d = (k = this.drawRangeColumnPaths(M({
                            indexes: {i: o, j: m, realIndex: h},
                            zeroH: f,
                            barWidth: g,
                            xDivision: p
                        }, S))).barHeight;
                        var P = this.barHelpers.drawGoalLine({
                            barXPosition: k.barXPosition,
                            barYPosition: A,
                            goalX: k.goalX,
                            goalY: k.goalY,
                            barHeight: d,
                            barWidth: g
                        });
                        P && b.add(P);
                        l = k.y, n = k.x, S = this.barHelpers.getPathFillColor(t, o, m, h), P = i.globals.stroke.colors[h];
                        this.renderSeries({
                            realIndex: h,
                            pathFill: S,
                            lineFill: P,
                            j: m,
                            i: o,
                            x: n,
                            y: l,
                            y1: y,
                            y2: w,
                            pathFrom: k.pathFrom,
                            pathTo: k.pathTo,
                            strokeWidth: v,
                            elSeries: c,
                            series: t,
                            barHeight: d,
                            barYPosition: A,
                            barWidth: g,
                            elDataLabelsWrap: x,
                            elGoalsMarkers: b,
                            visibleSeries: this.visibleI,
                            type: "rangebar"
                        })
                    }
                    s.add(c)
                }
                return s
            }
        }, {
            key: "detectOverlappingBars", value: function (t) {
                var e = t.i, i = t.j, a = t.barYPosition, s = t.srty, o = t.barHeight, r = t.yDivision,
                    n = t.initPositions, l = this.w, h = [], c = l.config.series[e].data[i].rangeName,
                    d = l.config.series[e].data[i].x, t = l.globals.labels.indexOf(d),
                    i = l.globals.seriesRangeBar[e].findIndex(function (t) {
                        return t.x === d && 0 < t.overlaps.length
                    }), a = l.config.plotOptions.bar.rangeBarGroupRows ? s + r * t : s + o * this.visibleI + r * t;
                return {
                    barYPosition: a = -1 < i && !l.config.plotOptions.bar.rangeBarOverlap && -1 < (h = l.globals.seriesRangeBar[e][i].overlaps).indexOf(c) ? (o = n.barHeight / h.length) * this.visibleI + r * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + o * (this.visibleI + h.indexOf(c)) + r * t : a,
                    barHeight: o
                }
            }
        }, {
            key: "drawRangeColumnPaths", value: function (t) {
                var e = t.indexes, i = t.x;
                t.strokeWidth;
                var a = t.xDivision, s = t.barWidth, o = t.zeroH, r = this.w, n = e.i, l = e.j,
                    h = this.yRatio[this.yaxisIndex], c = e.realIndex, d = this.getRangeValue(c, l),
                    g = Math.min(d.start, d.end), t = Math.max(d.start, d.end),
                    d = (i = r.globals.isXNumeric ? (r.globals.seriesX[n][l] - r.globals.minX) / this.xRatio - s / 2 : i) + s * this.visibleI;
                void 0 === this.series[n][l] || null === this.series[n][l] ? g = o : (g = o - g / h, t = o - t / h);
                h = Math.abs(t - g), c = this.barHelpers.getColumnPaths({
                    barXPosition: d,
                    barWidth: s,
                    y1: g,
                    y2: t,
                    strokeWidth: this.strokeWidth,
                    series: this.seriesRangeEnd,
                    realIndex: e.realIndex,
                    i: c,
                    j: l,
                    w: r
                });
                return r.globals.isXNumeric || (i += a), {
                    pathTo: c.pathTo,
                    pathFrom: c.pathFrom,
                    barHeight: h,
                    x: i,
                    y: t,
                    goalY: this.barHelpers.getGoalValues("y", null, o, n, l),
                    barXPosition: d
                }
            }
        }, {
            key: "drawRangeBarPaths", value: function (t) {
                var e = t.indexes, i = t.y, a = t.y1, s = t.y2, o = t.yDivision, r = t.barHeight, n = t.barYPosition,
                    l = t.zeroW, h = this.w, t = l + a / this.invertedYRatio, a = l + s / this.invertedYRatio,
                    s = Math.abs(a - t), t = this.barHelpers.getBarpaths({
                        barYPosition: n,
                        barHeight: r,
                        x1: t,
                        x2: a,
                        strokeWidth: this.strokeWidth,
                        series: this.seriesRangeEnd,
                        i: e.realIndex,
                        realIndex: e.realIndex,
                        j: e.j,
                        w: h
                    });
                return h.globals.isXNumeric || (i += o), {
                    pathTo: t.pathTo,
                    pathFrom: t.pathFrom,
                    barWidth: s,
                    x: a,
                    goalX: this.barHelpers.getGoalValues("x", l, null, e.realIndex, e.j),
                    y: i
                }
            }
        }, {
            key: "getRangeValue", value: function (t, e) {
                var i = this.w;
                return {start: i.globals.seriesRangeStart[t][e], end: i.globals.seriesRangeEnd[t][e]}
            }
        }, {
            key: "getTooltipValues", value: function (t) {
                var e = t.ctx, i = t.seriesIndex, a = t.dataPointIndex, s = t.y1, o = t.y2, r = t.w,
                    n = r.globals.seriesRangeStart[i][a], l = r.globals.seriesRangeEnd[i][a], h = r.globals.labels[a],
                    c = r.config.series[i].name || "", d = r.config.tooltip.y.formatter,
                    g = r.config.tooltip.y.title.formatter,
                    t = {w: r, seriesIndex: i, dataPointIndex: a, start: n, end: l};
                "function" == typeof g && (c = g(c, t)), Number.isFinite(s) && Number.isFinite(o) && (n = s, l = o, r.config.series[i].data[a].x && (h = r.config.series[i].data[a].x + ":"), "function" == typeof d && (h = d(h, t)));
                d = "", t = "", i = r.globals.colors[i];
                return t = void 0 === r.config.tooltip.x.formatter ? "datetime" === r.config.xaxis.type ? (d = (e = new V(e)).formatDate(e.getDate(n), r.config.tooltip.x.format), e.formatDate(e.getDate(l), r.config.tooltip.x.format)) : (d = n, l) : (d = r.config.tooltip.x.formatter(n), r.config.tooltip.x.formatter(l)), {
                    start: n,
                    end: l,
                    startVal: d,
                    endVal: t,
                    ylabel: h,
                    color: i,
                    seriesName: c
                }
            }
        }, {
            key: "buildCustomTooltipHTML", value: function (t) {
                return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + t.color + '">' + (t.seriesName || "") + '</span></div><div> <span class="category">' + t.ylabel + ' </span> <span class="value start-value">' + t.start + '</span> <span class="separator">-</span> <span class="value end-value">' + t.end + "</span></div></div>"
            }
        }]), e
    }(), _ = (o(Ae, [{
        key: "line", value: function () {
            return {
                chart: {animations: {easing: "swing"}},
                dataLabels: {enabled: !1},
                stroke: {width: 5, curve: "straight"},
                markers: {size: 0, hover: {sizeOffset: 6}},
                xaxis: {crosshairs: {width: 1}}
            }
        }
    }, {
        key: "sparkline", value: function (t) {
            return this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0, T.extend(t, {
                grid: {
                    show: !1,
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                legend: {show: !1},
                xaxis: {labels: {show: !1}, tooltip: {enabled: !1}, axisBorder: {show: !1}, axisTicks: {show: !1}},
                chart: {toolbar: {show: !1}, zoom: {enabled: !1}},
                dataLabels: {enabled: !1}
            })
        }
    }, {
        key: "bar", value: function () {
            return {
                chart: {stacked: !1, animations: {easing: "swing"}},
                plotOptions: {bar: {dataLabels: {position: "center"}}},
                dataLabels: {style: {colors: ["#fff"]}, background: {enabled: !1}},
                stroke: {width: 0, lineCap: "round"},
                fill: {opacity: .85},
                legend: {markers: {shape: "square", radius: 2, size: 8}},
                tooltip: {shared: !1, intersect: !0},
                xaxis: {
                    tooltip: {enabled: !1},
                    tickPlacement: "between",
                    crosshairs: {
                        width: "barWidth",
                        position: "back",
                        fill: {type: "gradient"},
                        dropShadow: {enabled: !1},
                        stroke: {width: 0}
                    }
                }
            }
        }
    }, {
        key: "candlestick", value: function () {
            var a = this;
            return {
                stroke: {width: 1, colors: ["#333"]},
                fill: {opacity: 1},
                dataLabels: {enabled: !1},
                tooltip: {
                    shared: !0, custom: function (t) {
                        var e = t.seriesIndex, i = t.dataPointIndex, t = t.w;
                        return a._getBoxTooltip(t, e, i, ["Open", "High", "", "Low", "Close"], "candlestick")
                    }
                },
                states: {active: {filter: {type: "none"}}},
                xaxis: {crosshairs: {width: 1}}
            }
        }
    }, {
        key: "boxPlot", value: function () {
            var a = this;
            return {
                chart: {animations: {dynamicAnimation: {enabled: !1}}},
                stroke: {width: 1, colors: ["#24292e"]},
                dataLabels: {enabled: !1},
                tooltip: {
                    shared: !0, custom: function (t) {
                        var e = t.seriesIndex, i = t.dataPointIndex, t = t.w;
                        return a._getBoxTooltip(t, e, i, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot")
                    }
                },
                markers: {size: 5, strokeWidth: 1, strokeColors: "#111"},
                xaxis: {crosshairs: {width: 1}}
            }
        }
    }, {
        key: "rangeBar", value: function () {
            return {
                stroke: {width: 0, lineCap: "square"},
                plotOptions: {bar: {borderRadius: 0, dataLabels: {position: "center"}}},
                dataLabels: {
                    enabled: !1, formatter: function (t, e) {
                        e.ctx;
                        var i = e.seriesIndex, a = e.dataPointIndex, s = e.w, e = s.globals.seriesRangeStart[i][a];
                        return s.globals.seriesRangeEnd[i][a] - e
                    }, background: {enabled: !1}, style: {colors: ["#fff"]}
                },
                tooltip: {
                    shared: !1, followCursor: !0, custom: function (t) {
                        return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? (i = new G((e = t).ctx, null), a = i.getTooltipValues(e), s = a.color, o = a.seriesName, r = a.ylabel, e = a.startVal, a = a.endVal, i.buildCustomTooltipHTML({
                            color: s,
                            seriesName: o,
                            ylabel: r,
                            start: e,
                            end: a
                        })) : (o = new G((s = t).ctx, null), r = o.getTooltipValues(s), e = r.color, a = r.seriesName, t = r.ylabel, s = r.start, r = r.end, o.buildCustomTooltipHTML({
                            color: e,
                            seriesName: a,
                            ylabel: t,
                            start: s,
                            end: r
                        }));
                        var e, i, a, s, o, r
                    }
                },
                xaxis: {tickPlacement: "between", tooltip: {enabled: !1}, crosshairs: {stroke: {width: 0}}}
            }
        }
    }, {
        key: "area", value: function () {
            return {
                stroke: {width: 4},
                fill: {
                    type: "gradient",
                    gradient: {
                        inverseColors: !1,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: .65,
                        opacityTo: .5,
                        stops: [0, 100, 100]
                    }
                },
                markers: {size: 0, hover: {sizeOffset: 6}},
                tooltip: {followCursor: !1}
            }
        }
    }, {
        key: "brush", value: function (t) {
            return T.extend(t, {
                chart: {toolbar: {autoSelected: "selection", show: !1}, zoom: {enabled: !1}},
                dataLabels: {enabled: !1},
                stroke: {width: 1},
                tooltip: {enabled: !1},
                xaxis: {tooltip: {enabled: !1}}
            })
        }
    }, {
        key: "stacked100", value: function (i) {
            i.dataLabels = i.dataLabels || {}, i.dataLabels.formatter = i.dataLabels.formatter || void 0;
            var t = i.dataLabels.formatter;
            return i.yaxis.forEach(function (t, e) {
                i.yaxis[e].min = 0, i.yaxis[e].max = 100
            }), "bar" === i.chart.type && (i.dataLabels.formatter = t || function (t) {
                return "number" == typeof t && t ? t.toFixed(0) + "%" : t
            }), i
        }
    }, {
        key: "convertCatToNumeric", value: function (t) {
            return t.xaxis.convertedCatToNumeric = !0, t
        }
    }, {
        key: "convertCatToNumericXaxis", value: function (t, e, i) {
            t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function (t) {
                return T.isNumber(t) ? Math.floor(t) : t
            };
            var a = t.xaxis.labels.formatter,
                s = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
            return (s = i && i.length ? i.map(function (t) {
                return Array.isArray(t) ? t : String(t)
            }) : s) && s.length && (t.xaxis.labels.formatter = function (t) {
                return T.isNumber(t) ? a(s[Math.floor(t) - 1]) : a(t)
            }), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t
        }
    }, {
        key: "bubble", value: function () {
            return {
                dataLabels: {style: {colors: ["#fff"]}},
                tooltip: {shared: !1, intersect: !0},
                xaxis: {crosshairs: {width: 0}},
                fill: {
                    type: "solid",
                    gradient: {shade: "light", inverse: !0, shadeIntensity: .55, opacityFrom: .4, opacityTo: .8}
                }
            }
        }
    }, {
        key: "scatter", value: function () {
            return {
                dataLabels: {enabled: !1},
                tooltip: {shared: !1, intersect: !0},
                markers: {size: 6, strokeWidth: 1, hover: {sizeOffset: 2}}
            }
        }
    }, {
        key: "heatmap", value: function () {
            return {
                chart: {stacked: !1},
                fill: {opacity: 1},
                dataLabels: {style: {colors: ["#fff"]}},
                stroke: {colors: ["#fff"]},
                tooltip: {followCursor: !0, marker: {show: !1}, x: {show: !1}},
                legend: {position: "top", markers: {shape: "square", size: 10, offsetY: 2}},
                grid: {padding: {right: 20}}
            }
        }
    }, {
        key: "treemap", value: function () {
            return {
                chart: {zoom: {enabled: !1}},
                dataLabels: {style: {fontSize: 14, fontWeight: 600, colors: ["#fff"]}},
                stroke: {show: !0, width: 2, colors: ["#fff"]},
                legend: {show: !1},
                fill: {gradient: {stops: [0, 100]}},
                tooltip: {followCursor: !0, x: {show: !1}},
                grid: {padding: {left: 0, right: 0}},
                xaxis: {crosshairs: {show: !1}, tooltip: {enabled: !1}}
            }
        }
    }, {
        key: "pie", value: function () {
            return {
                chart: {toolbar: {show: !1}},
                plotOptions: {pie: {donut: {labels: {show: !1}}}},
                dataLabels: {
                    formatter: function (t) {
                        return t.toFixed(1) + "%"
                    }, style: {colors: ["#fff"]}, background: {enabled: !1}, dropShadow: {enabled: !0}
                },
                stroke: {colors: ["#fff"]},
                fill: {opacity: 1, gradient: {shade: "light", stops: [0, 100]}},
                tooltip: {theme: "dark", fillSeriesColor: !0},
                legend: {position: "right"}
            }
        }
    }, {
        key: "donut", value: function () {
            return {
                chart: {toolbar: {show: !1}},
                dataLabels: {
                    formatter: function (t) {
                        return t.toFixed(1) + "%"
                    }, style: {colors: ["#fff"]}, background: {enabled: !1}, dropShadow: {enabled: !0}
                },
                stroke: {colors: ["#fff"]},
                fill: {
                    opacity: 1,
                    gradient: {shade: "light", shadeIntensity: .35, stops: [80, 100], opacityFrom: 1, opacityTo: 1}
                },
                tooltip: {theme: "dark", fillSeriesColor: !0},
                legend: {position: "right"}
            }
        }
    }, {
        key: "polarArea", value: function () {
            return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount || 6, {
                chart: {toolbar: {show: !1}},
                dataLabels: {
                    formatter: function (t) {
                        return t.toFixed(1) + "%"
                    }, enabled: !1
                },
                stroke: {show: !0, width: 2},
                fill: {opacity: .7},
                tooltip: {theme: "dark", fillSeriesColor: !0},
                legend: {position: "right"}
            }
        }
    }, {
        key: "radar", value: function () {
            return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY || 6, {
                dataLabels: {
                    enabled: !1,
                    style: {fontSize: "11px"}
                },
                stroke: {width: 2},
                markers: {size: 3, strokeWidth: 1, strokeOpacity: 1},
                fill: {opacity: .2},
                tooltip: {shared: !1, intersect: !0, followCursor: !0},
                grid: {show: !1},
                xaxis: {
                    labels: {
                        formatter: function (t) {
                            return t
                        }, style: {colors: ["#a8a8a8"], fontSize: "11px"}
                    }, tooltip: {enabled: !1}, crosshairs: {show: !1}
                }
            }
        }
    }, {
        key: "radialBar", value: function () {
            return {
                chart: {animations: {dynamicAnimation: {enabled: !0, speed: 800}}, toolbar: {show: !1}},
                fill: {
                    gradient: {
                        shade: "dark",
                        shadeIntensity: .4,
                        inverseColors: !1,
                        type: "diagonal2",
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [70, 98, 100]
                    }
                },
                legend: {show: !1, position: "right"},
                tooltip: {enabled: !1, fillSeriesColor: !0}
            }
        }
    }, {
        key: "_getBoxTooltip", value: function (t, e, i, a, s) {
            var o = t.globals.seriesCandleO[e][i], r = t.globals.seriesCandleH[e][i], n = t.globals.seriesCandleM[e][i],
                l = t.globals.seriesCandleL[e][i], h = t.globals.seriesCandleC[e][i];
            return t.config.series[e].type && t.config.series[e].type !== s ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name || "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(a[0], ': <span class="value">') + o + "</span></div>" + "<div>".concat(a[1], ': <span class="value">') + r + "</span></div>" + (n ? "<div>".concat(a[2], ': <span class="value">') + n + "</span></div>" : "") + "<div>".concat(a[3], ': <span class="value">') + l + "</span></div>" + "<div>".concat(a[4], ': <span class="value">') + h + "</span></div></div>"
        }
    }]), Ae), j = (o(ke, [{
        key: "init", value: function (t) {
            var e = t.responsiveOverride, i = this.opts, a = new E, s = new _(i);
            this.chartType = i.chart.type, "histogram" === this.chartType && (i.chart.type = "bar", i = T.extend({plotOptions: {bar: {columnWidth: "99.99%"}}}, i)), i = this.extendYAxis(i);
            var i = this.extendAnnotations(i), o = a.init(), t = {};
            i && "object" === v(i) && (a = {}, a = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "histogram", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) ? s[i.chart.type]() : s.line(), i.chart.brush && i.chart.brush.enabled && (a = s.brush(a)), i.chart.stacked && "100%" === i.chart.stackType && (i = s.stacked100(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, e || (i.xaxis.convertedCatToNumeric = !1), ((i = this.checkForCatToNumericXAxis(this.chartType, a, i)).chart.sparkline && i.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (a = s.sparkline(a)), t = T.extend(o, a));
            t = T.extend(t, window.Apex), o = T.extend(t, i);
            return this.handleUserInputErrors(o)
        }
    }, {
        key: "checkForCatToNumericXAxis", value: function (t, e, i) {
            var a = new _(i), s = "bar" === t && i.plotOptions && i.plotOptions.bar && i.plotOptions.bar.horizontal,
                o = "datetime" !== i.xaxis.type && "numeric" !== i.xaxis.type,
                e = i.xaxis.tickPlacement || e.xaxis && e.xaxis.tickPlacement;
            return i = !s && !("pie" === t || "polarArea" === t || "donut" === t || "radar" === t || "radialBar" === t || "heatmap" === t) && o && "between" !== e ? a.convertCatToNumeric(i) : i
        }
    }, {
        key: "extendYAxis", value: function (i, t) {
            var a = new E;
            (void 0 === i.yaxis || !i.yaxis || Array.isArray(i.yaxis) && 0 === i.yaxis.length) && (i.yaxis = {}), i.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (i.yaxis = T.extend(i.yaxis, window.Apex.yaxis)), i.yaxis.constructor !== Array ? i.yaxis = [T.extend(a.yAxis, i.yaxis)] : i.yaxis = T.extendArray(i.yaxis, a.yAxis);
            var e = !1;
            i.yaxis.forEach(function (t) {
                t.logarithmic && (e = !0)
            });
            var s = i.series;
            return t && !s && (s = t.config.series), e && s.length !== i.yaxis.length && s.length && (i.yaxis = s.map(function (t, e) {
                if (t.name || (s[e].name = "series-".concat(e + 1)), i.yaxis[e]) return i.yaxis[e].seriesName = s[e].name, i.yaxis[e];
                e = T.extend(a.yAxis, i.yaxis[0]);
                return e.show = !1, e
            })), e && 1 < s.length && s.length !== i.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), i
        }
    }, {
        key: "extendAnnotations", value: function (t) {
            return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), this.extendPointAnnotations(t)
        }
    }, {
        key: "extendYAxisAnnotations", value: function (t) {
            var e = new E;
            return t.annotations.yaxis = T.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t
        }
    }, {
        key: "extendXAxisAnnotations", value: function (t) {
            var e = new E;
            return t.annotations.xaxis = T.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t
        }
    }, {
        key: "extendPointAnnotations", value: function (t) {
            var e = new E;
            return t.annotations.points = T.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t
        }
    }, {
        key: "checkForDarkTheme", value: function (t) {
            t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4"))
        }
    }, {
        key: "handleUserInputErrors", value: function (t) {
            if (t.tooltip.shared && t.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
            if ("bar" === t.chart.type && t.plotOptions.bar.horizontal) {
                if (1 < t.yaxis.length) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                t.yaxis[0].reversed && (t.yaxis[0].opposite = !0), t.xaxis.tooltip.enabled = !1, t.yaxis[0].tooltip.enabled = !1, t.chart.zoom.enabled = !1
            }
            return "bar" !== t.chart.type && "rangeBar" !== t.chart.type || t.tooltip.shared && "barWidth" === t.xaxis.crosshairs.width && 1 < t.series.length && (t.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== t.chart.type && "boxPlot" !== t.chart.type || t.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(t.chart.type, " chart is not supported.")), t.yaxis[0].reversed = !1), Array.isArray(t.stroke.width) && "line" !== t.chart.type && "area" !== t.chart.type && (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), t.stroke.width = t.stroke.width[0]), t
        }
    }]), ke), U = (o(we, [{
        key: "initGlobalVars", value: function (t) {
            t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRangeBar = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.xaxisLabelsCount = 0, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0
        }
    }, {
        key: "globalVars", value: function (t) {
            return {
                chartID: null,
                cuid: null,
                events: {
                    beforeMount: [],
                    mounted: [],
                    updated: [],
                    clicked: [],
                    selection: [],
                    dataPointSelection: [],
                    zoomed: [],
                    scrolled: []
                },
                colors: [],
                clientX: null,
                clientY: null,
                fill: {colors: []},
                stroke: {colors: []},
                dataLabels: {style: {colors: []}},
                radarPolygons: {fill: {colors: []}},
                markers: {colors: [], size: t.markers.size, largestSize: 0},
                animationEnded: !1,
                isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                isDirty: !1,
                isExecCalled: !1,
                initialConfig: null,
                initialSeries: [],
                lastXAxis: [],
                lastYAxis: [],
                columnSeries: null,
                labels: [],
                timescaleLabels: [],
                noLabelsProvided: !1,
                allSeriesCollapsed: !1,
                collapsedSeries: [],
                collapsedSeriesIndices: [],
                ancillaryCollapsedSeries: [],
                ancillaryCollapsedSeriesIndices: [],
                risingSeries: [],
                dataFormatXNumeric: !1,
                capturedSeriesIndex: -1,
                capturedDataPointIndex: -1,
                selectedDataPoints: [],
                goldenPadding: 35,
                invalidLogScale: !1,
                ignoreYAxisIndexes: [],
                yAxisSameScaleIndices: [],
                maxValsInArrayIndex: 0,
                radialSize: 0,
                selection: void 0,
                zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                yaxis: null,
                mousedown: !1,
                lastClientPosition: {},
                visibleXRange: void 0,
                yValueDecimal: 0,
                total: 0,
                SVGNS: "http://www.w3.org/2000/svg",
                svgWidth: 0,
                svgHeight: 0,
                noData: !1,
                locale: {},
                dom: {},
                memory: {methodsToExec: []},
                shouldAnimate: !0,
                skipLastTimelinelabel: !1,
                skipFirstTimelinelabel: !1,
                delayedElements: [],
                axisCharts: !0,
                isDataXYZ: !1,
                resized: !1,
                resizeTimer: null,
                comboCharts: !1,
                dataChanged: !1,
                previousPaths: [],
                allSeriesHasEqualX: !0,
                pointsArray: [],
                dataLabelsRects: [],
                lastDrawnDataLabelsIndexes: [],
                hasNullValues: !1,
                easing: null,
                zoomed: !1,
                gridWidth: 0,
                gridHeight: 0,
                rotateXLabels: !1,
                defaultLabels: !1,
                xLabelFormatter: void 0,
                yLabelFormatters: [],
                xaxisTooltipFormatter: void 0,
                ttKeyFormatter: void 0,
                ttVal: void 0,
                ttZFormatter: void 0,
                LINE_HEIGHT_RATIO: 1.618,
                xAxisLabelsHeight: 0,
                xAxisLabelsWidth: 0,
                yAxisLabelsWidth: 0,
                scaleX: 1,
                scaleY: 1,
                translateX: 0,
                translateY: 0,
                translateYAxisX: [],
                yAxisWidths: [],
                translateXAxisY: 0,
                translateXAxisX: 0,
                tooltip: null
            }
        }
    }, {
        key: "init", value: function (t) {
            var e = this.globalVars(t);
            return this.initGlobalVars(e), e.initialConfig = T.extend({}, t), e.initialSeries = T.clone(t.series), e.lastXAxis = T.clone(e.initialConfig.xaxis), e.lastYAxis = T.clone(e.initialConfig.yaxis), e
        }
    }]), we), q = (o(ye, [{
        key: "init", value: function () {
            var t = new j(this.opts).init({responsiveOverride: !1});
            return {config: t, globals: (new U).init(t)}
        }
    }]), ye), Z = (o(ve, [{
        key: "isMultiFormat", value: function () {
            return this.isFormatXY() || this.isFormat2DArray()
        }
    }, {
        key: "isFormatXY", value: function () {
            var t = this.w.config.series.slice(), e = new O(this.ctx);
            if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0
        }
    }, {
        key: "isFormat2DArray", value: function () {
            var t = this.w.config.series.slice(), e = new O(this.ctx);
            if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0
        }
    }, {
        key: "handleFormat2DArray", value: function (t, e) {
            for (var i, a = this.w.config, s = this.w.globals, o = "boxPlot" === a.chart.type || "boxPlot" === a.series[e].type, r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][1] && (Array.isArray(t[e].data[r][1]) && 4 === t[e].data[r][1].length && !o ? this.twoDSeries.push(T.parseNumber(t[e].data[r][1][3])) : 5 <= t[e].data[r].length ? this.twoDSeries.push(T.parseNumber(t[e].data[r][4])) : this.twoDSeries.push(T.parseNumber(t[e].data[r][1])), s.dataFormatXNumeric = !0), "datetime" === a.xaxis.type ? (i = new Date(t[e].data[r][0]), i = new Date(i).getTime(), this.twoDSeriesX.push(i)) : this.twoDSeriesX.push(t[e].data[r][0]);
            for (var n = 0; n < t[e].data.length; n++) void 0 !== t[e].data[n][2] && (this.threeDSeries.push(t[e].data[n][2]), s.isDataXYZ = !0)
        }
    }, {
        key: "handleFormatXY", value: function (t, e) {
            var i = this.w.config, a = this.w.globals, s = new V(this.ctx), o = e;
            -1 < a.collapsedSeriesIndices.indexOf(e) && (o = this.activeSeriesIndex);
            for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r].y && (Array.isArray(t[e].data[r].y) ? this.twoDSeries.push(T.parseNumber(t[e].data[r].y[t[e].data[r].y.length - 1])) : this.twoDSeries.push(T.parseNumber(t[e].data[r].y))), void 0 !== t[e].data[r].goals && Array.isArray(t[e].data[r].goals) ? (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[r].goals)) : (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null));
            for (var n = 0; n < t[o].data.length; n++) {
                var l = "string" == typeof t[o].data[n].x, h = Array.isArray(t[o].data[n].x),
                    c = !h && !!s.isValidDate(t[o].data[n].x.toString());
                l || c ? l || i.xaxis.convertedCatToNumeric ? (l = a.isBarHorizontal && a.isRangeData, "datetime" !== i.xaxis.type || l ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[o].data[n].x)) : this.twoDSeriesX.push(s.parseDate(t[o].data[n].x))) : "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(t[o].data[n].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[o].data[n].x))) : (h ? this.fallbackToCategory = !0 : (a.isXNumeric = !0, a.dataFormatXNumeric = !0), this.twoDSeriesX.push(t[o].data[n].x))
            }
            if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                for (var d = 0; d < t[e].data.length; d++) this.threeDSeries.push(t[e].data[d].z);
                a.isDataXYZ = !0
            }
        }
    }, {
        key: "handleRangeData", value: function (t, e) {
            var i = this.w.globals, a = {};
            return this.isFormat2DArray() ? a = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(a.start), i.seriesRangeEnd.push(a.end), i.seriesRangeBar.push(a.rangeUniques), i.seriesRangeBar.forEach(function (t, e) {
                t && t.forEach(function (r, t) {
                    r.y.forEach(function (t, e) {
                        for (var i, a, s, o = 0; o < r.y.length; o++) e !== o && (i = t.y1, a = t.y2, s = r.y[o].y1, i <= r.y[o].y2 && s <= a && (r.overlaps.indexOf(t.rangeName) < 0 && r.overlaps.push(t.rangeName), r.overlaps.indexOf(r.y[o].rangeName) < 0 && r.overlaps.push(r.y[o].rangeName)))
                    })
                })
            }), a
        }
    }, {
        key: "handleCandleStickBoxData", value: function (t, e) {
            var i = this.w.globals, a = {};
            return this.isFormat2DArray() ? a = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = a.o, i.seriesCandleH[e] = a.h, i.seriesCandleM[e] = a.m, i.seriesCandleL[e] = a.l, i.seriesCandleC[e] = a.c, a
        }
    }, {
        key: "handleRangeDataFormat", value: function (t, s, o) {
            var r = [], n = [], l = s[o].data.filter(function (e, t, i) {
                    return t === i.findIndex(function (t) {
                        return t.x === e.x
                    })
                }).map(function (t, e) {
                    return {x: t.x, overlaps: [], y: []}
                }),
                e = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",
                i = new O(this.ctx).getActiveConfigSeriesIndex();
            if ("array" === t) {
                if (2 !== s[i].data[0][1].length) throw new Error(e);
                for (var a = 0; a < s[o].data.length; a++) r.push(s[o].data[a][1][0]), n.push(s[o].data[a][1][1])
            } else if ("xy" === t) {
                if (2 !== s[i].data[0].y.length) throw new Error(e);
                for (var h = 0; h < s[o].data.length; h++) !function (t) {
                    var e = T.randomId(), i = s[o].data[t].x,
                        a = {y1: s[o].data[t].y[0], y2: s[o].data[t].y[1], rangeName: e};
                    s[o].data[t].rangeName = e;
                    e = l.findIndex(function (t) {
                        return t.x === i
                    });
                    l[e].y.push(a), r.push(a.y1), n.push(a.y2)
                }(h)
            }
            return {start: r, end: n, rangeUniques: l}
        }
    }, {
        key: "handleCandleStickBoxDataFormat", value: function (t, e, i) {
            var a = this.w, s = "boxPlot" === a.config.chart.type || "boxPlot" === a.config.series[i].type, o = [],
                r = [], n = [], l = [], h = [];
            if ("array" === t) if (s && 6 === e[i].data[0].length || !s && 5 === e[i].data[0].length) for (var c = 0; c < e[i].data.length; c++) o.push(e[i].data[c][1]), r.push(e[i].data[c][2]), s ? (n.push(e[i].data[c][3]), l.push(e[i].data[c][4]), h.push(e[i].data[c][5])) : (l.push(e[i].data[c][3]), h.push(e[i].data[c][4])); else for (var d = 0; d < e[i].data.length; d++) Array.isArray(e[i].data[d][1]) && (o.push(e[i].data[d][1][0]), r.push(e[i].data[d][1][1]), s ? (n.push(e[i].data[d][1][2]), l.push(e[i].data[d][1][3]), h.push(e[i].data[d][1][4])) : (l.push(e[i].data[d][1][2]), h.push(e[i].data[d][1][3]))); else if ("xy" === t) for (var g = 0; g < e[i].data.length; g++) Array.isArray(e[i].data[g].y) && (o.push(e[i].data[g].y[0]), r.push(e[i].data[g].y[1]), s ? (n.push(e[i].data[g].y[2]), l.push(e[i].data[g].y[3]), h.push(e[i].data[g].y[4])) : (l.push(e[i].data[g].y[2]), h.push(e[i].data[g].y[3])));
            return {o: o, h: r, m: n, l: l, c: h}
        }
    }, {
        key: "parseDataAxisCharts", value: function (t) {
            var e = this, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.ctx,
                a = this.w.config, s = this.w.globals, o = new V(i),
                r = (0 < a.labels.length ? a.labels : a.xaxis.categories).slice();
            s.isRangeBar = "rangeBar" === a.chart.type && s.isBarHorizontal;
            for (var n, l = 0; l < t.length; l++) {
                if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[l].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                "rangeBar" !== a.chart.type && "rangeArea" !== a.chart.type && "rangeBar" !== t[l].type && "rangeArea" !== t[l].type || (s.isRangeData = !0, this.handleRangeData(t, l)), this.isMultiFormat() ? (this.isFormat2DArray() ? this.handleFormat2DArray(t, l) : this.isFormatXY() && this.handleFormatXY(t, l), "candlestick" !== a.chart.type && "candlestick" !== t[l].type && "boxPlot" !== a.chart.type && "boxPlot" !== t[l].type || this.handleCandleStickBoxData(t, l), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), s.seriesGoals = this.seriesGoals, l !== this.activeSeriesIndex || this.fallbackToCategory || (s.isXNumeric = !0)) : ("datetime" === a.xaxis.type ? (s.isXNumeric = !0, function () {
                    for (var t = 0; t < r.length; t++) if ("string" == typeof r[t]) {
                        if (!o.isValidDate(r[t])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                        e.twoDSeriesX.push(o.parseDate(r[t]))
                    } else e.twoDSeriesX.push(r[t])
                }(), s.seriesX.push(this.twoDSeriesX)) : "numeric" === a.xaxis.type && (s.isXNumeric = !0, 0 < r.length && (this.twoDSeriesX = r, s.seriesX.push(this.twoDSeriesX))), s.labels.push(this.twoDSeriesX), n = t[l].data.map(function (t) {
                    return T.parseNumber(t)
                }), s.series.push(n)), s.seriesZ.push(this.threeDSeries), void 0 !== t[l].name ? s.seriesNames.push(t[l].name) : s.seriesNames.push("series-" + parseInt(l + 1, 10)), void 0 !== t[l].color ? s.seriesColors.push(t[l].color) : s.seriesColors.push(void 0)
            }
            return this.w
        }
    }, {
        key: "parseDataNonAxisCharts", value: function (t) {
            var e = this.w.globals, i = this.w.config;
            e.series = t.slice(), e.seriesNames = i.labels.slice();
            for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (a + 1));
            return this.w
        }
    }, {
        key: "handleExternalLabelsData", value: function (t) {
            var e = this.w.config, i = this.w.globals;
            0 < e.xaxis.categories.length ? i.labels = e.xaxis.categories : 0 < e.labels.length ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRangeBar.length && (i.seriesRangeBar.map(function (t) {
                t.forEach(function (t) {
                    i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x)
                })
            }), i.labels = i.labels.filter(function (t, e, i) {
                return i.indexOf(t) === e
            })), e.xaxis.convertedCatToNumeric && (new _(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t)
        }
    }, {
        key: "_generateExternalLabels", value: function (t) {
            var e = this.w.globals, i = this.w.config, a = [];
            if (e.axisCharts) {
                if (0 < e.series.length) for (var s = 0; s < e.series[e.maxValsInArrayIndex].length; s++) a.push(s + 1);
                e.seriesX = [];
                for (var o = 0; o < t.length; o++) e.seriesX.push(a);
                e.isXNumeric = !0
            }
            if (0 === a.length) for (var a = e.axisCharts ? [] : e.series.map(function (t, e) {
                return e + 1
            }), r = 0; r < t.length; r++) e.seriesX.push(a);
            e.labels = a, i.xaxis.convertedCatToNumeric && (e.categoryLabels = a.map(function (t) {
                return i.xaxis.labels.formatter(t)
            })), e.noLabelsProvided = !0
        }
    }, {
        key: "parseData", value: function (t) {
            var e = this.w, i = e.config, a = e.globals;
            this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(t) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart.stacked && (e = new O(this.ctx), a.series = e.setNullSeriesToZeroValues(a.series)), this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t);
            for (var s = this.coreUtils.getCategoryLabels(a.labels), o = 0; o < s.length; o++) if (Array.isArray(s[o])) {
                a.isMultiLineX = !0;
                break
            }
        }
    }, {
        key: "excludeCollapsedSeriesInYAxis", value: function () {
            var i = this, a = this.w;
            a.globals.ignoreYAxisIndexes = a.globals.collapsedSeries.map(function (t, e) {
                if (i.w.globals.isMultipleYAxis && !a.config.chart.stacked) return t.index
            })
        }
    }]), ve), $ = (o(me, [{
        key: "xLabelFormat", value: function (t, e, i, a) {
            var s = this.w;
            if ("datetime" !== s.config.xaxis.type || void 0 !== s.config.xaxis.labels.formatter || void 0 !== s.config.tooltip.x.formatter) return t(e, i, a);
            a = new V(this.ctx);
            return a.formatDate(a.getDate(e), s.config.tooltip.x.format)
        }
    }, {
        key: "defaultGeneralFormatter", value: function (t) {
            return Array.isArray(t) ? t.map(function (t) {
                return t
            }) : t
        }
    }, {
        key: "defaultYFormatter", value: function (t, e, i) {
            var a = this.w;
            return t = T.isNumber(t) ? 0 !== a.globals.yValueDecimal ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : a.globals.yValueDecimal) : a.globals.maxYArr[i] - a.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0) : t
        }
    }, {
        key: "setLabelFormatters", value: function () {
            var a = this, s = this.w;
            return s.globals.xaxisTooltipFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
            }, s.globals.ttKeyFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
            }, s.globals.ttZFormatter = function (t) {
                return t
            }, s.globals.legendFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
            }, void 0 !== s.config.xaxis.labels.formatter ? s.globals.xLabelFormatter = s.config.xaxis.labels.formatter : s.globals.xLabelFormatter = function (t) {
                if (T.isNumber(t)) {
                    if (s.config.xaxis.convertedCatToNumeric || "numeric" !== s.config.xaxis.type) return s.globals.isBarHorizontal && s.globals.maxY - s.globals.minYArr < 4 ? t.toFixed(1) : t.toFixed(0);
                    if (T.isNumber(s.config.xaxis.decimalsInFloat)) return t.toFixed(s.config.xaxis.decimalsInFloat);
                    var e = s.globals.maxX - s.globals.minX;
                    return 0 < e && e < 100 ? t.toFixed(1) : t.toFixed(0)
                }
                return t
            }, "function" == typeof s.config.tooltip.x.formatter ? s.globals.ttKeyFormatter = s.config.tooltip.x.formatter : s.globals.ttKeyFormatter = s.globals.xLabelFormatter, "function" == typeof s.config.xaxis.tooltip.formatter && (s.globals.xaxisTooltipFormatter = s.config.xaxis.tooltip.formatter), !Array.isArray(s.config.tooltip.y) && void 0 === s.config.tooltip.y.formatter || (s.globals.ttVal = s.config.tooltip.y), void 0 !== s.config.tooltip.z.formatter && (s.globals.ttZFormatter = s.config.tooltip.z.formatter), void 0 !== s.config.legend.formatter && (s.globals.legendFormatter = s.config.legend.formatter), s.config.yaxis.forEach(function (e, i) {
                void 0 !== e.labels.formatter ? s.globals.yLabelFormatters[i] = e.labels.formatter : s.globals.yLabelFormatters[i] = function (t) {
                    return s.globals.xyCharts ? Array.isArray(t) ? t.map(function (t) {
                        return a.defaultYFormatter(t, e, i)
                    }) : a.defaultYFormatter(t, e, i) : t
                }
            }), s.globals
        }
    }, {
        key: "heatmapLabelFormatters", value: function () {
            var t, e = this.w;
            "heatmap" === e.config.chart.type && (e.globals.yAxisScale[0].result = e.globals.seriesNames.slice(), t = e.globals.seriesNames.reduce(function (t, e) {
                return t.length > e.length ? t : e
            }, 0), e.globals.yAxisScale[0].niceMax = t, e.globals.yAxisScale[0].niceMin = t)
        }
    }]), me), J = (o(be, [{
        key: "getLabel", value: function (t, e, i, a) {
            var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [],
                o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "12px", r = this.w,
                n = void 0 === t[a] ? "" : t[a], l = n, h = r.globals.xLabelFormatter,
                c = r.config.xaxis.labels.formatter, d = !1,
                l = new $(this.ctx).xLabelFormat(h, n, n, {i: a, dateFormatter: new V(this.ctx).formatDate, w: r});
            void 0 !== c && (l = c(n, t[a], {i: a, dateFormatter: new V(this.ctx).formatDate, w: r}));
            var g, u;
            0 < e.length ? (g = e[a].unit, u = null, e.forEach(function (t) {
                "month" === t.unit ? u = "year" : "day" === t.unit ? u = "month" : "hour" === t.unit ? u = "day" : "minute" === t.unit && (u = "hour")
            }), d = u === g, i = e[a].position, l = e[a].value) : "datetime" === r.config.xaxis.type && void 0 === c && (l = ""), void 0 === l && (l = ""), l = Array.isArray(l) ? l : l.toString();
            a = new I(this.ctx), c = {}, c = r.globals.rotateXLabels ? a.getTextRects(l, parseInt(o, 10), null, "rotate(".concat(r.config.xaxis.labels.rotate, " 0 0)"), !1) : a.getTextRects(l, parseInt(o, 10)), r = !r.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
            return {
                x: i,
                text: l = !Array.isArray(l) && (0 === l.indexOf("NaN") || 0 === l.toLowerCase().indexOf("invalid") || 0 <= l.toLowerCase().indexOf("infinity") || 0 <= s.indexOf(l) && r) ? "" : l,
                textRect: c,
                isBold: d
            }
        }
    }, {
        key: "checkLabelBasedOnTickamount", value: function (t, e, i) {
            var a = this.w, s = a.config.xaxis.tickAmount;
            return i < (s = "dataPoints" === s ? Math.round(a.globals.gridWidth / 120) : s) || t % Math.round(i / (s + 1)) == 0 || (e.text = ""), e
        }
    }, {
        key: "checkForOverflowingLabels", value: function (t, e, i, a, s) {
            var o = this.w;
            return 0 === t && o.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && o.globals.skipLastTimelinelabel && (e.text = ""), o.config.xaxis.labels.hideOverlappingLabels && 0 < a.length && (s = s[s.length - 1], e.x < s.textRect.width / (o.globals.rotateXLabels ? Math.abs(o.config.xaxis.labels.rotate) / 12 : 1.01) + s.x && (e.text = "")), e
        }
    }, {
        key: "checkForReversedLabels", value: function (t, e) {
            var i = this.w;
            return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e
        }
    }, {
        key: "isYAxisHidden", value: function (t) {
            var e = this.w, i = new P(this.ctx);
            return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && -1 === e.globals.collapsedSeriesIndices.indexOf(t)
        }
    }, {
        key: "getYAxisForeColor", value: function (t, e) {
            var i = this.w;
            return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t
        }
    }, {
        key: "drawYAxisTicks", value: function (t, e, i, a, s, o, r) {
            var n = this.w, l = new I(this.ctx), h = n.globals.translateY;
            if (a.show && 0 < e) {
                !0 === n.config.yaxis[s].opposite && (t += a.width);
                for (var c = e; 0 <= c; c--) {
                    var d = h + e / 10 + n.config.yaxis[s].labels.offsetY - 1;
                    n.globals.isBarHorizontal && (d = o * c), "heatmap" === n.config.chart.type && (d += o / 2);
                    d = l.drawLine(t + i.offsetX - a.width + a.offsetX, d + a.offsetY, t + i.offsetX + a.offsetX, d + a.offsetY, a.color);
                    r.add(d), h += o
                }
            }
        }
    }]), be), Q = (o(xe, [{
        key: "scaleSvgNode", value: function (t, e) {
            var i = parseFloat(t.getAttributeNS(null, "width")), a = parseFloat(t.getAttributeNS(null, "height"));
            t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", a * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + a)
        }
    }, {
        key: "fixSvgStringForIe11", value: function (t) {
            if (!T.isIE11()) return t.replace(/&nbsp;/g, "&#160;");
            var e = 0, t = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function (t) {
                return 2 == ++e ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t
            });
            return (t = t.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1")
        }
    }, {
        key: "getSvgString", value: function (t) {
            var e, i = this.w.globals.dom.Paper.svg();
            return 1 !== t && (e = this.w.globals.dom.Paper.node.cloneNode(!0), this.scaleSvgNode(e, t), i = (new XMLSerializer).serializeToString(e)), this.fixSvgStringForIe11(i)
        }
    }, {
        key: "cleanup", value: function () {
            var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),
                i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),
                t = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
            Array.prototype.forEach.call(t, function (t) {
                t.setAttribute("width", 0)
            }), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100))
        }
    }, {
        key: "svgUrl", value: function () {
            this.cleanup();
            var t = this.getSvgString(), t = new Blob([t], {type: "image/svg+xml;charset=utf-8"});
            return URL.createObjectURL(t)
        }
    }, {
        key: "dataURI", value: function (n) {
            var l = this;
            return new Promise(function (e) {
                var t = l.w, i = n ? n.scale || n.width / t.globals.svgWidth : 1;
                l.cleanup();
                var a = document.createElement("canvas");
                a.width = t.globals.svgWidth * i, a.height = parseInt(t.globals.dom.elWrap.style.height, 10) * i;
                var s = "transparent" === t.config.chart.background ? "#fff" : t.config.chart.background,
                    o = a.getContext("2d");
                o.fillStyle = s, o.fillRect(0, 0, a.width * i, a.height * i);
                var r, t = l.getSvgString(i);
                window.canvg && T.isIE11() ? ((s = window.canvg.Canvg.fromString(o, t, {
                    ignoreClear: !0,
                    ignoreDimensions: !0
                })).start(), i = a.msToBlob(), s.stop(), e({blob: i})) : (t = "data:image/svg+xml," + encodeURIComponent(t), (r = new Image).crossOrigin = "anonymous", r.onload = function () {
                    var t;
                    o.drawImage(r, 0, 0), a.msToBlob ? (t = a.msToBlob(), e({blob: t})) : (t = a.toDataURL("image/png"), e({imgURI: t}))
                }, r.src = t)
            })
        }
    }, {
        key: "exportToSVG", value: function () {
            this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg")
        }
    }, {
        key: "exportToPng", value: function () {
            var i = this;
            this.dataURI().then(function (t) {
                var e = t.imgURI, t = t.blob;
                t ? navigator.msSaveOrOpenBlob(t, i.w.globals.chartID + ".png") : i.triggerDownload(e, i.w.config.chart.toolbar.export.png.filename, ".png")
            })
        }
    }, {
        key: "exportToCSV", value: function (t) {
            var l = this, h = t.series, c = t.columnDelimiter, e = t.lineDelimiter, t = void 0 === e ? "\n" : e,
                d = this.w, g = [], u = [], e = "", p = new Z(this.ctx), f = new J(this.ctx);
            g.push(d.config.chart.toolbar.export.csv.headerCategory), h.map(function (t, e) {
                t = t.name || "series-".concat(e);
                d.globals.axisCharts && g.push(t.split(c).join("") ? t.split(c).join("") : "series-".concat(e))
            }), d.globals.axisCharts || (g.push(d.config.chart.toolbar.export.csv.headerValue), u.push(g.join(c))), h.map(function (t, e) {
                d.globals.axisCharts ? function (t, e) {
                    if (g.length && 0 === e && u.push(g.join(c)), t.data && t.data.length) for (var i = 0; i < t.data.length; i++) {
                        g = [];
                        s = (s = i, r = o = void 0, n = "", d.globals.axisCharts ? ("category" !== d.config.xaxis.type && !d.config.xaxis.convertedCatToNumeric || (n = d.globals.isBarHorizontal ? (o = d.globals.yLabelFormatters[0], r = new O(l.ctx).getActiveConfigSeriesIndex(), o(d.globals.labels[s], {
                            seriesIndex: r,
                            dataPointIndex: s,
                            w: d
                        })) : f.getLabel(d.globals.labels, d.globals.timescaleLabels, 0, s).text), "datetime" === d.config.xaxis.type && (d.config.xaxis.categories.length ? n = d.config.xaxis.categories[s] : d.config.labels.length && (n = d.config.labels[s]))) : n = d.config.labels[s], Array.isArray(n) && (n = n.join(" ")), T.isNumber(n) ? n : n.split(c).join(""));
                        if (s || (p.isFormatXY() ? s = h[e].data[i].x : p.isFormat2DArray() && (s = h[e].data[i] ? h[e].data[i][0] : "")), 0 === e) {
                            g.push((n = s, "datetime" === d.config.xaxis.type && 10 <= String(n).length ? d.config.chart.toolbar.export.csv.dateFormatter(s) : T.isNumber(s) ? s : s.split(c).join("")));
                            for (var a = 0; a < d.globals.series.length; a++) g.push(d.globals.series[a][i])
                        }
                        ("candlestick" === d.config.chart.type || t.type && "candlestick" === t.type) && (g.pop(), g.push(d.globals.seriesCandleO[e][i]), g.push(d.globals.seriesCandleH[e][i]), g.push(d.globals.seriesCandleL[e][i]), g.push(d.globals.seriesCandleC[e][i])), ("boxPlot" === d.config.chart.type || t.type && "boxPlot" === t.type) && (g.pop(), g.push(d.globals.seriesCandleO[e][i]), g.push(d.globals.seriesCandleH[e][i]), g.push(d.globals.seriesCandleM[e][i]), g.push(d.globals.seriesCandleL[e][i]), g.push(d.globals.seriesCandleC[e][i])), "rangeBar" === d.config.chart.type && (g.pop(), g.push(d.globals.seriesRangeStart[e][i]), g.push(d.globals.seriesRangeEnd[e][i])), g.length && u.push(g.join(c))
                    }
                    var s, o, r, n
                }(t, e) : ((g = []).push(d.globals.labels[e].split(c).join("")), g.push(d.globals.series[e]), u.push(g.join(c)))
            }), e += u.join(t), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\ufeff" + e), d.config.chart.toolbar.export.csv.filename, ".csv")
        }
    }, {
        key: "triggerDownload", value: function (t, e, i) {
            var a = document.createElement("a");
            a.href = t, a.download = (e || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a)
        }
    }]), xe), K = (o(fe, [{
        key: "drawXaxis", value: function () {
            var a = this, s = this.w, o = new I(this.ctx), t = o.group({
                class: "apexcharts-xaxis",
                transform: "translate(".concat(s.config.xaxis.offsetX, ", ").concat(s.config.xaxis.offsetY, ")")
            }), r = o.group({
                class: "apexcharts-xaxis-texts-g",
                transform: "translate(".concat(s.globals.translateXAxisX, ", ").concat(s.globals.translateXAxisY, ")")
            });
            t.add(r);
            for (var n = s.globals.padHorizontal, l = [], e = 0; e < this.xaxisLabels.length; e++) l.push(this.xaxisLabels[e]);
            var h, c = l.length;
            n = s.globals.isXNumeric ? (h = s.globals.gridWidth / (1 < c ? c - 1 : c), n + h / 2 + s.config.xaxis.labels.offsetX) : (h = s.globals.gridWidth / l.length, n + h + s.config.xaxis.labels.offsetX);
            for (var i, d, g = 0; g <= c - 1; g++) !function (t) {
                var e = n - h / 2 + s.config.xaxis.labels.offsetX;
                0 === t && 1 === c && h / 2 === n && 1 === s.globals.dataPoints && (e = s.globals.gridWidth / 2);
                var i = a.axesUtils.getLabel(l, s.globals.timescaleLabels, e, t, a.drawnLabels, a.xaxisFontSize),
                    e = 28;
                s.globals.rotateXLabels && (e = 22), (i = void 0 !== s.config.xaxis.tickAmount && "dataPoints" !== s.config.xaxis.tickAmount && "datetime" !== s.config.xaxis.type ? a.axesUtils.checkLabelBasedOnTickamount(t, i, c) : a.axesUtils.checkForOverflowingLabels(t, i, c, a.drawnLabels, a.drawnLabelsRects)).text && s.globals.xaxisLabelsCount++, s.config.xaxis.labels.show && (e = o.drawText({
                    x: i.x,
                    y: a.offY + s.config.xaxis.labels.offsetY + e - ("top" === s.config.xaxis.position ? s.globals.xAxisHeight + s.config.xaxis.axisTicks.height - 2 : 0),
                    text: i.text,
                    textAnchor: "middle",
                    fontWeight: i.isBold ? 600 : s.config.xaxis.labels.style.fontWeight,
                    fontSize: a.xaxisFontSize,
                    fontFamily: a.xaxisFontFamily,
                    foreColor: Array.isArray(a.xaxisForeColors) ? s.config.xaxis.convertedCatToNumeric ? a.xaxisForeColors[s.globals.minX + t - 1] : a.xaxisForeColors[t] : a.xaxisForeColors,
                    isPlainText: !1,
                    cssClass: "apexcharts-xaxis-label " + s.config.xaxis.labels.style.cssClass
                }), r.add(e), (t = document.createElementNS(s.globals.SVGNS, "title")).textContent = Array.isArray(i.text) ? i.text.join(" ") : i.text, e.node.appendChild(t), "" !== i.text && (a.drawnLabels.push(i.text), a.drawnLabelsRects.push(i))), n += h
            }(g);
            return void 0 !== s.config.xaxis.title.text && (d = o.group({class: "apexcharts-xaxis-title"}), i = o.drawText({
                x: s.globals.gridWidth / 2 + s.config.xaxis.title.offsetX,
                y: this.offY + parseFloat(this.xaxisFontSize) + s.globals.xAxisLabelsHeight + s.config.xaxis.title.offsetY,
                text: s.config.xaxis.title.text,
                textAnchor: "middle",
                fontSize: s.config.xaxis.title.style.fontSize,
                fontFamily: s.config.xaxis.title.style.fontFamily,
                fontWeight: s.config.xaxis.title.style.fontWeight,
                foreColor: s.config.xaxis.title.style.color,
                cssClass: "apexcharts-xaxis-title-text " + s.config.xaxis.title.style.cssClass
            }), d.add(i), t.add(d)), s.config.xaxis.axisBorder.show && (d = s.globals.barPadForNumericAxis, d = o.drawLine(s.globals.padHorizontal + s.config.xaxis.axisBorder.offsetX - d, this.offY, this.xaxisBorderWidth + d, this.offY, s.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight), t.add(d)), t
        }
    }, {
        key: "drawXaxisInversed", value: function (s) {
            var o = this, r = this.w, n = new I(this.ctx),
                t = r.config.yaxis[0].opposite ? r.globals.translateYAxisX[s] : 0,
                e = n.group({class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: s}), l = n.group({
                    class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                    transform: "translate(" + t + ", 0)"
                });
            e.add(l);
            var h = [];
            if (r.config.yaxis[s].show) for (var i = 0; i < this.xaxisLabels.length; i++) h.push(this.xaxisLabels[i]);
            var c, d = -(c = r.globals.gridHeight / h.length) / 2.2, g = r.globals.yLabelFormatters[0],
                u = r.config.yaxis[0].labels;
            if (u.show) for (var a = 0; a <= h.length - 1; a++) !function (t) {
                var e = void 0 === h[t] ? "" : h[t], e = g(e, {seriesIndex: s, dataPointIndex: t, w: r}),
                    i = o.axesUtils.getYAxisForeColor(u.style.colors, s), a = 0;
                Array.isArray(e) && (a = e.length / 2 * parseInt(u.style.fontSize, 10));
                t = n.drawText({
                    x: u.offsetX - 15,
                    y: d + c + u.offsetY - a,
                    text: e,
                    textAnchor: o.yaxis.opposite ? "start" : "end",
                    foreColor: Array.isArray(i) ? i[t] : i,
                    fontSize: u.style.fontSize,
                    fontFamily: u.style.fontFamily,
                    fontWeight: u.style.fontWeight,
                    isPlainText: !1,
                    cssClass: "apexcharts-yaxis-label " + u.style.cssClass
                });
                l.add(t);
                i = document.createElementNS(r.globals.SVGNS, "title");
                i.textContent = Array.isArray(e) ? e.join(" ") : e, t.node.appendChild(i), 0 !== r.config.yaxis[s].labels.rotate && (i = n.rotateAroundCenter(t.node), t.node.setAttribute("transform", "rotate(".concat(r.config.yaxis[s].labels.rotate, " 0 ").concat(i.y, ")"))), d += c
            }(a);
            void 0 !== r.config.yaxis[0].title.text && (f = n.group({
                class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                transform: "translate(" + t + ", 0)"
            }), p = n.drawText({
                x: 0,
                y: r.globals.gridHeight / 2,
                text: r.config.yaxis[0].title.text,
                textAnchor: "middle",
                foreColor: r.config.yaxis[0].title.style.color,
                fontSize: r.config.yaxis[0].title.style.fontSize,
                fontWeight: r.config.yaxis[0].title.style.fontWeight,
                fontFamily: r.config.yaxis[0].title.style.fontFamily,
                cssClass: "apexcharts-yaxis-title-text " + r.config.yaxis[0].title.style.cssClass
            }), f.add(p), e.add(f));
            var p = 0;
            this.isCategoryBarHorizontal && r.config.yaxis[0].opposite && (p = r.globals.gridWidth);
            var f = r.config.xaxis.axisBorder;
            return f.show && (f = n.drawLine(r.globals.padHorizontal + f.offsetX + p, 1 + f.offsetY, r.globals.padHorizontal + f.offsetX + p, r.globals.gridHeight + f.offsetY, f.color, 0), e.add(f)), r.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(p, h.length, r.config.yaxis[0].axisBorder, r.config.yaxis[0].axisTicks, 0, c, e), e
        }
    }, {
        key: "drawXaxisTicks", value: function (t, e) {
            var i, a, s = this.w, o = t;
            t < 0 || t - 2 > s.globals.gridWidth || (a = (i = this.offY + s.config.xaxis.axisTicks.offsetY) + s.config.xaxis.axisTicks.height, "top" === s.config.xaxis.position && (a = i - s.config.xaxis.axisTicks.height), s.config.xaxis.axisTicks.show && (s = new I(this.ctx).drawLine(t + s.config.xaxis.axisTicks.offsetX, i + s.config.xaxis.offsetY, o + s.config.xaxis.axisTicks.offsetX, a + s.config.xaxis.offsetY, s.config.xaxis.axisTicks.color), e.add(s), s.node.classList.add("apexcharts-xaxis-tick")))
        }
    }, {
        key: "getXAxisTicksPositions", value: function () {
            var t = this.w, e = [], i = this.xaxisLabels.length, a = t.globals.padHorizontal;
            if (0 < t.globals.timescaleLabels.length) for (var s = 0; s < i; s++) a = this.xaxisLabels[s].position, e.push(a); else for (var o = i, r = 0; r < o; r++) {
                var n = o;
                t.globals.isXNumeric && "bar" !== t.config.chart.type && --n, a += t.globals.gridWidth / n, e.push(a)
            }
            return e
        }
    }, {
        key: "xAxisLabelCorrections", value: function () {
            var a = this.w, s = new I(this.ctx), t = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                o = a.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
                e = a.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                i = a.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
            if (a.globals.rotateXLabels || a.config.xaxis.labels.rotateAlways) for (var r = 0; r < o.length; r++) {
                var n = s.rotateAroundCenter(o[r]);
                n.y = n.y - 1, n.x = n.x + 1, o[r].setAttribute("transform", "rotate(".concat(a.config.xaxis.labels.rotate, " ").concat(n.x, " ").concat(n.y, ")")), o[r].setAttribute("text-anchor", "end"), t.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                n = o[r].childNodes;
                a.config.xaxis.labels.trim && Array.prototype.forEach.call(n, function (t) {
                    s.placeTextWithEllipsis(t, t.textContent, a.globals.xAxisLabelsHeight - ("bottom" === a.config.legend.position ? 20 : 10))
                })
            } else !function () {
                for (var e = a.globals.gridWidth / (a.globals.labels.length + 1), t = 0; t < o.length; t++) {
                    var i = o[t].childNodes;
                    a.config.xaxis.labels.trim && "datetime" !== a.config.xaxis.type && Array.prototype.forEach.call(i, function (t) {
                        s.placeTextWithEllipsis(t, t.textContent, e)
                    })
                }
            }();
            if (0 < e.length) {
                var l = e[e.length - 1].getBBox(), h = e[0].getBBox();
                l.x < -20 && e[e.length - 1].parentNode.removeChild(e[e.length - 1]), h.x + h.width > a.globals.gridWidth && !a.globals.isBarHorizontal && e[0].parentNode.removeChild(e[0]);
                for (var c = 0; c < i.length; c++) s.placeTextWithEllipsis(i[c], i[c].textContent, a.config.yaxis[0].labels.maxWidth - 2 * parseFloat(a.config.yaxis[0].title.style.fontSize) - 20)
            }
        }
    }]), fe), tt = (o(pe, [{
        key: "drawGridArea", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, e = this.w,
                i = new I(this.ctx);
            null === t && (t = i.group({class: "apexcharts-grid"}));
            var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                e = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
            return t.add(e), t.add(a), t
        }
    }, {
        key: "drawGrid", value: function () {
            var t = null;
            return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t
        }
    }, {
        key: "createGridMask", value: function () {
            var e, t = this.w, i = t.globals, a = new I(this.ctx),
                s = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
            Array.isArray(t.config.stroke.width) && (e = 0, t.config.stroke.width.forEach(function (t) {
                e = Math.max(e, t)
            }), s = e), i.dom.elGridRectMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(i.cuid)), i.dom.elGridRectMarkerMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(i.cuid)), i.dom.elForecastMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elForecastMask.setAttribute("id", "forecastMask".concat(i.cuid)), i.dom.elNonForecastMask = document.createElementNS(i.SVGNS, "clipPath"), i.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(i.cuid));
            var o = t.config.chart.type, r = 0, n = 0;
            ("bar" === o || "rangeBar" === o || "candlestick" === o || "boxPlot" === o || 0 < t.globals.comboBarCount) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (r = t.config.grid.padding.left, n = t.config.grid.padding.right, i.barPadForNumericAxis > r && (r = i.barPadForNumericAxis, n = i.barPadForNumericAxis)), i.dom.elGridRect = a.drawRect(-s / 2 - r - 2, -s / 2, i.gridWidth + s + n + r + 4, i.gridHeight + s, 0, "#fff"), new P(this).getLargestMarkerSize();
            t = t.globals.markers.largestSize + 1;
            i.dom.elGridRectMarker = a.drawRect(2 * -t, 2 * -t, i.gridWidth + 4 * t, i.gridHeight + 4 * t, 0, "#fff"), i.dom.elGridRectMask.appendChild(i.dom.elGridRect.node), i.dom.elGridRectMarkerMask.appendChild(i.dom.elGridRectMarker.node);
            t = i.dom.baseEl.querySelector("defs");
            t.appendChild(i.dom.elGridRectMask), t.appendChild(i.dom.elForecastMask), t.appendChild(i.dom.elNonForecastMask), t.appendChild(i.dom.elGridRectMarkerMask)
        }
    }, {
        key: "_drawGridLines", value: function (t) {
            var e = t.i, i = t.x1, a = t.y1, s = t.x2, o = t.y2, r = t.xCount, n = t.parent, t = this.w;
            0 === e && t.globals.skipFirstTimelinelabel || e === r - 1 && t.globals.skipLastTimelinelabel && !t.config.xaxis.labels.formatter || "radar" === t.config.chart.type || (t.config.grid.xaxis.lines.show && this._drawGridLine({
                x1: i,
                y1: a,
                x2: s,
                y2: o,
                parent: n
            }), new K(this.ctx).drawXaxisTicks(i, this.elg))
        }
    }, {
        key: "_drawGridLine", value: function (t) {
            var e = t.x1, i = t.y1, a = t.x2, s = t.y2, o = t.parent, r = this.w,
                n = o.node.classList.contains("apexcharts-gridlines-horizontal"), l = r.config.grid.strokeDashArray,
                t = r.globals.barPadForNumericAxis,
                l = new I(this).drawLine(e - (n ? t : 0), i, a + (n ? t : 0), s, r.config.grid.borderColor, l);
            l.node.classList.add("apexcharts-gridline"), o.add(l)
        }
    }, {
        key: "_drawGridBandRect", value: function (t) {
            var e = t.c, i = t.x1, a = t.y1, s = t.x2, o = t.y2, r = t.type, n = this.w, l = new I(this.ctx),
                t = n.globals.barPadForNumericAxis;
            "column" === r && "datetime" === n.config.xaxis.type || (e = n.config.grid[r].colors[e], e = l.drawRect(i - ("row" === r ? t : 0), a, s + ("row" === r ? 2 * t : 0), o, 0, e, n.config.grid[r].opacity), this.elg.add(e), e.attr("clip-path", "url(#gridRectMask".concat(n.globals.cuid, ")")), e.node.classList.add("apexcharts-grid-".concat(r)))
        }
    }, {
        key: "_drawXYLines", value: function (t) {
            var e, n = this, l = t.xCount, i = t.tickAmount, h = this.w;
            if ((h.config.grid.xaxis.lines.show || h.config.xaxis.axisTicks.show) && (e = h.globals.padHorizontal, t = h.globals.gridHeight, h.globals.timescaleLabels.length ? function (t) {
                for (var e, i, a = t.xC, s = t.y1, o = t.y2, r = 0; r < a; r++) e = n.xaxisLabels[r].position, i = n.xaxisLabels[r].position, n._drawGridLines({
                    i: r,
                    x1: e,
                    y1: s,
                    x2: i,
                    y2: o,
                    xCount: l,
                    parent: n.elgridLinesV
                })
            }({
                xC: l,
                x1: e,
                y1: 0,
                x2: void 0,
                y2: t
            }) : (h.globals.isXNumeric && (l = h.globals.xAxisScale.result.length), function (t) {
                var e = t.xC, i = t.x1, a = t.y1, s = t.x2, o = t.y2;
                if (void 0 !== h.config.xaxis.tickAmount && "dataPoints" !== h.config.xaxis.tickAmount) h.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach(function (t, e) {
                    t = t.getBBox();
                    n._drawGridLines({
                        i: e,
                        x1: t.x + t.width / 2,
                        y1: a,
                        x2: t.x + t.width / 2,
                        y2: o,
                        xCount: l,
                        parent: n.elgridLinesV
                    })
                }); else for (var r = 0; r < e + (h.globals.isXNumeric ? 0 : 1); r++) 0 === r && 1 === e && 1 === h.globals.dataPoints && (s = i = h.globals.gridWidth / 2), n._drawGridLines({
                    i: r,
                    x1: i,
                    y1: a,
                    x2: s,
                    y2: o,
                    xCount: l,
                    parent: n.elgridLinesV
                }), s = i += h.globals.gridWidth / (h.globals.isXNumeric ? e - 1 : e)
            }({
                xC: l = h.config.xaxis.convertedCatToNumeric ? h.globals.xaxisLabelsCount : l,
                x1: e,
                y1: 0,
                x2: void 0,
                y2: t
            }))), h.config.grid.yaxis.lines.show) {
                var a = 0, s = 0, o = h.globals.gridWidth, r = i + 1;
                this.isRangeBar && (r = h.globals.labels.length);
                for (var c = 0; c < r + (this.isRangeBar ? 1 : 0); c++) this._drawGridLine({
                    x1: 0,
                    y1: a,
                    x2: o,
                    y2: s,
                    parent: this.elgridLinesH
                }), s = a += h.globals.gridHeight / (this.isRangeBar ? r : i)
            }
        }
    }, {
        key: "_drawInvertedXYLines", value: function (t) {
            var e = t.xCount, i = this.w;
            if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show) for (var a, s = i.globals.padHorizontal, o = i.globals.gridHeight, r = 0; r < e + 1; r++) i.config.grid.xaxis.lines.show && this._drawGridLine({
                x1: s,
                y1: 0,
                x2: a,
                y2: o,
                parent: this.elgridLinesV
            }), new K(this.ctx).drawXaxisTicks(s, this.elg), a = s = s + i.globals.gridWidth / e + .3;
            if (i.config.grid.yaxis.lines.show) for (var n = 0, l = 0, h = i.globals.gridWidth, c = 0; c < i.globals.dataPoints + 1; c++) this._drawGridLine({
                x1: 0,
                y1: n,
                x2: h,
                y2: l,
                parent: this.elgridLinesH
            }), l = n += i.globals.gridHeight / i.globals.dataPoints
        }
    }, {
        key: "renderGrid", value: function () {
            var t = this.w, e = new I(this.ctx);
            this.elg = e.group({class: "apexcharts-grid"}), this.elgridLinesH = e.group({class: "apexcharts-gridlines-horizontal"}), this.elgridLinesV = e.group({class: "apexcharts-gridlines-vertical"}), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide());
            for (var i, a = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, s = 0; s < t.globals.series.length && !(2 < (a = void 0 !== t.globals.yAxisScale[s] ? t.globals.yAxisScale[s].result.length - 1 : a)); s++) ;
            return !t.globals.isBarHorizontal || this.isRangeBar ? (i = this.xaxisLabels.length, this.isRangeBar && (a = t.globals.labels.length, t.config.xaxis.tickAmount && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount)), this._drawXYLines({
                xCount: i,
                tickAmount: a
            })) : (i = a, a = t.globals.xTickAmount, this._drawInvertedXYLines({
                xCount: i,
                tickAmount: a
            })), this.drawGridBands(i, a), {el: this.elg, xAxisTickWidth: t.globals.gridWidth / i}
        }
    }, {
        key: "drawGridBands", value: function (t, e) {
            var i = this.w;
            if (void 0 !== i.config.grid.row.colors && 0 < i.config.grid.row.colors.length) for (var a = 0, s = i.globals.gridHeight / e, o = i.globals.gridWidth, r = 0, n = 0; r < e; r++, n++) n >= i.config.grid.row.colors.length && (n = 0), this._drawGridBandRect({
                c: n,
                x1: 0,
                y1: a,
                x2: o,
                y2: s,
                type: "row"
            }), a += i.globals.gridHeight / e;
            if (void 0 !== i.config.grid.column.colors && 0 < i.config.grid.column.colors.length) for (var l = i.globals.isBarHorizontal || "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, h = i.globals.padHorizontal, c = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, g = 0, u = 0; g < t; g++, u++) u >= i.config.grid.column.colors.length && (u = 0), this._drawGridBandRect({
                c: u,
                x1: h,
                y1: 0,
                x2: c,
                y2: d,
                type: "column"
            }), h += i.globals.gridWidth / l
        }
    }]), pe), et = (o(ue, [{
        key: "niceScale", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                s = 4 < arguments.length ? arguments[4] : void 0, o = this.w, r = Math.abs(e - t);
            if ("dataPoints" === (i = this._adjustTicksForSmallRange(i, a, r)) && (i = o.globals.dataPoints - 1), t === Number.MIN_VALUE && 0 === e || !T.isNumber(t) && !T.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) return e = i, this.linearScale(t = 0, e, i);
            e < t ? (console.warn("axis.min cannot be greater than axis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5);
            var n = [];
            r < 1 && s && ("candlestick" === o.config.chart.type || "candlestick" === o.config.series[a].type || "boxPlot" === o.config.chart.type || "boxPlot" === o.config.series[a].type || o.globals.isRangeData) && (e *= 1.01);
            a = i + 1;
            a < 2 ? a = 2 : 2 < a && (a -= 2);
            var o = r / a, a = Math.floor(T.log10(o)), a = Math.pow(10, a), o = Math.round(o / a),
                l = (o = o < 1 ? 1 : o) * a, a = l * Math.floor(t / l), h = l * Math.ceil(e / l), c = a;
            if (s && 2 < r) {
                for (; n.push(c), !((c += l) > h);) ;
                return {result: n, niceMin: n[0], niceMax: n[n.length - 1]}
            }
            var d = t;
            (n = []).push(d);
            for (var g = Math.abs(e - t) / i, u = 0; u <= i; u++) n.push(d += g);
            return n[n.length - 2] >= e && n.pop(), {result: n, niceMin: n[0], niceMax: n[n.length - 1]}
        }
    }, {
        key: "linearScale", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
                a = 3 < arguments.length ? arguments[3] : void 0, e = Math.abs(e - t),
                s = e / (i = "dataPoints" === (i = this._adjustTicksForSmallRange(i, a, e)) ? this.w.globals.dataPoints - 1 : i);
            i === Number.MAX_VALUE && (i = 10, s = 1);
            for (var o = [], r = t; 0 <= i;) o.push(r), r += s, --i;
            return {result: o, niceMin: o[0], niceMax: o[o.length - 1]}
        }
    }, {
        key: "logarithmicScale", value: function (t, e) {
            for (var i = [], a = Math.ceil(Math.log(t) / Math.log(e)) + 1, s = 0; s < a; s++) i.push(Math.pow(e, s));
            return {result: i, niceMin: i[0], niceMax: i[i.length - 1]}
        }
    }, {
        key: "_adjustTicksForSmallRange", value: function (t, e, i) {
            var a = t;
            return void 0 !== e && this.w.config.yaxis[e].labels.formatter && void 0 === this.w.config.yaxis[e].tickAmount && (e = this.w.config.yaxis[e].labels.formatter(1), T.isNumber(Number(e)) && !T.isFloat(e) && (a = Math.ceil(i))), a < t ? a : t
        }
    }, {
        key: "setYScaleForIndex", value: function (t, e, i) {
            var a = this.w.globals, s = this.w.config, o = a.isBarHorizontal ? s.xaxis : s.yaxis[t];
            void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []);
            var r = Math.abs(i - e);
            o.logarithmic && r <= 5 && (a.invalidLogScale = !0), o.logarithmic && 5 < r ? (a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(i, o.logBase)) : i !== -Number.MAX_VALUE && T.isNumber(i) ? (a.allSeriesCollapsed = !1, void 0 === o.min && void 0 === o.max || o.forceNiceScale ? (s = void 0 === s.yaxis[t].max && void 0 === s.yaxis[t].min || s.yaxis[t].forceNiceScale, a.yAxisScale[t] = this.niceScale(e, i, o.tickAmount || (r < 5 && 1 < r ? r + 1 : 5), t, s)) : a.yAxisScale[t] = this.linearScale(e, i, o.tickAmount, t)) : a.yAxisScale[t] = this.linearScale(0, 5, 5)
        }
    }, {
        key: "setXScale", value: function (t, e) {
            var i = this.w, a = i.globals, s = i.config.xaxis, i = Math.abs(e - t);
            return e !== -Number.MAX_VALUE && T.isNumber(e) ? a.xAxisScale = this.linearScale(t, e, s.tickAmount || (i < 5 && 1 < i ? i + 1 : 5), 0) : a.xAxisScale = this.linearScale(0, 5, 5), a.xAxisScale
        }
    }, {
        key: "setMultipleYScales", value: function () {
            var o = this, t = this.w.globals, r = this.w.config, n = t.minYArr.concat([]), l = t.maxYArr.concat([]),
                h = [];
            r.yaxis.forEach(function (i, a) {
                var s = a;
                r.series.forEach(function (t, e) {
                    t.name === i.seriesName && (a !== (s = e) ? h.push({
                        index: e,
                        similarIndex: a,
                        alreadyExists: !0
                    }) : h.push({index: e}))
                });
                var t = n[s], e = l[s];
                o.setYScaleForIndex(a, t, e)
            }), this.sameScaleInMultipleAxes(n, l, h)
        }
    }, {
        key: "sameScaleInMultipleAxes", value: function (t, s, e) {
            var n = this, l = this.w.config, h = this.w.globals, o = [];
            e.forEach(function (t) {
                t.alreadyExists && (void 0 === o[t.index] && (o[t.index] = []), o[t.index].push(t.index), o[t.index].push(t.similarIndex))
            }), (h.yAxisSameScaleIndices = o).forEach(function (a, s) {
                o.forEach(function (t, e) {
                    var i;
                    s !== e && (i = t, 0 < a.filter(function (t) {
                        return -1 !== i.indexOf(t)
                    }).length) && (o[s] = o[s].concat(o[e]))
                })
            });
            var e = o.map(function (i) {
                return i.filter(function (t, e) {
                    return i.indexOf(t) === e
                })
            }).map(function (t) {
                return t.sort()
            }), o = o.filter(function (t) {
                return !!t
            }), i = (r = e.slice()).map(function (t) {
                return JSON.stringify(t)
            }), r = r.filter(function (t, e) {
                return i.indexOf(JSON.stringify(t)) === e
            }), c = [], d = [];
            t.forEach(function (i, a) {
                r.forEach(function (t, e) {
                    -1 < t.indexOf(a) && (void 0 === c[e] && (c[e] = [], d[e] = []), c[e].push({
                        key: a,
                        value: i
                    }), d[e].push({key: a, value: s[a]}))
                })
            });
            var g = Array.apply(null, Array(r.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                u = Array.apply(null, Array(r.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
            c.forEach(function (t, i) {
                t.forEach(function (t, e) {
                    g[i] = Math.min(t.value, g[i])
                })
            }), d.forEach(function (t, i) {
                t.forEach(function (t, e) {
                    u[i] = Math.max(t.value, u[i])
                })
            }), t.forEach(function (t, r) {
                d.forEach(function (i, a) {
                    var s = g[a], o = u[a];
                    l.chart.stacked && (o = 0, i.forEach(function (t, e) {
                        t.value !== -Number.MAX_VALUE && (o += t.value), s !== Number.MIN_VALUE && (s += c[a][e].value)
                    })), i.forEach(function (t, e) {
                        i[e].key === r && (void 0 !== l.yaxis[r].min && (s = "function" == typeof l.yaxis[r].min ? l.yaxis[r].min(h.minY) : l.yaxis[r].min), void 0 !== l.yaxis[r].max && (o = "function" == typeof l.yaxis[r].max ? l.yaxis[r].max(h.maxY) : l.yaxis[r].max), n.setYScaleForIndex(r, s, o))
                    })
                })
            })
        }
    }, {
        key: "autoScaleY", value: function (t, c, d) {
            var g = (t = t || this).w;
            if (g.globals.isMultipleYAxis || g.globals.collapsedSeries.length) return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), c;
            var u = g.globals.seriesX[0], p = g.config.chart.stacked;
            return c.forEach(function (a, t) {
                for (var s = 0, e = 0; e < u.length; e++) if (u[e] >= d.xaxis.min) {
                    s = e;
                    break
                }
                var r, n, o = g.globals.minYArr[t], l = g.globals.maxYArr[t], h = g.globals.stackedSeriesTotals;
                g.globals.series.forEach(function (i, t) {
                    var e = i[s];
                    p ? (e = h[s], r = n = e, h.forEach(function (t, e) {
                        u[e] <= d.xaxis.max && u[e] >= d.xaxis.min && (n < t && null !== t && (n = t), i[e] < r && null !== i[e] && (r = i[e]))
                    })) : (r = n = e, i.forEach(function (i, a) {
                        var s, o;
                        u[a] <= d.xaxis.max && u[a] >= d.xaxis.min && (o = s = i, g.globals.series.forEach(function (t, e) {
                            null !== i && (s = Math.min(t[a], s), o = Math.max(t[a], o))
                        }), n < o && null !== o && (n = o), s < r && null !== s && (r = s))
                    })), void 0 === r && void 0 === n && (r = o, n = l), (n *= n < 0 ? .9 : 1.1) < 0 && n < l && (n = l), (r *= r < 0 ? 1.1 : .9) < 0 && o < r && (r = o), 1 < c.length ? (c[t].min = void 0 === a.min ? r : a.min, c[t].max = void 0 === a.max ? n : a.max) : (c[0].min = void 0 === a.min ? r : a.min, c[0].max = void 0 === a.max ? n : a.max)
                })
            }), c
        }
    }]), ue), it = (o(ge, [{
        key: "init", value: function () {
            this.setYRange(), this.setXRange(), this.setZRange()
        }
    }, {
        key: "getMinYMaxY", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, s = this.w.config,
                o = this.w.globals, r = -Number.MAX_VALUE, n = Number.MIN_VALUE;
            null === a && (a = t + 1);
            var l = o.series, h = l, c = l;
            "candlestick" === s.chart.type ? (h = o.seriesCandleL, c = o.seriesCandleH) : "boxPlot" === s.chart.type ? (h = o.seriesCandleO, c = o.seriesCandleC) : o.isRangeData && (h = o.seriesRangeStart, c = o.seriesRangeEnd);
            for (var d = t; d < a; d++) {
                o.dataPoints = Math.max(o.dataPoints, l[d].length);
                for (var g = 0; g < o.series[d].length; g++) {
                    var u = l[d][g];
                    null !== u && T.isNumber(u) ? (void 0 !== c[d][g] && (r = Math.max(r, c[d][g]), e = Math.min(e, c[d][g])), void 0 !== h[d][g] && (e = Math.min(e, h[d][g]), i = Math.max(i, h[d][g])), "candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type || (void 0 !== o.seriesCandleC[d][g] && (r = Math.max(r, o.seriesCandleO[d][g]), r = Math.max(r, o.seriesCandleH[d][g]), r = Math.max(r, o.seriesCandleL[d][g]), r = Math.max(r, o.seriesCandleC[d][g]), "boxPlot" === this.w.config.chart.type && (r = Math.max(r, o.seriesCandleM[d][g]))), !s.series[d].type || "candlestick" === s.series[d].type && "boxPlot" === s.series[d].type || (r = Math.max(r, o.series[d][g]), e = Math.min(e, o.series[d][g])), i = r), o.seriesGoals[d] && o.seriesGoals[d][g] && Array.isArray(o.seriesGoals[d][g]) && o.seriesGoals[d][g].forEach(function (t) {
                        n !== Number.MIN_VALUE && (n = Math.min(n, t.value), e = n), r = Math.max(r, t.value), i = r
                    }), T.isFloat(u) && (u = T.noExponents(u), o.yValueDecimal = Math.max(o.yValueDecimal, u.toString().split(".")[1].length)), n > h[d][g] && h[d][g] < 0 && (n = h[d][g])) : o.hasNullValues = !0
                }
            }
            return "rangeBar" === s.chart.type && o.seriesRangeStart.length && o.isBarHorizontal && (n = e), "bar" === s.chart.type && (n < 0 && r < 0 && (r = 0), n === Number.MIN_VALUE && (n = 0)), {
                minY: n,
                maxY: r,
                lowestY: e,
                highestY: i
            }
        }
    }, {
        key: "setYRange", value: function () {
            var i = this.w.globals, e = this.w.config;
            i.maxY = -Number.MAX_VALUE, i.minY = Number.MIN_VALUE;
            var t = Number.MAX_VALUE;
            if (i.isMultipleYAxis) for (var a = 0; a < i.series.length; a++) {
                var s = this.getMinYMaxY(a, t, null, a + 1);
                i.minYArr.push(s.minY), i.maxYArr.push(s.maxY), t = s.lowestY
            }
            var o = this.getMinYMaxY(0, t, null, i.series.length);
            return i.minY = o.minY, i.maxY = o.maxY, t = o.lowestY, e.chart.stacked && this._setStackedMinMax(), "line" !== e.chart.type && "area" !== e.chart.type && "candlestick" !== e.chart.type && "boxPlot" !== e.chart.type && ("rangeBar" !== e.chart.type || i.isBarHorizontal) || i.minY !== Number.MIN_VALUE || t === -Number.MAX_VALUE || t === i.maxY || (o = i.maxY - t, (0 <= t && t <= 10 || void 0 !== e.yaxis[0].min || void 0 !== e.yaxis[0].max) && (o = 0), i.minY = t - 5 * o / 100, 0 < t && i.minY < 0 && (i.minY = 0), i.maxY = i.maxY + 5 * o / 100), e.yaxis.forEach(function (t, e) {
                void 0 !== t.max && ("number" == typeof t.max ? i.maxYArr[e] = t.max : "function" == typeof t.max && (i.maxYArr[e] = t.max(i.isMultipleYAxis ? i.maxYArr[e] : i.maxY)), i.maxY = i.maxYArr[e]), void 0 !== t.min && ("number" == typeof t.min ? i.minYArr[e] = t.min : "function" == typeof t.min && (i.minYArr[e] = t.min(i.isMultipleYAxis ? i.minYArr[e] === Number.MIN_VALUE ? 0 : i.minYArr[e] : i.minY)), i.minY = i.minYArr[e])
            }), i.isBarHorizontal && ["min", "max"].forEach(function (t) {
                void 0 !== e.xaxis[t] && "number" == typeof e.xaxis[t] && ("min" === t ? i.minY = e.xaxis[t] : i.maxY = e.xaxis[t])
            }), i.isMultipleYAxis ? (this.scales.setMultipleYScales(), i.minY = t, i.yAxisScale.forEach(function (t, e) {
                i.minYArr[e] = t.niceMin, i.maxYArr[e] = t.niceMax
            })) : (this.scales.setYScaleForIndex(0, i.minY, i.maxY), i.minY = i.yAxisScale[0].niceMin, i.maxY = i.yAxisScale[0].niceMax, i.minYArr[0] = i.yAxisScale[0].niceMin, i.maxYArr[0] = i.yAxisScale[0].niceMax), {
                minY: i.minY,
                maxY: i.maxY,
                minYArr: i.minYArr,
                maxYArr: i.maxYArr,
                yAxisScale: i.yAxisScale
            }
        }
    }, {
        key: "setXRange", value: function () {
            var t, i = this.w.globals, e = this.w.config,
                a = "numeric" === e.xaxis.type || "datetime" === e.xaxis.type || "category" === e.xaxis.type && !i.noLabelsProvided || i.noLabelsProvided || i.isXNumeric;
            if (i.isXNumeric && function () {
                for (var t = 0; t < i.series.length; t++) if (i.labels[t]) for (var e = 0; e < i.labels[t].length; e++) null !== i.labels[t][e] && T.isNumber(i.labels[t][e]) && (i.maxX = Math.max(i.maxX, i.labels[t][e]), i.initialMaxX = Math.max(i.maxX, i.labels[t][e]), i.minX = Math.min(i.minX, i.labels[t][e]), i.initialMinX = Math.min(i.minX, i.labels[t][e]))
            }(), i.noLabelsProvided && 0 === e.xaxis.categories.length && (i.maxX = i.labels[i.labels.length - 1], i.initialMaxX = i.labels[i.labels.length - 1], i.minX = 1, i.initialMinX = 1), i.isXNumeric || i.noLabelsProvided || i.dataFormatXNumeric) {
                if (void 0 === e.xaxis.tickAmount ? (t = Math.round(i.svgWidth / 150), (t = "numeric" === e.xaxis.type && i.dataPoints < 30 ? i.dataPoints - 1 : t) > i.dataPoints && 0 !== i.dataPoints && (t = i.dataPoints - 1)) : "dataPoints" === e.xaxis.tickAmount ? (1 < i.series.length && (t = i.series[i.maxValsInArrayIndex].length - 1), i.isXNumeric && (t = i.maxX - i.minX - 1)) : t = e.xaxis.tickAmount, i.xTickAmount = t, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (i.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (i.minX = e.xaxis.min), void 0 !== e.xaxis.range && (i.minX = i.maxX - e.xaxis.range), i.minX !== Number.MAX_VALUE && i.maxX !== -Number.MAX_VALUE) if (e.xaxis.convertedCatToNumeric && !i.dataFormatXNumeric) {
                    for (var s = [], o = i.minX - 1; o < i.maxX; o++) s.push(o + 1);
                    i.xAxisScale = {result: s, niceMin: s[0], niceMax: s[s.length - 1]}
                } else i.xAxisScale = this.scales.setXScale(i.minX, i.maxX); else i.xAxisScale = this.scales.linearScale(1, t, t), i.noLabelsProvided && 0 < i.labels.length && (i.xAxisScale = this.scales.linearScale(1, i.labels.length, t - 1), i.seriesX = i.labels.slice());
                a && (i.labels = i.xAxisScale.result.slice())
            }
            return i.isBarHorizontal && i.labels.length && (i.xTickAmount = i.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
                minX: i.minX,
                maxX: i.maxX
            }
        }
    }, {
        key: "setZRange", value: function () {
            var t = this.w.globals;
            if (t.isDataXYZ) for (var e = 0; e < t.series.length; e++) if (void 0 !== t.seriesZ[e]) for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && T.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
        }
    }, {
        key: "_handleSingleDataPoint", value: function () {
            var t, e, i = this.w.globals, a = this.w.config;
            i.minX === i.maxX && (e = new V(this.ctx), "datetime" === a.xaxis.type ? ((t = e.getDate(i.minX)).setUTCDate(t.getDate() - 2), i.minX = new Date(t).getTime(), (e = e.getDate(i.maxX)).setUTCDate(e.getDate() + 2), i.maxX = new Date(e).getTime()) : "numeric" !== a.xaxis.type && ("category" !== a.xaxis.type || i.noLabelsProvided) || (i.minX = i.minX - 2, i.initialMinX = i.minX, i.maxX = i.maxX + 2, i.initialMaxX = i.maxX))
        }
    }, {
        key: "_getMinXDiff", value: function () {
            var a = this.w.globals;
            a.isXNumeric && a.seriesX.forEach(function (t, e) {
                1 === t.length && t.push(a.seriesX[a.maxValsInArrayIndex][a.seriesX[a.maxValsInArrayIndex].length - 1]);
                var i = t.slice();
                i.sort(function (t, e) {
                    return t - e
                }), i.forEach(function (t, e) {
                    0 < e && (0 < (e = t - i[e - 1]) && (a.minXDiff = Math.min(e, a.minXDiff)))
                }), 1 === a.dataPoints && a.minXDiff === Number.MAX_VALUE && (a.minXDiff = .5)
            })
        }
    }, {
        key: "_setStackedMinMax", value: function () {
            var t = this.w.globals, e = [], i = [];
            if (t.series.length) for (var a = 0; a < t.series[t.maxValsInArrayIndex].length; a++) for (var s = 0, o = 0, r = 0; r < t.series.length; r++) null !== t.series[r][a] && T.isNumber(t.series[r][a]) && (0 < t.series[r][a] ? s = s + parseFloat(t.series[r][a]) + 1e-4 : o += parseFloat(t.series[r][a])), r === t.series.length - 1 && (e.push(s), i.push(o));
            for (var n = 0; n < e.length; n++) t.maxY = Math.max(t.maxY, e[n]), t.minY = Math.min(t.minY, i[n])
        }
    }]), ge), at = (o(de, [{
        key: "drawYaxis", value: function (s) {
            var o = this, r = this.w, n = new I(this.ctx), l = r.config.yaxis[s].labels.style, h = l.fontSize,
                c = l.fontFamily, d = l.fontWeight, t = n.group({
                    class: "apexcharts-yaxis",
                    rel: s,
                    transform: "translate(" + r.globals.translateYAxisX[s] + ", 0)"
                });
            if (this.axesUtils.isYAxisHidden(s)) return t;
            var g = n.group({class: "apexcharts-yaxis-texts-g"});
            t.add(g);
            var u = r.globals.yAxisScale[s].result.length - 1, p = r.globals.gridHeight / u, f = r.globals.translateY,
                x = r.globals.yLabelFormatters[s], b = r.globals.yAxisScale[s].result.slice(),
                b = this.axesUtils.checkForReversedLabels(s, b), m = "";
            if (r.config.yaxis[s].labels.show) for (var e = u; 0 <= e; e--) !function (t) {
                var e = b[t], e = x(e, t, r), i = r.config.yaxis[s].labels.padding;
                r.config.yaxis[s].opposite && 0 !== r.config.yaxis.length && (i *= -1);
                var a = o.axesUtils.getYAxisForeColor(l.colors, s), a = n.drawText({
                    x: i,
                    y: f + u / 10 + r.config.yaxis[s].labels.offsetY + 1,
                    text: e,
                    textAnchor: r.config.yaxis[s].opposite ? "start" : "end",
                    fontSize: h,
                    fontFamily: c,
                    fontWeight: d,
                    foreColor: Array.isArray(a) ? a[t] : a,
                    isPlainText: !1,
                    cssClass: "apexcharts-yaxis-label " + l.cssClass
                });
                t === u && (m = a), g.add(a);
                t = document.createElementNS(r.globals.SVGNS, "title");
                t.textContent = Array.isArray(e) ? e.join(" ") : e, a.node.appendChild(t), 0 !== r.config.yaxis[s].labels.rotate && (e = n.rotateAroundCenter(m.node), t = n.rotateAroundCenter(a.node), a.node.setAttribute("transform", "rotate(".concat(r.config.yaxis[s].labels.rotate, " ").concat(e.x, " ").concat(t.y, ")"))), f += p
            }(e);
            void 0 !== r.config.yaxis[s].title.text && (i = n.group({class: "apexcharts-yaxis-title"}), a = 0, r.config.yaxis[s].opposite && (a = r.globals.translateYAxisX[s]), v = n.drawText({
                x: a,
                y: r.globals.gridHeight / 2 + r.globals.translateY + r.config.yaxis[s].title.offsetY,
                text: r.config.yaxis[s].title.text,
                textAnchor: "end",
                foreColor: r.config.yaxis[s].title.style.color,
                fontSize: r.config.yaxis[s].title.style.fontSize,
                fontWeight: r.config.yaxis[s].title.style.fontWeight,
                fontFamily: r.config.yaxis[s].title.style.fontFamily,
                cssClass: "apexcharts-yaxis-title-text " + r.config.yaxis[s].title.style.cssClass
            }), i.add(v), t.add(i));
            var i, a = r.config.yaxis[s].axisBorder, v = 31 + a.offsetX;
            return r.config.yaxis[s].opposite && (v = -31 - a.offsetX), a.show && (i = n.drawLine(v, r.globals.translateY + a.offsetY - 2, v, r.globals.gridHeight + r.globals.translateY + a.offsetY + 2, a.color, 0, a.width), t.add(i)), r.config.yaxis[s].axisTicks.show && this.axesUtils.drawYAxisTicks(v, u, a, r.config.yaxis[s].axisTicks, s, p, t), t
        }
    }, {
        key: "drawYaxisInversed", value: function (t) {
            var e = this.w, i = new I(this.ctx), a = i.group({class: "apexcharts-xaxis apexcharts-yaxis-inversed"}),
                s = i.group({
                    class: "apexcharts-xaxis-texts-g",
                    transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                });
            a.add(s);
            var o = e.globals.yAxisScale[t].result.length - 1, r = e.globals.gridWidth / o + .1,
                n = r + e.config.xaxis.labels.offsetX, l = e.globals.xLabelFormatter,
                h = e.globals.yAxisScale[t].result.slice(), c = e.globals.timescaleLabels;
            0 < c.length && (this.xaxisLabels = c.slice(), o = (h = c.slice()).length);
            var h = this.axesUtils.checkForReversedLabels(t, h), d = c.length;
            if (e.config.xaxis.labels.show) for (var g = d ? 0 : o; d ? g < d : 0 <= g; d ? g++ : g--) {
                var u = h[g];
                u = l(u, g, e);
                var p = e.globals.gridWidth + e.globals.padHorizontal - (n - r + e.config.xaxis.labels.offsetX);
                c.length && (p = (f = this.axesUtils.getLabel(h, c, p, g, this.drawnLabels, this.xaxisFontSize)).x, u = f.text, this.drawnLabels.push(f.text), 0 === g && e.globals.skipFirstTimelinelabel && (u = ""), g === h.length - 1 && e.globals.skipLastTimelinelabel && (u = ""));
                var f = i.drawText({
                    x: p,
                    y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - ("top" === e.config.xaxis.position ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0),
                    text: u,
                    textAnchor: "middle",
                    foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                    fontSize: this.xaxisFontSize,
                    fontFamily: this.xaxisFontFamily,
                    fontWeight: e.config.xaxis.labels.style.fontWeight,
                    isPlainText: !1,
                    cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                });
                s.add(f), f.tspan(u);
                p = document.createElementNS(e.globals.SVGNS, "title");
                p.textContent = u, f.node.appendChild(p), n += r
            }
            return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a
        }
    }, {
        key: "inversedYAxisBorder", value: function (t) {
            var e, i = this.w, a = new I(this.ctx), s = i.config.xaxis.axisBorder;
            s.show && (e = 0, "bar" === i.config.chart.type && i.globals.isXNumeric && (e -= 15), s = a.drawLine(i.globals.padHorizontal + e + s.offsetX, this.xAxisoffX, i.globals.gridWidth, this.xAxisoffX, s.color, 0, s.height), t.add(s))
        }
    }, {
        key: "inversedYAxisTitleText", value: function (t) {
            var e, i = this.w, a = new I(this.ctx);
            void 0 !== i.config.xaxis.title.text && (e = a.group({class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}), i = a.drawText({
                x: i.globals.gridWidth / 2 + i.config.xaxis.title.offsetX,
                y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(i.config.xaxis.title.style.fontSize) + i.config.xaxis.title.offsetY + 20,
                text: i.config.xaxis.title.text,
                textAnchor: "middle",
                fontSize: i.config.xaxis.title.style.fontSize,
                fontFamily: i.config.xaxis.title.style.fontFamily,
                fontWeight: i.config.xaxis.title.style.fontWeight,
                foreColor: i.config.xaxis.title.style.color,
                cssClass: "apexcharts-xaxis-title-text " + i.config.xaxis.title.style.cssClass
            }), e.add(i), t.add(e))
        }
    }, {
        key: "yAxisTitleRotate", value: function (t, e) {
            var i = this.w, a = new I(this.ctx), s = {width: 0, height: 0}, o = {width: 0, height: 0},
                r = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
            null !== r && (s = r.getBoundingClientRect());
            r = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
            null !== r && (o = r.getBoundingClientRect()), null !== r && (o = this.xPaddingForYAxisTitle(t, s, o, e), r.setAttribute("x", o.xPos - (e ? 10 : 0))), null !== r && (a = a.rotateAroundCenter(r), r.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(a.x, " ").concat(a.y, ")")))
        }
    }, {
        key: "xPaddingForYAxisTitle", value: function (t, e, i, a) {
            var s = this.w, o = 0, r = 10;
            return void 0 === s.config.yaxis[t].title.text || t < 0 ? {
                xPos: o,
                padd: 0
            } : (a ? o = e.width + s.config.yaxis[t].title.offsetX + i.width / 2 + r / 2 : (o = -1 * e.width + s.config.yaxis[t].title.offsetX + r / 2 + i.width / 2, s.globals.isBarHorizontal && (o = -1 * e.width - s.config.yaxis[t].title.offsetX - (r = 25))), {
                xPos: o,
                padd: r
            })
        }
    }, {
        key: "setYAxisXPosition", value: function (s, o) {
            var r, n = this.w, l = 0, h = 18, c = 1;
            1 < n.config.yaxis.length && (this.multipleYs = !0), n.config.yaxis.map(function (t, e) {
                var i = -1 < n.globals.ignoreYAxisIndexes.indexOf(e) || !t.show || t.floating || 0 === s[e].width,
                    a = s[e].width + o[e].width;
                t.opposite ? n.globals.isBarHorizontal ? (l = n.globals.gridWidth + n.globals.translateX - 1, n.globals.translateYAxisX[e] = l - t.labels.offsetX) : (l = n.globals.gridWidth + n.globals.translateX + c, i || (c = c + a + 20), n.globals.translateYAxisX[e] = l - t.labels.offsetX + 20) : (r = n.globals.translateX - h, i || (h = h + a + 20), n.globals.translateYAxisX[e] = r + t.labels.offsetX)
            })
        }
    }, {
        key: "setYAxisTextAlignments", value: function () {
            var o = this.w, t = o.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
            (t = T.listToArray(t)).forEach(function (t, e) {
                var i, a, s = o.config.yaxis[e];
                s && void 0 !== s.labels.align && (i = o.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")), a = o.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label")), a = T.listToArray(a), e = i.getBoundingClientRect(), "left" === s.labels.align ? (a.forEach(function (t, e) {
                    t.setAttribute("text-anchor", "start")
                }), s.opposite || i.setAttribute("transform", "translate(-".concat(e.width, ", 0)"))) : "center" === s.labels.align ? (a.forEach(function (t, e) {
                    t.setAttribute("text-anchor", "middle")
                }), i.setAttribute("transform", "translate(".concat(e.width / 2 * (s.opposite ? 1 : -1), ", 0)"))) : "right" === s.labels.align && (a.forEach(function (t, e) {
                    t.setAttribute("text-anchor", "end")
                }), s.opposite && i.setAttribute("transform", "translate(".concat(e.width, ", 0)"))))
            })
        }
    }]), de), t = (o(ce, [{
        key: "addEventListener", value: function (t, e) {
            var i = this.w;
            i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
        }
    }, {
        key: "removeEventListener", value: function (t, e) {
            var i = this.w;
            !i.globals.events.hasOwnProperty(t) || -1 !== (e = i.globals.events[t].indexOf(e)) && i.globals.events[t].splice(e, 1)
        }
    }, {
        key: "fireEvent", value: function (t, e) {
            var i = this.w;
            if (i.globals.events.hasOwnProperty(t)) {
                e && e.length || (e = []);
                for (var a = i.globals.events[t], s = a.length, o = 0; o < s; o++) a[o].apply(null, e)
            }
        }
    }, {
        key: "setupEventHandlers", value: function () {
            var e = this, i = this.w, a = this.ctx, s = i.globals.dom.baseEl.querySelector(i.globals.chartClass);
            this.ctx.eventList.forEach(function (t) {
                s.addEventListener(t, function (t) {
                    var e = Object.assign({}, i, {
                        seriesIndex: i.globals.capturedSeriesIndex,
                        dataPointIndex: i.globals.capturedDataPointIndex
                    });
                    "mousemove" === t.type || "touchmove" === t.type ? "function" == typeof i.config.chart.events.mouseMove && i.config.chart.events.mouseMove(t, a, e) : "mouseleave" === t.type || "touchleave" === t.type ? "function" == typeof i.config.chart.events.mouseLeave && i.config.chart.events.mouseLeave(t, a, e) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof i.config.chart.events.click && i.config.chart.events.click(t, a, e), a.ctx.events.fireEvent("click", [t, a, e]))
                }, {capture: !1, passive: !0})
            }), this.ctx.eventList.forEach(function (t) {
                i.globals.dom.baseEl.addEventListener(t, e.documentEvent, {passive: !0})
            }), this.ctx.core.setupBrushHandler()
        }
    }, {
        key: "documentEvent", value: function (t) {
            var e, i = this.w, a = t.target.className;
            "click" !== t.type || (e = i.globals.dom.baseEl.querySelector(".apexcharts-menu")) && e.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== a && e.classList.remove("apexcharts-menu-open"), i.globals.clientX = ("touchmove" === t.type ? t.touches[0] : t).clientX, i.globals.clientY = ("touchmove" === t.type ? t.touches[0] : t).clientY
        }
    }]), ce), st = (o(he, [{
        key: "setCurrentLocaleValues", value: function (e) {
            var t = this.w.config.chart.locales,
                t = (t = window.Apex.chart && window.Apex.chart.locales && 0 < window.Apex.chart.locales.length ? this.w.config.chart.locales.concat(window.Apex.chart.locales) : t).filter(function (t) {
                    return t.name === e
                })[0];
            if (!t) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
            t = T.extend(X, t);
            this.w.globals.locale = t.options
        }
    }]), he), ot = (o(le, [{
        key: "drawAxis", value: function (t, e) {
            var i, a, s = this.w.globals, o = this.w.config, r = new K(this.ctx), n = new at(this.ctx);
            s.axisCharts && "radar" !== t && (s.isBarHorizontal ? (a = n.drawYaxisInversed(0), i = r.drawXaxisInversed(0), s.dom.elGraphical.add(i), s.dom.elGraphical.add(a)) : (i = r.drawXaxis(), s.dom.elGraphical.add(i), o.yaxis.map(function (t, e) {
                -1 === s.ignoreYAxisIndexes.indexOf(e) && (a = n.drawYaxis(e), s.dom.Paper.add(a))
            })))
        }
    }]), le), rt = (o(ne, [{
        key: "drawXCrosshairs", value: function () {
            var t = this.w, e = new I(this.ctx), i = new C(this.ctx), a = t.config.xaxis.crosshairs.fill.gradient,
                s = t.config.xaxis.crosshairs.dropShadow, o = t.config.xaxis.crosshairs.fill.type, r = a.colorFrom,
                n = a.colorTo, l = a.opacityFrom, h = a.opacityTo, c = a.stops, d = s.enabled, g = s.left, u = s.top,
                p = s.blur, f = s.color, a = s.opacity, s = t.config.xaxis.crosshairs.fill.color;
            t.config.xaxis.crosshairs.show && ("gradient" === o && (s = e.drawGradient("vertical", r, n, l, h, null, c, null)), h = e.drawRect(), 1 === t.config.xaxis.crosshairs.width && (h = e.drawLine()), c = t.globals.gridHeight, (!T.isNumber(c) || c < 0) && (c = 0), e = t.config.xaxis.crosshairs.width, (!T.isNumber(e) || e < 0) && (e = 0), h.attr({
                class: "apexcharts-xcrosshairs",
                x: 0,
                y: 0,
                y2: c,
                width: e,
                height: c,
                fill: s,
                filter: "none",
                "fill-opacity": t.config.xaxis.crosshairs.opacity,
                stroke: t.config.xaxis.crosshairs.stroke.color,
                "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
            }), d && (h = i.dropShadow(h, {
                left: g,
                top: u,
                blur: p,
                color: f,
                opacity: a
            })), t.globals.dom.elGraphical.add(h))
        }
    }, {
        key: "drawYCrosshairs", value: function () {
            var t, e = this.w, i = new I(this.ctx), a = e.config.yaxis[0].crosshairs,
                s = e.globals.barPadForNumericAxis;
            e.config.yaxis[0].crosshairs.show && ((t = i.drawLine(-s, 0, e.globals.gridWidth + s, 0, a.stroke.color, a.stroke.dashArray, a.stroke.width)).attr({class: "apexcharts-ycrosshairs"}), e.globals.dom.elGraphical.add(t));
            a = i.drawLine(-s, 0, e.globals.gridWidth + s, 0, a.stroke.color, 0, 0);
            a.attr({class: "apexcharts-ycrosshairs-hidden"}), e.globals.dom.elGraphical.add(a)
        }
    }]), ne), nt = (o(re, [{
        key: "checkResponsiveConfig", value: function (t) {
            var s, o, e, r = this, n = this.w, i = n.config;
            0 !== i.responsive.length && ((s = i.responsive.slice()).sort(function (t, e) {
                return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0
            }).reverse(), o = new j({}), e = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = s[0].breakpoint,
                    i = 0 < window.innerWidth ? window.innerWidth : screen.width;
                if (e < i) {
                    e = P.extendArrayProps(o, n.globals.initialConfig, n), t = T.extend(e, t);
                    t = T.extend(n.config, t), r.overrideResponsiveOptions(t)
                } else for (var a = 0; a < s.length; a++) i < s[a].breakpoint && (t = P.extendArrayProps(o, s[a].options, n), t = T.extend(n.config, t), r.overrideResponsiveOptions(t))
            }, t ? (i = P.extendArrayProps(o, t, n), i = T.extend(n.config, i), e(i = T.extend(i, t))) : e({}))
        }
    }, {
        key: "overrideResponsiveOptions", value: function (t) {
            t = new j(t).init({responsiveOverride: !0});
            this.w.config = t
        }
    }]), re), lt = (o(oe, [{
        key: "init", value: function () {
            this.setDefaultColors()
        }
    }, {
        key: "setDefaultColors", value: function () {
            var a = this, s = this.w, t = new T;
            if (s.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(s.config.theme.mode)), void 0 === s.config.colors ? s.globals.colors = this.predefined() : (s.globals.colors = s.config.colors, Array.isArray(s.config.colors) && 0 < s.config.colors.length && "function" == typeof s.config.colors[0] && (s.globals.colors = s.config.series.map(function (t, e) {
                var i = s.config.colors[e];
                return "function" == typeof (i = i || s.config.colors[0]) ? (a.isColorFn = !0, i({
                    value: s.globals.axisCharts ? s.globals.series[e][0] || 0 : s.globals.series[e],
                    seriesIndex: e,
                    dataPointIndex: e,
                    w: s
                })) : i
            }))), s.globals.seriesColors.map(function (t, e) {
                t && (s.globals.colors[e] = t)
            }), s.config.theme.monochrome.enabled) {
                var e = [], i = s.globals.series.length;
                (this.isBarDistributed || this.isHeatmapDistributed) && (i = s.globals.series[0].length * s.globals.series.length);
                for (var o = s.config.theme.monochrome.color, r = 1 / (i / s.config.theme.monochrome.shadeIntensity), n = s.config.theme.monochrome.shadeTo, l = 0, h = 0; h < i; h++) {
                    var c = void 0, c = "dark" === n ? t.shadeColor(-1 * l, o) : t.shadeColor(l, o);
                    l += r, e.push(c)
                }
                s.globals.colors = e.slice()
            }
            var d = s.globals.colors.slice();
            this.pushExtraColors(s.globals.colors), ["fill", "stroke"].forEach(function (t) {
                void 0 === s.config[t].colors ? s.globals[t].colors = a.isColorFn ? s.config.colors : d : s.globals[t].colors = s.config[t].colors.slice(), a.pushExtraColors(s.globals[t].colors)
            }), void 0 === s.config.dataLabels.style.colors ? s.globals.dataLabels.style.colors = d : s.globals.dataLabels.style.colors = s.config.dataLabels.style.colors.slice(), this.pushExtraColors(s.globals.dataLabels.style.colors, 50), void 0 === s.config.plotOptions.radar.polygons.fill.colors ? s.globals.radarPolygons.fill.colors = ["dark" === s.config.theme.mode ? "#424242" : "none"] : s.globals.radarPolygons.fill.colors = s.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(s.globals.radarPolygons.fill.colors, 20), void 0 === s.config.markers.colors ? s.globals.markers.colors = d : s.globals.markers.colors = s.config.markers.colors.slice(), this.pushExtraColors(s.globals.markers.colors)
        }
    }, {
        key: "pushExtraColors", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, a = this.w,
                e = e || a.globals.series.length;
            if ((i = null === i ? this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a.config.chart.type && a.config.plotOptions.heatmap.colorScale.inverse : i) && a.globals.series.length && (e = a.globals.series[a.globals.maxValsInArrayIndex].length * a.globals.series.length), t.length < e) for (var s = e - t.length, o = 0; o < s; o++) t.push(t[o])
        }
    }, {
        key: "updateThemeOptions", value: function (t) {
            t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
            var e = t.theme.mode || "light", i = t.theme.palette || ("dark" === e ? "palette4" : "palette1"),
                a = t.chart.foreColor || ("dark" === e ? "#f6f7f8" : "#373d3f");
            return t.tooltip.theme = e, t.chart.foreColor = a, t.theme.palette = i, t
        }
    }, {
        key: "predefined", value: function () {
            switch (this.w.config.theme.palette) {
                case"palette1":
                    this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                    break;
                case"palette2":
                    this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                    break;
                case"palette3":
                    this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                    break;
                case"palette4":
                    this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
                    break;
                case"palette5":
                    this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                    break;
                case"palette6":
                    this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                    break;
                case"palette7":
                    this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                    break;
                case"palette8":
                    this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                    break;
                case"palette9":
                    this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                    break;
                case"palette10":
                    this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
                    break;
                default:
                    this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
            }
            return this.colors
        }
    }]), oe), ht = (o(se, [{
        key: "draw", value: function () {
            this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
        }
    }, {
        key: "drawTitleSubtitle", value: function (t) {
            var e = this.w, i = "title" === t ? e.config.title : e.config.subtitle, a = e.globals.svgWidth / 2,
                s = i.offsetY, o = "middle";
            "left" === i.align ? (a = 10, o = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, o = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + i.margin / 2, void 0 !== i.text && ((i = new I(this.ctx).drawText({
                x: a,
                y: s,
                text: i.text,
                textAnchor: o,
                fontSize: i.style.fontSize,
                fontFamily: i.style.fontFamily,
                fontWeight: i.style.fontWeight,
                foreColor: i.style.color,
                opacity: 1
            })).node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(i))
        }
    }]), se), ct = (o(ae, [{
        key: "getTitleSubtitleCoords", value: function (t) {
            var e = this.w, i = 0, a = 0, s = ("title" === t ? e.config.title : e.config.subtitle).floating,
                t = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
            return null === t || s || (i = (t = t.getBoundingClientRect()).width, a = e.globals.axisCharts ? t.height + 5 : t.height), {
                width: i,
                height: a
            }
        }
    }, {
        key: "getLegendsRect", value: function () {
            var t = this.w, e = t.globals.dom.baseEl.querySelector(".apexcharts-legend");
            t.config.legend.height || "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (e.style.maxHeight = t.globals.svgHeight / 2 + "px");
            var i = Object.assign({}, T.getBoundingClientRect(e));
            return null !== e && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = {
                x: i.x,
                y: i.y,
                height: i.height,
                width: 0 === i.height ? 0 : i.width
            } : this.dCtx.lgRect = {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect
        }
    }, {
        key: "getLargestStringFromMultiArr", value: function (t, e) {
            var i, a = t;
            return this.w.globals.isMultiLineX && (i = e.map(function (t, e) {
                return Array.isArray(t) ? t.length : 1
            }), t = Math.max.apply(Math, g(i)), a = e[i.indexOf(t)]), a
        }
    }]), ae), dt = (o(ie, [{
        key: "getxAxisLabelsCoords", value: function () {
            var t, e, i, a, s, o, r, n = this.w, l = n.globals.labels.slice();
            return n.config.xaxis.convertedCatToNumeric && 0 === l.length && (l = n.globals.categoryLabels), 0 < n.globals.timescaleLabels.length ? (t = {
                width: (e = this.getxAxisTimeScaleLabelsCoords()).width,
                height: e.height
            }, n.globals.rotateXLabels = !1) : (this.dCtx.lgWidthForSideLegends = "left" !== n.config.legend.position && "right" !== n.config.legend.position || n.config.legend.floating ? 0 : this.dCtx.lgRect.width, r = n.globals.xLabelFormatter, i = T.getLargestStringFromArr(l), a = this.dCtx.dimHelpers.getLargestStringFromMultiArr(i, l), n.globals.isBarHorizontal && (a = i = n.globals.yAxisScale[0].result.reduce(function (t, e) {
                return t.length > e.length ? t : e
            }, 0)), o = i, i = (e = new $(this.dCtx.ctx)).xLabelFormat(r, i, o, {
                i: void 0,
                dateFormatter: new V(this.dCtx.ctx).formatDate,
                w: n
            }), a = e.xLabelFormat(r, a, o, {
                i: void 0,
                dateFormatter: new V(this.dCtx.ctx).formatDate,
                w: n
            }), (n.config.xaxis.convertedCatToNumeric && void 0 === i || "" === String(i).trim()) && (a = i = "1"), o = r = (s = new I(this.dCtx.ctx)).getTextRects(i, n.config.xaxis.labels.style.fontSize), i !== a && (o = s.getTextRects(a, n.config.xaxis.labels.style.fontSize)), (t = {
                width: (r.width >= o.width ? r : o).width,
                height: (r.height >= o.height ? r : o).height
            }).width * l.length > n.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== n.config.xaxis.labels.rotate || n.config.xaxis.labels.rotateAlways ? n.globals.isBarHorizontal || (n.globals.rotateXLabels = !0, r = (l = function (t) {
                return s.getTextRects(t, n.config.xaxis.labels.style.fontSize, n.config.xaxis.labels.style.fontFamily, "rotate(".concat(n.config.xaxis.labels.rotate, " 0 0)"), !1)
            })(i), i !== a && (o = l(a)), t.height = (r.height > o.height ? r : o).height / 1.5, t.width = (r.width > o.width ? r : o).width) : n.globals.rotateXLabels = !1), {
                width: (t = !n.config.xaxis.labels.show ? {
                    width: 0,
                    height: 0
                } : t).width, height: t.height
            }
        }
    }, {
        key: "getxAxisTitleCoords", value: function () {
            var t = this.w, e = 0, i = 0;
            return void 0 !== t.config.xaxis.title.text && (e = (t = new I(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize)).width, i = t.height), {
                width: e,
                height: i
            }
        }
    }, {
        key: "getxAxisTimeScaleLabelsCoords", value: function () {
            var t = this.w;
            this.dCtx.timescaleLabels = t.globals.timescaleLabels.slice();
            var e = this.dCtx.timescaleLabels.map(function (t) {
                return t.value
            }), i = e.reduce(function (t, e) {
                return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
            }, 0);
            return 1.05 * (i = new I(this.dCtx.ctx).getTextRects(i, t.config.xaxis.labels.style.fontSize)).width * e.length > t.globals.gridWidth && 0 !== t.config.xaxis.labels.rotate && (t.globals.overlappingXLabels = !0), i
        }
    }, {
        key: "additionalPaddingXLabels", value: function (t) {
            var s = this, o = this.w, r = o.globals, n = o.config, l = n.xaxis.type, h = t.width;
            r.skipLastTimelinelabel = !1, r.skipFirstTimelinelabel = !1;
            var c = o.config.yaxis[0].opposite && o.globals.isBarHorizontal;
            n.yaxis.forEach(function (t, e) {
                var i, a;
                c ? (s.dCtx.gridPad.left < h && (s.dCtx.xPadLeft = h / 2 + 1), s.dCtx.xPadRight = h / 2 + 1) : (i = t, a = e, -1 !== r.collapsedSeriesIndices.indexOf(a) || (t = i, s.dCtx.timescaleLabels && s.dCtx.timescaleLabels.length ? (e = s.dCtx.timescaleLabels[0], a = s.dCtx.timescaleLabels[s.dCtx.timescaleLabels.length - 1].position + h / 1.75 - s.dCtx.yAxisWidthRight, i = e.position - h / 1.75 + s.dCtx.yAxisWidthLeft, e = "right" === o.config.legend.position && 0 < s.dCtx.lgRect.width ? s.dCtx.lgRect.width : 0, a > r.svgWidth - r.translateX - e && (r.skipLastTimelinelabel = !0), i < -(t.show && !t.floating || "bar" !== n.chart.type && "candlestick" !== n.chart.type && "rangeBar" !== n.chart.type && "boxPlot" !== n.chart.type ? 10 : h / 1.75) && (r.skipFirstTimelinelabel = !0)) : "datetime" === l ? s.dCtx.gridPad.right < h && !r.rotateXLabels && (r.skipLastTimelinelabel = !0) : "datetime" !== l && s.dCtx.gridPad.right < h / 2 - s.dCtx.yAxisWidthRight && !r.rotateXLabels && !o.config.xaxis.labels.trim && ("between" !== o.config.xaxis.tickPlacement || o.globals.isBarHorizontal) && (s.dCtx.xPadRight = h / 2 + 1)))
            })
        }
    }]), ie), gt = (o(ee, [{
        key: "getyAxisLabelsCoords", value: function () {
            var l = this, h = this.w, c = [], d = 10, g = new J(this.dCtx.ctx);
            return h.config.yaxis.map(function (t, e) {
                var i, a, s, o, r = h.globals.yAxisScale[e], n = 0;
                !g.isYAxisHidden(e) && t.labels.show && void 0 !== t.labels.minWidth && (n = t.labels.minWidth), !g.isYAxisHidden(e) && t.labels.show && r.result.length ? (s = h.globals.yLabelFormatters[e], i = r.niceMin === Number.MIN_VALUE ? 0 : r.niceMin, void 0 !== (r = i = s(a = String(i).length > String(r.niceMax).length ? i : r.niceMax, {
                    seriesIndex: e,
                    dataPointIndex: -1,
                    w: h
                })) && 0 !== i.length || (i = a), h.globals.isBarHorizontal && (d = 0, o = h.globals.labels.slice(), i = s(i = T.getLargestStringFromArr(o), {
                    seriesIndex: e,
                    dataPointIndex: -1,
                    w: h
                }), r = l.dCtx.dimHelpers.getLargestStringFromMultiArr(i, o)), a = new I(l.dCtx.ctx), s = "rotate(".concat(t.labels.rotate, " 0 0)"), o = e = a.getTextRects(i, t.labels.style.fontSize, t.labels.style.fontFamily, s, !1), i !== r && (o = a.getTextRects(r, t.labels.style.fontSize, t.labels.style.fontFamily, s, !1)), c.push({
                    width: (n > o.width || n > e.width ? n : (o.width > e.width ? o : e).width) + d,
                    height: (o.height > e.height ? o : e).height
                })) : c.push({width: 0, height: 0})
            }), c
        }
    }, {
        key: "getyAxisTitleCoords", value: function () {
            var s = this, t = this.w, o = [];
            return t.config.yaxis.map(function (t, e) {
                var i, a;
                t.show && void 0 !== t.title.text ? (i = new I(s.dCtx.ctx), a = "rotate(".concat(t.title.rotate, " 0 0)"), a = i.getTextRects(t.title.text, t.title.style.fontSize, t.title.style.fontFamily, a, !1), o.push({
                    width: a.width,
                    height: a.height
                })) : o.push({width: 0, height: 0})
            }), o
        }
    }, {
        key: "getTotalYAxisWidth", value: function () {
            function i(t, e) {
                var i = s.config.yaxis[e].floating, a = 0;
                0 < t.width && !i ? (a = t.width + l, -1 < s.globals.ignoreYAxisIndexes.indexOf(e) && (a = a - t.width - l)) : a = i || h.isYAxisHidden(e) ? 0 : 5, s.config.yaxis[e].opposite ? n += a : r += a, o += a
            }

            var s = this.w, o = 0, r = 0, n = 0, l = 1 < s.globals.yAxisScale.length ? 10 : 0, h = new J(this.dCtx.ctx);
            return s.globals.yLabelsCoords.map(function (t, e) {
                i(t, e)
            }), s.globals.yTitleCoords.map(function (t, e) {
                i(t, e)
            }), s.globals.isBarHorizontal && !s.config.yaxis[0].floating && (o = s.globals.yLabelsCoords[0].width + s.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = r, this.dCtx.yAxisWidthRight = n, o
        }
    }]), ee), ut = (o(te, [{
        key: "gridPadForColumnsInNumericAxis", value: function (t) {
            var e = this.w;
            if (e.globals.noData || e.globals.allSeriesCollapsed) return 0;

            function i(t) {
                return "bar" === t || "rangeBar" === t || "candlestick" === t || "boxPlot" === t
            }

            var a, s = e.config.chart.type, o = 0, r = i(s) ? e.config.series.length : 1;
            return 0 < e.globals.comboBarCount && (r = e.globals.comboBarCount), e.globals.collapsedSeries.forEach(function (t) {
                i(t.type) && --r
            }), e.config.chart.stacked && (r = 1), (i(s) || 0 < e.globals.comboBarCount) && e.globals.isXNumeric && !e.globals.isBarHorizontal && 0 < r && (s = (s = (s = Math.abs(e.globals.initialMaxX - e.globals.initialMinX)) <= 3 ? e.globals.dataPoints : s) / t, t / 2 < (a = e.globals.minXDiff && 0 < e.globals.minXDiff / s ? e.globals.minXDiff / s : a) && (a /= 2), o = (o = (o = a / r * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 ? 1 : o) / (1 < r ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = o), o
        }
    }, {
        key: "gridPadFortitleSubtitle", value: function () {
            var e = this, i = this.w, t = i.globals, a = this.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 10;
            ["title", "subtitle"].forEach(function (t) {
                void 0 !== i.config[t].text ? a += i.config[t].margin : a += e.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 5
            }), !i.config.legend.show || "bottom" !== i.config.legend.position || i.config.legend.floating || i.globals.axisCharts || (a += 10);
            var s = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),
                o = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
            t.gridHeight = t.gridHeight - s.height - o.height - a, t.translateY = t.translateY + s.height + o.height + a
        }
    }, {
        key: "setGridXPosForDualYAxis", value: function (i, a) {
            var s = this.w, o = new J(this.dCtx.ctx);
            s.config.yaxis.map(function (t, e) {
                -1 !== s.globals.ignoreYAxisIndexes.indexOf(e) || t.floating || o.isYAxisHidden(e) || (t.opposite && (s.globals.translateX = s.globals.translateX - (a[e].width + i[e].width) - parseInt(s.config.yaxis[e].labels.style.fontSize, 10) / 1.2 - 12), s.globals.translateX < 2 && (s.globals.translateX = 2))
            })
        }
    }]), te), pt = (o(Kt, [{
        key: "plotCoords", value: function () {
            var t = this.w.globals;
            this.lgRect = this.dimHelpers.getLegendsRect(), t.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), t.gridHeight = t.gridHeight - this.gridPad.top - this.gridPad.bottom, t.gridWidth = t.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
            var e = this.dimGrid.gridPadForColumnsInNumericAxis(t.gridWidth);
            t.gridWidth = t.gridWidth - 2 * e, t.translateX = t.translateX + this.gridPad.left + this.xPadLeft + (0 < e ? e + 4 : 0), t.translateY = t.translateY + this.gridPad.top
        }
    }, {
        key: "setDimensionsForAxisCharts", value: function () {
            var t = this, i = this.w, e = i.globals, a = this.dimYAxis.getyAxisLabelsCoords(),
                s = this.dimYAxis.getyAxisTitleCoords();
            i.globals.yLabelsCoords = [], i.globals.yTitleCoords = [], i.config.yaxis.map(function (t, e) {
                i.globals.yLabelsCoords.push({
                    width: a[e].width,
                    index: e
                }), i.globals.yTitleCoords.push({width: s[e].width, index: e})
            }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
            var o = this.dimXAxis.getxAxisLabelsCoords(), r = this.dimXAxis.getxAxisTitleCoords();
            this.conditionalChecksForAxisCoords(o, r), e.translateXAxisY = i.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, e.translateXAxisX = i.globals.rotateXLabels && i.globals.isXNumeric && i.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, i.globals.isBarHorizontal && (e.rotateXLabels = !1, e.translateXAxisY = parseInt(i.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), e.translateXAxisY = e.translateXAxisY + i.config.xaxis.labels.offsetY, e.translateXAxisX = e.translateXAxisX + i.config.xaxis.labels.offsetX;
            var n = this.yAxisWidth, l = this.xAxisHeight;
            e.xAxisLabelsHeight = this.xAxisHeight - r.height, e.xAxisLabelsWidth = this.xAxisWidth, e.xAxisHeight = this.xAxisHeight;
            var h = 10;
            "radar" !== i.config.chart.type && !this.isSparkline || (n = 0, l = e.goldenPadding), this.isSparkline && (this.lgRect = {
                height: 0,
                width: 0
            }), !this.isSparkline && "treemap" !== i.config.chart.type || (h = l = n = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(o);

            function c() {
                e.translateX = n, e.gridHeight = e.svgHeight - t.lgRect.height - l - (t.isSparkline || "treemap" === i.config.chart.type ? 0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - n
            }

            switch ("top" === i.config.xaxis.position && (h = e.xAxisHeight - i.config.xaxis.axisTicks.height - 5), i.config.legend.position) {
                case"bottom":
                    e.translateY = h, c();
                    break;
                case"top":
                    e.translateY = this.lgRect.height + h, c();
                    break;
                case"left":
                    e.translateY = h, e.translateX = this.lgRect.width + n, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - this.lgRect.width - n;
                    break;
                case"right":
                    e.translateY = h, e.translateX = n, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - this.lgRect.width - n - 5;
                    break;
                default:
                    throw new Error("Legend position not supported")
            }
            this.dimGrid.setGridXPosForDualYAxis(s, a), new at(this.ctx).setYAxisXPosition(a, s)
        }
    }, {
        key: "setDimensionsForNonAxisCharts", value: function () {
            var t = this.w, e = t.globals, i = t.config, a = 0;
            t.config.legend.show && !t.config.legend.floating && (a = 20);
            var t = "pie" === i.chart.type || "polarArea" === i.chart.type || "donut" === i.chart.type ? "pie" : "radialBar",
                s = i.plotOptions[t].offsetY, o = i.plotOptions[t].offsetX;
            if (!i.legend.show || i.legend.floating) return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = s, void (e.translateX = o + (e.svgWidth - e.gridWidth) / 2);
            switch (i.legend.position) {
                case"bottom":
                    e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = s - 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2;
                    break;
                case"top":
                    e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + s + 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2;
                    break;
                case"left":
                    e.gridWidth = e.svgWidth - this.lgRect.width - a, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = s, e.translateX = o + this.lgRect.width + a;
                    break;
                case"right":
                    e.gridWidth = e.svgWidth - this.lgRect.width - a - 5, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = s, e.translateX = o + 10;
                    break;
                default:
                    throw new Error("Legend position not supported")
            }
        }
    }, {
        key: "conditionalChecksForAxisCoords", value: function (t, e) {
            var i = this.w, a = t.height + e.height, s = i.globals.isMultiLineX ? 1.2 : i.globals.LINE_HEIGHT_RATIO,
                o = i.globals.rotateXLabels ? 22 : 10,
                r = i.globals.rotateXLabels && "bottom" === i.config.legend.position ? 10 : 0;
            this.xAxisHeight = a * s + o + r, this.xAxisWidth = t.width, this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0);
            var n = 0, l = 0;
            i.config.yaxis.forEach(function (t) {
                n += t.labels.minWidth, l += t.labels.maxWidth
            }), this.yAxisWidth < n && (this.yAxisWidth = n), this.yAxisWidth > l && (this.yAxisWidth = l)
        }
    }]), Kt), ft = (o(Qt, [{
        key: "getLegendStyles", value: function () {
            var t = document.createElement("style");
            t.setAttribute("type", "text/css");
            var e = document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");
            return t.appendChild(e), t
        }
    }, {
        key: "getLegendBBox", value: function () {
            var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e = t.width;
            return {clwh: t.height, clww: e}
        }
    }, {
        key: "appendToForeignObject", value: function () {
            var t = this.w.globals;
            t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject");
            var e = t.dom.elLegendForeign;
            e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node)
        }
    }, {
        key: "toggleDataSeries", value: function (t, e) {
            var i, a, s = this, o = this.w;
            o.globals.axisCharts || "radialBar" === o.config.chart.type ? (o.globals.resized = !0, i = a = null, o.globals.risingSeries = [], i = o.globals.axisCharts ? (a = o.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), parseInt(a.getAttribute("data:realIndex"), 10)) : (a = o.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), parseInt(a.getAttribute("rel"), 10) - 1), e ? [{
                cs: o.globals.collapsedSeries,
                csi: o.globals.collapsedSeriesIndices
            }, {
                cs: o.globals.ancillaryCollapsedSeries,
                csi: o.globals.ancillaryCollapsedSeriesIndices
            }].forEach(function (t) {
                s.riseCollapsedSeries(t.cs, t.csi, i)
            }) : this.hideSeries({
                seriesEl: a,
                realIndex: i
            })) : (a = o.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")), "pie" !== (t = o.config.chart.type) && "polarArea" !== t && "donut" !== t || (o = o.config.plotOptions.pie.donut.labels, new I(this.lgCtx.ctx).pathMouseDown(a.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(a.members[0].node, o)), a.fire("click"))
        }
    }, {
        key: "hideSeries", value: function (t) {
            var e = t.seriesEl, i = t.realIndex, a = this.w, s = T.clone(a.config.series);
            a.globals.axisCharts ? (t = !1, a.config.yaxis[i] && a.config.yaxis[i].show && a.config.yaxis[i].showAlways && (t = !0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (a.globals.ancillaryCollapsedSeries.push({
                index: i,
                data: s[i].data.slice(),
                type: e.parentNode.className.baseVal.split("-")[1]
            }), a.globals.ancillaryCollapsedSeriesIndices.push(i))), t || (a.globals.collapsedSeries.push({
                index: i,
                data: s[i].data.slice(),
                type: e.parentNode.className.baseVal.split("-")[1]
            }), a.globals.collapsedSeriesIndices.push(i), t = a.globals.risingSeries.indexOf(i), a.globals.risingSeries.splice(t, 1))) : (a.globals.collapsedSeries.push({
                index: i,
                data: s[i]
            }), a.globals.collapsedSeriesIndices.push(i));
            for (var o = e.childNodes, r = 0; r < o.length; r++) o[r].classList.contains("apexcharts-series-markers-wrap") && (o[r].classList.contains("apexcharts-hide") ? o[r].classList.remove("apexcharts-hide") : o[r].classList.add("apexcharts-hide"));
            a.globals.allSeriesCollapsed = a.globals.collapsedSeries.length === a.config.series.length, s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)
        }
    }, {
        key: "riseCollapsedSeries", value: function (t, e, i) {
            var a = this.w, s = T.clone(a.config.series);
            if (0 < t.length) {
                for (var o = 0; o < t.length; o++) t[o].index === i && (a.globals.axisCharts ? s[i].data = t[o].data.slice() : s[i] = t[o].data, t.splice(o, 1), e.splice(o, 1), a.globals.risingSeries.push(i));
                s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)
            }
        }
    }, {
        key: "_getSeriesBasedOnCollapsedState", value: function (i) {
            var a = this.w;
            return a.globals.axisCharts ? i.forEach(function (t, e) {
                -1 < a.globals.collapsedSeriesIndices.indexOf(e) && (i[e].data = [])
            }) : i.forEach(function (t, e) {
                -1 < a.globals.collapsedSeriesIndices.indexOf(e) && (i[e] = 0)
            }), i
        }
    }]), Qt), xt = (o(Jt, [{
        key: "init", value: function () {
            var t = this.w, e = t.globals, t = t.config;
            if ((t.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || 1 < e.series.length || !e.axisCharts) && t.legend.show) {
                for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                this.drawLegends(), T.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === t.legend.position || "top" === t.legend.position ? this.legendAlignHorizontal() : "right" !== t.legend.position && "left" !== t.legend.position || this.legendAlignVertical()
            }
        }
    }, {
        key: "drawLegends", value: function () {
            var t, e = this.w, i = e.config.legend.fontFamily, a = e.globals.seriesNames, s = e.globals.colors.slice();
            "heatmap" === e.config.chart.type ? (a = (t = e.config.plotOptions.heatmap.colorScale.ranges).map(function (t) {
                return t.name || t.from + " - " + t.to
            }), s = t.map(function (t) {
                return t.color
            })) : this.isBarsDistributed && (a = e.globals.labels.slice()), e.config.legend.customLegendItems.length && (a = e.config.legend.customLegendItems);
            for (var o = e.globals.legendFormatter, r = e.config.legend.inverseOrder, n = r ? a.length - 1 : 0; r ? 0 <= n : n <= a.length - 1; r ? n-- : n++) {
                var l = o(a[n], {seriesIndex: n, w: e}), h = !1, c = !1;
                if (0 < e.globals.collapsedSeries.length) for (var d = 0; d < e.globals.collapsedSeries.length; d++) e.globals.collapsedSeries[d].index === n && (h = !0);
                if (0 < e.globals.ancillaryCollapsedSeriesIndices.length) for (var g = 0; g < e.globals.ancillaryCollapsedSeriesIndices.length; g++) e.globals.ancillaryCollapsedSeriesIndices[g] === n && (c = !0);
                var u = document.createElement("span");
                u.classList.add("apexcharts-legend-marker");
                var p = e.config.legend.markers.offsetX, f = e.config.legend.markers.offsetY,
                    x = e.config.legend.markers.height, b = e.config.legend.markers.width,
                    m = e.config.legend.markers.strokeWidth, v = e.config.legend.markers.strokeColor,
                    y = e.config.legend.markers.radius, w = u.style;
                w.background = s[n], w.color = s[n], w.setProperty("background", s[n], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[n] && (w.background = e.config.legend.markers.fillColors[n]), void 0 !== e.globals.seriesColors[n] && (w.background = e.globals.seriesColors[n], w.color = e.globals.seriesColors[n]), w.height = Array.isArray(x) ? parseFloat(x[n]) + "px" : parseFloat(x) + "px", w.width = Array.isArray(b) ? parseFloat(b[n]) + "px" : parseFloat(b) + "px", w.left = (Array.isArray(p) ? parseFloat(p[n]) : parseFloat(p)) + "px", w.top = (Array.isArray(f) ? parseFloat(f[n]) : parseFloat(f)) + "px", w.borderWidth = Array.isArray(m) ? m[n] : m, w.borderColor = Array.isArray(v) ? v[n] : v, w.borderRadius = Array.isArray(y) ? parseFloat(y[n]) + "px" : parseFloat(y) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[n] && (u.innerHTML = e.config.legend.markers.customHTML[n]()) : u.innerHTML = e.config.legend.markers.customHTML()), I.setAttrs(u, {
                    rel: n + 1,
                    "data:collapsed": h || c
                }), (h || c) && u.classList.add("apexcharts-inactive-legend");
                v = document.createElement("div"), w = document.createElement("span");
                w.classList.add("apexcharts-legend-text"), w.innerHTML = Array.isArray(l) ? l.join(" ") : l;
                y = (y = e.config.legend.labels.useSeriesColors ? e.globals.colors[n] : e.config.legend.labels.colors) || e.config.chart.foreColor;
                w.style.color = y, w.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", w.style.fontWeight = e.config.legend.fontWeight, w.style.fontFamily = i || e.config.chart.fontFamily, I.setAttrs(w, {
                    rel: n + 1,
                    i: n,
                    "data:default-text": encodeURIComponent(l),
                    "data:collapsed": h || c
                }), v.appendChild(u), v.appendChild(w);
                w = new P(this.ctx);
                e.config.legend.showForZeroSeries || 0 === w.getSeriesTotalByIndex(n) && w.seriesHaveSameValues(n) && !w.isSeriesNull(n) && -1 === e.globals.collapsedSeriesIndices.indexOf(n) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(n) && v.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || w.isSeriesNull(n) && -1 === e.globals.collapsedSeriesIndices.indexOf(n) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(n) && v.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(v), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), v.classList.add("apexcharts-legend-series"), v.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", I.setAttrs(v, {
                    rel: n + 1,
                    seriesName: T.escapeString(a[n]),
                    "data:collapsed": h || c
                }), (h || c) && v.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || v.classList.add("apexcharts-no-click")
            }
            e.globals.dom.elWrap.addEventListener("click", this.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && 0 === e.config.legend.customLegendItems.length && (e.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", this.onLegendHovered, !0))
        }
    }, {
        key: "setLegendWrapXY", value: function (t, e) {
            var i, a, s = this.w, o = s.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                r = o.getBoundingClientRect(), n = 0;
            "bottom" === s.config.legend.position ? n += s.globals.svgHeight - r.height / 2 : "top" === s.config.legend.position && (n = n + (0 < (r = (a = new pt(this.ctx)).dimHelpers.getTitleSubtitleCoords("title").height) ? r - 10 : 0) + (0 < (a = a.dimHelpers.getTitleSubtitleCoords("subtitle").height) ? a - 10 : 0)), o.style.position = "absolute", i = 0 + t + s.config.legend.offsetX, n = n + e + s.config.legend.offsetY, o.style.left = i + "px", o.style.top = n + "px", "bottom" === s.config.legend.position ? (o.style.top = "auto", o.style.bottom = 5 - s.config.legend.offsetY + "px") : "right" === s.config.legend.position && (o.style.left = "auto", o.style.right = 25 + s.config.legend.offsetX + "px"), ["width", "height"].forEach(function (t) {
                o.style[t] && (o.style[t] = parseInt(s.config.legend[t], 10) + "px")
            })
        }
    }, {
        key: "legendAlignHorizontal", value: function () {
            var t = this.w;
            t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
            var e = this.legendHelpers.getLegendBBox(), i = new pt(this.ctx),
                a = i.dimHelpers.getTitleSubtitleCoords("title"), s = i.dimHelpers.getTitleSubtitleCoords("subtitle"),
                i = 0;
            "bottom" === t.config.legend.position ? i = -e.clwh / 1.8 : "top" === t.config.legend.position && (i = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, i)
        }
    }, {
        key: "legendAlignVertical", value: function () {
            var t = this.w, e = this.legendHelpers.getLegendBBox(), i = 0;
            "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
        }
    }, {
        key: "onLegendHovered", value: function (t) {
            var e = this.w,
                i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
            "heatmap" === e.config.chart.type || this.isBarsDistributed ? i && (e = parseInt(t.target.getAttribute("rel"), 10) - 1, this.ctx.events.fireEvent("legendHover", [this.ctx, e, this.w]), new O(this.ctx).highlightRangeInSeries(t, t.target)) : !t.target.classList.contains("apexcharts-inactive-legend") && i && new O(this.ctx).toggleSeriesOnHover(t, t.target)
        }
    }, {
        key: "onLegendClick", value: function (t) {
            var e, i, a, s = this.w;
            s.config.legend.customLegendItems.length || !t.target.classList.contains("apexcharts-legend-text") && !t.target.classList.contains("apexcharts-legend-marker") || (e = parseInt(t.target.getAttribute("rel"), 10) - 1, i = "true" === t.target.getAttribute("data:collapsed"), "function" == typeof (a = this.w.config.chart.events.legendClick) && a(this.ctx, e, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, e, this.w]), "function" == typeof (a = this.w.config.legend.markers.onClick) && t.target.classList.contains("apexcharts-legend-marker") && (a(this.ctx, e, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, e, this.w])), "treemap" !== s.config.chart.type && "heatmap" !== s.config.chart.type && !this.isBarsDistributed && s.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(e, i))
        }
    }]), Jt), bt = (o($t, [{
        key: "createToolbar", value: function () {
            function t() {
                return document.createElement("div")
            }

            var s = this, o = this.w, e = t();
            if (e.setAttribute("class", "apexcharts-toolbar"), e.style.top = o.config.chart.toolbar.offsetY + "px", e.style.right = 3 - o.config.chart.toolbar.offsetX + "px", o.globals.dom.elWrap.appendChild(e), this.elZoom = t(), this.elZoomIn = t(), this.elZoomOut = t(), this.elPan = t(), this.elSelection = t(), this.elZoomReset = t(), this.elMenuIcon = t(), this.elMenu = t(), this.elCustomIcons = [], this.t = o.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var i = 0; i < this.t.customIcons.length; i++) this.elCustomIcons.push(t());

            function a(t, e, i) {
                var a = t.toLowerCase();
                s.t[a] && o.config.chart.zoom.enabled && r.push({
                    el: e,
                    icon: "string" == typeof s.t[a] ? s.t[a] : i,
                    title: s.localeValues[t],
                    class: "apexcharts-".concat(a, "-icon")
                })
            }

            var r = [];
            a("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), a("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');

            function n(t) {
                s.t[t] && o.config.chart[t].enabled && r.push({
                    el: "zoom" === t ? s.elZoom : s.elSelection,
                    icon: "string" == typeof s.t[t] ? s.t[t] : "zoom" === t ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                    title: s.localeValues["zoom" === t ? "selectionZoom" : "selection"],
                    class: o.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(t, "-icon")
                })
            }

            n("zoom"), n("selection"), this.t.pan && o.config.chart.zoom.enabled && r.push({
                el: this.elPan,
                icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                title: this.localeValues.pan,
                class: o.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
            }), a("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r.push({
                el: this.elMenuIcon,
                icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                title: this.localeValues.menu,
                class: "apexcharts-menu-icon"
            });
            for (var l = 0; l < this.elCustomIcons.length; l++) r.push({
                el: this.elCustomIcons[l],
                icon: this.t.customIcons[l].icon,
                title: this.t.customIcons[l].title,
                index: this.t.customIcons[l].index,
                class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l].class
            });
            r.forEach(function (t, e) {
                t.index && T.moveIndexInArray(r, e, t.index)
            });
            for (var h = 0; h < r.length; h++) I.setAttrs(r[h].el, {
                class: r[h].class,
                title: r[h].title
            }), r[h].el.innerHTML = r[h].icon, e.appendChild(r[h].el);
            this._createHamburgerMenu(e), o.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : o.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : o.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners()
        }
    }, {
        key: "_createHamburgerMenu", value: function (t) {
            this.elMenuItems = [], t.appendChild(this.elMenu), I.setAttrs(this.elMenu, {class: "apexcharts-menu"});
            var e = [{name: "exportSVG", title: this.localeValues.exportToSVG}, {
                name: "exportPNG",
                title: this.localeValues.exportToPNG
            }, {name: "exportCSV", title: this.localeValues.exportToCSV}];
            this.w.globals.allSeriesHasEqualX || e.splice(2, 1);
            for (var i = 0; i < e.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, I.setAttrs(this.elMenuItems[i], {
                class: "apexcharts-menu-item ".concat(e[i].name),
                title: e[i].title
            }), this.elMenu.appendChild(this.elMenuItems[i])
        }
    }, {
        key: "addToolbarEventListeners", value: function () {
            var e = this;
            this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function (t) {
                t.classList.contains("exportSVG") ? t.addEventListener("click", e.handleDownload.bind(e, "svg")) : t.classList.contains("exportPNG") ? t.addEventListener("click", e.handleDownload.bind(e, "png")) : t.classList.contains("exportCSV") && t.addEventListener("click", e.handleDownload.bind(e, "csv"))
            });
            for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w))
        }
    }, {
        key: "toggleZoomSelection", value: function (a) {
            this.ctx.getSyncedCharts().forEach(function (t) {
                t.ctx.toolbar.toggleOtherControls();
                var e = "selection" === a ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom,
                    i = "selection" === a ? "selectionEnabled" : "zoomEnabled";
                t.w.globals[i] = !t.w.globals[i], e.classList.contains(t.ctx.toolbar.selectedClass) ? e.classList.remove(t.ctx.toolbar.selectedClass) : e.classList.add(t.ctx.toolbar.selectedClass)
            })
        }
    }, {
        key: "getToolbarIconsReference", value: function () {
            var t = this.w;
            this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
        }
    }, {
        key: "enableZoomPanFromToolbar", value: function (t) {
            this.toggleOtherControls(), "pan" === t ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
            var e = "pan" === t ? this.elPan : this.elZoom, t = "pan" === t ? this.elZoom : this.elPan;
            e && e.classList.add(this.selectedClass), t && t.classList.remove(this.selectedClass)
        }
    }, {
        key: "togglePanning", value: function () {
            this.ctx.getSyncedCharts().forEach(function (t) {
                t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)
            })
        }
    }, {
        key: "toggleOtherControls", value: function () {
            var e = this, t = this.w;
            t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function (t) {
                t && t.classList.remove(e.selectedClass)
            })
        }
    }, {
        key: "handleZoomIn", value: function () {
            var t = this.w;
            t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY);
            var e = (this.minX + this.maxX) / 2, i = (this.minX + e) / 2, e = (this.maxX + e) / 2,
                e = this._getNewMinXMaxX(i, e);
            t.globals.disableZoomIn || this.zoomUpdateOptions(e.minX, e.maxX)
        }
    }, {
        key: "handleZoomOut", value: function () {
            var t, e, i = this.w;
            i.globals.isRangeBar && (this.minX = i.globals.minY, this.maxX = i.globals.maxY), "datetime" === i.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3 || (e = (this.minX + this.maxX) / 2, t = this.minX - (e - this.minX), e = this.maxX - (e - this.maxX), e = this._getNewMinXMaxX(t, e), i.globals.disableZoomOut || this.zoomUpdateOptions(e.minX, e.maxX))
        }
    }, {
        key: "_getNewMinXMaxX", value: function (t, e) {
            var i = this.w.config.xaxis.convertedCatToNumeric;
            return {minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e}
        }
    }, {
        key: "zoomUpdateOptions", value: function (t, e) {
            var i, a = this.w;
            void 0 !== t || void 0 !== e ? a.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = a.globals.dataPoints), e - t < 2) || (e = {
                xaxis: i = (t = this.getBeforeZoomRange(i = {
                    min: t,
                    max: e
                })) ? t.xaxis : i
            }, t = T.clone(a.globals.initialConfig.yaxis), a.config.chart.zoom.autoScaleYaxis && (t = new et(this.ctx).autoScaleY(this.ctx, t, {xaxis: i})), a.config.chart.group || (e.yaxis = t), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(e, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(i, t)) : this.handleZoomReset()
        }
    }, {
        key: "zoomCallback", value: function (t, e) {
            "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {xaxis: t, yaxis: e})
        }
    }, {
        key: "getBeforeZoomRange", value: function (t, e) {
            var i = null;
            return i = "function" == typeof this.ev.beforeZoom ? this.ev.beforeZoom(this, {xaxis: t, yaxis: e}) : i
        }
    }, {
        key: "toggleMenu", value: function () {
            var t = this;
            window.setTimeout(function () {
                t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open")
            }, 0)
        }
    }, {
        key: "handleDownload", value: function (t) {
            var e = this.w, i = new Q(this.ctx);
            switch (t) {
                case"svg":
                    i.exportToSVG(this.ctx);
                    break;
                case"png":
                    i.exportToPng(this.ctx);
                    break;
                case"csv":
                    i.exportToCSV({
                        series: e.config.series,
                        columnDelimiter: e.config.chart.toolbar.export.csv.columnDelimiter
                    })
            }
        }
    }, {
        key: "handleZoomReset", value: function (t) {
            this.ctx.getSyncedCharts().forEach(function (t) {
                var e = t.w;
                e.globals.lastXAxis.min = void 0, e.globals.lastXAxis.max = void 0, t.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.beforeResetZoom && (i = e.config.chart.events.beforeResetZoom(t, e)) && t.updateHelpers.revertDefaultAxisMinMax(i), "function" == typeof e.config.chart.events.zoomed && t.ctx.toolbar.zoomCallback({
                    min: e.config.xaxis.min,
                    max: e.config.xaxis.max
                }), e.globals.zoomed = !1;
                var i = t.ctx.series.emptyCollapsedSeries(T.clone(e.globals.initialSeries));
                t.updateHelpers._updateSeries(i, e.config.chart.animations.dynamicAnimation.enabled)
            })
        }
    }, {
        key: "destroy", value: function () {
            this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
        }
    }]), $t), mt = function () {
        n(a, bt);
        var i = c(a);

        function a(t) {
            var e;
            return s(this, a), (e = i.call(this, t)).ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new I(e.ctx), e.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0, e.moveDirection = "none", e
        }

        return o(a, [{
            key: "init", value: function (t) {
                var e = this, i = t.xyRatios, t = this.w, a = this;
                this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = t.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), t.globals.dom.elGraphical.add(this.zoomRect), t.globals.dom.elGraphical.add(this.selectionRect), "x" === t.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                    minX: 0,
                    minY: 0,
                    maxX: t.globals.gridWidth,
                    maxY: t.globals.gridHeight
                }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === t.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                    minX: 0,
                    maxX: t.globals.gridWidth
                }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = t.globals.dom.baseEl.querySelector("".concat(t.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function (t) {
                    e.hoverArea.addEventListener(t, a.svgMouseEvents.bind(a, i), {capture: !1, passive: !0})
                })
            }
        }, {
            key: "destroy", value: function () {
                this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
            }
        }, {
            key: "svgMouseEvents", value: function (t, e) {
                var i, a = this.w, s = this, o = this.ctx.toolbar,
                    r = (a.globals.zoomEnabled ? a.config.chart.zoom : a.config.chart.selection).type,
                    n = a.config.chart.toolbar.autoSelected;
                e.shiftKey ? (this.shiftWasPressed = !0, o.enableZoomPanFromToolbar("pan" === n ? "zoom" : "pan")) : this.shiftWasPressed && (o.enableZoomPanFromToolbar(n), this.shiftWasPressed = !1), e.target && (n = e.target.classList, e.target.parentNode && null !== e.target.parentNode && (i = e.target.parentNode.classList), n.contains("apexcharts-selection-rect") || n.contains("apexcharts-legend-marker") || n.contains("apexcharts-legend-text") || i && i.contains("apexcharts-toolbar") || (s.clientX = ("touchmove" === e.type || "touchstart" === e.type ? e.touches[0] : "touchend" === e.type ? e.changedTouches[0] : e).clientX, s.clientY = ("touchmove" === e.type || "touchstart" === e.type ? e.touches[0] : "touchend" === e.type ? e.changedTouches[0] : e).clientY, "mousedown" === e.type && 1 === e.which && (i = s.gridRect.getBoundingClientRect(), s.startX = s.clientX - i.left, s.startY = s.clientY - i.top, s.dragged = !1, s.w.globals.mousedown = !0), ("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (s.dragged = !0, a.globals.panEnabled ? (a.globals.selection = null, s.w.globals.mousedown && s.panDragging({
                    context: s,
                    zoomtype: r,
                    xyRatios: t
                })) : (s.w.globals.mousedown && a.globals.zoomEnabled || s.w.globals.mousedown && a.globals.selectionEnabled) && (s.selection = s.selectionDrawing({
                    context: s,
                    zoomtype: r
                }))), "mouseup" !== e.type && "touchend" !== e.type && "mouseleave" !== e.type || (e = s.gridRect.getBoundingClientRect(), s.w.globals.mousedown && (s.endX = s.clientX - e.left, s.endY = s.clientY - e.top, s.dragX = Math.abs(s.endX - s.startX), s.dragY = Math.abs(s.endY - s.startY), (a.globals.zoomEnabled || a.globals.selectionEnabled) && s.selectionDrawn({
                    context: s,
                    zoomtype: r
                }), a.globals.panEnabled && a.config.xaxis.convertedCatToNumeric && s.delayedPanScrolled()), a.globals.zoomEnabled && s.hideSelectionRect(this.selectionRect), s.dragged = !1, s.w.globals.mousedown = !1), this.makeSelectionRectDraggable()))
            }
        }, {
            key: "makeSelectionRectDraggable", value: function () {
                var t, e = this.w;
                !this.selectionRect || 0 < (t = this.selectionRect.node.getBoundingClientRect()).width && 0 < t.height && this.slDraggableRect.selectize({
                    points: "l, r",
                    pointSize: 8,
                    pointType: "rect"
                }).resize({
                    constraint: {
                        minX: 0,
                        minY: 0,
                        maxX: e.globals.gridWidth,
                        maxY: e.globals.gridHeight
                    }
                }).on("resizing", this.selectionDragging.bind(this, "resizing"))
            }
        }, {
            key: "preselectedSelection", value: function () {
                var t, e = this.w, i = this.xyRatios;
                e.globals.zoomEnabled || (void 0 !== e.globals.selection && null !== e.globals.selection ? this.drawSelectionRect(e.globals.selection) : void 0 !== e.config.chart.selection.xaxis.min && void 0 !== e.config.chart.selection.xaxis.max && (t = {
                    x: t = (e.config.chart.selection.xaxis.min - e.globals.minX) / i.xRatio,
                    y: 0,
                    width: e.globals.gridWidth - (e.globals.maxX - e.config.chart.selection.xaxis.max) / i.xRatio - t,
                    height: e.globals.gridHeight,
                    translateX: 0,
                    translateY: 0,
                    selectionEnabled: !0
                }, this.drawSelectionRect(t), this.makeSelectionRectDraggable(), "function" == typeof e.config.chart.events.selection && e.config.chart.events.selection(this.ctx, {
                    xaxis: {
                        min: e.config.chart.selection.xaxis.min,
                        max: e.config.chart.selection.xaxis.max
                    }, yaxis: {}
                })))
            }
        }, {
            key: "drawSelectionRect", value: function (t) {
                var e = t.x, i = t.y, a = t.width, s = t.height, o = t.translateX, r = t.translateY, n = this.w,
                    l = this.zoomRect, t = this.selectionRect;
                !this.dragged && null === n.globals.selection || (r = {transform: "translate(" + (void 0 === o ? 0 : o) + ", " + (void 0 === r ? 0 : r) + ")"}, n.globals.zoomEnabled && this.dragged && (l.attr({
                    x: e,
                    y: i,
                    width: a = a < 0 ? 1 : a,
                    height: s,
                    fill: n.config.chart.zoom.zoomedArea.fill.color,
                    "fill-opacity": n.config.chart.zoom.zoomedArea.fill.opacity,
                    stroke: n.config.chart.zoom.zoomedArea.stroke.color,
                    "stroke-width": n.config.chart.zoom.zoomedArea.stroke.width,
                    "stroke-opacity": n.config.chart.zoom.zoomedArea.stroke.opacity
                }), I.setAttrs(l.node, r)), n.globals.selectionEnabled && (t.attr({
                    x: e,
                    y: i,
                    width: 0 < a ? a : 0,
                    height: 0 < s ? s : 0,
                    fill: n.config.chart.selection.fill.color,
                    "fill-opacity": n.config.chart.selection.fill.opacity,
                    stroke: n.config.chart.selection.stroke.color,
                    "stroke-width": n.config.chart.selection.stroke.width,
                    "stroke-dasharray": n.config.chart.selection.stroke.dashArray,
                    "stroke-opacity": n.config.chart.selection.stroke.opacity
                }), I.setAttrs(t.node, r)))
            }
        }, {
            key: "hideSelectionRect", value: function (t) {
                t && t.attr({x: 0, y: 0, width: 0, height: 0})
            }
        }, {
            key: "selectionDrawing", value: function (t) {
                var e = t.context, i = t.zoomtype, a = this.w, s = e, o = this.gridRect.getBoundingClientRect(),
                    r = s.startX - 1, n = s.startY, l = !1, h = !1, c = s.clientX - o.left - r,
                    t = s.clientY - o.top - n;
                return Math.abs(c + r) > a.globals.gridWidth ? c = a.globals.gridWidth - r : s.clientX - o.left < 0 && (c = r), r > s.clientX - o.left && (l = !0, c = Math.abs(c)), n > s.clientY - o.top && (h = !0, t = Math.abs(t)), e = "x" === i ? {
                    x: l ? r - c : r,
                    y: 0,
                    width: c,
                    height: a.globals.gridHeight
                } : "y" === i ? {x: 0, y: h ? n - t : n, width: a.globals.gridWidth, height: t} : {
                    x: l ? r - c : r,
                    y: h ? n - t : n,
                    width: c,
                    height: t
                }, s.drawSelectionRect(e), s.selectionDragging("resizing"), e
            }
        }, {
            key: "selectionDragging", value: function (t, e) {
                var i = this, a = this.w, s = this.xyRatios, o = this.selectionRect, r = 0;
                "resizing" === t && (r = 30);
                t = function (t) {
                    return parseFloat(o.node.getAttribute(t))
                }, t = {x: t("x"), y: t("y"), width: t("width"), height: t("height")};
                a.globals.selection = t, "function" == typeof a.config.chart.events.selection && a.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function () {
                    var t = i.gridRect.getBoundingClientRect(), e = o.node.getBoundingClientRect(), t = {
                        xaxis: {
                            min: a.globals.xAxisScale.niceMin + (e.left - t.left) * s.xRatio,
                            max: a.globals.xAxisScale.niceMin + (e.right - t.left) * s.xRatio
                        },
                        yaxis: {
                            min: a.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * s.yRatio[0],
                            max: a.globals.yAxisScale[0].niceMax - (e.top - t.top) * s.yRatio[0]
                        }
                    };
                    a.config.chart.events.selection(i.ctx, t), a.config.chart.brush.enabled && void 0 !== a.config.chart.events.brushScrolled && a.config.chart.events.brushScrolled(i.ctx, t)
                }, r))
            }
        }, {
            key: "selectionDrawn", value: function (t) {
                var e = t.context, i = t.zoomtype, a = this.w, s = e, o = this.xyRatios, t = this.ctx.toolbar;
                s.startX > s.endX && (c = s.startX, s.startX = s.endX, s.endX = c), s.startY > s.endY && (r = s.startY, s.startY = s.endY, s.endY = r);
                var r, n, l, h, e = void 0, c = void 0,
                    c = a.globals.isRangeBar ? (e = a.globals.yAxisScale[0].niceMin + s.startX * o.invertedYRatio, a.globals.yAxisScale[0].niceMin + s.endX * o.invertedYRatio) : (e = a.globals.xAxisScale.niceMin + s.startX * o.xRatio, a.globals.xAxisScale.niceMin + s.endX * o.xRatio),
                    d = [], g = [];
                a.config.yaxis.forEach(function (t, e) {
                    d.push(a.globals.yAxisScale[e].niceMax - o.yRatio[e] * s.startY), g.push(a.globals.yAxisScale[e].niceMax - o.yRatio[e] * s.endY)
                }), s.dragged && (10 < s.dragX || 10 < s.dragY) && e !== c && (a.globals.zoomEnabled ? (n = T.clone(a.globals.initialConfig.yaxis), r = T.clone(a.globals.initialConfig.xaxis), a.globals.zoomed = !0, a.config.xaxis.convertedCatToNumeric && (e = Math.floor(e), c = Math.floor(c), e < 1 && (e = 1, c = a.globals.dataPoints), c - e < 2 && (c = e + 1)), "xy" !== i && "x" !== i || (r = {
                    min: e,
                    max: c
                }), "xy" !== i && "y" !== i || n.forEach(function (t, e) {
                    n[e].min = g[e], n[e].max = d[e]
                }), a.config.chart.zoom.autoScaleYaxis && (n = new et(s.ctx).autoScaleY(s.ctx, n, {xaxis: r})), !t || (l = t.getBeforeZoomRange(r, n)) && (r = l.xaxis || r, n = l.yaxis || n), l = {xaxis: r}, a.config.chart.group || (l.yaxis = n), s.ctx.updateHelpers._updateOptions(l, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a.config.chart.events.zoomed && t.zoomCallback(r, n)) : a.globals.selectionEnabled && (h = null, c = {
                    min: e,
                    max: c
                }, "xy" !== i && "y" !== i || (h = T.clone(a.config.yaxis)).forEach(function (t, e) {
                    h[e].min = g[e], h[e].max = d[e]
                }), a.globals.selection = s.selection, "function" == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, {
                    xaxis: c,
                    yaxis: h
                })))
            }
        }, {
            key: "panDragging", value: function (t) {
                var e = t.context, t = this.w, e = e;
                void 0 !== t.globals.lastClientPosition.x && (i = t.globals.lastClientPosition.x - e.clientX, a = t.globals.lastClientPosition.y - e.clientY, Math.abs(i) > Math.abs(a) && 0 < i ? this.moveDirection = "left" : Math.abs(i) > Math.abs(a) && i < 0 ? this.moveDirection = "right" : Math.abs(a) > Math.abs(i) && 0 < a ? this.moveDirection = "up" : Math.abs(a) > Math.abs(i) && a < 0 && (this.moveDirection = "down")), t.globals.lastClientPosition = {
                    x: e.clientX,
                    y: e.clientY
                };
                var i = t.globals.isRangeBar ? t.globals.minY : t.globals.minX,
                    a = t.globals.isRangeBar ? t.globals.maxY : t.globals.maxX;
                t.config.xaxis.convertedCatToNumeric || e.panScrolled(i, a)
            }
        }, {
            key: "delayedPanScrolled", value: function () {
                var t = this.w, e = t.globals.minX, i = t.globals.maxX, a = (t.globals.maxX - t.globals.minX) / 2;
                "left" === this.moveDirection ? (e = t.globals.minX + a, i = t.globals.maxX + a) : "right" === this.moveDirection && (e = t.globals.minX - a, i = t.globals.maxX - a), e = Math.floor(e), i = Math.floor(i), this.updateScrolledChart({
                    xaxis: {
                        min: e,
                        max: i
                    }
                }, e, i)
            }
        }, {
            key: "panScrolled", value: function (t, e) {
                var i = this.w, a = this.xyRatios, s = T.clone(i.globals.initialConfig.yaxis), o = a.xRatio,
                    r = i.globals.minX, n = i.globals.maxX;
                i.globals.isRangeBar && (o = a.invertedYRatio, r = i.globals.minY, n = i.globals.maxY), "left" === this.moveDirection ? (t = r + i.globals.gridWidth / 15 * o, e = n + i.globals.gridWidth / 15 * o) : "right" === this.moveDirection && (t = r - i.globals.gridWidth / 15 * o, e = n - i.globals.gridWidth / 15 * o), i.globals.isRangeBar || (t < i.globals.initialMinX || e > i.globals.initialMaxX) && (t = r, e = n);
                n = {min: t, max: e};
                i.config.chart.zoom.autoScaleYaxis && (s = new et(this.ctx).autoScaleY(this.ctx, s, {xaxis: n}));
                n = {xaxis: {min: t, max: e}};
                i.config.chart.group || (n.yaxis = s), this.updateScrolledChart(n, t, e)
            }
        }, {
            key: "updateScrolledChart", value: function (t, e, i) {
                var a = this.w;
                this.ctx.updateHelpers._updateOptions(t, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, {
                    xaxis: {
                        min: e,
                        max: i
                    }
                })
            }
        }]), a
    }(), vt = (o(Zt, [{
        key: "getNearestValues", value: function (t) {
            var e = t.hoverArea, i = t.elGrid, a = t.clientX, s = t.clientY, o = this.w, r = i.getBoundingClientRect(),
                n = r.width, l = r.height, h = n / (o.globals.dataPoints - 1), c = l / o.globals.dataPoints,
                t = this.hasBars();
            !o.globals.comboCharts && !t || o.config.xaxis.convertedCatToNumeric || (h = n / o.globals.dataPoints);
            i = a - r.left - o.globals.barPadForNumericAxis, a = s - r.top;
            i < 0 || a < 0 || n < i || l < a ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : o.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : o.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
            s = Math.round(i / h), r = Math.floor(a / c);
            t && !o.config.xaxis.convertedCatToNumeric && (s = Math.ceil(i / h), --s);
            for (var e = null, d = [], g = 0; g < o.globals.seriesXvalues.length; g++) d.push([o.globals.seriesXvalues[g][0] - 1e-6].concat(o.globals.seriesXvalues[g]));
            d = d.map(function (t) {
                return t.filter(function (t) {
                    return t
                })
            }), t = o.globals.seriesYvalues.map(function (t) {
                return t.filter(function (t) {
                    return T.isNumber(t)
                })
            });
            return o.globals.isXNumeric && (n = i * ((h = this.ttCtx.getElGrid().getBoundingClientRect()).width / n), l = a * (h.height / l), e = (c = this.closestInMultiArray(n, l, d, t)).index, s = c.j, null !== e && (d = o.globals.seriesXvalues[e], s = this.closestInArray(n, d).index)), o.globals.capturedSeriesIndex = null === e ? -1 : e, (!s || s < 1) && (s = 0), o.globals.isBarHorizontal ? o.globals.capturedDataPointIndex = r : o.globals.capturedDataPointIndex = s, {
                capturedSeries: e,
                j: o.globals.isBarHorizontal ? r : s,
                hoverX: i,
                hoverY: a
            }
        }
    }, {
        key: "closestInMultiArray", value: function (r, n, l, h) {
            var t = this.w, e = 0, c = null, d = -1;
            1 < t.globals.series.length ? e = this.getFirstActiveXArray(l) : c = 0;
            var t = h[e][0], e = l[e][0], i = Math.abs(r - e), g = Math.abs(n - t) + i;
            return h.map(function (t, o) {
                t.map(function (t, e) {
                    var i = Math.abs(n - h[o][e]), a = Math.abs(r - l[o][e]), s = a + i;
                    s < g && (g = s, c = o, d = e)
                })
            }), {index: c, j: d}
        }
    }, {
        key: "getFirstActiveXArray", value: function (t) {
            for (var e = 0, i = t.map(function (t, e) {
                return 0 < t.length ? e : -1
            }), a = 0; a < i.length; a++) if (-1 !== i[a]) {
                e = i[a];
                break
            }
            return e
        }
    }, {
        key: "closestInArray", value: function (t, e) {
            for (var i = e[0], a = null, s = Math.abs(t - i), o = 0; o < e.length; o++) {
                var r = Math.abs(t - e[o]);
                r < s && (s = r, a = o)
            }
            return {index: a}
        }
    }, {
        key: "isXoverlap", value: function (t) {
            var e = [], i = this.w.globals.seriesX.filter(function (t) {
                return void 0 !== t[0]
            });
            if (0 < i.length) for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push("unEqual");
            return 0 === e.length
        }
    }, {
        key: "isInitialSeriesSameLen", value: function () {
            for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++) if (e[i].data.length !== e[i + 1].data.length) {
                t = !1;
                break
            }
            return t
        }
    }, {
        key: "getBarsHeight", value: function (t) {
            return g(t).reduce(function (t, e) {
                return t + e.getBBox().height
            }, 0)
        }
    }, {
        key: "getElMarkers", value: function () {
            return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")
        }
    }, {
        key: "getAllMarkers", value: function () {
            var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
            (t = g(t)).sort(function (t, e) {
                return Number(e.getAttribute("data:realIndex")) < Number(t.getAttribute("data:realIndex")) ? 0 : -1
            });
            var e = [];
            return t.forEach(function (t) {
                e.push(t.querySelector(".apexcharts-marker"))
            }), e
        }
    }, {
        key: "hasMarkers", value: function () {
            return 0 < this.getElMarkers().length
        }
    }, {
        key: "getElBars", value: function () {
            return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")
        }
    }, {
        key: "hasBars", value: function () {
            return 0 < this.getElBars().length
        }
    }, {
        key: "getHoverMarkerSize", value: function (t) {
            var e = this.w, i = e.config.markers.hover.size;
            return i = void 0 === i ? e.globals.markers.size[t] + e.config.markers.hover.sizeOffset : i
        }
    }, {
        key: "toggleAllTooltipSeriesGroups", value: function (t) {
            var e = this.w, i = this.ttCtx;
            0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
            for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++) "enable" === t ? (a[s].classList.add("apexcharts-active"), a[s].style.display = e.config.tooltip.items.display) : (a[s].classList.remove("apexcharts-active"), a[s].style.display = "none")
        }
    }]), Zt), yt = (o(qt, [{
        key: "drawSeriesTexts", value: function (t) {
            var e = t.shared, i = void 0 === e || e, a = t.ttItems, s = t.i, o = void 0 === s ? 0 : s, r = t.j,
                n = void 0 === r ? null : r, e = t.y1, s = t.y2, r = t.e, t = this.w;
            void 0 !== t.config.tooltip.custom ? this.handleCustomTooltip({
                i: o,
                j: n,
                y1: e,
                y2: s,
                w: t
            }) : this.toggleActiveInactiveSeries(i);
            t = this.getValuesToPrint({i: o, j: n});
            this.printLabels({i: o, j: n, values: t, ttItems: a, shared: i, e: r});
            r = this.ttCtx.getElTooltip();
            this.ttCtx.tooltipRect.ttWidth = r.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = r.getBoundingClientRect().height
        }
    }, {
        key: "printLabels", value: function (t) {
            function s(t) {
                return g.globals.seriesGoals[t] && g.globals.seriesGoals[t][l] && Array.isArray(g.globals.seriesGoals[t][l])
            }

            var o, r = this, n = t.i, l = t.j, e = t.values, h = t.ttItems, c = t.shared, d = t.e, g = this.w, u = [],
                p = e.xVal, f = e.zVal, x = e.xAxisTTVal, b = "", m = g.globals.colors[n];
            null !== l && g.config.plotOptions.bar.distributed && (m = g.globals.colors[l]);
            for (var i = 0, a = g.globals.series.length - 1; i < g.globals.series.length; i++, a--) !function (t, e) {
                var i = r.getFormatters(n);
                b = r.getSeriesName({
                    fn: i.yLbTitleFormatter,
                    index: n,
                    seriesIndex: n,
                    j: l
                }), "treemap" === g.config.chart.type && (b = i.yLbTitleFormatter(String(g.config.series[n].data[l].x), {
                    series: g.globals.series,
                    seriesIndex: n,
                    dataPointIndex: l,
                    w: g
                }));
                var a = g.config.tooltip.inverseOrder ? e : t;
                g.globals.axisCharts && (t = function (t) {
                    return i.yLbFormatter(g.globals.series[t][l], {
                        series: g.globals.series,
                        seriesIndex: t,
                        dataPointIndex: l,
                        w: g
                    })
                }, c ? (i = r.getFormatters(a), b = r.getSeriesName({
                    fn: i.yLbTitleFormatter,
                    index: a,
                    seriesIndex: n,
                    j: l
                }), m = g.globals.colors[a], o = t(a), s(a) && (u = g.globals.seriesGoals[a][l].map(function (t) {
                    return {attrs: t, val: i.yLbFormatter(t.value, {seriesIndex: a, dataPointIndex: l, w: g})}
                }))) : (d && d.target && d.target.getAttribute("fill") && (m = d.target.getAttribute("fill")), o = t(n), s(n) && Array.isArray(g.globals.seriesGoals[n][l]) && (u = g.globals.seriesGoals[n][l].map(function (t) {
                    return {attrs: t, val: i.yLbFormatter(t.value, {seriesIndex: n, dataPointIndex: l, w: g})}
                })))), null === l && (o = i.yLbFormatter(g.globals.series[n], M(M({}, g), {}, {
                    seriesIndex: n,
                    dataPointIndex: n
                }))), r.DOMHandling({
                    i: n,
                    t: a,
                    j: l,
                    ttItems: h,
                    values: {val: o, goalVals: u, xVal: p, xAxisTTVal: x, zVal: f},
                    seriesName: b,
                    shared: c,
                    pColor: m
                })
            }(i, a)
        }
    }, {
        key: "getFormatters", value: function (t) {
            var e, i = this.w, a = i.globals.yLabelFormatters[t];
            return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (a = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, {
                yLbFormatter: a = "function" != typeof a ? i.globals.yLabelFormatters[0] || function (t) {
                    return t
                } : a, yLbTitleFormatter: e = "function" != typeof e ? function (t) {
                    return t
                } : e
            }
        }
    }, {
        key: "getSeriesName", value: function (t) {
            var e = t.fn, i = t.index, a = t.seriesIndex, s = t.j, t = this.w;
            return e(String(t.globals.seriesNames[i]), {
                series: t.globals.series,
                seriesIndex: a,
                dataPointIndex: s,
                w: t
            })
        }
    }, {
        key: "DOMHandling", value: function (t) {
            t.i;
            var e = t.t, i = t.j, a = t.ttItems, s = t.values, o = t.seriesName, r = t.shared, n = t.pColor, l = this.w,
                h = this.ttCtx, c = s.val, d = s.goalVals, g = s.xVal, u = s.xAxisTTVal, t = s.zVal, s = null,
                s = a[e].children;
            l.config.tooltip.fillSeriesColor && (a[e].style.backgroundColor = n, s[0].style.display = "none"), h.showTooltipTitle && (null === h.tooltipTitle && (h.tooltipTitle = l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h.tooltipTitle.innerHTML = g), h.blxaxisTooltip && (h.xaxisTooltipText.innerHTML = "" !== u ? u : g);
            g = a[e].querySelector(".apexcharts-tooltip-text-y-label");
            g && (g.innerHTML = o || "");
            o = a[e].querySelector(".apexcharts-tooltip-text-y-value");
            o && (o.innerHTML = void 0 !== c ? c : ""), s[0] && s[0].classList.contains("apexcharts-tooltip-marker") && (l.config.tooltip.marker.fillColors && Array.isArray(l.config.tooltip.marker.fillColors) && (n = l.config.tooltip.marker.fillColors[e]), s[0].style.backgroundColor = n), l.config.tooltip.marker.show || (s[0].style.display = "none");
            var p = a[e].querySelector(".apexcharts-tooltip-text-goals-label"),
                f = a[e].querySelector(".apexcharts-tooltip-text-goals-value");
            d.length && l.globals.seriesGoals[e] ? (n = function () {
                var i = "<div >", a = "<div>";
                d.forEach(function (t, e) {
                    i += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(t.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(t.attrs.name, "</div>"), a += "<div>".concat(t.val, "</div>")
                }), p.innerHTML = i + "</div>", f.innerHTML = a + "</div>"
            }, !r || l.globals.seriesGoals[e][i] && Array.isArray(l.globals.seriesGoals[e][i]) ? n() : (p.innerHTML = "", f.innerHTML = "")) : (p.innerHTML = "", f.innerHTML = ""), null !== t && (a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l.config.tooltip.z.title, a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== t ? t : ""), r && s[0] && (null == c || -1 < l.globals.collapsedSeriesIndices.indexOf(e) ? s[0].parentNode.style.display = "none" : s[0].parentNode.style.display = l.config.tooltip.items.display)
        }
    }, {
        key: "toggleActiveInactiveSeries", value: function (t) {
            var e = this.w;
            t ? this.tooltipUtil.toggleAllTooltipSeriesGroups("enable") : (this.tooltipUtil.toggleAllTooltipSeriesGroups("disable"), (t = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group")) && (t.classList.add("apexcharts-active"), t.style.display = e.config.tooltip.items.display))
        }
    }, {
        key: "getValuesToPrint", value: function (t) {
            var e = t.i, i = t.j, a = this.w, s = this.ctx.series.filteredSeriesX(), o = "", r = "", n = null, l = null,
                h = {series: a.globals.series, seriesIndex: e, dataPointIndex: i, w: a}, t = a.globals.ttZFormatter;
            null === i ? l = a.globals.series[e] : a.globals.isXNumeric && "treemap" !== a.config.chart.type ? (o = s[e][i], 0 === s[e].length && (o = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : o = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : "";
            s = o, o = a.globals.isXNumeric && "datetime" === a.config.xaxis.type ? new $(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, s, s, {
                i: void 0,
                dateFormatter: new V(this.ctx).formatDate,
                w: this.w
            }) : a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](s, h) : a.globals.xLabelFormatter(s, h);
            return void 0 !== a.config.tooltip.x.formatter && (o = a.globals.ttKeyFormatter(s, h)), 0 < a.globals.seriesZ.length && 0 < a.globals.seriesZ[e].length && (n = t(a.globals.seriesZ[e][i], a)), r = "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(s, h) : o, {
                val: Array.isArray(l) ? l.join(" ") : l,
                xVal: Array.isArray(o) ? o.join(" ") : o,
                xAxisTTVal: Array.isArray(r) ? r.join(" ") : r,
                zVal: n
            }
        }
    }, {
        key: "handleCustomTooltip", value: function (t) {
            var e = t.i, i = t.j, a = t.y1, s = t.y2, o = t.w, r = this.ttCtx.getElTooltip(),
                t = o.config.tooltip.custom;
            Array.isArray(t) && t[e] && (t = t[e]), r.innerHTML = t({
                ctx: this.ctx,
                series: o.globals.series,
                seriesIndex: e,
                dataPointIndex: i,
                y1: a,
                y2: s,
                w: o
            })
        }
    }]), qt), wt = (o(Ut, [{
        key: "moveXCrosshairs", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, i = this.ttCtx, a = this.w,
                s = i.getElXCrosshairs(), o = t - i.xcrosshairsWidth / 2, t = a.globals.labels.slice().length;
            null !== e && (o = a.globals.gridWidth / t * e), null !== s && (s.setAttribute("x", o), s.setAttribute("x1", o), s.setAttribute("x2", o), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("apexcharts-active")), (o = o < 0 ? 0 : o) > a.globals.gridWidth && (o = a.globals.gridWidth), i.blxaxisTooltip && (s = o, "tickWidth" !== a.config.xaxis.crosshairs.width && "barWidth" !== a.config.xaxis.crosshairs.width || (s = o + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(s))
        }
    }, {
        key: "moveYCrosshairs", value: function (t) {
            var e = this.ttCtx;
            null !== e.ycrosshairs && I.setAttrs(e.ycrosshairs, {
                y1: t,
                y2: t
            }), null !== e.ycrosshairsHidden && I.setAttrs(e.ycrosshairsHidden, {y1: t, y2: t})
        }
    }, {
        key: "moveXAxisTooltip", value: function (t) {
            var e, i = this.w, a = this.ttCtx;
            null !== a.xaxisTooltip && (a.xaxisTooltip.classList.add("apexcharts-active"), e = a.xaxisOffY + i.config.xaxis.tooltip.offsetY + i.globals.translateY + 1 + i.config.xaxis.offsetY, t -= a.xaxisTooltip.getBoundingClientRect().width / 2, isNaN(t) || (t += i.globals.translateX, i = new I(this.ctx).getTextRects(a.xaxisTooltipText.innerHTML), a.xaxisTooltipText.style.minWidth = i.width + "px", a.xaxisTooltip.style.left = t + "px", a.xaxisTooltip.style.top = e + "px"))
        }
    }, {
        key: "moveYAxisTooltip", value: function (t) {
            var e = this.w, i = this.ttCtx;
            null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
            var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s = e.globals.translateY + a,
                o = i.yaxisTTEls[t].getBoundingClientRect().height, a = e.globals.translateYAxisX[t] - 2;
            e.config.yaxis[t].opposite && (a -= 26), s -= o / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = a + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active")
        }
    }, {
        key: "moveTooltip", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, a = this.w, s = this.ttCtx,
                o = s.getElTooltip(), r = s.tooltipRect, i = null !== i ? parseFloat(i) : 1, t = parseFloat(t) + i + 5,
                e = parseFloat(e) + i / 2;
            (t = (t = t > a.globals.gridWidth / 2 ? t - r.ttWidth - i - 15 : t) > a.globals.gridWidth - r.ttWidth - 10 ? a.globals.gridWidth - r.ttWidth : t) < -20 && (t = -20), a.config.tooltip.followCursor ? (i = s.getElGrid().getBoundingClientRect(), e = s.e.clientY + a.globals.translateY - i.top - r.ttHeight / 2) : a.globals.isBarHorizontal ? e -= r.ttHeight : (e = r.ttHeight / 2 + e > a.globals.gridHeight ? a.globals.gridHeight - r.ttHeight + a.globals.translateY : e) < 0 && (e = 0), isNaN(t) || (t += a.globals.translateX, o.style.left = t + "px", o.style.top = e + "px")
        }
    }, {
        key: "moveMarkers", value: function (t, e) {
            var i = this.w, a = this.ttCtx;
            if (0 < i.globals.markers.size[t]) for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), o = 0; o < s.length; o++) parseInt(s[o].getAttribute("rel"), 10) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[o])); else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
        }
    }, {
        key: "moveDynamicPointOnHover", value: function (t, e) {
            var i = this.w, a = this.ttCtx, s = i.globals.pointsArray, o = a.tooltipUtil.getHoverMarkerSize(e),
                r = i.config.series[e].type;
            r && ("column" === r || "candlestick" === r || "boxPlot" === r) || (r = s[e][t][0], t = s[e][t][1] || 0, (e = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"))) && t < i.globals.gridHeight && 0 < t && (e.setAttribute("r", o), e.setAttribute("cx", r), e.setAttribute("cy", t)), this.moveXCrosshairs(r), a.fixedTooltip || this.moveTooltip(r, t, o))
        }
    }, {
        key: "moveDynamicPointsOnHover", value: function (t) {
            var e = this.ttCtx, i = e.w, a = 0, s = 0, o = i.globals.pointsArray,
                r = new O(this.ctx).getActiveConfigSeriesIndex(!0), n = e.tooltipUtil.getHoverMarkerSize(r);
            o[r] && (a = o[r][t][0], s = o[r][t][1]);
            var l = e.tooltipUtil.getAllMarkers();
            if (null !== l) for (var h = 0; h < i.globals.series.length; h++) {
                var c = o[h];
                i.globals.comboCharts && void 0 === c && l.splice(h, 0, null), c && c.length && (c = o[h][t][1], l[h].setAttribute("cx", a), null !== c && !isNaN(c) && c < i.globals.gridHeight && 0 < c ? (l[h] && l[h].setAttribute("r", n), l[h] && l[h].setAttribute("cy", c)) : l[h] && l[h].setAttribute("r", 0))
            }
            this.moveXCrosshairs(a), e.fixedTooltip || (s = s || i.globals.gridHeight, this.moveTooltip(a, s, n))
        }
    }, {
        key: "moveStickyTooltipOverBars", value: function (t) {
            var e = this.w, i = this.ttCtx, a = (e.globals.columnSeries || e.globals.series).length,
                s = 2 <= a && a % 2 == 0 ? Math.floor(a / 2) : Math.floor(a / 2) + 1;
            e.globals.isBarHorizontal && (s = new O(this.ctx).getActiveConfigSeriesIndex(!1, "desc") + 1);
            var o = e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "']")),
                r = o ? parseFloat(o.getAttribute("cx")) : 0, n = o ? parseFloat(o.getAttribute("cy")) : 0,
                l = o ? parseFloat(o.getAttribute("barWidth")) : 0, h = o ? parseFloat(o.getAttribute("barHeight")) : 0,
                s = i.getElGrid().getBoundingClientRect();
            e.globals.isXNumeric ? (r -= a % 2 != 0 ? l / 2 : 0, o && (o.classList.contains("apexcharts-candlestick-area") || o.classList.contains("apexcharts-boxPlot-area")) && e.globals.comboCharts && (r -= l / 2)) : e.globals.isBarHorizontal || (r = i.xAxisTicksPositions[t - 1] + i.dataPointsDividedWidth / 2, isNaN(r) && (r = i.xAxisTicksPositions[t] - i.dataPointsDividedWidth / 2)), e.globals.isBarHorizontal ? n += h / 3 : n = i.e.clientY - s.top - i.tooltipRect.ttHeight / 2, e.globals.isBarHorizontal || this.moveXCrosshairs(r), i.fixedTooltip || (e = n || e.globals.gridHeight, this.moveTooltip(r, e))
        }
    }]), Ut), kt = (o(jt, [{
        key: "drawDynamicPoints", value: function () {
            var t = this.w, e = new I(this.ctx), i = new R(this.ctx),
                a = g(a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"));
            t.config.chart.stacked && a.sort(function (t, e) {
                return parseFloat(t.getAttribute("data:realIndex")) - parseFloat(e.getAttribute("data:realIndex"))
            });
            for (var s = 0; s < a.length; s++) {
                var o, r, n = a[s].querySelector(".apexcharts-series-markers-wrap");
                null !== n && (o = void 0, r = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4)), "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (r += " no-pointer-events"), r = i.getMarkerConfig({
                    cssClass: r,
                    seriesIndex: Number(n.getAttribute("data:realIndex"))
                }), (o = e.drawMarker(0, 0, r)).node.setAttribute("default-marker-size", 0), (r = document.createElementNS(t.globals.SVGNS, "g")).classList.add("apexcharts-series-markers"), r.appendChild(o.node), n.appendChild(r))
            }
        }
    }, {
        key: "enlargeCurrentPoint", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, s = this.w;
            "bubble" !== s.config.chart.type && this.newPointSize(t, e);
            t = e.getAttribute("cx"), e = e.getAttribute("cy");
            null !== i && null !== a && (t = i, e = a), this.tooltipPosition.moveXCrosshairs(t), this.fixedTooltip || ("radar" === s.config.chart.type && (a = this.ttCtx.getElGrid().getBoundingClientRect(), t = this.ttCtx.e.clientX - a.left), this.tooltipPosition.moveTooltip(t, e, s.config.markers.hover.size))
        }
    }, {
        key: "enlargePoints", value: function (t) {
            for (var e = this.w, i = this.ttCtx, a = t, s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = e.config.markers.hover.size, r = 0; r < s.length; r++) {
                var n = s[r].getAttribute("rel"), l = s[r].getAttribute("index");
                void 0 === o && (o = e.globals.markers.size[l] + e.config.markers.hover.sizeOffset), a === parseInt(n, 10) ? (this.newPointSize(a, s[r]), l = s[r].getAttribute("cx"), n = s[r].getAttribute("cy"), this.tooltipPosition.moveXCrosshairs(l), i.fixedTooltip || this.tooltipPosition.moveTooltip(l, n, o)) : this.oldPointSize(s[r])
            }
        }
    }, {
        key: "newPointSize", value: function (t, e) {
            var i = this.w, a = i.config.markers.hover.size,
                t = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
            "0" !== t.getAttribute("default-marker-size") && (e = parseInt(t.getAttribute("index"), 10), void 0 === a && (a = i.globals.markers.size[e] + i.config.markers.hover.sizeOffset), t.setAttribute("r", a = a < 0 ? 0 : a))
        }
    }, {
        key: "oldPointSize", value: function (t) {
            var e = parseFloat(t.getAttribute("default-marker-size"));
            t.setAttribute("r", e)
        }
    }, {
        key: "resetPointsSize", value: function () {
            for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                var i = parseFloat(t[e].getAttribute("default-marker-size"));
                T.isNumber(i) && 0 <= i ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
            }
        }
    }]), jt), At = (o(_t, [{
        key: "getAttr", value: function (t, e) {
            return parseFloat(t.target.getAttribute(e))
        }
    }, {
        key: "handleHeatTreeTooltip", value: function (t) {
            var e, i, a, s, o = t.e, r = t.opt, n = t.x, l = t.y, h = t.type, c = this.ttCtx, d = this.w;
            return o.target.classList.contains("apexcharts-".concat(h, "-rect")) && (e = this.getAttr(o, "i"), i = this.getAttr(o, "j"), a = this.getAttr(o, "cx"), s = this.getAttr(o, "cy"), t = this.getAttr(o, "width"), h = this.getAttr(o, "height"), c.tooltipLabels.drawSeriesTexts({
                ttItems: r.ttItems,
                i: e,
                j: i,
                shared: !1,
                e: o
            }), d.globals.capturedSeriesIndex = e, d.globals.capturedDataPointIndex = i, n = a + c.tooltipRect.ttWidth / 2 + t, l = s + c.tooltipRect.ttHeight / 2 - h / 2, c.tooltipPosition.moveXCrosshairs(a + t / 2), n > d.globals.gridWidth / 2 && (n = a - c.tooltipRect.ttWidth / 2 + t), c.w.config.tooltip.followCursor && (t = d.globals.dom.elWrap.getBoundingClientRect(), n = d.globals.clientX - t.left - c.tooltipRect.ttWidth / 2, l = d.globals.clientY - t.top - c.tooltipRect.ttHeight - 5)), {
                x: n,
                y: l
            }
        }
    }, {
        key: "handleMarkerTooltip", value: function (t) {
            var e, i, a, s, o, r = t.e, n = t.opt, l = t.x, h = t.y, c = this.w, d = this.ttCtx;
            return r.target.classList.contains("apexcharts-marker") && (o = parseInt(n.paths.getAttribute("cx"), 10), e = parseInt(n.paths.getAttribute("cy"), 10), i = parseFloat(n.paths.getAttribute("val")), s = parseInt(n.paths.getAttribute("rel"), 10), t = parseInt(n.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, d.intersect && (a = T.findAncestor(n.paths, "apexcharts-series")) && (t = parseInt(a.getAttribute("data:realIndex"), 10)), d.tooltipLabels.drawSeriesTexts({
                ttItems: n.ttItems,
                i: t,
                j: s,
                shared: !d.showOnIntersect && c.config.tooltip.shared,
                e: r
            }), "mouseup" === r.type && d.markerClick(r, t, s), c.globals.capturedSeriesIndex = t, c.globals.capturedDataPointIndex = s, l = o, h = e + c.globals.translateY - 1.4 * d.tooltipRect.ttHeight, d.w.config.tooltip.followCursor && (o = d.getElGrid().getBoundingClientRect(), h = d.e.clientY + c.globals.translateY - o.top), d.marker.enlargeCurrentPoint(s, n.paths, l, h = i < 0 ? e : h)), {
                x: l,
                y: h
            }
        }
    }, {
        key: "handleBarTooltip", value: function (t) {
            var e, i = t.e, a = t.opt, s = this.w, o = this.ttCtx, r = o.getElTooltip(), n = 0, l = 0, h = 0,
                c = this.getBarTooltipXY({e: i, opt: a}), d = c.i, t = c.barHeight, i = c.j;
            s.globals.capturedSeriesIndex = d, s.globals.capturedDataPointIndex = i, s.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !s.config.tooltip.shared ? (l = c.x, h = c.y, e = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[d] : s.config.stroke.width, n = l) : s.globals.comboCharts || s.config.tooltip.shared || (n /= 2), isNaN(h) ? h = s.globals.svgHeight - o.tooltipRect.ttHeight : h < 0 && (h = 0);
            c = parseInt(a.paths.parentNode.getAttribute("data:realIndex"), 10), a = s.globals.isMultipleYAxis ? s.config.yaxis[c] && s.config.yaxis[c].reversed : s.config.yaxis[0].reversed;
            l + o.tooltipRect.ttWidth > s.globals.gridWidth && !a ? l -= o.tooltipRect.ttWidth : l < 0 && (l = 0), o.w.config.tooltip.followCursor && (c = o.getElGrid().getBoundingClientRect(), h = o.e.clientY - c.top), null === o.tooltip && (o.tooltip = s.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), s.config.tooltip.shared || (0 < s.globals.comboBarCount ? o.tooltipPosition.moveXCrosshairs(n + e / 2) : o.tooltipPosition.moveXCrosshairs(n)), !o.fixedTooltip && (!s.config.tooltip.shared || s.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (a && (l -= o.tooltipRect.ttWidth) < 0 && (l = 0), r.style.left = l + s.globals.translateX + "px", !a || s.globals.isBarHorizontal && o.tooltipUtil.hasBars() || (h = h + t - 2 * (s.globals.series[d][i] < 0 ? t : 0)), o.tooltipRect.ttHeight + h > s.globals.gridHeight ? (h = s.globals.gridHeight - o.tooltipRect.ttHeight + s.globals.translateY, r.style.top = h + "px") : r.style.top = h + s.globals.translateY - o.tooltipRect.ttHeight / 2 + "px")
        }
    }, {
        key: "getBarTooltipXY", value: function (t) {
            var e, i, a, s, o, r, n, l = t.e, h = t.opt, c = this.w, d = null, g = this.ttCtx, u = 0, p = 0, f = 0,
                x = 0, b = 0, m = l.target.classList;
            return (m.contains("apexcharts-bar-area") || m.contains("apexcharts-candlestick-area") || m.contains("apexcharts-boxPlot-area") || m.contains("apexcharts-rangebar-area")) && (n = (e = l.target).getBoundingClientRect(), i = h.elGrid.getBoundingClientRect(), a = n.height, b = n.height, s = n.width, o = parseInt(e.getAttribute("cx"), 10), r = parseInt(e.getAttribute("cy"), 10), x = parseFloat(e.getAttribute("barWidth")), t = ("touchmove" === l.type ? l.touches[0] : l).clientX, d = parseInt(e.getAttribute("j"), 10), u = parseInt(e.parentNode.getAttribute("rel"), 10) - 1, m = e.getAttribute("data-range-y1"), n = e.getAttribute("data-range-y2"), c.globals.comboCharts && (u = parseInt(e.parentNode.getAttribute("data:realIndex"), 10)), g.tooltipLabels.drawSeriesTexts({
                ttItems: h.ttItems,
                i: u,
                j: d,
                y1: m ? parseInt(m, 10) : null,
                y2: n ? parseInt(n, 10) : null,
                shared: !g.showOnIntersect && c.config.tooltip.shared,
                e: l
            }), f = c.config.tooltip.followCursor ? c.globals.isBarHorizontal ? (p = t - i.left + 15, r - g.dataPointsDividedHeight + a / 2 - g.tooltipRect.ttHeight / 2) : (p = c.globals.isXNumeric ? o - s / 2 : o - g.dataPointsDividedWidth + s / 2, l.clientY - i.top - g.tooltipRect.ttHeight / 2 - 15) : c.globals.isBarHorizontal ? ((p = o) < g.xyRatios.baseLineInvertedY && (p = o - g.tooltipRect.ttWidth), r - g.dataPointsDividedHeight + a / 2 - g.tooltipRect.ttHeight / 2) : (p = c.globals.isXNumeric ? o - s / 2 : o - g.dataPointsDividedWidth + s / 2, r)), {
                x: p,
                y: f,
                barHeight: b,
                barWidth: x,
                i: u,
                j: d
            }
        }
    }]), _t), St = (o(Gt, [{
        key: "drawXaxisTooltip", value: function () {
            var t = this.w, e = this.ttCtx, i = "bottom" === t.config.xaxis.position;
            e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3;
            var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                i = t.globals.dom.elWrap;
            e.blxaxisTooltip && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + t.config.tooltip.theme), i.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))
        }
    }, {
        key: "drawYaxisTooltip", value: function () {
            for (var s = this.w, e = this.ttCtx, t = 0; t < s.config.yaxis.length; t++) !function (i) {
                var t = s.config.yaxis[i].opposite || s.config.yaxis[i].crosshairs.opposite;
                e.yaxisOffX = t ? s.globals.gridWidth + 1 : 1;
                var a = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, t ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
                s.globals.yAxisSameScaleIndices.map(function (t, e) {
                    t.map(function (t, e) {
                        e === i && (a += s.config.yaxis[e].show ? " " : " apexcharts-yaxistooltip-hidden")
                    })
                });
                t = s.globals.dom.elWrap;
                null === s.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + s.config.tooltip.theme), t.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText[i] = document.createElement("div"), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
            }(t)
        }
    }, {
        key: "setXCrosshairWidth", value: function () {
            var t, e, i, a = this.w, s = this.ttCtx, o = s.getElXCrosshairs();
            s.xcrosshairsWidth = parseInt(a.config.xaxis.crosshairs.width, 10), a.globals.comboCharts ? null !== (t = a.globals.dom.baseEl.querySelector(".apexcharts-bar-area")) && "barWidth" === a.config.xaxis.crosshairs.width ? (e = parseFloat(t.getAttribute("barWidth")), s.xcrosshairsWidth = e) : "tickWidth" === a.config.xaxis.crosshairs.width && (e = a.globals.labels.length, s.xcrosshairsWidth = a.globals.gridWidth / e) : "tickWidth" === a.config.xaxis.crosshairs.width ? (i = a.globals.labels.length, s.xcrosshairsWidth = a.globals.gridWidth / i) : "barWidth" === a.config.xaxis.crosshairs.width && (null !== (i = a.globals.dom.baseEl.querySelector(".apexcharts-bar-area")) ? (i = parseFloat(i.getAttribute("barWidth")), s.xcrosshairsWidth = i) : s.xcrosshairsWidth = 1), a.globals.isBarHorizontal && (s.xcrosshairsWidth = 0), null !== o && 0 < s.xcrosshairsWidth && o.setAttribute("width", s.xcrosshairsWidth)
        }
    }, {
        key: "handleYCrosshair", value: function () {
            var t = this.w, e = this.ttCtx;
            e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
        }
    }, {
        key: "drawYaxisTooltipText", value: function (t, e, i) {
            var a, s, o = this.ttCtx, r = this.w, n = r.globals.yLabelFormatters[t];
            o.yaxisTooltips[t] && (s = (e - (a = o.getElGrid().getBoundingClientRect()).top) * i.yRatio[t], i = r.globals.maxYArr[t] - r.globals.minYArr[t], s = r.globals.minYArr[t] + (i - s), o.tooltipPosition.moveYCrosshairs(e - a.top), o.yaxisTooltipText[t].innerHTML = n(s), o.tooltipPosition.moveYAxisTooltip(t))
        }
    }]), Gt), Ct = (o(Vt, [{
        key: "getElTooltip", value: function (t) {
            return (t = t || this).w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")
        }
    }, {
        key: "getElXCrosshairs", value: function () {
            return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
        }
    }, {
        key: "getElGrid", value: function () {
            return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
        }
    }, {
        key: "drawTooltip", value: function (t) {
            var i = this.w;
            this.xyRatios = t, this.blxaxisTooltip = i.config.xaxis.tooltip.enabled && i.globals.axisCharts, this.yaxisTooltips = i.config.yaxis.map(function (t, e) {
                return !!(t.show && t.tooltip.enabled && i.globals.axisCharts)
            }), this.allTooltipSeriesGroups = [], i.globals.axisCharts || (this.showTooltipTitle = !1);
            var e = document.createElement("div");
            e.classList.add("apexcharts-tooltip"), e.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), i.globals.dom.elWrap.appendChild(e), i.globals.axisCharts && (this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair(), t = new K(this.ctx), this.xAxisTicksPositions = t.getXAxisTicksPositions()), !i.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== i.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== i.config.markers.size && 0 !== i.globals.markers.largestSize || this.marker.drawDynamicPoints(this), i.globals.collapsedSeries.length !== i.globals.series.length && (this.dataPointsDividedHeight = i.globals.gridHeight / i.globals.dataPoints, this.dataPointsDividedWidth = i.globals.gridWidth / i.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || i.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, e.appendChild(this.tooltipTitle)), e = i.globals.series.length, (i.globals.xyCharts || i.globals.comboCharts) && this.tConfig.shared && (e = this.showOnIntersect ? 1 : i.globals.series.length), this.legendLabels = i.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(e), this.addSVGEvents())
        }
    }, {
        key: "createTTElements", value: function (s) {
            for (var o = this, r = this.w, n = [], l = this.getElTooltip(), t = 0; t < s; t++) !function (t) {
                var e = document.createElement("div");
                e.classList.add("apexcharts-tooltip-series-group"), e.style.order = r.config.tooltip.inverseOrder ? s - t : t + 1, o.tConfig.shared && o.tConfig.enabledOnSeries && Array.isArray(o.tConfig.enabledOnSeries) && o.tConfig.enabledOnSeries.indexOf(t) < 0 && e.classList.add("apexcharts-tooltip-series-group-hidden");
                var i = document.createElement("span");
                i.classList.add("apexcharts-tooltip-marker"), i.style.backgroundColor = r.globals.colors[t], e.appendChild(i);
                var a = document.createElement("div");
                a.classList.add("apexcharts-tooltip-text"), a.style.fontFamily = o.tConfig.style.fontFamily || r.config.chart.fontFamily, a.style.fontSize = o.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function (t) {
                    var e = document.createElement("div");
                    e.classList.add("apexcharts-tooltip-".concat(t, "-group"));
                    var i = document.createElement("span");
                    i.classList.add("apexcharts-tooltip-text-".concat(t, "-label")), e.appendChild(i);
                    i = document.createElement("span");
                    i.classList.add("apexcharts-tooltip-text-".concat(t, "-value")), e.appendChild(i), a.appendChild(e)
                }), e.appendChild(a), l.appendChild(e), n.push(e)
            }(t);
            return n
        }
    }, {
        key: "addSVGEvents", value: function () {
            var t = this.w, e = t.config.chart.type, i = this.getElTooltip(),
                a = !("bar" !== e && "candlestick" !== e && "boxPlot" !== e && "rangeBar" !== e),
                s = "area" === e || "line" === e || "scatter" === e || "bubble" === e || "radar" === e,
                o = t.globals.dom.Paper.node, r = this.getElGrid();
            r && (this.seriesBound = r.getBoundingClientRect());
            var n, l = [], h = [],
                i = {hoverArea: o, elGrid: r, tooltipEl: i, tooltipY: l, tooltipX: h, ttItems: this.ttItems};
            if (t.globals.axisCharts && (s ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e && "treemap" !== e || (n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n && n.length)) for (var c = 0; c < n.length; c++) l.push(n[c].getAttribute("cy")), h.push(n[c].getAttribute("cx"));
            t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared ? this.addPathsEventListeners([o], i) : a && !t.globals.comboCharts || s && this.showOnIntersect ? this.addDatapointEventsListeners(i) : t.globals.axisCharts && "heatmap" !== e && "treemap" !== e || (e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"), this.addPathsEventListeners(e, i)), this.showOnIntersect && (0 < (t = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker")).length && this.addPathsEventListeners(t, i), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(i))
        }
    }, {
        key: "drawFixedTooltipRect", value: function () {
            var t = this.w, e = this.getElTooltip(), i = e.getBoundingClientRect(), a = i.width + 10, s = i.height + 10,
                o = this.tConfig.fixed.offsetX, r = this.tConfig.fixed.offsetY,
                i = this.tConfig.fixed.position.toLowerCase();
            return -1 < i.indexOf("right") && (o = o + t.globals.svgWidth - a + 10), -1 < i.indexOf("bottom") && (r = r + t.globals.svgHeight - s - 10), e.style.left = o + "px", e.style.top = r + "px", {
                x: o,
                y: r,
                ttWidth: a,
                ttHeight: s
            }
        }
    }, {
        key: "addDatapointEventsListeners", value: function (t) {
            var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
            this.addPathsEventListeners(e, t)
        }
    }, {
        key: "addPathsEventListeners", value: function (a, t) {
            for (var s = this, e = 0; e < a.length; e++) !function (e) {
                var i = {
                    paths: a[e],
                    tooltipEl: t.tooltipEl,
                    tooltipY: t.tooltipY,
                    tooltipX: t.tooltipX,
                    elGrid: t.elGrid,
                    hoverArea: t.hoverArea,
                    ttItems: t.ttItems
                };
                ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function (t) {
                    return a[e].addEventListener(t, s.onSeriesHover.bind(s, i), {capture: !1, passive: !0})
                })
            }(e)
        }
    }, {
        key: "onSeriesHover", value: function (t, e) {
            var i = this, a = Date.now() - this.lastHoverTime;
            100 <= a ? this.seriesHover(t, e) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function () {
                i.seriesHover(t, e)
            }, 100 - a))
        }
    }, {
        key: "seriesHover", value: function (i, a) {
            var s = this;
            this.lastHoverTime = Date.now();
            var t = [], e = this.w;
            e.config.chart.group && (t = this.ctx.getGroupedCharts()), e.globals.axisCharts && (e.globals.minX === -1 / 0 && e.globals.maxX === 1 / 0 || 0 === e.globals.dataPoints) || (t.length ? t.forEach(function (t) {
                var e = s.getElTooltip(t), e = {
                    paths: i.paths,
                    tooltipEl: e,
                    tooltipY: i.tooltipY,
                    tooltipX: i.tooltipX,
                    elGrid: i.elGrid,
                    hoverArea: i.hoverArea,
                    ttItems: t.w.globals.tooltip.ttItems
                };
                t.w.globals.minX === s.w.globals.minX && t.w.globals.maxX === s.w.globals.maxX && t.w.globals.tooltip.seriesHoverByContext({
                    chartCtx: t,
                    ttCtx: t.w.globals.tooltip,
                    opt: e,
                    e: a
                })
            }) : this.seriesHoverByContext({chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: i, e: a}))
        }
    }, {
        key: "seriesHoverByContext", value: function (t) {
            var e = t.chartCtx, i = t.ttCtx, a = t.opt, s = t.e, o = e.w, t = this.getElTooltip();
            i.tooltipRect = {
                x: 0,
                y: 0,
                ttWidth: t.getBoundingClientRect().width,
                ttHeight: t.getBoundingClientRect().height
            }, i.e = s, !i.tooltipUtil.hasBars() || o.globals.comboCharts || i.isBarShared || this.tConfig.onDatasetHover.highlightDataSeries && new O(e).toggleSeriesOnHover(s, s.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), o.globals.axisCharts ? i.axisChartsTooltips({
                e: s,
                opt: a,
                tooltipRect: i.tooltipRect
            }) : i.nonAxisChartsTooltips({e: s, opt: a, tooltipRect: i.tooltipRect})
        }
    }, {
        key: "axisChartsTooltips", value: function (t) {
            var e = t.e, i = t.opt, a = this.w, s = i.elGrid.getBoundingClientRect(),
                o = ("touchmove" === e.type ? e.touches[0] : e).clientX,
                r = ("touchmove" === e.type ? e.touches[0] : e).clientY;
            if (this.clientY = r, this.clientX = o, a.globals.capturedSeriesIndex = -1, a.globals.capturedDataPointIndex = -1, r < s.top || r > s.top + s.height) this.handleMouseOut(i); else {
                if (Array.isArray(this.tConfig.enabledOnSeries) && !a.config.tooltip.shared) {
                    var n = parseInt(i.paths.getAttribute("index"), 10);
                    if (this.tConfig.enabledOnSeries.indexOf(n) < 0) return void this.handleMouseOut(i)
                }
                t = this.getElTooltip(), s = this.getElXCrosshairs(), n = a.globals.xyCharts || "bar" === a.config.chart.type && !a.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || a.globals.comboCharts && this.tooltipUtil.hasBars();
                if ("mousemove" === e.type || "touchmove" === e.type || "mouseup" === e.type) {
                    null !== s && s.classList.add("apexcharts-active");
                    var l, h, s = this.yaxisTooltips.filter(function (t) {
                        return !0 === t
                    });
                    if (null !== this.ycrosshairs && s.length && this.ycrosshairs.classList.add("apexcharts-active"), n && !this.showOnIntersect ? this.handleStickyTooltip(e, o, r, i) : "heatmap" === a.config.chart.type || "treemap" === a.config.chart.type ? (l = (o = this.intersect.handleHeatTreeTooltip({
                        e: e,
                        opt: i,
                        x: l,
                        y: h,
                        type: a.config.chart.type
                    })).x, h = o.y, t.style.left = l + "px", t.style.top = h + "px") : (this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
                        e: e,
                        opt: i
                    }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
                        e: e,
                        opt: i,
                        x: l,
                        y: h
                    })), this.yaxisTooltips.length) for (var c = 0; c < a.config.yaxis.length; c++) this.axesTooltip.drawYaxisTooltipText(c, r, this.xyRatios);
                    i.tooltipEl.classList.add("apexcharts-active")
                } else "mouseout" !== e.type && "touchend" !== e.type || this.handleMouseOut(i)
            }
        }
    }, {
        key: "nonAxisChartsTooltips", value: function (t) {
            var e = t.e, i = t.opt, a = t.tooltipRect, s = this.w, o = i.paths.getAttribute("rel"),
                r = this.getElTooltip(), t = s.globals.dom.elWrap.getBoundingClientRect();
            "mousemove" === e.type || "touchmove" === e.type ? (r.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
                ttItems: i.ttItems,
                i: parseInt(o, 10) - 1,
                shared: !1
            }), i = s.globals.clientX - t.left - a.ttWidth / 2, a = s.globals.clientY - t.top - a.ttHeight - 10, r.style.left = i + "px", r.style.top = a + "px", s.config.legend.tooltipHoverFormatter && (o = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[a = o - 1].getAttribute("data:default-text"), {
                seriesIndex: a,
                dataPointIndex: a,
                w: s
            }), this.legendLabels[a].innerHTML = o)) : "mouseout" !== e.type && "touchend" !== e.type || (r.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function (t) {
                var e = t.getAttribute("data:default-text");
                t.innerHTML = decodeURIComponent(e)
            }))
        }
    }, {
        key: "handleStickyTooltip", value: function (t, e, i, a) {
            var s = this.w, o = this.tooltipUtil.getNearestValues({
                context: this,
                hoverArea: a.hoverArea,
                elGrid: a.elGrid,
                clientX: e,
                clientY: i
            }), r = o.j, e = o.capturedSeries, i = a.elGrid.getBoundingClientRect();
            o.hoverX < 0 || o.hoverX > i.width ? this.handleMouseOut(a) : null !== e ? this.handleStickyCapturedSeries(t, e, a, r) : (this.tooltipUtil.isXoverlap(r) || s.globals.isBarHorizontal) && this.create(t, this, 0, r, a.ttItems)
        }
    }, {
        key: "handleStickyCapturedSeries", value: function (t, e, i, a) {
            var s = this.w;
            this.tConfig.shared || null !== s.globals.series[e][a] ? void 0 !== s.globals.series[e][a] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, a, i.ttItems) : this.create(t, this, e, a, i.ttItems, !1) : this.tooltipUtil.isXoverlap(a) && this.create(t, this, 0, a, i.ttItems) : this.handleMouseOut(i)
        }
    }, {
        key: "deactivateHoverFilter", value: function () {
            for (var t = this.w, e = new I(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++) e.pathMouseLeave(i[a])
        }
    }, {
        key: "handleMouseOut", value: function (t) {
            var e = this.w, i = this.getElXCrosshairs();
            if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
                null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("apexcharts-active")
            }
            e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function (t) {
                var e = t.getAttribute("data:default-text");
                t.innerHTML = decodeURIComponent(e)
            })
        }
    }, {
        key: "markerClick", value: function (t, e, i) {
            var a = this.w;
            "function" == typeof a.config.chart.events.markerClick && a.config.chart.events.markerClick(t, this.ctx, {
                seriesIndex: e,
                dataPointIndex: i,
                w: a
            }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, {seriesIndex: e, dataPointIndex: i, w: a}])
        }
    }, {
        key: "create", value: function (t, e, i, a, s) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null, r = this.w, n = e;
            "mouseup" === t.type && this.markerClick(t, i, a), null === o && (o = this.tConfig.shared);
            e = this.tooltipUtil.hasMarkers(), t = this.tooltipUtil.getElBars();
            if (r.config.legend.tooltipHoverFormatter) {
                var l = r.config.legend.tooltipHoverFormatter, h = Array.from(this.legendLabels);
                h.forEach(function (t) {
                    var e = t.getAttribute("data:default-text");
                    t.innerHTML = decodeURIComponent(e)
                });
                for (var c = 0; c < h.length; c++) {
                    var d = h[c], g = parseInt(d.getAttribute("i"), 10),
                        u = decodeURIComponent(d.getAttribute("data:default-text")),
                        p = l(u, {seriesIndex: o ? g : i, dataPointIndex: a, w: r});
                    if (o) d.innerHTML = r.globals.collapsedSeriesIndices.indexOf(g) < 0 ? p : u; else if (d.innerHTML = g === i ? p : u, i === g) break
                }
            }
            if (o) {
                if (n.tooltipLabels.drawSeriesTexts({
                    ttItems: s,
                    i: i,
                    j: a,
                    shared: !this.showOnIntersect && this.tConfig.shared
                }), e && (0 < r.globals.markers.largestSize ? n.marker.enlargePoints(a) : n.tooltipPosition.moveDynamicPointsOnHover(a)), this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(t), 0 < this.barSeriesHeight)) {
                    var f = new I(this.ctx), x = r.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
                    this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a);
                    for (var b = 0; b < x.length; b++) f.pathMouseEnter(x[b])
                }
            } else n.tooltipLabels.drawSeriesTexts({
                shared: !1,
                ttItems: s,
                i: i,
                j: a
            }), this.tooltipUtil.hasBars() && n.tooltipPosition.moveStickyTooltipOverBars(a), e && n.tooltipPosition.moveMarkers(i, a)
        }
    }]), Vt), Lt = function () {
        n(e, B);
        var t = c(e);

        function e() {
            return s(this, e), t.apply(this, arguments)
        }

        return o(e, [{
            key: "draw", value: function (m, v) {
                var y = this, w = this.w;
                this.graphics = new I(this.ctx), this.bar = new B(this.ctx, this.xyRatios);
                var t = new P(this.ctx, w);
                m = t.getLogSeries(m), this.yRatio = t.getLogYRatios(this.yRatio), this.barHelpers.initVariables(m), "100%" === w.config.chart.stackType && (m = w.globals.seriesPercent.slice()), this.series = m, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
                for (var e = 0; e < m.length; e++) 0 < m[e].length && (this.totalItems += m[e].length);
                for (var k = this.graphics.group({class: "apexcharts-bar-series apexcharts-plot-series"}), A = 0, S = 0, i = 0, a = 0; i < m.length; i++, a++) !function (t, e) {
                    var i, a, s, o, r = [], n = [], l = w.globals.comboCharts ? v[t] : t;
                    1 < y.yRatio.length && (y.yaxisIndex = l), y.isReversed = w.config.yaxis[y.yaxisIndex] && w.config.yaxis[y.yaxisIndex].reversed;
                    var h = y.graphics.group({
                        class: "apexcharts-series",
                        seriesName: T.escapeString(w.globals.seriesNames[l]),
                        rel: t + 1,
                        "data:realIndex": l
                    });
                    y.ctx.series.addCollapsedClassToSeries(h, l);
                    var c = y.graphics.group({class: "apexcharts-datalabels", "data:realIndex": l}), d = 0, g = 0,
                        u = y.initialPositions(A, S, void 0, void 0, void 0, void 0);
                    S = u.y, d = u.barHeight, a = u.yDivision, o = u.zeroW, A = u.x, g = u.barWidth, i = u.xDivision, s = u.zeroH, y.yArrj = [], y.yArrjF = [], y.yArrjVal = [], y.xArrj = [], y.xArrjF = [], y.xArrjVal = [], 1 === y.prevY.length && y.prevY[0].every(function (t) {
                        return isNaN(t)
                    }) && (y.prevY[0] = y.prevY[0].map(function (t) {
                        return s
                    }), y.prevYF[0] = y.prevYF[0].map(function (t) {
                        return 0
                    }));
                    for (var p = 0; p < w.globals.dataPoints; p++) {
                        var f = y.barHelpers.getStrokeWidth(t, p, l),
                            x = {indexes: {i: t, j: p, realIndex: l, bc: e}, strokeWidth: f, x: A, y: S, elSeries: h},
                            b = null;
                        y.isHorizontal ? (b = y.drawStackedBarPaths(M(M({}, x), {}, {
                            zeroW: o,
                            barHeight: d,
                            yDivision: a
                        })), g = y.series[t][p] / y.invertedYRatio) : (b = y.drawStackedColumnPaths(M(M({}, x), {}, {
                            xDivision: i,
                            barWidth: g,
                            zeroH: s
                        })), d = y.series[t][p] / y.yRatio[y.yaxisIndex]), S = b.y, A = b.x, r.push(A), n.push(S);
                        x = y.barHelpers.getPathFillColor(m, t, p, l), h = y.renderSeries({
                            realIndex: l,
                            pathFill: x,
                            j: p,
                            i: t,
                            pathFrom: b.pathFrom,
                            pathTo: b.pathTo,
                            strokeWidth: f,
                            elSeries: h,
                            x: A,
                            y: S,
                            series: m,
                            barHeight: d,
                            barWidth: g,
                            elDataLabelsWrap: c,
                            type: "bar",
                            visibleSeries: 0
                        })
                    }
                    w.globals.seriesXvalues[l] = r, w.globals.seriesYvalues[l] = n, y.prevY.push(y.yArrj), y.prevYF.push(y.yArrjF), y.prevYVal.push(y.yArrjVal), y.prevX.push(y.xArrj), y.prevXF.push(y.xArrjF), y.prevXVal.push(y.xArrjVal), k.add(h)
                }(i, a);
                return k
            }
        }, {
            key: "initialPositions", value: function (t, e, i, a, s, o) {
                var r, n, l = this.w;
                return this.isHorizontal ? (r = (r = a = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight, 10) / 100, o = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (a - r) / 2) : (n = i = l.globals.gridWidth / l.globals.dataPoints, n = l.globals.isXNumeric && 1 < l.globals.dataPoints ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : n * parseInt(l.config.plotOptions.bar.columnWidth, 10) / 100, s = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - n) / 2), {
                    x: t,
                    y: e,
                    yDivision: a,
                    xDivision: i,
                    barHeight: r,
                    barWidth: n,
                    zeroH: s,
                    zeroW: o
                }
            }
        }, {
            key: "drawStackedBarPaths", value: function (t) {
                for (var e = t.indexes, i = t.barHeight, a = t.strokeWidth, s = t.zeroW, o = (t.x, t.y), r = t.yDivision, n = t.elSeries, l = this.w, h = o, c = e.i, d = e.j, g = 0, u = 0; u < this.prevXF.length; u++) g += this.prevXF[u][d];
                var s = 0 < c ? (t = s, this.prevXVal[c - 1][d] < 0 ? t = 0 <= this.series[c][d] ? this.prevX[c - 1][d] + g - 2 * (this.isReversed ? g : 0) : this.prevX[c - 1][d] : 0 <= this.prevXVal[c - 1][d] && (t = 0 <= this.series[c][d] ? this.prevX[c - 1][d] : this.prevX[c - 1][d] - g + 2 * (this.isReversed ? g : 0)), t) : s,
                    p = null === this.series[c][d] ? s : s + this.series[c][d] / this.invertedYRatio - 2 * (this.isReversed ? this.series[c][d] / this.invertedYRatio : 0),
                    l = this.barHelpers.getBarpaths({
                        barYPosition: h,
                        barHeight: i,
                        x1: s,
                        x2: p,
                        strokeWidth: a,
                        series: this.series,
                        realIndex: e.realIndex,
                        i: c,
                        j: d,
                        w: l
                    });
                return this.barHelpers.barBackground({j: d, i: c, y1: h, y2: i, elSeries: n}), {
                    pathTo: l.pathTo,
                    pathFrom: l.pathFrom,
                    x: p,
                    y: o += r
                }
            }
        }, {
            key: "drawStackedColumnPaths", value: function (t) {
                var e = t.indexes, i = t.x, a = (t.y, t.xDivision), s = t.barWidth, o = t.zeroH;
                t.strokeWidth;
                for (var r, n = t.elSeries, l = this.w, h = e.i, c = e.j, d = e.bc, t = i = l.globals.isXNumeric ? ((l.globals.seriesX[h][c] || 0) - l.globals.minX) / this.xRatio - s / 2 : i, g = 0, u = 0; u < this.prevYF.length; u++) g += isNaN(this.prevYF[u][c]) ? 0 : this.prevYF[u][c];
                if (0 < h && !l.globals.isXNumeric || 0 < h && l.globals.isXNumeric && l.globals.seriesX[h - 1][c] === l.globals.seriesX[h][c]) {
                    var p, f, x = Math.min(this.yRatio.length + 1, h + 1);
                    if (void 0 !== this.prevY[h - 1]) for (var b = 1; b < x; b++) if (!isNaN(this.prevY[h - b][c])) {
                        f = this.prevY[h - b][c];
                        break
                    }
                    for (var m = 1; m < x; m++) {
                        if (this.prevYVal[h - m][c] < 0) {
                            p = 0 <= this.series[h][c] ? f - g + 2 * (this.isReversed ? g : 0) : f;
                            break
                        }
                        if (0 <= this.prevYVal[h - m][c]) {
                            p = 0 <= this.series[h][c] ? f : f + g - 2 * (this.isReversed ? g : 0);
                            break
                        }
                    }
                    void 0 === p && (p = l.globals.gridHeight), r = this.prevYF[0].every(function (t) {
                        return 0 === t
                    }) && this.prevYF.slice(1, h).every(function (t) {
                        return t.every(function (t) {
                            return isNaN(t)
                        })
                    }) ? l.globals.gridHeight - o : p
                } else r = l.globals.gridHeight - o;
                var v = r - this.series[h][c] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[h][c] / this.yRatio[this.yaxisIndex] : 0),
                    e = this.barHelpers.getColumnPaths({
                        barXPosition: t,
                        barWidth: s,
                        y1: r,
                        y2: v,
                        yRatio: this.yRatio[this.yaxisIndex],
                        strokeWidth: this.strokeWidth,
                        series: this.series,
                        realIndex: e.realIndex,
                        i: h,
                        j: c,
                        w: l
                    });
                return this.barHelpers.barBackground({
                    bc: d,
                    j: c,
                    i: h,
                    x1: t,
                    x2: s,
                    elSeries: n
                }), i += a, {pathTo: e.pathTo, pathFrom: e.pathFrom, x: l.globals.isXNumeric ? i - a : i, y: v}
            }
        }]), e
    }(), Pt = function () {
        n(e, B);
        var t = c(e);

        function e() {
            return s(this, e), t.apply(this, arguments)
        }

        return o(e, [{
            key: "draw", value: function (x, s) {
                var b = this, m = this.w, o = new I(this.ctx), v = new F(this.ctx);
                this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot;
                var t = new P(this.ctx, m);
                x = t.getLogSeries(x), this.series = x, this.yRatio = t.getLogYRatios(this.yRatio), this.barHelpers.initVariables(x);
                for (var y = o.group({class: "apexcharts-".concat(m.config.chart.type, "-series apexcharts-plot-series")}), e = 0; e < x.length; e++) !function (r) {
                    b.isBoxPlot = "boxPlot" === m.config.chart.type || "boxPlot" === m.config.series[r].type;
                    var n = void 0, l = void 0, t = [], e = [], h = m.globals.comboCharts ? s[r] : r, c = o.group({
                        class: "apexcharts-series",
                        seriesName: T.escapeString(m.globals.seriesNames[h]),
                        rel: r + 1,
                        "data:realIndex": h
                    });
                    b.ctx.series.addCollapsedClassToSeries(c, h), 0 < x[r].length && (b.visibleI = b.visibleI + 1), 1 < b.yRatio.length && (b.yaxisIndex = h);
                    var i = b.barHelpers.initialPositions(), l = i.y, d = i.barHeight, n = i.x, g = i.barWidth,
                        u = i.xDivision, p = i.zeroH;
                    e.push(n + g / 2);
                    for (var f = o.group({
                        class: "apexcharts-datalabels",
                        "data:realIndex": h
                    }), a = 0; a < m.globals.dataPoints; a++) !function (a) {
                        var s = b.barHelpers.getStrokeWidth(r, a, h), o = b.drawBoxPaths({
                            indexes: {i: r, j: a, realIndex: h},
                            x: n,
                            y: l,
                            xDivision: u,
                            barWidth: g,
                            zeroH: p,
                            strokeWidth: s,
                            elSeries: c
                        });
                        l = o.y, n = o.x, 0 < a && e.push(n + g / 2), t.push(l), o.pathTo.forEach(function (t, e) {
                            var i = !b.isBoxPlot && b.candlestickOptions.wick.useFillColor ? o.color[e] : m.globals.stroke.colors[r],
                                e = v.fillPath({seriesNumber: h, dataPointIndex: a, color: o.color[e], value: x[r][a]});
                            b.renderSeries({
                                realIndex: h,
                                pathFill: e,
                                lineFill: i,
                                j: a,
                                i: r,
                                pathFrom: o.pathFrom,
                                pathTo: t,
                                strokeWidth: s,
                                elSeries: c,
                                x: n,
                                y: l,
                                series: x,
                                barHeight: d,
                                barWidth: g,
                                elDataLabelsWrap: f,
                                visibleSeries: b.visibleI,
                                type: m.config.chart.type
                            })
                        })
                    }(a);
                    m.globals.seriesXvalues[h] = e, m.globals.seriesYvalues[h] = t, y.add(c)
                }(e);
                return y
            }
        }, {
            key: "drawBoxPaths", value: function (t) {
                var e = t.indexes, i = t.x;
                t.y;
                var a = t.xDivision, s = t.barWidth, o = t.zeroH, r = t.strokeWidth, n = this.w, l = new I(this.ctx),
                    h = e.i, c = e.j, d = !0, g = n.config.plotOptions.candlestick.colors.upward,
                    u = n.config.plotOptions.candlestick.colors.downward, p = "";
                this.isBoxPlot && (p = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
                var f = this.yRatio[this.yaxisIndex], x = e.realIndex, b = this.getOHLCValue(x, c), m = o, v = o;
                b.o > b.c && (d = !1);
                var y = Math.min(b.o, b.c), w = Math.max(b.o, b.c), t = b.m,
                    e = (i = n.globals.isXNumeric ? (n.globals.seriesX[x][c] - n.globals.minX) / this.xRatio - s / 2 : i) + s * this.visibleI;
                void 0 === this.series[h][c] || null === this.series[h][c] ? w = y = o : (y = o - y / f, w = o - w / f, m = o - b.h / f, v = o - b.l / f, t = o - b.m / f);
                l.move(e, o);
                o = l.move(e + s / 2, y);
                return 0 < n.globals.previousPaths.length && (o = this.getPreviousPath(x, c, !0)), f = this.isBoxPlot ? [l.move(e, y) + l.line(e + s / 2, y) + l.line(e + s / 2, m) + l.line(e + s / 4, m) + l.line(e + s - s / 4, m) + l.line(e + s / 2, m) + l.line(e + s / 2, y) + l.line(e + s, y) + l.line(e + s, t) + l.line(e, t) + l.line(e, y + r / 2), l.move(e, t) + l.line(e + s, t) + l.line(e + s, w) + l.line(e + s / 2, w) + l.line(e + s / 2, v) + l.line(e + s - s / 4, v) + l.line(e + s / 4, v) + l.line(e + s / 2, v) + l.line(e + s / 2, w) + l.line(e, w) + l.line(e, t) + "z"] : [l.move(e, w) + l.line(e + s / 2, w) + l.line(e + s / 2, m) + l.line(e + s / 2, w) + l.line(e + s, w) + l.line(e + s, y) + l.line(e + s / 2, y) + l.line(e + s / 2, v) + l.line(e + s / 2, y) + l.line(e, y) + l.line(e, w - r / 2)], o += l.move(e, y), n.globals.isXNumeric || (i += a), {
                    pathTo: f,
                    pathFrom: o,
                    x: i,
                    y: w,
                    barXPosition: e,
                    color: this.isBoxPlot ? p : d ? [g] : [u]
                }
            }
        }, {
            key: "getOHLCValue", value: function (t, e) {
                var i = this.w;
                return {
                    o: (this.isBoxPlot ? i.globals.seriesCandleH : i.globals.seriesCandleO)[t][e],
                    h: (this.isBoxPlot ? i.globals.seriesCandleO : i.globals.seriesCandleH)[t][e],
                    m: i.globals.seriesCandleM[t][e],
                    l: (this.isBoxPlot ? i.globals.seriesCandleC : i.globals.seriesCandleL)[t][e],
                    c: (this.isBoxPlot ? i.globals.seriesCandleL : i.globals.seriesCandleC)[t][e]
                }
            }
        }]), e
    }(), Mt = (o(Bt, [{
        key: "checkColorRange", value: function () {
            var t = this.w, i = !1, t = t.config.plotOptions[t.config.chart.type];
            return 0 < t.colorScale.ranges.length && t.colorScale.ranges.map(function (t, e) {
                t.from <= 0 && (i = !0)
            }), i
        }
    }, {
        key: "getShadeColor", value: function (t, e, i, a) {
            var s = this.w, o = 1, r = s.config.plotOptions[t].shadeIntensity, i = this.determineColor(t, e, i);
            s.globals.hasNegs || a ? o = s.config.plotOptions[t].reverseNegativeShade ? i.percent < 0 ? i.percent / 100 * (1.25 * r) : (1 - i.percent / 100) * (1.25 * r) : i.percent <= 0 ? 1 - (1 + i.percent / 100) * r : (1 - i.percent / 100) * r : (o = 1 - i.percent / 100, "treemap" === t && (o = (1 - i.percent / 100) * (1.25 * r)));
            a = i.color, r = new T;
            return {
                color: a = s.config.plotOptions[t].enableShades ? "dark" === this.w.config.theme.mode ? T.hexToRgba(r.shadeColor(-1 * o, i.color), s.config.fill.opacity) : T.hexToRgba(r.shadeColor(o, i.color), s.config.fill.opacity) : a,
                colorProps: i
            }
        }
    }, {
        key: "determineColor", value: function (t, e, i) {
            var a = this.w, s = a.globals.series[e][i], o = a.config.plotOptions[t], r = o.colorScale.inverse ? i : e;
            a.config.plotOptions[t].distributed && (r = i);
            var n = a.globals.colors[r], l = null, h = Math.min.apply(Math, g(a.globals.series[e])),
                c = Math.max.apply(Math, g(a.globals.series[e]));
            o.distributed || "heatmap" !== t || (h = a.globals.minY, c = a.globals.maxY), void 0 !== o.colorScale.min && (h = o.colorScale.min < a.globals.minY ? o.colorScale.min : a.globals.minY, c = o.colorScale.max > a.globals.maxY ? o.colorScale.max : a.globals.maxY);
            var a = Math.abs(c) + Math.abs(h), d = 100 * s / (0 === a ? a - 1e-6 : a);
            return 0 < o.colorScale.ranges.length && o.colorScale.ranges.map(function (t, e) {
                s >= t.from && s <= t.to && (n = t.color, l = t.foreColor || null, h = t.from, c = t.to, t = Math.abs(c) + Math.abs(h), d = 100 * s / (0 === t ? t - 1e-6 : t))
            }), {color: n, foreColor: l, percent: d}
        }
    }, {
        key: "calculateDataLabels", value: function (t) {
            var e = t.text, i = t.x, a = t.y, s = t.i, o = t.j, r = t.colorProps, n = t.fontSize,
                l = this.w.config.dataLabels, h = new I(this.ctx), c = new D(this.ctx), d = null;
            return l.enabled && (d = h.group({class: "apexcharts-data-labels"}), t = l.offsetX, h = l.offsetY, t = i + t, h = a + parseFloat(l.style.fontSize) / 3 + h, c.plotDataLabelsText({
                x: t,
                y: h,
                text: e,
                i: s,
                j: o,
                color: r.foreColor,
                parent: d,
                fontSize: n,
                dataLabelsConfig: l
            })), d
        }
    }, {
        key: "addListeners", value: function (t) {
            var e = new I(this.ctx);
            t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t))
        }
    }]), Bt), Tt = (o(Wt, [{
        key: "draw", value: function (t) {
            var e = this.w, i = new I(this.ctx), a = i.group({class: "apexcharts-heatmap"});
            a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
            var s = e.globals.gridWidth / e.globals.dataPoints, o = e.globals.gridHeight / e.globals.series.length,
                r = 0, n = !1;
            this.negRange = this.helpers.checkColorRange();
            var l = t.slice();
            e.config.yaxis[0].reversed && (n = !0, l.reverse());
            for (var h = n ? 0 : l.length - 1; n ? h < l.length : 0 <= h; n ? h++ : h--) {
                var c, d = i.group({
                    class: "apexcharts-series apexcharts-heatmap-series",
                    seriesName: T.escapeString(e.globals.seriesNames[h]),
                    rel: h + 1,
                    "data:realIndex": h
                });
                this.ctx.series.addCollapsedClassToSeries(d, h), e.config.chart.dropShadow.enabled && (c = e.config.chart.dropShadow, new C(this.ctx).dropShadow(d, c, h));
                for (var g = 0, u = e.config.plotOptions.heatmap.shadeIntensity, p = 0; p < l[h].length; p++) {
                    var f = this.helpers.getShadeColor(e.config.chart.type, h, p, this.negRange), x = f.color,
                        b = f.colorProps;
                    "image" === e.config.fill.type && (x = new F(this.ctx).fillPath({
                        seriesNumber: h,
                        dataPointIndex: p,
                        opacity: e.globals.hasNegs ? b.percent < 0 ? 1 - (1 + b.percent / 100) : u + b.percent / 100 : b.percent / 100,
                        patternID: T.randomId(),
                        width: e.config.fill.image.width || s,
                        height: e.config.fill.image.height || o
                    }));
                    var m, f = this.rectRadius, f = i.drawRect(g, r, s, o, f);
                    f.attr({cx: g, cy: r}), f.node.classList.add("apexcharts-heatmap-rect"), d.add(f), f.attr({
                        fill: x,
                        i: h,
                        index: h,
                        j: p,
                        val: l[h][p],
                        "stroke-width": this.strokeWidth,
                        stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? x : e.globals.stroke.colors[0],
                        color: x
                    }), this.helpers.addListeners(f), e.config.chart.animations.enabled && !e.globals.dataChanged && (m = 1, e.globals.resized || (m = e.config.chart.animations.speed), this.animateHeatMap(f, g, r, s, o, m)), e.globals.dataChanged && (v = 1, this.dynamicAnim.enabled && e.globals.shouldAnimate && (v = this.dynamicAnim.speed, m = e.globals.previousPaths[h] && e.globals.previousPaths[h][p] && e.globals.previousPaths[h][p].color || "rgba(255, 255, 255, 0)", this.animateHeatColor(f, T.isColorHex(m) ? m : T.rgb2hex(m), T.isColorHex(x) ? x : T.rgb2hex(x), v)));
                    var v = (0, e.config.dataLabels.formatter)(e.globals.series[h][p], {
                        value: e.globals.series[h][p],
                        seriesIndex: h,
                        dataPointIndex: p,
                        w: e
                    }), b = this.helpers.calculateDataLabels({
                        text: v,
                        x: g + s / 2,
                        y: r + o / 2,
                        i: h,
                        j: p,
                        colorProps: b,
                        series: l
                    });
                    null !== b && d.add(b), g += s
                }
                r += o, a.add(d)
            }
            t = e.globals.yAxisScale[0].result.slice();
            e.config.yaxis[0].reversed ? t.unshift("") : t.push(""), e.globals.yAxisScale[0].result = t;
            t = e.globals.gridHeight / e.globals.series.length;
            return e.config.yaxis[0].labels.offsetY = -t / 2, a
        }
    }, {
        key: "animateHeatMap", value: function (t, e, i, a, s, o) {
            var r = new S(this.ctx);
            r.animateRect(t, {x: e + a / 2, y: i + s / 2, width: 0, height: 0}, {
                x: e,
                y: i,
                width: a,
                height: s
            }, o, function () {
                r.animationCompleted(t)
            })
        }
    }, {
        key: "animateHeatColor", value: function (t, e, i, a) {
            t.attr({fill: e}).animate(a).attr({fill: i})
        }
    }]), Wt), It = (o(Ot, [{
        key: "drawYAxisTexts", value: function (t, e, i, a) {
            var s = this.w, o = s.config.yaxis[0], s = s.globals.yLabelFormatters[0];
            return new I(this.ctx).drawText({
                x: t + o.labels.offsetX,
                y: e + o.labels.offsetY,
                text: s(a, i),
                textAnchor: "middle",
                fontSize: o.labels.style.fontSize,
                fontFamily: o.labels.style.fontFamily,
                foreColor: Array.isArray(o.labels.style.colors) ? o.labels.style.colors[i] : o.labels.style.colors
            })
        }
    }]), Ot), zt = (o(Nt, [{
        key: "draw", value: function (t) {
            var e = this, i = this.w, a = new I(this.ctx);
            if (this.ret = a.group({class: "apexcharts-pie"}), i.globals.noData) return this.ret;
            for (var s = 0, o = 0; o < t.length; o++) s += T.negToZero(t[o]);
            var r = [], n = a.group();
            0 === s && (s = 1e-5), t.forEach(function (t) {
                e.maxY = Math.max(e.maxY, t)
            }), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), "back" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret);
            for (var l = 0; l < t.length; l++) {
                var h = this.fullAngle * T.negToZero(t[l]) / s;
                r.push(h), "polarArea" === this.chartType ? (r[l] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[l] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize)
            }
            if (i.globals.dataChanged) {
                for (var c, d = 0, g = 0; g < i.globals.previousPaths.length; g++) d += T.negToZero(i.globals.previousPaths[g]);
                for (var u = 0; u < i.globals.previousPaths.length; u++) c = this.fullAngle * T.negToZero(i.globals.previousPaths[u]) / d, this.prevSectorAngleArr.push(c)
            }
            this.donutSize < 0 && (this.donutSize = 0);
            var p = i.config.plotOptions.pie.customScale, f = i.globals.gridWidth / 2, x = i.globals.gridHeight / 2,
                f = f - i.globals.gridWidth / 2 * p, x = x - i.globals.gridHeight / 2 * p;
            "donut" === this.chartType && ((a = a.drawCircle(this.donutSize)).attr({
                cx: this.centerX,
                cy: this.centerY,
                fill: i.config.plotOptions.pie.donut.background || "transparent"
            }), n.add(a));
            var b = this.drawArcs(r, t);
            return this.sliceLabels.forEach(function (t) {
                b.add(t)
            }), n.attr({transform: "translate(".concat(f, ", ").concat(x, ") scale(").concat(p, ")")}), n.add(b), this.ret.add(n), this.donutDataLabels.show && (x = this.renderInnerDataLabels(this.donutDataLabels, {
                hollowSize: this.donutSize,
                centerX: this.centerX,
                centerY: this.centerY,
                opacity: this.donutDataLabels.show,
                translateX: f,
                translateY: x
            }), this.ret.add(x)), "front" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret), this.ret
        }
    }, {
        key: "drawArcs", value: function (t, e) {
            var i, a = this.w, s = new C(this.ctx), o = new I(this.ctx), r = new F(this.ctx),
                n = o.group({class: "apexcharts-slices"}),
                l = (this.initialAngle, this.initialAngle, this.initialAngle), h = this.initialAngle;
            this.strokeWidth = a.config.stroke.show ? a.config.stroke.width : 0;
            for (var c = 0; c < t.length; c++) {
                var d = o.group({
                    class: "apexcharts-series apexcharts-pie-series",
                    seriesName: T.escapeString(a.globals.seriesNames[c]),
                    rel: c + 1,
                    "data:realIndex": c
                });
                n.add(d);
                var g = h, l = (i = l) + t[c], h = g + this.prevSectorAngleArr[c],
                    u = l < i ? this.fullAngle + l - i : l - i,
                    p = r.fillPath({seriesNumber: c, size: this.sliceSizes[c], value: e[c]}),
                    f = this.getChangedPath(g, h), f = o.drawPath({
                        d: f,
                        stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[c] : this.lineColorArr,
                        strokeWidth: 0,
                        fill: p,
                        fillOpacity: a.config.fill.opacity,
                        classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(c)
                    });
                f.attr({
                    index: 0,
                    j: c
                }), s.setSelectionFilter(f, 0, c), a.config.chart.dropShadow.enabled && (x = a.config.chart.dropShadow, s.dropShadow(f, x, c)), this.addListeners(f, this.donutDataLabels), I.setAttrs(f.node, {
                    "data:angle": u,
                    "data:startAngle": i,
                    "data:strokeWidth": this.strokeWidth,
                    "data:value": e[c]
                });
                p = {x: 0, y: 0};
                "pie" === this.chartType || "polarArea" === this.chartType ? p = T.polarToCartesian(this.centerX, this.centerY, a.globals.radialSize / 1.25 + a.config.plotOptions.pie.dataLabels.offset, (i + u / 2) % this.fullAngle) : "donut" === this.chartType && (p = T.polarToCartesian(this.centerX, this.centerY, (a.globals.radialSize + this.donutSize) / 2 + a.config.plotOptions.pie.dataLabels.offset, (i + u / 2) % this.fullAngle)), d.add(f);
                var x = 0;
                !this.initialAnim || a.globals.resized || a.globals.dataChanged ? this.animBeginArr.push(0) : (0 == (x = u / this.fullAngle * a.config.chart.animations.speed) && (x = 1), this.animDur = x + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && a.globals.dataChanged ? this.animatePaths(f, {
                    size: this.sliceSizes[c],
                    endAngle: l,
                    startAngle: i,
                    prevStartAngle: g,
                    prevEndAngle: h,
                    animateStartingPos: !0,
                    i: c,
                    animBeginArr: this.animBeginArr,
                    shouldSetPrevPaths: !0,
                    dur: a.config.chart.animations.dynamicAnimation.speed
                }) : this.animatePaths(f, {
                    size: this.sliceSizes[c],
                    endAngle: l,
                    startAngle: i,
                    i: c,
                    totalItems: t.length - 1,
                    animBeginArr: this.animBeginArr,
                    dur: x
                }), a.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && f.click(this.pieClicked.bind(this, c)), void 0 !== a.globals.selectedDataPoints[0] && -1 < a.globals.selectedDataPoints[0].indexOf(c) && this.pieClicked(c), a.config.dataLabels.enabled && (d = p.x, x = p.y, f = 100 * u / this.fullAngle + "%", 0 != u && a.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[c] && (void 0 !== (p = a.config.dataLabels.formatter) && (f = p(a.globals.seriesPercent[c][0], {
                    seriesIndex: c,
                    w: a
                })), u = a.globals.dataLabels.style.colors[c], p = o.group({class: "apexcharts-datalabels"}), f = o.drawText({
                    x: d,
                    y: x,
                    text: f,
                    textAnchor: "middle",
                    fontSize: a.config.dataLabels.style.fontSize,
                    fontFamily: a.config.dataLabels.style.fontFamily,
                    fontWeight: a.config.dataLabels.style.fontWeight,
                    foreColor: u
                }), p.add(f), a.config.dataLabels.dropShadow.enabled && (u = a.config.dataLabels.dropShadow, s.dropShadow(f, u)), f.node.classList.add("apexcharts-pie-label"), a.config.chart.animations.animate && !1 === a.globals.resized && (f.node.classList.add("apexcharts-pie-label-delay"), f.node.style.animationDelay = a.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(p)))
            }
            return n
        }
    }, {
        key: "addListeners", value: function (t, e) {
            var i = new I(this.ctx);
            t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)))
        }
    }, {
        key: "animatePaths", value: function (t, e) {
            var i = this.w,
                a = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle,
                s = a, o = e.startAngle, r = e.startAngle;
            void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (o = e.prevEndAngle, s = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + r > this.fullAngle ? e.endAngle = e.endAngle - (a + r) : a + r < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + r)))), a === this.fullAngle && (a = this.fullAngle - .01), this.animateArc(t, o, r, a, s, e)
        }
    }, {
        key: "animateArc", value: function (e, i, a, s, o, r) {
            var n, l = this, t = this.w, h = new S(this.ctx), c = r.size;
            (isNaN(i) || isNaN(o)) && (i = a, o = s, r.dur = 0);
            var d = s, g = a, u = i < a ? this.fullAngle + i - a : i - a;
            t.globals.dataChanged && r.shouldSetPrevPaths && r.prevEndAngle && (n = l.getPiePath({
                me: l,
                startAngle: r.prevStartAngle,
                angle: r.prevEndAngle < r.prevStartAngle ? this.fullAngle + r.prevEndAngle - r.prevStartAngle : r.prevEndAngle - r.prevStartAngle,
                size: c
            }), e.attr({d: n})), 0 !== r.dur ? e.animate(r.dur, t.globals.easing, r.animBeginArr[r.i]).afterAll(function () {
                "pie" !== l.chartType && "donut" !== l.chartType && "polarArea" !== l.chartType || this.animate(t.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width": l.strokeWidth}), r.i === t.config.series.length - 1 && h.animationCompleted(e)
            }).during(function (t) {
                d = u + (s - u) * t, r.animateStartingPos && (d = o + (s - o) * t, g = i - o + (a - (i - o)) * t), n = l.getPiePath({
                    me: l,
                    startAngle: g,
                    angle: d,
                    size: c
                }), e.node.setAttribute("data:pathOrig", n), e.attr({d: n})
            }) : (n = l.getPiePath({
                me: l,
                startAngle: g,
                angle: s,
                size: c
            }), r.isTrack || (t.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", n), e.attr({
                d: n,
                "stroke-width": l.strokeWidth
            }))
        }
    }, {
        key: "pieClicked", value: function (t) {
            var e, i = this.w, a = this.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0),
                t = i.globals.dom.Paper.select(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
            "true" !== t.attr("data:pieClicked") ? (i = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), Array.prototype.forEach.call(i, function (t) {
                t.setAttribute("data:pieClicked", "false");
                var e = t.getAttribute("data:pathOrig");
                t.setAttribute("d", e)
            }), t.attr("data:pieClicked", "true"), e = parseInt(t.attr("data:startAngle"), 10), i = parseInt(t.attr("data:angle"), 10), e = this.getPiePath({
                me: this,
                startAngle: e,
                angle: i,
                size: a
            }), 360 !== i && t.plot(e)) : (t.attr({"data:pieClicked": "false"}), this.revertDataLabelsInner(t.node, this.donutDataLabels), e = t.attr("data:pathOrig"), t.attr({d: e}))
        }
    }, {
        key: "getChangedPath", value: function (t, e) {
            var i = "";
            return i = this.dynamicAnim && this.w.globals.dataChanged ? this.getPiePath({
                me: this,
                startAngle: t,
                angle: e - t,
                size: this.size
            }) : i
        }
    }, {
        key: "getPiePath", value: function (t) {
            var e = t.me, i = t.startAngle, a = t.angle, s = t.size, o = i, r = Math.PI * (o - 90) / 180, n = a + i;
            Math.ceil(n) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (n = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(n) > this.fullAngle && (n -= this.fullAngle);
            var l = Math.PI * (n - 90) / 180, t = e.centerX + s * Math.cos(r), i = e.centerY + s * Math.sin(r),
                r = e.centerX + s * Math.cos(l), l = e.centerY + s * Math.sin(l),
                n = T.polarToCartesian(e.centerX, e.centerY, e.donutSize, n),
                o = T.polarToCartesian(e.centerX, e.centerY, e.donutSize, o), a = 180 < a ? 1 : 0,
                l = ["M", t, i, "A", s, s, 0, a, 1, r, l];
            return ("donut" === e.chartType ? [].concat(l, ["L", n.x, n.y, "A", e.donutSize, e.donutSize, 0, a, 0, o.x, o.y, "L", t, i, "z"]) : "pie" === e.chartType || "polarArea" === e.chartType ? [].concat(l, ["L", e.centerX, e.centerY, "L", t, i]) : [].concat(l)).join(" ")
        }
    }, {
        key: "drawPolarElements", value: function (t) {
            var e = this.w, i = new et(this.ctx), a = new I(this.ctx), s = new It(this.ctx), o = a.group(),
                r = a.group(), i = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0),
                n = i.result.reverse(), l = i.result.length;
            this.maxY = i.niceMax;
            for (var h = e.globals.radialSize, c = h / (l - 1), d = 0; d < l - 1; d++) {
                var g, u = a.drawCircle(h);
                u.attr({
                    cx: this.centerX,
                    cy: this.centerY,
                    fill: "none",
                    "stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth,
                    stroke: e.config.plotOptions.polarArea.rings.strokeColor
                }), e.config.yaxis[0].show && (g = s.drawYAxisTexts(this.centerX, this.centerY - h + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, d, n[d]), r.add(g)), o.add(u), h -= c
            }
            this.drawSpokes(t), t.add(o), t.add(r)
        }
    }, {
        key: "renderInnerDataLabels", value: function (t, e) {
            var i = this.w, a = new I(this.ctx), s = a.group({
                class: "apexcharts-datalabels-group",
                transform: "translate(".concat(e.translateX || 0, ", ").concat(e.translateY || 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")")
            }), o = t.total.show;
            s.node.style.opacity = e.opacity;
            var r, n = e.centerX, l = e.centerY, h = void 0 === t.name.color ? i.globals.colors[0] : t.name.color,
                c = t.name.fontSize, d = t.name.fontFamily, g = t.name.fontWeight,
                u = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color, p = t.value.formatter, f = "",
                e = "";
            return o ? (h = t.total.color, c = t.total.fontSize, d = t.total.fontFamily, g = t.total.fontWeight, e = t.total.label, f = t.total.formatter(i)) : 1 === i.globals.series.length && (f = p(i.globals.series[0], i), e = i.globals.seriesNames[0]), e = e && t.name.formatter(e, t.total.show, i), t.name.show && ((r = a.drawText({
                x: n,
                y: l + parseFloat(t.name.offsetY),
                text: e,
                textAnchor: "middle",
                foreColor: h,
                fontSize: c,
                fontWeight: g,
                fontFamily: d
            })).node.classList.add("apexcharts-datalabel-label"), s.add(r)), t.value.show && (r = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, (t = a.drawText({
                x: n,
                y: l + r,
                text: f,
                textAnchor: "middle",
                foreColor: u,
                fontWeight: t.value.fontWeight,
                fontSize: t.value.fontSize,
                fontFamily: t.value.fontFamily
            })).node.classList.add("apexcharts-datalabel-value"), s.add(t)), s
        }
    }, {
        key: "printInnerLabels", value: function (t, e, i, a) {
            var s, o = this.w;
            a ? s = void 0 === t.name.color ? o.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : 1 < o.globals.series.length && t.total.show && (s = t.total.color);
            var r = o.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                n = o.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
            i = (0, t.value.formatter)(i, o), a || "function" != typeof t.total.formatter || (i = t.total.formatter(o));
            a = e === t.total.label;
            e = t.name.formatter(e, a, o), null !== r && (r.textContent = e), null !== n && (n.textContent = i), null !== r && (r.style.fill = s)
        }
    }, {
        key: "printDataLabelsInner", value: function (t, e) {
            var i = this.w, a = t.getAttribute("data:value"),
                s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
            1 < i.globals.series.length && this.printInnerLabels(e, s, a, t);
            i = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
            null !== i && (i.style.opacity = 1)
        }
    }, {
        key: "drawSpokes", value: function (i) {
            var a = this, t = this.w, s = new I(this.ctx), o = t.config.plotOptions.polarArea.spokes;
            if (0 !== o.strokeWidth) {
                for (var e = [], r = 360 / t.globals.series.length, n = 0; n < t.globals.series.length; n++) e.push(T.polarToCartesian(this.centerX, this.centerY, t.globals.radialSize, t.config.plotOptions.pie.startAngle + r * n));
                e.forEach(function (t, e) {
                    e = s.drawLine(t.x, t.y, a.centerX, a.centerY, Array.isArray(o.connectorColors) ? o.connectorColors[e] : o.connectorColors);
                    i.add(e)
                })
            }
        }
    }, {
        key: "revertDataLabelsInner", value: function (t, a, e) {
            var s = this, i = this.w, o = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), r = !1,
                n = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), l = function (t) {
                    var e = t.makeSliceOut, i = t.printLabel;
                    Array.prototype.forEach.call(n, function (t) {
                        "true" === t.getAttribute("data:pieClicked") && (e && (r = !0), i && s.printDataLabelsInner(t, a))
                    })
                };
            l({
                makeSliceOut: !0,
                printLabel: !1
            }), a.total.show && 1 < i.globals.series.length ? r && !a.total.showAlways ? l({
                makeSliceOut: !1,
                printLabel: !0
            }) : this.printInnerLabels(a, a.total.label, a.total.formatter(i)) : (l({
                makeSliceOut: !1,
                printLabel: !0
            }), r || (i.globals.selectedDataPoints.length && 1 < i.globals.series.length ? 0 < i.globals.selectedDataPoints[0].length ? (l = i.globals.selectedDataPoints[0], l = i.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(l)), this.printDataLabelsInner(l, a)) : o && i.globals.selectedDataPoints.length && 0 === i.globals.selectedDataPoints[0].length && (o.style.opacity = 0) : o && 1 < i.globals.series.length && (o.style.opacity = 0)))
        }
    }]), Nt), Xt = (o(Dt, [{
        key: "draw", value: function (t) {
            var d = this, g = this.w, u = new F(this.ctx), p = [], f = new D(this.ctx);
            t.length && (this.dataPointsLen = t[g.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
            var x, b, e = g.globals.gridWidth / 2, i = g.globals.gridHeight / 2,
                e = e + g.config.plotOptions.radar.offsetX, i = i + g.config.plotOptions.radar.offsetY,
                a = this.graphics.group({
                    class: "apexcharts-radar-series apexcharts-plot-series",
                    transform: "translate(".concat(e || 0, ", ").concat(i || 0, ")")
                }), m = null;
            return this.yaxisLabels = this.graphics.group({class: "apexcharts-yaxis"}), t.forEach(function (t, s) {
                var e = t.length === g.globals.dataPoints, o = d.graphics.group().attr({
                    class: "apexcharts-series",
                    "data:longestSeries": e,
                    seriesName: T.escapeString(g.globals.seriesNames[s]),
                    rel: s + 1,
                    "data:realIndex": s
                });
                d.dataRadiusOfPercent[s] = [], d.dataRadius[s] = [], d.angleArr[s] = [], t.forEach(function (t, e) {
                    var i = Math.abs(d.maxValue - d.minValue);
                    t += Math.abs(d.minValue), d.isLog && (t = d.coreUtils.getLogVal(t, 0)), d.dataRadiusOfPercent[s][e] = t / i, d.dataRadius[s][e] = d.dataRadiusOfPercent[s][e] * d.size, d.angleArr[s][e] = e * d.disAngle
                }), x = d.getDataPointsPos(d.dataRadius[s], d.angleArr[s]);
                var i = d.createPaths(x, {x: 0, y: 0});
                m = d.graphics.group({class: "apexcharts-series-markers-wrap apexcharts-element-hidden"}), b = d.graphics.group({
                    class: "apexcharts-datalabels",
                    "data:realIndex": s
                }), g.globals.delayedElements.push({el: m.node, index: s});
                var a = {
                    i: s,
                    realIndex: s,
                    animationDelay: s,
                    initialSpeed: g.config.chart.animations.speed,
                    dataChangeSpeed: g.config.chart.animations.dynamicAnimation.speed,
                    className: "apexcharts-radar",
                    shouldClipToGrid: !1,
                    bindEventsOnPaths: !1,
                    stroke: g.globals.stroke.colors[s],
                    strokeLineCap: g.config.stroke.lineCap
                }, r = null;
                0 < g.globals.previousPaths.length && (r = d.getPreviousPath(s));
                for (var n = 0; n < i.linePathsTo.length; n++) {
                    var l = d.graphics.renderPaths(M(M({}, a), {}, {
                        pathFrom: null === r ? i.linePathsFrom[n] : r,
                        pathTo: i.linePathsTo[n],
                        strokeWidth: Array.isArray(d.strokeWidth) ? d.strokeWidth[s] : d.strokeWidth,
                        fill: "none",
                        drawShadow: !1
                    }));
                    o.add(l);
                    var h = u.fillPath({seriesNumber: s}), c = d.graphics.renderPaths(M(M({}, a), {}, {
                        pathFrom: null === r ? i.areaPathsFrom[n] : r,
                        pathTo: i.areaPathsTo[n],
                        strokeWidth: 0,
                        fill: h,
                        drawShadow: !1
                    }));
                    g.config.chart.dropShadow.enabled && (l = new C(d.ctx), h = g.config.chart.dropShadow, l.dropShadow(c, Object.assign({}, h, {noUserSpaceOnUse: !0}), s)), o.add(c)
                }
                t.forEach(function (t, e) {
                    var i = new R(d.ctx).getMarkerConfig({
                        cssClass: "apexcharts-marker",
                        seriesIndex: s,
                        dataPointIndex: e
                    }), a = d.graphics.drawMarker(x[e].x, x[e].y, i);
                    a.attr("rel", e), a.attr("j", e), a.attr("index", s), a.node.setAttribute("default-marker-size", i.pSize);
                    i = d.graphics.group({class: "apexcharts-series-markers"});
                    i && i.add(a), m.add(i), o.add(m);
                    a = g.config.dataLabels;
                    a.enabled && (i = a.formatter(g.globals.series[s][e], {
                        seriesIndex: s,
                        dataPointIndex: e,
                        w: g
                    }), f.plotDataLabelsText({
                        x: x[e].x,
                        y: x[e].y,
                        text: i,
                        textAnchor: "middle",
                        i: s,
                        j: s,
                        parent: b,
                        offsetCorrection: !1,
                        dataLabelsConfig: M({}, a)
                    })), o.add(b)
                }), p.push(o)
            }), this.drawPolygons({parent: a}), g.config.xaxis.labels.show && (t = this.drawXAxisTexts(), a.add(t)), p.forEach(function (t) {
                a.add(t)
            }), a.add(this.yaxisLabels), a
        }
    }, {
        key: "drawPolygons", value: function (t) {
            for (var o = this, s = this.w, r = t.parent, i = new It(this.ctx), a = s.globals.yAxisScale[0].result.reverse(), e = a.length, n = [], l = this.size / (e - 1), h = 0; h < e; h++) n[h] = l * h;
            n.reverse();
            var c = [], d = [];
            n.forEach(function (t, a) {
                var t = T.getPolygonPos(t, o.dataPointsLen), s = "";
                t.forEach(function (t, e) {
                    var i;
                    0 === a && (i = o.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(o.polygons.connectorColors) ? o.polygons.connectorColors[e] : o.polygons.connectorColors), d.push(i)), 0 === e && o.yaxisLabelsTextsPos.push({
                        x: t.x,
                        y: t.y
                    }), s += t.x + "," + t.y + " "
                }), c.push(s)
            }), c.forEach(function (t, e) {
                var i = o.polygons.strokeColors, a = o.polygons.strokeWidth,
                    e = o.graphics.drawPolygon(t, Array.isArray(i) ? i[e] : i, Array.isArray(a) ? a[e] : a, s.globals.radarPolygons.fill.colors[e]);
                r.add(e)
            }), d.forEach(function (t) {
                r.add(t)
            }), s.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function (t, e) {
                e = i.drawYAxisTexts(t.x, t.y, e, a[e]);
                o.yaxisLabels.add(e)
            })
        }
    }, {
        key: "drawXAxisTexts", value: function () {
            var o = this, r = this.w, n = r.config.xaxis.labels, l = this.graphics.group({class: "apexcharts-xaxis"}),
                h = T.getPolygonPos(this.size, this.dataPointsLen);
            return r.globals.labels.forEach(function (t, e) {
                var i, a = r.config.xaxis.labels.formatter, s = new D(o.ctx);
                h[e] && (i = o.getTextPos(h[e], o.size), t = a(t, {
                    seriesIndex: -1,
                    dataPointIndex: e,
                    w: r
                }), s.plotDataLabelsText({
                    x: i.newX,
                    y: i.newY,
                    text: t,
                    textAnchor: i.textAnchor,
                    i: e,
                    j: e,
                    parent: l,
                    color: Array.isArray(n.style.colors) && n.style.colors[e] ? n.style.colors[e] : "#a8a8a8",
                    dataLabelsConfig: M({textAnchor: i.textAnchor, dropShadow: {enabled: !1}}, n),
                    offsetCorrection: !1
                }))
            }), l
        }
    }, {
        key: "createPaths", value: function (i, t) {
            var a, s, o = this, e = [], r = [], n = [], l = [];
            return i.length && (r = [this.graphics.move(t.x, t.y)], l = [this.graphics.move(t.x, t.y)], a = this.graphics.move(i[0].x, i[0].y), s = this.graphics.move(i[0].x, i[0].y), i.forEach(function (t, e) {
                a += o.graphics.line(t.x, t.y), s += o.graphics.line(t.x, t.y), e === i.length - 1 && (a += "Z", s += "Z")
            }), e.push(a), n.push(s)), {linePathsFrom: r, linePathsTo: e, areaPathsFrom: l, areaPathsTo: n}
        }
    }, {
        key: "getTextPos", value: function (t, e) {
            var i = "middle", a = t.x, s = t.y;
            return 10 <= Math.abs(t.x) ? 0 < t.x ? (i = "start", a += 10) : t.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? s -= 10 : 0 < t.y && (s += 10)), {
                textAnchor: i,
                newX: a,
                newY: s
            }
        }
    }, {
        key: "getPreviousPath", value: function (t) {
            for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) {
                var s = e.globals.previousPaths[a];
                0 < s.paths.length && parseInt(s.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[a].paths[0] && (i = e.globals.previousPaths[a].paths[0].d)
            }
            return i
        }
    }, {
        key: "getDataPointsPos", value: function (t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
            t = t || [], e = e || [];
            for (var a = [], s = 0; s < i; s++) {
                var o = {};
                o.x = t[s] * Math.sin(e[s]), o.y = -t[s] * Math.cos(e[s]), a.push(o)
            }
            return a
        }
    }]), Dt), Et = function () {
        n(a, zt);
        var i = c(a);

        function a(t) {
            var e;
            s(this, a), (e = i.call(this, t)).ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
            t = e.w;
            return e.startAngle = t.config.plotOptions.radialBar.startAngle, e.endAngle = t.config.plotOptions.radialBar.endAngle, e.totalAngle = Math.abs(t.config.plotOptions.radialBar.endAngle - t.config.plotOptions.radialBar.startAngle), e.trackStartAngle = t.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = t.config.plotOptions.radialBar.track.endAngle, e.donutDataLabels = e.w.config.plotOptions.radialBar.dataLabels, e.radialDataLabels = e.donutDataLabels, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle = e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.margin = parseInt(t.config.plotOptions.radialBar.track.margin, 10), e
        }

        return o(a, [{
            key: "draw", value: function (t) {
                var e = this.w, i = new I(this.ctx), a = i.group({class: "apexcharts-radialbar"});
                if (e.globals.noData) return a;
                var s = i.group(), o = this.defaultSize / 2, r = e.globals.gridWidth / 2, n = this.defaultSize / 2.05;
                e.config.chart.sparkline.enabled || (n = n - e.config.stroke.width - e.config.chart.dropShadow.blur);
                var l = e.globals.fill.colors;
                e.config.plotOptions.radialBar.track.show && (i = this.drawTracks({
                    size: n,
                    centerX: r,
                    centerY: o,
                    colorArr: l,
                    series: t
                }), s.add(i));
                l = this.drawArcs({
                    size: n,
                    centerX: r,
                    centerY: o,
                    colorArr: l,
                    series: t
                }), t = 360, t = (360 - (t = e.config.plotOptions.radialBar.startAngle < 0 ? this.totalAngle : t)) / 360;
                return e.globals.radialSize = n - n * t, this.radialDataLabels.value.show && (n = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY), e.globals.radialSize += n * t), s.add(l.g), "front" === e.config.plotOptions.radialBar.hollow.position && (l.g.add(l.elHollow), l.dataLabels && l.g.add(l.dataLabels)), a.add(s), a
            }
        }, {
            key: "drawTracks", value: function (t) {
                var e = this.w, i = new I(this.ctx), a = i.group({class: "apexcharts-tracks"}), s = new C(this.ctx),
                    o = new F(this.ctx), r = this.getStrokeWidth(t);
                t.size = t.size - r / 2;
                for (var n = 0; n < t.series.length; n++) {
                    var l = i.group({class: "apexcharts-radialbar-track apexcharts-track"});
                    a.add(l), l.attr({rel: n + 1}), t.size = t.size - r - this.margin;
                    var h = e.config.plotOptions.radialBar.track, c = o.fillPath({
                        seriesNumber: 0,
                        size: t.size,
                        fillColors: Array.isArray(h.background) ? h.background[n] : h.background,
                        solid: !0
                    }), d = this.trackStartAngle, g = this.trackEndAngle;
                    360 <= Math.abs(g) + Math.abs(d) && (g = 360 - Math.abs(this.startAngle) - .1);
                    c = i.drawPath({
                        d: "",
                        stroke: c,
                        strokeWidth: r * parseInt(h.strokeWidth, 10) / 100,
                        fill: "none",
                        strokeOpacity: h.opacity,
                        classes: "apexcharts-radialbar-area"
                    });
                    h.dropShadow.enabled && (h = h.dropShadow, s.dropShadow(c, h)), l.add(c), c.attr("id", "apexcharts-radialbarTrack-" + n), this.animatePaths(c, {
                        centerX: t.centerX,
                        centerY: t.centerY,
                        endAngle: g,
                        startAngle: d,
                        size: t.size,
                        i: n,
                        totalItems: 2,
                        animBeginArr: 0,
                        dur: 0,
                        isTrack: !0,
                        easing: e.globals.easing
                    })
                }
                return a
            }
        }, {
            key: "drawArcs", value: function (t) {
                var e = this.w, i = new I(this.ctx), a = new F(this.ctx), s = new C(this.ctx), o = i.group(),
                    r = this.getStrokeWidth(t);
                t.size = t.size - r / 2;
                var n = e.config.plotOptions.radialBar.hollow.background,
                    l = t.size - r * t.series.length - this.margin * t.series.length - r * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2,
                    h = l - e.config.plotOptions.radialBar.hollow.margin;
                void 0 !== e.config.plotOptions.radialBar.hollow.image && (n = this.drawHollowImage(t, o, l, n));
                h = this.drawHollow({size: h, centerX: t.centerX, centerY: t.centerY, fill: n || "transparent"});
                e.config.plotOptions.radialBar.hollow.dropShadow.enabled && (c = e.config.plotOptions.radialBar.hollow.dropShadow, s.dropShadow(h, c));
                n = 1;
                !this.radialDataLabels.total.show && 1 < e.globals.series.length && (n = 0);
                var c = null;
                this.radialDataLabels.show && (c = this.renderInnerDataLabels(this.radialDataLabels, {
                    hollowSize: l,
                    centerX: t.centerX,
                    centerY: t.centerY,
                    opacity: n
                })), "back" === e.config.plotOptions.radialBar.hollow.position && (o.add(h), c && o.add(c));
                for (var d = !1, g = (d = e.config.plotOptions.radialBar.inverseOrder ? !0 : d) ? t.series.length - 1 : 0; d ? 0 <= g : g < t.series.length; d ? g-- : g++) {
                    var u = i.group({
                        class: "apexcharts-series apexcharts-radial-series",
                        seriesName: T.escapeString(e.globals.seriesNames[g])
                    });
                    o.add(u), u.attr({
                        rel: g + 1,
                        "data:realIndex": g
                    }), this.ctx.series.addCollapsedClassToSeries(u, g), t.size = t.size - r - this.margin;
                    var p = a.fillPath({seriesNumber: g, size: t.size, value: t.series[g]}), f = this.startAngle,
                        x = void 0, b = T.negToZero(100 < t.series[g] ? 100 : t.series[g]) / 100,
                        m = Math.round(this.totalAngle * b) + this.startAngle, v = void 0;
                    e.globals.dataChanged && (x = this.startAngle, v = Math.round(this.totalAngle * T.negToZero(e.globals.previousPaths[g]) / 100) + x), 360 <= Math.abs(m) + Math.abs(f) && (m -= .01), 360 <= Math.abs(v) + Math.abs(x) && (v -= .01);
                    var y = m - f,
                        b = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[g] : e.config.stroke.dashArray,
                        b = i.drawPath({
                            d: "",
                            stroke: p,
                            strokeWidth: r,
                            fill: "none",
                            fillOpacity: e.config.fill.opacity,
                            classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + g,
                            strokeDashArray: b
                        });
                    I.setAttrs(b.node, {
                        "data:angle": y,
                        "data:value": t.series[g]
                    }), e.config.chart.dropShadow.enabled && (y = e.config.chart.dropShadow, s.dropShadow(b, y, g)), s.setSelectionFilter(b, 0, g), this.addListeners(b, this.radialDataLabels), u.add(b), b.attr({
                        index: 0,
                        j: g
                    });
                    u = 0;
                    !this.initialAnim || e.globals.resized || e.globals.dataChanged || (u = (m - f) / 360 * e.config.chart.animations.speed, this.animDur = u / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged && (u = (m - f) / 360 * e.config.chart.animations.dynamicAnimation.speed, this.animDur = u / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), this.animatePaths(b, {
                        centerX: t.centerX,
                        centerY: t.centerY,
                        endAngle: m,
                        startAngle: f,
                        prevEndAngle: v,
                        prevStartAngle: x,
                        size: t.size,
                        i: g,
                        totalItems: 2,
                        animBeginArr: this.animBeginArr,
                        dur: u,
                        shouldSetPrevPaths: !0,
                        easing: e.globals.easing
                    })
                }
                return {g: o, elHollow: h, dataLabels: c}
            }
        }, {
            key: "drawHollow", value: function (t) {
                var e = new I(this.ctx).drawCircle(2 * t.size);
                return e.attr({
                    class: "apexcharts-radialbar-hollow",
                    cx: t.centerX,
                    cy: t.centerY,
                    r: t.size,
                    fill: t.fill
                }), e
            }
        }, {
            key: "drawHollowImage", value: function (e, t, i, a) {
                var s, o, r = this.w, n = new F(this.ctx), l = T.randomId(),
                    h = r.config.plotOptions.radialBar.hollow.image;
                return r.config.plotOptions.radialBar.hollow.imageClipped ? (n.clippedImgArea({
                    width: i,
                    height: i,
                    image: h,
                    patternID: "pattern".concat(r.globals.cuid).concat(l)
                }), a = "url(#pattern".concat(r.globals.cuid).concat(l, ")")) : (s = r.config.plotOptions.radialBar.hollow.imageWidth, o = r.config.plotOptions.radialBar.hollow.imageHeight, void 0 === s && void 0 === o ? (l = r.globals.dom.Paper.image(h).loaded(function (t) {
                    this.move(e.centerX - t.width / 2 + r.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - t.height / 2 + r.config.plotOptions.radialBar.hollow.imageOffsetY)
                }), t.add(l)) : (h = r.globals.dom.Paper.image(h).loaded(function (t) {
                    this.move(e.centerX - s / 2 + r.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - o / 2 + r.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(s, o)
                }), t.add(h))), a
            }
        }, {
            key: "getStrokeWidth", value: function (t) {
                var e = this.w;
                return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin
            }
        }]), a
    }(), Yt = (o(Ht, [{
        key: "sameValueSeriesFix", value: function (t, e) {
            var i = this.w;
            return "line" !== i.config.chart.type || "gradient" !== i.config.fill.type && "gradient" !== i.config.fill.type[t] || !new P(this.lineCtx.ctx, i).seriesHaveSameValues(t) || ((i = e[t].slice())[i.length - 1] = i[i.length - 1] + 1e-6, e[t] = i), e
        }
    }, {
        key: "calculatePoints", value: function (t) {
            var e = t.series, i = t.realIndex, a = t.x, s = t.y, o = t.i, r = t.j, n = t.prevY, l = this.w, h = [],
                c = [];
            return 0 === r && (t = this.lineCtx.categoryAxisCorrection + l.config.markers.offsetX, l.globals.isXNumeric && (t = (l.globals.seriesX[i][0] - l.globals.minX) / this.lineCtx.xRatio + l.config.markers.offsetX), h.push(t), c.push(T.isNumber(e[o][0]) ? n + l.config.markers.offsetY : null)), h.push(a + l.config.markers.offsetX), c.push(T.isNumber(e[o][r + 1]) ? s + l.config.markers.offsetY : null), {
                x: h,
                y: c
            }
        }
    }, {
        key: "checkPreviousPaths", value: function (t) {
            for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, o = 0; o < s.globals.previousPaths.length; o++) {
                var r = s.globals.previousPaths[o];
                ("line" === r.type || "area" === r.type) && 0 < r.paths.length && parseInt(r.realIndex, 10) === parseInt(a, 10) && ("line" === r.type ? (this.lineCtx.appendPathFrom = !1, e = s.globals.previousPaths[o].paths[0].d) : "area" === r.type && (this.lineCtx.appendPathFrom = !1, i = s.globals.previousPaths[o].paths[0].d, s.config.stroke.show && s.globals.previousPaths[o].paths[1] && (e = s.globals.previousPaths[o].paths[1].d)))
            }
            return {pathFromLine: e, pathFromArea: i}
        }
    }, {
        key: "determineFirstPrevY", value: function (t) {
            var e = t.i, i = t.series, a = t.prevY, s = t.lineYPosition, t = this.w;
            if (void 0 !== i[e][0]) a = (s = t.config.chart.stacked && 0 < e ? this.lineCtx.prevSeriesY[e - 1][0] : this.lineCtx.zeroY) - i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0); else if (t.config.chart.stacked && 0 < e && void 0 === i[e][0]) for (var o = e - 1; 0 <= o; o--) if (null !== i[o][0] && void 0 !== i[o][0]) {
                a = s = this.lineCtx.prevSeriesY[o][0];
                break
            }
            return {prevY: a, lineYPosition: s}
        }
    }]), Ht), Ft = (o(Rt, [{
        key: "draw", value: function (t, e, i) {
            var a = this.w, s = new I(this.ctx), o = a.globals.comboCharts ? e : a.config.chart.type,
                r = s.group({class: "apexcharts-".concat(o, "-series apexcharts-plot-series")}), s = new P(this.ctx, a);
            this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = s.getLogSeries(t), this.yRatio = s.getLogYRatios(this.yRatio);
            for (var n = [], l = 0; l < t.length; l++) {
                t = this.lineHelpers.sameValueSeriesFix(l, t);
                var h = a.globals.comboCharts ? i[l] : l;
                this._initSerieVariables(t, l, h);
                var c = [], d = [], g = a.globals.padHorizontal + this.categoryAxisCorrection;
                this.ctx.series.addCollapsedClassToSeries(this.elSeries, h), a.globals.isXNumeric && 0 < a.globals.seriesX.length && (g = (a.globals.seriesX[h][0] - a.globals.minX) / this.xRatio), d.push(g);
                var u = g, p = u, f = this.zeroY,
                    f = this.lineHelpers.determineFirstPrevY({i: l, series: t, prevY: f, lineYPosition: 0}).prevY;
                c.push(f);
                var x = f, f = this._calculatePathsFrom({series: t, i: l, realIndex: h, prevX: p, prevY: f}),
                    c = this._iterateOverDataPoints({
                        series: t,
                        realIndex: h,
                        i: l,
                        x: g,
                        y: 1,
                        pX: u,
                        pY: x,
                        pathsFrom: f,
                        linePaths: [],
                        areaPaths: [],
                        seriesIndex: i,
                        lineYPosition: 0,
                        xArrj: d,
                        yArrj: c
                    });
                this._handlePaths({
                    type: o,
                    realIndex: h,
                    i: l,
                    paths: c
                }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), n.push(this.elSeries)
            }
            if (a.config.chart.stacked) for (var b = n.length; 0 < b; b--) r.add(n[b - 1]); else for (var m = 0; m < n.length; m++) r.add(n[m]);
            return r
        }
    }, {
        key: "_initSerieVariables", value: function (t, e, i) {
            var a = this.w, s = new I(this.ctx);
            this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - ("on" === a.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width, 1 < this.yRatio.length && (this.yaxisIndex = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || "end" === a.config.plotOptions.area.fillTo) && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({
                class: "apexcharts-series",
                seriesName: T.escapeString(a.globals.seriesNames[i])
            }), this.elPointsMain = s.group({
                class: "apexcharts-series-markers-wrap",
                "data:realIndex": i
            }), this.elDataLabelsWrap = s.group({class: "apexcharts-datalabels", "data:realIndex": i});
            a = t[e].length === a.globals.dataPoints;
            this.elSeries.attr({"data:longestSeries": a, rel: e + 1, "data:realIndex": i}), this.appendPathFrom = !0
        }
    }, {
        key: "_calculatePathsFrom", value: function (t) {
            var e, i, a, s = t.series, o = t.i, r = t.realIndex, n = t.prevX, l = t.prevY, h = this.w,
                c = new I(this.ctx);
            if (null === s[o][0]) {
                for (var d = 0; d < s[o].length; d++) if (null !== s[o][d]) {
                    n = this.xDivision * d, l = this.zeroY - s[o][d] / this.yRatio[this.yaxisIndex], e = c.move(n, l), i = c.move(n, this.areaBottomY);
                    break
                }
            } else e = c.move(n, l), i = c.move(n, this.areaBottomY) + c.line(n, l);
            return a = c.move(-1, this.zeroY) + c.line(-1, this.zeroY), t = c.move(-1, this.zeroY) + c.line(-1, this.zeroY), 0 < h.globals.previousPaths.length && (a = (r = this.lineHelpers.checkPreviousPaths({
                pathFromLine: a,
                pathFromArea: t,
                realIndex: r
            })).pathFromLine, t = r.pathFromArea), {
                prevX: n,
                prevY: l,
                linePath: e,
                areaPath: i,
                pathFromLine: a,
                pathFromArea: t
            }
        }
    }, {
        key: "_handlePaths", value: function (t) {
            var e = t.type, i = t.realIndex, a = t.i, s = t.paths, o = this.w, r = new I(this.ctx), n = new F(this.ctx);
            this.prevSeriesY.push(s.yArrj), o.globals.seriesXvalues[i] = s.xArrj, o.globals.seriesYvalues[i] = s.yArrj;
            var l, h = o.config.forecastDataPoints;
            0 < h.count && (l = o.globals.seriesXvalues[i][o.globals.seriesXvalues[i].length - h.count - 1], t = r.drawRect(l, 0, o.globals.gridWidth, o.globals.gridHeight, 0), o.globals.dom.elForecastMask.appendChild(t.node), l = r.drawRect(0, 0, l, o.globals.gridHeight, 0), o.globals.dom.elNonForecastMask.appendChild(l.node)), this.pointsChart || o.globals.delayedElements.push({
                el: this.elPointsMain.node,
                index: i
            });
            var c = {
                i: a,
                realIndex: i,
                animationDelay: a,
                initialSpeed: o.config.chart.animations.speed,
                dataChangeSpeed: o.config.chart.animations.dynamicAnimation.speed,
                className: "apexcharts-".concat(e)
            };
            if ("area" === e) for (var d = n.fillPath({seriesNumber: i}), g = 0; g < s.areaPaths.length; g++) {
                var u = r.renderPaths(M(M({}, c), {}, {
                    pathFrom: s.pathFromArea,
                    pathTo: s.areaPaths[g],
                    stroke: "none",
                    strokeWidth: 0,
                    strokeLineCap: null,
                    fill: d
                }));
                this.elSeries.add(u)
            }
            if (o.config.stroke.show && !this.pointsChart) for (var p = "line" === e ? n.fillPath({
                seriesNumber: i,
                i: a
            }) : o.globals.stroke.colors[i], f = 0; f < s.linePaths.length; f++) {
                var x = M(M({}, c), {}, {
                    pathFrom: s.pathFromLine,
                    pathTo: s.linePaths[f],
                    stroke: p,
                    strokeWidth: this.strokeWidth,
                    strokeLineCap: o.config.stroke.lineCap,
                    fill: "none"
                }), b = r.renderPaths(x);
                this.elSeries.add(b), 0 < h.count && ((x = r.renderPaths(x)).node.setAttribute("stroke-dasharray", h.dashArray), h.strokeWidth && x.node.setAttribute("stroke-width", h.strokeWidth), this.elSeries.add(x), x.attr("clip-path", "url(#forecastMask".concat(o.globals.cuid, ")")), b.attr("clip-path", "url(#nonForecastMask".concat(o.globals.cuid, ")")))
            }
        }
    }, {
        key: "_iterateOverDataPoints", value: function (t) {
            for (var e, i = t.series, a = t.realIndex, s = t.i, o = t.x, r = (t.y, t.pX), n = t.pY, l = t.pathsFrom, h = t.linePaths, c = t.areaPaths, d = t.seriesIndex, g = t.lineYPosition, u = t.xArrj, p = t.yArrj, f = this.w, x = new I(this.ctx), b = this.yRatio, m = l.prevY, v = l.linePath, y = l.areaPath, w = l.pathFromLine, k = l.pathFromArea, A = T.isNumber(f.globals.minYArr[a]) ? f.globals.minYArr[a] : f.globals.minY, S = 1 < f.globals.dataPoints ? f.globals.dataPoints - 1 : f.globals.dataPoints, C = 0; C < S; C++) {
                var L = void 0 === i[s][C + 1] || null === i[s][C + 1];
                f.globals.isXNumeric ? (P = f.globals.seriesX[a][C + 1], o = ((P = void 0 === f.globals.seriesX[a][C + 1] ? f.globals.seriesX[a][S - 1] : P) - f.globals.minX) / this.xRatio) : o += this.xDivision, g = f.config.chart.stacked && 0 < s && f.globals.collapsedSeries.length < f.config.series.length - 1 ? this.prevSeriesY[function (t) {
                    for (var e = t, i = 0; i < f.globals.series.length; i++) if (-1 < f.globals.collapsedSeriesIndices.indexOf(t)) {
                        e--;
                        break
                    }
                    return 0 <= e ? e : 0
                }(s - 1)][C + 1] : this.zeroY, e = L ? g - A / b[this.yaxisIndex] + 2 * (this.isReversed ? A / b[this.yaxisIndex] : 0) : g - i[s][C + 1] / b[this.yaxisIndex] + 2 * (this.isReversed ? i[s][C + 1] / b[this.yaxisIndex] : 0), u.push(o), p.push(e);
                var P = this.lineHelpers.calculatePoints({series: i, x: o, y: e, realIndex: a, i: s, j: C, prevY: m}),
                    L = this._createPaths({
                        series: i,
                        i: s,
                        realIndex: a,
                        j: C,
                        x: o,
                        y: e,
                        pX: r,
                        pY: n,
                        linePath: v,
                        areaPath: y,
                        linePaths: h,
                        areaPaths: c,
                        seriesIndex: d
                    }), c = L.areaPaths, h = L.linePaths, r = L.pX, n = L.pY, y = L.areaPath, v = L.linePath;
                this.appendPathFrom && (w += x.line(o, this.zeroY), k += x.line(o, this.zeroY)), this.handleNullDataPoints(i, P, s, C, a), this._handleMarkersAndLabels({
                    pointsPos: P,
                    series: i,
                    x: o,
                    y: e,
                    prevY: m,
                    i: s,
                    j: C,
                    realIndex: a
                })
            }
            return {yArrj: p, xArrj: u, pathFromArea: k, areaPaths: c, pathFromLine: w, linePaths: h}
        }
    }, {
        key: "_handleMarkersAndLabels", value: function (t) {
            var e = t.pointsPos;
            t.series, t.x, t.y, t.prevY;
            var i = t.i, a = t.j, s = t.realIndex, o = this.w, t = new D(this.ctx);
            this.pointsChart ? this.scatter.draw(this.elSeries, a, {
                realIndex: s,
                pointsPos: e,
                zRatio: this.zRatio,
                elParent: this.elPointsMain
            }) : (1 < o.globals.series[i].length && this.elPointsMain.node.classList.add("apexcharts-element-hidden"), null !== (i = this.markers.plotChartMarkers(e, s, a + 1)) && this.elPointsMain.add(i));
            a = t.drawDataLabel(e, s, a + 1, null);
            null !== a && this.elDataLabelsWrap.add(a)
        }
    }, {
        key: "_createPaths", value: function (t) {
            var e = t.series, i = t.i, a = t.realIndex, s = t.j, o = t.x, r = t.y, n = t.pX, l = t.pY, h = t.linePath,
                c = t.areaPath, d = t.linePaths, g = t.areaPaths, u = t.seriesIndex, p = this.w, f = new I(this.ctx),
                x = p.config.stroke.curve, t = this.areaBottomY;
            return "smooth" === (x = Array.isArray(p.config.stroke.curve) ? Array.isArray(u) ? p.config.stroke.curve[u[i]] : p.config.stroke.curve[i] : x) ? (u = .35 * (o - n), p.globals.hasNullValues ? (null !== e[i][s] && (c = null !== e[i][s + 1] ? (h = f.move(n, l) + f.curve(n + u, l, o - u, r, o + 1, r), f.move(n + 1, l) + f.curve(n + u, l, o - u, r, o + 1, r) + f.line(o, t) + f.line(n, t) + "z") : (h = f.move(n, l), f.move(n, l) + "z")), d.push(h), g.push(c)) : (h += f.curve(n + u, l, o - u, r, o, r), c += f.curve(n + u, l, o - u, r, o, r)), n = o, l = r, s === e[i].length - 2 && (c = c + f.curve(n, l, o, r, o, t) + f.move(o, r) + "z", p.globals.hasNullValues || (d.push(h), g.push(c)))) : (null === e[i][s + 1] && (h += f.move(o, r), p = p.globals.isXNumeric ? (p.globals.seriesX[a][s] - p.globals.minX) / this.xRatio : o - this.xDivision, c = c + f.line(p, t) + f.move(o, r) + "z"), null === e[i][s] && (h += f.move(o, r), c += f.move(o, t)), "stepline" === x ? (h = h + f.line(o, null, "H") + f.line(null, r, "V"), c = c + f.line(o, null, "H") + f.line(null, r, "V")) : "straight" === x && (h += f.line(o, r), c += f.line(o, r)), s === e[i].length - 2 && (c = c + f.line(o, t) + f.move(o, r) + "z", d.push(h), g.push(c))), {
                linePaths: d,
                areaPaths: g,
                pX: n,
                pY: l,
                linePath: h,
                areaPath: c
            }
        }
    }, {
        key: "handleNullDataPoints", value: function (t, e, i, a, s) {
            var o = this.w;
            !(null === t[i][a] && o.config.markers.showNullDataPoints || 1 === t[i].length) || null !== (o = this.markers.plotChartMarkers(e, s, a + 1, this.strokeWidth - o.config.markers.strokeWidth / 2, !0)) && this.elPointsMain.add(o)
        }
    }]), Rt);

    function Rt(t, e, i) {
        s(this, Rt), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i, this.scatter = new H(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Yt(this), this.markers = new R(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0
    }

    function Ht(t) {
        s(this, Ht), this.w = t.w, this.lineCtx = t
    }

    function Dt(t) {
        s(this, Dt), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
        t = this.w;
        this.graphics = new I(this.ctx), this.lineColorArr = (void 0 !== t.globals.stroke.colors ? t.globals.stroke : t.globals).colors, this.defaultSize = t.globals.svgHeight < t.globals.svgWidth ? t.globals.gridHeight + 1.5 * t.globals.goldenPadding : t.globals.gridWidth, this.isLog = t.config.yaxis[0].logarithmic, this.coreUtils = new P(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(t.globals.maxY, 0) : t.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : t.globals.minY, this.polygons = t.config.plotOptions.radar.polygons, this.strokeWidth = t.config.stroke.show ? t.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t.config.chart.dropShadow.blur, t.config.xaxis.labels.show && (this.size = this.size - t.globals.xAxisLabelsWidth / 1.75), void 0 !== t.config.plotOptions.radar.size && (this.size = t.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
    }

    function Nt(t) {
        s(this, Nt), this.ctx = t, this.w = t.w;
        t = this.w;
        this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = (void 0 !== t.globals.stroke.colors ? t.globals.stroke : t.globals).colors, this.defaultSize = Math.min(t.globals.gridWidth, t.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t.globals.gridWidth / 2, "radialBar" === t.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(t.config.plotOptions.pie.endAngle - t.config.plotOptions.pie.startAngle), this.initialAngle = t.config.plotOptions.pie.startAngle % this.fullAngle, t.globals.radialSize = this.defaultSize / 2.05 - t.config.stroke.width - (t.config.chart.sparkline.enabled ? 0 : t.config.chart.dropShadow.blur), this.donutSize = t.globals.radialSize * parseInt(t.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = []
    }

    function Ot(t) {
        s(this, Ot), this.ctx = t, this.w = t.w
    }

    function Wt(t, e) {
        s(this, Wt), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Mt(t), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0
    }

    function Bt(t) {
        s(this, Bt), this.ctx = t, this.w = t.w
    }

    function Vt(t) {
        s(this, Vt), this.ctx = t, this.w = t.w;
        t = this.w;
        this.tConfig = t.config.tooltip, this.tooltipUtil = new vt(this), this.tooltipLabels = new yt(this), this.tooltipPosition = new wt(this), this.marker = new kt(this), this.intersect = new At(this), this.axesTooltip = new St(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now()
    }

    function Gt(t) {
        s(this, Gt), this.w = t.w, this.ttCtx = t
    }

    function _t(t) {
        s(this, _t), this.w = t.w, this.ttCtx = t
    }

    function jt(t) {
        s(this, jt), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new wt(t)
    }

    function Ut(t) {
        s(this, Ut), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w
    }

    function qt(t) {
        s(this, qt), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new vt(t)
    }

    function Zt(t) {
        s(this, Zt), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx
    }

    function $t(t) {
        s(this, $t), this.ctx = t, this.w = t.w;
        t = this.w;
        this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t.globals.minX, this.maxX = t.globals.maxX
    }

    function Jt(t, e) {
        s(this, Jt), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ft(this)
    }

    function Qt(t) {
        s(this, Qt), this.w = t.w, this.lgCtx = t
    }

    function Kt(t) {
        s(this, Kt), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new ct(this), this.dimYAxis = new gt(this), this.dimXAxis = new dt(this), this.dimGrid = new ut(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0
    }

    function te(t) {
        s(this, te), this.w = t.w, this.dCtx = t
    }

    function ee(t) {
        s(this, ee), this.w = t.w, this.dCtx = t
    }

    function ie(t) {
        s(this, ie), this.w = t.w, this.dCtx = t
    }

    function ae(t) {
        s(this, ae), this.w = t.w, this.dCtx = t
    }

    function se(t) {
        s(this, se), this.ctx = t, this.w = t.w
    }

    function oe(t) {
        s(this, oe), this.ctx = t, this.colors = [], this.w = t.w;
        t = this.w;
        this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === t.config.chart.type && t.config.plotOptions.treemap.distributed || "heatmap" === t.config.chart.type && t.config.plotOptions.heatmap.distributed, this.isBarDistributed = t.config.plotOptions.bar.distributed && ("bar" === t.config.chart.type || "rangeBar" === t.config.chart.type)
    }

    function re(t) {
        s(this, re), this.ctx = t, this.w = t.w
    }

    function ne(t) {
        s(this, ne), this.ctx = t, this.w = t.w
    }

    function le(t) {
        s(this, le), this.ctx = t, this.w = t.w
    }

    function he(t) {
        s(this, he), this.ctx = t, this.w = t.w
    }

    function ce(t) {
        s(this, ce), this.ctx = t, this.w = t.w, this.documentEvent = T.bind(this.documentEvent, this)
    }

    function de(t) {
        s(this, de), this.ctx = t, this.w = t.w;
        var e = this.w;
        this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.axisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === e.config.chart.type && e.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === e.config.xaxis.position && (this.xAxisoffX = e.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new J(t)
    }

    function ge(t) {
        s(this, ge), this.ctx = t, this.w = t.w, this.scales = new et(t)
    }

    function ue(t) {
        s(this, ue), this.ctx = t, this.w = t.w
    }

    function pe(t) {
        s(this, pe), this.ctx = t, this.w = t.w;
        var e = this.w;
        this.xaxisLabels = e.globals.labels.slice(), this.axesUtils = new J(t), this.isRangeBar = e.globals.seriesRangeBar.length, 0 < e.globals.timescaleLabels.length && (this.xaxisLabels = e.globals.timescaleLabels.slice())
    }

    function fe(t) {
        s(this, fe), this.ctx = t, this.w = t.w;
        var e = this.w;
        this.axesUtils = new J(t), this.xaxisLabels = e.globals.labels.slice(), 0 < e.globals.timescaleLabels.length && !e.globals.isBarHorizontal && (this.xaxisLabels = e.globals.timescaleLabels.slice()), e.config.xaxis.overwriteCategories && (this.xaxisLabels = e.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === e.config.xaxis.position ? this.offY = 0 : this.offY = e.globals.gridHeight + 1, this.offY = this.offY + e.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === e.config.chart.type && e.config.plotOptions.bar.horizontal, this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.xaxisBorderWidth = e.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = e.config.yaxis[0].axisBorder.width.toString()), -1 < this.xaxisBorderWidth.indexOf("%") ? this.xaxisBorderWidth = e.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = e.config.xaxis.axisBorder.height, this.yaxis = e.config.yaxis[0]
    }

    function xe(t) {
        s(this, xe), this.ctx = t, this.w = t.w
    }

    function be(t) {
        s(this, be), this.ctx = t, this.w = t.w
    }

    function me(t) {
        s(this, me), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM"
    }

    function ve(t) {
        s(this, ve), this.ctx = t, this.w = t.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new P(this.ctx)
    }

    function ye(t) {
        s(this, ye), this.opts = t
    }

    function we() {
        s(this, we)
    }

    function ke(t) {
        s(this, ke), this.opts = t
    }

    function Ae(t) {
        s(this, Ae), this.opts = t
    }

    function Se(t) {
        s(this, Se), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    }

    function Ce(t, e) {
        s(this, Ce), this.ctx = t, this.w = t.w;
        t = this.w;
        this.barOptions = t.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = t.config.stroke.width, this.isNullValue = !1, this.isRangeBar = t.globals.seriesRangeBar.length && this.isHorizontal, this.xyRatios = e, null !== this.xyRatios && (this.xRatio = e.xRatio, this.initialXRatio = e.initialXRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.barHelpers = new W(this)
    }

    function Le(t) {
        s(this, Le), this.w = t.w, this.barCtx = t
    }

    function Pe(t) {
        s(this, Pe), this.ctx = t, this.w = t.w, this.legendInactiveClass = "legend-mouseover-inactive"
    }

    function Me(t) {
        s(this, Me), this.w = t.w, this.barCtx = t
    }

    function Te(t) {
        s(this, Te), this.ctx = t, this.w = t.w
    }

    function Ie(t) {
        s(this, Ie), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled
    }

    function ze(t, e) {
        s(this, ze), this.ctx = t, this.w = t.w
    }

    function Xe(t) {
        s(this, Xe), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0
    }

    function Ee(t) {
        s(this, Ee), this.ctx = t, this.w = t.w, this.graphics = new I(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new e(this), this.xAxisAnnotations = new u(this), this.yAxisAnnotations = new p(this), this.pointsAnnotations = new f(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
    }

    function Ye() {
        s(this, Ye), this.yAxis = {
            show: !0,
            showAlways: !1,
            showForNullSeries: !0,
            seriesName: void 0,
            opposite: !1,
            reversed: !1,
            logarithmic: !1,
            logBase: 10,
            tickAmount: void 0,
            forceNiceScale: !1,
            max: void 0,
            min: void 0,
            floating: !1,
            decimalsInFloat: void 0,
            labels: {
                show: !0,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                align: void 0,
                rotate: 0,
                padding: 20,
                style: {colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: ""},
                formatter: void 0
            },
            axisBorder: {show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0},
            axisTicks: {show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0},
            title: {
                text: void 0,
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: ""}
            },
            tooltip: {enabled: !1, offsetX: 0},
            crosshairs: {show: !0, position: "front", stroke: {color: "#b6b6b6", width: 1, dashArray: 0}}
        }, this.pointAnnotation = {
            x: 0,
            y: null,
            yAxisIndex: 0,
            seriesIndex: 0,
            marker: {
                size: 4,
                fillColor: "#fff",
                strokeWidth: 2,
                strokeColor: "#333",
                shape: "circle",
                offsetX: 0,
                offsetY: 0,
                radius: 2,
                cssClass: ""
            },
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: void 0,
                textAnchor: "middle",
                offsetX: 0,
                offsetY: 0,
                style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: {left: 5, right: 5, top: 2, bottom: 2}
                }
            },
            customSVG: {SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0},
            image: {path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0}
        }, this.yAxisAnnotation = {
            y: 0,
            y2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: .3,
            offsetX: 0,
            offsetY: 0,
            width: "100%",
            yAxisIndex: 0,
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: void 0,
                textAnchor: "end",
                position: "right",
                offsetX: 0,
                offsetY: -3,
                style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: {left: 5, right: 5, top: 2, bottom: 2}
                }
            }
        }, this.xAxisAnnotation = {
            x: 0,
            x2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: .3,
            offsetX: 0,
            offsetY: 0,
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: void 0,
                textAnchor: "middle",
                orientation: "vertical",
                position: "top",
                offsetX: 0,
                offsetY: 0,
                style: {
                    background: "#fff",
                    color: void 0,
                    fontSize: "11px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    cssClass: "",
                    padding: {left: 5, right: 5, top: 2, bottom: 2}
                }
            }
        }, this.text = {
            x: 0,
            y: 0,
            text: "",
            textAnchor: "start",
            foreColor: void 0,
            fontSize: "13px",
            fontFamily: void 0,
            fontWeight: 400,
            appendTo: ".apexcharts-annotations",
            backgroundColor: "transparent",
            borderColor: "#c2c2c2",
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2
        }
    }

    function Fe(t, e, i, a) {
        this.xoffset = t, this.yoffset = e, this.height = a, this.width = i, this.shortestEdge = function () {
            return Math.min(this.height, this.width)
        }, this.getCoordinates = function (t) {
            var e, i = [], a = this.xoffset, s = this.yoffset, o = Ne(t) / this.height, r = Ne(t) / this.width;
            if (this.width >= this.height) for (e = 0; e < t.length; e++) i.push([a, s, a + o, s + t[e] / o]), s += t[e] / o; else for (e = 0; e < t.length; e++) i.push([a, s, a + t[e] / r, s + r]), a += t[e] / r;
            return i
        }, this.cutArea = function (t) {
            var e, i;
            return this.width >= this.height ? (e = t / this.height, i = this.width - e, new Fe(this.xoffset + e, this.yoffset, i, this.height)) : (i = t / this.width, t = this.height - i, new Fe(this.xoffset, this.yoffset + i, this.width, t))
        }
    }

    function Re(t, s, o, e, i) {
        return e = void 0 === e ? 0 : e, i = void 0 === i ? 0 : i, function (t) {
            for (var e, i = [], a = 0; a < t.length; a++) for (e = 0; e < t[a].length; e++) i.push(t[a][e]);
            return i
        }(function t(e, i, a, s) {
            var o, r;
            if (0 !== e.length) return o = a.shortestEdge(), function (t, e, i) {
                var a;
                if (0 === t.length) return 1;
                (a = t.slice()).push(e);
                t = He(t, i), i = He(a, i);
                return i <= t
            }(i, r = e[0], o) ? (i.push(r), t(e.slice(1), i, a, s)) : (r = a.cutArea(Ne(i), s), s.push(a.getCoordinates(i)), t(e, [], r, s)), s;
            s.push(a.getCoordinates(i))
        }(function (t) {
            for (var e = [], i = s * o / Ne(t), a = 0; a < t.length; a++) e[a] = t[a] * i;
            return e
        }(t), [], new Fe(e, i, s, o), []))
    }

    function He(t, e) {
        var i = Math.min.apply(Math, t), a = Math.max.apply(Math, t), t = Ne(t);
        return Math.max(Math.pow(e, 2) * a / Math.pow(t, 2), Math.pow(t, 2) / (Math.pow(e, 2) * i))
    }

    function De(t) {
        return t && t.constructor === Array
    }

    function Ne(t) {
        for (var e = 0, i = 0; i < t.length; i++) e += t[i];
        return e
    }

    window.TreemapSquared = {}, window.TreemapSquared.generate = function t(e, i, a, s, o) {
        s = void 0 === s ? 0 : s, o = void 0 === o ? 0 : o;
        var r, n, l = [], h = [];
        if (De(e[0])) {
            for (n = 0; n < e.length; n++) l[n] = function t(e) {
                var i, a = 0;
                if (De(e[0])) for (i = 0; i < e.length; i++) a += t(e[i]); else a = Ne(e);
                return a
            }(e[n]);
            for (r = Re(l, i, a, s, o), n = 0; n < e.length; n++) h.push(t(e[n], r[n][2] - r[n][0], r[n][3] - r[n][1], r[n][0], r[n][1]))
        } else h = Re(e, i, a, s, o);
        return h
    };
    var Oe, We, Be = (o(Ze, [{
        key: "draw", value: function (p) {
            var f = this, x = this.w, b = new I(this.ctx), m = new F(this.ctx),
                i = b.group({class: "apexcharts-treemap"});
            if (x.globals.noData) return i;
            var e = [];
            return p.forEach(function (t) {
                t = t.map(function (t) {
                    return Math.abs(t)
                });
                e.push(t)
            }), this.negRange = this.helpers.checkColorRange(), x.config.series.forEach(function (t, e) {
                t.data.forEach(function (t) {
                    Array.isArray(f.labels[e]) || (f.labels[e] = []), f.labels[e].push(t.x)
                })
            }), window.TreemapSquared.generate(e, x.globals.gridWidth, x.globals.gridHeight).forEach(function (t, g) {
                var u = b.group({
                    class: "apexcharts-series apexcharts-treemap-series",
                    seriesName: T.escapeString(x.globals.seriesNames[g]),
                    rel: g + 1,
                    "data:realIndex": g
                });
                x.config.chart.dropShadow.enabled && (e = x.config.chart.dropShadow, new C(f.ctx).dropShadow(i, e, g));
                var e = b.group({class: "apexcharts-data-labels"});
                t.forEach(function (t, e) {
                    var i = t[0], a = t[1], s = t[2], o = t[3],
                        r = b.drawRect(i, a, s - i, o - a, 0, "#fff", 1, f.strokeWidth, x.config.plotOptions.treemap.useFillColorAsStroke ? l : x.globals.stroke.colors[g]);
                    r.attr({cx: i, cy: a, index: g, i: g, j: e, width: s - i, height: o - a});
                    var n = f.helpers.getShadeColor(x.config.chart.type, g, e, f.negRange), l = n.color;
                    void 0 !== x.config.series[g].data[e] && x.config.series[g].data[e].fillColor && (l = x.config.series[g].data[e].fillColor);
                    var h = m.fillPath({color: l, seriesNumber: g, dataPointIndex: e});
                    r.node.classList.add("apexcharts-treemap-rect"), r.attr({fill: h}), f.helpers.addListeners(r);
                    var c = {x: i + (s - i) / 2, y: a + (o - a) / 2, width: 0, height: 0},
                        l = {x: i, y: a, width: s - i, height: o - a};
                    x.config.chart.animations.enabled && !x.globals.dataChanged && (h = 1, x.globals.resized || (h = x.config.chart.animations.speed), f.animateTreemap(r, c, l, h)), x.globals.dataChanged && (d = 1, f.dynamicAnim.enabled && x.globals.shouldAnimate && (d = f.dynamicAnim.speed, x.globals.previousPaths[g] && x.globals.previousPaths[g][e] && x.globals.previousPaths[g][e].rect && (c = x.globals.previousPaths[g][e].rect), f.animateTreemap(r, c, l, d)));
                    var d = f.getFontSize(t), t = x.config.dataLabels.formatter(f.labels[g][e], {
                        value: x.globals.series[g][e],
                        seriesIndex: g,
                        dataPointIndex: e,
                        w: x
                    }), d = f.helpers.calculateDataLabels({
                        text: t,
                        x: (i + s) / 2,
                        y: (a + o) / 2 + f.strokeWidth / 2 + d / 3,
                        i: g,
                        j: e,
                        colorProps: n,
                        fontSize: d,
                        series: p
                    });
                    x.config.dataLabels.enabled && d && f.rotateToFitLabel(d, t, i, a, s, o), u.add(r), null !== d && u.add(d)
                }), u.add(e), i.add(u)
            }), i
        }
    }, {
        key: "getFontSize", value: function (t) {
            var e = this.w, i = function t(e) {
                var i, a = 0;
                if (Array.isArray(e[0])) for (i = 0; i < e.length; i++) a += t(e[i]); else for (i = 0; i < e.length; i++) a += e[i].length;
                return a
            }(this.labels) / function t(e) {
                var i, a = 0;
                if (Array.isArray(e[0])) for (i = 0; i < e.length; i++) a += t(e[i]); else for (i = 0; i < e.length; i++) a += 1;
                return a
            }(this.labels), a = t[2] - t[0], t = t[3] - t[1], t = Math.pow(a * t, .5);
            return Math.min(t / i, parseInt(e.config.dataLabels.style.fontSize, 10))
        }
    }, {
        key: "rotateToFitLabel", value: function (t, e, i, a, s, o) {
            var r = new I(this.ctx), e = r.getTextRects(e);
            e.width + 5 > s - i && e.width <= o - a && (r = r.rotateAroundCenter(t.node), t.node.setAttribute("transform", "rotate(-90 ".concat(r.x, " ").concat(r.y, ")")))
        }
    }, {
        key: "animateTreemap", value: function (t, e, i, a) {
            var s = new S(this.ctx);
            s.animateRect(t, {x: e.x, y: e.y, width: e.width, height: e.height}, {
                x: i.x,
                y: i.y,
                width: i.width,
                height: i.height
            }, a, function () {
                s.animationCompleted(t)
            })
        }
    }]), Ze), Ve = (o(qe, [{
        key: "calculateTimeScaleTicks", value: function (t, e) {
            var r = this, n = this.w;
            if (n.globals.allSeriesCollapsed) return n.globals.labels = [], n.globals.timescaleLabels = [], [];
            var i = new V(this.ctx), a = (e - t) / 864e5;
            this.determineInterval(a), n.globals.disableZoomIn = !1, n.globals.disableZoomOut = !1, a < .00011574074074074075 ? n.globals.disableZoomIn = !0 : 5e4 < a && (n.globals.disableZoomOut = !0);
            var s = i.getTimeUnitsfromTimestamp(t, e, this.utc), o = n.globals.gridWidth / a, l = o / 24, h = l / 60,
                c = h / 60, d = Math.floor(24 * a), g = Math.floor(1440 * a), i = Math.floor(86400 * a),
                t = Math.floor(a), e = Math.floor(a / 30), a = Math.floor(a / 365), s = {
                    minMillisecond: s.minMillisecond,
                    minSecond: s.minSecond,
                    minMinute: s.minMinute,
                    minHour: s.minHour,
                    minDate: s.minDate,
                    minMonth: s.minMonth,
                    minYear: s.minYear
                }, u = {
                    firstVal: s,
                    currentMillisecond: s.minMillisecond,
                    currentSecond: s.minSecond,
                    currentMinute: s.minMinute,
                    currentHour: s.minHour,
                    currentMonthDate: s.minDate,
                    currentDate: s.minDate,
                    currentMonth: s.minMonth,
                    currentYear: s.minYear,
                    daysWidthOnXAxis: o,
                    hoursWidthOnXAxis: l,
                    minutesWidthOnXAxis: h,
                    secondsWidthOnXAxis: c,
                    numberOfSeconds: i,
                    numberOfMinutes: g,
                    numberOfHours: d,
                    numberOfDays: t,
                    numberOfMonths: e,
                    numberOfYears: a
                };
            switch (this.tickInterval) {
                case"years":
                    this.generateYearScale(u);
                    break;
                case"months":
                case"half_year":
                    this.generateMonthScale(u);
                    break;
                case"months_days":
                case"months_fortnight":
                case"days":
                case"week_days":
                    this.generateDayScale(u);
                    break;
                case"hours":
                    this.generateHourScale(u);
                    break;
                case"minutes_fives":
                case"minutes":
                    this.generateMinuteScale(u);
                    break;
                case"seconds_tens":
                case"seconds_fives":
                case"seconds":
                    this.generateSecondScale(u)
            }
            var p = this.timeScaleArray.map(function (t) {
                var e = {
                    position: t.position,
                    unit: t.unit,
                    year: t.year,
                    day: t.day || 1,
                    hour: t.hour || 0,
                    month: t.month + 1
                };
                return "month" === t.unit ? M(M({}, e), {}, {
                    day: 1,
                    value: t.value + 1
                }) : "day" === t.unit || "hour" === t.unit ? M(M({}, e), {}, {value: t.value}) : "minute" === t.unit ? M(M({}, e), {}, {
                    value: t.value,
                    minute: t.value
                }) : "second" === t.unit ? M(M({}, e), {}, {value: t.value, minute: t.minute, second: t.second}) : t
            });
            return p.filter(function (t) {
                var e = 1, i = Math.ceil(n.globals.gridWidth / 120), a = t.value;
                void 0 !== n.config.xaxis.tickAmount && (i = n.config.xaxis.tickAmount), p.length > i && (e = Math.floor(p.length / i));
                var s = !1, o = !1;
                switch (r.tickInterval) {
                    case"years":
                        "year" === t.unit && (s = !0);
                        break;
                    case"half_year":
                        e = 7, "year" === t.unit && (s = !0);
                        break;
                    case"months":
                        e = 1, "year" === t.unit && (s = !0);
                        break;
                    case"months_fortnight":
                        e = 15, "year" !== t.unit && "month" !== t.unit || (s = !0), 30 === a && (o = !0);
                        break;
                    case"months_days":
                        e = 10, "month" === t.unit && (s = !0), 30 === a && (o = !0);
                        break;
                    case"week_days":
                        e = 8, "month" === t.unit && (s = !0);
                        break;
                    case"days":
                        e = 1, "month" === t.unit && (s = !0);
                        break;
                    case"hours":
                        "day" === t.unit && (s = !0);
                        break;
                    case"minutes_fives":
                        a % 5 != 0 && (o = !0);
                        break;
                    case"seconds_tens":
                        a % 10 != 0 && (o = !0);
                        break;
                    case"seconds_fives":
                        a % 5 != 0 && (o = !0)
                }
                if ("hours" === r.tickInterval || "minutes_fives" === r.tickInterval || "seconds_tens" === r.tickInterval || "seconds_fives" === r.tickInterval) {
                    if (!o) return !0
                } else if ((a % e == 0 || s) && !o) return !0
            })
        }
    }, {
        key: "recalcDimensionsBasedOnFormat", value: function (t, e) {
            var i = this.w, t = this.formatDates(t), t = this.removeOverlappingTS(t);
            i.globals.timescaleLabels = t.slice(), new pt(this.ctx).plotCoords()
        }
    }, {
        key: "determineInterval", value: function (t) {
            var e = 24 * t, i = 60 * e;
            switch (!0) {
                case 5 < t / 365:
                    this.tickInterval = "years";
                    break;
                case 800 < t:
                    this.tickInterval = "half_year";
                    break;
                case 180 < t:
                    this.tickInterval = "months";
                    break;
                case 90 < t:
                    this.tickInterval = "months_fortnight";
                    break;
                case 60 < t:
                    this.tickInterval = "months_days";
                    break;
                case 30 < t:
                    this.tickInterval = "week_days";
                    break;
                case 2 < t:
                    this.tickInterval = "days";
                    break;
                case 2.4 < e:
                    this.tickInterval = "hours";
                    break;
                case 15 < i:
                    this.tickInterval = "minutes_fives";
                    break;
                case 5 < i:
                    this.tickInterval = "minutes";
                    break;
                case 1 < i:
                    this.tickInterval = "seconds_tens";
                    break;
                case 20 < 60 * i:
                    this.tickInterval = "seconds_fives";
                    break;
                default:
                    this.tickInterval = "seconds"
            }
        }
    }, {
        key: "generateYearScale", value: function (t) {
            var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.daysWidthOnXAxis, o = t.numberOfYears,
                r = e.minYear, n = 0, l = new V(this.ctx);
            1 < e.minDate || 0 < e.minMonth ? (t = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate), n = (l.determineDaysOfYear(e.minYear) - t + 1) * s, r = e.minYear + 1, this.timeScaleArray.push({
                position: n,
                value: r,
                unit: "year",
                year: r,
                month: T.monthMod(i + 1)
            })) : 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
                position: n,
                value: r,
                unit: "year",
                year: a,
                month: T.monthMod(i + 1)
            });
            for (var h = r, c = n, d = 0; d < o; d++) c = l.determineDaysOfYear(++h - 1) * s + c, this.timeScaleArray.push({
                position: c,
                value: h,
                unit: "year",
                year: h,
                month: 1
            })
        }
    }, {
        key: "generateMonthScale", value: function (t) {
            var e = t.firstVal, i = t.currentMonthDate, a = t.currentMonth, s = t.currentYear, o = t.daysWidthOnXAxis,
                r = t.numberOfMonths, n = a, l = 0, h = new V(this.ctx), c = "month", d = 0;
            1 < e.minDate ? (l = (h.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * o, n = T.monthMod(a + 1), t = s + d, e = T.monthMod(n), 0 === (i = n) && (c = "year", i = t, t += d += e = 1), this.timeScaleArray.push({
                position: l,
                value: i,
                unit: c,
                year: t,
                month: e
            })) : this.timeScaleArray.push({position: l, value: n, unit: c, year: s, month: T.monthMod(a)});
            for (var g = n + 1, u = l, p = 0; p < r; p++, 0) {
                0 === (g = T.monthMod(g)) ? (c = "year", d += 1) : c = "month";
                var f = this._getYear(s, g, d), u = h.determineDaysOfMonths(g, f) * o + u;
                this.timeScaleArray.push({
                    position: u,
                    value: 0 === g ? f : g,
                    unit: c,
                    year: f,
                    month: 0 === g ? 1 : g
                }), g++
            }
        }
    }, {
        key: "generateDayScale", value: function (t) {
            function e(t, e, i) {
                return t > n.determineDaysOfMonths(e + 1, i) && (l = "month", d = e += c = 1), e
            }

            var i = t.firstVal, a = t.currentMonth, s = t.currentYear, o = t.hoursWidthOnXAxis, r = t.numberOfDays,
                n = new V(this.ctx), l = "day", h = i.minDate + 1, c = h, t = (24 - i.minHour) * o, d = h,
                g = e(c, a, s);
            0 === i.minHour && 1 === i.minDate ? (t = 0, d = T.monthMod(i.minMonth), l = "month", c = i.minDate, r++) : 1 !== i.minDate && 0 === i.minHour && 0 === i.minMinute && (t = 0, h = i.minDate, g = e(c = d = h, a, s)), this.timeScaleArray.push({
                position: t,
                value: d,
                unit: l,
                year: this._getYear(s, g, 0),
                month: T.monthMod(g),
                day: c
            });
            for (var u = t, p = 0; p < r; p++) {
                var l = "day", g = e(c += 1, g, this._getYear(s, g, 0)), f = this._getYear(s, g, 0), u = 24 * o + u,
                    x = 1 === c ? T.monthMod(g) : c;
                this.timeScaleArray.push({position: u, value: x, unit: l, year: f, month: T.monthMod(g), day: x})
            }
        }
    }, {
        key: "generateHourScale", value: function (t) {
            function e(t, e) {
                return t > l.determineDaysOfMonths(e + 1, o) ? e + 1 : e
            }

            var i = t.firstVal, a = t.currentDate, s = t.currentMonth, o = t.currentYear, r = t.minutesWidthOnXAxis,
                n = t.numberOfHours, l = new V(this.ctx), h = "hour", c = 60 - (i.minMinute + i.minSecond / 60),
                d = c * r, t = i.minHour + 1, g = t + 1;
            60 == c && (d = 0, g = (t = i.minHour) + 1);
            var u = a, p = e(u, s);
            this.timeScaleArray.push({position: d, value: t, unit: h, day: u, hour: g, year: o, month: T.monthMod(p)});
            for (var f, x, b = d, m = 0; m < n; m++) {
                h = "hour", 24 <= g && (g = 0, h = "day", f = u += 1, x = p, f > l.determineDaysOfMonths(x + 1, o) && (x += u = 1), p = e(u, p = x));
                var v = this._getYear(o, p, 0), b = 0 === g && 0 === m ? c * r : 60 * r + b, y = 0 === g ? u : g;
                this.timeScaleArray.push({
                    position: b,
                    value: y,
                    unit: h,
                    hour: g,
                    day: u,
                    year: v,
                    month: T.monthMod(p)
                }), g++
            }
        }
    }, {
        key: "generateMinuteScale", value: function (t) {
            for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, o = t.currentDate, r = t.currentMonth, n = t.currentYear, l = t.minutesWidthOnXAxis, h = t.secondsWidthOnXAxis, c = t.numberOfMinutes, d = a + 1, g = o, u = r, p = n, f = s, x = (60 - i - e / 1e3) * h, b = 0; b < c; b++) 60 <= d && (d = 0, 24 === (f += 1) && (f = 0)), this.timeScaleArray.push({
                position: x,
                value: d,
                unit: "minute",
                hour: f,
                minute: d,
                day: g,
                year: this._getYear(p, u, 0),
                month: T.monthMod(u)
            }), x += l, d++
        }
    }, {
        key: "generateSecondScale", value: function (t) {
            for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, o = t.currentDate, r = t.currentMonth, n = t.currentYear, l = t.secondsWidthOnXAxis, h = t.numberOfSeconds, c = i + 1, d = a, g = o, u = r, p = n, f = s, x = (1e3 - e) / 1e3 * l, b = 0; b < h; b++) 60 <= c && (c = 0, 60 <= ++d && (d = 0, 24 == ++f && (f = 0))), this.timeScaleArray.push({
                position: x,
                value: c,
                unit: "second",
                hour: f,
                minute: d,
                second: c,
                day: g,
                year: this._getYear(p, u, 0),
                month: T.monthMod(u)
            }), x += l, c++
        }
    }, {
        key: "createRawDateString", value: function (t, e) {
            var i = t.year;
            return 0 === t.month && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day || "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour || "0")).slice(-2), "minute" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), "second" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i
        }
    }, {
        key: "formatDates", value: function (t) {
            var n = this, l = this.w;
            return t.map(function (t) {
                var e, i, a = t.value.toString(), s = new V(n.ctx), o = n.createRawDateString(t, a),
                    r = s.getDate(s.parseDate(o));
                return n.utc || (r = s.getDate(s.parseDateWithTimezone(o))), a = void 0 === l.config.xaxis.labels.format ? (e = "dd MMM", i = l.config.xaxis.labels.datetimeFormatter, "year" === t.unit && (e = i.year), "month" === t.unit && (e = i.month), "day" === t.unit && (e = i.day), "hour" === t.unit && (e = i.hour), "minute" === t.unit && (e = i.minute), "second" === t.unit && (e = i.second), s.formatDate(r, e)) : s.formatDate(r, l.config.xaxis.labels.format), {
                    dateString: o,
                    position: t.position,
                    value: a,
                    unit: t.unit,
                    year: t.year,
                    month: t.month
                }
            })
        }
    }, {
        key: "removeOverlappingTS", value: function (s) {
            var o, r = this, n = new I(this.ctx), l = !1;
            0 < s.length && s[0].value && s.every(function (t) {
                return t.value.length === s[0].value.length
            }) && (l = !0, o = n.getTextRects(s[0].value).width);
            var h = 0, t = s.map(function (t, e) {
                if (0 < e && r.w.config.xaxis.labels.hideOverlappingLabels) {
                    var i = l ? o : n.getTextRects(s[h].value).width, a = s[h].position;
                    return t.position > a + i + 10 ? (h = e, t) : null
                }
                return t
            });
            return t.filter(function (t) {
                return null !== t
            })
        }
    }, {
        key: "_getYear", value: function (t, e, i) {
            return t + Math.floor(e / 12) + i
        }
    }]), qe), Ge = (o(Ue, [{
        key: "setupElements", value: function () {
            var t = this.w.globals, e = this.w.config, i = e.chart.type;
            t.axisCharts = -1 < ["line", "area", "bar", "rangeBar", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i), t.xyCharts = -1 < ["line", "area", "bar", "rangeBar", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i), t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), I.setAttrs(t.dom.elWrap, {
                id: t.chartClass.substring(1),
                class: "apexcharts-canvas " + t.chartClass.substring(1)
            }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
                class: "apexcharts-svg",
                "xmlns:data": "ApexChartsNS",
                transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")")
            }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({class: "apexcharts-inner apexcharts-graphical"}), t.dom.elAnnotations = t.dom.Paper.group().attr({class: "apexcharts-annotations"}), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
        }
    }, {
        key: "plotChartType", value: function (a, t) {
            var s = this.w, o = s.config, r = s.globals, n = {series: [], i: []}, l = {series: [], i: []},
                h = {series: [], i: []}, c = {series: [], i: []}, d = {series: [], i: []}, g = {series: [], i: []},
                u = {series: [], i: []};
            r.series.map(function (t, e) {
                var i = 0;
                void 0 !== a[e].type ? ("column" === a[e].type || "bar" === a[e].type ? (1 < r.series.length && o.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), d.series.push(t), d.i.push(e), i++, s.globals.columnSeries = d.series) : "area" === a[e].type ? (l.series.push(t), l.i.push(e), i++) : "line" === a[e].type ? (n.series.push(t), n.i.push(e), i++) : "scatter" === a[e].type ? (h.series.push(t), h.i.push(e)) : "bubble" === a[e].type ? (c.series.push(t), c.i.push(e), i++) : "candlestick" === a[e].type ? (g.series.push(t), g.i.push(e), i++) : "boxPlot" === a[e].type ? (u.series.push(t), u.i.push(e), i++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"), 1 < i && (r.comboCharts = !0)) : (n.series.push(t), n.i.push(e))
            });
            var e = new Ft(this.ctx, t), i = new Pt(this.ctx, t);
            this.ctx.pie = new zt(this.ctx);
            var p = new Et(this.ctx);
            this.ctx.rangeBar = new G(this.ctx, t);
            var f, x, b = new Xt(this.ctx), m = [];
            if (r.comboCharts) 0 < l.series.length && m.push(e.draw(l.series, "area", l.i)), 0 < d.series.length && (s.config.chart.stacked ? (f = new Lt(this.ctx, t), m.push(f.draw(d.series, d.i))) : (this.ctx.bar = new B(this.ctx, t), m.push(this.ctx.bar.draw(d.series, d.i)))), 0 < n.series.length && m.push(e.draw(n.series, "line", n.i)), 0 < g.series.length && m.push(i.draw(g.series, g.i)), 0 < u.series.length && m.push(i.draw(u.series, u.i)), 0 < h.series.length && (x = new Ft(this.ctx, t, !0), m.push(x.draw(h.series, "scatter", h.i))), 0 < c.series.length && (x = new Ft(this.ctx, t, !0), m.push(x.draw(c.series, "bubble", c.i))); else switch (o.chart.type) {
                case"line":
                    m = e.draw(r.series, "line");
                    break;
                case"area":
                    m = e.draw(r.series, "area");
                    break;
                case"bar":
                    m = o.chart.stacked ? new Lt(this.ctx, t).draw(r.series) : (this.ctx.bar = new B(this.ctx, t), this.ctx.bar.draw(r.series));
                    break;
                case"candlestick":
                case"boxPlot":
                    m = new Pt(this.ctx, t).draw(r.series);
                    break;
                case"rangeBar":
                    m = this.ctx.rangeBar.draw(r.series);
                    break;
                case"heatmap":
                    m = new Tt(this.ctx, t).draw(r.series);
                    break;
                case"treemap":
                    m = new Be(this.ctx, t).draw(r.series);
                    break;
                case"pie":
                case"donut":
                case"polarArea":
                    m = this.ctx.pie.draw(r.series);
                    break;
                case"radialBar":
                    m = p.draw(r.series);
                    break;
                case"radar":
                    m = b.draw(r.series);
                    break;
                default:
                    m = e.draw(r.series)
            }
            return m
        }
    }, {
        key: "setSVGDimensions", value: function () {
            var t = this.w.globals, e = this.w.config;
            t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
            var i = T.getDimensions(this.el), a = e.chart.width.toString().split(/[0-9]+/g).pop();
            "%" === a ? T.isNumber(i[0]) && (0 === i[0].width && (i = T.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== a && "" !== a || (t.svgWidth = parseInt(e.chart.width, 10));
            i = e.chart.height.toString().split(/[0-9]+/g).pop();
            "auto" !== t.svgHeight && "" !== t.svgHeight ? "%" === i ? (a = T.getDimensions(this.el.parentNode), t.svgHeight = a[1] * parseInt(e.chart.height, 10) / 100) : t.svgHeight = parseInt(e.chart.height, 10) : t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2, t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), I.setAttrs(t.dom.Paper.node, {
                width: t.svgWidth,
                height: t.svgHeight
            }), "%" !== i && (e = !e.chart.sparkline.enabled && t.axisCharts ? e.chart.parentHeightOffset : 0, t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + e + "px"), t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
        }
    }, {
        key: "shiftGraphPosition", value: function () {
            var t = this.w.globals, e = t.translateY, e = {transform: "translate(" + t.translateX + ", " + e + ")"};
            I.setAttrs(t.dom.elGraphical.node, e)
        }
    }, {
        key: "resizeNonAxisCharts", value: function () {
            var t = this.w, e = t.globals, i = 0, a = t.config.chart.sparkline.enabled ? 1 : 15;
            a += t.config.grid.padding.bottom, "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || !t.config.legend.show || t.config.legend.floating || (i = new xt(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
            var s = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),
                o = 2.05 * t.globals.radialSize;
            s && !t.config.chart.sparkline.enabled && 0 !== t.config.plotOptions.radialBar.startAngle && (o = (s = T.getBoundingClientRect(s)).bottom, s = s.bottom - s.top, o = Math.max(2.05 * t.globals.radialSize, s));
            a = o + e.translateY + i + a;
            e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", a), e.dom.elWrap.style.height = a + "px", I.setAttrs(e.dom.Paper.node, {height: a}), e.dom.Paper.node.parentNode.parentNode.style.minHeight = a + "px"
        }
    }, {
        key: "coreCalculations", value: function () {
            new it(this.ctx).init()
        }
    }, {
        key: "resetGlobals", value: function () {
            function t() {
                return e.w.config.series.map(function (t) {
                    return []
                })
            }

            var e = this, i = new U, a = this.w.globals;
            i.initGlobalVars(a), a.seriesXvalues = t(), a.seriesYvalues = t()
        }
    }, {
        key: "isMultipleY", value: function () {
            if (this.w.config.yaxis.constructor === Array && 1 < this.w.config.yaxis.length) return this.w.globals.isMultipleYAxis = !0
        }
    }, {
        key: "xySettings", value: function () {
            var t, e = null, i = this.w;
            return i.globals.axisCharts && ("back" === i.config.xaxis.crosshairs.position && new rt(this.ctx).drawXCrosshairs(), "back" === i.config.yaxis[0].crosshairs.position && new rt(this.ctx).drawYCrosshairs(), "datetime" === i.config.xaxis.type && void 0 === i.config.xaxis.labels.formatter && (this.ctx.timeScale = new Ve(this.ctx), t = [], isFinite(i.globals.minX) && isFinite(i.globals.maxX) && !i.globals.isBarHorizontal ? t = this.ctx.timeScale.calculateTimeScaleTicks(i.globals.minX, i.globals.maxX) : i.globals.isBarHorizontal && (t = this.ctx.timeScale.calculateTimeScaleTicks(i.globals.minY, i.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(t)), e = new P(this.ctx).getCalculatedRatios()), e
        }
    }, {
        key: "updateSourceChart", value: function (t) {
            this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({
                chart: {
                    selection: {
                        xaxis: {
                            min: t.w.globals.minX,
                            max: t.w.globals.maxX
                        }
                    }
                }
            }, !1, !1)
        }
    }, {
        key: "setupBrushHandler", value: function () {
            var i, a = this, o = this.w;
            o.config.chart.brush.enabled && "function" != typeof o.config.chart.events.selection && ((i = o.config.chart.brush.targets || [o.config.chart.brush.target]).forEach(function (t) {
                var e = ApexCharts.getChartByID(t);
                e.w.globals.brushSource = a.ctx, "function" != typeof e.w.config.chart.events.zoomed && (e.w.config.chart.events.zoomed = function () {
                    a.updateSourceChart(e)
                }), "function" != typeof e.w.config.chart.events.scrolled && (e.w.config.chart.events.scrolled = function () {
                    a.updateSourceChart(e)
                })
            }), o.config.chart.events.selection = function (t, e) {
                i.forEach(function (t) {
                    var a = ApexCharts.getChartByID(t), s = T.clone(o.config.yaxis);
                    o.config.chart.brush.autoScaleYaxis && 1 === a.w.globals.series.length && (s = new et(a).autoScaleY(a, s, e));
                    t = a.w.config.yaxis.reduce(function (t, e, i) {
                        return [].concat(g(t), [M(M({}, a.w.config.yaxis[i]), {}, {min: s[0].min, max: s[0].max})])
                    }, []);
                    a.ctx.updateHelpers._updateOptions({
                        xaxis: {min: e.xaxis.min, max: e.xaxis.max},
                        yaxis: t
                    }, !1, !1, !1, !1)
                })
            })
        }
    }]), Ue), _e = (o(je, [{
        key: "_updateOptions", value: function (o) {
            var r = this, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                l = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                t = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                h = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
            return new Promise(function (a) {
                var s = [r.ctx];
                t && (s = r.ctx.getSyncedCharts()), r.ctx.w.globals.isExecCalled && (s = [r.ctx], r.ctx.w.globals.isExecCalled = !1), s.forEach(function (t, e) {
                    var i = t.w;
                    return i.globals.shouldAnimate = l, n || (i.globals.resized = !0, i.globals.dataChanged = !0, l && t.series.getPreviousPaths()), o && "object" === v(o) && (t.config = new j(o), o = P.extendArrayProps(t.config, o, i), t.w.globals.chartID !== r.ctx.w.globals.chartID && delete o.series, i.config = T.extend(i.config, o), h && (i.globals.lastXAxis = o.xaxis ? T.clone(o.xaxis) : [], i.globals.lastYAxis = o.yaxis ? T.clone(o.yaxis) : [], i.globals.initialConfig = T.extend({}, i.config), i.globals.initialSeries = T.clone(i.config.series))), t.update(o).then(function () {
                        e === s.length - 1 && a(t)
                    })
                })
            })
        }
    }, {
        key: "_updateSeries", value: function (a, s) {
            var o = this, r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            return new Promise(function (t) {
                var e, i = o.w;
                return i.globals.shouldAnimate = s, i.globals.dataChanged = !0, s && o.ctx.series.getPreviousPaths(), i.globals.axisCharts ? (0 === (e = a.map(function (t, e) {
                    return o._extendSeries(t, e)
                })).length && (e = [{data: []}]), i.config.series = e) : i.config.series = a.slice(), r && (i.globals.initialSeries = T.clone(i.config.series)), o.ctx.update().then(function () {
                    t(o.ctx)
                })
            })
        }
    }, {
        key: "_extendSeries", value: function (t, e) {
            var i = this.w, a = i.config.series[e];
            return M(M({}, i.config.series[e]), {}, {
                name: t.name || a && a.name,
                color: t.color || a && a.color,
                type: t.type || a && a.type,
                data: t.data || a && a.data
            })
        }
    }, {
        key: "toggleDataPointSelection", value: function (t, e) {
            var i = this.w, a = null, s = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
            return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "'], ").concat(s, " circle[j='").concat(e, "'], ").concat(s, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "']")).members[0], "pie" !== i.config.chart.type && "polarArea" !== i.config.chart.type && "donut" !== i.config.chart.type || this.ctx.pie.pieClicked(t)), a ? (new I(this.ctx).pathMouseDown(a, null), a.node || null) : (console.warn("toggleDataPointSelection: Element not found"), null)
        }
    }, {
        key: "forceXAxisUpdate", value: function (e) {
            var t, i = this.w;
            return ["min", "max"].forEach(function (t) {
                void 0 !== e.xaxis[t] && (i.config.xaxis[t] = e.xaxis[t], i.globals.lastXAxis[t] = e.xaxis[t])
            }), e.xaxis.categories && e.xaxis.categories.length && (i.config.xaxis.categories = e.xaxis.categories), i.config.xaxis.convertedCatToNumeric && (t = new _(e), e = t.convertCatToNumericXaxis(e, this.ctx)), e
        }
    }, {
        key: "forceYAxisUpdate", value: function (i) {
            var t = this.w;
            return t.config.chart.stacked && "100%" === t.config.chart.stackType && (Array.isArray(i.yaxis) ? i.yaxis.forEach(function (t, e) {
                i.yaxis[e].min = 0, i.yaxis[e].max = 100
            }) : (i.yaxis.min = 0, i.yaxis.max = 100)), i
        }
    }, {
        key: "revertDefaultAxisMinMax", value: function (t) {
            var a = this, s = this.w, e = s.globals.lastXAxis, o = s.globals.lastYAxis;
            t && t.xaxis && (e = t.xaxis), t && t.yaxis && (o = t.yaxis), s.config.xaxis.min = e.min, s.config.xaxis.max = e.max;
            s.config.yaxis.map(function (t, e) {
                var i;
                s.globals.zoomed || void 0 !== o[e] ? void 0 !== o[i = e] && (s.config.yaxis[i].min = o[i].min, s.config.yaxis[i].max = o[i].max) : void 0 !== a.ctx.opts.yaxis[e] && (t.min = a.ctx.opts.yaxis[e].min, t.max = a.ctx.opts.yaxis[e].max)
            })
        }
    }]), je);

    function je(t) {
        s(this, je), this.ctx = t, this.w = t.w
    }

    function Ue(t, e) {
        s(this, Ue), this.ctx = e, this.w = e.w, this.el = t
    }

    function qe(t) {
        s(this, qe), this.ctx = t, this.w = t.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC
    }

    function Ze(t, e) {
        s(this, Ze), this.ctx = t, this.w = t.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Mt(t), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = []
    }

    function $e(t) {
        (this.el = t).remember("_selectHandler", this), this.pointSelection = {isSelected: !1}, this.rectSelection = {isSelected: !1}, this.pointsList = {
            lt: [0, 0],
            rt: ["width", 0],
            rb: ["width", "height"],
            lb: [0, "height"],
            t: ["width", 0],
            r: ["width", "height"],
            b: ["width", "height"],
            l: [0, "height"]
        }, this.pointCoord = function (t, e, i) {
            t = "string" != typeof t ? t : e[t];
            return i ? t / 2 : t
        }, this.pointCoords = function (t, e) {
            var i = this.pointsList[t];
            return {
                x: this.pointCoord(i[0], e, "t" === t || "b" === t),
                y: this.pointCoord(i[1], e, "r" === t || "l" === t)
            }
        }
    }

    function Je(t) {
        switch (t[0]) {
            case"z":
            case"Z":
                t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
                break;
            case"H":
                t[0] = "L", t[2] = this.pos[1];
                break;
            case"V":
                t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
                break;
            case"T":
                t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
                break;
            case"S":
                t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
        }
        return t
    }

    function Qe(t) {
        var e = t.length;
        return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
    }

    function Ke(t) {
        var e = [t];
        switch (t[0]) {
            case"M":
                return this.pos = this.start = [t[1], t[2]], e;
            case"L":
                t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
                break;
            case"Q":
                t[6] = t[4], t[5] = t[3], t[4] = +t[4] / 3 + 2 * t[2] / 3, t[3] = +t[3] / 3 + 2 * t[1] / 3, t[2] = +this.pos[1] / 3 + 2 * t[2] / 3, t[1] = +this.pos[0] / 3 + 2 * t[1] / 3;
                break;
            case"A":
                t = (e = function (t, e) {
                    var i, a, s, o, r, n, l, h, c, d, g, u, p, f, x, b, m, v = Math.abs(e[1]), y = Math.abs(e[2]),
                        w = e[3] % 360, k = e[4], A = e[5], S = e[6], C = e[7], L = new SVG.Point(t),
                        P = new SVG.Point(S, C), M = [];
                    if (0 === v || 0 === y || L.x === P.x && L.y === P.y) return [["C", L.x, L.y, P.x, P.y, P.x, P.y]];
                    for (1 < (e = (a = new SVG.Point((L.x - P.x) / 2, (L.y - P.y) / 2).transform((new SVG.Matrix).rotate(w))).x * a.x / (v * v) + a.y * a.y / (y * y)) && (v *= e = Math.sqrt(e), y *= e), i = (new SVG.Matrix).rotate(w).scale(1 / v, 1 / y).rotate(-w), L = L.transform(i), a = (t = [(P = P.transform(i)).x - L.x, P.y - L.y])[0] * t[0] + t[1] * t[1], e = Math.sqrt(a), t[0] /= e, t[1] /= e, a = a < 4 ? Math.sqrt(1 - a / 4) : 0, k === A && (a *= -1), s = new SVG.Point((P.x + L.x) / 2 + a * -t[1], (P.y + L.y) / 2 + a * t[0]), t = new SVG.Point(L.x - s.x, L.y - s.y), L = new SVG.Point(P.x - s.x, P.y - s.y), P = Math.acos(t.x / Math.sqrt(t.x * t.x + t.y * t.y)), t.y < 0 && (P *= -1), t = Math.acos(L.x / Math.sqrt(L.x * L.x + L.y * L.y)), L.y < 0 && (t *= -1), A && t < P && (t += 2 * Math.PI), !A && P < t && (t -= 2 * Math.PI), l = [], o = (t - (h = P)) / (r = Math.ceil(2 * Math.abs(P - t) / Math.PI)), n = 4 * Math.tan(o / 4) / 3, u = 0; u <= r; u++) d = Math.cos(h), c = Math.sin(h), g = new SVG.Point(s.x + d, s.y + c), l[u] = [new SVG.Point(g.x + n * c, g.y - n * d), g, new SVG.Point(g.x - n * c, g.y + n * d)], h += o;
                    for (l[0][0] = l[0][1].clone(), l[l.length - 1][2] = l[l.length - 1][1].clone(), i = (new SVG.Matrix).rotate(w).scale(v, y).rotate(-w), u = 0, p = l.length; u < p; u++) l[u][0] = l[u][0].transform(i), l[u][1] = l[u][1].transform(i), l[u][2] = l[u][2].transform(i);
                    for (u = 1, p = l.length; u < p; u++) f = (g = l[u - 1][2]).x, x = g.y, b = (g = l[u][0]).x, m = g.y, S = (g = l[u][1]).x, C = g.y, M.push(["C", f, x, b, m, S, C]);
                    return M
                }(this.pos, t))[0]
        }
        return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
    }

    function ti(t, e) {
        if (!1 === e) return !1;
        for (var i = e, a = t.length; i < a; ++i) if ("M" == t[i][0]) return i;
        return !1
    }

    Oe = "undefined" != typeof window ? window : void 0, We = function (s, o) {
        var h = (void 0 !== this ? this : s).SVG = function (t) {
            if (h.supported) return t = new h.Doc(t), h.parser.draw || h.prepare(), t
        };
        if (h.ns = "http://www.w3.org/2000/svg", h.xmlns = "http://www.w3.org/2000/xmlns/", h.xlink = "http://www.w3.org/1999/xlink", h.svgjs = "http://svgjs.dev", h.supported = !0, !h.supported) return !1;
        h.did = 1e3, h.eid = function (t) {
            return "Svgjs" + n(t) + h.did++
        }, h.create = function (t) {
            var e = o.createElementNS(this.ns, t);
            return e.setAttribute("id", this.eid(t)), e
        }, h.extend = function () {
            for (var t, e = (t = [].slice.call(arguments)).pop(), i = t.length - 1; 0 <= i; i--) if (t[i]) for (var a in e) t[i].prototype[a] = e[a];
            h.Set && h.Set.inherit && h.Set.inherit()
        }, h.invent = function (t) {
            var e = "function" == typeof t.create ? t.create : function () {
                this.constructor.call(this, h.create(t.create))
            };
            return t.inherit && (e.prototype = new t.inherit), t.extend && h.extend(e, t.extend), t.construct && h.extend(t.parent || h.Container, t.construct), e
        }, h.adopt = function (t) {
            return t ? t.instance || ((e = "svg" == t.nodeName ? new (t.parentNode instanceof s.SVGElement ? h.Nested : h.Doc) : "linearGradient" == t.nodeName ? new h.Gradient("linear") : "radialGradient" == t.nodeName ? new h.Gradient("radial") : h[n(t.nodeName)] ? new h[n(t.nodeName)] : new h.Element(t)).type = t.nodeName, ((e.node = t).instance = e) instanceof h.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), e) : null;
            var e
        }, h.prepare = function () {
            var t = o.getElementsByTagName("body")[0],
                e = (t ? new h.Doc(t) : h.adopt(o.documentElement).nested()).size(2, 0);
            h.parser = {
                body: t || o.documentElement,
                draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                poly: e.polyline().node,
                path: e.path().node,
                native: h.create("svg")
            }
        }, h.parser = {native: h.create("svg")}, o.addEventListener("DOMContentLoaded", function () {
            h.parser.draw || h.prepare()
        }, !1), h.regex = {
            numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
            hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
            rgb: /rgb\((\d+),(\d+),(\d+)\)/,
            reference: /#([a-z0-9\-_]+)/i,
            transforms: /\)\s*,?\s*/,
            whitespace: /\s/g,
            isHex: /^#[a-f0-9]{3,6}$/i,
            isRgb: /^rgb\(/,
            isCss: /[^:]+:[^;]+;?/,
            isBlank: /^(\s+)?$/,
            isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            isPercent: /^-?[\d\.]+%$/,
            isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
            delimiter: /[\s,]+/,
            hyphen: /([^e])\-/gi,
            pathLetters: /[MLHVCSQTAZ]/gi,
            isPathLetter: /[MLHVCSQTAZ]/i,
            numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
            dots: /\./g
        }, h.utils = {
            map: function (t, e) {
                for (var i = t.length, a = [], s = 0; s < i; s++) a.push(e(t[s]));
                return a
            }, filter: function (t, e) {
                for (var i = t.length, a = [], s = 0; s < i; s++) e(t[s]) && a.push(t[s]);
                return a
            }, filterSVGElements: function (t) {
                return this.filter(t, function (t) {
                    return t instanceof s.SVGElement
                })
            }
        }, h.defaults = {
            attrs: {
                "fill-opacity": 1,
                "stroke-opacity": 1,
                "stroke-width": 0,
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                fill: "#000000",
                stroke: "#000000",
                opacity: 1,
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                width: 0,
                height: 0,
                r: 0,
                rx: 0,
                ry: 0,
                offset: 0,
                "stop-opacity": 1,
                "stop-color": "#000000",
                "font-size": 16,
                "font-family": "Helvetica, Arial, sans-serif",
                "text-anchor": "start"
            }
        }, h.Color = function (t) {
            var e, i;
            this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? h.regex.isRgb.test(t) ? (e = h.regex.rgb.exec(t.replace(h.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : h.regex.isHex.test(t) && (e = h.regex.hex.exec(4 == (i = t).length ? ["#", i.substring(1, 2), i.substring(1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === v(t) && (this.r = t.r, this.g = t.g, this.b = t.b))
        }, h.extend(h.Color, {
            toString: function () {
                return this.toHex()
            }, toHex: function () {
                return "#" + d(this.r) + d(this.g) + d(this.b)
            }, toRgb: function () {
                return "rgb(" + [this.r, this.g, this.b].join() + ")"
            }, brightness: function () {
                return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
            }, morph: function (t) {
                return this.destination = new h.Color(t), this
            }, at: function (t) {
                return this.destination ? new h.Color({
                    r: ~~(this.r + (this.destination.r - this.r) * (t = t < 0 ? 0 : 1 < t ? 1 : t)),
                    g: ~~(this.g + (this.destination.g - this.g) * t),
                    b: ~~(this.b + (this.destination.b - this.b) * t)
                }) : this
            }
        }), h.Color.test = function (t) {
            return h.regex.isHex.test(t += "") || h.regex.isRgb.test(t)
        }, h.Color.isRgb = function (t) {
            return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
        }, h.Color.isColor = function (t) {
            return h.Color.isRgb(t) || h.Color.test(t)
        }, h.Array = function (t, e) {
            0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
        }, h.extend(h.Array, {
            toString: function () {
                return this.value.join(" ")
            }, valueOf: function () {
                return this.value
            }, parse: function (t) {
                return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
            }
        }), h.PointArray = function (t, e) {
            h.Array.call(this, t, e || [[0, 0]])
        }, h.PointArray.prototype = new h.Array, h.PointArray.prototype.constructor = h.PointArray;
        for (var l = {
            M: function (t, e, i) {
                return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
            }, L: function (t, e) {
                return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
            }, H: function (t, e) {
                return e.x = t[0], ["H", t[0]]
            }, V: function (t, e) {
                return e.y = t[0], ["V", t[0]]
            }, C: function (t, e) {
                return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
            }, Q: function (t, e) {
                return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
            }, Z: function (t, e, i) {
                return e.x = i.x, e.y = i.y, ["Z"]
            }
        }, t = "mlhvqtcsaz".split(""), e = 0, i = t.length; e < i; ++e) l[t[e]] = function (o) {
            return function (t, e, i) {
                if ("H" == o) t[0] = t[0] + e.x; else if ("V" == o) t[0] = t[0] + e.y; else if ("A" == o) t[5] = t[5] + e.x, t[6] = t[6] + e.y; else for (var a = 0, s = t.length; a < s; ++a) t[a] = t[a] + (a % 2 ? e.y : e.x);
                if (l && "function" == typeof l[o]) return l[o](t, e, i)
            }
        }(t[e].toUpperCase());
        h.PathArray = function (t, e) {
            h.Array.call(this, t, e || [["M", 0, 0]])
        }, h.PathArray.prototype = new h.Array, h.PathArray.prototype.constructor = h.PathArray, h.extend(h.PathArray, {
            toString: function () {
                return function (t) {
                    for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e][0], null != t[e][1] && (a += t[e][1], null != t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4], null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a += t[e][7])))));
                    return a + " "
                }(this.value)
            }, move: function (t, e) {
                var i = this.bbox();
                return i.x, i.y, this
            }, at: function (t) {
                if (!this.destination) return this;
                for (var e = this.value, i = this.destination.value, a = [], s = new h.PathArray, o = 0, r = e.length; o < r; o++) {
                    a[o] = [e[o][0]];
                    for (var n = 1, l = e[o].length; n < l; n++) a[o][n] = e[o][n] + (i[o][n] - e[o][n]) * t;
                    "A" === a[o][0] && (a[o][4] = +(0 != a[o][4]), a[o][5] = +(0 != a[o][5]))
                }
                return s.value = a, s
            }, parse: function (t) {
                if (t instanceof h.PathArray) return t.valueOf();
                var e, i = {M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0};
                t = "string" == typeof t ? t.replace(h.regex.numbersWithDots, c).replace(h.regex.pathLetters, " $& ").replace(h.regex.hyphen, "$1 -").trim().split(h.regex.delimiter) : t.reduce(function (t, e) {
                    return [].concat.call(t, e)
                }, []);
                for (var a = [], s = new h.Point, o = new h.Point, r = 0, n = t.length; h.regex.isPathLetter.test(t[r]) ? (e = t[r], ++r) : "M" == e ? e = "L" : "m" == e && (e = "l"), a.push(l[e].call(null, t.slice(r, r += i[e.toUpperCase()]).map(parseFloat), s, o)), r < n;) ;
                return a
            }, bbox: function () {
                return h.parser.draw || h.prepare(), h.parser.path.setAttribute("d", this.toString()), h.parser.path.getBBox()
            }
        }), h.Number = h.invent({
            create: function (t, e) {
                this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(h.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof h.Number && (this.value = t.valueOf(), this.unit = t.unit)
            }, extend: {
                toString: function () {
                    return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                }, toJSON: function () {
                    return this.toString()
                }, valueOf: function () {
                    return this.value
                }, plus: function (t) {
                    return t = new h.Number(t), new h.Number(this + t, this.unit || t.unit)
                }, minus: function (t) {
                    return t = new h.Number(t), new h.Number(this - t, this.unit || t.unit)
                }, times: function (t) {
                    return t = new h.Number(t), new h.Number(this * t, this.unit || t.unit)
                }, divide: function (t) {
                    return t = new h.Number(t), new h.Number(this / t, this.unit || t.unit)
                }, to: function (t) {
                    var e = new h.Number(this);
                    return "string" == typeof t && (e.unit = t), e
                }, morph: function (t) {
                    return this.destination = new h.Number(t), t.relative && (this.destination.value += this.value), this
                }, at: function (t) {
                    return this.destination ? new h.Number(this.destination).minus(this).times(t).plus(this) : this
                }
            }
        }), h.Element = h.invent({
            create: function (t) {
                this._stroke = h.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, (this.node.instance = this)._stroke = t.getAttribute("stroke") || this._stroke)
            }, extend: {
                x: function (t) {
                    return this.attr("x", t)
                }, y: function (t) {
                    return this.attr("y", t)
                }, cx: function (t) {
                    return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                }, cy: function (t) {
                    return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                }, move: function (t, e) {
                    return this.x(t).y(e)
                }, center: function (t, e) {
                    return this.cx(t).cy(e)
                }, width: function (t) {
                    return this.attr("width", t)
                }, height: function (t) {
                    return this.attr("height", t)
                }, size: function (t, e) {
                    e = g(this, t, e);
                    return this.width(new h.Number(e.width)).height(new h.Number(e.height))
                }, clone: function (t) {
                    this.writeDataToDom();
                    var e = f(this.node.cloneNode(!0));
                    return t ? t.add(e) : this.after(e), e
                }, remove: function () {
                    return this.parent() && this.parent().removeElement(this), this
                }, replace: function (t) {
                    return this.after(t).remove(), t
                }, addTo: function (t) {
                    return t.put(this)
                }, putIn: function (t) {
                    return t.add(this)
                }, id: function (t) {
                    return this.attr("id", t)
                }, show: function () {
                    return this.style("display", "")
                }, hide: function () {
                    return this.style("display", "none")
                }, visible: function () {
                    return "none" != this.style("display")
                }, toString: function () {
                    return this.attr("id")
                }, classes: function () {
                    var t = this.attr("class");
                    return null == t ? [] : t.trim().split(h.regex.delimiter)
                }, hasClass: function (t) {
                    return -1 != this.classes().indexOf(t)
                }, addClass: function (t) {
                    var e;
                    return this.hasClass(t) || ((e = this.classes()).push(t), this.attr("class", e.join(" "))), this
                }, removeClass: function (e) {
                    return this.hasClass(e) && this.attr("class", this.classes().filter(function (t) {
                        return t != e
                    }).join(" ")), this
                }, toggleClass: function (t) {
                    return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                }, reference: function (t) {
                    return h.get(this.attr(t))
                }, parent: function (t) {
                    var e = this;
                    if (!e.node.parentNode) return null;
                    if (e = h.adopt(e.node.parentNode), !t) return e;
                    for (; e && e.node instanceof s.SVGElement;) {
                        if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
                        if (!e.node.parentNode || "#document" == e.node.parentNode.nodeName) return null;
                        e = h.adopt(e.node.parentNode)
                    }
                }, doc: function () {
                    return this instanceof h.Doc ? this : this.parent(h.Doc)
                }, parents: function (t) {
                    for (var e = [], i = this; (i = i.parent(t)) && i.node && (e.push(i), i.parent);) ;
                    return e
                }, matches: function (t) {
                    return ((e = this.node).matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
                    var e
                }, native: function () {
                    return this.node
                }, svg: function (t) {
                    var e = o.createElement("svg");
                    if (!(t && this instanceof h.Parent)) return e.appendChild(t = o.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                    e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                    for (var i = 0, a = e.firstChild.childNodes.length; i < a; i++) this.node.appendChild(e.firstChild.firstChild);
                    return this
                }, writeDataToDom: function () {
                    return (this.each || this.lines) && (this.each ? this : this.lines()).each(function () {
                        this.writeDataToDom()
                    }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
                }, setData: function (t) {
                    return this.dom = t, this
                }, is: function (t) {
                    return this instanceof t
                }
            }
        }), h.easing = {
            "-": function (t) {
                return t
            }, "<>": function (t) {
                return -Math.cos(t * Math.PI) / 2 + .5
            }, ">": function (t) {
                return Math.sin(t * Math.PI / 2)
            }, "<": function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }
        }, h.morph = function (i) {
            return function (t, e) {
                return new h.MorphObj(t, e).at(i)
            }
        }, h.Situation = h.invent({
            create: function (t) {
                this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new h.Number(t.duration).valueOf(), this.delay = new h.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
            }
        }), h.FX = h.invent({
            create: function (t) {
                this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
            }, extend: {
                animate: function (t, e, i) {
                    "object" === v(t) && (e = t.ease, i = t.delay, t = t.duration);
                    e = new h.Situation({duration: t || 1e3, delay: i || 0, ease: h.easing[e || "-"] || e});
                    return this.queue(e), this
                }, target: function (t) {
                    return t && t instanceof h.Element ? (this._target = t, this) : this._target
                }, timeToAbsPos: function (t) {
                    return (t - this.situation.start) / (this.situation.duration / this._speed)
                }, absPosToTime: function (t) {
                    return this.situation.duration / this._speed * t + this.situation.start
                }, startAnimFrame: function () {
                    this.stopAnimFrame(), this.animationFrame = s.requestAnimationFrame(function () {
                        this.step()
                    }.bind(this))
                }, stopAnimFrame: function () {
                    s.cancelAnimationFrame(this.animationFrame)
                }, start: function () {
                    return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
                }, startCurrent: function () {
                    return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
                }, queue: function (t) {
                    return ("function" == typeof t || t instanceof h.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
                }, dequeue: function () {
                    return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof h.Situation ? this.start() : this.situation.call(this)), this
                }, initAnimations: function () {
                    var t, e, i = this.situation;
                    if (i.init) return this;
                    for (e in i.animations) {
                        t = this.target()[e](), Array.isArray(t) || (t = [t]), Array.isArray(i.animations[e]) || (i.animations[e] = [i.animations[e]]);
                        for (var a = t.length; a--;) i.animations[e][a] instanceof h.Number && (t[a] = new h.Number(t[a])), i.animations[e][a] = t[a].morph(i.animations[e][a])
                    }
                    for (e in i.attrs) i.attrs[e] = new h.MorphObj(this.target().attr(e), i.attrs[e]);
                    for (e in i.styles) i.styles[e] = new h.MorphObj(this.target().style(e), i.styles[e]);
                    return i.initialTransformation = this.target().matrixify(), i.init = !0, this
                }, clearQueue: function () {
                    return this.situations = [], this
                }, clearCurrent: function () {
                    return this.situation = null, this
                }, stop: function (t, e) {
                    var i = this.active;
                    return this.active = !1, e && this.clearQueue(), t && this.situation && (i || this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
                }, after: function (i) {
                    var a = this.last();
                    return this.target().on("finished.fx", function t(e) {
                        e.detail.situation == a && (i.call(this, a), this.off("finished.fx", t))
                    }), this._callStart()
                }, during: function (e) {
                    function t(t) {
                        t.detail.situation == i && e.call(this, t.detail.pos, h.morph(t.detail.pos), t.detail.eased, i)
                    }

                    var i = this.last();
                    return this.target().off("during.fx", t).on("during.fx", t), this.after(function () {
                        this.off("during.fx", t)
                    }), this._callStart()
                }, afterAll: function (e) {
                    function i(t) {
                        e.call(this), this.off("allfinished.fx", i)
                    }

                    return this.target().off("allfinished.fx", i).on("allfinished.fx", i), this._callStart()
                }, last: function () {
                    return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
                }, add: function (t, e, i) {
                    return this.last()[i || "animations"][t] = e, this._callStart()
                }, step: function (t) {
                    var e, i;
                    t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), t = Math.floor(e), !0 === this.situation.loops || t < this.situation.loops ? (this.pos = e - t, i = this.situation.loop, this.situation.loop = t) : (this.absPos = this.situation.loops, this.pos = 1, i = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - i) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                    var a, s = this.situation.ease(this.pos);
                    for (a in this.situation.once) a > this.lastPos && a <= s && (this.situation.once[a].call(this.target(), this.pos, s), delete this.situation.once[a]);
                    return this.active && this.target().fire("during", {
                        pos: this.pos,
                        eased: s,
                        fx: this,
                        situation: this.situation
                    }), this.situation && (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                        fx: this,
                        situation: this.situation
                    }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s), this
                }, eachAt: function () {
                    var t, e = this, i = this.target(), a = this.situation;
                    for (t in a.animations) r = [].concat(a.animations[t]).map(function (t) {
                        return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t
                    }), i[t].apply(i, r);
                    for (t in a.attrs) r = [t].concat(a.attrs[t]).map(function (t) {
                        return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t
                    }), i.attr.apply(i, r);
                    for (t in a.styles) r = [t].concat(a.styles[t]).map(function (t) {
                        return "string" != typeof t && t.at ? t.at(a.ease(e.pos), e.pos) : t
                    }), i.style.apply(i, r);
                    if (a.transforms.length) {
                        r = a.initialTransformation, t = 0;
                        for (var s = a.transforms.length; t < s; t++) var o = a.transforms[t], r = o instanceof h.Matrix ? o.relative ? r.multiply((new h.Matrix).morph(o).at(a.ease(this.pos))) : r.morph(o).at(a.ease(this.pos)) : (o.relative || o.undo(r.extract()), r.multiply(o.at(a.ease(this.pos))));
                        i.matrix(r)
                    }
                    return this
                }, once: function (t, e, i) {
                    var a = this.last();
                    return i || (t = a.ease(t)), a.once[t] = e, this
                }, _callStart: function () {
                    return setTimeout(function () {
                        this.start()
                    }.bind(this), 0), this
                }
            }, parent: h.Element, construct: {
                animate: function (t, e, i) {
                    return (this.fx || (this.fx = new h.FX(this))).animate(t, e, i)
                }, delay: function (t) {
                    return (this.fx || (this.fx = new h.FX(this))).delay(t)
                }, stop: function (t, e) {
                    return this.fx && this.fx.stop(t, e), this
                }, finish: function () {
                    return this.fx && this.fx.finish(), this
                }
            }
        }), h.MorphObj = h.invent({
            create: function (t, e) {
                return h.Color.isColor(e) ? new h.Color(t).morph(e) : h.regex.delimiter.test(t) ? new (h.regex.pathLetters.test(t) ? h.PathArray : h.Array)(t).morph(e) : h.regex.numberAndUnit.test(e) ? new h.Number(t).morph(e) : (this.value = t, void (this.destination = e))
            }, extend: {
                at: function (t, e) {
                    return e < 1 ? this.value : this.destination
                }, valueOf: function () {
                    return this.value
                }
            }
        }), h.extend(h.FX, {
            attr: function (t, e, i) {
                if ("object" === v(t)) for (var a in t) this.attr(a, t[a]); else this.add(t, e, "attrs");
                return this
            }, plot: function (t, e, i, a) {
                return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new (this.target().morphArray)(t))
            }
        }), h.Box = h.invent({
            create: function (t, e, i, a) {
                if (!("object" !== v(t) || t instanceof h.Element)) return h.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                4 == arguments.length && (this.x = t, this.y = e, this.width = i, this.height = a), null == (a = this).x && (a.x = 0, a.y = 0, a.width = 0, a.height = 0), a.w = a.width, a.h = a.height, a.x2 = a.x + a.width, a.y2 = a.y + a.height, a.cx = a.x + a.width / 2, a.cy = a.y + a.height / 2
            }
        }), h.BBox = h.invent({
            create: function (e) {
                if (h.Box.apply(this, [].slice.call(arguments)), e instanceof h.Element) {
                    var i, a;
                    try {
                        if (!o.documentElement.contains) {
                            for (var t = e.node; t.parentNode;) t = t.parentNode;
                            if (t != o) throw new Error("Element not in the dom")
                        }
                        i = e.node.getBBox()
                    } catch (t) {
                        e instanceof h.Shape ? (h.parser.draw || h.prepare(), (a = e.clone(h.parser.draw.instance).show()) && a.node && "function" == typeof a.node.getBBox && (i = a.node.getBBox()), a && "function" == typeof a.remove && a.remove()) : i = {
                            x: e.node.clientLeft,
                            y: e.node.clientTop,
                            width: e.node.clientWidth,
                            height: e.node.clientHeight
                        }
                    }
                    h.Box.call(this, i)
                }
            }, inherit: h.Box, parent: h.Element, construct: {
                bbox: function () {
                    return new h.BBox(this)
                }
            }
        }), h.BBox.prototype.constructor = h.BBox, h.Matrix = h.invent({
            create: function (t) {
                var e = p([1, 0, 0, 1, 0, 0]);
                t = null === t ? e : t instanceof h.Element ? t.matrixify() : "string" == typeof t ? p(t.split(h.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(t) ? p(t) : t && "object" === v(t) ? t : e;
                for (var i = m.length - 1; 0 <= i; --i) this[m[i]] = (null != t[m[i]] ? t : e)[m[i]]
            }, extend: {
                extract: function () {
                    var t = u(this, 0, 1);
                    u(this, 1, 0);
                    t = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                    return {
                        x: this.e,
                        y: this.f,
                        transformedX: (this.e * Math.cos(t * Math.PI / 180) + this.f * Math.sin(t * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                        transformedY: (this.f * Math.cos(t * Math.PI / 180) + this.e * Math.sin(-t * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                        rotation: t,
                        a: this.a,
                        b: this.b,
                        c: this.c,
                        d: this.d,
                        e: this.e,
                        f: this.f,
                        matrix: new h.Matrix(this)
                    }
                }, clone: function () {
                    return new h.Matrix(this)
                }, morph: function (t) {
                    return this.destination = new h.Matrix(t), this
                }, multiply: function (t) {
                    return new h.Matrix(this.native().multiply((t = (t = t) instanceof h.Matrix ? t : new h.Matrix(t)).native()))
                }, inverse: function () {
                    return new h.Matrix(this.native().inverse())
                }, translate: function (t, e) {
                    return new h.Matrix(this.native().translate(t || 0, e || 0))
                }, native: function () {
                    for (var t = h.parser.native.createSVGMatrix(), e = m.length - 1; 0 <= e; e--) t[m[e]] = this[m[e]];
                    return t
                }, toString: function () {
                    return "matrix(" + x(this.a) + "," + x(this.b) + "," + x(this.c) + "," + x(this.d) + "," + x(this.e) + "," + x(this.f) + ")"
                }
            }, parent: h.Element, construct: {
                ctm: function () {
                    return new h.Matrix(this.node.getCTM())
                }, screenCTM: function () {
                    if (this instanceof h.Nested) {
                        var t = this.rect(1, 1), e = t.node.getScreenCTM();
                        return t.remove(), new h.Matrix(e)
                    }
                    return new h.Matrix(this.node.getScreenCTM())
                }
            }
        }), h.Point = h.invent({
            create: function (t, e) {
                t = Array.isArray(t) ? {x: t[0], y: t[1]} : "object" === v(t) ? {x: t.x, y: t.y} : null != t ? {
                    x: t,
                    y: null != e ? e : t
                } : {x: 0, y: 0};
                this.x = t.x, this.y = t.y
            }, extend: {
                clone: function () {
                    return new h.Point(this)
                }, morph: function (t, e) {
                    return this.destination = new h.Point(t, e), this
                }
            }
        }), h.extend(h.Element, {
            point: function (t, e) {
                return new h.Point(t, e).transform(this.screenCTM().inverse())
            }
        }), h.extend(h.Element, {
            attr: function (t, e, i) {
                if (null == t) {
                    for (t = {}, i = (e = this.node.attributes).length - 1; 0 <= i; i--) t[e[i].nodeName] = h.regex.isNumber.test(e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
                    return t
                }
                if ("object" === v(t)) for (var a in t) this.attr(a, t[a]); else if (null === e) this.node.removeAttribute(t); else {
                    if (null == e) return null == (e = this.node.getAttribute(t)) ? h.defaults.attrs[t] : h.regex.isNumber.test(e) ? parseFloat(e) : e;
                    "stroke-width" == t ? this.attr("stroke", 0 < parseFloat(e) ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (e = h.regex.isImage.test(e) ? this.doc().defs().image(e, 0, 0) : e) instanceof h.Image && (e = this.doc().defs().pattern(0, 0, function () {
                        this.add(e)
                    })), "number" == typeof e ? e = new h.Number(e) : h.Color.isColor(e) ? e = new h.Color(e) : Array.isArray(e) && (e = new h.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                }
                return this
            }
        }), h.extend(h.Element, {
            transform: function (t, e) {
                var i;
                return "object" !== v(t) ? (i = new h.Matrix(this).extract(), "string" == typeof t ? i[t] : i) : (i = new h.Matrix(this), e = !!e || !!t.relative, null != t.a && (i = e ? i.multiply(new h.Matrix(t)) : new h.Matrix(t)), this.attr("transform", i))
            }
        }), h.extend(h.Element, {
            untransform: function () {
                return this.attr("transform", null)
            }, matrixify: function () {
                return (this.attr("transform") || "").split(h.regex.transforms).slice(0, -1).map(function (t) {
                    t = t.trim().split("(");
                    return [t[0], t[1].split(h.regex.delimiter).map(function (t) {
                        return parseFloat(t)
                    })]
                }).reduce(function (t, e) {
                    return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1])
                }, new h.Matrix)
            }, toParent: function (t) {
                if (this == t) return this;
                var e = this.screenCTM(), i = t.screenCTM().inverse();
                return this.addTo(t).untransform().transform(i.multiply(e)), this
            }, toDoc: function () {
                return this.toParent(this.doc())
            }
        }), h.Transformation = h.invent({
            create: function (t, e) {
                if (1 < arguments.length && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                if (Array.isArray(t)) for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i]; else if (t && "object" === v(t)) for (i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                !(this.inversed = !1) === e && (this.inversed = !0)
            }
        }), h.Translate = h.invent({
            parent: h.Matrix, inherit: h.Transformation, create: function (t, e) {
                this.constructor.apply(this, [].slice.call(arguments))
            }, extend: {arguments: ["transformedX", "transformedY"], method: "translate"}
        }), h.extend(h.Element, {
            style: function (t, e) {
                if (0 == arguments.length) return this.node.style.cssText || "";
                if (arguments.length < 2) if ("object" === v(t)) for (var i in t) this.style(i, t[i]); else {
                    if (!h.regex.isCss.test(t)) return this.node.style[r(t)];
                    for (t = t.split(/\s*;\s*/).filter(function (t) {
                        return !!t
                    }).map(function (t) {
                        return t.split(/\s*:\s*/)
                    }); e = t.pop();) this.style(e[0], e[1])
                } else this.node.style[r(t)] = null === e || h.regex.isBlank.test(e) ? "" : e;
                return this
            }
        }), h.Parent = h.invent({
            create: function (t) {
                this.constructor.call(this, t)
            }, inherit: h.Element, extend: {
                children: function () {
                    return h.utils.map(h.utils.filterSVGElements(this.node.childNodes), function (t) {
                        return h.adopt(t)
                    })
                }, add: function (t, e) {
                    return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                }, put: function (t, e) {
                    return this.add(t, e), t
                }, has: function (t) {
                    return 0 <= this.index(t)
                }, index: function (t) {
                    return [].slice.call(this.node.childNodes).indexOf(t.node)
                }, get: function (t) {
                    return h.adopt(this.node.childNodes[t])
                }, first: function () {
                    return this.get(0)
                }, last: function () {
                    return this.get(this.node.childNodes.length - 1)
                }, each: function (t, e) {
                    for (var i = this.children(), a = 0, s = i.length; a < s; a++) i[a] instanceof h.Element && t.apply(i[a], [a, i]), e && i[a] instanceof h.Container && i[a].each(t, e);
                    return this
                }, removeElement: function (t) {
                    return this.node.removeChild(t.node), this
                }, clear: function () {
                    for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, this
                }, defs: function () {
                    return this.doc().defs()
                }
            }
        }), h.extend(h.Parent, {
            ungroup: function (t, e) {
                return 0 === e || this instanceof h.Defs || this.node == h.parser.draw || (t = t || (this instanceof h.Doc ? this : this.parent(h.Parent)), e = e || 1 / 0, this.each(function () {
                    return this instanceof h.Defs ? this : this instanceof h.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                }), this.node.firstChild || this.remove()), this
            }, flatten: function (t, e) {
                return this.ungroup(t, e)
            }
        }), h.Container = h.invent({
            create: function (t) {
                this.constructor.call(this, t)
            }, inherit: h.Parent
        }), h.ViewBox = h.invent({
            parent: h.Container,
            construct: {}
        }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function (e) {
            h.Element.prototype[e] = function (t) {
                return h.on(this.node, e, t), this
            }
        }), h.listeners = [], h.handlerMap = [], h.listenerId = 0, h.on = function (t, e, i, a, s) {
            var o = i.bind(a || t.instance || t), r = (h.handlerMap.indexOf(t) + 1 || h.handlerMap.push(t)) - 1,
                a = e.split(".")[0], e = e.split(".")[1] || "*";
            h.listeners[r] = h.listeners[r] || {}, h.listeners[r][a] = h.listeners[r][a] || {}, h.listeners[r][a][e] = h.listeners[r][a][e] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++h.listenerId), h.listeners[r][a][e][i._svgjsListenerId] = o, t.addEventListener(a, o, s || {passive: !0})
        }, h.off = function (t, e, i) {
            var a = h.handlerMap.indexOf(t), s = e && e.split(".")[0], o = e && e.split(".")[1], r = "";
            if (-1 != a) if (i) !(i = "function" == typeof i ? i._svgjsListenerId : i) || h.listeners[a][s] && h.listeners[a][s][o || "*"] && (t.removeEventListener(s, h.listeners[a][s][o || "*"][i], !1), delete h.listeners[a][s][o || "*"][i]); else if (o && s) {
                if (h.listeners[a][s] && h.listeners[a][s][o]) {
                    for (var n in h.listeners[a][s][o]) h.off(t, [s, o].join("."), n);
                    delete h.listeners[a][s][o]
                }
            } else if (o) for (var l in h.listeners[a]) for (var r in h.listeners[a][l]) o === r && h.off(t, [l, o].join(".")); else if (s) {
                if (h.listeners[a][s]) {
                    for (var r in h.listeners[a][s]) h.off(t, [s, r].join("."));
                    delete h.listeners[a][s]
                }
            } else {
                for (var l in h.listeners[a]) h.off(t, l);
                delete h.listeners[a], delete h.handlerMap[a]
            }
        }, h.extend(h.Element, {
            on: function (t, e, i, a) {
                return h.on(this.node, t, e, i, a), this
            }, off: function (t, e) {
                return h.off(this.node, t, e), this
            }, fire: function (t, e) {
                return t instanceof s.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new h.CustomEvent(t, {
                    detail: e,
                    cancelable: !0
                })), this._event = t, this
            }, event: function () {
                return this._event
            }
        }), h.Defs = h.invent({create: "defs", inherit: h.Container}), h.G = h.invent({
            create: "g",
            inherit: h.Container,
            extend: {
                x: function (t) {
                    return null == t ? this.transform("x") : this.transform({x: t - this.x()}, !0)
                }
            },
            construct: {
                group: function () {
                    return this.put(new h.G)
                }
            }
        }), h.Doc = h.invent({
            create: function (t) {
                t && ("svg" == (t = "string" == typeof t ? o.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, h.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
            }, inherit: h.Container, extend: {
                namespace: function () {
                    return this.attr({
                        xmlns: h.ns,
                        version: "1.1"
                    }).attr("xmlns:xlink", h.xlink, h.xmlns).attr("xmlns:svgjs", h.svgjs, h.xmlns)
                }, defs: function () {
                    var t;
                    return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = h.adopt(t) : this._defs = new h.Defs, this.node.appendChild(this._defs.node)), this._defs
                }, parent: function () {
                    return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
                }, remove: function () {
                    return this.parent() && this.parent().removeChild(this.node), this
                }, clear: function () {
                    for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, h.parser.draw && !h.parser.draw.parentNode && this.node.appendChild(h.parser.draw), this
                }, clone: function (t) {
                    this.writeDataToDom();
                    var e = this.node, i = f(e.cloneNode(!0));
                    return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
                }
            }
        }), h.extend(h.Element, {}), h.Gradient = h.invent({
            create: function (t) {
                this.constructor.call(this, h.create(t + "Gradient")), this.type = t
            }, inherit: h.Container, extend: {
                at: function (t, e, i) {
                    return this.put(new h.Stop).update(t, e, i)
                }, update: function (t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                }, fill: function () {
                    return "url(#" + this.id() + ")"
                }, toString: function () {
                    return this.fill()
                }, attr: function (t, e, i) {
                    return h.Container.prototype.attr.call(this, t = "transform" == t ? "gradientTransform" : t, e, i)
                }
            }, construct: {
                gradient: function (t, e) {
                    return this.defs().gradient(t, e)
                }
            }
        }), h.extend(h.Gradient, h.FX, {
            from: function (t, e) {
                return "radial" == (this._target || this).type ? this.attr({
                    fx: new h.Number(t),
                    fy: new h.Number(e)
                }) : this.attr({x1: new h.Number(t), y1: new h.Number(e)})
            }, to: function (t, e) {
                return "radial" == (this._target || this).type ? this.attr({
                    cx: new h.Number(t),
                    cy: new h.Number(e)
                }) : this.attr({x2: new h.Number(t), y2: new h.Number(e)})
            }
        }), h.extend(h.Defs, {
            gradient: function (t, e) {
                return this.put(new h.Gradient(t)).update(e)
            }
        }), h.Stop = h.invent({
            create: "stop", inherit: h.Element, extend: {
                update: function (t) {
                    return null != (t = "number" == typeof t || t instanceof h.Number ? {
                        offset: arguments[0],
                        color: arguments[1],
                        opacity: arguments[2]
                    } : t).opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new h.Number(t.offset)), this
                }
            }
        }), h.Pattern = h.invent({
            create: "pattern", inherit: h.Container, extend: {
                fill: function () {
                    return "url(#" + this.id() + ")"
                }, update: function (t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                }, toString: function () {
                    return this.fill()
                }, attr: function (t, e, i) {
                    return h.Container.prototype.attr.call(this, t = "transform" == t ? "patternTransform" : t, e, i)
                }
            }, construct: {
                pattern: function (t, e, i) {
                    return this.defs().pattern(t, e, i)
                }
            }
        }), h.extend(h.Defs, {
            pattern: function (t, e, i) {
                return this.put(new h.Pattern).update(i).attr({
                    x: 0,
                    y: 0,
                    width: t,
                    height: e,
                    patternUnits: "userSpaceOnUse"
                })
            }
        }), h.Shape = h.invent({
            create: function (t) {
                this.constructor.call(this, t)
            }, inherit: h.Element
        }), h.Symbol = h.invent({
            create: "symbol", inherit: h.Container, construct: {
                symbol: function () {
                    return this.put(new h.Symbol)
                }
            }
        }), h.Use = h.invent({
            create: "use", inherit: h.Shape, extend: {
                element: function (t, e) {
                    return this.attr("href", (e || "") + "#" + t, h.xlink)
                }
            }, construct: {
                use: function (t, e) {
                    return this.put(new h.Use).element(t, e)
                }
            }
        }), h.Rect = h.invent({
            create: "rect", inherit: h.Shape, construct: {
                rect: function (t, e) {
                    return this.put(new h.Rect).size(t, e)
                }
            }
        }), h.Circle = h.invent({
            create: "circle", inherit: h.Shape, construct: {
                circle: function (t) {
                    return this.put(new h.Circle).rx(new h.Number(t).divide(2)).move(0, 0)
                }
            }
        }), h.extend(h.Circle, h.FX, {
            rx: function (t) {
                return this.attr("r", t)
            }, ry: function (t) {
                return this.rx(t)
            }
        }), h.Ellipse = h.invent({
            create: "ellipse", inherit: h.Shape, construct: {
                ellipse: function (t, e) {
                    return this.put(new h.Ellipse).size(t, e).move(0, 0)
                }
            }
        }), h.extend(h.Ellipse, h.Rect, h.FX, {
            rx: function (t) {
                return this.attr("rx", t)
            }, ry: function (t) {
                return this.attr("ry", t)
            }
        }), h.extend(h.Circle, h.Ellipse, {
            x: function (t) {
                return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
            }, y: function (t) {
                return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
            }, cx: function (t) {
                return null == t ? this.attr("cx") : this.attr("cx", t)
            }, cy: function (t) {
                return null == t ? this.attr("cy") : this.attr("cy", t)
            }, width: function (t) {
                return null == t ? 2 * this.rx() : this.rx(new h.Number(t).divide(2))
            }, height: function (t) {
                return null == t ? 2 * this.ry() : this.ry(new h.Number(t).divide(2))
            }, size: function (t, e) {
                e = g(this, t, e);
                return this.rx(new h.Number(e.width).divide(2)).ry(new h.Number(e.height).divide(2))
            }
        }), h.Line = h.invent({
            create: "line", inherit: h.Shape, extend: {
                array: function () {
                    return new h.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]])
                }, plot: function (t, e, i, a) {
                    return null == t ? this.array() : (t = void 0 !== e ? {
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: a
                    } : new h.PointArray(t).toLine(), this.attr(t))
                }, move: function (t, e) {
                    return this.attr(this.array().move(t, e).toLine())
                }, size: function (t, e) {
                    e = g(this, t, e);
                    return this.attr(this.array().size(e.width, e.height).toLine())
                }
            }, construct: {
                line: function (t, e, i, a) {
                    return h.Line.prototype.plot.apply(this.put(new h.Line), null != t ? [t, e, i, a] : [0, 0, 0, 0])
                }
            }
        }), h.Polyline = h.invent({
            create: "polyline", inherit: h.Shape, construct: {
                polyline: function (t) {
                    return this.put(new h.Polyline).plot(t || new h.PointArray)
                }
            }
        }), h.Polygon = h.invent({
            create: "polygon", inherit: h.Shape, construct: {
                polygon: function (t) {
                    return this.put(new h.Polygon).plot(t || new h.PointArray)
                }
            }
        }), h.extend(h.Polyline, h.Polygon, {
            array: function () {
                return this._array || (this._array = new h.PointArray(this.attr("points")))
            }, plot: function (t) {
                return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new h.PointArray(t))
            }, clear: function () {
                return delete this._array, this
            }, move: function (t, e) {
                return this.attr("points", this.array().move(t, e))
            }, size: function (t, e) {
                e = g(this, t, e);
                return this.attr("points", this.array().size(e.width, e.height))
            }
        }), h.extend(h.Line, h.Polyline, h.Polygon, {
            morphArray: h.PointArray, x: function (t) {
                return null == t ? this.bbox().x : this.move(t, this.bbox().y)
            }, y: function (t) {
                return null == t ? this.bbox().y : this.move(this.bbox().x, t)
            }, width: function (t) {
                var e = this.bbox();
                return null == t ? e.width : this.size(t, e.height)
            }, height: function (t) {
                var e = this.bbox();
                return null == t ? e.height : this.size(e.width, t)
            }
        }), h.Path = h.invent({
            create: "path", inherit: h.Shape, extend: {
                morphArray: h.PathArray, array: function () {
                    return this._array || (this._array = new h.PathArray(this.attr("d")))
                }, plot: function (t) {
                    return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new h.PathArray(t))
                }, clear: function () {
                    return delete this._array, this
                }
            }, construct: {
                path: function (t) {
                    return this.put(new h.Path).plot(t || new h.PathArray)
                }
            }
        }), h.Image = h.invent({
            create: "image", inherit: h.Shape, extend: {
                load: function (e) {
                    if (!e) return this;
                    var i = this, a = new s.Image;
                    return h.on(a, "load", function () {
                        h.off(a);
                        var t = i.parent(h.Pattern);
                        null !== t && (0 == i.width() && 0 == i.height() && i.size(a.width, a.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, {
                            width: a.width,
                            height: a.height,
                            ratio: a.width / a.height,
                            url: e
                        }))
                    }), h.on(a, "error", function (t) {
                        h.off(a), "function" == typeof i._error && i._error.call(i, t)
                    }), this.attr("href", a.src = this.src = e, h.xlink)
                }, loaded: function (t) {
                    return this._loaded = t, this
                }, error: function (t) {
                    return this._error = t, this
                }
            }, construct: {
                image: function (t, e, i) {
                    return this.put(new h.Image).load(t).size(e || 0, i || e || 0)
                }
            }
        }), h.Text = h.invent({
            create: function () {
                this.constructor.call(this, h.create("text")), this.dom.leading = new h.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", h.defaults.attrs["font-family"])
            }, inherit: h.Shape, extend: {
                x: function (t) {
                    return null == t ? this.attr("x") : this.attr("x", t)
                }, text: function (t) {
                    if (void 0 === t) {
                        t = "";
                        for (var e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 == h.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent;
                        return t
                    }
                    if (this.clear().build(!0), "function" == typeof t) t.call(this, this); else for (var i = 0, s = (t = t.split("\n")).length; i < s; i++) this.tspan(t[i]).newLine();
                    return this.build(!1).rebuild()
                }, size: function (t) {
                    return this.attr("font-size", t).rebuild()
                }, leading: function (t) {
                    return null == t ? this.dom.leading : (this.dom.leading = new h.Number(t), this.rebuild())
                }, lines: function () {
                    var t = (this.textPath && this.textPath() || this).node,
                        t = h.utils.map(h.utils.filterSVGElements(t.childNodes), function (t) {
                            return h.adopt(t)
                        });
                    return new h.Set(t)
                }, rebuild: function (t) {
                    var e, i, a;
                    return "boolean" == typeof t && (this._rebuild = t), this._rebuild && (i = 0, a = (e = this).dom.leading * new h.Number(this.attr("font-size")), this.lines().each(function () {
                        this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += a : (this.attr("dy", a + i), i = 0))
                    }), this.fire("rebuild")), this
                }, build: function (t) {
                    return this._build = !!t, this
                }, setData: function (t) {
                    return this.dom = t, this.dom.leading = new h.Number(t.leading || 1.3), this
                }
            }, construct: {
                text: function (t) {
                    return this.put(new h.Text).text(t)
                }, plain: function (t) {
                    return this.put(new h.Text).plain(t)
                }
            }
        }), h.Tspan = h.invent({
            create: "tspan", inherit: h.Shape, extend: {
                text: function (t) {
                    return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
                }, dx: function (t) {
                    return this.attr("dx", t)
                }, dy: function (t) {
                    return this.attr("dy", t)
                }, newLine: function () {
                    var t = this.parent(h.Text);
                    return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
                }
            }
        }), h.extend(h.Text, h.Tspan, {
            plain: function (t) {
                return !1 === this._build && this.clear(), this.node.appendChild(o.createTextNode(t)), this
            }, tspan: function (t) {
                var e = (this.textPath && this.textPath() || this).node, i = new h.Tspan;
                return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t)
            }, clear: function () {
                for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                return this
            }, length: function () {
                return this.node.getComputedTextLength()
            }
        }), h.TextPath = h.invent({
            create: "textPath",
            inherit: h.Parent,
            parent: h.Text,
            construct: {
                morphArray: h.PathArray, array: function () {
                    var t = this.track();
                    return t ? t.array() : null
                }, plot: function (t) {
                    var e = this.track(), i = null;
                    return e && (i = e.plot(t)), null == t ? i : this
                }, track: function () {
                    var t = this.textPath();
                    if (t) return t.reference("href")
                }, textPath: function () {
                    if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return h.adopt(this.node.firstChild)
                }
            }
        }), h.Nested = h.invent({
            create: function () {
                this.constructor.call(this, h.create("svg")), this.style("overflow", "visible")
            }, inherit: h.Container, construct: {
                nested: function () {
                    return this.put(new h.Nested)
                }
            }
        });
        var a = {
            stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
            fill: ["color", "opacity", "rule"],
            prefix: function (t, e) {
                return "color" == e ? t : t + "-" + e
            }
        };

        function c(t, e, i, a) {
            return i + a.replace(h.regex.dots, " .")
        }

        function r(t) {
            return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            })
        }

        function n(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function d(t) {
            t = t.toString(16);
            return 1 == t.length ? "0" + t : t
        }

        function g(t, e, i) {
            return null != e && null != i || (t = t.bbox(), null == e ? e = t.width / t.height * i : null == i && (i = t.height / t.width * e)), {
                width: e,
                height: i
            }
        }

        function u(t, e, i) {
            return {x: e * t.a + i * t.c, y: e * t.b + i * t.d}
        }

        function p(t) {
            return {a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5]}
        }

        function f(t) {
            for (var e = t.childNodes.length - 1; 0 <= e; e--) t.childNodes[e] instanceof s.SVGElement && f(t.childNodes[e]);
            return h.adopt(t).id(h.eid(t.nodeName))
        }

        function x(t) {
            return 1e-37 < Math.abs(t) ? t : 0
        }

        ["fill", "stroke"].forEach(function (i) {
            var t = {};
            t[i] = function (t) {
                if (void 0 === t) return this;
                if ("string" == typeof t || h.Color.isRgb(t) || t && "function" == typeof t.fill) this.attr(i, t); else for (var e = a[i].length - 1; 0 <= e; e--) null != t[a[i][e]] && this.attr(a.prefix(i, a[i][e]), t[a[i][e]]);
                return this
            }, h.extend(h.Element, h.FX, t)
        }), h.extend(h.Element, h.FX, {
            translate: function (t, e) {
                return this.transform({x: t, y: e})
            }, matrix: function (t) {
                return this.attr("transform", new h.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
            }, opacity: function (t) {
                return this.attr("opacity", t)
            }, dx: function (t) {
                return this.x(new h.Number(t).plus(this instanceof h.FX ? 0 : this.x()), !0)
            }, dy: function (t) {
                return this.y(new h.Number(t).plus(this instanceof h.FX ? 0 : this.y()), !0)
            }
        }), h.extend(h.Path, {
            length: function () {
                return this.node.getTotalLength()
            }, pointAt: function (t) {
                return this.node.getPointAtLength(t)
            }
        }), h.Set = h.invent({
            create: function (t) {
                Array.isArray(t) ? this.members = t : this.clear()
            }, extend: {
                add: function () {
                    for (var t = [].slice.call(arguments), e = 0, i = t.length; e < i; e++) this.members.push(t[e]);
                    return this
                }, remove: function (t) {
                    t = this.index(t);
                    return -1 < t && this.members.splice(t, 1), this
                }, each: function (t) {
                    for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                    return this
                }, clear: function () {
                    return this.members = [], this
                }, length: function () {
                    return this.members.length
                }, has: function (t) {
                    return 0 <= this.index(t)
                }, index: function (t) {
                    return this.members.indexOf(t)
                }, get: function (t) {
                    return this.members[t]
                }, first: function () {
                    return this.get(0)
                }, last: function () {
                    return this.get(this.members.length - 1)
                }, valueOf: function () {
                    return this.members
                }
            }, construct: {
                set: function (t) {
                    return new h.Set(t)
                }
            }
        }), h.FX.Set = h.invent({
            create: function (t) {
                this.set = t
            }
        }), h.Set.inherit = function () {
            var t, e = [];
            for (t in h.Shape.prototype) "function" == typeof h.Shape.prototype[t] && "function" != typeof h.Set.prototype[t] && e.push(t);
            for (t in e.forEach(function (i) {
                h.Set.prototype[i] = function () {
                    for (var t = 0, e = this.members.length; t < e; t++) this.members[t] && "function" == typeof this.members[t][i] && this.members[t][i].apply(this.members[t], arguments);
                    return "animate" == i ? this.fx || (this.fx = new h.FX.Set(this)) : this
                }
            }), e = [], h.FX.prototype) "function" == typeof h.FX.prototype[t] && "function" != typeof h.FX.Set.prototype[t] && e.push(t);
            e.forEach(function (i) {
                h.FX.Set.prototype[i] = function () {
                    for (var t = 0, e = this.set.members.length; t < e; t++) this.set.members[t].fx[i].apply(this.set.members[t].fx, arguments);
                    return this
                }
            })
        }, h.extend(h.Element, {}), h.extend(h.Element, {
            remember: function (t, e) {
                if ("object" === v(t)) for (var i in t) this.remember(i, t[i]); else {
                    if (1 == arguments.length) return this.memory()[t];
                    this.memory()[t] = e
                }
                return this
            }, forget: function () {
                if (0 == arguments.length) this._memory = {}; else for (var t = arguments.length - 1; 0 <= t; t--) delete this.memory()[arguments[t]];
                return this
            }, memory: function () {
                return this._memory || (this._memory = {})
            }
        }), h.get = function (e) {
            var t = o.getElementById(function () {
                var t = (e || "").toString().match(h.regex.reference);
                if (t) return t[1]
            }() || e);
            return h.adopt(t)
        }, h.select = function (t, e) {
            return new h.Set(h.utils.map((e || o).querySelectorAll(t), function (t) {
                return h.adopt(t)
            }))
        }, h.extend(h.Parent, {
            select: function (t) {
                return h.select(t, this.node)
            }
        });
        var b, m = "abcdef".split("");
        return "function" != typeof s.CustomEvent ? ((b = function (t, e) {
            e = e || {bubbles: !1, cancelable: !1, detail: void 0};
            var i = o.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
        }).prototype = s.Event.prototype, h.CustomEvent = b) : h.CustomEvent = s.CustomEvent, h
    }, "function" == typeof define && define.amd ? define(function () {
        return We(Oe, Oe.document)
    }) : "object" === ("undefined" == typeof exports ? "undefined" : v(exports)) && "undefined" != typeof module ? module.exports = Oe.document ? We(Oe, Oe.document) : function (t) {
        return We(t, t.document)
    } : Oe.SVG = We(Oe, Oe.document), function () {
        SVG.Filter = SVG.invent({
            create: "filter", inherit: SVG.Parent, extend: {
                source: "SourceGraphic",
                sourceAlpha: "SourceAlpha",
                background: "BackgroundImage",
                backgroundAlpha: "BackgroundAlpha",
                fill: "FillPaint",
                stroke: "StrokePaint",
                autoSetIn: !0,
                put: function (t, e) {
                    return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
                },
                blend: function (t, e, i) {
                    return this.put(new SVG.BlendEffect(t, e, i))
                },
                colorMatrix: function (t, e) {
                    return this.put(new SVG.ColorMatrixEffect(t, e))
                },
                convolveMatrix: function (t) {
                    return this.put(new SVG.ConvolveMatrixEffect(t))
                },
                componentTransfer: function (t) {
                    return this.put(new SVG.ComponentTransferEffect(t))
                },
                composite: function (t, e, i) {
                    return this.put(new SVG.CompositeEffect(t, e, i))
                },
                flood: function (t, e) {
                    return this.put(new SVG.FloodEffect(t, e))
                },
                offset: function (t, e) {
                    return this.put(new SVG.OffsetEffect(t, e))
                },
                image: function (t) {
                    return this.put(new SVG.ImageEffect(t))
                },
                merge: function () {
                    var t, e = [void 0];
                    for (t in arguments) e.push(arguments[t]);
                    return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, e)))
                },
                gaussianBlur: function (t, e) {
                    return this.put(new SVG.GaussianBlurEffect(t, e))
                },
                morphology: function (t, e) {
                    return this.put(new SVG.MorphologyEffect(t, e))
                },
                diffuseLighting: function (t, e, i) {
                    return this.put(new SVG.DiffuseLightingEffect(t, e, i))
                },
                displacementMap: function (t, e, i, a, s) {
                    return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s))
                },
                specularLighting: function (t, e, i, a) {
                    return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
                },
                tile: function () {
                    return this.put(new SVG.TileEffect)
                },
                turbulence: function (t, e, i, a, s) {
                    return this.put(new SVG.TurbulenceEffect(t, e, i, a, s))
                },
                toString: function () {
                    return "url(#" + this.attr("id") + ")"
                }
            }
        }), SVG.extend(SVG.Defs, {
            filter: function (t) {
                var e = this.put(new SVG.Filter);
                return "function" == typeof t && t.call(e, e), e
            }
        }), SVG.extend(SVG.Container, {
            filter: function (t) {
                return this.defs().filter(t)
            }
        }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
            filter: function (t) {
                return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
            }, unfilter: function (t) {
                return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
            }
        }), SVG.Effect = SVG.invent({
            create: function () {
                this.constructor.call(this)
            }, inherit: SVG.Element, extend: {
                in: function (t) {
                    return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                }, result: function (t) {
                    return null == t ? this.attr("result") : this.attr("result", t)
                }, toString: function () {
                    return this.result()
                }
            }
        }), SVG.ParentEffect = SVG.invent({
            create: function () {
                this.constructor.call(this)
            }, inherit: SVG.Parent, extend: {
                in: function (t) {
                    return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                }, result: function (t) {
                    return null == t ? this.attr("result") : this.attr("result", t)
                }, toString: function () {
                    return this.result()
                }
            }
        });
        var t = {
            blend: function (t, e) {
                return this.parent() && this.parent().blend(this, t, e)
            }, colorMatrix: function (t, e) {
                return this.parent() && this.parent().colorMatrix(t, e).in(this)
            }, convolveMatrix: function (t) {
                return this.parent() && this.parent().convolveMatrix(t).in(this)
            }, componentTransfer: function (t) {
                return this.parent() && this.parent().componentTransfer(t).in(this)
            }, composite: function (t, e) {
                return this.parent() && this.parent().composite(this, t, e)
            }, flood: function (t, e) {
                return this.parent() && this.parent().flood(t, e)
            }, offset: function (t, e) {
                return this.parent() && this.parent().offset(t, e).in(this)
            }, image: function (t) {
                return this.parent() && this.parent().image(t)
            }, merge: function () {
                return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
            }, gaussianBlur: function (t, e) {
                return this.parent() && this.parent().gaussianBlur(t, e).in(this)
            }, morphology: function (t, e) {
                return this.parent() && this.parent().morphology(t, e).in(this)
            }, diffuseLighting: function (t, e, i) {
                return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
            }, displacementMap: function (t, e, i, a) {
                return this.parent() && this.parent().displacementMap(this, t, e, i, a)
            }, specularLighting: function (t, e, i, a) {
                return this.parent() && this.parent().specularLighting(t, e, i, a).in(this)
            }, tile: function () {
                return this.parent() && this.parent().tile().in(this)
            }, turbulence: function (t, e, i, a, s) {
                return this.parent() && this.parent().turbulence(t, e, i, a, s).in(this)
            }
        };
        SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
            create: function () {
                this.constructor.call(this)
            }, inherit: SVG.Element, extend: {
                in: function (t) {
                    this.attr("in", t)
                }
            }
        });
        var e = {
            blend: function (t, e, i) {
                this.attr({in: t, in2: e, mode: i || "normal"})
            }, colorMatrix: function (t, e) {
                "matrix" == t && (e = a(e)), this.attr({type: t, values: void 0 === e ? null : e})
            }, convolveMatrix: function (t) {
                t = a(t), this.attr({order: Math.sqrt(t.split(" ").length), kernelMatrix: t})
            }, composite: function (t, e, i) {
                this.attr({in: t, in2: e, operator: i})
            }, flood: function (t, e) {
                this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
            }, offset: function (t, e) {
                this.attr({dx: t, dy: e})
            }, image: function (t) {
                this.attr("href", t, SVG.xlink)
            }, displacementMap: function (t, e, i, a, s) {
                this.attr({in: t, in2: e, scale: i, xChannelSelector: a, yChannelSelector: s})
            }, gaussianBlur: function (t, e) {
                null != t || null != e ? this.attr("stdDeviation", function (t) {
                    if (!Array.isArray(t)) return t;
                    for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
                    return a.join(" ")
                }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
            }, morphology: function (t, e) {
                this.attr({operator: t, radius: e})
            }, tile: function () {
            }, turbulence: function (t, e, i, a, s) {
                this.attr({numOctaves: e, seed: i, stitchTiles: a, baseFrequency: t, type: s})
            }
        }, t = {
            merge: function () {
                if (arguments[0] instanceof SVG.Set) {
                    var e = this;
                    arguments[0].each(function (t) {
                        this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this))
                    })
                } else for (var t = Array.isArray(arguments[0]) ? arguments[0] : arguments, i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]))
            }, componentTransfer: function (e) {
                if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) {
                    this[t] = new SVG["Func" + t.toUpperCase()]("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
                }.bind(this)), e) for (var t in e.rgb && (["r", "g", "b"].forEach(function (t) {
                    this[t].attr(e.rgb)
                }.bind(this)), delete e.rgb), e) this[t].attr(e[t])
            }, diffuseLighting: function (t, e, i) {
                this.attr({surfaceScale: t, diffuseConstant: e, kernelUnitLength: i})
            }, specularLighting: function (t, e, i, a) {
                this.attr({surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: a})
            }
        }, i = {
            distantLight: function (t, e) {
                this.attr({azimuth: t, elevation: e})
            }, pointLight: function (t, e, i) {
                this.attr({x: t, y: e, z: i})
            }, spotLight: function (t, e, i, a, s, o) {
                this.attr({x: t, y: e, z: i, pointsAtX: a, pointsAtY: s, pointsAtZ: o})
            }, mergeNode: function (t) {
                this.attr("in", t)
            }
        };

        function a(t) {
            return (t = Array.isArray(t) ? new SVG.Array(t) : t).toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
        }

        function s() {
            var t, e = function () {
            };
            for (t in "function" == typeof arguments[arguments.length - 1] && (e = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i in arguments[t]) e(arguments[t][i], i, arguments[t])
        }

        ["r", "g", "b", "a"].forEach(function (t) {
            i["Func" + t.toUpperCase()] = function (t) {
                switch (this.attr("type", t), t) {
                    case"table":
                        this.attr("tableValues", arguments[1]);
                        break;
                    case"linear":
                        this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                        break;
                    case"gamma":
                        this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
                }
            }
        }), s(e, function (t, e) {
            var i = e.charAt(0).toUpperCase() + e.slice(1);
            SVG[i + "Effect"] = SVG.invent({
                create: function () {
                    this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                }, inherit: SVG.Effect, extend: {}
            })
        }), s(t, function (t, e) {
            var i = e.charAt(0).toUpperCase() + e.slice(1);
            SVG[i + "Effect"] = SVG.invent({
                create: function () {
                    this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                }, inherit: SVG.ParentEffect, extend: {}
            })
        }), s(i, function (t, e) {
            var i = e.charAt(0).toUpperCase() + e.slice(1);
            SVG[i] = SVG.invent({
                create: function () {
                    this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
                }, inherit: SVG.ChildEffect, extend: {}
            })
        }), SVG.extend(SVG.MergeEffect, {
            in: function (t) {
                return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
            }
        }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
            in2: function (t) {
                return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
            }
        }), SVG.filter = {sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]}
    }.call(void 0), SVG.extend(SVG.PathArray, {
        morph: function (t) {
            for (var e = this.value, i = this.parse(t), a = 0, s = 0; !1 !== a || !1 !== s;) {
                var o, r = ti(e, !1 !== a && a + 1), n = ti(i, !1 !== s && s + 1);
                !1 === a && (a = 0 == (o = new SVG.PathArray(l.start).bbox()).height || 0 == o.width ? e.push(e[0]) - 1 : e.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1), !1 === s && (s = 0 == (o = new SVG.PathArray(l.dest).bbox()).height || 0 == o.width ? i.push(i[0]) - 1 : i.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1);
                var l = function (t, e, i, a, s, o, r) {
                        for (var n = t.slice(e, i || r), l = a.slice(s, o || r), h = 0, c = {
                            pos: [0, 0],
                            start: [0, 0]
                        }, d = {
                            pos: [0, 0],
                            start: [0, 0]
                        }; n[h] = Je.call(c, n[h]), l[h] = Je.call(d, l[h]), n[h][0] != l[h][0] || "M" == n[h][0] || "A" == n[h][0] && (n[h][4] != l[h][4] || n[h][5] != l[h][5]) ? (Array.prototype.splice.apply(n, [h, 1].concat(Ke.call(c, n[h]))), Array.prototype.splice.apply(l, [h, 1].concat(Ke.call(d, l[h])))) : (n[h] = Qe.call(c, n[h]), l[h] = Qe.call(d, l[h])), ++h != n.length || h != l.length;) h == n.length && n.push(["C", c.pos[0], c.pos[1], c.pos[0], c.pos[1], c.pos[0], c.pos[1]]), h == l.length && l.push(["C", d.pos[0], d.pos[1], d.pos[0], d.pos[1], d.pos[0], d.pos[1]]);
                        return {start: n, dest: l}
                    }(e, a, r, i, s, n), e = e.slice(0, a).concat(l.start, !1 === r ? [] : e.slice(r)),
                    i = i.slice(0, s).concat(l.dest, !1 === n ? [] : i.slice(n)), a = !1 !== r && a + l.start.length,
                    s = !1 !== n && s + l.dest.length
            }
            return this.value = e, this.destination = new SVG.PathArray, this.destination.value = i, this
        }
    }), function () {
        function a(t) {
            t.remember("_draggable", this), this.el = t
        }

        a.prototype.init = function (t, e) {
            var i = this;
            this.constraint = t, this.value = e, this.el.on("mousedown.drag", function (t) {
                i.start(t)
            }), this.el.on("touchstart.drag", function (t) {
                i.start(t)
            })
        }, a.prototype.transformPoint = function (t, e) {
            t = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
            return this.p.x = t.clientX - (e || 0), this.p.y = t.clientY, this.p.matrixTransform(this.m)
        }, a.prototype.getBBox = function () {
            var t = this.el.bbox();
            return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
        }, a.prototype.start = function (t) {
            if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
                var e = this;
                if (this.el.fire("beforedrag", {event: t, handler: this}), !this.el.event().defaultPrevented) {
                    t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                    var i, a = this.getBBox();
                    if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                        case"middle":
                            i /= 2;
                            break;
                        case"start":
                            i = 0
                    }
                    this.startPoints = {
                        point: this.transformPoint(t, i),
                        box: a,
                        transform: this.el.transform()
                    }, SVG.on(window, "mousemove.drag", function (t) {
                        e.drag(t)
                    }), SVG.on(window, "touchmove.drag", function (t) {
                        e.drag(t)
                    }), SVG.on(window, "mouseup.drag", function (t) {
                        e.end(t)
                    }), SVG.on(window, "touchend.drag", function (t) {
                        e.end(t)
                    }), this.el.fire("dragstart", {event: t, p: this.startPoints.point, m: this.m, handler: this})
                }
            }
        }, a.prototype.drag = function (t) {
            var e = this.getBBox(), i = this.transformPoint(t),
                a = this.startPoints.box.x + i.x - this.startPoints.point.x,
                s = this.startPoints.box.y + i.y - this.startPoints.point.y, o = this.constraint,
                r = i.x - this.startPoints.point.x, n = i.y - this.startPoints.point.y;
            return this.el.fire("dragmove", {
                event: t,
                p: i,
                m: this.m,
                handler: this
            }), this.el.event().defaultPrevented || ("function" == typeof o ? (!0 === (t = "boolean" == typeof (t = o.call(this.el, a, s, this.m)) ? {
                x: t,
                y: t
            } : t).x ? this.el.x(a) : !1 !== t.x && this.el.x(t.x), !0 === t.y ? this.el.y(s) : !1 !== t.y && this.el.y(t.y)) : "object" == typeof o && (null != o.minX && a < o.minX ? r = (a = o.minX) - this.startPoints.box.x : null != o.maxX && a > o.maxX - e.width && (r = (a = o.maxX - e.width) - this.startPoints.box.x), null != o.minY && s < o.minY ? n = (s = o.minY) - this.startPoints.box.y : null != o.maxY && s > o.maxY - e.height && (n = (s = o.maxY - e.height) - this.startPoints.box.y), null != o.snapToGrid && (a -= a % o.snapToGrid, s -= s % o.snapToGrid, r -= r % o.snapToGrid, n -= n % o.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
                x: r,
                y: n
            }, !0) : this.el.move(a, s))), i
        }, a.prototype.end = function (t) {
            var e = this.drag(t);
            this.el.fire("dragend", {
                event: t,
                p: e,
                m: this.m,
                handler: this
            }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
        }, SVG.extend(SVG.Element, {
            draggable: function (t, e) {
                "function" != typeof t && "object" != typeof t || (e = t, t = !0);
                var i = this.remember("_draggable") || new a(this);
                return (t = void 0 === t || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
            }
        })
    }.call(void 0), $e.prototype.init = function (t, e) {
        var i = this.el.bbox();
        this.options = {};
        var a = this.el.selectize.defaults.points;
        for (s in this.el.selectize.defaults) this.options[s] = this.el.selectize.defaults[s], void 0 !== e[s] && (this.options[s] = e[s]);
        var s, o = ["points", "pointsExclude"];
        for (s in o) {
            var r = this.options[o[s]];
            "string" == typeof r ? r = 0 < r.length ? r.split(/\s*,\s*/i) : [] : "boolean" == typeof r && "points" === o[s] && (r = r ? a : []), this.options[o[s]] = r
        }
        this.options.points = [a, this.options.points].reduce(function (t, e) {
            return t.filter(function (t) {
                return -1 < e.indexOf(t)
            })
        }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function (t, e) {
            return t.filter(function (t) {
                return e.indexOf(t) < 0
            })
        }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
    }, $e.prototype.selectPoints = function (t) {
        return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this
    }, $e.prototype.getPointArray = function () {
        var e = this.el.bbox();
        return this.el.array().valueOf().map(function (t) {
            return [t[0] - e.x, t[1] - e.y]
        })
    }, $e.prototype.drawPoints = function () {
        for (var s = this, t = this.getPointArray(), e = 0, i = t.length; e < i; ++e) {
            var a = function (a) {
                    return function (t) {
                        (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                        var e = t.pageX || t.touches[0].pageX, i = t.pageY || t.touches[0].pageY;
                        s.el.fire("point", {x: e, y: i, i: a, event: t})
                    }
                }(e),
                a = this.drawPoint(t[e][0], t[e][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", a).on("mousedown", a);
            this.pointSelection.set.add(a)
        }
    }, $e.prototype.drawPoint = function (t, e) {
        var i = this.options.pointType;
        switch (i) {
            case"circle":
                return this.drawCircle(t, e);
            case"rect":
                return this.drawRect(t, e);
            default:
                if ("function" == typeof i) return i.call(this, t, e);
                throw new Error("Unknown " + i + " point type!")
        }
    }, $e.prototype.drawCircle = function (t, e) {
        return this.nested.circle(this.options.pointSize).center(t, e)
    }, $e.prototype.drawRect = function (t, e) {
        return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e)
    }, $e.prototype.updatePointSelection = function () {
        var e = this.getPointArray();
        this.pointSelection.set.each(function (t) {
            this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1])
        })
    }, $e.prototype.updateRectSelection = function () {
        var t, i = this, a = this.el.bbox();
        this.rectSelection.set.get(0).attr({
            width: a.width,
            height: a.height
        }), this.options.points.length && this.options.points.map(function (t, e) {
            t = i.pointCoords(t, a);
            i.rectSelection.set.get(e + 1).center(t.x, t.y)
        }), this.options.rotationPoint && (t = this.rectSelection.set.length(), this.rectSelection.set.get(t - 1).center(a.width / 2, 20))
    }, $e.prototype.selectRect = function (t) {
        var s = this, a = this.el.bbox();

        function o(a) {
            return function (t) {
                (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                var e = t.pageX || t.touches[0].pageX, i = t.pageY || t.touches[0].pageY;
                s.el.fire(a, {x: e, y: i, event: t})
            }
        }

        this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(a.width, a.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function (t, e) {
            var i = s.pointCoords(t, a),
                t = s.drawPoint(i.x, i.y).attr("class", s.options.classPoints + "_" + t).on("mousedown", o(t)).on("touchstart", o(t));
            s.rectSelection.set.add(t)
        }), this.rectSelection.set.each(function () {
            this.addClass(s.options.classPoints)
        })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1)) && (t = function (t) {
            (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
            var e = t.pageX || t.touches[0].pageX, i = t.pageY || t.touches[0].pageY;
            s.el.fire("rot", {x: e, y: i, event: t})
        }, t = this.drawPoint(a.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", t).on("mousedown", t), this.rectSelection.set.add(t))
    }, $e.prototype.handler = function () {
        var t = this.el.bbox();
        this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
    }, $e.prototype.observe = function () {
        var t = this;
        if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function () {
            t.handler()
        }), this.observerInst.observe(this.el.node, {attributes: !0}); else try {
            this.observerInst.disconnect(), delete this.observerInst
        } catch (t) {
        } else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function () {
            t.handler()
        })
    }, $e.prototype.cleanup = function () {
        !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function () {
            this.remove()
        }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function () {
            this.remove()
        }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
    }, SVG.extend(SVG.Element, {
        selectize: function (t, e) {
            return "object" == typeof t && (e = t, t = !0), (this.remember("_selectHandler") || new $e(this)).init(void 0 === t || t, e || {}), this
        }
    }), SVG.Element.prototype.selectize.defaults = {
        points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"],
        pointsExclude: [],
        classRect: "svg_select_boundingRect",
        classPoints: "svg_select_points",
        pointSize: 7,
        rotationPoint: !0,
        deepSelect: !1,
        pointType: "circle"
    }, function () {
        !function () {
            function e(t) {
                t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
            }

            e.prototype.transformPoint = function (t, e, i) {
                return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
            }, e.prototype._extractPosition = function (t) {
                return {
                    x: (null != t.clientX ? t : t.touches[0]).clientX,
                    y: (null != t.clientY ? t : t.touches[0]).clientY
                }
            }, e.prototype.init = function (t) {
                var e = this;
                if (this.stop(), "stop" !== t) {
                    for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                    this.el.on("lt.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("rt.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("rb.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("lb.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("t.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("r.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("b.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("l.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("rot.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.el.on("point.resize", function (t) {
                        e.resize(t || window.event)
                    }), this.update()
                }
            }, e.prototype.stop = function () {
                return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
            }, e.prototype.resize = function (t) {
                var e = this;
                this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
                var i = this._extractPosition(t.detail.event);
                switch (this.parameters = {
                    type: this.el.type,
                    p: this.transformPoint(i.x, i.y),
                    x: t.detail.x,
                    y: t.detail.y,
                    box: this.el.bbox(),
                    rotation: this.el.transform().rotation
                }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i && (i = this.el.array().valueOf(), this.parameters.i = t.detail.i, this.parameters.pointCoords = [i[t.detail.i][0], i[t.detail.i][1]]), t.type) {
                    case"lt":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e);
                            if (0 < this.parameters.box.width - e[0] && 0 < this.parameters.box.height - e[1]) {
                                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + e[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - e[0]);
                                e = this.checkAspectRatio(e), this.el.move(this.parameters.box.x + e[0], this.parameters.box.y + e[1]).size(this.parameters.box.width - e[0], this.parameters.box.height - e[1])
                            }
                        };
                        break;
                    case"rt":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 2);
                            if (0 < this.parameters.box.width + e[0] && 0 < this.parameters.box.height - e[1]) {
                                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - e[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + e[0]);
                                e = this.checkAspectRatio(e, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + e[1]).size(this.parameters.box.width + e[0], this.parameters.box.height - e[1])
                            }
                        };
                        break;
                    case"rb":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 0);
                            if (0 < this.parameters.box.width + e[0] && 0 < this.parameters.box.height + e[1]) {
                                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - e[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + e[0]);
                                e = this.checkAspectRatio(e), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + e[0], this.parameters.box.height + e[1])
                            }
                        };
                        break;
                    case"lb":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 1);
                            if (0 < this.parameters.box.width - e[0] && 0 < this.parameters.box.height + e[1]) {
                                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + e[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - e[0]);
                                e = this.checkAspectRatio(e, !0), this.el.move(this.parameters.box.x + e[0], this.parameters.box.y).size(this.parameters.box.width - e[0], this.parameters.box.height + e[1])
                            }
                        };
                        break;
                    case"t":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 2);
                            0 < this.parameters.box.height - e[1] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x, this.parameters.box.y + e[1]).height(this.parameters.box.height - e[1])
                        };
                        break;
                    case"r":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 0);
                            0 < this.parameters.box.width + e[0] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + e[0])
                        };
                        break;
                    case"b":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 0);
                            0 < this.parameters.box.height + e[1] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + e[1])
                        };
                        break;
                    case"l":
                        this.calc = function (t, e) {
                            e = this.snapToGrid(t, e, 1);
                            0 < this.parameters.box.width - e[0] && "text" !== this.parameters.type && this.el.move(this.parameters.box.x + e[0], this.parameters.box.y).width(this.parameters.box.width - e[0])
                        };
                        break;
                    case"rot":
                        this.calc = function (t, e) {
                            var i = t + this.parameters.p.x, t = e + this.parameters.p.y,
                                e = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                i = Math.atan2(t - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2),
                                e = this.parameters.rotation + 180 * (i - e) / Math.PI + this.options.snapToAngle / 2;
                            this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(e - e % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
                        };
                        break;
                    case"point":
                        this.calc = function (t, e) {
                            t = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), e = this.el.array().valueOf();
                            e[this.parameters.i][0] = this.parameters.pointCoords[0] + t[0], e[this.parameters.i][1] = this.parameters.pointCoords[1] + t[1], this.el.plot(e)
                        }
                }
                this.el.fire("resizestart", {
                    dx: this.parameters.x,
                    dy: this.parameters.y,
                    event: t
                }), SVG.on(window, "touchmove.resize", function (t) {
                    e.update(t || window.event)
                }), SVG.on(window, "touchend.resize", function () {
                    e.done()
                }), SVG.on(window, "mousemove.resize", function (t) {
                    e.update(t || window.event)
                }), SVG.on(window, "mouseup.resize", function () {
                    e.done()
                })
            }, e.prototype.update = function (t) {
                var e, i;
                t ? (e = this._extractPosition(t), e = (i = this.transformPoint(e.x, e.y)).x - this.parameters.p.x, i = i.y - this.parameters.p.y, this.lastUpdateCall = [e, i], this.calc(e, i), this.el.fire("resizing", {
                    dx: e,
                    dy: i,
                    event: t
                })) : this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
            }, e.prototype.done = function () {
                this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
            }, e.prototype.snapToGrid = function (t, e, i, a) {
                var s = void 0 !== a ? [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : [(this.parameters.box.x + t + (1 & (i = null == i ? 3 : i) ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid];
                return t < 0 && (s[0] -= this.options.snapToGrid), e < 0 && (s[1] -= this.options.snapToGrid), t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a)
            }, e.prototype.constraintToBox = function (t, e, i, a) {
                var s, o = this.options.constraint || {},
                    i = void 0 !== a ? (s = i, a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height));
                return void 0 !== o.minX && s + t < o.minX && (t = o.minX - s), void 0 !== o.maxX && s + t > o.maxX && (t = o.maxX - s), void 0 !== o.minY && i + e < o.minY && (e = o.minY - i), [t, e = void 0 !== o.maxY && i + e > o.maxY ? o.maxY - i : e]
            }, e.prototype.checkAspectRatio = function (t, e) {
                if (!this.options.saveAspectRatio) return t;
                var i = t.slice(), a = this.parameters.box.width / this.parameters.box.height,
                    s = this.parameters.box.width + t[0], o = this.parameters.box.height - t[1], t = s / o;
                return t < a ? (i[1] = s / a - this.parameters.box.height, e && (i[1] = -i[1])) : a < t && (i[0] = this.parameters.box.width - o * a, e && (i[0] = -i[0])), i
            }, SVG.extend(SVG.Element, {
                resize: function (t) {
                    return (this.remember("_resizeHandler") || new e(this)).init(t || {}), this
                }
            }), SVG.Element.prototype.resize.defaults = {
                snapToAngle: .1,
                snapToGrid: 1,
                constraint: {},
                saveAspectRatio: !1
            }
        }.call(this)
    }(), void 0 === window.Apex && (window.Apex = {});
    var ei = (o(oi, [{
        key: "initModules", value: function () {
            this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new S(this.ctx), this.ctx.axes = new ot(this.ctx), this.ctx.core = new Ge(this.ctx.el, this.ctx), this.ctx.config = new j({}), this.ctx.data = new Z(this.ctx), this.ctx.grid = new tt(this.ctx), this.ctx.graphics = new I(this.ctx), this.ctx.coreUtils = new P(this.ctx), this.ctx.crosshairs = new rt(this.ctx), this.ctx.events = new t(this.ctx), this.ctx.exports = new Q(this.ctx), this.ctx.localization = new st(this.ctx), this.ctx.options = new E, this.ctx.responsive = new nt(this.ctx), this.ctx.series = new O(this.ctx), this.ctx.theme = new lt(this.ctx), this.ctx.formatters = new $(this.ctx), this.ctx.titleSubtitle = new ht(this.ctx), this.ctx.legend = new xt(this.ctx), this.ctx.toolbar = new bt(this.ctx), this.ctx.dimensions = new pt(this.ctx), this.ctx.updateHelpers = new _e(this.ctx), this.ctx.zoomPanSelection = new mt(this.ctx), this.ctx.w.globals.tooltip = new Ct(this.ctx)
        }
    }]), oi), ii = (o(si, [{
        key: "clear", value: function (t) {
            t = t.isUpdating;
            this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({isUpdating: t})
        }
    }, {
        key: "killSVG", value: function (t) {
            t.each(function (t, e) {
                this.removeClass("*"), this.off(), this.stop()
            }, !0), t.ungroup(), t.clear()
        }
    }, {
        key: "clearDomElements", value: function (t) {
            var e = this, i = t.isUpdating, t = this.w.globals.dom.Paper.node;
            t.parentNode && t.parentNode.parentNode && !i && (t.parentNode.parentNode.style.minHeight = "unset");
            var a = this.w.globals.dom.baseEl;
            a && this.ctx.eventList.forEach(function (t) {
                a.removeEventListener(t, e.ctx.events.documentEvent)
            });
            t = this.w.globals.dom;
            if (null !== this.ctx.el) for (; this.ctx.el.firstChild;) this.ctx.el.removeChild(this.ctx.el.firstChild);
            this.killSVG(t.Paper), t.Paper.remove(), t.elWrap = null, t.elGraphical = null, t.elAnnotations = null, t.elLegendWrap = null, t.baseEl = null, t.elGridRect = null, t.elGridRectMask = null, t.elGridRectMarkerMask = null, t.elForecastMask = null, t.elNonForecastMask = null, t.elDefs = null
        }
    }]), si), ai = new WeakMap;

    function si(t) {
        s(this, si), this.ctx = t, this.w = t.w
    }

    function oi(t) {
        s(this, oi), this.ctx = t, this.w = t.w
    }

    return o(ri, [{
        key: "render", value: function () {
            var d = this;
            return new Promise(function (t, e) {
                if (null !== d.el) {
                    void 0 === Apex._chartInstances && (Apex._chartInstances = []), d.w.config.chart.id && Apex._chartInstances.push({
                        id: d.w.globals.chartID,
                        group: d.w.config.chart.group,
                        chart: d
                    }), d.setLocale(d.w.config.chart.defaultLocale);
                    var i, a, s, o = d.w.config.chart.events.beforeMount;
                    "function" == typeof o && o(d, d.w), d.events.fireEvent("beforeMount", [d, d.w]), window.addEventListener("resize", d.windowResizeHandler), n = d.el.parentNode, l = d.parentResizeHandler, h = !1, c = new ResizeObserver(function (t) {
                        h && l.call(n, t), h = !0
                    }), n.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(n.children).forEach(function (t) {
                        return c.observe(t)
                    }) : c.observe(n), ai.set(l, c), d.css || (i = d.el.getRootNode && d.el.getRootNode(), a = T.is("ShadowRoot", i), o = (s = d.el.ownerDocument).getElementById("apexcharts-css"), !a && o || (d.css = document.createElement("style"), d.css.id = "apexcharts-css", d.css.textContent = '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}', a ? i.prepend(d.css) : s.head.appendChild(d.css)));
                    var r = d.create(d.w.config.series, {});
                    if (!r) return t(d);
                    d.mount(r).then(function () {
                        "function" == typeof d.w.config.chart.events.mounted && d.w.config.chart.events.mounted(d, d.w), d.events.fireEvent("mounted", [d, d.w]), t(r)
                    }).catch(function (t) {
                        e(t)
                    })
                } else e(new Error("Element not found"));
                var n, l, h, c
            })
        }
    }, {
        key: "create", value: function (t, e) {
            var i = this.w;
            new ei(this).initModules();
            var a = this.w.globals;
            if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new _(i.config).convertCatToNumericXaxis(i.config, this.ctx), null === this.el) return a.animationEnded = !0, null;
            if (this.core.setupElements(), "treemap" === i.config.chart.type && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), 0 === a.svgWidth) return a.animationEnded = !0, null;
            e = P.checkComboSeries(t);
            a.comboCharts = e.comboCharts, a.comboBarCount = e.comboBarCount;
            e = t.every(function (t) {
                return t.data && 0 === t.data.length
            });
            0 !== t.length && !e || this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new R(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
            e = this.core.xySettings();
            this.grid.createGridMask();
            a = this.core.plotChartType(t, e), t = new D(this);
            t.bringForward(), i.config.dataLabels.background.enabled && t.dataLabelsBackground(), this.core.shiftGraphPosition();
            t = {
                plot: {
                    left: i.globals.translateX,
                    top: i.globals.translateY,
                    width: i.globals.gridWidth,
                    height: i.globals.gridHeight
                }
            };
            return {elGraph: a, xyRatios: e, elInner: i.globals.dom.elGraphical, dimensions: t}
        }
    }, {
        key: "mount", value: function () {
            var r = this, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, l = this, h = l.w;
            return new Promise(function (t, e) {
                if (null === l.el) return e(new Error("Not enough data to display or target element not found"));
                null !== n && !h.globals.allSeriesCollapsed || l.series.handleNoData(), "treemap" !== h.config.chart.type && l.axes.drawAxis(h.config.chart.type, n.xyRatios), l.grid = new tt(l);
                var i = l.grid.drawGrid();
                l.annotations = new Y(l), l.annotations.drawImageAnnos(), l.annotations.drawTextAnnos(), "back" === h.config.grid.position && i && h.globals.dom.elGraphical.add(i.el);
                var a, e = new K(r.ctx), s = new at(r.ctx);
                if (null !== i && (e.xAxisLabelCorrections(i.xAxisTickWidth), s.setYAxisTextAlignments(), h.config.yaxis.map(function (t, e) {
                    -1 === h.globals.ignoreYAxisIndexes.indexOf(e) && s.yAxisTitleRotate(e, t.opposite)
                })), "back" === h.config.annotations.position && (h.globals.dom.Paper.add(h.globals.dom.elAnnotations), l.annotations.drawAxesAnnotations()), Array.isArray(n.elGraph)) for (var o = 0; o < n.elGraph.length; o++) h.globals.dom.elGraphical.add(n.elGraph[o]); else h.globals.dom.elGraphical.add(n.elGraph);
                "front" === h.config.grid.position && i && h.globals.dom.elGraphical.add(i.el), "front" === h.config.xaxis.crosshairs.position && l.crosshairs.drawXCrosshairs(), "front" === h.config.yaxis[0].crosshairs.position && l.crosshairs.drawYCrosshairs(), "front" === h.config.annotations.position && (h.globals.dom.Paper.add(h.globals.dom.elAnnotations), l.annotations.drawAxesAnnotations()), h.globals.noData || (h.config.tooltip.enabled && !h.globals.noData && l.w.globals.tooltip.drawTooltip(n.xyRatios), h.globals.axisCharts && (h.globals.isXNumeric || h.config.xaxis.convertedCatToNumeric || h.globals.isRangeBar) ? (h.config.chart.zoom.enabled || h.config.chart.selection && h.config.chart.selection.enabled || h.config.chart.pan && h.config.chart.pan.enabled) && l.zoomPanSelection.init({xyRatios: n.xyRatios}) : (a = h.config.chart.toolbar.tools, ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function (t) {
                    a[t] = !1
                })), h.config.chart.toolbar.show && !h.globals.allSeriesCollapsed && l.toolbar.createToolbar()), 0 < h.globals.memory.methodsToExec.length && h.globals.memory.methodsToExec.forEach(function (t) {
                    t.method(t.params, !1, t.context)
                }), h.globals.axisCharts || h.globals.noData || l.core.resizeNonAxisCharts(), t(l)
            })
        }
    }, {
        key: "destroy", value: function () {
            var t, e;
            window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t = this.parentResizeHandler, (e = ai.get(t)) && (e.disconnect(), ai.delete(t));
            var i = this.w.config.chart.id;
            i && Apex._chartInstances.forEach(function (t, e) {
                t.id === T.escapeString(i) && Apex._chartInstances.splice(e, 1)
            }), new ii(this.ctx).clear({isUpdating: !1})
        }
    }, {
        key: "updateOptions", value: function (t) {
            var i = this, e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                a = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                o = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4], r = this.w;
            return r.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map(function (t, e) {
                return i.updateHelpers._extendSeries(t, e)
            })), this.updateHelpers.revertDefaultAxisMinMax()), (t = t.xaxis ? this.updateHelpers.forceXAxisUpdate(t) : t).yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), 0 < r.globals.collapsedSeriesIndices.length && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, e, a, s, o)
        }
    }, {
        key: "updateSeries", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i)
        }
    }, {
        key: "appendSeries", value: function (t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                a = this.w.config.series.slice();
            return a.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, e, i)
        }
    }, {
        key: "appendData", value: function (t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            this.w.globals.dataChanged = !0, this.series.getPreviousPaths();
            for (var i = this.w.config.series.slice(), a = 0; a < i.length; a++) if (null !== t[a] && void 0 !== t[a]) for (var s = 0; s < t[a].data.length; s++) i[a].data.push(t[a].data[s]);
            return this.w.config.series = i, e && (this.w.globals.initialSeries = T.clone(this.w.config.series)), this.update()
        }
    }, {
        key: "update", value: function (a) {
            var s = this;
            return new Promise(function (t, e) {
                new ii(s.ctx).clear({isUpdating: !0});
                var i = s.create(s.w.config.series, a);
                if (!i) return t(s);
                s.mount(i).then(function () {
                    "function" == typeof s.w.config.chart.events.updated && s.w.config.chart.events.updated(s, s.w), s.events.fireEvent("updated", [s, s.w]), s.w.globals.isDirty = !0, t(s)
                }).catch(function (t) {
                    e(t)
                })
            })
        }
    }, {
        key: "getSyncedCharts", value: function () {
            var t = this.getGroupedCharts(), e = [this];
            return t.length && (e = [], t.forEach(function (t) {
                e.push(t)
            })), e
        }
    }, {
        key: "getGroupedCharts", value: function () {
            var e = this;
            return Apex._chartInstances.filter(function (t) {
                if (t.group) return !0
            }).map(function (t) {
                return e.w.config.chart.group === t.group ? t.chart : e
            })
        }
    }, {
        key: "toggleSeries", value: function (t) {
            return this.series.toggleSeries(t)
        }
    }, {
        key: "highlightSeriesOnLegendHover", value: function (t, e) {
            return this.series.toggleSeriesOnHover(t, e)
        }
    }, {
        key: "showSeries", value: function (t) {
            this.series.showSeries(t)
        }
    }, {
        key: "hideSeries", value: function (t) {
            this.series.hideSeries(t)
        }
    }, {
        key: "resetSeries", value: function () {
            this.series.resetSeries(!(0 < arguments.length && void 0 !== arguments[0]) || arguments[0], !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])
        }
    }, {
        key: "addEventListener", value: function (t, e) {
            this.events.addEventListener(t, e)
        }
    }, {
        key: "removeEventListener", value: function (t, e) {
            this.events.removeEventListener(t, e)
        }
    }, {
        key: "addXaxisAnnotation", value: function (t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0, i = i ? i : this;
            i.annotations.addXaxisAnnotationExternal(t, e, i)
        }
    }, {
        key: "addYaxisAnnotation", value: function (t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0, i = i ? i : this;
            i.annotations.addYaxisAnnotationExternal(t, e, i)
        }
    }, {
        key: "addPointAnnotation", value: function (t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0, i = i ? i : this;
            i.annotations.addPointAnnotationExternal(t, e, i)
        }
    }, {
        key: "clearAnnotations", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0, t = t ? t : this;
            t.annotations.clearAnnotations(t)
        }
    }, {
        key: "removeAnnotation", value: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0, e = e ? e : this;
            e.annotations.removeAnnotation(e, t)
        }
    }, {
        key: "getChartArea", value: function () {
            return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
        }
    }, {
        key: "getSeriesTotalXRange", value: function (t, e) {
            return this.coreUtils.getSeriesTotalsXRange(t, e)
        }
    }, {
        key: "getHighestValueInSeries", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            return new it(this.ctx).getMinYMaxY(t).highestY
        }
    }, {
        key: "getLowestValueInSeries", value: function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            return new it(this.ctx).getMinYMaxY(t).lowestY
        }
    }, {
        key: "getSeriesTotal", value: function () {
            return this.w.globals.seriesTotals
        }
    }, {
        key: "toggleDataPointSelection", value: function (t, e) {
            return this.updateHelpers.toggleDataPointSelection(t, e)
        }
    }, {
        key: "zoomX", value: function (t, e) {
            this.ctx.toolbar.zoomUpdateOptions(t, e)
        }
    }, {
        key: "setLocale", value: function (t) {
            this.localization.setCurrentLocaleValues(t)
        }
    }, {
        key: "dataURI", value: function (t) {
            return new Q(this.ctx).dataURI(t)
        }
    }, {
        key: "paper", value: function () {
            return this.w.globals.dom.Paper
        }
    }, {
        key: "_parentResizeCallback", value: function () {
            this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize()
        }
    }, {
        key: "_windowResize", value: function () {
            var t = this;
            clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function () {
                t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update()
            }, 150)
        }
    }, {
        key: "_windowResizeHandler", value: function () {
            var t = this.w.config.chart.redrawOnWindowResize;
            (t = "function" == typeof t ? t() : t) && this._windowResize()
        }
    }], [{
        key: "getChartByID", value: function (t) {
            var e = T.escapeString(t), t = Apex._chartInstances.filter(function (t) {
                return t.id === e
            })[0];
            return t && t.chart
        }
    }, {
        key: "initOnLoad", value: function () {
            for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) new ri(t[e], JSON.parse(t[e].getAttribute("data-options"))).render()
        }
    }, {
        key: "exec", value: function (t, e) {
            var i = this.getChartByID(t);
            if (i) {
                i.w.globals.isExecCalled = !0;
                t = null;
                if (-1 !== i.publicMethods.indexOf(e)) {
                    for (var a = arguments.length, s = new Array(2 < a ? a - 2 : 0), o = 2; o < a; o++) s[o - 2] = arguments[o];
                    t = i[e].apply(i, s)
                }
                return t
            }
        }
    }, {
        key: "merge", value: function (t, e) {
            return T.extend(t, e)
        }
    }]), ri;

    function ri(t, e) {
        s(this, ri), this.opts = e, (this.ctx = this).w = new q(e).init(), this.el = t, this.w.globals.cuid = T.randomId(), this.w.globals.chartID = this.w.config.chart.id ? T.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new ei(this).initModules(), this.create = T.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this)
    }
});
