"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/LmcCookieConsentManager.ts
var LmcCookieConsentManager_exports = {};
__export(LmcCookieConsentManager_exports, {
  CookieConsentCategory: () => CookieConsentCategory,
  DisplayMode: () => DisplayMode,
  SecondaryButtonMode: () => SecondaryButtonMode,
  VanillaCookieConsent: () => VanillaCookieConsent,
  default: () => LmcCookieConsentManager_default
});
module.exports = __toCommonJS(LmcCookieConsentManager_exports);

// node_modules/vanilla-cookieconsent/dist/cookieconsent.js
(function() {
  var kb = function(eb) {
    var e = { mode: "opt-in", current_lang: "en", auto_language: null, autorun: true, cookie_name: "cc_cookie", cookie_expiration: 182, cookie_domain: window.location.hostname, cookie_path: "/", cookie_same_site: "Lax", use_rfc_cookie: false, autoclear_cookies: true, revision: 0, script_selector: "data-cookiecategory" }, m = {}, g, t = {}, C = null, K = false, Q = false, na = false, Ca = false, oa = false, v, Y, U, pa, Da, Ea, Fa = false, Z = true, Sa = "", V = [], xa = false, Ga, Ha = [], Ta = [], Ia = [], Ua = false, qa, Ja, Ka = [], ja = [], R = [], I = [], ya = [], ra = document.documentElement, L, sa, x, aa, ta, W, S, T, ba, E, M, ua, ka, la, y, ca, da, ea, fa, Va = function(a) {
      function b(n) {
        return (a || document).querySelectorAll('a[data-cc="' + n + '"], button[data-cc="' + n + '"]');
      }
      function c(n, p) {
        n.preventDefault ? n.preventDefault() : n.returnValue = false;
        m.accept(p);
        m.hideSettings();
        m.hide();
      }
      for (var d = b("c-settings"), f = b("accept-all"), l = b("accept-necessary"), q = b("accept-selection"), h = 0; h < d.length; h++)
        d[h].setAttribute("aria-haspopup", "dialog"), z(d[h], "click", function(n) {
          n.preventDefault ? n.preventDefault() : n.returnValue = false;
          m.showSettings(0);
        });
      for (h = 0; h < f.length; h++)
        z(f[h], "click", function(n) {
          c(n, "all");
        });
      for (h = 0; h < q.length; h++)
        z(q[h], "click", function(n) {
          c(n);
        });
      for (h = 0; h < l.length; h++)
        z(l[h], "click", function(n) {
          c(n, []);
        });
    }, za = function(a, b) {
      if (Object.prototype.hasOwnProperty.call(b, a))
        return a;
      if (0 < va(b).length)
        return Object.prototype.hasOwnProperty.call(b, e.current_lang) ? e.current_lang : va(b)[0];
    }, Wa = function() {
      function a(c, d) {
        var f = false, l = false;
        try {
          for (var q = c.querySelectorAll(b.join(':not([tabindex="-1"]), ')), h, n = q.length, p = 0; p < n; )
            h = q[p].getAttribute("data-focus"), l || "1" !== h ? "0" === h && (f = q[p], l || "0" === q[p + 1].getAttribute("data-focus") || (l = q[p + 1])) : l = q[p], p++;
        } catch (F) {
          return c.querySelectorAll(b.join(", "));
        }
        d[0] = q[0];
        d[1] = q[q.length - 1];
        d[2] = f;
        d[3] = l;
      }
      var b = ["[href]", "button", "input", "details", '[tabindex="0"]'];
      a(M, ja);
      Q && a(x, Ka);
    }, La = function(a) {
      true === g.force_consent && J(ra, "force--consent");
      if (!x) {
        x = k("div");
        var b = k("div"), c = k("div");
        x.id = "cm";
        b.id = "c-inr-i";
        c.id = "cm-ov";
        x.setAttribute("role", "dialog");
        x.setAttribute("aria-modal", "true");
        x.setAttribute(
          "aria-hidden",
          "false"
        );
        x.setAttribute("aria-labelledby", "c-ttl");
        x.setAttribute("aria-describedby", "c-txt");
        sa.appendChild(x);
        sa.appendChild(c);
        x.style.visibility = c.style.visibility = "hidden";
        c.style.opacity = 0;
      }
      if (c = g.languages[a].consent_modal.title)
        aa || (aa = k("div"), aa.id = "c-ttl", aa.setAttribute("role", "heading"), aa.setAttribute("aria-level", "2"), b.appendChild(aa)), aa.innerHTML = c;
      c = g.languages[a].consent_modal.description;
      Fa && (c = Z ? c.replace("{{revision_message}}", "") : c.replace("{{revision_message}}", Sa || g.languages[a].consent_modal.revision_message || ""));
      ta || (ta = k("div"), ta.id = "c-txt", b.appendChild(ta));
      ta.innerHTML = c;
      c = g.languages[a].consent_modal.primary_btn;
      var d = g.languages[a].consent_modal.secondary_btn;
      if (c) {
        if (!W) {
          W = k("button");
          W.id = "c-p-bn";
          W.className = "c-bn";
          var f;
          "accept_all" === c.role && (f = "all");
          z(W, "click", function() {
            m.hide();
            m.accept(f);
          });
        }
        W.textContent = g.languages[a].consent_modal.primary_btn.text;
      }
      d && (S || (S = k("button"), S.id = "c-s-bn", S.className = "c-bn c_link", "accept_necessary" === d.role ? z(S, "click", function() {
        m.hide();
        m.accept([]);
      }) : z(S, "click", function() {
        m.showSettings(0);
      })), S.textContent = g.languages[a].consent_modal.secondary_btn.text);
      a = g.gui_options;
      ba || (ba = k("div"), ba.id = "c-inr", ba.appendChild(b));
      T || (T = k("div"), T.id = "c-bns", a && a.consent_modal && true === a.consent_modal.swap_buttons ? (d && T.appendChild(S), c && T.appendChild(W), T.className = "swap") : (c && T.appendChild(W), d && T.appendChild(S)), (c || d) && ba.appendChild(T), x.appendChild(ba));
      Q = true;
    }, ab = function(a) {
      if (E)
        y = k("div"), y.id = "s-bl";
      else {
        E = k("div");
        var b = k("div"), c = k("div"), d = k("div");
        M = k("div");
        ua = k("div");
        var f = k("div");
        ka = k("button");
        var l = k("div");
        la = k("div");
        var q = k("div");
        E.id = "s-cnt";
        b.id = "c-vln";
        d.id = "c-s-in";
        c.id = "cs";
        ua.id = "s-ttl";
        M.id = "s-inr";
        f.id = "s-hdr";
        la.id = "s-bl";
        ka.id = "s-c-bn";
        q.id = "cs-ov";
        l.id = "s-c-bnc";
        ka.className = "c-bn";
        E.setAttribute("role", "dialog");
        E.setAttribute("aria-modal", "true");
        E.setAttribute("aria-hidden", "true");
        E.setAttribute("aria-labelledby", "s-ttl");
        ua.setAttribute("role", "heading");
        E.style.visibility = q.style.visibility = "hidden";
        q.style.opacity = 0;
        l.appendChild(ka);
        z(b, "keydown", function(ma) {
          ma = ma || window.event;
          27 === ma.keyCode && m.hideSettings(0);
        }, true);
        z(ka, "click", function() {
          m.hideSettings(0);
        });
      }
      ka.setAttribute("aria-label", g.languages[a].settings_modal.close_btn_label || "Close");
      U = g.languages[a].settings_modal.blocks;
      Y = g.languages[a].settings_modal.cookie_table_headers;
      var h = U.length;
      ua.innerHTML = g.languages[a].settings_modal.title;
      for (var n = 0; n < h; ++n) {
        var p = U[n].title, F = U[n].description, w = U[n].toggle, A = U[n].cookie_table, u = true === g.remove_cookie_tables, r = F && "truthy" || !u && A && "truthy", B = k("div"), X = k("div");
        if (F) {
          var Ma = k("div");
          Ma.className = "p";
          Ma.insertAdjacentHTML("beforeend", F);
        }
        var D = k("div");
        D.className = "title";
        B.className = "c-bl";
        X.className = "desc";
        if ("undefined" !== typeof w) {
          var N = "c-ac-" + n, ha = r ? k("button") : k("div"), G = k("label"), O = k("input"), P = k("span"), ia = k("span"), Xa = k("span"), Ya = k("span");
          ha.className = r ? "b-tl exp" : "b-tl";
          G.className = "b-tg";
          O.className = "c-tgl";
          Xa.className = "on-i";
          Ya.className = "off-i";
          P.className = "c-tg";
          ia.className = "t-lb";
          r && (ha.setAttribute("aria-expanded", "false"), ha.setAttribute("aria-controls", N));
          O.type = "checkbox";
          P.setAttribute("aria-hidden", "true");
          var Aa = w.value;
          O.value = Aa;
          ia.textContent = p;
          ha.insertAdjacentHTML("beforeend", p);
          D.appendChild(ha);
          P.appendChild(Xa);
          P.appendChild(Ya);
          K ? -1 < H(t.level, Aa) ? (O.checked = true, !y && R.push(true)) : !y && R.push(false) : w.enabled ? (O.checked = true, !y && R.push(true), w.enabled && !y && Ia.push(Aa)) : !y && R.push(false);
          !y && I.push(Aa);
          w.readonly ? (O.disabled = true, J(P, "c-ro"), !y && ya.push(true)) : !y && ya.push(false);
          J(
            X,
            "b-acc"
          );
          J(D, "b-bn");
          J(B, "b-ex");
          X.id = N;
          X.setAttribute("aria-hidden", "true");
          G.appendChild(O);
          G.appendChild(P);
          G.appendChild(ia);
          D.appendChild(G);
          r && function(ma, Na, Za) {
            z(ha, "click", function() {
              $a(Na, "act") ? (Oa(Na, "act"), Za.setAttribute("aria-expanded", "false"), ma.setAttribute("aria-hidden", "true")) : (J(Na, "act"), Za.setAttribute("aria-expanded", "true"), ma.setAttribute("aria-hidden", "false"));
            }, false);
          }(X, B, ha);
        } else
          p && (r = k("div"), r.className = "b-tl", r.setAttribute("role", "heading"), r.setAttribute(
            "aria-level",
            "3"
          ), r.insertAdjacentHTML("beforeend", p), D.appendChild(r));
        p && B.appendChild(D);
        F && X.appendChild(Ma);
        if (!u && "undefined" !== typeof A) {
          r = document.createDocumentFragment();
          for (N = 0; N < Y.length; ++N)
            G = k("th"), u = Y[N], G.setAttribute("scope", "col"), u && (D = u && va(u)[0], G.textContent = Y[N][D], r.appendChild(G));
          u = k("tr");
          u.appendChild(r);
          D = k("thead");
          D.appendChild(u);
          r = k("table");
          r.appendChild(D);
          N = document.createDocumentFragment();
          for (G = 0; G < A.length; G++) {
            O = k("tr");
            for (P = 0; P < Y.length; ++P)
              if (u = Y[P])
                D = va(u)[0], ia = k("td"), ia.insertAdjacentHTML("beforeend", A[G][D]), ia.setAttribute("data-column", u[D]), O.appendChild(ia);
            N.appendChild(O);
          }
          A = k("tbody");
          A.appendChild(N);
          r.appendChild(A);
          X.appendChild(r);
        }
        if (w && p || !w && (p || F))
          B.appendChild(X), y ? y.appendChild(B) : la.appendChild(B);
      }
      ca || (ca = k("div"), ca.id = "s-bns");
      ea || (ea = k("button"), ea.id = "s-all-bn", ea.className = "c-bn", ca.appendChild(ea), z(ea, "click", function() {
        m.hideSettings();
        m.hide();
        m.accept("all");
      }));
      ea.textContent = g.languages[a].settings_modal.accept_all_btn;
      if (h = g.languages[a].settings_modal.reject_all_btn)
        fa || (fa = k("button"), fa.id = "s-rall-bn", fa.className = "c-bn", z(fa, "click", function() {
          m.hideSettings();
          m.hide();
          m.accept([]);
        }), M.className = "bns-t", ca.appendChild(fa)), fa.textContent = h;
      da || (da = k("button"), da.id = "s-sv-bn", da.className = "c-bn", ca.appendChild(da), z(da, "click", function() {
        m.hideSettings();
        m.hide();
        m.accept();
      }));
      da.textContent = g.languages[a].settings_modal.save_settings_btn;
      y ? (M.replaceChild(y, la), la = y) : (f.appendChild(ua), f.appendChild(l), M.appendChild(f), M.appendChild(la), M.appendChild(ca), d.appendChild(M), c.appendChild(d), b.appendChild(c), E.appendChild(b), sa.appendChild(E), sa.appendChild(q));
    }, fb = function() {
      L = k("div");
      L.id = "cc--main";
      L.style.position = "fixed";
      L.style.zIndex = "1000000";
      L.innerHTML = '<!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div" class="cc_div"></div><!--<![endif]-->';
      sa = L.children[0];
      var a = e.current_lang;
      Q && La(a);
      ab(a);
      (eb || document.body).appendChild(L);
    };
    m.updateLanguage = function(a, b) {
      if ("string" === typeof a)
        return a = za(a, g.languages), a !== e.current_lang || true === b ? (e.current_lang = a, Q && (La(a), Va(ba)), ab(a), true) : false;
    };
    var cb = function(a) {
      var b = U.length, c = -1;
      xa = false;
      var d = wa("", "all"), f = [e.cookie_domain, "." + e.cookie_domain];
      if ("www." === e.cookie_domain.slice(0, 4)) {
        var l = e.cookie_domain.substr(4);
        f.push(l);
        f.push("." + l);
      }
      for (l = 0; l < b; l++) {
        var q = U[l];
        if (Object.prototype.hasOwnProperty.call(q, "toggle")) {
          var h = -1 < H(V, q.toggle.value);
          if (!R[++c] && Object.prototype.hasOwnProperty.call(q, "cookie_table") && (a || h)) {
            var n = q.cookie_table, p = va(Y[0])[0], F = n.length;
            "on_disable" === q.toggle.reload && h && (xa = true);
            for (h = 0; h < F; h++) {
              var w = n[h], A = [], u = w[p], r = w.is_regex || false, B = w.domain || null;
              w = w.path || false;
              B && (f = [B, "." + B]);
              if (r)
                for (r = 0; r < d.length; r++)
                  d[r].match(u) && A.push(d[r]);
              else
                u = H(d, u), -1 < u && A.push(d[u]);
              0 < A.length && (bb(A, w, f), "on_clear" === q.toggle.reload && (xa = true));
            }
          }
        }
      }
    }, gb = function(a) {
      V = [];
      var b = document.querySelectorAll(".c-tgl") || [];
      if (0 < b.length)
        for (var c = 0; c < b.length; c++)
          -1 !== H(a, I[c]) ? (b[c].checked = true, R[c] || (V.push(I[c]), R[c] = true)) : (b[c].checked = false, R[c] && (V.push(I[c]), R[c] = false));
      K && e.autoclear_cookies && 0 < V.length && cb();
      t = { level: a, revision: e.revision, data: C, rfc_cookie: e.use_rfc_cookie };
      if (!K || 0 < V.length || !Z)
        Z = true, Ga = Pa(Qa()), Ra(e.cookie_name, JSON.stringify(t)), Ba();
      if (!K && (e.autoclear_cookies && cb(true), "function" === typeof Ea && Ea(m.getUserPreferences(), t), "function" === typeof pa && pa(t), K = true, "opt-in" === e.mode))
        return;
      "function" === typeof Da && 0 < V.length && Da(t, V);
      xa && window.location.reload();
    }, hb = function(a, b) {
      if ("string" !== typeof a || "" === a || document.getElementById("cc--style"))
        b();
      else {
        var c = k("style");
        c.id = "cc--style";
        var d = new XMLHttpRequest();
        d.onreadystatechange = function() {
          4 === this.readyState && 200 === this.status && (c.setAttribute("type", "text/css"), c.styleSheet ? c.styleSheet.cssText = this.responseText : c.appendChild(document.createTextNode(this.responseText)), document.getElementsByTagName("head")[0].appendChild(c), b());
        };
        d.open("GET", a);
        d.send();
      }
    }, H = function(a, b) {
      for (var c = a.length, d = 0; d < c; d++)
        if (a[d] === b)
          return d;
      return -1;
    }, k = function(a) {
      var b = document.createElement(a);
      "button" === a && b.setAttribute("type", a);
      return b;
    }, ib = function(a, b) {
      return "browser" === e.auto_language ? (b = navigator.language || navigator.browserLanguage, 2 < b.length && (b = b[0] + b[1]), b = b.toLowerCase(), za(b, a)) : "document" === e.auto_language ? za(document.documentElement.lang, a) : "string" === typeof b ? e.current_lang = za(b, a) : e.current_lang;
    }, jb = function() {
      var a = false, b = false;
      z(document, "keydown", function(c) {
        c = c || window.event;
        "Tab" === c.key && (v && (c.shiftKey ? document.activeElement === v[0] && (v[1].focus(), c.preventDefault()) : document.activeElement === v[1] && (v[0].focus(), c.preventDefault()), b || oa || (b = true, !a && c.preventDefault(), c.shiftKey ? v[3] ? v[2] ? v[2].focus() : v[0].focus() : v[1].focus() : v[3] ? v[3].focus() : v[0].focus())), !b && (a = true));
      });
      document.contains && z(L, "click", function(c) {
        c = c || window.event;
        Ca ? M.contains(c.target) ? oa = true : (m.hideSettings(0), oa = false) : na && x.contains(c.target) && (oa = true);
      }, true);
    }, db = function(a, b) {
      function c(f, l, q, h, n, p, F) {
        p = p && p.split(" ") || [];
        if (-1 < H(l, n) && (J(f, n), ("bar" !== n || "middle" !== p[0]) && -1 < H(q, p[0])))
          for (l = 0; l < p.length; l++)
            J(f, p[l]);
        -1 < H(h, F) && J(f, F);
      }
      if ("object" === typeof a) {
        var d = a.consent_modal;
        a = a.settings_modal;
        Q && d && c(x, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], d.layout, d.position, d.transition);
        !b && a && c(E, ["bar"], ["left", "right"], ["zoom", "slide"], a.layout, a.position, a.transition);
      }
    };
    m.allowedCategory = function(a) {
      var b = K || "opt-in" === e.mode ? JSON.parse(wa(e.cookie_name, "one", true) || "{}").level || [] : Ia;
      return -1 < H(b, a);
    };
    m.run = function(a) {
      if (!document.getElementById("cc_div") && (g = a, "number" === typeof g.cookie_expiration && (e.cookie_expiration = g.cookie_expiration), "number" === typeof g.cookie_necessary_only_expiration && (e.cookie_necessary_only_expiration = g.cookie_necessary_only_expiration), "boolean" === typeof g.autorun && (e.autorun = g.autorun), "string" === typeof g.cookie_domain && (e.cookie_domain = g.cookie_domain), "string" === typeof g.cookie_same_site && (e.cookie_same_site = g.cookie_same_site), "string" === typeof g.cookie_path && (e.cookie_path = g.cookie_path), "string" === typeof g.cookie_name && (e.cookie_name = g.cookie_name), "function" === typeof g.onAccept && (pa = g.onAccept), "function" === typeof g.onFirstAction && (Ea = g.onFirstAction), "function" === typeof g.onChange && (Da = g.onChange), "opt-out" === g.mode && (e.mode = "opt-out"), "number" === typeof g.revision && (-1 < g.revision && (e.revision = g.revision), Fa = true), "boolean" === typeof g.autoclear_cookies && (e.autoclear_cookies = g.autoclear_cookies), true === g.use_rfc_cookie && (e.use_rfc_cookie = true), true === g.hide_from_bots && (Ua = navigator && (navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent) || navigator.webdriver)), e.page_scripts = true === g.page_scripts, e.page_scripts_order = false !== g.page_scripts_order, "browser" === g.auto_language || true === g.auto_language ? e.auto_language = "browser" : "document" === g.auto_language && (e.auto_language = "document"), e.current_lang = ib(g.languages, g.current_lang), !Ua))
        if (t = JSON.parse(wa(e.cookie_name, "one", true) || "{}"), K = void 0 !== t.level, C = void 0 !== t.data ? t.data : null, Z = "number" === typeof a.revision ? K ? -1 < a.revision ? t.revision === e.revision : true : true : true, Q = !K || !Z, fb(), hb(a.theme_css, function() {
          Wa();
          db(a.gui_options);
          Va();
          e.autorun && Q && m.show(a.delay || 0);
          setTimeout(function() {
            J(L, "c--anim");
          }, 30);
          setTimeout(function() {
            jb();
          }, 100);
        }), K && Z) {
          var b = "boolean" === typeof t.rfc_cookie;
          if (!b || b && t.rfc_cookie !== e.use_rfc_cookie)
            t.rfc_cookie = e.use_rfc_cookie, Ra(e.cookie_name, JSON.stringify(t));
          Ga = Pa(Qa());
          Ba();
          "function" === typeof pa && pa(t);
        } else
          "opt-out" === e.mode && Ba(Ia);
    };
    m.showSettings = function(a) {
      setTimeout(function() {
        J(ra, "show--settings");
        E.setAttribute("aria-hidden", "false");
        Ca = true;
        setTimeout(function() {
          na ? Ja = document.activeElement : qa = document.activeElement;
          0 !== ja.length && (ja[3] ? ja[3].focus() : ja[0].focus(), v = ja);
        }, 200);
      }, 0 < a ? a : 0);
    };
    var Ba = function(a) {
      if (e.page_scripts) {
        var b = document.querySelectorAll("script[" + e.script_selector + "]"), c = e.page_scripts_order, d = a || t.level || [], f = function(l, q) {
          if (q < l.length) {
            var h = l[q], n = h.getAttribute(e.script_selector);
            if (-1 < H(d, n)) {
              h.type = "text/javascript";
              h.removeAttribute(e.script_selector);
              (n = h.getAttribute("data-src")) && h.removeAttribute("data-src");
              var p = k("script");
              p.textContent = h.innerHTML;
              (function(F, w) {
                for (var A = w.attributes, u = A.length, r = 0; r < u; r++) {
                  var B = A[r].nodeName;
                  F.setAttribute(B, w[B] || w.getAttribute(B));
                }
              })(p, h);
              n ? p.src = n : n = h.src;
              n && (c ? p.readyState ? p.onreadystatechange = function() {
                if ("loaded" === p.readyState || "complete" === p.readyState)
                  p.onreadystatechange = null, f(l, ++q);
              } : p.onload = function() {
                p.onload = null;
                f(l, ++q);
              } : n = false);
              h.parentNode.replaceChild(p, h);
              if (n)
                return;
            }
            f(l, ++q);
          }
        };
        f(b, 0);
      }
    };
    m.set = function(a, b) {
      switch (a) {
        case "data":
          a = b.value;
          var c = false;
          if ("update" === b.mode)
            if (C = m.get("data"), (b = typeof C === typeof a) && "object" === typeof C) {
              !C && (C = {});
              for (var d in a)
                C[d] !== a[d] && (C[d] = a[d], c = true);
            } else
              !b && C || C === a || (C = a, c = true);
          else
            C = a, c = true;
          c && (t.data = C, Ra(e.cookie_name, JSON.stringify(t)));
          return c;
        case "revision":
          return d = b.value, a = b.prompt_consent, b = b.message, L && "number" === typeof d && t.revision !== d ? (Fa = true, Sa = b, Z = false, e.revision = d, true === a ? (La(g), db(g.gui_options, true), Wa(), m.show()) : m.accept(), b = true) : b = false, b;
        default:
          return false;
      }
    };
    m.get = function(a, b) {
      return JSON.parse(wa(
        b || e.cookie_name,
        "one",
        true
      ) || "{}")[a];
    };
    m.getConfig = function(a) {
      return e[a] || g[a];
    };
    var Qa = function() {
      Ha = t.level || [];
      Ta = I.filter(function(a) {
        return -1 === H(Ha, a);
      });
      return { accepted: Ha, rejected: Ta };
    }, Pa = function(a) {
      var b = "custom", c = ya.filter(function(d) {
        return true === d;
      }).length;
      a.accepted.length === I.length ? b = "all" : a.accepted.length === c && (b = "necessary");
      return b;
    };
    m.getUserPreferences = function() {
      var a = Qa();
      return { accept_type: Pa(a), accepted_categories: a.accepted, rejected_categories: a.rejected };
    };
    m.loadScript = function(a, b, c) {
      var d = "function" === typeof b;
      if (document.querySelector('script[src="' + a + '"]'))
        d && b();
      else {
        var f = k("script");
        if (c && 0 < c.length)
          for (var l = 0; l < c.length; ++l)
            c[l] && f.setAttribute(c[l].name, c[l].value);
        d && (f.readyState ? f.onreadystatechange = function() {
          if ("loaded" === f.readyState || "complete" === f.readyState)
            f.onreadystatechange = null, b();
        } : f.onload = b);
        f.src = a;
        (document.head ? document.head : document.getElementsByTagName("head")[0]).appendChild(f);
      }
    };
    m.updateScripts = function() {
      Ba();
    };
    m.show = function(a) {
      Q && setTimeout(function() {
        J(
          ra,
          "show--consent"
        );
        x.setAttribute("aria-hidden", "false");
        na = true;
        setTimeout(function() {
          qa = document.activeElement;
          v = Ka;
        }, 200);
      }, 0 < a ? a : 0);
    };
    m.hide = function() {
      Q && (Oa(ra, "show--consent"), x.setAttribute("aria-hidden", "true"), na = false, setTimeout(function() {
        qa.focus();
        v = null;
      }, 200));
    };
    m.hideSettings = function() {
      Oa(ra, "show--settings");
      Ca = false;
      E.setAttribute("aria-hidden", "true");
      setTimeout(function() {
        na ? (Ja && Ja.focus(), v = Ka) : (qa && qa.focus(), v = null);
        oa = false;
      }, 200);
    };
    m.accept = function(a, b) {
      a = a || void 0;
      var c = b || [];
      b = [];
      var d = function() {
        for (var l = document.querySelectorAll(".c-tgl") || [], q = [], h = 0; h < l.length; h++)
          l[h].checked && q.push(l[h].value);
        return q;
      };
      if (a)
        if ("object" === typeof a && "number" === typeof a.length)
          for (var f = 0; f < a.length; f++)
            -1 !== H(I, a[f]) && b.push(a[f]);
        else
          "string" === typeof a && ("all" === a ? b = I.slice() : -1 !== H(I, a) && b.push(a));
      else
        b = d();
      if (1 <= c.length)
        for (f = 0; f < c.length; f++)
          b = b.filter(function(l) {
            return l !== c[f];
          });
      for (f = 0; f < I.length; f++)
        true === ya[f] && -1 === H(b, I[f]) && b.push(I[f]);
      gb(b);
    };
    m.eraseCookies = function(a, b, c) {
      var d = [];
      c = c ? [c, "." + c] : [e.cookie_domain, "." + e.cookie_domain];
      if ("object" === typeof a && 0 < a.length)
        for (var f = 0; f < a.length; f++)
          this.validCookie(a[f]) && d.push(a[f]);
      else
        this.validCookie(a) && d.push(a);
      bb(d, b, c);
    };
    var Ra = function(a, b) {
      var c = e.cookie_expiration;
      "number" === typeof e.cookie_necessary_only_expiration && "necessary" === Ga && (c = e.cookie_necessary_only_expiration);
      b = e.use_rfc_cookie ? encodeURIComponent(b) : b;
      var d = new Date();
      d.setTime(d.getTime() + 864e5 * c);
      c = "; expires=" + d.toUTCString();
      a = a + "=" + (b || "") + c + "; Path=" + e.cookie_path + ";";
      a += " SameSite=" + e.cookie_same_site + ";";
      -1 < window.location.hostname.indexOf(".") && (a += " Domain=" + e.cookie_domain + ";");
      "https:" === window.location.protocol && (a += " Secure;");
      document.cookie = a;
    }, wa = function(a, b, c) {
      var d;
      if ("one" === b) {
        if ((d = (d = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? c ? d.pop() : a : "") && a === e.cookie_name) {
          try {
            d = JSON.parse(d);
          } catch (f) {
            try {
              d = JSON.parse(decodeURIComponent(d));
            } catch (l) {
              d = {};
            }
          }
          d = JSON.stringify(d);
        }
      } else if ("all" === b)
        for (a = document.cookie.split(/;\s*/), d = [], b = 0; b < a.length; b++)
          d.push(a[b].split("=")[0]);
      return d;
    }, bb = function(a, b, c) {
      b = b ? b : "/";
      for (var d = 0; d < a.length; d++)
        for (var f = 0; f < c.length; f++)
          document.cookie = a[d] + "=; path=" + b + (-1 < c[f].indexOf(".") ? "; domain=" + c[f] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    m.validCookie = function(a) {
      return "" !== wa(a, "one", true);
    };
    var z = function(a, b, c, d) {
      a.addEventListener ? true === d ? a.addEventListener(b, c, { passive: true }) : a.addEventListener(b, c, false) : a.attachEvent("on" + b, c);
    }, va = function(a) {
      if ("object" === typeof a) {
        var b = [], c = 0;
        for (b[c++] in a)
          ;
        return b;
      }
    }, J = function(a, b) {
      a.classList ? a.classList.add(b) : $a(a, b) || (a.className += " " + b);
    }, Oa = function(a, b) {
      a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " ");
    }, $a = function(a, b) {
      return a.classList ? a.classList.contains(b) : !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
    };
    return m;
  };
  "function" !== typeof window.initCookieConsent && (window.initCookieConsent = kb);
})();

// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// src/types/vanilla-cookieconsent.ts
var VanillaCookieConsent;
((VanillaCookieConsent2) => {
  let AcceptType;
  ((AcceptType2) => {
    AcceptType2["ALL"] = "all";
    AcceptType2["NECESSARY"] = "necessary";
    AcceptType2["CUSTOM"] = "custom";
  })(AcceptType = VanillaCookieConsent2.AcceptType || (VanillaCookieConsent2.AcceptType = {}));
  let PrimaryButtonRole;
  ((PrimaryButtonRole2) => {
    PrimaryButtonRole2["ACCEPT_ALL"] = "accept_all";
    PrimaryButtonRole2["ACCEPT_SELECTED"] = "accept_selected";
  })(PrimaryButtonRole = VanillaCookieConsent2.PrimaryButtonRole || (VanillaCookieConsent2.PrimaryButtonRole = {}));
  let SecondaryButtonRole;
  ((SecondaryButtonRole2) => {
    SecondaryButtonRole2["ACCEPT_NECESSARY"] = "accept_necessary";
    SecondaryButtonRole2["SETTINGS"] = "settings";
  })(SecondaryButtonRole = VanillaCookieConsent2.SecondaryButtonRole || (VanillaCookieConsent2.SecondaryButtonRole = {}));
  let GuiConsentLayout;
  ((GuiConsentLayout2) => {
    GuiConsentLayout2["BAR"] = "bar";
    GuiConsentLayout2["BOX"] = "box";
    GuiConsentLayout2["CLOUD"] = "cloud";
  })(GuiConsentLayout = VanillaCookieConsent2.GuiConsentLayout || (VanillaCookieConsent2.GuiConsentLayout = {}));
  let GuiConsentPosition;
  ((GuiConsentPosition2) => {
    GuiConsentPosition2["BOTTOM_LEFT"] = "bottom left";
    GuiConsentPosition2["BOTTOM_RIGHT"] = "bottom right";
    GuiConsentPosition2["BOTTOM_CENTER"] = "bottom center";
    GuiConsentPosition2["MIDDLE_LEFT"] = "middle left";
    GuiConsentPosition2["MIDDLE_RIGHT"] = "middle right";
    GuiConsentPosition2["MIDDLE_CENTER"] = "middle center";
    GuiConsentPosition2["TOP_LEFT"] = "top left";
    GuiConsentPosition2["TOP_RIGHT"] = "top right";
    GuiConsentPosition2["TOP_CENTER"] = "top center";
  })(GuiConsentPosition = VanillaCookieConsent2.GuiConsentPosition || (VanillaCookieConsent2.GuiConsentPosition = {}));
  let GuiSettingsLayout;
  ((GuiSettingsLayout2) => {
    GuiSettingsLayout2["BAR"] = "bar";
    GuiSettingsLayout2["BOX"] = "box";
  })(GuiSettingsLayout = VanillaCookieConsent2.GuiSettingsLayout || (VanillaCookieConsent2.GuiSettingsLayout = {}));
  let GuiSettingsPosition;
  ((GuiSettingsPosition2) => {
    GuiSettingsPosition2["LEFT"] = "left";
    GuiSettingsPosition2["RIGHT"] = "right";
  })(GuiSettingsPosition = VanillaCookieConsent2.GuiSettingsPosition || (VanillaCookieConsent2.GuiSettingsPosition = {}));
  let Transition;
  ((Transition2) => {
    Transition2["SLIDE"] = "slide";
    Transition2["ZOOM"] = "zoom";
  })(Transition = VanillaCookieConsent2.Transition || (VanillaCookieConsent2.Transition = {}));
})(VanillaCookieConsent || (VanillaCookieConsent = {}));

// src/consentCollector.ts
function submitConsent(consentCollectorApiUrl, cookieConsent) {
  const payload = buildPayload(cookieConsent);
  postDataToApi(consentCollectorApiUrl, payload);
}
function buildPayload(cookieConsent) {
  const cookieData = cookieConsent.get("data");
  const userPreferences = cookieConsent.getUserPreferences();
  const daysOfAcceptation = userPreferences.accept_type === VanillaCookieConsent.AcceptType.NECESSARY ? cookieConsent.getConfig("cookie_necessary_only_expiration") : cookieConsent.getConfig("cookie_expiration");
  return {
    data: {
      type: "localDataAcceptationDataEntries",
      attributes: {
        acceptation_id: cookieData.uid,
        accept_type: `accept_${userPreferences.accept_type}`,
        accepted_categories: userPreferences.accepted_categories,
        rejected_categories: userPreferences.rejected_categories,
        revision: cookieConsent.get("revision"),
        source: cookieData.serviceName,
        language: cookieConsent.getConfig("current_lang"),
        days_of_acceptation: daysOfAcceptation
      }
    }
  };
}
function postDataToApi(apiUrl, payload) {
  return __async(this, null, function* () {
    const response = yield fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json"
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  });
}
var consentCollector_default = submitConsent;

// src/constants/CookieConsentCategory.ts
var CookieConsentCategory = {
  NECESSARY: "necessary",
  AD: "ad",
  ANALYTICS: "analytics",
  FUNCTIONALITY: "functionality",
  PERSONALIZATION: "personalization"
};

// src/constants/DisplayMode.ts
var DisplayMode = {
  FORCE: "force",
  SOFT: "soft"
};

// src/constants/SecondaryButtonMode.ts
var SecondaryButtonMode = {
  ACCEPT_NECESSARY: "acceptNecessary",
  SHOW_SETTINGS: "showSettings"
};

// src/utils.ts
var addSeparators = (strings, and = "") => strings.reduce((accumulator, string, i) => {
  if (i === 0) {
    return `${accumulator}${string}`;
  }
  if (i === strings.length - 1) {
    return `${accumulator} ${and}\xA0${string}`;
  }
  return `${accumulator}, ${string}`;
});
var pluralize = (count, singular, plural) => count === 1 ? singular : plural;
var legalizeAlmaCareer = (companyNames, legalName) => companyNames.map((value) => value === "Alma Career" ? legalName : value);
var assembleDescriptionIntro = (defaultValue, overrideValue) => {
  const descriptionIntro = overrideValue != null ? overrideValue : defaultValue;
  return descriptionIntro !== "" ? `<p>${descriptionIntro}</p>` : "";
};
var assembleSecondaryButton = (secondaryButtonMode, textAcceptNecessary, textShowSettings) => ({
  text: secondaryButtonMode === SecondaryButtonMode.ACCEPT_NECESSARY ? textAcceptNecessary : textShowSettings,
  role: secondaryButtonMode === SecondaryButtonMode.ACCEPT_NECESSARY ? VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY : VanillaCookieConsent.SecondaryButtonRole.SETTINGS
});
var isSettingsButtonNotShown = (secondaryButtonMode) => secondaryButtonMode !== SecondaryButtonMode.SHOW_SETTINGS;
var assembleCategoryBlock = (category, title, description, readonly, cookieTableItems) => __spreadValues({
  title,
  description,
  toggle: { value: category, enabled: readonly, readonly }
}, typeof cookieTableItems !== "undefined" && { cookie_table: cookieTableItems });
var assembleCategoryNecessary = (title, description, cookieTable) => assembleCategoryBlock(
  CookieConsentCategory.NECESSARY,
  title,
  description,
  true,
  cookieTable[CookieConsentCategory.NECESSARY]
);
var assembleCategoryAd = (title, description, cookieTable) => assembleCategoryBlock(CookieConsentCategory.AD, title, description, false, cookieTable[CookieConsentCategory.AD]);
var assembleCategoryAnalytics = (title, description, cookieTable) => assembleCategoryBlock(
  CookieConsentCategory.ANALYTICS,
  title,
  description,
  false,
  cookieTable[CookieConsentCategory.ANALYTICS]
);
var assembleCategoryFunctionality = (title, description, cookieTable) => assembleCategoryBlock(
  CookieConsentCategory.FUNCTIONALITY,
  title,
  description,
  false,
  cookieTable[CookieConsentCategory.FUNCTIONALITY]
);
var assembleCategoryPersonalization = (title, description, cookieTable) => assembleCategoryBlock(
  CookieConsentCategory.PERSONALIZATION,
  title,
  description,
  false,
  cookieTable[CookieConsentCategory.PERSONALIZATION]
);

// src/languages/bs.ts
var extra = {
  and: "i",
  company: "kompaniji",
  companies: "kompanijama",
  legalName: "Alma Career i drugim kompanijama iz njene poslovne grupe"
};
var config = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Kola\u010Di\u0107i \u010Dine na\u0161u stranicu jo\u0161 boljom",
      description: `
      ${assembleDescriptionIntro(
        "Bolje razumijevanje onoga \u0161to vas zanima, pokazat \u0107emo vam relevantniji sadr\u017Eaj.",
        lang.descriptionIntro
      )}
      <p>
        Klikom na\xA0dugme \u201EPrihvati sve\u201C, dajete
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        svoju saglasnost za kori\u0161tenje kola\u010Di\u0107a za personalizaciju, analitiku i\xA0ciljani marketing.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Mo\u017Eete prilagoditi upotrebu kola\u010Di\u0107a u\xA0svojim <strong><a href="" data-cc="c-settings">prilago\u0111enim postavkama</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Prihvati sve",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Prihvatiti neophodno", "Prilago\u0111enim postavkama")
    },
    settings_modal: {
      title: "Prilago\u0111enim postavkama kola\u010Di\u0107a",
      accept_all_btn: "Prihvati sve",
      reject_all_btn: "Prihvatiti neophodno",
      save_settings_btn: "Sa\u010Duvaj postavke",
      cookie_table_headers: [{ name: "Naziv" }, { description: "Opis" }, { expiration: "Isticanje" }],
      blocks: [
        {
          description: `Ako \u017Eelite da izvu\u010Dete maksimum iz na\u0161e web stranice, najbolje je dozvoliti sve vrste kola\u010Di\u0107a.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Vi\u0161e informacija o\xA0tome \u0161ta su kola\u010Di\u0107i i\xA0kako radimo s\xA0njima mo\u017Eete prona\u0107i na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Politika privatnosti</a>.`}`
        },
        assembleCategoryNecessary(
          "Tehni\u010Dki potrebni kola\u010Di\u0107i",
          "Ovi kola\u010Di\u0107i su neophodni za pravilno funkcioniranje na\u0161e web stranice i\xA0stoga se ne mogu onemogu\u0107iti. Bez\xA0njih ne bi bilo mogu\u0107e npr.\xA0za prikaz bilo kojeg sadr\u017Eaja ili za prijavu na\xA0na\u0161u web stranicu.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analiti\u010Dki kola\u010Di\u0107i",
          "To nam poma\u017Ee da pratimo koliko ljudi posjeti na\u0161u web stranicu i\xA0kako je koriste. Ove\xA0informacije nam zatim omogu\u0107avaju da kontinuirano pobolj\u0161avamo web stranicu i\xA0druge usluge.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkcionalni kola\u010Di\u0107i",
          "Na\u0161a web stranica je jo\u0161 efikasnija i\xA0radi bolje zahvaljuju\u0107i ovim kola\u010Di\u0107ima. Na\xA0primjer, omogu\u0107avaju nam kori\u0161tenje usluge chata i\xA0brzo i\xA0jednostavno odgovaranje na va\u0161a pitanja.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketin\u0161ki kola\u010Di\u0107i",
          "Ovi kola\u010Di\u0107i nam poma\u017Eu da izmjerimo u\u010Dinkovitost na\u0161eg ogla\u0161avanja i\xA0ciljanih ponuda usluga. Marketin\u0161ki\xA0kola\u010Di\u0107i nam omogu\u0107avaju da vam donesemo vijesti koje bi vas mogle zanimati na\xA0Internetu.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Kola\u010Di\u0107i za personalizaciju",
          "Na\u0161e usluge bolje funkcioniraju ako ih mo\u017Eemo prilagoditi odre\u0111enim korisnicima. Dopu\u0161tanjem\xA0kola\u010Di\u0107a za personalizaciju pove\u0107avate svoje \u0161anse da prona\u0111ete sadr\u017Eaj koji \u017Eelite.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/cs.ts
var extra2 = {
  and: "a",
  company: "spole\u010Dnosti",
  companies: "spole\u010Dnostem",
  legalName: "Alma Career a\xA0spole\u010Dnostem z\xA0jej\xED obchodn\xED skupiny"
};
var config2 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra2), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "D\xEDky Cookies budou na\u0161e str\xE1nky je\u0161t\u011B lep\u0161\xED",
      description: `
      ${assembleDescriptionIntro(
        "Kdy\u017E l\xE9pe pochop\xEDme, co v\xE1s zaj\xEDm\xE1, budeme v\xE1m zobrazovat p\u0159esn\u011Bj\u0161\xED obsah na\xA0m\xEDru.",
        lang.descriptionIntro
      )}
      <p>
        Kliknut\xEDm na\xA0tla\u010D\xEDtko \u201EP\u0159ijmout v\u0161echny\u201C d\xE1te
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        souhlas s\xA0vyu\u017E\xEDv\xE1n\xEDm soubor\u016F Cookies na\xA0\xFA\u010Dely personalizace, anal\xFDzy a\xA0c\xEDlen\xE9ho marketingu.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Dal\u0161\xED informace o\xA0Cookies a\xA0\xFApravu jejich pou\u017E\xEDv\xE1n\xED naleznete ve\xA0<strong><a href="" data-cc="c-settings">vlastn\xEDm nastaven\xED</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "P\u0159ijmout v\u0161echny",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "P\u0159ijmout nezbytn\xE9", "Vlastn\xED nastaven\xED")
    },
    settings_modal: {
      title: "P\u0159izp\u016Fsobit nastaven\xED Cookies",
      accept_all_btn: "P\u0159ijmout v\u0161echny",
      reject_all_btn: "P\u0159ijmout nezbytn\xE9",
      save_settings_btn: "Ulo\u017Eit nastaven\xED",
      cookie_table_headers: [{ name: "N\xE1zev" }, { description: "Popis" }, { expiration: "Platnost" }],
      blocks: [
        {
          description: `Abyste z\xA0na\u0161ich str\xE1nek z\xEDskali maximum, je nejlep\u0161\xED povolit v\u0161echny typy cookies.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Dal\u0161\xED informace o\xA0tom, co jsou cookies a\xA0jak s\xA0nimi pracujeme, najdete v\xA0<a href="https://www.almacareer.com/gdpr" target="_blank">Z\xE1sad\xE1ch\xA0cookies</a>.`}`
        },
        assembleCategoryNecessary(
          "Technicky nezbytn\xE9 Cookies",
          "Tyto Cookies jsou pro spr\xE1vn\xE9 fungov\xE1n\xED na\u0161eho webu nezbytn\xE9, proto nen\xED mo\u017En\xE9 je vypnout. Bez nich by na\xA0na\u0161ich str\xE1nk\xE1ch nap\u0159.\xA0ne\u0161el zobrazit \u017E\xE1dn\xFD obsah nebo by nefungovalo p\u0159ihl\xE1\u0161en\xED.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analytick\xE9 Cookies",
          "Pomoc\xED nich sledujeme, kolik lid\xED n\xE1\u0161 web nav\u0161t\u011Bvuje a\xA0jak ho pou\u017E\xEDvaj\xED. D\xEDky tomu m\u016F\u017Eeme str\xE1nky a\xA0dal\u0161\xED slu\u017Eby neust\xE1le vylep\u0161ovat.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funk\u010Dn\xED Cookies",
          "D\xEDky t\u011Bmto Cookies jsou na\u0161e str\xE1nky je\u0161t\u011B v\xFDkonn\u011Bj\u0161\xED a\xA0funguj\xED l\xE9pe. Nap\u0159\xEDklad n\xE1m umo\u017E\u0148uj\xED pou\u017E\xEDvat chat, abychom na va\u0161e ot\xE1zky mohli odpov\xEDdat rychle a\xA0jednodu\u0161e.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketingov\xE9 Cookies",
          "S\xA0t\u011Bmito Cookies m\u016F\u017Eeme m\u011B\u0159it, jak efektivn\xED je na\u0161e reklama a\xA0c\xEDlen\xE9 nab\xEDdky na\u0161ich slu\u017Eeb. Marketingov\xE9 Cookies n\xE1m umo\u017En\xED v\xE1s na Internetu upozornit na novinky, kter\xE9 v\xE1s m\u016F\u017Eou zaj\xEDmat.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personaliza\u010Dn\xED Cookies",
          "Na\u0161e slu\u017Eby funguj\xED l\xE9pe, kdy\u017E je m\u016F\u017Eeme p\u0159izp\u016Fsobit na\xA0m\xEDru konkr\xE9tn\xEDmu u\u017Eivateli. Povolen\xEDm Personaliza\u010Dn\xEDch cookies zv\xFD\u0161\xEDte \u0161anci, \u017Ee najdete pr\xE1v\u011B takov\xFD obsah, jak\xFD hled\xE1te.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/de.ts
var extra3 = {
  and: "und",
  legalName: "Alma Career und seine Gruppenunternehmen"
};
var config3 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra3), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Diese Website verwendet Cookies",
      description: `
      ${assembleDescriptionIntro(
        "Wenn wir genau wissen, wof\xFCr Sie sich interessieren, k\xF6nnen wir Ihnen ma\xDFgeschneiderte Inhalte anbieten.",
        lang.descriptionIntro
      )}
      <p>
        Indem Sie auf \u201EAlles\xA0akzeptieren\u201C klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Ger\xE4t durch
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra3.and)}
        zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Sie\xA0k\xF6nnen die\xA0Verwendung von\xA0Cookies in\xA0Ihren <strong><a href="" data-cc="c-settings">eigenen Einstellungen</a></strong> anpassen.` : ""}
      </p>`,
      primary_btn: {
        text: "Alles akzeptieren",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(
        secondaryButtonMode,
        "Das Notwendigste akzeptieren",
        "Eigene Einstellungen"
      )
    },
    settings_modal: {
      title: "Benutzerdefinierte Cookie-Einstellungen",
      accept_all_btn: "Alles akzeptieren",
      reject_all_btn: "Das Notwendigste akzeptieren",
      save_settings_btn: "Einstellungen speichern",
      cookie_table_headers: [
        { name: "Unternehmensbezeichnung" },
        { description: "Beschreibung" },
        { expiration: "Verfallsdatum" }
      ],
      blocks: [
        {
          description: `Um unsere Website optimal nutzen zu k\xF6nnen, sollten Sie alle Arten von Cookies aktivieren.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Weitere Informationen dar\xFCber, was Cookies sind und wie wir mit ihnen arbeiten, finden Sie in unsere <a href="https://www.almacareer.com/gdpr" target="_blank">Datenschutzrichtlinien</a>.`}`
        },
        assembleCategoryNecessary(
          "Technisch notwendige Cookies",
          "Diese\xA0Cookies sind f\xFCr das reibungslose Funktionieren unserer Website unerl\xE4sslich und k\xF6nnen daher nicht deaktiviert werden. Ohne\xA0sie k\xF6nnten z.\xA0B.\xA0keine Inhalte auf unserer Seite angezeigt werden oder das Login w\xFCrde nicht funktionieren.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analytische Cookies",
          "Wir\xA0verwenden diese Cookies, um\xA0zu\xA0verfolgen, wie viele Personen unsere Website besuchen und wie sie sie\xA0nutzen. Auf\xA0diese Weise k\xF6nnen wir die Website und andere Dienste kontinuierlich verbessern.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funktionale Cookies",
          "Diese\xA0Cookies machen unsere Website leistungsf\xE4higer und funktionieren besser. Sie\xA0erm\xF6glichen uns zum\xA0Beispiel die\xA0Nutzung des\xA0Chats, damit wir Ihre Fragen schnell und einfach beantworten k\xF6nnen.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketing Cookies",
          "Mit\xA0diesen Cookies k\xF6nnen wir messen, wie effektiv unsere Werbung und gezielte Angebote\xA0unserer Dienste sind. Marketing Cookies erm\xF6glichen es uns, Sie online auf\xA0Nachrichten hinzuweisen, die f\xFCr Sie von\xA0Interesse sein k\xF6nnten.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personalisierung Cookies",
          "Unsere\xA0Dienste funktionieren besser, wenn wir sie auf\xA0den einzelnen Nutzer zuschneiden k\xF6nnen. Durch die Aktivierung von\xA0Personalisierungs-Cookies erh\xF6hen Sie die Wahrscheinlichkeit, dass\xA0Sie genau die Inhalte finden, nach denen Sie\xA0suchen.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/en.ts
var extra4 = {
  and: "and",
  legalName: "Alma Career and other companies from its business group"
};
var config4 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra4), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Cookies make our site even better",
      description: `
      ${assembleDescriptionIntro(
        "By better understanding what you're interested\xA0in, we'll show you more relevant content.",
        lang.descriptionIntro
      )}
      <p>
        By clicking the "Accept all" button, you give
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra4.and)}
        your consent to\xA0use cookies for\xA0personalisation, analytics and\xA0targeted marketing.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `You can customize use of cookies in your <strong><a href="" data-cc="c-settings">custom settings</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Accept all",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Accept necessary", "Custom settings")
    },
    settings_modal: {
      title: "Custom Cookie settings",
      accept_all_btn: "Accept all",
      reject_all_btn: "Accept necessary",
      save_settings_btn: "Save settings",
      cookie_table_headers: [{ name: "Name" }, { description: "Description" }, { expiration: "Expiration" }],
      blocks: [
        {
          description: `If you want to get the most out of our website it is best to allow all types of cookies.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `For more information about what cookies are and how we work with them, see our <a href="https://www.almacareer.com/gdpr" target="_blank">Cookie Policy</a>.`}`
        },
        assembleCategoryNecessary(
          "Technically necessary cookies",
          "These cookies are essential for the proper functioning of our website, and so they cannot be disabled. Without them, it would not be possible e.g.\xA0to display any content or to\xA0log\xA0in on our website.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analytical cookies",
          "These help us monitor how many people visit our website and how they use\xA0it. This\xA0information then enables us to\xA0continuously improve the website and other services.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Functional cookies",
          "Our website is even more efficient and works better thanks to\xA0these cookies. For\xA0example, they enable us to use the chat service and answer your questions quickly and easily.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketing cookies",
          "These cookies help us to\xA0measure the effectiveness of\xA0our advertising and targeted service offers. Marketing cookies enable us to bring you news that may be of interest to you on the Internet.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personalisation cookies",
          "Our services work better if\xA0we can tailor them to specific users. By\xA0allowing personalisation cookies you increase your chances of\xA0finding the content you want.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/et.ts
var extra5 = {
  and: "ning",
  company: "ettev\xF5ttele",
  companies: "ettev\xF5tetele",
  legalName: "Alma Career ja teistele selle \xE4rigrupi ettev\xF5tetele"
};
var config5 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra5), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "K\xFCpsised muudavad meie veebilehe kasutamise veelgi paremaks",
      description: `
      ${assembleDescriptionIntro(
        "Kui m\xF5istame paremini, mis sind huvitab, n\xE4itame sulle asjakohasemat sisu.",
        lang.descriptionIntro
      )}
      <p>
        Kl\xF5psates nuppu \u201EN\xF5ustun k\xF5igiga\u201C, annate
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        n\xF5usoleku kasutada k\xFCpsiseid isikup\xE4rastamiseks, anal\xFC\xFCsiks ja sihitud turunduseks.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `K\xFCpsiste kasutamist saad kohandada oma <strong><a href="" data-cc="c-settings">kohandatud seadetes</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "N\xF5ustun k\xF5igiga",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "N\xF5ustun tarvilikega", "Kohandatud seaded")
    },
    settings_modal: {
      title: "Kohandatud k\xFCpsiste seaded",
      accept_all_btn: "N\xF5ustun k\xF5igiga",
      reject_all_btn: "N\xF5ustun tarvilikega",
      save_settings_btn: "Salvesta s\xE4tted",
      cookie_table_headers: [{ name: "Nimetus" }, { description: "Kirjeldus" }, { expiration: "Aegumine" }],
      blocks: [
        {
          description: `Kui soovid meie veebilehest maksimumi v\xF5tta, on k\xF5ige parem n\xF5ustuda k\xF5igi k\xFCpsistega.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Lisateavet selle kohta, mis on k\xFCpsised ja kuidas me nendega t\xF6\xF6tame, leiate lehelt <a href="https://www.almacareer.com/gdpr" target="_blank">Privaatsuspoliitika</a>.`}`
        },
        assembleCategoryNecessary(
          "Tehniliselt vajalikud k\xFCpsised",
          "Need k\xFCpsised on meie veebilehe n\xF5uetekohaseks toimimiseks h\xE4davajalikud ja seet\xF5ttu ei saa neid keelata. Ilma nendeta poleks v\xF5imalik n\xE4iteks teatud sisu kuvamine v\xF5i meie veebilehele sisse logimine.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Anal\xFC\xFCtilised k\xFCpsised",
          "Need aitavad meil j\xE4lgida kui palju inimesi meie veebilehte k\xFClastab ja kuidas nad seda kasutavad. See teave v\xF5imaldab meil veebilehte ja muid teenuseid pidevalt t\xE4iustada.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funktsionaalsed k\xFCpsised",
          "Meie veebileht on veelgi t\xF5husam ja t\xF6\xF6tab paremini t\xE4nu nendele k\xFCpsistele.",
          cookieTable
        ),
        assembleCategoryAd(
          "Turundusk\xFCpsised",
          "Need k\xFCpsised aitavad meil m\xF5\xF5ta meie reklaamide ja suunatud teenusepakkumiste t\xF5husust. Turundusk\xFCpsised v\xF5imaldavad ka meil sulle internetist informatsiooni leida, mis v\xF5ib sinu jaoks asjakohane ja huvipakkuv olla.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Isikup\xE4rastamise k\xFCpsised",
          "Meie teenused toimivad paremini, kui suudame neid konkreetsetele kasutajatele kohandada. Isikup\xE4rastamise k\xFCpsiste lubamisega suurendad oma v\xF5imalusi soovitud sisu leida.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/hr.ts
var extra6 = {
  and: "i",
  legalName: "tvrtkama iz poslovne grupacije Alma Career"
};
var config6 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra6), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Kola\u010Di\u0107i \u010Dine na\u0161u stranicu jo\u0161 boljom",
      description: `
      ${assembleDescriptionIntro(
        "Boljim razumijevanjem onoga \u0161to vas zanima, pokazat \u0107emo vam relevantniji\xA0sadr\u017Eaj.",
        lang.descriptionIntro
      )}
      <p>
        Klikom na\xA0gumb \u201EPrihvati sve\u201C, dajete
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        privolu za\xA0upotrebu kola\u010Di\u0107a za personalizaciju, analitiku i\xA0ciljani marketing.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Mo\u017Eete prilagoditi upotrebu kola\u010Di\u0107a u\xA0svojim <strong><a href="" data-cc="c-settings">prilago\u0111enim postavkama</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Prihvati sve",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Prihvati nu\u017Eno", "Prilago\u0111ene postavke")
    },
    settings_modal: {
      title: "Prilago\u0111ene postavke kola\u010Di\u0107a",
      accept_all_btn: "Prihvati sve",
      reject_all_btn: "Prihvati nu\u017Eno",
      save_settings_btn: "Spremi postavke",
      cookie_table_headers: [{ name: "Naziv" }, { description: "Opis" }, { expiration: "Valjanost" }],
      blocks: [
        {
          description: `Ako \u017Eelite maksimalno iskoristiti na\u0161u web stranicu, najbolje je dopustiti sve vrste kola\u010Di\u0107a.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Vi\u0161e informacija o tome \u0161to su kola\u010Di\u0107i i\xA0kako s\xA0njima radimo mo\u017Eete prona\u0107i na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Pravila privatnosti</a>.`}`
        },
        assembleCategoryNecessary(
          "Tehni\u010Dki nu\u017Eni kola\u010Di\u0107i",
          "Ovi kola\u010Di\u0107i su klju\u010Dni za pravilno funkcioniranje na\u0161e web stranice i\xA0stoga ih nije mogu\u0107e onemogu\u0107iti. Bez njih nije mogu\u0107e prikazati sadr\u017Eaj ili se\xA0prijaviti na\xA0na\u0161u web stranicu.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analiti\u010Dki kola\u010Di\u0107i",
          "Ovi nam poma\u017Eu pratiti koliko ljudi posje\u0107uje na\u0161u web stranicu i\xA0kako je koriste. Te\xA0informacije nam omogu\u0107uju kontinuirano pobolj\u0161avanje web stranice i\xA0drugih usluga.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkcionalni kola\u010Di\u0107i",
          "Na\u0161a web stranica djeluje jo\u0161 u\u010Dinkovitije i\xA0bolje zahvaljuju\u0107i ovim kola\u010Di\u0107ima. Na\xA0primjer, omogu\u0107uju nam kori\u0161tenje usluge razgovora i\xA0brzo i\xA0jednostavno odgovaranje na\xA0va\u0161a pitanja.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketing kola\u010Di\u0107i",
          "Ovi kola\u010Di\u0107i nam poma\u017Eu mjeriti u\u010Dinkovitost na\u0161eg ogla\u0161avanja i\xA0ciljanih ponuda usluga. Marketing kola\u010Di\u0107i omogu\u0107uju nam dono\u0161enje vijesti koje bi vas mogle zanimati na\xA0internetu.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personalizacijski kola\u010Di\u0107i",
          "Na\u0161e usluge bolje funkcioniraju ako ih mo\u017Eemo prilagoditi odre\u0111enim korisnicima. Dopu\u0161tanjem personalizacijskih kola\u010Di\u0107a pove\u0107avate \u0161anse da\xA0prona\u0111ete sadr\u017Eaj koji \u017Eelite.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/hu.ts
var extra7 = {
  and: "\xE9s",
  legalName: "Alma Career csoport \xE9s a hozz\xE1 tartoz\xF3 v\xE1llalatok"
};
var config7 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra7), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Az oldalak s\xFCti f\xE1jlokat haszn\xE1lnak",
      description: `
      ${assembleDescriptionIntro(
        "Ha jobban meg\xE9rtj\xFCk, mi \xE9rdekli \xD6nt, akkor pontosabban szem\xE9lyre szabott tartalmat tudunk \xD6nnek megjelen\xEDteni.",
        lang.descriptionIntro
      )}
      <p>
        A\xA0\u201EMindent\xA0elfogadok\u201D gombra kattintva a\xA0hozz\xE1j\xE1rul\xE1s\xE1t adja ahhoz, hogy az
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra7.and)}
        s\xFCti f\xE1jlokat \xE9s egy\xE9b azonos\xEDt\xF3kat haszn\xE1ljon az \xD6n eszk\xF6z\xE9n. E\xA0s\xFCti f\xE1jlok \xE9s egy\xE9b azonos\xEDt\xF3k haszn\xE1lata megk\xF6nny\xEDti a\xA0weboldalon bel\xFCli navig\xE1ci\xF3t, a\xA0szem\xE9lyre szabott tartalom megjelen\xEDt\xE9s\xE9t, a\xA0c\xE9lzott marketinget, valamint term\xE9keink \xE9s szolg\xE1ltat\xE1saink haszn\xE1lat\xE1nak elemz\xE9s\xE9t.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `A\xA0cookie-k haszn\xE1lat\xE1t testre szabhatja <strong><a href="" data-cc="c-settings">saj\xE1t be\xE1ll\xEDt\xE1saiban</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Minden elfogad\xE1sa",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(
        secondaryButtonMode,
        "A\xA0legsz\xFCks\xE9gesebbek elfogad\xE1sa",
        "Egy\xE9ni be\xE1ll\xEDt\xE1sok"
      )
    },
    settings_modal: {
      title: "Egyedi cookie-f\xE1jl be\xE1ll\xEDt\xE1sok",
      accept_all_btn: "Minden elfogad\xE1sa",
      reject_all_btn: "A\xA0legsz\xFCks\xE9gesebbek elfogad\xE1sa",
      save_settings_btn: "Be\xE1ll\xEDt\xE1sok ment\xE9se",
      cookie_table_headers: [{ name: "N\xE9v" }, { description: "Le\xEDr\xE1s" }, { expiration: "\xC9rv\xE9nyess\xE9g" }],
      blocks: [
        {
          description: `Ahhoz, hogy a maximumot hozhassa ki webhely\xFCnkb\u0151l, a\xA0legjobb, ha\xA0enged\xE9lyezi az \xF6sszes cookie t\xEDpust.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Tov\xE1bbi inform\xE1ci\xF3kat arr\xF3l, hogy mik azok a cookie-k \xE9s hogyan dolgozunk vel\xFCk az\xA0<a href="https://www.almacareer.com/gdpr" target="_blank">Adatv\xE9delmi szab\xE1lyzat</a> oldal\xE1n tal\xE1lsz.`}`
        },
        assembleCategoryNecessary(
          "Technikailag sz\xFCks\xE9ges cookie-k",
          "Ezek a\xA0cookie-k weboldalunk megfelel\u0151 m\u0171k\xF6d\xE9s\xE9hez sz\xFCks\xE9gesek, ez\xE9rt kikapcsol\xE1suk nem lehets\xE9ges. N\xE9lk\xFCl\xFCk p\xE9ld\xE1ul semmilyen tartalom nem jelenhetne meg weboldalunkon, vagy nem m\u0171k\xF6dne a\xA0bejelentkez\xE9s.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analitikai cookie-k",
          "Seg\xEDts\xE9g\xFCkkel nyomon k\xF6vetj\xFCk, hogy h\xE1nyan l\xE1togatj\xE1k oldalunkat, \xE9s\xA0hogyan haszn\xE1lj\xE1k. Ennek k\xF6sz\xF6nhet\u0151en tehetj\xFCk meg webhely\xFCnk \xE9s egy\xE9b szolg\xE1ltat\xE1saink folyamatos fejleszt\xE9s\xE9t.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkcion\xE1lis cookie-k",
          "Ezeknek a\xA0cookie-knak k\xF6sz\xF6nhet\u0151en weboldalunk m\xE9g hat\xE9konyabban \xE9s\xA0jobban m\u0171k\xF6dik. P\xE9ld\xE1ul lehet\u0151v\xE9 teszik sz\xE1munkra a\xA0chat haszn\xE1lat\xE1t, hogy gyorsan \xE9s\xA0egyszer\u0171en v\xE1laszolhassunk k\xE9rd\xE9seire.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketing cookie-k",
          "Ezekkel a\xA0cookie-kkel m\xE9rhetj\xFCk le, mennyire hat\xE9konyak a\xA0hirdet\xE9seink \xE9s\xA0szolg\xE1ltat\xE1saink c\xE9lzott aj\xE1nlatai. A\xA0marketing cookie-k lehet\u0151v\xE9 teszik, hogy figyelmeztess\xFCk az interneten megjelen\u0151 olyan h\xEDrekre, amelyek \xE9rdekesek lehetnek az\xA0\xD6n sz\xE1m\xE1ra.m",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Szem\xE9lyre szabott cookie-k",
          "Szolg\xE1ltat\xE1saink jobban m\u0171k\xF6dnek, ha egy adott felhaszn\xE1l\xF3ra tudjuk szabni \u0151ket. A\xA0szem\xE9lyre szabott cookie-k enged\xE9lyez\xE9s\xE9vel n\xF6veli annak es\xE9ly\xE9t, hogy \xE9ppen a\xA0keresett tartalmat tal\xE1lja meg.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/lt.ts
var extra8 = {
  and: "bei",
  legalName: "Alma Career ir kitoms jos verslo grup\u0117s \u012Fmon\u0117ms"
};
var config8 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra8), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Slapukai m\u016Bs\u0173 svetain\u0119 daro dar geresn\u0119",
      description: `
      ${assembleDescriptionIntro(
        "Geriau suprasdami, kas jus domina, mes rodysime jums aktual\u0173\xA0turin\u012F.",
        lang.descriptionIntro
      )}
      <p>
        Spustel\u0117j\u0119 mygtuk\u0105 \u201EPriimti visk\u0105\u201C,\xA0duodate
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        sutikim\u0105 naudoti slapukus personalizavimui, analizei ir tikslinei rinkodarai.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Slapuk\u0173 naudojim\u0105 galite pritaikyti <strong><a href="" data-cc="c-settings">pasirinktinuose nustatymuose</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Priimti visk\u0105",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Priimti b\u016Btinus", "Pasirinktiniai nustatymai")
    },
    settings_modal: {
      title: "Individual\u016Bs slapuk\u0173 nustatymai",
      accept_all_btn: "Priimti visk\u0105",
      reject_all_btn: "Priimti b\u016Btinus",
      save_settings_btn: "I\u0161saugoti nustatymus",
      cookie_table_headers: [{ name: "Pavadinimas" }, { description: "Apra\u0161ymas" }, { expiration: "Apra\u0161ymas" }],
      blocks: [
        {
          description: `Jei norite kuo geriau i\u0161naudoti m\u016Bs\u0173 svetain\u0119, geriausia leisti vis\u0173 tip\u0173 slapukus.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Daugiau informacijos apie tai, kas yra slapukai ir kaip su jais dirbame, galite rasti puslapyje <a href="https://www.almacareer.com/gdpr" target="_blank">Privatumo politika</a>.`}`
        },
        assembleCategoryNecessary(
          "Techni\u0161kai b\u016Btini slapukai",
          "\u0160ie slapukai yra b\u016Btini tinkamam m\u016Bs\u0173 svetain\u0117s veikimui, tod\u0117l j\u0173 negalima i\u0161jungti. Be j\u0173 neb\u016Bt\u0173 \u012Fmanoma pvz. rodyti bet kok\u012F turin\u012F ar prisijungti m\u016Bs\u0173 svetain\u0117je.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analitiniai slapukai",
          "Tai padeda mums steb\u0117ti, kiek \u017Emoni\u0173 lankosi m\u016Bs\u0173 svetain\u0117je ir kaip jie ja naudojasi. \u0160i informacija leid\u017Eia mums nuolat tobulinti svetain\u0119 ir kitas paslaugas.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkciniai slapukai",
          "M\u016Bs\u0173 svetain\u0117 yra dar efektyvesn\u0117 ir veikia geriau d\u0117l \u0161i\u0173 slapuk\u0173.",
          cookieTable
        ),
        assembleCategoryAd(
          "Rinkodaros slapukai",
          "\u0160ie slapukai padeda mums \u012Fvertinti reklamos ir tikslini\u0173 paslaug\u0173 pasi\u016Blym\u0173 efektyvum\u0105. Rinkodaros slapukai leid\u017Eia mums pateikti jums naujienas, kurios gali jus sudominti.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personalizavimo slapukai",
          "M\u016Bs\u0173 paslaugos veikia geriau, jei galime jas pritaikyti konkretiems vartotojams. Leid\u017Eiant personalizuoti slapukus, padidinsite savo galimybes rasti norim\u0105 turin\u012F.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/lv.ts
var extra9 = {
  and: "un",
  legalName: "Alma Career un citiem t\u0101 biznesa grupas uz\u0146\u0113mumiem"
};
var config9 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra9), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "S\u012Bkdatnes padara m\u016Bsu vietnes lieto\u0161anu v\u0113l lab\u0101ku",
      description: `
      ${assembleDescriptionIntro(
        "Lab\u0101k saprastu, kas jums interes\u0113, m\u0113s par\u0101d\u012Bsim atbilsto\u0161\u0101ko saturu.",
        lang.descriptionIntro
      )}
      <p>
        Noklik\u0161\u0137inot uz pogas \u201EPie\u0146emt visas\u201C, j\u016Bs dodat
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        piekri\u0161anu izmantot s\u012Bkdatnes personaliz\u0101cijai, anal\u012Btikai un m\u0113r\u0137\u0113tam m\u0101rketingam.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `J\u016Bs varat piel\u0101got s\u012Bkdat\u0146u izmanto\u0161anu <strong><a href="" data-cc="c-settings">savos iestat\u012Bjumos</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Pie\u0146emt visas",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Pie\u0146emt nepiecie\u0161am\u0101s", "Piel\u0101goti iestat\u012Bjumi")
    },
    settings_modal: {
      title: "Piel\u0101goti s\u012Bkdat\u0146u iestat\u012Bjumi",
      accept_all_btn: "Pie\u0146emt visas",
      reject_all_btn: "Pie\u0146emt nepiecie\u0161am\u0101s",
      save_settings_btn: "Saglab\u0101t iestat\u012Bjumus",
      cookie_table_headers: [{ name: "Nosaukums" }, { description: "Apraksts" }, { expiration: "Apraksts" }],
      blocks: [
        {
          description: `Ja v\u0113laties izmantot m\u016Bsu vietni maksim\u0101li efekt\u012Bvi, ieteicams at\u013Caut visu veidu s\u012Bkdatnes.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Vair\u0101k inform\u0101cijas par to, kas ir s\u012Bkdatnes un k\u0101 m\u0113s ar t\u0101m str\u0101d\u0101jam, J\u016Bs varat atrast sada\u013C\u0101 <a href="https://www.almacareer.com/gdpr" target="_blank">Priv\u0101tuma politika</a>.`}`
        },
        assembleCategoryNecessary(
          "Nepiecie\u0161am\u0101s tehnisk\u0101s s\u012Bkdatnes",
          "\u0160\u012Bs s\u012Bkdatnes ir b\u016Btiskas pilnv\u0113rt\u012Bgai m\u016Bsu vietnes darb\u012Bbai, t\u0101p\u0113c t\u0101s nevar atsp\u0113jot. Bez t\u0101m neb\u016Btu iesp\u0113jams, piem\u0113ram, r\u0101d\u012Bt jebkuru saturu vai pierakst\u012Bties m\u016Bsu vietn\u0113.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Anal\u012Btisk\u0101s s\u012Bkdatnes",
          "\u0160\u012Bs s\u012Bkdatnes pal\u012Bdz mums uzraudz\u012Bt, cik daudz cilv\u0113ku apmekl\u0113 m\u016Bsu vietni un k\u0101 vi\u0146i to izmanto. \u0160\u012B inform\u0101cija \u013Cauj mums nep\u0101rtraukti uzlabot vietni un pakalpojumus.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkcion\u0101l\u0101s s\u012Bkdatnes",
          "M\u016Bsu vietne ir v\u0113l efekt\u012Bv\u0101ka un lab\u0101k darbojas, pateicoties \u0161\u012Bm s\u012Bkdatn\u0113m.",
          cookieTable
        ),
        assembleCategoryAd(
          "M\u0101rketinga s\u012Bkdatnes",
          "\u0160\u012Bs s\u012Bkdatnes pal\u012Bdz mums m\u0113r\u012Bt m\u016Bsu rekl\u0101mas un m\u0113r\u0137\u0113to pakalpojumu pied\u0101v\u0101jumu efektivit\u0101ti. M\u0101rketinga s\u012Bkdatnes \u013Cauj mums internet\u0101 jums pied\u0101v\u0101t jaunumus, kas var\u0113tu j\u016Bs interes\u0113t.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personaliz\u0101cijas s\u012Bkdatnes",
          "M\u016Bsu pakalpojumi darbojas lab\u0101k, ja m\u0113s varam tos piel\u0101got konkr\u0113tiem lietot\u0101jiem. At\u013Caujot personaliz\u0101cijas s\u012Bkdatnes, j\u016Bs palielin\u0101t iesp\u0113jas atrast jums interes\u0113jo\u0161u saturu.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/mk.ts
var extra10 = {
  and: "\u0438",
  company: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438\u0442\u0435",
  companies: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
  legalName: "Alma Career \u0438 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0442\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043A\u043E\u0438 \u0441\u0435 \u0434\u0435\u043B \u043E\u0434 Alma Career \u0433\u0440\u0443\u043F\u0430\u0446\u0438\u0458\u0430\u0442\u0430"
};
var config10 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra10), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "\u041A\u043E\u043B\u0430\u0447\u0438\u045A\u0430\u0442\u0430 \u0441\u043B\u0443\u0436\u0430\u0442 \u0437\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u043E \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0447\u043A\u043E \u0438\u0441\u043A\u0443\u0441\u0442\u0432\u043E.",
      description: `
      ${assembleDescriptionIntro(
        "\u0414\u043E\u043A\u043E\u043B\u043A\u0443 \u043F\u043E\u0434\u043E\u0431\u0440\u043E \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043C\u0435 \u0448\u0442\u043E \u043E\u043D\u0430 \u0448\u0442\u043E \u0432\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438\u0440\u0430, \u045C\u0435 \u0432\u0438 \u043F\u043E\u043A\u0430\u0436\u0435\u043C\u0435 \u043F\u043E\u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u0430 \u0441\u043E\u0434\u0440\u0436\u0438\u043D\u0430.",
        lang.descriptionIntro
      )}
      <p>
        \u0421\u043E \u043A\u043B\u0438\u043A\u043D\u0443\u0432\u0430\u045A\u0435 \u043D\u0430 \u043A\u043E\u043F\u0447\u0435\u0442\u043E \u201E\u041F\u0440\u0438\u0444\u0430\u0442\u0438 \u0433\u0438 \u0441\u0438\u0442\u0435\u201C, \u0438\u043C \u0434\u0430\u0432\u0430\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E\u0441\u0442 \u043D\u0430
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        \u0434\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u0437\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0430, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u0440\u0430\u043D \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `\u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0458\u0430 \u043F\u0440\u0438\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0435 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430\u0442\u0430 \u043D\u0430 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u0432\u043E \u0432\u0430\u0448\u0438\u0442\u0435 <strong><a href="" data-cc="c-settings">\u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "\u041F\u0440\u0438\u0444\u0430\u0442\u0435\u0442\u0435 \u0433\u0438 \u0441\u0438\u0442\u0435",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "\u041F\u0440\u0438\u0444\u0430\u0442\u0435\u0442\u0435 \u0433\u0438 \u043D\u0435\u043E\u043F\u0445\u043E\u0434\u043D\u0438\u0442\u0435", "\u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
    },
    settings_modal: {
      title: "\u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u041A\u043E\u043B\u0430\u0447\u0438\u045A\u0430\u0442\u0430",
      accept_all_btn: "\u041F\u0440\u0438\u0444\u0430\u0442\u0435\u0442\u0435 \u0433\u0438 \u0441\u0438\u0442\u0435",
      reject_all_btn: "\u041F\u0440\u0438\u0444\u0430\u0442\u0435\u0442\u0435 \u0433\u0438 \u043D\u0435\u043E\u043F\u0445\u043E\u0434\u043D\u0438\u0442\u0435",
      save_settings_btn: "\u0417\u0430\u0447\u0443\u0432\u0430\u0458\u0442\u0435 \u0433\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438\u0442\u0435",
      cookie_table_headers: [{ name: "\u041D\u0430\u0437\u0438\u0432" }, { description: "\u041E\u043F\u0438\u0441" }, { expiration: "\u0418\u0441\u0442\u0435\u043A\u0443\u0432\u0430\u045A\u0435" }],
      blocks: [
        {
          description: `\u0410\u043A\u043E \u0441\u0430\u043A\u0430\u0442\u0435 \u0434\u0430 \u0433\u043E \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u0442\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C\u043E\u0442 \u043E\u0434 \u043D\u0430\u0448\u0430\u0442\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0430, \u043D\u0430\u0458\u0434\u043E\u0431\u0440\u043E \u0435 \u0434\u0430 \u0433\u0438 \u043F\u0440\u0438\u0444\u0430\u0442\u0438\u0442\u0435 \u0441\u0438\u0442\u0435 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `\u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043D\u0430\u0458\u0434\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u045C\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0437\u0430 \u0442\u043E\u0430 \u0448\u0442\u043E \u0441\u0435 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u0438 \u043A\u0430\u043A\u043E \u0440\u0430\u0431\u043E\u0442\u0438\u043C\u0435 \u0441\u043E \u043D\u0438\u0432 \u0432\u043E \u0434\u0435\u043B\u043E\u0442 <a href="https://www.almacareer.com/gdpr" target="_blank">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442</a>.`}`
        },
        assembleCategoryNecessary(
          "\u0422\u0435\u0445\u043D\u0438\u0447\u043A\u0438 \u043D\u0435\u043E\u043F\u0445\u043E\u0434\u043D\u0438 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430",
          "\u041E\u0432\u0438\u0435 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u0441\u0435 \u043E\u0434 \u0441\u0443\u0448\u0442\u0438\u043D\u0441\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u045A\u0435 \u0437\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u043D\u043E\u0442\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0430\u045A\u0435 \u043D\u0430 \u043D\u0430\u0448\u0430\u0442\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0430 \u0438 \u0437\u0430\u0442\u043E\u0430 \u043D\u0435 \u043C\u043E\u0436\u0430\u0442 \u0434\u0430 \u0441\u0435 \u043E\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0430\u0442. \u0411\u0435\u0437 \u043D\u0438\u0432 \u043D\u0435 \u0431\u0438 \u0431\u0438\u043B\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043A\u0430\u0436\u0443\u0432\u0430\u045A\u0435 \u043D\u0430 \u043A\u043E\u0458\u0430 \u0431\u0438\u043B\u043E \u0441\u043E\u0434\u0440\u0436\u0438\u043D\u0430 \u0438\u043B\u0438 \u043D\u0430\u0458\u0430\u0432\u0443\u0432\u0430\u045A\u0435 \u043D\u0430 \u043D\u0430\u0448\u0430\u0442\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0430.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u043A\u0438 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430",
          "\u041E\u0432\u0438\u0435 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u043D\u0438 \u043F\u043E\u043C\u0430\u0433\u0430\u0430\u0442 \u0434\u0430 \u0441\u043B\u0435\u0434\u0438\u043C\u0435 \u043A\u043E\u043B\u043A\u0443 \u043B\u0443\u0453\u0435 \u0458\u0430 \u043F\u043E\u0441\u0435\u0442\u0443\u0432\u0430\u0430\u0442 \u043D\u0430\u0448\u0430\u0442\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0430 \u0438 \u043A\u0430\u043A\u043E \u0458\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442. \u041E\u0432\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u043E\u0442\u043E\u0430 \u043D\u0438 \u043E\u0432\u043E\u0437\u043C\u043E\u0436\u0443\u0432\u0430\u0430\u0442 \u043F\u043E\u0441\u0442\u043E\u0458\u0430\u043D\u043E \u0434\u0430 \u0458\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u0443\u0432\u0430\u043C\u0435 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430",
          "\u041D\u0430\u0448\u0430\u0442\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0430 \u0435 \u0443\u0448\u0442\u0435 \u043F\u043E\u0435\u0444\u0438\u043A\u0430\u0441\u043D\u0430 \u0438 \u0440\u0430\u0431\u043E\u0442\u0438 \u043F\u043E\u0434\u043E\u0431\u0440\u043E \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0432\u0438\u0435 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430. \u041D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440, \u0442\u0438\u0435 \u043D\u0438 \u043E\u0432\u043E\u0437\u043C\u043E\u0436\u0443\u0432\u0430\u0430\u0442 \u0434\u0430 \u0458\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u043C\u0435 \u043E\u043F\u0446\u0438\u0458\u0430\u0442\u0430 \u0437\u0430 \u0447\u0435\u0442 \u0438 \u0434\u0430 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438\u043C\u0435 \u043D\u0430 \u0432\u0430\u0448\u0438\u0442\u0435 \u043F\u0440\u0430\u0448\u0430\u045A\u0430 \u0431\u0440\u0437\u043E \u0438 \u043B\u0435\u0441\u043D\u043E.",
          cookieTable
        ),
        assembleCategoryAd(
          "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430",
          "\u041E\u0432\u0438\u0435 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u043D\u0438 \u043F\u043E\u043C\u0430\u0433\u0430\u0430\u0442 \u0434\u0430 \u0458\u0430 \u0438\u0437\u043C\u0435\u0440\u0438\u043C\u0435 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0430 \u043D\u0430 \u043D\u0430\u0448\u0438\u0442\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438. \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430\u0442\u0430 \u043D\u0438 \u043E\u0432\u043E\u0437\u043C\u043E\u0436\u0443\u0432\u0430\u0430\u0442 \u0434\u0430 \u0432\u0438 \u043F\u043B\u0430\u0441\u0438\u0440\u0430\u043C\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0448\u0442\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u0432\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438\u0440\u0430\u0430\u0442.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "\u041A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u0437\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0430",
          "\u0413\u0438 \u0443\u043D\u0430\u043F\u0440\u0435\u0434\u0443\u0432\u0430\u043C\u0435 \u043D\u0430\u0448\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0434\u043E\u043A\u043E\u043B\u043A\u0443 \u043C\u043E\u0436\u0435\u043C\u0435 \u0434\u0430 \u0433\u0438 \u043F\u0440\u0438\u043B\u0430\u0433\u043E\u0434\u0438\u043C\u0435 \u043D\u0430 \u043E\u0434\u0440\u0435\u0434\u0435\u043D\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0446\u0438. \u0414\u043E\u0437\u0432\u043E\u043B\u0443\u0432\u0430\u0458\u045C\u0438 \u043A\u043E\u043B\u0430\u0447\u0438\u045A\u0430 \u0437\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0430, \u0433\u0438 \u0437\u0433\u043E\u043B\u0435\u043C\u0443\u0432\u0430\u0442\u0435 \u0432\u0430\u0448\u0438\u0442\u0435 \u0448\u0430\u043D\u0441\u0438 \u0434\u0430 \u0458\u0430 \u043F\u0440\u043E\u043D\u0430\u0458\u0434\u0435\u0442\u0435 \u0441\u043E\u0434\u0440\u0436\u0438\u043D\u0430\u0442\u0430 \u0448\u0442\u043E \u0458\u0430 \u0441\u0430\u043A\u0430\u0442\u0435.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/pl.ts
var extra11 = {
  and: "i",
  company: "firm\u0119",
  companies: "firmy",
  legalName: "Alma Career i\xA0firmy z\xA0jej grupy biznesowej"
};
var config11 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra11), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Dzi\u0119ki plikom Cookies nasza strona b\u0119dzie jeszcze lepsza",
      description: `
      ${assembleDescriptionIntro(
        "Gdy lepiej zrozumiemy, co\xA0Ci\u0119 interesuje, poka\u017Cemy dok\u0142adniejsze tre\u015Bci dopasowane do\xA0Twoich preferencji.",
        lang.descriptionIntro
      )}
      <p>
        Kliknij w\xA0przycisk \u201EAkceptuj wszystkie\u201D, aby wyrazi\u0107 zgod\u0119 na\xA0wykorzystanie plik\xF3w cookie przez
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra11.and)}
        do personalizacji, analizy i\xA0ukierunkowanego marketingu.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Korzystanie z\xA0plik\xF3w cookies mo\u017Cesz dostosowa\u0107 we\xA0<strong><a href="" data-cc="c-settings">w\u0142asnych ustawieniach</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Akceptuj wszystkie",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Akceptuj niezb\u0119dne", "W\u0142asne ustawienia")
    },
    settings_modal: {
      title: "W\u0142asne ustawienia plik\xF3w cookies",
      accept_all_btn: "Akceptuj wszystkie",
      reject_all_btn: "Akceptuj niezb\u0119dne",
      save_settings_btn: "Zapisz ustawienia",
      cookie_table_headers: [{ name: "Nazwa" }, { description: "Opis" }, { expiration: "Wa\u017Cno\u015B\u0107 (Do)" }],
      blocks: [
        {
          description: `Aby w\xA0pe\u0142ni wykorzysta\u0107 mo\u017Cliwo\u015Bci naszej strony, najlepiej jest zezwoli\u0107 na\xA0wszystkie rodzaje plik\xF3w cookies.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Wi\u0119cej informacji na temat tego, czym s\u0105 pliki cookies i\xA0jak z nimi pracujemy, znajdziesz w\xA0naszej <a href="https://www.almacareer.com/gdpr" target="_blank">Polityce plik\xF3w\xA0cookie</a>.`}`
        },
        assembleCategoryNecessary(
          "Technicznie niezb\u0119dne pliki cookies",
          "Te\xA0pliki cookies s\u0105 niezb\u0119dne do prawid\u0142owego funkcjonowania naszej strony internetowej, dlatego nie ma mo\u017Cliwo\u015Bci ich wy\u0142\u0105czenia. Bez nich na naszej stronie na\xA0przyk\u0142ad nie mo\u017Cna by\u0142oby wy\u015Bwietli\u0107 \u017Cadnej tre\u015Bci lub nie dzia\u0142a\u0142oby logowanie.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analityczne pliki cookies",
          "U\u017Cywamy ich do \u015Bledzenia, ile os\xF3b odwiedza nasz\u0105 stron\u0119 internetow\u0105 i\xA0jak z\xA0niej korzysta. Dzi\u0119ki temu mo\u017Cemy stale ulepsza\u0107 stron\u0119 i\xA0inne us\u0142ugi.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkcjonalne pliki cookies",
          "Te\xA0pliki cookies sprawiaj\u0105, \u017Ce nasza strona internetowa jest jeszcze bardziej wydajna i\xA0dzia\u0142a lepiej. Pozwalaj\u0105 nam na\xA0przyk\u0142ad korzysta\u0107 z\xA0czatu, dzi\u0119ki temu mo\u017Cemy szybko i\xA0\u0142atwo odpowiada\u0107 na\xA0Twoje pytania.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketingowe pliki cookies",
          "Za\xA0pomoc\u0105 tych plik\xF3w cookies mo\u017Cemy mierzy\u0107, jak skuteczne s\u0105 nasze reklamy i\xA0ukierunkowane oferty naszych us\u0142ug. Marketingowe pliki cookies pozwalaj\u0105 nam powiadamia\u0107 Ci\u0119 w\xA0Internecie o\xA0nowo\u015Bciach, kt\xF3re mog\u0105 Ci\u0119\xA0zainteresowa\u0107.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personalizacyjne pliki cookies",
          "Nasze us\u0142ugi dzia\u0142aj\u0105 lepiej, gdy mo\u017Cemy je dostosowa\u0107 do\xA0konkretnego u\u017Cytkownika. W\u0142\u0105czeniem personalizacyjnych plik\xF3w cookies zwi\u0119kszasz szans\u0119 na\xA0znalezienie w\u0142a\u015Bnie tych tre\u015Bci, kt\xF3rych poszukujesz.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/ru.ts
var extra12 = {
  and: "\u0438",
  company: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C",
  companies: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C",
  legalName: "Alma Career \u0438\xA0\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0435\u0435 \u0433\u0440\u0443\u043F\u043F\u044B"
};
var config12 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra12), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B cookie",
      description: `
      ${assembleDescriptionIntro(
        "\u041A\u043E\u0433\u0434\u0430 \u043C\u044B \u043B\u0443\u0447\u0448\u0435 \u043F\u043E\u0439\u043C\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442, \u043C\u044B \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0432\u0430\u043C \u043B\u0443\u0447\u0448\u0438\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442.",
        lang.descriptionIntro
      )}
      <p>
        \u041D\u0430\u0436\u0430\u0432 \xAB\u041F\u0440\u0438\u043D\u044F\u0442\u044C\xA0\u0432\u0441\u0435\xBB, \u0412\u044B \u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u043D\u0430 \u0412\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430, \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433, \u0430\u043D\u0430\u043B\u0438\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438\xA0\u0443\u0441\u043B\u0443\u0433.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u0432\xA0<strong><a href="" data-cc="c-settings">\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C\xA0\u0432\u0441\u0435",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "\u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435\xA0\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E", "C\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0439")
    },
    settings_modal: {
      title: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432 cookies",
      accept_all_btn: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C\xA0\u0432\u0441\u0435",
      reject_all_btn: "\u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435\xA0\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E",
      save_settings_btn: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      cookie_table_headers: [{ name: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" }, { description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }, { expiration: "\u0421\u0440\u043E\u043A \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F" }],
      blocks: [
        {
          description: `\u0427\u0442\u043E\u0431\u044B \u0412\u044B \u043C\u043E\u0433\u043B\u0438 \u0432 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0435\u0440\u0435 \u0438 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430\u0448\u0438\u043C \u0441\u0430\u0439\u0442\u043E\u043C, \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C
            \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u0442\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432 cookie.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0444\u0430\u0439\u043B\u044B cookies, \u0438 \u043A\u0430\u043A \u043C\u044B \u0441 \u043D\u0438\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C, \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 <a href="https://www.almacareer.com/gdpr" target="_blank">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a>.`}`
        },
        assembleCategoryNecessary(
          "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie",
          "\u042D\u0442\u0438 \u0444\u0430\u0439\u043B\u044B cookie \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430\u0448\u0435\u0433\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438\u0445 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C. \u0411\u0435\u0437 \u043D\u0438\u0445, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u043A\u0430\u043A\u043E\u0435-\u043B\u0438\u0431\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0431\u044B\u043B\u043E \u0431\u044B \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0439\u0442\u0438 \u0432\xA0\u0441\u0438\u0441\u0442\u0435\u043C\u0443.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0444\u0430\u0439\u043B\u044B cookie",
          "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0438\u0445, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u044E\u0434\u0435\u0439 \u043F\u043E\u0441\u0435\u0449\u0430\u044E\u0442 \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0438\xA0\u043A\u0430\u043A \u043E\u043D\u0438 \u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0442\u044C \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "\u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie",
          "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u0438\u043C \u0444\u0430\u0439\u043B\u0430\u043C cookie \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0441\u0442\u0430\u043B \u0435\u0449\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u0435\u0435 \u0438\xA0\u0443\u043B\u0443\u0447\u0448\u0438\u043B \u0440\u0430\u0431\u043E\u0442\u0443. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043E\u043D\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043D\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0447\u0430\u0442, \u0447\u0442\u043E\u0431\u044B \u043C\u044B \u043C\u043E\u0433\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.",
          cookieTable
        ),
        assembleCategoryAd(
          "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie",
          "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u044D\u0442\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0437\u043C\u0435\u0440\u0438\u0442\u044C, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B \u043D\u0430\u0448\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0438\xA0\u0446\u0435\u043B\u0435\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433. \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043D\u0430\u043C \u043F\u043E \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0412\u0430\u0441 \u043E\xA0\u043D\u043E\u0432\u043E\u0441\u0442\u044F\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0432\u0430\u0441 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "\u0424\u0430\u0439\u043B\u044B cookie \u0434\u043B\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438",
          "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043B\u0443\u0447\u0448\u0435, \u043A\u043E\u0433\u0434\u0430 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u0440\u0438\u0441\u043F\u043E\u0441\u043E\u0431\u0438\u0442\u044C \u0438\u0445 \u043A\xA0\u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E. \u0412\u043A\u043B\u044E\u0447\u0438\u0432 \u0444\u0430\u0439\u043B\u044B cookie \u0434\u043B\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u0432\u044B \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u0435 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438\u0449\u0435\u0442\u0435.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/sk.ts
var extra13 = {
  and: "a",
  company: "spolo\u010Dnosti",
  companies: "spolo\u010Dnostiam",
  legalName: "Alma Career a\xA0spolo\u010Dnostiam z\xA0jej obchodn\xE9 skupiny"
};
var config13 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra13), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "S cookies v\xE1m vieme lep\u0161ie prisp\xF4sobi\u0165 str\xE1nku",
      description: `
      ${assembleDescriptionIntro(
        "Presnej\u0161\xED obsah\xA0na\xA0mieru v\xE1m budeme zobrazova\u0165, ke\u010F\xA0lep\u0161ie pochop\xEDme, \u010Do\xA0v\xE1s\xA0zauj\xEDma.",
        lang.descriptionIntro
      )}
      <p>
        Kliknut\xEDm na\xA0tla\u010Didlo \u201EPrija\u0165 v\u0161etky\u201C d\xE1te
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        s\xFAhlas s\xA0vyu\u017E\xEDvan\xEDm s\xFAborov Cookies za\xA0\xFA\u010Delom personaliz\xE1cie, anal\xFDzy a\xA0cielen\xE9ho marketingu.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Viac inform\xE1ci\xED o\xA0Cookies a\xA0\xFApravu ich pou\u017E\xEDvania n\xE1jdete vo\xA0<strong><a href="" data-cc="c-settings">vlastnom nastaven\xED</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Prija\u0165 v\u0161etky",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Prija\u0165 nevyhnutn\xE9", "Vlastn\xE9 nastavenia")
    },
    settings_modal: {
      title: "Prisp\xF4sobi\u0165 nastavenia cookies",
      accept_all_btn: "Prija\u0165 v\u0161etky",
      reject_all_btn: "Prija\u0165 nevyhnutn\xE9",
      save_settings_btn: "Ulo\u017Ei\u0165 nastavenia",
      cookie_table_headers: [{ name: "N\xE1zov" }, { description: "Popis" }, { expiration: "Platnos\u0165" }],
      blocks: [
        {
          description: `Aby ste z\xA0na\u0161ich str\xE1nok z\xEDskali maximum, je najlep\u0161ie povoli\u0165 v\u0161etky typy cookies.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `\u010Eal\u0161ie inform\xE1cie o\xA0tom, \u010Do s\xFA cookies a\xA0ako s\xA0nimi pracujeme, n\xE1jdete v\xA0<a href="https://www.almacareer.com/gdpr" target="_blank">Z\xE1sad\xE1ch\xA0cookies</a>.`}`
        },
        assembleCategoryNecessary(
          "Technicky nevyhnutn\xE9 cookies",
          "Tieto cookies s\xFA pre\xA0spr\xE1vne fungovanie n\xE1\u0161ho webu nevyhnutn\xE9, preto nie je mo\u017En\xE9 ich vypn\xFA\u0165. Bez nich by sa na\xA0na\u0161ich str\xE1nkach napr.\xA0nedal zobrazi\u0165 \u017Eiadny obsah alebo by\xA0nefungovalo prihl\xE1senie.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analytick\xE9 cookies",
          "Pomocou nich sledujeme, ko\u013Eko \u013Eud\xED n\xE1\u0161 web nav\u0161tevuje a\xA0ako ho pou\u017E\xEDvaj\xFA. V\u010Faka tomu m\xF4\u017Eeme str\xE1nky a\xA0\u010Fal\u0161ie slu\u017Eby neust\xE1le vylep\u0161ova\u0165.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funk\u010Dn\xE9 cookies",
          "V\u010Faka t\xFDmto cookies s\xFA na\u0161e str\xE1nky e\u0161te v\xFDkonnej\u0161ie a\xA0funguj\xFA lep\u0161ie. Napr\xEDklad n\xE1m umo\u017E\u0148uj\xFA pou\u017E\xEDva\u0165 chat, aby sme na va\u0161e ot\xE1zky mohli odpoveda\u0165 r\xFDchlo a\xA0jednoducho.",
          cookieTable
        ),
        assembleCategoryAd(
          "Marketingov\xE9 cookies",
          "S\xA0t\xFDmito cookies m\xF4\u017Eeme mera\u0165, ak\xE1 efekt\xEDvna je na\u0161a reklama a\xA0cielen\xE9 ponuky na\u0161ich slu\u017Eieb. Marketingov\xE9 cookies n\xE1m umo\u017Enia v\xE1s na\xA0internete upozorni\u0165 na novinky, ktor\xE9 v\xE1s m\xF4\u017Eu zauj\xEDma\u0165.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Personaliza\u010Dn\xE9 cookies",
          "Na\u0161e slu\u017Eby funguj\xFA lep\u0161ie, ke\u010F ich m\xF4\u017Eeme prisp\xF4sobi\u0165 na\xA0mieru konkr\xE9tnemu pou\u017E\xEDvate\u013Eovi. Povolen\xEDm personaliza\u010Dn\xFDch cookies zv\xFD\u0161ite \u0161ancu, \u017Ee\xA0n\xE1jdete pr\xE1ve tak\xFD obsah, ak\xFD\xA0h\u013Ead\xE1te.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/sl.ts
var extra14 = {
  and: "in",
  legalName: "iz poslovne skupine Alma Career"
};
var config14 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra14), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "Pi\u0161kotki izbolj\u0161ujejo na\u0161o spletno stran",
      description: `
      ${assembleDescriptionIntro(
        "Z bolj\u0161im razumevanjem, kaj vas zanima, vam bomo prikazali bolj relevantno\xA0vsebino.",
        lang.descriptionIntro
      )}
      <p>
        S\xA0klikom na\xA0gumb \u201ESprejmi vse\u201C dajete soglasje podjetjem
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        za\xA0uporabo pi\u0161kotkov za\xA0personalizacijo, analitiko in ciljno ogla\u0161evanje.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `Uporabo pi\u0161kotkov lahko prilagodite v\xA0<strong><a href="" data-cc="c-settings">svojih nastavitvah</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "Sprejmi vse",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "Sprejmi samo nujne", "Shrani nastavitve")
    },
    settings_modal: {
      title: "Prilagojene nastavitve pi\u0161kotkov",
      accept_all_btn: "Sprejmi vse",
      reject_all_btn: "Sprejmi samo nujne",
      save_settings_btn: "Shrani nastavitve",
      cookie_table_headers: [{ name: "Naziv" }, { description: "Opis" }, { expiration: "Potek" }],
      blocks: [
        {
          description: `\u010Ce \u017Eelite najbolje izkoristiti na\u0161o spletno stran, je najbolje, da dovolite vse vrste pi\u0161kotkov.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `Ve\u010D informacij o\xA0tem, kaj so pi\u0161kotki in\xA0kako z\xA0njimi upravljamo, najdete na\xA0strani <a href="https://www.almacareer.com/gdpr" target="_blank">Pravilnik o zasebnosti</a>.`}`
        },
        assembleCategoryNecessary(
          "Tehni\u010Dno nujni pi\u0161kotki",
          "Ti pi\u0161kotki so bistveni za pravilno delovanje na\u0161e spletne strani in\xA0jih ni\xA0mogo\u010De izklopiti. Brez njih ne\xA0bi\xA0bilo mogo\u010De prikazati vsebine ali se\xA0prijaviti na\xA0na\u0161o spletno stran.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "Analiti\u010Dni pi\u0161kotki",
          "Ti nam pomagajo spremljati, koliko ljudi obi\u0161\u010De na\u0161o spletno stran in\xA0kako jo uporabljajo. Te informacije nam omogo\u010Dajo nenehno izbolj\u0161evanje spletne strani in\xA0drugih storitev.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "Funkcionalni pi\u0161kotki",
          "Na\u0161a spletna stran je \u0161e u\u010Dinkovitej\u0161a in\xA0bolje deluje zaradi teh pi\u0161kotkov. Na primer, omogo\u010Dajo nam uporabo klepetalne storitve in\xA0hitro ter enostavno odgovarjanje na\xA0va\u0161a vpra\u0161anja.",
          cookieTable
        ),
        assembleCategoryAd(
          "Tr\u017Eenjski pi\u0161kotki",
          "Ti pi\u0161kotki nam pomagajo meriti u\u010Dinkovitost na\u0161ega ogla\u0161evanja in\xA0ciljnih ponudb storitev. Tr\u017Eenjski pi\u0161kotki nam omogo\u010Dajo, da vam na\xA0internetu prina\u0161amo novice, ki vas morda zanimajo.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "Pi\u0161kotki za prilagajanje",
          "Na\u0161e storitve bolje delujejo, \u010De jih lahko prilagodimo dolo\u010Denim uporabnikom. Z\xA0dovoljenjem pi\u0161kotkov za prilagajanje pove\u010Date mo\u017Enosti, da najdete vsebino, ki jo\xA0\u017Eelite.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/uk.ts
var extra15 = {
  and: "i",
  company: "\u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\u043C",
  companies: "\u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\u043C",
  legalName: "Alma Career \u0442\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\u043C \u0437\xA0\u0457\u0457 \u0433\u0440\u0443\u043F\u0438"
};
var config15 = (extraMessages, secondaryButtonMode, cookieTable) => {
  var _a, _b;
  const lang = __spreadValues(__spreadValues({}, extra15), extraMessages);
  return {
    consent_modal: {
      title: (_a = lang.consentTitle) != null ? _a : "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookie",
      description: `
      ${assembleDescriptionIntro(
        "\u042F\u043A\u0449\u043E \u043C\u0438 \u043A\u0440\u0430\u0449\u0435 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0454\u043C\u043E, \u0449\u043E \u0432\u0430\u0441 \u0446\u0456\u043A\u0430\u0432\u0438\u0442\u044C, \u043C\u0438 \u043F\u043E\u043A\u0430\u0436\u0435\u043C\u043E \u0432\u0430\u043C \u0442\u043E\u0447\u043D\u0456\u0448\u0438\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442.",
        lang.descriptionIntro
      )}
      <p>
        \u041D\u0430\u0442\u0438\u0441\u043D\u0443\u0432\u0448\u0438 \xAB\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438\xA0\u0432\u0441\u0435\xBB, \u0412\u0438 \u0434\u0430\u0454\u0442\u0435 \u0441\u0432\u043E\u044E \u0437\u0433\u043E\u0434\u0443
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 cookie \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440\u0456\u0432 \u043D\u0430 \u0412\u0430\u0448\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0446\u0438\u0445 \u0444\u0430\u0439\u043B\u0456\u0432 cookie \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440\u0456\u0432 \u043F\u043E\u043B\u0435\u0433\u0448\u0438\u0442\u044C \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044E \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433, \u0430\u043D\u0430\u043B\u0456\u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0456\xA0\u043F\u043E\u0441\u043B\u0443\u0433.
        ${isSettingsButtonNotShown(secondaryButtonMode) ? `\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 Cookies \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0432\xA0\u0441\u0432\u043E\u0457\u0445 <strong><a href="" data-cc="c-settings">\u0432\u043B\u0430\u0441\u043D\u0438\u0445 \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445</a></strong>.` : ""}
      </p>`,
      primary_btn: {
        text: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438\xA0\u0432\u0441\u0435",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F\xA0\u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E", "\u0412\u043B\u0430\u0441\u043D\u0439e \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u0439e")
    },
    settings_modal: {
      title: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 Cookies",
      accept_all_btn: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438\xA0\u0432\u0441\u0435",
      reject_all_btn: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F\xA0\u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E",
      save_settings_btn: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
      cookie_table_headers: [{ name: "\u041D\u0430\u0437\u0432\u0430" }, { description: "\u041E\u043F\u0438\u0441" }, { expiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0414\u0456\u0457" }],
      blocks: [
        {
          description: `\u0429\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443 \u0432\u0456\u0434\u0434\u0430\u0447\u0443 \u0432\u0456\u0434 \u043D\u0430\u0448\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443, \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u0438 \u0432\u0441\u0456 \u0442\u0438\u043F\u0438 \u0444\u0430\u0439\u043B\u0456\u0432 Cookies.
            ${(_b = lang.settingsModalMoreInfo) != null ? _b : `\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u0442\u0435, \u0449\u043E \u0442\u0430\u043A\u0435 \u0444\u0430\u0439\u043B\u0438 Cookies, \u0456 \u044F\u043A \u043C\u0438 \u0437 \u043D\u0438\u043C\u0438 \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E, \u043C\u043E\u0436\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u0445 <a href="https://www.almacareer.com/gdpr" target="_blank">\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456</a>.`}`
        },
        assembleCategoryNecessary(
          "\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies",
          "\u0426\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443, \u0442\u043E\u043C\u0443 \u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0457\u0445 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E. \u0411\u0435\u0437 \u043D\u0438\u0445 \u0431\u0443\u043B\u043E \u0431 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456 \u0439\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0430\u0431\u043E \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432 \u0431\u0438 \u0432\u0445\u0456\u0434 \u043D\u0430 \u0441\u0430\u0439\u0442.",
          cookieTable
        ),
        assembleCategoryAnalytics(
          "\u0410\u043D\u0430\u043B\u0456\u0442\u0438\u0447\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies",
          "\u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0457\u0445 \u0434\u043B\u044F \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F \u0442\u043E\u0433\u043E, \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043B\u044E\u0434\u0435\u0439 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u044E\u0442\u044C \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0456\xA0\u044F\u043A \u0432\u043E\u043D\u0438 \u043D\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u044E\u0442\u044C\u0441\u044F. \u0417\u0430\u0432\u0434\u044F\u043A\u0438 \u0446\u044C\u043E\u043C\u0443 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0432\u0430\u0442\u0438 \u0441\u0430\u0439\u0442 \u0442\u0430 \u0456\u043D\u0448\u0456 \u0441\u0435\u0440\u0432\u0456\u0441\u0438.",
          cookieTable
        ),
        assembleCategoryFunctionality(
          "\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies",
          "\u0426\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies \u0440\u043E\u0431\u043B\u044F\u0442\u044C \u043D\u0430\u0448 \u0441\u0430\u0439\u0442 \u0449\u0435 \u0431\u0456\u043B\u044C\u0448 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0438\u043C \u0456\xA0\u043F\u043E\u043A\u0440\u0430\u0449\u0443\u044E\u0442\u044C \u0439\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0443. \u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0432\u043E\u043D\u0438 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442\u044C \u043D\u0430\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0447\u0430\u0442, \u0449\u043E\u0431 \u0448\u0432\u0438\u0434\u043A\u043E \u0456\xA0\u043B\u0435\u0433\u043A\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u043D\u0430 \u0432\u0430\u0448\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F.",
          cookieTable
        ),
        assembleCategoryAd(
          "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies",
          "\u0417\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0446\u0438\u0445 \u0444\u0430\u0439\u043B\u0456\u0432 Cookies \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043E\u0446\u0456\u043D\u0438\u0442\u0438, \u043D\u0430\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430 \u043D\u0430\u0448\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0456\xA0\u0446\u0456\u043B\u044C\u043E\u0432\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u0441\u043B\u0443\u0433. \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442\u044C \u043D\u0430\u043C \u0456\u043D\u0444\u043E\u0440\u043C\u0443\u0432\u0430\u0442\u0438 \u0412\u0430\u0441 \u0432\xA0\u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0456 \u043F\u0440\u043E \u043D\u043E\u0432\u0438\u043D\u0438, \u044F\u043A\u0456 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0430\u0441 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u0438\u0442\u0438.",
          cookieTable
        ),
        assembleCategoryPersonalization(
          "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies",
          "\u041D\u0430\u0448\u0456 \u0441\u0435\u0440\u0432\u0456\u0441\u0438 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C \u043A\u0440\u0430\u0449\u0435, \u043A\u043E\u043B\u0438 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0430\u0434\u0430\u043F\u0442\u0443\u0432\u0430\u0442\u0438 \u0457\u0445 \u0434\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430. \u0414\u043E\u0437\u0432\u043E\u043B\u0438\u0432\u0448\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 Cookies, \u0432\u0438 \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454\u0442\u0435 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0441\u0442\u044C \u0442\u043E\u0433\u043E, \u0449\u043E \u0437\u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0438\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442.",
          cookieTable
        )
      ]
    }
  };
};

// src/languages/loader.ts
var languagesMap = {
  bs: config,
  cs: config2,
  de: config3,
  en: config4,
  et: config5,
  hr: config6,
  hu: config7,
  lt: config8,
  lv: config9,
  mk: config10,
  pl: config11,
  ru: config12,
  sk: config13,
  sl: config14,
  uk: config15
};
var assembleLanguagesConfig = (companyNames, translationOverrides, secondaryButtonMode, cookieTable) => Object.entries(languagesMap).reduce((languagesConfig, [code, configFunction]) => {
  languagesConfig[code] = configFunction(
    __spreadValues({ companyNames }, translationOverrides[code]),
    secondaryButtonMode,
    cookieTable[code] || {}
  );
  return languagesConfig;
}, {});

// src/LmcCookieConsentManager.ts
var noopAcceptCallback = (cookieConsent) => {
};
var noopChangeCallback = (cookieConsent, categories) => {
};
var defaultOptions = {
  defaultLang: "cs",
  autodetectLang: true,
  consentCollectorApiUrl: "https://ccm.lmc.cz/local-data-acceptation-data-entries",
  onFirstAccept: noopAcceptCallback,
  onAccept: noopAcceptCallback,
  onChange: noopChangeCallback,
  companyNames: ["Alma Career"],
  displayMode: DisplayMode.FORCE,
  secondaryButtonMode: SecondaryButtonMode.ACCEPT_NECESSARY,
  translationOverrides: {},
  cookieTable: {},
  config: {}
};
var LmcCookieConsentManager = (serviceName, args) => {
  if (!serviceName || serviceName === "" || typeof serviceName !== "string") {
    throw new Error("serviceName is a required parameter and must be a string");
  }
  const options = __spreadValues(__spreadValues({}, defaultOptions), args);
  const {
    defaultLang,
    autodetectLang,
    consentCollectorApiUrl,
    onFirstAccept,
    onAccept,
    onChange,
    companyNames,
    displayMode,
    secondaryButtonMode,
    translationOverrides,
    cookieTable,
    config: config16
  } = options;
  const cookieName = "lmc_ccm";
  const cookieConsent = window.initCookieConsent();
  const onFirstAcceptHandler = (userPreferences, cookie) => {
    const cookieData = cookieConsent.get("data");
    if (cookieData == null || !("uid" in cookieData)) {
      cookieConsent.set("data", {
        value: { serviceName, uid: nanoid() },
        mode: "update"
      });
    }
    pushToDataLayer(cookie);
    if (consentCollectorApiUrl !== null) {
      consentCollector_default(consentCollectorApiUrl, cookieConsent);
    }
    onFirstAccept(cookieConsent);
  };
  const onAcceptHandler = () => {
    onAccept(cookieConsent);
  };
  const onChangeHandler = (cookie, changedCategories) => {
    const userPreferences = cookieConsent.getUserPreferences();
    const categories = {
      accepted: userPreferences.accepted_categories,
      rejected: userPreferences.rejected_categories,
      changed: changedCategories
    };
    pushToDataLayer(cookie);
    if (consentCollectorApiUrl !== null) {
      consentCollector_default(consentCollectorApiUrl, cookieConsent);
    }
    onChange(cookieConsent, categories);
  };
  const cookieConsentConfig = __spreadValues({
    auto_language: autodetectLang ? "document" : null,
    autorun: true,
    cookie_expiration: 365,
    cookie_necessary_only_expiration: 60,
    cookie_name: cookieName,
    current_lang: defaultLang,
    delay: 0,
    force_consent: displayMode === DisplayMode.FORCE,
    hide_from_bots: true,
    page_scripts: true,
    use_rfc_cookie: true,
    gui_options: {
      consent_modal: {
        layout: displayMode === DisplayMode.FORCE ? VanillaCookieConsent.GuiConsentLayout.BOX : VanillaCookieConsent.GuiConsentLayout.BAR,
        position: displayMode === DisplayMode.FORCE ? VanillaCookieConsent.GuiConsentPosition.MIDDLE_CENTER : VanillaCookieConsent.GuiConsentPosition.BOTTOM_CENTER,
        transition: VanillaCookieConsent.Transition.SLIDE,
        swap_buttons: true
      },
      settings_modal: {
        layout: VanillaCookieConsent.GuiSettingsLayout.BOX,
        transition: VanillaCookieConsent.Transition.SLIDE
      }
    },
    onAccept: onAcceptHandler,
    onFirstAction: onFirstAcceptHandler,
    onChange: onChangeHandler,
    languages: assembleLanguagesConfig(companyNames, translationOverrides, secondaryButtonMode, cookieTable)
  }, config16);
  cookieConsent.run(cookieConsentConfig);
  return cookieConsent;
};
function pushToDataLayer(cookie) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "CookieConsent-update",
    "CookieConsent.necessary": cookie.level.includes(CookieConsentCategory.NECESSARY),
    "CookieConsent.analytics": cookie.level.includes(CookieConsentCategory.ANALYTICS),
    "CookieConsent.ad": cookie.level.includes(CookieConsentCategory.AD),
    "CookieConsent.functionality": cookie.level.includes(CookieConsentCategory.FUNCTIONALITY),
    "CookieConsent.personalization": cookie.level.includes(CookieConsentCategory.PERSONALIZATION),
    "CookieConsent.revision": cookie.revision
  });
}
var LmcCookieConsentManager_default = LmcCookieConsentManager;
// Annotate the CommonJS export names for ESM import in node:
module.exports = LmcCookieConsentManager_default;
