!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).Sweetalert2 = e());
})(this, function () {
  "use strict";
  function r(t) {
    return (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function a(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  function c(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function s() {
    return (s =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n,
            o = arguments[e];
          for (n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
      }).apply(this, arguments);
  }
  function u(t) {
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function l(t, e) {
    return (l =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function i(t, e, n) {
    return (i = d()
      ? Reflect.construct
      : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          o = new (Function.bind.apply(t, o))();
          return n && l(o, n.prototype), o;
        }).apply(null, arguments);
  }
  function p(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t)
      : e;
  }
  function f(t, e, n) {
    return (f =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            t = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = u(t));

              );
              return t;
            })(t, e);
            if (t) {
              e = Object.getOwnPropertyDescriptor(t, e);
              return e.get ? e.get.call(n) : e.value;
            }
          })(t, e, n || t);
  }
  function m(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function h(t) {
    return Array.prototype.slice.call(t);
  }
  function g(t, e) {
    (e = '"'
      .concat(
        t,
        '" is deprecated and will be removed in the next major release. Please use "'
      )
      .concat(e, '" instead.')),
      -1 === ct.indexOf(e) && (ct.push(e), rt(e));
  }
  function b(t, e) {
    "function" == typeof t && t(e);
  }
  function v(t) {
    return "function" == typeof t ? t() : t;
  }
  function y(t) {
    return t && "function" == typeof t.toPromise;
  }
  function w(t) {
    return y(t) ? t.toPromise() : Promise.resolve(t);
  }
  function C(t) {
    return t && Promise.resolve(t) === t;
  }
  function k(t) {
    return t instanceof Element || ("object" === r((t = t)) && t.jquery);
  }
  function A() {
    return document.body.querySelector(".".concat(lt.container));
  }
  function e(t) {
    var e = A();
    return e ? e.querySelector(t) : null;
  }
  function t(t) {
    return e(".".concat(t));
  }
  function x() {
    return t(lt.popup);
  }
  function B() {
    return t(lt.icon);
  }
  function P() {
    return t(lt.title);
  }
  function E() {
    return t(lt["html-container"]);
  }
  function S() {
    return t(lt.image);
  }
  function n() {
    return t(lt["progress-steps"]);
  }
  function O() {
    return t(lt["validation-message"]);
  }
  function T() {
    return e(".".concat(lt.actions, " .").concat(lt.confirm));
  }
  function L() {
    return e(".".concat(lt.actions, " .").concat(lt.deny));
  }
  function j() {
    return e(".".concat(lt.loader));
  }
  function M() {
    return e(".".concat(lt.actions, " .").concat(lt.cancel));
  }
  function D() {
    return t(lt.actions);
  }
  function I() {
    return t(lt.footer);
  }
  function q() {
    return t(lt["timer-progress-bar"]);
  }
  function H() {
    return t(lt.close);
  }
  function V() {
    var t = h(
        x().querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        )
      ).sort(function (t, e) {
        return (
          (t = parseInt(t.getAttribute("tabindex"))),
          (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
        );
      }),
      e = h(
        x().querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        )
      ).filter(function (t) {
        return "-1" !== t.getAttribute("tabindex");
      });
    return (function (t) {
      for (var e = [], n = 0; n < t.length; n++)
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      return e;
    })(t.concat(e)).filter(function (t) {
      return bt(t);
    });
  }
  function N() {
    return !pt() && !document.body.classList.contains(lt["no-backdrop"]);
  }
  function R(e, t) {
    (e.textContent = ""),
      t &&
        ((t = new DOMParser().parseFromString(t, "text/html")),
        h(t.querySelector("head").childNodes).forEach(function (t) {
          e.appendChild(t);
        }),
        h(t.querySelector("body").childNodes).forEach(function (t) {
          e.appendChild(t);
        }));
  }
  function F(t, e) {
    if (e) {
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
        if (!t.classList.contains(n[o])) return;
      return 1;
    }
  }
  function U(t, e, n) {
    var o, i;
    if (
      ((i = e),
      h((o = t).classList).forEach(function (t) {
        -1 === Object.values(lt).indexOf(t) &&
          -1 === Object.values(dt).indexOf(t) &&
          -1 === Object.values(i.showClass).indexOf(t) &&
          o.classList.remove(t);
      }),
      e.customClass && e.customClass[n])
    ) {
      if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach)
        return rt(
          "Invalid type of customClass."
            .concat(n, '! Expected string or iterable object, got "')
            .concat(r(e.customClass[n]), '"')
        );
      mt(t, e.customClass[n]);
    }
  }
  function _(t, e) {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return gt(t, lt[e]);
      case "checkbox":
        return t.querySelector(".".concat(lt.checkbox, " input"));
      case "radio":
        return (
          t.querySelector(".".concat(lt.radio, " input:checked")) ||
          t.querySelector(".".concat(lt.radio, " input:first-child"))
        );
      case "range":
        return t.querySelector(".".concat(lt.range, " input"));
      default:
        return gt(t, lt.input);
    }
  }
  function z(t) {
    var e;
    t.focus(),
      "file" !== t.type && ((e = t.value), (t.value = ""), (t.value = e));
  }
  function W(t, e, n) {
    t &&
      e &&
      (e = "string" == typeof e ? e.split(/\s+/).filter(Boolean) : e).forEach(
        function (e) {
          t.forEach
            ? t.forEach(function (t) {
                n ? t.classList.add(e) : t.classList.remove(e);
              })
            : n
            ? t.classList.add(e)
            : t.classList.remove(e);
        }
      );
  }
  function K(t, e, n) {
    (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n)
      ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
      : t.style.removeProperty(e);
  }
  function Y(t) {
    t.style.display =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
  }
  function Z(t) {
    t.style.display = "none";
  }
  function J(t, e, n, o) {
    (e = t.querySelector(e)) && (e.style[n] = o);
  }
  function $(t, e, n) {
    e ? Y(t, n) : Z(t);
  }
  function X(t) {
    return !!(t.scrollHeight > t.clientHeight);
  }
  function G(t) {
    var e = window.getComputedStyle(t),
      t = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      e = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return 0 < t || 0 < e;
  }
  function Q(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = q();
    bt(n) &&
      (e && ((n.style.transition = "none"), (n.style.width = "100%")),
      setTimeout(function () {
        (n.style.transition = "width ".concat(t / 1e3, "s linear")),
          (n.style.width = "0%");
      }, 10));
  }
  function tt() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }
  function et() {
    Bn.isVisible() && Bn.resetValidationMessage();
  }
  function nt(t, e) {
    t instanceof HTMLElement
      ? e.appendChild(t)
      : "object" === r(t)
      ? wt(t, e)
      : t && R(e, t);
  }
  function ot(t, e) {
    var n = D(),
      o = j(),
      i = T(),
      r = L(),
      a = M();
    e.showConfirmButton || e.showDenyButton || e.showCancelButton || Z(n),
      U(n, e, "actions"),
      At(i, "confirm", e),
      At(r, "deny", e),
      At(a, "cancel", e),
      (function (t, e, n, o) {
        if (!o.buttonsStyling) return ht([t, e, n], lt.styled);
        mt([t, e, n], lt.styled),
          o.confirmButtonColor &&
            ((t.style.backgroundColor = o.confirmButtonColor),
            mt(t, lt["default-outline"]));
        o.denyButtonColor &&
          ((e.style.backgroundColor = o.denyButtonColor),
          mt(e, lt["default-outline"]));
        o.cancelButtonColor &&
          ((n.style.backgroundColor = o.cancelButtonColor),
          mt(n, lt["default-outline"]));
      })(i, r, a, e),
      e.reverseButtons &&
        (n.insertBefore(a, o), n.insertBefore(r, o), n.insertBefore(i, o)),
      R(o, e.loaderHtml),
      U(o, e, "loader");
  }
  var it = "SweetAlert2:",
    rt = function (t) {
      console.warn(
        "".concat(it, " ").concat("object" === r(t) ? t.join(" ") : t)
      );
    },
    at = function (t) {
      console.error("".concat(it, " ").concat(t));
    },
    ct = [],
    st = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    ut = function (t) {
      var e,
        n = {};
      for (e in t) n[t[e]] = "swal2-" + t[e];
      return n;
    },
    lt = ut([
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ]),
    dt = ut(["success", "warning", "info", "question", "error"]),
    pt = function () {
      return document.body.classList.contains(lt["toast-shown"]);
    },
    ft = { previousBodyPadding: null },
    mt = function (t, e) {
      W(t, e, !0);
    },
    ht = function (t, e) {
      W(t, e, !1);
    },
    gt = function (t, e) {
      for (var n = 0; n < t.childNodes.length; n++)
        if (F(t.childNodes[n], e)) return t.childNodes[n];
    },
    bt = function (t) {
      return !(
        !t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
      );
    },
    vt = '\n <div aria-labelledby="'
      .concat(lt.title, '" aria-describedby="')
      .concat(lt["html-container"], '" class="')
      .concat(lt.popup, '" tabindex="-1">\n   <button type="button" class="')
      .concat(lt.close, '"></button>\n   <ul class="')
      .concat(lt["progress-steps"], '"></ul>\n   <div class="')
      .concat(lt.icon, '"></div>\n   <img class="')
      .concat(lt.image, '" />\n   <h2 class="')
      .concat(lt.title, '" id="')
      .concat(lt.title, '"></h2>\n   <div class="')
      .concat(lt["html-container"], '"></div>\n   <input class="')
      .concat(lt.input, '" />\n   <input type="file" class="')
      .concat(lt.file, '" />\n   <div class="')
      .concat(
        lt.range,
        '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
      )
      .concat(lt.select, '"></select>\n   <div class="')
      .concat(lt.radio, '"></div>\n   <label for="')
      .concat(lt.checkbox, '" class="')
      .concat(
        lt.checkbox,
        '">\n     <input type="checkbox" />\n     <span class="'
      )
      .concat(lt.label, '"></span>\n   </label>\n   <textarea class="')
      .concat(lt.textarea, '"></textarea>\n   <div class="')
      .concat(lt["validation-message"], '" id="')
      .concat(lt["validation-message"], '"></div>\n   <div class="')
      .concat(lt.actions, '">\n     <div class="')
      .concat(lt.loader, '"></div>\n     <button type="button" class="')
      .concat(lt.confirm, '"></button>\n     <button type="button" class="')
      .concat(lt.deny, '"></button>\n     <button type="button" class="')
      .concat(lt.cancel, '"></button>\n   </div>\n   <div class="')
      .concat(lt.footer, '"></div>\n   <div class="')
      .concat(lt["timer-progress-bar-container"], '">\n     <div class="')
      .concat(lt["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
      .replace(/(^|\n)\s*/g, ""),
    yt = function (t) {
      var e,
        n,
        o,
        i,
        r,
        a =
          !!(i = A()) &&
          (i.remove(),
          ht(
            [document.documentElement, document.body],
            [lt["no-backdrop"], lt["toast-shown"], lt["has-column"]]
          ),
          !0);
      tt()
        ? at("SweetAlert2 requires document to initialize")
        : (((r = document.createElement("div")).className = lt.container),
          a && mt(r, lt["no-transition"]),
          R(r, vt),
          (i =
            "string" == typeof (e = t.target)
              ? document.querySelector(e)
              : e).appendChild(r),
          (a = t),
          (e = x()).setAttribute("role", a.toast ? "alert" : "dialog"),
          e.setAttribute("aria-live", a.toast ? "polite" : "assertive"),
          a.toast || e.setAttribute("aria-modal", "true"),
          (r = i),
          "rtl" === window.getComputedStyle(r).direction && mt(A(), lt.rtl),
          (t = x()),
          (a = gt(t, lt.input)),
          (e = gt(t, lt.file)),
          (n = t.querySelector(".".concat(lt.range, " input"))),
          (o = t.querySelector(".".concat(lt.range, " output"))),
          (i = gt(t, lt.select)),
          (r = t.querySelector(".".concat(lt.checkbox, " input"))),
          (t = gt(t, lt.textarea)),
          (a.oninput = et),
          (e.onchange = et),
          (i.onchange = et),
          (r.onchange = et),
          (t.oninput = et),
          (n.oninput = function () {
            et(), (o.value = n.value);
          }),
          (n.onchange = function () {
            et(), (n.nextSibling.value = n.value);
          }));
    },
    wt = function (t, e) {
      t.jquery ? Ct(e, t) : R(e, t.toString());
    },
    Ct = function (t, e) {
      if (((t.textContent = ""), 0 in e))
        for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
      else t.appendChild(e.cloneNode(!0));
    },
    kt = (function () {
      if (tt()) return !1;
      var t,
        e = document.createElement("div"),
        n = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend",
        };
      for (t in n)
        if (Object.prototype.hasOwnProperty.call(n, t) && void 0 !== e.style[t])
          return n[t];
      return !1;
    })();
  function At(t, e, n) {
    $(t, n["show".concat(m(e), "Button")], "inline-block"),
      R(t, n["".concat(e, "ButtonText")]),
      t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]),
      (t.className = lt[e]),
      U(t, n, "".concat(e, "Button")),
      mt(t, n["".concat(e, "ButtonClass")]);
  }
  function xt(t, e) {
    var n,
      o,
      i = A();
    i &&
      ((o = i),
      "string" == typeof (n = e.backdrop)
        ? (o.style.background = n)
        : n || mt([document.documentElement, document.body], lt["no-backdrop"]),
      !e.backdrop &&
        e.allowOutsideClick &&
        rt(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        ),
      (o = i),
      (n = e.position) in lt
        ? mt(o, lt[n])
        : (rt('The "position" parameter is not valid, defaulting to "center"'),
          mt(o, lt.center)),
      (n = i),
      !(o = e.grow) ||
        "string" != typeof o ||
        ((o = "grow-".concat(o)) in lt && mt(n, lt[o])),
      U(i, e, "container"));
  }
  function Bt(t, e) {
    (t.placeholder && !e.inputPlaceholder) ||
      (t.placeholder = e.inputPlaceholder);
  }
  function Pt(t, e, n) {
    var o, i;
    n.inputLabel &&
      ((t.id = lt.input),
      (o = document.createElement("label")),
      (i = lt["input-label"]),
      o.setAttribute("for", t.id),
      (o.className = i),
      mt(o, n.customClass.inputLabel),
      (o.innerText = n.inputLabel),
      e.insertAdjacentElement("beforebegin", o));
  }
  var Et = {
      promise: new WeakMap(),
      innerParams: new WeakMap(),
      domCache: new WeakMap(),
    },
    St = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    Ot = function (t) {
      if (!Mt[t.input])
        return at(
          'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
            t.input,
            '"'
          )
        );
      var e = jt(t.input),
        n = Mt[t.input](e, t);
      Y(n),
        setTimeout(function () {
          z(n);
        });
    },
    Tt = function (t, e) {
      var n = _(x(), t);
      if (n)
        for (var o in (!(function (t) {
          for (var e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            -1 === ["type", "value", "style"].indexOf(n) &&
              t.removeAttribute(n);
          }
        })(n),
        e))
          n.setAttribute(o, e[o]);
    },
    Lt = function (t) {
      var e = jt(t.input);
      t.customClass && mt(e, t.customClass.input);
    },
    jt = function (t) {
      t = lt[t] || lt.input;
      return gt(x(), t);
    },
    Mt = {};
  (Mt.text =
    Mt.email =
    Mt.password =
    Mt.number =
    Mt.tel =
    Mt.url =
      function (t, e) {
        return (
          "string" == typeof e.inputValue || "number" == typeof e.inputValue
            ? (t.value = e.inputValue)
            : C(e.inputValue) ||
              rt(
                'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                  r(e.inputValue),
                  '"'
                )
              ),
          Pt(t, t, e),
          Bt(t, e),
          (t.type = e.input),
          t
        );
      }),
    (Mt.file = function (t, e) {
      return Pt(t, t, e), Bt(t, e), t;
    }),
    (Mt.range = function (t, e) {
      var n = t.querySelector("input"),
        o = t.querySelector("output");
      return (
        (n.value = e.inputValue),
        (n.type = e.input),
        (o.value = e.inputValue),
        Pt(n, t, e),
        t
      );
    }),
    (Mt.select = function (t, e) {
      var n;
      return (
        (t.textContent = ""),
        e.inputPlaceholder &&
          ((n = document.createElement("option")),
          R(n, e.inputPlaceholder),
          (n.value = ""),
          (n.disabled = !0),
          (n.selected = !0),
          t.appendChild(n)),
        Pt(t, t, e),
        t
      );
    }),
    (Mt.radio = function (t) {
      return (t.textContent = ""), t;
    }),
    (Mt.checkbox = function (t, e) {
      var n = _(x(), "checkbox");
      (n.value = 1), (n.id = lt.checkbox), (n.checked = Boolean(e.inputValue));
      n = t.querySelector("span");
      return R(n, e.inputPlaceholder), t;
    }),
    (Mt.textarea = function (e, t) {
      (e.value = t.inputValue), Bt(e, t), Pt(e, e, t);
      var n;
      return (
        "MutationObserver" in window &&
          ((n = parseInt(window.getComputedStyle(x()).width)),
          new MutationObserver(function () {
            var t,
              t =
                e.offsetWidth +
                ((t = e),
                parseInt(window.getComputedStyle(t).marginLeft) +
                  parseInt(window.getComputedStyle(t).marginRight));
            x().style.width = n < t ? "".concat(t, "px") : null;
          }).observe(e, { attributes: !0, attributeFilter: ["style"] })),
        e
      );
    });
  function Dt(t, e) {
    var o,
      i,
      r,
      n = E();
    U(n, e, "htmlContainer"),
      e.html
        ? (nt(e.html, n), Y(n, "block"))
        : e.text
        ? ((n.textContent = e.text), Y(n, "block"))
        : Z(n),
      (t = t),
      (o = e),
      (i = x()),
      (t = Et.innerParams.get(t)),
      (r = !t || o.input !== t.input),
      St.forEach(function (t) {
        var e = lt[t],
          n = gt(i, e);
        Tt(t, o.inputAttributes), (n.className = e), r && Z(n);
      }),
      o.input && (r && Ot(o), Lt(o));
  }
  function It(t, o) {
    var i = n();
    if (!o.progressSteps || 0 === o.progressSteps.length) return Z(i), 0;
    Y(i),
      (i.textContent = ""),
      o.currentProgressStep >= o.progressSteps.length &&
        rt(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      o.progressSteps.forEach(function (t, e) {
        var n,
          t =
            ((n = t),
            (t = document.createElement("li")),
            mt(t, lt["progress-step"]),
            R(t, n),
            t);
        i.appendChild(t),
          e === o.currentProgressStep && mt(t, lt["active-progress-step"]),
          e !== o.progressSteps.length - 1 &&
            ((t = o),
            (e = document.createElement("li")),
            mt(e, lt["progress-step-line"]),
            t.progressStepsDistance &&
              (e.style.width = t.progressStepsDistance),
            i.appendChild(e));
      });
  }
  function qt(t, e) {
    var n, o, i;
    (n = e),
      (i = A()),
      (o = x()),
      n.toast
        ? (K(i, "width", n.width),
          (o.style.width = "100%"),
          o.insertBefore(j(), B()))
        : K(o, "width", n.width),
      K(o, "padding", n.padding),
      n.background && (o.style.background = n.background),
      Z(O()),
      _t(o, n),
      xt(0, e),
      It(0, e),
      (i = t),
      (o = e),
      (n = Et.innerParams.get(i)),
      (i = B()),
      n && o.icon === n.icon
        ? (Rt(i, o), Vt(i, o))
        : o.icon || o.iconHtml
        ? o.icon && -1 === Object.keys(dt).indexOf(o.icon)
          ? (at(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                o.icon,
                '"'
              )
            ),
            Z(i))
          : (Y(i), Rt(i, o), Vt(i, o), mt(i, o.showClass.icon))
        : Z(i),
      (function (t) {
        var e = S();
        if (!t.imageUrl) return Z(e);
        Y(e, ""),
          e.setAttribute("src", t.imageUrl),
          e.setAttribute("alt", t.imageAlt),
          K(e, "width", t.imageWidth),
          K(e, "height", t.imageHeight),
          (e.className = lt.image),
          U(e, t, "image");
      })(e),
      (o = e),
      (i = P()),
      $(i, o.title || o.titleText, "block"),
      o.title && nt(o.title, i),
      o.titleText && (i.innerText = o.titleText),
      U(i, o, "title"),
      (i = e),
      (o = H()),
      R(o, i.closeButtonHtml),
      U(o, i, "closeButton"),
      $(o, i.showCloseButton),
      o.setAttribute("aria-label", i.closeButtonAriaLabel),
      Dt(t, e),
      ot(0, e),
      (i = e),
      (t = I()),
      $(t, i.footer),
      i.footer && nt(i.footer, t),
      U(t, i, "footer"),
      b(e.didRender, x());
  }
  function Ht() {
    return T() && T().click();
  }
  var Vt = function (t, e) {
      for (var n in dt) e.icon !== n && ht(t, dt[n]);
      mt(t, dt[e.icon]), Ft(t, e), Nt(), U(t, e, "icon");
    },
    Nt = function () {
      for (
        var t = x(),
          e = window.getComputedStyle(t).getPropertyValue("background-color"),
          n = t.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          ),
          o = 0;
        o < n.length;
        o++
      )
        n[o].style.backgroundColor = e;
    },
    Rt = function (t, e) {
      (t.textContent = ""),
        e.iconHtml
          ? R(t, Ut(e.iconHtml))
          : "success" === e.icon
          ? R(
              t,
              '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
            )
          : "error" === e.icon
          ? R(
              t,
              '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
            )
          : R(t, Ut({ question: "?", warning: "!", info: "i" }[e.icon]));
    },
    Ft = function (t, e) {
      if (e.iconColor) {
        (t.style.color = e.iconColor), (t.style.borderColor = e.iconColor);
        for (
          var n = 0,
            o = [
              ".swal2-success-line-tip",
              ".swal2-success-line-long",
              ".swal2-x-mark-line-left",
              ".swal2-x-mark-line-right",
            ];
          n < o.length;
          n++
        )
          J(t, o[n], "backgroundColor", e.iconColor);
        J(t, ".swal2-success-ring", "borderColor", e.iconColor);
      }
    },
    Ut = function (t) {
      return '<div class="'
        .concat(lt["icon-content"], '">')
        .concat(t, "</div>");
    },
    _t = function (t, e) {
      (t.className = ""
        .concat(lt.popup, " ")
        .concat(bt(t) ? e.showClass.popup : "")),
        e.toast
          ? (mt([document.documentElement, document.body], lt["toast-shown"]),
            mt(t, lt.toast))
          : mt(t, lt.modal),
        U(t, e, "popup"),
        "string" == typeof e.customClass && mt(t, e.customClass),
        e.icon && mt(t, lt["icon-".concat(e.icon)]);
    };
  function zt(t) {
    (e = x()) || Bn.fire();
    var e = x(),
      n = j();
    pt() ? Z(B()) : Zt(e, t),
      Y(n),
      e.setAttribute("data-loading", !0),
      e.setAttribute("aria-busy", !0),
      e.focus();
  }
  function Wt(o) {
    return new Promise(function (t) {
      if (!o) return t();
      var e = window.scrollX,
        n = window.scrollY;
      (Jt.restoreFocusTimeout = setTimeout(function () {
        Jt.previousActiveElement && Jt.previousActiveElement.focus
          ? (Jt.previousActiveElement.focus(),
            (Jt.previousActiveElement = null))
          : document.body && document.body.focus(),
          t();
      }, 100)),
        window.scrollTo(e, n);
    });
  }
  function Kt() {
    if (Jt.timeout)
      return (
        (function () {
          var t = q(),
            e = parseInt(window.getComputedStyle(t).width);
          t.style.removeProperty("transition"), (t.style.width = "100%");
          var n = parseInt(window.getComputedStyle(t).width),
            n = parseInt((e / n) * 100);
          t.style.removeProperty("transition"),
            (t.style.width = "".concat(n, "%"));
        })(),
        Jt.timeout.stop()
      );
  }
  function Yt() {
    if (Jt.timeout) {
      var t = Jt.timeout.start();
      return Q(t), t;
    }
  }
  var Zt = function (t, e) {
      var n = D(),
        o = j();
      !e && bt(T()) && (e = T()),
        Y(n),
        e && (Z(e), o.setAttribute("data-button-to-replace", e.className)),
        o.parentNode.insertBefore(o, e),
        mt([t, n], lt.loading);
    },
    Jt = {},
    $t = !1,
    Xt = {};
  function Gt(t) {
    for (var e = t.target; e && e !== document; e = e.parentNode)
      for (var n in Xt) {
        var o = e.getAttribute(n);
        if (o) return void Xt[n].fire({ template: o });
      }
  }
  function Qt(t) {
    return Object.prototype.hasOwnProperty.call(ne, t);
  }
  function te(t) {
    return ie[t];
  }
  function ee(t) {
    for (var e in t)
      Qt((n = e)) || rt('Unknown parameter "'.concat(n, '"')),
        t.toast &&
          ((n = e),
          -1 !== re.indexOf(n) &&
            rt('The parameter "'.concat(n, '" is incompatible with toasts'))),
        te((e = e)) && g(e, te(e));
    var n;
  }
  var ne = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    oe = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    ie = {},
    re = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    ae = Object.freeze({
      isValidParameter: Qt,
      isUpdatableParameter: function (t) {
        return -1 !== oe.indexOf(t);
      },
      isDeprecatedParameter: te,
      argsToParams: function (n) {
        var o = {};
        return (
          "object" !== r(n[0]) || k(n[0])
            ? ["title", "html", "icon"].forEach(function (t, e) {
                e = n[e];
                "string" == typeof e || k(e)
                  ? (o[t] = e)
                  : void 0 !== e &&
                    at(
                      "Unexpected type of "
                        .concat(t, '! Expected "string" or "Element", got ')
                        .concat(r(e))
                    );
              })
            : s(o, n[0]),
          o
        );
      },
      isVisible: function () {
        return bt(x());
      },
      clickConfirm: Ht,
      clickDeny: function () {
        return L() && L().click();
      },
      clickCancel: function () {
        return M() && M().click();
      },
      getContainer: A,
      getPopup: x,
      getTitle: P,
      getHtmlContainer: E,
      getImage: S,
      getIcon: B,
      getInputLabel: function () {
        return t(lt["input-label"]);
      },
      getCloseButton: H,
      getActions: D,
      getConfirmButton: T,
      getDenyButton: L,
      getCancelButton: M,
      getLoader: j,
      getFooter: I,
      getTimerProgressBar: q,
      getFocusableElements: V,
      getValidationMessage: O,
      isLoading: function () {
        return x().hasAttribute("data-loading");
      },
      fire: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return i(this, e);
      },
      mixin: function (r) {
        return (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && l(t, e);
          })(i, t);
          var n,
            o,
            e =
              ((n = i),
              (o = d()),
              function () {
                var t,
                  e = u(n);
                return p(
                  this,
                  o
                    ? ((t = u(this).constructor),
                      Reflect.construct(e, arguments, t))
                    : e.apply(this, arguments)
                );
              });
          function i() {
            return a(this, i), e.apply(this, arguments);
          }
          return (
            c(i, [
              {
                key: "_main",
                value: function (t, e) {
                  return f(u(i.prototype), "_main", this).call(
                    this,
                    t,
                    s({}, r, e)
                  );
                },
              },
            ]),
            i
          );
        })(this);
      },
      showLoading: zt,
      enableLoading: zt,
      getTimerLeft: function () {
        return Jt.timeout && Jt.timeout.getTimerLeft();
      },
      stopTimer: Kt,
      resumeTimer: Yt,
      toggleTimer: function () {
        var t = Jt.timeout;
        return t && (t.running ? Kt : Yt)();
      },
      increaseTimer: function (t) {
        if (Jt.timeout) {
          t = Jt.timeout.increase(t);
          return Q(t, !0), t;
        }
      },
      isTimerRunning: function () {
        return Jt.timeout && Jt.timeout.isRunning();
      },
      bindClickHandler: function () {
        (Xt[
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : "data-swal-template"
        ] = this),
          $t || (document.body.addEventListener("click", Gt), ($t = !0));
      },
    });
  function ce() {
    var t,
      e = Et.innerParams.get(this);
    e &&
      ((t = Et.domCache.get(this)),
      Z(t.loader),
      pt() ? e.icon && Y(B()) : se(t),
      ht([t.popup, t.actions], lt.loading),
      t.popup.removeAttribute("aria-busy"),
      t.popup.removeAttribute("data-loading"),
      (t.confirmButton.disabled = !1),
      (t.denyButton.disabled = !1),
      (t.cancelButton.disabled = !1));
  }
  function se(t) {
    var e = t.popup.getElementsByClassName(
      t.loader.getAttribute("data-button-to-replace")
    );
    e.length
      ? Y(e[0], "inline-block")
      : bt(T()) || bt(L()) || bt(M()) || Z(t.actions);
  }
  function ue() {
    null === ft.previousBodyPadding &&
      document.body.scrollHeight > window.innerHeight &&
      ((ft.previousBodyPadding = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = "".concat(
        ft.previousBodyPadding +
          (function () {
            var t = document.createElement("div");
            (t.className = lt["scrollbar-measure"]),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          })(),
        "px"
      )));
  }
  var le = function () {
      navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) ||
        (x().scrollHeight > window.innerHeight - 44 &&
          (A().style.paddingBottom = "".concat(44, "px")));
    },
    de = function () {
      var e,
        t = A();
      (t.ontouchstart = function (t) {
        e = pe(t);
      }),
        (t.ontouchmove = function (t) {
          e && (t.preventDefault(), t.stopPropagation());
        });
    },
    pe = function (t) {
      var e = t.target,
        n = A();
      return (
        !fe(t) &&
        !me(t) &&
        (e === n ||
          !(X(n) || "INPUT" === e.tagName || (X(E()) && E().contains(e))))
      );
    },
    fe = function (t) {
      return (
        t.touches && t.touches.length && "stylus" === t.touches[0].touchType
      );
    },
    me = function (t) {
      return t.touches && 1 < t.touches.length;
    },
    he = { swalPromiseResolve: new WeakMap() };
  function ge(t, e, n, o) {
    pt()
      ? Ce(t, o)
      : (Wt(n).then(function () {
          return Ce(t, o);
        }),
        Jt.keydownTarget.removeEventListener("keydown", Jt.keydownHandler, {
          capture: Jt.keydownListenerCapture,
        }),
        (Jt.keydownHandlerAdded = !1)),
      e.parentNode && e.remove(),
      N() &&
        (null !== ft.previousBodyPadding &&
          ((document.body.style.paddingRight = "".concat(
            ft.previousBodyPadding,
            "px"
          )),
          (ft.previousBodyPadding = null)),
        F(document.body, lt.iosfix) &&
          ((e = parseInt(document.body.style.top, 10)),
          ht(document.body, lt.iosfix),
          (document.body.style.top = ""),
          (document.body.scrollTop = -1 * e)),
        h(document.body.children).forEach(function (t) {
          t.hasAttribute("data-previous-aria-hidden")
            ? (t.setAttribute(
                "aria-hidden",
                t.getAttribute("data-previous-aria-hidden")
              ),
              t.removeAttribute("data-previous-aria-hidden"))
            : t.removeAttribute("aria-hidden");
        })),
      ht(
        [document.documentElement, document.body],
        [lt.shown, lt["height-auto"], lt["no-backdrop"], lt["toast-shown"]]
      );
  }
  function be(t) {
    var e,
      n,
      o,
      i = x();
    i &&
      ((t = ve(t)),
      (e = Et.innerParams.get(this)) &&
        !F(i, e.hideClass.popup) &&
        ((n = he.swalPromiseResolve.get(this)),
        ht(i, e.showClass.popup),
        mt(i, e.hideClass.popup),
        (o = A()),
        ht(o, e.showClass.backdrop),
        mt(o, e.hideClass.backdrop),
        ye(this, i, e),
        n(t)));
  }
  function ve(t) {
    return void 0 === t
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : s({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t);
  }
  function ye(t, e, n) {
    var o = A(),
      i = kt && G(e);
    b(n.willClose, e),
      i
        ? we(t, e, o, n.returnFocus, n.didClose)
        : ge(t, o, n.returnFocus, n.didClose);
  }
  var we = function (t, e, n, o, i) {
      (Jt.swalCloseEventFinishedCallback = ge.bind(null, t, n, o, i)),
        e.addEventListener(kt, function (t) {
          t.target === e &&
            (Jt.swalCloseEventFinishedCallback(),
            delete Jt.swalCloseEventFinishedCallback);
        });
    },
    Ce = function (t, e) {
      setTimeout(function () {
        b(e), t._destroy();
      });
    };
  function ke(t, e, n) {
    var o = Et.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }
  function Ae(t, e) {
    if (!t) return !1;
    if ("radio" === t.type)
      for (
        var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0;
        o < n.length;
        o++
      )
        n[o].disabled = e;
    else t.disabled = e;
  }
  var xe = (function () {
      function n(t, e) {
        a(this, n),
          (this.callback = t),
          (this.remaining = e),
          (this.running = !1),
          this.start();
      }
      return (
        c(n, [
          {
            key: "start",
            value: function () {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: "stop",
            value: function () {
              return (
                this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -= new Date() - this.started)),
                this.remaining
              );
            },
          },
          {
            key: "increase",
            value: function (t) {
              var e = this.running;
              return (
                e && this.stop(),
                (this.remaining += t),
                e && this.start(),
                this.remaining
              );
            },
          },
          {
            key: "getTimerLeft",
            value: function () {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            },
          },
          {
            key: "isRunning",
            value: function () {
              return this.running;
            },
          },
        ]),
        n
      );
    })(),
    Be = {
      email: function (t, e) {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid email address");
      },
      url: function (t, e) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
          t
        )
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid URL");
      },
    };
  function Pe(t) {
    var e, n;
    (e = t).inputValidator ||
      Object.keys(Be).forEach(function (t) {
        e.input === t && (e.inputValidator = Be[t]);
      }),
      t.showLoaderOnConfirm &&
        !t.preConfirm &&
        rt(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      ((n = t).target &&
        ("string" != typeof n.target || document.querySelector(n.target)) &&
        ("string" == typeof n.target || n.target.appendChild)) ||
        (rt('Target parameter is not valid, defaulting to "body"'),
        (n.target = "body")),
      "string" == typeof t.title &&
        (t.title = t.title.split("\n").join("<br />")),
      yt(t);
  }
  function Ee(t) {
    var e = A(),
      n = x();
    b(t.willOpen, n);
    var o = window.getComputedStyle(document.body).overflowY;
    Ue(e, n, t),
      setTimeout(function () {
        Re(e, n);
      }, 10),
      N() &&
        (Fe(e, t.scrollbarPadding, o),
        h(document.body.children).forEach(function (t) {
          t === A() ||
            t.contains(A()) ||
            (t.hasAttribute("aria-hidden") &&
              t.setAttribute(
                "data-previous-aria-hidden",
                t.getAttribute("aria-hidden")
              ),
            t.setAttribute("aria-hidden", "true"));
        })),
      pt() ||
        Jt.previousActiveElement ||
        (Jt.previousActiveElement = document.activeElement),
      setTimeout(function () {
        return b(t.didOpen, n);
      }),
      ht(e, lt["no-transition"]);
  }
  function Se(t) {
    var e = x();
    t.target === e &&
      ((t = A()), e.removeEventListener(kt, Se), (t.style.overflowY = "auto"));
  }
  function Oe(t, e) {
    t.closePopup({ isConfirmed: !0, value: e });
  }
  function Te(t, e, n) {
    var o = V();
    if (o.length)
      return (
        (e += n) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
        o[e].focus()
      );
    x().focus();
  }
  var Le = ["swal-title", "swal-html", "swal-footer"],
    je = function (t) {
      var n = {};
      return (
        h(t.querySelectorAll("swal-param")).forEach(function (t) {
          Ne(t, ["name", "value"]);
          var e = t.getAttribute("name"),
            t = t.getAttribute("value");
          "boolean" == typeof ne[e] && "false" === t && (t = !1),
            "object" === r(ne[e]) && (t = JSON.parse(t)),
            (n[e] = t);
        }),
        n
      );
    },
    Me = function (t) {
      var n = {};
      return (
        h(t.querySelectorAll("swal-button")).forEach(function (t) {
          Ne(t, ["type", "color", "aria-label"]);
          var e = t.getAttribute("type");
          (n["".concat(e, "ButtonText")] = t.innerHTML),
            (n["show".concat(m(e), "Button")] = !0),
            t.hasAttribute("color") &&
              (n["".concat(e, "ButtonColor")] = t.getAttribute("color")),
            t.hasAttribute("aria-label") &&
              (n["".concat(e, "ButtonAriaLabel")] =
                t.getAttribute("aria-label"));
        }),
        n
      );
    },
    De = function (t) {
      var e = {},
        t = t.querySelector("swal-image");
      return (
        t &&
          (Ne(t, ["src", "width", "height", "alt"]),
          t.hasAttribute("src") && (e.imageUrl = t.getAttribute("src")),
          t.hasAttribute("width") && (e.imageWidth = t.getAttribute("width")),
          t.hasAttribute("height") &&
            (e.imageHeight = t.getAttribute("height")),
          t.hasAttribute("alt") && (e.imageAlt = t.getAttribute("alt"))),
        e
      );
    },
    Ie = function (t) {
      var e = {},
        t = t.querySelector("swal-icon");
      return (
        t &&
          (Ne(t, ["type", "color"]),
          t.hasAttribute("type") && (e.icon = t.getAttribute("type")),
          t.hasAttribute("color") && (e.iconColor = t.getAttribute("color")),
          (e.iconHtml = t.innerHTML)),
        e
      );
    },
    qe = function (t) {
      var n = {},
        e = t.querySelector("swal-input");
      e &&
        (Ne(e, ["type", "label", "placeholder", "value"]),
        (n.input = e.getAttribute("type") || "text"),
        e.hasAttribute("label") && (n.inputLabel = e.getAttribute("label")),
        e.hasAttribute("placeholder") &&
          (n.inputPlaceholder = e.getAttribute("placeholder")),
        e.hasAttribute("value") && (n.inputValue = e.getAttribute("value")));
      t = t.querySelectorAll("swal-input-option");
      return (
        t.length &&
          ((n.inputOptions = {}),
          h(t).forEach(function (t) {
            Ne(t, ["value"]);
            var e = t.getAttribute("value"),
              t = t.innerHTML;
            n.inputOptions[e] = t;
          })),
        n
      );
    },
    He = function (t, e) {
      var n,
        o = {};
      for (n in e) {
        var i = e[n],
          r = t.querySelector(i);
        r && (Ne(r, []), (o[i.replace(/^swal-/, "")] = r.innerHTML.trim()));
      }
      return o;
    },
    Ve = function (t) {
      var e = Le.concat([
        "swal-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      h(t.children).forEach(function (t) {
        t = t.tagName.toLowerCase();
        -1 === e.indexOf(t) && rt("Unrecognized element <".concat(t, ">"));
      });
    },
    Ne = function (e, n) {
      h(e.attributes).forEach(function (t) {
        -1 === n.indexOf(t.name) &&
          rt([
            'Unrecognized attribute "'
              .concat(t.name, '" on <')
              .concat(e.tagName.toLowerCase(), ">."),
            "".concat(
              n.length
                ? "Allowed attributes are: ".concat(n.join(", "))
                : "To set the value, use HTML within the element."
            ),
          ]);
      });
    },
    Re = function (t, e) {
      kt && G(e)
        ? ((t.style.overflowY = "hidden"), e.addEventListener(kt, Se))
        : (t.style.overflowY = "auto");
    },
    Fe = function (t, e, n) {
      var o;
      ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)) &&
        !F(document.body, lt.iosfix) &&
        ((o = document.body.scrollTop),
        (document.body.style.top = "".concat(-1 * o, "px")),
        mt(document.body, lt.iosfix),
        de(),
        le()),
        e && "hidden" !== n && ue(),
        setTimeout(function () {
          t.scrollTop = 0;
        });
    },
    Ue = function (t, e, n) {
      mt(t, n.showClass.backdrop),
        e.style.setProperty("opacity", "0", "important"),
        Y(e, "grid"),
        setTimeout(function () {
          mt(e, n.showClass.popup), e.style.removeProperty("opacity");
        }, 10),
        mt([document.documentElement, document.body], lt.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          mt([document.documentElement, document.body], lt["height-auto"]);
    },
    _e = function (t) {
      return t.checked ? 1 : 0;
    },
    ze = function (t) {
      return t.checked ? t.value : null;
    },
    We = function (t) {
      return t.files.length
        ? null !== t.getAttribute("multiple")
          ? t.files
          : t.files[0]
        : null;
    },
    Ke = function (e, n) {
      function o(t) {
        return Ze[n.input](i, Je(t), n);
      }
      var i = x();
      y(n.inputOptions) || C(n.inputOptions)
        ? (zt(T()),
          w(n.inputOptions).then(function (t) {
            e.hideLoading(), o(t);
          }))
        : "object" === r(n.inputOptions)
        ? o(n.inputOptions)
        : at(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
              r(n.inputOptions)
            )
          );
    },
    Ye = function (e, n) {
      var o = e.getInput();
      Z(o),
        w(n.inputValue)
          .then(function (t) {
            (o.value =
              "number" === n.input ? parseFloat(t) || 0 : "".concat(t)),
              Y(o),
              o.focus(),
              e.hideLoading();
          })
          .catch(function (t) {
            at("Error in inputValue promise: ".concat(t)),
              (o.value = ""),
              Y(o),
              o.focus(),
              e.hideLoading();
          });
    },
    Ze = {
      select: function (t, e, i) {
        function o(t, e, n) {
          var o = document.createElement("option");
          (o.value = n),
            R(o, e),
            (o.selected = $e(n, i.inputValue)),
            t.appendChild(o);
        }
        var r = gt(t, lt.select);
        e.forEach(function (t) {
          var e,
            n = t[0],
            t = t[1];
          Array.isArray(t)
            ? (((e = document.createElement("optgroup")).label = n),
              (e.disabled = !1),
              r.appendChild(e),
              t.forEach(function (t) {
                return o(e, t[1], t[0]);
              }))
            : o(r, t, n);
        }),
          r.focus();
      },
      radio: function (t, e, i) {
        var r = gt(t, lt.radio);
        e.forEach(function (t) {
          var e = t[0],
            n = t[1],
            o = document.createElement("input"),
            t = document.createElement("label");
          (o.type = "radio"),
            (o.name = lt.radio),
            (o.value = e),
            $e(e, i.inputValue) && (o.checked = !0);
          e = document.createElement("span");
          R(e, n),
            (e.className = lt.label),
            t.appendChild(o),
            t.appendChild(e),
            r.appendChild(t);
        });
        e = r.querySelectorAll("input");
        e.length && e[0].focus();
      },
    },
    Je = function n(o) {
      var i = [];
      return (
        "undefined" != typeof Map && o instanceof Map
          ? o.forEach(function (t, e) {
              "object" === r(t) && (t = n(t)), i.push([e, t]);
            })
          : Object.keys(o).forEach(function (t) {
              var e = o[t];
              "object" === r(e) && (e = n(e)), i.push([t, e]);
            }),
        i
      );
    },
    $e = function (t, e) {
      return e && e.toString() === t.toString();
    },
    Xe = function (t, e, n) {
      var o = (function (t, e) {
        var n = t.getInput();
        if (!n) return null;
        switch (e.input) {
          case "checkbox":
            return _e(n);
          case "radio":
            return ze(n);
          case "file":
            return We(n);
          default:
            return e.inputAutoTrim ? n.value.trim() : n.value;
        }
      })(t, e);
      e.inputValidator
        ? Ge(t, e, o)
        : t.getInput().checkValidity()
        ? ("deny" === n ? Qe : tn)(t, e, o)
        : (t.enableButtons(), t.showValidationMessage(e.validationMessage));
    },
    Ge = function (e, n, o) {
      e.disableInput(),
        Promise.resolve()
          .then(function () {
            return w(n.inputValidator(o, n.validationMessage));
          })
          .then(function (t) {
            e.enableButtons(),
              e.enableInput(),
              t ? e.showValidationMessage(t) : tn(e, n, o);
          });
    },
    Qe = function (e, t, n) {
      t.showLoaderOnDeny && zt(L()),
        t.preDeny
          ? Promise.resolve()
              .then(function () {
                return w(t.preDeny(n, t.validationMessage));
              })
              .then(function (t) {
                !1 === t
                  ? e.hideLoading()
                  : e.closePopup({ isDenied: !0, value: void 0 === t ? n : t });
              })
          : e.closePopup({ isDenied: !0, value: n });
    },
    tn = function (e, t, n) {
      t.showLoaderOnConfirm && zt(),
        t.preConfirm
          ? (e.resetValidationMessage(),
            Promise.resolve()
              .then(function () {
                return w(t.preConfirm(n, t.validationMessage));
              })
              .then(function (t) {
                bt(O()) || !1 === t
                  ? e.hideLoading()
                  : Oe(e, void 0 === t ? n : t);
              }))
          : Oe(e, n);
    },
    en = ["ArrowRight", "ArrowDown"],
    nn = ["ArrowLeft", "ArrowUp"],
    on = function (t, e, n) {
      var o = Et.innerParams.get(t);
      o &&
        (o.stopKeydownPropagation && e.stopPropagation(),
        "Enter" === e.key
          ? rn(t, e, o)
          : "Tab" === e.key
          ? an(e, o)
          : -1 !== [].concat(en, nn).indexOf(e.key)
          ? cn(e.key)
          : "Escape" === e.key && sn(e, o, n));
    },
    rn = function (t, e, n) {
      e.isComposing ||
        (e.target &&
          t.getInput() &&
          e.target.outerHTML === t.getInput().outerHTML &&
          -1 === ["textarea", "file"].indexOf(n.input) &&
          (Ht(), e.preventDefault()));
    },
    an = function (t, e) {
      for (var n = t.target, o = V(), i = -1, r = 0; r < o.length; r++)
        if (n === o[r]) {
          i = r;
          break;
        }
      t.shiftKey ? Te(0, i, -1) : Te(0, i, 1),
        t.stopPropagation(),
        t.preventDefault();
    },
    cn = function (t) {
      -1 !== [T(), L(), M()].indexOf(document.activeElement) &&
        ((t =
          -1 !== en.indexOf(t)
            ? "nextElementSibling"
            : "previousElementSibling"),
        (t = document.activeElement[t]) && t.focus());
    },
    sn = function (t, e, n) {
      v(e.allowEscapeKey) && (t.preventDefault(), n(st.esc));
    },
    un = function (e, t, n) {
      t.popup.onclick = function () {
        var t = Et.innerParams.get(e);
        t.showConfirmButton ||
          t.showDenyButton ||
          t.showCancelButton ||
          t.showCloseButton ||
          t.timer ||
          t.input ||
          n(st.close);
      };
    },
    ln = !1,
    dn = function (e) {
      e.popup.onmousedown = function () {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = void 0),
            t.target === e.container && (ln = !0);
        };
      };
    },
    pn = function (e) {
      e.container.onmousedown = function () {
        e.popup.onmouseup = function (t) {
          (e.popup.onmouseup = void 0),
            (t.target !== e.popup && !e.popup.contains(t.target)) || (ln = !0);
        };
      };
    },
    fn = function (n, o, i) {
      o.container.onclick = function (t) {
        var e = Et.innerParams.get(n);
        ln
          ? (ln = !1)
          : t.target === o.container &&
            v(e.allowOutsideClick) &&
            i(st.backdrop);
      };
    };
  function mn(t, e) {
    var n = (function (t) {
      t =
        "string" == typeof t.template
          ? document.querySelector(t.template)
          : t.template;
      if (!t) return {};
      t = t.content;
      return Ve(t), s(je(t), Me(t), De(t), Ie(t), qe(t), He(t, Le));
    })(t);
    return (
      ((t = s({}, ne, e, n, t)).showClass = s({}, ne.showClass, t.showClass)),
      (t.hideClass = s({}, ne.hideClass, t.hideClass)),
      t
    );
  }
  function hn(a, c, s) {
    return new Promise(function (t) {
      function e(t) {
        a.closePopup({ isDismissed: !0, dismiss: t });
      }
      var n, o, i, r;
      he.swalPromiseResolve.set(a, t),
        (c.confirmButton.onclick = function () {
          return (
            (e = s),
            (t = a).disableButtons(),
            void (e.input ? Xe(t, e, "confirm") : tn(t, e, !0))
          );
          var t, e;
        }),
        (c.denyButton.onclick = function () {
          return (
            (e = s),
            (t = a).disableButtons(),
            void (e.returnInputValueOnDeny ? Xe(t, e, "deny") : Qe(t, e, !1))
          );
          var t, e;
        }),
        (c.cancelButton.onclick = function () {
          return (t = e), a.disableButtons(), void t(st.cancel);
          var t;
        }),
        (c.closeButton.onclick = function () {
          return e(st.close);
        }),
        (n = a),
        (r = c),
        (t = e),
        Et.innerParams.get(n).toast ? un(n, r, t) : (dn(r), pn(r), fn(n, r, t)),
        (o = a),
        (r = s),
        (i = e),
        (t = Jt).keydownTarget &&
          t.keydownHandlerAdded &&
          (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture,
          }),
          (t.keydownHandlerAdded = !1)),
        r.toast ||
          ((t.keydownHandler = function (t) {
            return on(o, t, i);
          }),
          (t.keydownTarget = r.keydownListenerCapture ? window : x()),
          (t.keydownListenerCapture = r.keydownListenerCapture),
          t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture,
          }),
          (t.keydownHandlerAdded = !0)),
        (r = a),
        "select" === (t = s).input || "radio" === t.input
          ? Ke(r, t)
          : -1 !==
              ["text", "email", "number", "tel", "textarea"].indexOf(t.input) &&
            (y(t.inputValue) || C(t.inputValue)) &&
            Ye(r, t),
        Ee(s),
        bn(Jt, s, e),
        vn(c, s),
        setTimeout(function () {
          c.container.scrollTop = 0;
        });
    });
  }
  function gn(t) {
    var e = {
      popup: x(),
      container: A(),
      actions: D(),
      confirmButton: T(),
      denyButton: L(),
      cancelButton: M(),
      loader: j(),
      closeButton: H(),
      validationMessage: O(),
      progressSteps: n(),
    };
    return Et.domCache.set(t, e), e;
  }
  var bn = function (t, e, n) {
      var o = q();
      Z(o),
        e.timer &&
          ((t.timeout = new xe(function () {
            n("timer"), delete t.timeout;
          }, e.timer)),
          e.timerProgressBar &&
            (Y(o),
            setTimeout(function () {
              t.timeout && t.timeout.running && Q(e.timer);
            })));
    },
    vn = function (t, e) {
      if (!e.toast)
        return v(e.allowEnterKey) ? void (yn(t, e) || Te(0, -1, 1)) : wn();
    },
    yn = function (t, e) {
      return e.focusDeny && bt(t.denyButton)
        ? (t.denyButton.focus(), !0)
        : e.focusCancel && bt(t.cancelButton)
        ? (t.cancelButton.focus(), !0)
        : !(!e.focusConfirm || !bt(t.confirmButton)) &&
          (t.confirmButton.focus(), !0);
    },
    wn = function () {
      document.activeElement && b(document.activeElement.blur);
    };
  function Cn(t) {
    delete t.params,
      delete Jt.keydownHandler,
      delete Jt.keydownTarget,
      An(Et),
      An(he);
  }
  var kn,
    An = function (t) {
      for (var e in t) t[e] = new WeakMap();
    },
    ut = Object.freeze({
      hideLoading: ce,
      disableLoading: ce,
      getInput: function (t) {
        var e = Et.innerParams.get(t || this);
        return (t = Et.domCache.get(t || this)) ? _(t.popup, e.input) : null;
      },
      close: be,
      closePopup: be,
      closeModal: be,
      closeToast: be,
      enableButtons: function () {
        ke(this, ["confirmButton", "denyButton", "cancelButton"], !1);
      },
      disableButtons: function () {
        ke(this, ["confirmButton", "denyButton", "cancelButton"], !0);
      },
      enableInput: function () {
        return Ae(this.getInput(), !1);
      },
      disableInput: function () {
        return Ae(this.getInput(), !0);
      },
      showValidationMessage: function (t) {
        var e = Et.domCache.get(this),
          n = Et.innerParams.get(this);
        R(e.validationMessage, t),
          (e.validationMessage.className = lt["validation-message"]),
          n.customClass &&
            n.customClass.validationMessage &&
            mt(e.validationMessage, n.customClass.validationMessage),
          Y(e.validationMessage),
          (e = this.getInput()) &&
            (e.setAttribute("aria-invalid", !0),
            e.setAttribute("aria-describedBy", lt["validation-message"]),
            z(e),
            mt(e, lt.inputerror));
      },
      resetValidationMessage: function () {
        var t = Et.domCache.get(this);
        t.validationMessage && Z(t.validationMessage),
          (t = this.getInput()) &&
            (t.removeAttribute("aria-invalid"),
            t.removeAttribute("aria-describedBy"),
            ht(t, lt.inputerror));
      },
      getProgressSteps: function () {
        return Et.domCache.get(this).progressSteps;
      },
      _main: function (t) {
        var e =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          ee(s({}, e, t)),
          Jt.currentInstance && Jt.currentInstance._destroy(),
          (Jt.currentInstance = this),
          Pe((t = mn(t, e))),
          Object.freeze(t),
          Jt.timeout && (Jt.timeout.stop(), delete Jt.timeout),
          clearTimeout(Jt.restoreFocusTimeout),
          (e = gn(this)),
          qt(this, t),
          Et.innerParams.set(this, t),
          hn(this, e, t)
        );
      },
      update: function (e) {
        var t = x(),
          n = Et.innerParams.get(this);
        if (!t || F(t, n.hideClass.popup))
          return rt(
            "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
          );
        var o = {};
        Object.keys(e).forEach(function (t) {
          Bn.isUpdatableParameter(t)
            ? (o[t] = e[t])
            : rt(
                'Invalid parameter to update: "'.concat(
                  t,
                  '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'
                )
              );
        }),
          (n = s({}, n, o)),
          qt(this, n),
          Et.innerParams.set(this, n),
          Object.defineProperties(this, {
            params: {
              value: s({}, this.params, e),
              writable: !1,
              enumerable: !0,
            },
          });
      },
      _destroy: function () {
        var t = Et.domCache.get(this),
          e = Et.innerParams.get(this);
        e &&
          (t.popup &&
            Jt.swalCloseEventFinishedCallback &&
            (Jt.swalCloseEventFinishedCallback(),
            delete Jt.swalCloseEventFinishedCallback),
          Jt.deferDisposalTimer &&
            (clearTimeout(Jt.deferDisposalTimer), delete Jt.deferDisposalTimer),
          b(e.didDestroy),
          Cn(this));
      },
    }),
    xn = (function () {
      function i() {
        if ((a(this, i), "undefined" != typeof window)) {
          "undefined" == typeof Promise &&
            at(
              "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"
            ),
            (kn = this);
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var o = Object.freeze(this.constructor.argsToParams(e));
          Object.defineProperties(this, {
            params: {
              value: o,
              writable: !1,
              enumerable: !0,
              configurable: !0,
            },
          });
          o = this._main(this.params);
          Et.promise.set(this, o);
        }
      }
      return (
        c(i, [
          {
            key: "then",
            value: function (t) {
              return Et.promise.get(this).then(t);
            },
          },
          {
            key: "finally",
            value: function (t) {
              return Et.promise.get(this).finally(t);
            },
          },
        ]),
        i
      );
    })();
  s(xn.prototype, ut),
    s(xn, ae),
    Object.keys(ut).forEach(function (t) {
      xn[t] = function () {
        if (kn) return kn[t].apply(kn, arguments);
      };
    }),
    (xn.DismissReason = st),
    (xn.version = "11.0.1");
  var Bn = xn;
  return (Bn.default = Bn);
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);
"undefined" != typeof document &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end" "gap gap gap";grid-template-rows:auto auto auto .625em;height:100%;padding:.625em .625em 0;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container::after{content:"";grid-row:4;height:.625em}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'
  );
