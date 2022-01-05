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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
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
  default: () => LmcCookieConsentManager_default
});

// node_modules/vanilla-cookieconsent/dist/cookieconsent.js
(function() {
  var fb = function(Za) {
    var f = { current_lang: "en", auto_language: null, autorun: true, cookie_name: "cc_cookie", cookie_expiration: 182, cookie_domain: window.location.hostname, cookie_path: "/", cookie_same_site: "Lax", use_rfc_cookie: false, autoclear_cookies: true, revision: 0, script_selector: "data-cookiecategory" }, k = {}, r = {}, U = false, V = false, na = false, xa = false, oa = false, u, aa, W, ya, za, Aa, ba = true, Ba = false, A = null, Ca, Da = [], Pa = [], Qa = false, ta, Ea, Fa = [], ja = [], Q = [], F = [], ua = [], ka = document.documentElement, L, x, G, R, $a = function(a) {
      typeof a.cookie_expiration === "number" && (f.cookie_expiration = a.cookie_expiration);
      typeof a.cookie_necessary_only_expiration === "number" && (f.cookie_necessary_only_expiration = a.cookie_necessary_only_expiration);
      typeof a.autorun === "boolean" && (f.autorun = a.autorun);
      typeof a.cookie_domain === "string" && (f.cookie_domain = a.cookie_domain);
      typeof a.cookie_same_site === "string" && (f.cookie_same_site = a.cookie_same_site);
      typeof a.cookie_path === "string" && (f.cookie_path = a.cookie_path);
      typeof a.cookie_name === "string" && (f.cookie_name = a.cookie_name);
      typeof a.onAccept === "function" && (ya = a.onAccept);
      typeof a.onFirstAction === "function" && (Aa = a.onFirstAction);
      typeof a.onChange === "function" && (za = a.onChange);
      typeof a.revision === "number" && (-1 < a.revision && (f.revision = a.revision), Ba = true);
      a.autoclear_cookies === true && (f.autoclear_cookies = true);
      a.use_rfc_cookie === true && (f.use_rfc_cookie = true);
      a.hide_from_bots === true && (Qa = navigator && (navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent) || navigator.webdriver));
      f.page_scripts = a.page_scripts === true;
      f.page_scripts_order = a.page_scripts_order !== false;
      a.auto_language === "browser" || a.auto_language === true ? f.auto_language = "browser" : a.auto_language === "document" && (f.auto_language = "document");
      var b = a.languages;
      a = a.current_lang;
      f.auto_language === "browser" ? (a = navigator.language || navigator.browserLanguage, 2 < a.length && (a = a[0] + a[1]), a = a.toLowerCase(), b = Ga(a, b)) : b = f.auto_language === "document" ? Ga(document.documentElement.lang, b) : typeof a === "string" ? f.current_lang = Ga(a, b) : f.current_lang;
      f.current_lang = b;
    }, ab = function() {
      for (var a = document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'), b = 0; b < a.length; b++)
        a[b].setAttribute("aria-haspopup", "dialog"), H(a[b], "click", function(c) {
          k.showSettings(0);
          c.preventDefault ? c.preventDefault() : c.returnValue = false;
        });
    }, Ga = function(a, b) {
      if (Object.prototype.hasOwnProperty.call(b, a))
        return a;
      if (0 < pa(b).length)
        return Object.prototype.hasOwnProperty.call(b, f.current_lang) ? f.current_lang : pa(b)[0];
    }, Ra = function() {
      function a(c, d) {
        var e = false, h = false;
        try {
          for (var l = c.querySelectorAll(b.join(':not([tabindex="-1"]), ')), m, n = l.length, p = 0; p < n; )
            m = l[p].getAttribute("data-focus"), h || m !== "1" ? m === "0" && (e = l[p], h || l[p + 1].getAttribute("data-focus") === "0" || (h = l[p + 1])) : h = l[p], p++;
        } catch (q) {
          return c.querySelectorAll(b.join(", "));
        }
        d[0] = l[0];
        d[1] = l[l.length - 1];
        d[2] = e;
        d[3] = h;
      }
      var b = ["[href]", "button", "input", "details", '[tabindex="0"]'];
      a(R, ja);
      U && a(x, Fa);
    }, Ha, Ia, Sa = "", qa, bb = function(a, b) {
      L = g("div");
      L.id = "cc--main";
      L.style.position = "fixed";
      L.style.zIndex = "1000000";
      L.innerHTML = '<!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div" class="cc_div"></div><!--<![endif]-->';
      var c = L.children[0], d = f.current_lang, e = typeof ka.textContent === "string" ? "textContent" : "innerText";
      Ha = b;
      Ia = function(t) {
        t.force_consent === true && I(ka, "force--consent");
        var y = t.languages[d].consent_modal.description;
        Ba && (y = ba ? y.replace("{{revision_message}}", "") : y.replace("{{revision_message}}", Sa || t.languages[d].consent_modal.revision_message || ""));
        if (x)
          qa.innerHTML = y;
        else {
          x = g("div");
          var ca = g("div"), va = g("div");
          qa = g("div");
          var da = g("div"), wa = g("div");
          x.id = "cm";
          ca.id = "c-inr";
          va.id = "c-inr-i";
          qa.id = "c-txt";
          da.id = "c-bns";
          wa.id = "cm-ov";
          x.setAttribute("role", "dialog");
          x.setAttribute("aria-modal", "true");
          x.setAttribute("aria-hidden", "false");
          x.setAttribute("aria-labelledby", "c-ttl");
          x.setAttribute("aria-describedby", "c-txt");
          x.style.visibility = wa.style.visibility = "hidden";
          wa.style.opacity = 0;
          var X = t.languages[d].consent_modal.title;
          if (X) {
            var ra = g("div");
            ra.id = "c-ttl";
            ra.setAttribute("role", "heading");
            ra.setAttribute("aria-level", "2");
            ra.insertAdjacentHTML("beforeend", X);
            va.appendChild(ra);
          }
          qa.insertAdjacentHTML("beforeend", y);
          va.appendChild(qa);
          y = t.languages[d].consent_modal.primary_btn;
          X = t.languages[d].consent_modal.secondary_btn;
          if (y) {
            var la = g("button");
            la.id = "c-p-bn";
            la.className = "c-bn";
            la[e] = t.languages[d].consent_modal.primary_btn.text;
            var Ta;
            y.role === "accept_all" && (Ta = "all");
            H(la, "click", function() {
              k.hide();
              k.accept(Ta);
            });
          }
          if (X) {
            var ea = g("button");
            ea.id = "c-s-bn";
            ea.className = "c-bn c_link";
            ea[e] = t.languages[d].consent_modal.secondary_btn.text;
            X.role === "accept_necessary" ? H(ea, "click", function() {
              k.hide();
              k.accept([]);
            }) : H(ea, "click", function() {
              k.showSettings(0);
            });
          }
          (t = t.gui_options) && t.consent_modal && t.consent_modal.swap_buttons === true ? (X && da.appendChild(ea), y && da.appendChild(la), da.className = "swap") : (y && da.appendChild(la), X && da.appendChild(ea));
          ca.appendChild(va);
          (y || X) && ca.appendChild(da);
          x.appendChild(ca);
          c.appendChild(x);
          c.appendChild(wa);
          U = true;
        }
      };
      a || Ia(b);
      G = g("div");
      var h = g("div"), l = g("div"), m = g("div");
      R = g("div");
      var n = g("div"), p = g("div"), q = g("button"), Y = g("div"), S = g("div"), z = g("div");
      G.id = "s-cnt";
      h.id = "c-vln";
      m.id = "c-s-in";
      l.id = "cs";
      n.id = "s-ttl";
      R.id = "s-inr";
      p.id = "s-hdr";
      S.id = "s-bl";
      q.id = "s-c-bn";
      z.id = "cs-ov";
      Y.id = "s-c-bnc";
      q.className = "c-bn";
      q.setAttribute("aria-label", b.languages[d].settings_modal.close_btn_label || "Close");
      G.setAttribute("role", "dialog");
      G.setAttribute("aria-modal", "true");
      G.setAttribute("aria-hidden", "true");
      G.setAttribute("aria-labelledby", "s-ttl");
      n.setAttribute("role", "heading");
      G.style.visibility = z.style.visibility = "hidden";
      z.style.opacity = 0;
      Y.appendChild(q);
      H(h, "keydown", function(t) {
        t = t || window.event;
        t.keyCode === 27 && k.hideSettings(0);
      }, true);
      H(q, "click", function() {
        k.hideSettings(0);
      });
      W = b.languages[f.current_lang].settings_modal.blocks;
      aa = b.languages[f.current_lang].settings_modal.cookie_table_headers;
      q = W.length;
      n.insertAdjacentHTML("beforeend", b.languages[f.current_lang].settings_modal.title);
      for (var v = 0; v < q; ++v) {
        var C = W[v].title, J = W[v].description, M = W[v].toggle, fa = W[v].cookie_table, K = b.remove_cookie_tables === true, w = J && "truthy" || !K && fa && "truthy", ma = g("div"), Z = g("div");
        if (J) {
          var T = g("div");
          T.className = "p";
          T.insertAdjacentHTML("beforeend", J);
        }
        var B = g("div");
        B.className = "title";
        ma.className = "c-bl";
        Z.className = "desc";
        if (typeof M !== "undefined") {
          var N = "c-ac-" + v, ha = w ? g("button") : g("div"), D = g("label"), O = g("input"), P = g("span"), ia = g("span"), Ua = g("span"), Va = g("span");
          ha.className = w ? "b-tl exp" : "b-tl";
          D.className = "b-tg";
          O.className = "c-tgl";
          Ua.className = "on-i";
          Va.className = "off-i";
          P.className = "c-tg";
          ia.className = "t-lb";
          w && (ha.setAttribute("aria-expanded", "false"), ha.setAttribute("aria-controls", N));
          O.type = "checkbox";
          P.setAttribute("aria-hidden", "true");
          var Ja = M.value;
          O.value = Ja;
          ia[e] = C;
          ha.insertAdjacentHTML("beforeend", C);
          B.appendChild(ha);
          P.appendChild(Ua);
          P.appendChild(Va);
          a ? -1 < E(r.level, Ja) ? (O.checked = true, Q.push(true)) : Q.push(false) : M.enabled ? (O.checked = true, Q.push(true)) : Q.push(false);
          F.push(Ja);
          M.readonly ? (O.disabled = true, I(P, "c-ro"), ua.push(true)) : ua.push(false);
          I(Z, "b-acc");
          I(B, "b-bn");
          I(ma, "b-ex");
          Z.id = N;
          Z.setAttribute("aria-hidden", "true");
          D.appendChild(O);
          D.appendChild(P);
          D.appendChild(ia);
          B.appendChild(D);
          w && function(t, y, ca) {
            H(ha, "click", function() {
              Wa(y, "act") ? (Ka(y, "act"), ca.setAttribute("aria-expanded", "false"), t.setAttribute("aria-hidden", "true")) : (I(y, "act"), ca.setAttribute("aria-expanded", "true"), t.setAttribute("aria-hidden", "false"));
            }, false);
          }(Z, ma, ha);
        } else
          C && (w = g("div"), w.className = "b-tl", w.setAttribute("role", "heading"), w.setAttribute("aria-level", "3"), w.insertAdjacentHTML("beforeend", C), B.appendChild(w));
        C && ma.appendChild(B);
        J && Z.appendChild(T);
        if (!K && typeof fa !== "undefined") {
          w = document.createDocumentFragment();
          for (N = 0; N < aa.length; ++N)
            D = g("th"), K = aa[N], D.setAttribute("scope", "col"), K && (B = K && pa(K)[0], D[e] = aa[N][B], w.appendChild(D));
          K = g("tr");
          K.appendChild(w);
          B = g("thead");
          B.appendChild(K);
          w = g("table");
          w.appendChild(B);
          N = document.createDocumentFragment();
          for (D = 0; D < fa.length; D++) {
            O = g("tr");
            for (P = 0; P < aa.length; ++P)
              if (K = aa[P])
                B = pa(K)[0], ia = g("td"), ia.insertAdjacentHTML("beforeend", fa[D][B]), ia.setAttribute("data-column", K[B]), O.appendChild(ia);
            N.appendChild(O);
          }
          fa = g("tbody");
          fa.appendChild(N);
          w.appendChild(fa);
          Z.appendChild(w);
        }
        if (M && C || !M && (C || J))
          ma.appendChild(Z), S.appendChild(ma);
      }
      a = g("div");
      T = g("button");
      q = g("button");
      a.id = "s-bns";
      T.id = "s-sv-bn";
      q.id = "s-all-bn";
      T.className = "c-bn";
      q.className = "c-bn";
      T.insertAdjacentHTML("beforeend", b.languages[f.current_lang].settings_modal.save_settings_btn);
      q.insertAdjacentHTML("beforeend", b.languages[f.current_lang].settings_modal.accept_all_btn);
      a.appendChild(q);
      if (b = b.languages[f.current_lang].settings_modal.reject_all_btn)
        v = g("button"), v.id = "s-rall-bn", v.className = "c-bn", v.insertAdjacentHTML("beforeend", b), H(v, "click", function() {
          k.hideSettings();
          k.hide();
          k.accept([]);
        }), R.className = "bns-t", a.appendChild(v);
      a.appendChild(T);
      H(T, "click", function() {
        k.hideSettings();
        k.hide();
        k.accept();
      });
      H(q, "click", function() {
        k.hideSettings();
        k.hide();
        k.accept("all");
      });
      p.appendChild(n);
      p.appendChild(Y);
      R.appendChild(p);
      R.appendChild(S);
      R.appendChild(a);
      m.appendChild(R);
      l.appendChild(m);
      h.appendChild(l);
      G.appendChild(h);
      c.appendChild(G);
      c.appendChild(z);
      (Za || document.body).appendChild(L);
    }, cb = function(a) {
      var b = document.querySelectorAll(".c-tgl") || [], c = [], d = false;
      if (0 < b.length) {
        for (var e = 0; e < b.length; e++)
          E(a, F[e]) !== -1 ? (b[e].checked = true, Q[e] || (c.push(F[e]), Q[e] = true)) : (b[e].checked = false, Q[e] && (c.push(F[e]), Q[e] = false));
        if (f.autoclear_cookies && V && 0 < c.length) {
          b = W.length;
          e = -1;
          var h = sa("", "all"), l = [f.cookie_domain, "." + f.cookie_domain];
          if (f.cookie_domain.slice(0, 4) === "www.") {
            var m = f.cookie_domain.substr(4);
            l.push(m);
            l.push("." + m);
          }
          for (m = 0; m < b; m++) {
            var n = W[m];
            if (Object.prototype.hasOwnProperty.call(n, "toggle") && !Q[++e] && Object.prototype.hasOwnProperty.call(n, "cookie_table") && -1 < E(c, n.toggle.value)) {
              var p = n.cookie_table, q = pa(aa[0])[0], Y = p.length;
              n.toggle.reload === "on_disable" && (d = true);
              for (var S = 0; S < Y; S++) {
                var z = p[S], v = [], C = z[q], J = z.is_regex || false, M = z.domain || null;
                z = z.path || false;
                M && (l = [M, "." + M]);
                if (J)
                  for (J = 0; J < h.length; J++)
                    h[J].match(C) && v.push(h[J]);
                else
                  C = E(h, C), -1 < C && v.push(h[C]);
                0 < v.length && (Xa(v, z, l), n.toggle.reload === "on_clear" && (d = true));
              }
            }
          }
        }
      }
      r = { level: a, revision: f.revision, data: A, rfc_cookie: f.use_rfc_cookie };
      if (!V || 0 < c.length || !ba)
        ba = true, Ca = La(Ma()), Na(f.cookie_name, JSON.stringify(r)), Oa();
      V ? (typeof za === "function" && 0 < c.length && za(r, c), d && window.location.reload()) : (typeof Aa === "function" && Aa(k.getUserPreferences(), r), typeof ya === "function" && ya(r), V = true);
    }, db = function(a, b) {
      if (typeof a !== "string" || a === "" || document.getElementById("cc--style"))
        b();
      else {
        var c = g("style");
        c.id = "cc--style";
        var d = new XMLHttpRequest();
        d.onreadystatechange = function() {
          this.readyState === 4 && this.status === 200 && (c.setAttribute("type", "text/css"), c.styleSheet ? c.styleSheet.cssText = this.responseText : c.appendChild(document.createTextNode(this.responseText)), document.getElementsByTagName("head")[0].appendChild(c), b());
        };
        d.open("GET", a);
        d.send();
      }
    }, E = function(a, b) {
      for (var c = a.length, d = 0; d < c; d++)
        if (a[d] === b)
          return d;
      return -1;
    }, g = function(a) {
      var b = document.createElement(a);
      a === "button" && b.setAttribute("type", a);
      return b;
    }, eb = function() {
      var a = false, b = false;
      H(document, "keydown", function(c) {
        c = c || window.event;
        c.key === "Tab" && (u && (c.shiftKey ? document.activeElement === u[0] && (u[1].focus(), c.preventDefault()) : document.activeElement === u[1] && (u[0].focus(), c.preventDefault()), b || oa || (b = true, !a && c.preventDefault(), c.shiftKey ? u[3] ? u[2] ? u[2].focus() : u[0].focus() : u[1].focus() : u[3] ? u[3].focus() : u[0].focus())), !b && (a = true));
      });
      document.contains && H(L, "click", function(c) {
        c = c || window.event;
        xa ? R.contains(c.target) ? oa = true : (k.hideSettings(0), oa = false) : na && x.contains(c.target) && (oa = true);
      }, true);
    }, Ya = function(a, b) {
      function c(e, h, l, m, n, p, q) {
        p = p && p.split(" ") || [];
        if (-1 < E(h, n) && (I(e, n), (n !== "bar" || p[0] !== "middle") && -1 < E(l, p[0])))
          for (h = 0; h < p.length; h++)
            I(e, p[h]);
        -1 < E(m, q) && I(e, q);
      }
      if (typeof a === "object") {
        var d = a.consent_modal;
        a = a.settings_modal;
        U && d && c(x, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], d.layout, d.position, d.transition);
        !b && a && c(G, ["bar"], ["left", "right"], ["zoom", "slide"], a.layout, a.position, a.transition);
      }
    };
    k.allowedCategory = function(a) {
      return -1 < E(JSON.parse(sa(f.cookie_name, "one", true) || "{}").level || [], a);
    };
    k.run = function(a) {
      if (!document.getElementById("cc_div") && ($a(a), !Qa && (r = JSON.parse(sa(f.cookie_name, "one", true) || "{}"), V = r.level !== void 0, A = r.data !== void 0 ? r.data : null, ba = typeof a.revision === "number" ? V ? -1 < a.revision ? r.revision === f.revision : true : true : true, U = !V || !ba, bb(!U, a), db(a.theme_css, function() {
        Ra();
        Ya(a.gui_options);
        ab();
        f.autorun && U && k.show(a.delay || 0);
        setTimeout(function() {
          I(L, "c--anim");
        }, 30);
        setTimeout(function() {
          eb();
        }, 100);
      }), V && ba))) {
        var b = typeof r.rfc_cookie === "boolean";
        if (!b || b && r.rfc_cookie !== f.use_rfc_cookie)
          r.rfc_cookie = f.use_rfc_cookie, Na(f.cookie_name, JSON.stringify(r));
        Ca = La(Ma());
        Oa();
        if (typeof a.onAccept === "function")
          a.onAccept(r);
      }
    };
    k.showSettings = function(a) {
      setTimeout(function() {
        I(ka, "show--settings");
        G.setAttribute("aria-hidden", "false");
        xa = true;
        setTimeout(function() {
          na ? Ea = document.activeElement : ta = document.activeElement;
          ja.length !== 0 && (ja[3] ? ja[3].focus() : ja[0].focus(), u = ja);
        }, 200);
      }, 0 < a ? a : 0);
    };
    var Oa = function() {
      if (f.page_scripts) {
        var a = document.querySelectorAll("script[" + f.script_selector + "]"), b = f.page_scripts_order, c = r.level || [], d = function(e, h) {
          if (h < e.length) {
            var l = e[h], m = l.getAttribute(f.script_selector);
            if (-1 < E(c, m)) {
              l.type = "text/javascript";
              l.removeAttribute(f.script_selector);
              m = l.getAttribute("data-src");
              var n = g("script");
              n.textContent = l.innerHTML;
              (function(p, q) {
                for (var Y = q.attributes, S = Y.length, z = 0; z < S; z++)
                  q = Y[z], p.setAttribute(q.nodeName, q.nodeValue);
              })(n, l);
              m ? n.src = m : m = l.src;
              m && (b ? n.readyState ? n.onreadystatechange = function() {
                if (n.readyState === "loaded" || n.readyState === "complete")
                  n.onreadystatechange = null, d(e, ++h);
              } : n.onload = function() {
                n.onload = null;
                d(e, ++h);
              } : m = false);
              l.parentNode.replaceChild(n, l);
              if (m)
                return;
            }
            d(e, ++h);
          }
        };
        d(a, 0);
      }
    };
    k.set = function(a, b) {
      switch (a) {
        case "data":
          a = b.value;
          var c = false;
          if (b.mode === "update")
            if (A = k.get("data"), (b = typeof A === typeof a) && typeof A === "object") {
              !A && (A = {});
              for (var d in a)
                A[d] !== a[d] && (A[d] = a[d], c = true);
            } else
              !b && A || A === a || (A = a, c = true);
          else
            A = a, c = true;
          c && (r.data = A, Na(f.cookie_name, JSON.stringify(r)));
          return c;
        case "revision":
          return d = b.value, a = b.prompt_consent, b = b.message, L && typeof d === "number" && r.revision !== d ? (Ba = true, Sa = b, ba = false, f.revision = d, a === true ? (Ia(Ha), Ya(Ha.gui_options, true), Ra(), k.show()) : k.accept(), b = true) : b = false, b;
        default:
          return false;
      }
    };
    k.get = function(a, b) {
      return JSON.parse(sa(b || f.cookie_name, "one", true) || "{}")[a];
    };
    k.getConfig = function(a) {
      return f[a];
    };
    var Ma = function() {
      Da = r.level || [];
      Pa = F.filter(function(a) {
        return E(Da, a) === -1;
      });
      return { accepted: Da, rejected: Pa };
    }, La = function(a) {
      var b = "custom", c = ua.filter(function(d) {
        return d === true;
      }).length;
      a.accepted.length === F.length ? b = "all" : 0 <= a.rejected.length && a.accepted.length === c && (b = "necessary");
      return b;
    };
    k.getUserPreferences = function() {
      var a = Ma();
      return { accept_type: La(a), accepted_categories: a.accepted, rejected_categories: a.rejected };
    };
    k.loadScript = function(a, b, c) {
      var d = typeof b === "function";
      if (document.querySelector('script[src="' + a + '"]'))
        d && b();
      else {
        var e = g("script");
        if (c && 0 < c.length)
          for (var h = 0; h < c.length; ++h)
            c[h] && e.setAttribute(c[h].name, c[h].value);
        d && (e.readyState ? e.onreadystatechange = function() {
          if (e.readyState === "loaded" || e.readyState === "complete")
            e.onreadystatechange = null, b();
        } : e.onload = b);
        e.src = a;
        (document.head ? document.head : document.getElementsByTagName("head")[0]).appendChild(e);
      }
    };
    k.updateScripts = function() {
      Oa();
    };
    k.show = function(a) {
      U && setTimeout(function() {
        I(ka, "show--consent");
        x.setAttribute("aria-hidden", "false");
        na = true;
        setTimeout(function() {
          ta = document.activeElement;
          u = Fa;
        }, 200);
      }, 0 < a ? a : 0);
    };
    k.hide = function() {
      U && (Ka(ka, "show--consent"), x.setAttribute("aria-hidden", "true"), na = false, setTimeout(function() {
        ta.focus();
        u = null;
      }, 200));
    };
    k.hideSettings = function() {
      Ka(ka, "show--settings");
      xa = false;
      G.setAttribute("aria-hidden", "true");
      setTimeout(function() {
        na ? (Ea && Ea.focus(), u = Fa) : (ta.focus(), u = null);
        oa = false;
      }, 200);
    };
    k.accept = function(a, b) {
      a = a || void 0;
      var c = b || [];
      b = [];
      var d = function() {
        for (var h = document.querySelectorAll(".c-tgl") || [], l = [], m = 0; m < h.length; m++)
          h[m].checked && l.push(h[m].value);
        return l;
      };
      if (a)
        if (typeof a === "object" && typeof a.length === "number")
          for (var e = 0; e < a.length; e++)
            E(F, a[e]) !== -1 && b.push(a[e]);
        else
          typeof a === "string" && (a === "all" ? b = F.slice() : E(F, a) !== -1 && b.push(a));
      else
        b = d();
      if (1 <= c.length)
        for (e = 0; e < c.length; e++)
          b = b.filter(function(h) {
            return h !== c[e];
          });
      for (e = 0; e < F.length; e++)
        ua[e] === true && E(b, F[e]) === -1 && b.push(F[e]);
      cb(b);
    };
    k.eraseCookies = function(a, b, c) {
      var d = [];
      c = c ? [c, "." + c] : [f.cookie_domain, "." + f.cookie_domain];
      if (typeof a === "object" && 0 < a.length)
        for (var e = 0; e < a.length; e++)
          this.validCookie(a[e]) && d.push(a[e]);
      else
        this.validCookie(a) && d.push(a);
      Xa(d, b, c);
    };
    var Na = function(a, b) {
      var c = f.cookie_expiration;
      typeof f.cookie_necessary_only_expiration === "number" && Ca === "necessary" && (c = f.cookie_necessary_only_expiration);
      b = f.use_rfc_cookie ? encodeURIComponent(b) : b;
      var d = new Date();
      d.setTime(d.getTime() + 864e5 * c);
      c = "; expires=" + d.toUTCString();
      a = a + "=" + (b || "") + c + "; Path=" + f.cookie_path + ";";
      a += " SameSite=" + f.cookie_same_site + ";";
      -1 < window.location.hostname.indexOf(".") && (a += " Domain=" + f.cookie_domain + ";");
      window.location.protocol === "https:" && (a += " Secure;");
      document.cookie = a;
    }, sa = function(a, b, c) {
      var d;
      if (b === "one") {
        if ((d = (d = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? c ? d.pop() : a : "") && a === f.cookie_name) {
          try {
            d = JSON.parse(d);
          } catch (e) {
            try {
              d = JSON.parse(decodeURIComponent(d));
            } catch (h) {
              d = {};
            }
          }
          d = JSON.stringify(d);
        }
      } else if (b === "all")
        for (a = document.cookie.split(/;\s*/), d = [], b = 0; b < a.length; b++)
          d.push(a[b].split("=")[0]);
      return d;
    }, Xa = function(a, b, c) {
      b = b ? b : "/";
      for (var d = 0; d < a.length; d++)
        for (var e = 0; e < c.length; e++)
          document.cookie = a[d] + "=; path=" + b + (-1 < c[e].indexOf(".") ? "; domain=" + c[e] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    k.validCookie = function(a) {
      return sa(a, "one", true) !== "";
    };
    var H = function(a, b, c, d) {
      a.addEventListener ? d === true ? a.addEventListener(b, c, { passive: true }) : a.addEventListener(b, c, false) : a.attachEvent("on" + b, c);
    }, pa = function(a) {
      if (typeof a === "object") {
        var b = [], c = 0;
        for (b[c++] in a)
          ;
        return b;
      }
    }, I = function(a, b) {
      a.classList ? a.classList.add(b) : Wa(a, b) || (a.className += " " + b);
    }, Ka = function(a, b) {
      a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " ");
    }, Wa = function(a, b) {
      return a.classList ? a.classList.contains(b) : !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
    };
    return k;
  };
  typeof window.initCookieConsent !== "function" && (window.initCookieConsent = fb);
})();

// node_modules/nanoid/index.prod.js
if (false) {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative" && typeof crypto === "undefined") {
    throw new Error("React Native does not have a built-in secure random generator. If you don\u2019t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID.");
  }
  if (typeof msCrypto !== "undefined" && typeof crypto === "undefined") {
    throw new Error("Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support");
  }
  if (typeof crypto === "undefined") {
    throw new Error("Your browser does not have secure random generator. If you don\u2019t need unpredictable IDs, you can use nanoid/non-secure.");
  }
}
var nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += "_";
    } else {
      id += "-";
    }
  }
  return id;
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

// src/languages/cs.ts
var extra = {
  and: "a",
  company: "spole\u010Dnosti",
  companies: "spole\u010Dnostem"
};
var config = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra), extraMessages);
  return {
    consent_modal: {
      title: "D\xEDky Cookies budou na\u0161e str\xE1nky je\u0161t\u011B lep\u0161\xED",
      description: `Kdy\u017E l\xE9pe pochop\xEDme, co v\xE1s zaj\xEDm\xE1, budeme v\xE1m zobrazovat p\u0159esn\u011Bj\u0161\xED obsah na\xA0m\xEDru.
      Kliknut\xEDm na\xA0tla\u010D\xEDtko \u201EP\u0159ijmout v\u0161echny\u201C d\xE1te ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, lang.and)} souhlas s\xA0vyu\u017E\xEDv\xE1n\xEDm soubor\u016F Cookies na\xA0\xFA\u010Dely personalizace, anal\xFDzy a\xA0c\xEDlen\xE9ho marketingu.
      <a href="https://www.lmc.eu/cs/cookies" target="_blank">Co\xA0jsou\xA0to\xA0Cookies a\xA0jak je\xA0pou\u017E\xEDv\xE1me?</a>`,
      primary_btn: {
        text: "P\u0159ijmout v\u0161echny",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "P\u0159ijmout nezbytn\xE9",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/de.ts
var extra2 = {
  and: "und"
};
var config2 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra2), extraMessages);
  return {
    consent_modal: {
      title: "Diese Website verwendet Cookies",
      description: `Indem Sie auf \u201EAlles\xA0akzeptieren\u201C klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Ger\xE4t durch ${addSeparators(lang.companyNames, extra2.and)} zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.
      Weitere Informationen finden Sie unter <a href="https://www.lmc.eu/en/cookies/" target="_blank">Verwendung von\xA0Cookies</a>.`,
      primary_btn: {
        text: "Alles akzeptieren",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "Das Notwendigste akzeptieren",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/en.ts
var extra3 = {
  and: "and"
};
var config3 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra3), extraMessages);
  return {
    consent_modal: {
      title: "Cookies make our site even better",
      description: `By better understanding what you're interested\xA0in, we'll show you more relevant content.
      By clicking the "Accept all" button, you give ${addSeparators(lang.companyNames, extra3.and)} your consent to\xA0use cookies for\xA0personalisation, analytics and\xA0targeted marketing.
      <a href="https://www.lmc.eu/en/cookies/" target="_blank">What\xA0are\xA0cookies and\xA0how do we use\xA0them?</a>`,
      primary_btn: {
        text: "Accept all",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "Accept necessary",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/hu.ts
var extra4 = {
  and: "\xE9s"
};
var config4 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra4), extraMessages);
  return {
    consent_modal: {
      title: "Az oldalak s\xFCti f\xE1jlokat haszn\xE1lnak",
      description: `A\xA0\u201EMindent\xA0elfogadok\u201D gombra kattintva a\xA0hozz\xE1j\xE1rul\xE1s\xE1t adja ahhoz, hogy az ${addSeparators(lang.companyNames, extra4.and)} s\xFCti f\xE1jlokat \xE9s egy\xE9b azonos\xEDt\xF3kat haszn\xE1ljon az \xD6n eszk\xF6z\xE9n. E\xA0s\xFCti f\xE1jlok \xE9s egy\xE9b azonos\xEDt\xF3k haszn\xE1lata megk\xF6nny\xEDti a\xA0weboldalon bel\xFCli navig\xE1ci\xF3t, a\xA0szem\xE9lyre szabott tartalom megjelen\xEDt\xE9s\xE9t, a\xA0c\xE9lzott marketinget, valamint term\xE9keink \xE9s szolg\xE1ltat\xE1saink haszn\xE1lat\xE1nak elemz\xE9s\xE9t.
      B\u0151vebb inform\xE1ci\xF3kat a <a href="https://www.lmc.eu/en/cookies/" target="_blank">S\xFCtihaszn\xE1lat</a> oldalon tal\xE1l.`,
      primary_btn: {
        text: "Minden elfogad\xE1sa",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "A\xA0legsz\xFCks\xE9gesebbek elfogad\xE1sa",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/pl.ts
var extra5 = {
  and: "i",
  company: "firm\u0119",
  companies: "firmy"
};
var config5 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra5), extraMessages);
  return {
    consent_modal: {
      title: "Dzi\u0119ki plikom Cookies nasza strona b\u0119dzie jeszcze lepsza",
      description: `Gdy lepiej zrozumiemy, co\xA0Ci\u0119 interesuje, poka\u017Cemy dok\u0142adniejsze tre\u015Bci dopasowane do\xA0Twoich preferencji.
      Kliknij w\xA0przycisk \u201EAkceptuj wszystkie\u201D, aby wyrazi\u0107 zgod\u0119 na\xA0wykorzystanie plik\xF3w cookie przez
      ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, extra5.and)} do personalizacji, analizy i\xA0ukierunkowanego marketingu.
      <a href="https://www.lmc.eu/pl/cookies" target="_blank">Co\xA0to\xA0s\u0105\xA0pliki cookie i\xA0jak je\xA0wykorzystujemy?</a>`,
      primary_btn: {
        text: "Akceptuj wszystkie",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "Akceptuj niezb\u0119dne",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/ru.ts
var extra6 = {
  and: "\u0438",
  company: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C",
  companies: "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C"
};
var config6 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra6), extraMessages);
  return {
    consent_modal: {
      title: "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B cookie",
      description: `\u041D\u0430\u0436\u0430\u0432 \xAB\u041F\u0440\u0438\u043D\u044F\u0442\u044C\xA0\u0432\u0441\u0435\xBB, \u0412\u044B \u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, lang.and)} \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u043D\u0430 \u0412\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u0438\xA0\u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430, \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433, \u0430\u043D\u0430\u043B\u0438\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438\xA0\u0443\u0441\u043B\u0443\u0433.
      \u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043C. \u0440\u0430\u0437\u0434\u0435\u043B <a href="https://www.lmc.eu/en/cookies/" target="_blank">\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie</a>.`,
      primary_btn: {
        text: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C\xA0\u0432\u0441\u0435",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "\u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435\xA0\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/sk.ts
var extra7 = {
  and: "a",
  company: "spolo\u010Dnosti",
  companies: "spolo\u010Dnostiam"
};
var config7 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra7), extraMessages);
  return {
    consent_modal: {
      title: "V\u010Faka Cookies bud\xFA na\u0161e str\xE1nky e\u0161te lep\u0161ie",
      description: `Presnej\u0161\xED obsah\xA0na\xA0mieru v\xE1m budeme zobrazova\u0165, ke\u010F\xA0lep\u0161ie pochop\xEDme, \u010Do\xA0v\xE1s\xA0zauj\xEDma.
      Kliknut\xEDm na\xA0tla\u010Didlo \u201EPrija\u0165 v\u0161etky\u201C, \u010D\xEDm d\xE1te ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, lang.and)} s\xFAhlas s\xA0vyu\u017E\xEDvan\xEDm s\xFAborov Cookies za\xA0\xFA\u010Delom personaliz\xE1cie, anal\xFDzy a\xA0cielen\xE9ho marketingu.
      <a href="https://www.lmc.eu/sk/cookies" target="_blank">\u010Co\xA0s\xFA\xA0to\xA0Cookies a\xA0ako\xA0ich\xA0pou\u017E\xEDvame?</a>`,
      primary_btn: {
        text: "Prija\u0165 v\u0161etky",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "Prija\u0165 nevyhnutn\xE9",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/languages/uk.ts
var extra8 = {
  and: "i",
  company: "\u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\u043C",
  companies: "\u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\u043C"
};
var config8 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra8), extraMessages);
  return {
    consent_modal: {
      title: "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookie",
      description: `\u041D\u0430\u0442\u0438\u0441\u043D\u0443\u0432\u0448\u0438 \xAB\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438\xA0\u0432\u0441\u0435\xBB, \u0412\u0438 \u0434\u0430\u0454\u0442\u0435 \u0441\u0432\u043E\u044E \u0437\u0433\u043E\u0434\u0443 ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, lang.and)} \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 cookie \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440\u0456\u0432 \u043D\u0430 \u0412\u0430\u0448\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0446\u0438\u0445 \u0444\u0430\u0439\u043B\u0456\u0432 cookie \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440\u0456\u0432 \u043F\u043E\u043B\u0435\u0433\u0448\u0438\u0442\u044C \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044E \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433, \u0430\u043D\u0430\u043B\u0456\u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0456\xA0\u043F\u043E\u0441\u043B\u0443\u0433.
      \u0414\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0434\u0438\u0432. \u0440\u043E\u0437\u0434\u0456\u043B <a href="https://www.lmc.eu/en/cookies/" target="_blank">\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 cookie</a>.`,
      primary_btn: {
        text: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438\xA0\u0432\u0441\u0435",
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL
      },
      secondary_btn: {
        text: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F\xA0\u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E",
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
      }
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: "necessary" /* NECESSARY */,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "ad" /* AD */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "analytics" /* ANALYTICS */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality" /* FUNCTIONALITY */,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization" /* PERSONALIZATION */,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

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

// src/LmcCookieConsentManager.ts
var noopAcceptCallback = (cookie, cookieConsent) => {
};
var defaultOptions = {
  defaultLang: "cs",
  autodetectLang: true,
  consentCollectorApiUrl: "https://ccm.lmc.cz/local-data-acceptation-data-entries",
  onFirstAccept: noopAcceptCallback,
  onFirstAcceptOnlyNecessary: noopAcceptCallback,
  onFirstAcceptAll: noopAcceptCallback,
  onAccept: noopAcceptCallback,
  onAcceptOnlyNecessary: noopAcceptCallback,
  onAcceptAll: noopAcceptCallback,
  companyNames: ["LMC"],
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
    onFirstAcceptOnlyNecessary,
    onFirstAcceptAll,
    onAccept,
    onAcceptOnlyNecessary,
    onAcceptAll,
    companyNames,
    config: config9
  } = options;
  const cookieName = "lmc_ccm";
  const cookieConsent = window.initCookieConsent();
  const languages = {
    cs: config({ companyNames }),
    de: config2({ companyNames }),
    en: config3({ companyNames }),
    hu: config4({ companyNames }),
    pl: config5({ companyNames }),
    ru: config6({ companyNames }),
    sk: config7({ companyNames }),
    uk: config8({ companyNames })
  };
  const cookieConsentConfig = __spreadValues({
    auto_language: autodetectLang ? "document" : null,
    autorun: true,
    cookie_expiration: 365,
    cookie_necessary_only_expiration: 60,
    cookie_name: cookieName,
    current_lang: defaultLang,
    delay: 0,
    force_consent: false,
    hide_from_bots: true,
    page_scripts: true,
    use_rfc_cookie: true,
    gui_options: {
      consent_modal: {
        layout: VanillaCookieConsent.GuiConsentLayout.BAR,
        position: VanillaCookieConsent.GuiConsentPosition.BOTTOM_CENTER,
        transition: VanillaCookieConsent.Transition.SLIDE,
        swap_buttons: true
      }
    },
    onAccept: (cookie) => {
      const userPreferences = cookieConsent.getUserPreferences();
      onAccept(cookie, cookieConsent);
      userPreferences.accept_type == VanillaCookieConsent.AcceptType.NECESSARY ? onAcceptOnlyNecessary(cookie, cookieConsent) : onAcceptAll(cookie, cookieConsent);
    },
    onFirstAction: (userPreferences, cookie) => {
      const cookieData = cookieConsent.get("data");
      if (cookieData === null || !("uid" in cookieData)) {
        cookieConsent.set("data", {
          value: { serviceName, uid: nanoid() },
          mode: "update"
        });
      }
      pushToDataLayer(cookie);
      if (consentCollectorApiUrl !== null) {
        consentCollector_default(consentCollectorApiUrl, cookieConsent);
      }
      onFirstAccept(cookie, cookieConsent);
      userPreferences.accept_type == VanillaCookieConsent.AcceptType.NECESSARY ? onFirstAcceptOnlyNecessary(cookie, cookieConsent) : onFirstAcceptAll(cookie, cookieConsent);
    },
    languages
  }, config9);
  cookieConsent.run(cookieConsentConfig);
  return cookieConsent;
};
function pushToDataLayer(cookie) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "CookieConsent-update",
    "CookieConsent.necessary": cookie.level.includes("necessary" /* NECESSARY */),
    "CookieConsent.analytics": cookie.level.includes("analytics" /* ANALYTICS */),
    "CookieConsent.ad": cookie.level.includes("ad" /* AD */),
    "CookieConsent.functionality": cookie.level.includes("functionality" /* FUNCTIONALITY */),
    "CookieConsent.personalization": cookie.level.includes("personalization" /* PERSONALIZATION */),
    "CookieConsent.revision": cookie.revision
  });
}
var LmcCookieConsentManager_default = LmcCookieConsentManager;
module.exports = __toCommonJS(LmcCookieConsentManager_exports);
// Annotate the CommonJS export names for ESM import in node:
module.exports = LmcCookieConsentManager_default;
