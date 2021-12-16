var __defProp = Object.defineProperty;
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

// node_modules/vanilla-cookieconsent/dist/cookieconsent.js
(function() {
  var Ta = function(Ma) {
    var f = { current_lang: "en", auto_language: null, autorun: true, cookie_name: "cc_cookie", cookie_expiration: 182, cookie_domain: window.location.hostname, cookie_path: "/", cookie_same_site: "Lax", use_rfc_cookie: false, autoclear_cookies: true, revision: 0, script_selector: "data-cookiecategory" }, k = {}, u = {}, S = false, T = false, ea = false, qa = false, fa = false, v, V, y, ra, sa, W = true, ta = false, E = null, Ea = false, ma, ua, va = [], aa = [], N = [], L = [], wa = [], ba = document.documentElement, M, x, H, O, Na = function(a) {
      typeof a.cookie_expiration === "number" && (f.cookie_expiration = a.cookie_expiration);
      typeof a.autorun === "boolean" && (f.autorun = a.autorun);
      typeof a.cookie_domain === "string" && (f.cookie_domain = a.cookie_domain);
      typeof a.cookie_same_site === "string" && (f.cookie_same_site = a.cookie_same_site);
      typeof a.cookie_path === "string" && (f.cookie_path = a.cookie_path);
      typeof a.cookie_name === "string" && (f.cookie_name = a.cookie_name);
      typeof a.onAccept === "function" && (ra = a.onAccept);
      typeof a.onChange === "function" && (sa = a.onChange);
      typeof a.revision === "number" && (-1 < a.revision && (f.revision = a.revision), ta = true);
      a.autoclear_cookies === true && (f.autoclear_cookies = true);
      a.use_rfc_cookie === true && (f.use_rfc_cookie = true);
      a.hide_from_bots === true && (Ea = navigator && (navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent) || navigator.webdriver));
      f.page_scripts = a.page_scripts === true;
      f.page_scripts_order = a.page_scripts_order !== false;
      a.auto_language === "browser" || a.auto_language === true ? f.auto_language = "browser" : a.auto_language === "document" && (f.auto_language = "document");
      var b = a.languages;
      a = a.current_lang;
      f.auto_language === "browser" ? (a = navigator.language || navigator.browserLanguage, 2 < a.length && (a = a[0] + a[1]), a = a.toLowerCase(), b = xa(a, b)) : b = f.auto_language === "document" ? xa(document.documentElement.lang, b) : typeof a === "string" ? f.current_lang = xa(a, b) : f.current_lang;
      f.current_lang = b;
    }, Oa = function() {
      for (var a = document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'), b = 0; b < a.length; b++)
        a[b].setAttribute("aria-haspopup", "dialog"), I(a[b], "click", function(c) {
          k.showSettings(0);
          c.preventDefault ? c.preventDefault() : c.returnValue = false;
        });
    }, xa = function(a, b) {
      if (Object.prototype.hasOwnProperty.call(b, a))
        return a;
      if (0 < ha(b).length)
        return Object.prototype.hasOwnProperty.call(b, f.current_lang) ? f.current_lang : ha(b)[0];
    }, Fa = function() {
      function a(c, d) {
        var e = false, h = false;
        try {
          for (var l = c.querySelectorAll(b.join(':not([tabindex="-1"]), ')), m, n = l.length, p = 0; p < n; )
            m = l[p].getAttribute("data-focus"), h || m !== "1" ? m === "0" && (e = l[p], h || l[p + 1].getAttribute("data-focus") === "0" || (h = l[p + 1])) : h = l[p], p++;
        } catch (r) {
          return c.querySelectorAll(b.join(", "));
        }
        d[0] = l[0];
        d[1] = l[l.length - 1];
        d[2] = e;
        d[3] = h;
      }
      var b = ["[href]", "button", "input", "details", '[tabindex="0"]'];
      a(O, aa);
      S && a(x, va);
    }, ya, za, Ga = "", ia, Pa = function(a, b) {
      M = g("div");
      M.id = "cc--main";
      M.style.position = "fixed";
      M.style.zIndex = "1000000";
      M.innerHTML = '<!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div" class="cc_div"></div><!--<![endif]-->';
      var c = M.children[0], d = f.current_lang, e = typeof ba.textContent === "string" ? "textContent" : "innerText";
      ya = b;
      za = function(z) {
        z.force_consent === true && J(ba, "force--consent");
        var P = z.languages[d].consent_modal.description;
        ta && (P = W ? P.replace("{{revision_message}}", "") : P.replace("{{revision_message}}", Ga || z.languages[d].consent_modal.revision_message || ""));
        if (x)
          ia.innerHTML = P;
        else {
          x = g("div");
          var X = g("div"), na = g("div"), ja = g("div");
          ia = g("div");
          var oa = g("div"), ka = g("button"), ca = g("button"), pa = g("div");
          x.id = "cm";
          X.id = "c-inr";
          na.id = "c-inr-i";
          ja.id = "c-ttl";
          ia.id = "c-txt";
          oa.id = "c-bns";
          ka.id = "c-p-bn";
          ca.id = "c-s-bn";
          pa.id = "cm-ov";
          ka.className = "c-bn";
          ca.className = "c-bn c_link";
          ja.setAttribute("role", "heading");
          ja.setAttribute("aria-level", "2");
          x.setAttribute("role", "dialog");
          x.setAttribute("aria-modal", "true");
          x.setAttribute("aria-hidden", "false");
          x.setAttribute("aria-labelledby", "c-ttl");
          x.setAttribute("aria-describedby", "c-txt");
          x.style.visibility = pa.style.visibility = "hidden";
          pa.style.opacity = 0;
          ja.insertAdjacentHTML("beforeend", z.languages[d].consent_modal.title);
          ia.insertAdjacentHTML("beforeend", P);
          ka[e] = z.languages[d].consent_modal.primary_btn.text;
          ca[e] = z.languages[d].consent_modal.secondary_btn.text;
          var Ha;
          z.languages[d].consent_modal.primary_btn.role === "accept_all" && (Ha = "all");
          I(ka, "click", function() {
            k.hide();
            k.accept(Ha);
          });
          z.languages[d].consent_modal.secondary_btn.role === "accept_necessary" ? I(ca, "click", function() {
            k.hide();
            k.accept([]);
          }) : I(ca, "click", function() {
            k.showSettings(0);
          });
          na.appendChild(ja);
          na.appendChild(ia);
          oa.appendChild(ka);
          oa.appendChild(ca);
          X.appendChild(na);
          X.appendChild(oa);
          x.appendChild(X);
          c.appendChild(x);
          c.appendChild(pa);
          S = true;
        }
      };
      a || za(b);
      H = g("div");
      var h = g("div"), l = g("div"), m = g("div");
      O = g("div");
      var n = g("div"), p = g("div"), r = g("button"), U = g("div"), Q = g("div"), A = g("div");
      H.id = "s-cnt";
      h.id = "c-vln";
      m.id = "c-s-in";
      l.id = "cs";
      n.id = "s-ttl";
      O.id = "s-inr";
      p.id = "s-hdr";
      Q.id = "s-bl";
      r.id = "s-c-bn";
      A.id = "cs-ov";
      U.id = "s-c-bnc";
      r.className = "c-bn";
      r.setAttribute("aria-label", b.languages[d].settings_modal.close_btn_label || "Close");
      H.setAttribute("role", "dialog");
      H.setAttribute("aria-modal", "true");
      H.setAttribute("aria-hidden", "true");
      H.setAttribute("aria-labelledby", "s-ttl");
      n.setAttribute("role", "heading");
      H.style.visibility = A.style.visibility = "hidden";
      A.style.opacity = 0;
      U.appendChild(r);
      I(h, "keydown", function(z) {
        z = z || window.event;
        z.keyCode === 27 && k.hideSettings(0);
      }, true);
      I(r, "click", function() {
        k.hideSettings(0);
      });
      y = b.languages[f.current_lang].settings_modal.blocks;
      V = b.languages[f.current_lang].settings_modal.cookie_table_headers;
      r = y.length;
      n.insertAdjacentHTML("beforeend", b.languages[f.current_lang].settings_modal.title);
      for (var q = 0; q < r; ++q) {
        var w = g("div"), B = g("div"), t = g("div"), F = g("div");
        w.className = "c-bl";
        B.className = "desc";
        t.className = "p";
        F.className = "title";
        t.insertAdjacentHTML("beforeend", y[q].description);
        if (typeof y[q].toggle !== "undefined") {
          var C = "c-ac-" + q, Y = g("button"), G = g("label"), D = g("input"), R = g("span"), Z = g("span"), da = g("span"), Ia = g("span");
          Y.className = "b-tl";
          G.className = "b-tg";
          D.className = "c-tgl";
          da.className = "on-i";
          Ia.className = "off-i";
          R.className = "c-tg";
          Z.className = "t-lb";
          Y.setAttribute("aria-expanded", "false");
          Y.setAttribute("aria-controls", C);
          D.type = "checkbox";
          R.setAttribute("aria-hidden", "true");
          var Aa = y[q].toggle.value;
          D.value = Aa;
          Z[e] = y[q].title;
          Y.insertAdjacentHTML("beforeend", y[q].title);
          F.appendChild(Y);
          R.appendChild(da);
          R.appendChild(Ia);
          a ? -1 < K(u.level, Aa) ? (D.checked = true, N.push(true)) : N.push(false) : y[q].toggle.enabled ? (D.checked = true, N.push(true)) : N.push(false);
          L.push(Aa);
          y[q].toggle.readonly ? (D.disabled = true, J(R, "c-ro"), wa.push(true)) : wa.push(false);
          J(B, "b-acc");
          J(F, "b-bn");
          J(w, "b-ex");
          B.id = C;
          B.setAttribute("aria-hidden", "true");
          G.appendChild(D);
          G.appendChild(R);
          G.appendChild(Z);
          F.appendChild(G);
          (function(z, P, X) {
            I(Y, "click", function() {
              Ja(P, "act") ? (Ba(P, "act"), X.setAttribute("aria-expanded", "false"), z.setAttribute("aria-hidden", "true")) : (J(P, "act"), X.setAttribute("aria-expanded", "true"), z.setAttribute("aria-hidden", "false"));
            }, false);
          })(B, w, Y);
        } else
          C = g("div"), C.className = "b-tl", C.setAttribute("role", "heading"), C.setAttribute("aria-level", "3"), C.insertAdjacentHTML("beforeend", y[q].title), F.appendChild(C);
        w.appendChild(F);
        B.appendChild(t);
        if (b.remove_cookie_tables !== true && typeof y[q].cookie_table !== "undefined") {
          C = document.createDocumentFragment();
          for (G = 0; G < V.length; ++G)
            D = g("th"), t = V[G], D.setAttribute("scope", "col"), t && (F = t && ha(t)[0], D[e] = V[G][F], C.appendChild(D));
          t = g("tr");
          t.appendChild(C);
          F = g("thead");
          F.appendChild(t);
          C = g("table");
          C.appendChild(F);
          G = document.createDocumentFragment();
          for (D = 0; D < y[q].cookie_table.length; D++) {
            R = g("tr");
            for (Z = 0; Z < V.length; ++Z)
              if (t = V[Z])
                F = ha(t)[0], da = g("td"), da.insertAdjacentHTML("beforeend", y[q].cookie_table[D][F]), da.setAttribute("data-column", t[F]), R.appendChild(da);
            G.appendChild(R);
          }
          t = g("tbody");
          t.appendChild(G);
          C.appendChild(t);
          B.appendChild(C);
        }
        w.appendChild(B);
        Q.appendChild(w);
      }
      a = g("div");
      r = g("button");
      q = g("button");
      a.id = "s-bns";
      r.id = "s-sv-bn";
      q.id = "s-all-bn";
      r.className = "c-bn";
      q.className = "c-bn";
      r.insertAdjacentHTML("beforeend", b.languages[f.current_lang].settings_modal.save_settings_btn);
      q.insertAdjacentHTML("beforeend", b.languages[f.current_lang].settings_modal.accept_all_btn);
      a.appendChild(q);
      if (b = b.languages[f.current_lang].settings_modal.reject_all_btn)
        w = g("button"), w.id = "s-rall-bn", w.className = "c-bn", w.insertAdjacentHTML("beforeend", b), I(w, "click", function() {
          k.hideSettings();
          k.hide();
          k.accept([]);
        }), O.className = "bns-t", a.appendChild(w);
      a.appendChild(r);
      I(r, "click", function() {
        k.hideSettings();
        k.hide();
        k.accept();
      });
      I(q, "click", function() {
        k.hideSettings();
        k.hide();
        k.accept("all");
      });
      p.appendChild(n);
      p.appendChild(U);
      O.appendChild(p);
      O.appendChild(Q);
      O.appendChild(a);
      m.appendChild(O);
      l.appendChild(m);
      h.appendChild(l);
      H.appendChild(h);
      c.appendChild(H);
      c.appendChild(A);
      (Ma || document.body).appendChild(M);
    }, Qa = function(a) {
      var b = document.querySelectorAll(".c-tgl") || [], c = [], d = false;
      if (0 < b.length) {
        for (var e = 0; e < b.length; e++)
          K(a, L[e]) !== -1 ? (b[e].checked = true, N[e] || (c.push(L[e]), N[e] = true)) : (b[e].checked = false, N[e] && (c.push(L[e]), N[e] = false));
        if (f.autoclear_cookies && T && 0 < c.length) {
          b = y.length;
          e = -1;
          var h = la("", "all"), l = [f.cookie_domain, "." + f.cookie_domain];
          if (f.cookie_domain.slice(0, 4) === "www.") {
            var m = f.cookie_domain.substr(4);
            l.push(m);
            l.push("." + m);
          }
          for (m = 0; m < b; m++) {
            var n = y[m];
            if (Object.prototype.hasOwnProperty.call(n, "toggle") && !N[++e] && Object.prototype.hasOwnProperty.call(n, "cookie_table") && -1 < K(c, n.toggle.value)) {
              var p = n.cookie_table, r = ha(V[0])[0], U = p.length;
              n.toggle.reload === "on_disable" && (d = true);
              for (var Q = 0; Q < U; Q++) {
                var A = p[Q], q = [], w = A[r], B = A.is_regex || false, t = A.domain || null;
                A = A.path || false;
                t && (l = [t, "." + t]);
                if (B)
                  for (B = 0; B < h.length; B++)
                    h[B].match(w) && q.push(h[B]);
                else
                  w = K(h, w), -1 < w && q.push(h[w]);
                0 < q.length && (Ka(q, A, l), n.toggle.reload === "on_clear" && (d = true));
              }
            }
          }
        }
      }
      u = { level: a, revision: f.revision, data: E, rfc_cookie: f.use_rfc_cookie };
      if (!T || 0 < c.length || !W)
        W = true, Ca(f.cookie_name, JSON.stringify(u)), Da();
      if (typeof ra === "function" && !T)
        return T = true, ra(u);
      typeof sa === "function" && 0 < c.length && sa(u, c);
      d && window.location.reload();
    }, Ra = function(a, b) {
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
    }, K = function(a, b) {
      for (var c = a.length, d = 0; d < c; d++)
        if (a[d] === b)
          return d;
      return -1;
    }, g = function(a) {
      var b = document.createElement(a);
      a === "button" && b.setAttribute("type", a);
      return b;
    }, Sa = function() {
      var a = false, b = false;
      I(document, "keydown", function(c) {
        c = c || window.event;
        c.key === "Tab" && (v && (c.shiftKey ? document.activeElement === v[0] && (v[1].focus(), c.preventDefault()) : document.activeElement === v[1] && (v[0].focus(), c.preventDefault()), b || fa || (b = true, !a && c.preventDefault(), c.shiftKey ? v[3] ? v[2] ? v[2].focus() : v[0].focus() : v[1].focus() : v[3] ? v[3].focus() : v[0].focus())), !b && (a = true));
      });
      document.contains && I(M, "click", function(c) {
        c = c || window.event;
        qa ? O.contains(c.target) ? fa = true : (k.hideSettings(0), fa = false) : ea && x.contains(c.target) && (fa = true);
      }, true);
    }, La = function(a, b) {
      function c(e, h, l, m, n, p, r) {
        p = p && p.split(" ") || [];
        if (-1 < K(h, n) && (J(e, n), (n !== "bar" || p[0] !== "middle") && -1 < K(l, p[0])))
          for (h = 0; h < p.length; h++)
            J(e, p[h]);
        -1 < K(m, r) && J(e, r);
      }
      if (typeof a === "object") {
        var d = a.consent_modal;
        a = a.settings_modal;
        S && d && c(x, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], d.layout, d.position, d.transition);
        !b && a && c(H, ["bar"], ["left", "right"], ["zoom", "slide"], a.layout, a.position, a.transition);
      }
    };
    k.allowedCategory = function(a) {
      return -1 < K(JSON.parse(la(f.cookie_name, "one", true) || "{}").level || [], a);
    };
    k.run = function(a) {
      if (!document.getElementById("cc_div") && (Na(a), !Ea && (u = JSON.parse(la(f.cookie_name, "one", true) || "{}"), T = u.level !== void 0, E = u.data !== void 0 ? u.data : null, W = typeof a.revision === "number" ? T ? -1 < a.revision ? u.revision === f.revision : true : true : true, S = !T || !W, Pa(!S, a), Ra(a.theme_css, function() {
        Fa();
        La(a.gui_options);
        Oa();
        f.autorun && S && k.show(a.delay || 0);
        setTimeout(function() {
          J(M, "c--anim");
        }, 30);
        setTimeout(function() {
          Sa();
        }, 100);
      }), T && W))) {
        var b = typeof u.rfc_cookie === "boolean";
        if (!b || b && u.rfc_cookie !== f.use_rfc_cookie)
          u.rfc_cookie = f.use_rfc_cookie, Ca(f.cookie_name, JSON.stringify(u));
        Da();
        if (typeof a.onAccept === "function")
          a.onAccept(u);
      }
    };
    k.showSettings = function(a) {
      setTimeout(function() {
        J(ba, "show--settings");
        H.setAttribute("aria-hidden", "false");
        qa = true;
        setTimeout(function() {
          ea ? ua = document.activeElement : ma = document.activeElement;
          aa.length !== 0 && (aa[3] ? aa[3].focus() : aa[0].focus(), v = aa);
        }, 200);
      }, 0 < a ? a : 0);
    };
    var Da = function() {
      if (f.page_scripts) {
        var a = document.querySelectorAll("script[" + f.script_selector + "]"), b = f.page_scripts_order, c = u.level || [], d = function(e, h) {
          if (h < e.length) {
            var l = e[h], m = l.getAttribute(f.script_selector);
            if (-1 < K(c, m)) {
              l.type = "text/javascript";
              l.removeAttribute(f.script_selector);
              m = l.getAttribute("data-src");
              var n = g("script");
              n.textContent = l.innerHTML;
              (function(p, r) {
                for (var U = r.attributes, Q = U.length, A = 0; A < Q; A++)
                  r = U[A], p.setAttribute(r.nodeName, r.nodeValue);
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
            if (E = k.get("data"), (b = typeof E === typeof a) && typeof E === "object") {
              !E && (E = {});
              for (var d in a)
                E[d] !== a[d] && (E[d] = a[d], c = true);
            } else
              !b && E || E === a || (E = a, c = true);
          else
            E = a, c = true;
          c && (u.data = E, Ca(f.cookie_name, JSON.stringify(u)));
          return c;
        case "revision":
          return d = b.value, a = b.prompt_consent, b = b.message, M && typeof d === "number" && u.revision !== d ? (ta = true, Ga = b, W = false, f.revision = d, a === true ? (za(ya), La(ya.gui_options, true), Fa(), k.show()) : k.accept(), b = true) : b = false, b;
        default:
          return false;
      }
    };
    k.get = function(a, b) {
      return JSON.parse(la(b || f.cookie_name, "one", true) || "{}")[a];
    };
    k.getConfig = function(a) {
      return f[a];
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
      Da();
    };
    k.show = function(a) {
      S && setTimeout(function() {
        J(ba, "show--consent");
        x.setAttribute("aria-hidden", "false");
        ea = true;
        setTimeout(function() {
          ma = document.activeElement;
          v = va;
        }, 200);
      }, 0 < a ? a : 0);
    };
    k.hide = function() {
      S && (Ba(ba, "show--consent"), x.setAttribute("aria-hidden", "true"), ea = false, setTimeout(function() {
        ma.focus();
        v = null;
      }, 200));
    };
    k.hideSettings = function() {
      Ba(ba, "show--settings");
      qa = false;
      H.setAttribute("aria-hidden", "true");
      setTimeout(function() {
        ea ? (ua && ua.focus(), v = va) : (ma.focus(), v = null);
        fa = false;
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
            K(L, a[e]) !== -1 && b.push(a[e]);
        else
          typeof a === "string" && (a === "all" ? b = L.slice() : K(L, a) !== -1 && b.push(a));
      else
        b = d();
      if (1 <= c.length)
        for (e = 0; e < c.length; e++)
          b = b.filter(function(h) {
            return h !== c[e];
          });
      for (e = 0; e < L.length; e++)
        wa[e] === true && K(b, L[e]) === -1 && b.push(L[e]);
      Qa(b);
    };
    k.eraseCookies = function(a, b, c) {
      var d = [];
      c = c ? [c, "." + c] : [f.cookie_domain, "." + f.cookie_domain];
      if (typeof a === "object" && 0 < a.length)
        for (var e = 0; e < a.length; e++)
          this.validCookie(a[e]) && d.push(a[e]);
      else
        this.validCookie(a) && d.push(a);
      Ka(d, b, c);
    };
    var Ca = function(a, b) {
      b = f.use_rfc_cookie ? encodeURIComponent(b) : b;
      var c = new Date();
      c.setTime(c.getTime() + 864e5 * f.cookie_expiration);
      c = "; expires=" + c.toUTCString();
      a = a + "=" + (b || "") + c + "; Path=" + f.cookie_path + ";";
      a += " SameSite=" + f.cookie_same_site + ";";
      -1 < window.location.hostname.indexOf(".") && (a += " Domain=" + f.cookie_domain + ";");
      window.location.protocol === "https:" && (a += " Secure;");
      document.cookie = a;
    }, la = function(a, b, c) {
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
    }, Ka = function(a, b, c) {
      b = b ? b : "/";
      for (var d = 0; d < a.length; d++)
        for (var e = 0; e < c.length; e++)
          document.cookie = a[d] + "=; path=" + b + (-1 < c[e].indexOf(".") ? "; domain=" + c[e] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    k.validCookie = function(a) {
      return la(a, "one", true) !== "";
    };
    var I = function(a, b, c, d) {
      a.addEventListener ? d === true ? a.addEventListener(b, c, { passive: true }) : a.addEventListener(b, c, false) : a.attachEvent("on" + b, c);
    }, ha = function(a) {
      if (typeof a === "object") {
        var b = [], c = 0;
        for (b[c++] in a)
          ;
        return b;
      }
    }, J = function(a, b) {
      a.classList ? a.classList.add(b) : Ja(a, b) || (a.className += " " + b);
    }, Ba = function(a, b) {
      a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " ");
    }, Ja = function(a, b) {
      return a.classList ? a.classList.contains(b) : !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
    };
    return k;
  };
  typeof window.initCookieConsent !== "function" && (window.initCookieConsent = Ta);
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

// src/types/CookieConsentCategory.ts
var CookieConsentCategory = /* @__PURE__ */ ((CookieConsentCategory2) => {
  CookieConsentCategory2["NECESSARY"] = "necessary";
  CookieConsentCategory2["AD"] = "ad";
  CookieConsentCategory2["ANALYTICS"] = "analytics";
  CookieConsentCategory2["FUNCTIONALITY"] = "functionality";
  CookieConsentCategory2["PERSONALIZATION"] = "personalization";
  return CookieConsentCategory2;
})(CookieConsentCategory || {});

// src/types/vanilla-cookieconsent.ts
var VanillaCookieConsent;
((VanillaCookieConsent2) => {
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
      title: "Tyto str\xE1nky vyu\u017E\xEDvaj\xED cookies",
      description: `Kliknut\xEDm na \u201EP\u0159ijmout v\u0161e\u201C d\xE1v\xE1te souhlas ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, lang.and)} k\xA0vyu\u017E\xEDv\xE1n\xED soubor\u016F Cookies a\xA0dal\u0161\xEDch identifik\xE1tor\u016F ve\xA0va\u0161em za\u0159\xEDzen\xED. Pou\u017Eit\xED t\u011Bchto Cookies a\xA0dal\u0161\xEDch identifik\xE1tor\u016F usnadn\xED navigaci na str\xE1nk\xE1ch, zobrazen\xED personalizovan\xE9ho obsahu, c\xEDlen\xFD marketing, anal\xFDzu vyu\u017E\xEDv\xE1n\xED na\u0161ich produkt\u016F a\xA0slu\u017Eeb.
      V\xEDce informac\xED naleznete na\xA0str\xE1nce\xA0<a href="https://www.lmc.eu/cs/cookies" target="_blank">Pou\u017E\xEDv\xE1n\xED\xA0cookies</a>.`,
      primary_btn: {
        text: "P\u0159ijmout v\u0161e",
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
      title: "This website uses cookies",
      description: `By clicking on "Accept all", you give your consent to ${addSeparators(lang.companyNames, extra3.and)} to use cookies and other identifiers on your device. The use of these cookies and other identifiers will simplify navigation on the site, enable personalized content, targeted marketing, analysis of the usage of our products and services.
      For more information read page <a href="https://www.lmc.eu/en/cookies/" target="_blank">Use\xA0of\xA0cookies</a>.`,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
  and: "i"
};
var config5 = (extraMessages) => {
  const lang = __spreadValues(__spreadValues({}, extra5), extraMessages);
  return {
    consent_modal: {
      title: "Ta strona u\u017Cywa cookies",
      description: `Klikaj\u0105c \u201EAkceptuj\u0119 wszystkie\u201D, wyra\u017Casz zgod\u0119 dla ${addSeparators(lang.companyNames, extra5.and)} do wykorzystywania plik\xF3w i\xA0innych identyfikator\xF3w na Twoim urz\u0105dzeniu. Korzystanie z\xA0tych plik\xF3w cookie i\xA0innych identyfikator\xF3w u\u0142atwi nawigacj\u0119 w\xA0serwisie, wy\u015Bwietlanie spersonalizowanych tre\u015Bci, marketing ukierunkowany, analiz\u0119 korzystania z\xA0naszych produkt\xF3w i\xA0us\u0142ug.
      Wi\u0119cej informacji znajdziesz na stronie\xA0<a href="https://www.lmc.eu/pl/cookies" target="_blank">Korzystanie z\xA0plik\xF3w Cookies</a>.`,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
      title: "Tieto str\xE1nky pou\u017E\xEDvaj\xFA cookies",
      description: `Kliknut\xEDm na \u201EPrija\u0165 v\u0161etky\u201C d\xE1vate s\xFAhlas ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(lang.companyNames, lang.and)} k\xA0vyu\u017E\xEDvaniu s\xFAborov Cookies a\xA0\u010Fal\u0161\xEDch identifik\xE1torov vo\xA0va\u0161om zariaden\xED. Pou\u017Eitie t\xFDchto cookies a\xA0\u010Fal\u0161\xEDch identifik\xE1torov u\u013Eah\u010D\xED navig\xE1ciu na\xA0str\xE1nkach, zobrazenie personalizovan\xE9ho obsahu, cielen\xFD marketing, anal\xFDzu vyu\u017E\xEDvania na\u0161ich produktov a\xA0slu\u017Eieb.
      Viac inform\xE1ci\xED n\xE1jdete na\xA0str\xE1nke\xA0<a href="https://www.lmc.eu/sk/cookies" target="_blank">Pou\u017E\xEDvanie\xA0cookies</a>.`,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
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
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };
};

// src/consentCollector.ts
function submitConsent(consentCollectorApiUrl, cookieConsent, acceptedOnlyNecessary) {
  const payload = buildPayload(cookieConsent, acceptedOnlyNecessary);
  postDataToApi(consentCollectorApiUrl, payload);
}
function buildPayload(cookieConsent, acceptedOnlyNecessary) {
  const cookieData = cookieConsent.get("data");
  const acceptedCategories = cookieConsent.get("level");
  const rejectedCategories = acceptedOnlyNecessary ? [
    CookieConsentCategory.AD,
    CookieConsentCategory.ANALYTICS,
    CookieConsentCategory.FUNCTIONALITY,
    CookieConsentCategory.PERSONALIZATION
  ] : [];
  return {
    data: {
      type: "localDataAcceptationDataEntries",
      attributes: {
        acceptation_id: cookieData.uid,
        accept_type: acceptedOnlyNecessary ? VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY : VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
        accepted_categories: acceptedCategories,
        rejected_categories: rejectedCategories,
        revision: cookieConsent.get("revision"),
        source: cookieData.serviceName,
        language: cookieConsent.getConfig("current_lang"),
        days_of_acceptation: cookieConsent.getConfig("cookie_expiration")
      }
    }
  };
}
async function postDataToApi(apiUrl, payload) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json"
    },
    body: JSON.stringify(payload)
  });
  return response.json();
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
  const isFirstTimeAccept = !cookieConsent.validCookie(cookieName);
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
        transition: VanillaCookieConsent.Transition.SLIDE
      }
    },
    onAccept: (cookie) => {
      const givenLevels = cookieConsent.get("level");
      const acceptedOnlyNecessary = givenLevels.length === 1 && givenLevels[0] === CookieConsentCategory.NECESSARY;
      onAccept(cookie, cookieConsent);
      if (isFirstTimeAccept) {
        const cookieData = cookieConsent.get("data");
        if (cookieData === null || !("uid" in cookieData)) {
          cookieConsent.set("data", {
            value: { serviceName, uid: nanoid() },
            mode: "update"
          });
        }
        pushToDataLayer(cookie);
        if (consentCollectorApiUrl !== null) {
          consentCollector_default(consentCollectorApiUrl, cookieConsent, acceptedOnlyNecessary);
        }
        onFirstAccept(cookie, cookieConsent);
        acceptedOnlyNecessary ? onFirstAcceptOnlyNecessary(cookie, cookieConsent) : onFirstAcceptAll(cookie, cookieConsent);
      }
      acceptedOnlyNecessary ? onAcceptOnlyNecessary(cookie, cookieConsent) : onAcceptAll(cookie, cookieConsent);
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
    "CookieConsent.necessary": cookie.level.includes(CookieConsentCategory.NECESSARY),
    "CookieConsent.analytics": cookie.level.includes(CookieConsentCategory.ANALYTICS),
    "CookieConsent.ad": cookie.level.includes(CookieConsentCategory.AD),
    "CookieConsent.functionality": cookie.level.includes(CookieConsentCategory.FUNCTIONALITY),
    "CookieConsent.personalization": cookie.level.includes(CookieConsentCategory.PERSONALIZATION),
    "CookieConsent.revision": cookie.revision
  });
}
var LmcCookieConsentManager_default = LmcCookieConsentManager;
export {
  LmcCookieConsentManager_default as default
};
