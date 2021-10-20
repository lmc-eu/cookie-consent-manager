(() => {
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
    function Wa(Xa) {
      function Ga(a, b) {
        return a.classList ? a.classList.contains(b) : !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
      }
      function ta(a, b) {
        a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " ");
      }
      function F(a, b) {
        a.classList ? a.classList.add(b) : Ga(a, b) || (a.className += " " + b);
      }
      function ha(a) {
        if (typeof a === "object") {
          var b = [], c = 0;
          for (b[c++] in a)
            ;
          return b;
        }
      }
      function G(a, b, c, d) {
        a.addEventListener ? d ? a.addEventListener(b, c, { passive: true }) : a.addEventListener(b, c, false) : a.attachEvent("on" + b, c);
      }
      function Ha(a, b, c) {
        b = b ? b : "/";
        for (var d = 0; d < a.length; d++)
          for (var e = 0; e < c.length; e++)
            document.cookie = a[d] + "=; path=" + b + (-1 < c[e].indexOf(".") ? "; domain=" + c[e] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      }
      function ia(a, b, c) {
        var d;
        if (b === "one") {
          if ((d = (d = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? c ? d.pop() : a : "") && a === T) {
            try {
              d = JSON.parse(d);
            } catch (e) {
              d = JSON.parse(Ya(d));
            }
            d = JSON.stringify(d);
          }
        } else if (b === "all")
          for (a = document.cookie.split(/;\s*/), d = [], b = 0; b < a.length; b++)
            d.push(a[b].split("=")[0]);
        return d;
      }
      function ua(a, b) {
        b = ja ? Za(b) : b;
        var c = new Date();
        c.setTime(c.getTime() + 864e5 * Ia);
        a = a + "=" + (b || "") + ("; expires=" + c.toUTCString()) + "; Path=" + Ja + ";";
        a += " SameSite=" + Ka + ";";
        -1 < location.hostname.indexOf(".") && (a += " Domain=" + U + ";");
        location.protocol === "https:" && (a += " Secure;");
        document.cookie = a;
      }
      function La() {
        if (Ma) {
          var a = Na, b = r.level || [], c = function(d, e) {
            if (e < d.length) {
              var g = d[e], l = g.getAttribute("data-cookiecategory");
              if (-1 < H(b, l)) {
                g.type = "text/javascript";
                g.removeAttribute("data-cookiecategory");
                l = g.getAttribute("data-src");
                var k = f("script");
                k.textContent = g.innerHTML;
                (function(t, m) {
                  for (var p = m.attributes, W = p.length, J = 0; J < W; J++)
                    m = p[J], t.setAttribute(m.nodeName, m.nodeValue);
                })(k, g);
                l ? k.src = l : l = g.src;
                l && (a ? k.readyState ? k.onreadystatechange = function() {
                  if (k.readyState === "loaded" || k.readyState === "complete")
                    k.onreadystatechange = null, c(d, ++e);
                } : k.onload = function() {
                  k.onload = null;
                  c(d, ++e);
                } : l = false);
                g.parentNode.replaceChild(k, g);
                if (l)
                  return;
              }
              c(d, ++e);
            }
          };
          c(document.querySelectorAll("script[data-cookiecategory]"), 0);
        }
      }
      function Oa(a, b) {
        function c(e, g, l, k, t, m, p) {
          m = m && m.split(" ") || [];
          if (-1 < H(g, t) && (F(e, t), (t !== "bar" || m[0] !== "middle") && -1 < H(l, m[0])))
            for (g = 0; g < m.length; g++)
              F(e, m[g]);
          -1 < H(k, p) && F(e, p);
        }
        if (typeof a === "object") {
          var d = a.consent_modal;
          a = a.settings_modal;
          O && d && c(w, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], d.layout, d.position, d.transition);
          !b && a && c(I, ["bar"], ["left", "right"], ["zoom", "slide"], a.layout, a.position, a.transition);
        }
      }
      function $a() {
        var a = false, b = false;
        G(document, "keydown", function(c) {
          c = c || window.event;
          c.key === "Tab" && (u && (c.shiftKey ? document.activeElement === u[0] && (u[1].focus(), c.preventDefault()) : document.activeElement === u[1] && (u[0].focus(), c.preventDefault()), b || ka || (b = true, !a && c.preventDefault(), c.shiftKey ? u[3] ? u[2] ? u[2].focus() : u[0].focus() : u[1].focus() : u[3] ? u[3].focus() : u[0].focus())), !b && (a = true));
        });
        document.contains && G(M, "click", function(c) {
          c = c || window.event;
          va ? P.contains(c.target) ? ka = true : (h.hideSettings(0), ka = false) : la && w.contains(c.target) && (ka = true);
        }, true);
      }
      function f(a) {
        var b = document.createElement(a);
        a === "button" && b.setAttribute("type", a);
        return b;
      }
      function H(a, b) {
        for (var c = a.length, d = 0; d < c; d++)
          if (a[d] == b)
            return d;
        return -1;
      }
      function ab(a, b) {
        if (typeof a !== "string" || a == "" || document.getElementById("cc--style"))
          b();
        else {
          var c = f("style");
          c.id = "cc--style";
          var d = new XMLHttpRequest();
          d.onreadystatechange = function() {
            this.readyState == 4 && this.status == 200 && (c.setAttribute("type", "text/css"), c.styleSheet ? c.styleSheet.cssText = this.responseText : c.appendChild(document.createTextNode(this.responseText)), document.getElementsByTagName("head")[0].appendChild(c), b());
          };
          d.open("GET", a);
          d.send();
        }
      }
      function bb(a) {
        var b = document.querySelectorAll(".c-tgl") || [], c = [], d = false;
        if (0 < b.length) {
          for (var e = 0; e < b.length; e++)
            H(a, N[e]) !== -1 ? (b[e].checked = true, Q[e] || (c.push(N[e]), Q[e] = true)) : (b[e].checked = false, Q[e] && (c.push(N[e]), Q[e] = false));
          if (Pa && R && 0 < c.length) {
            b = x.length;
            e = -1;
            var g = ia("", "all"), l = [U, "." + U];
            if (U.slice(0, 4) === "www.") {
              var k = U.substr(4);
              l.push(k);
              l.push("." + k);
            }
            for (k = 0; k < b; k++) {
              var t = x[k];
              if (t.hasOwnProperty("toggle") && !Q[++e] && t.hasOwnProperty("cookie_table") && -1 < H(c, t.toggle.value)) {
                var m = t.cookie_table, p = ha(X[0])[0], W = m.length;
                t.toggle.reload === "on_disable" && (d = true);
                for (var J = 0; J < W; J++) {
                  var K = m[J], n = [], v = K[p], y = K.is_regex || false, q = K.domain || null;
                  K = K.path || false;
                  q && (l = [q, "." + q]);
                  if (y)
                    for (y = 0; y < g.length; y++)
                      g[y].match(v) && n.push(g[y]);
                  else
                    v = H(g, v), -1 < v && n.push(g[v]);
                  0 < n.length && (Ha(n, K, l), t.toggle.reload === "on_clear" && (d = true));
                }
              }
            }
          }
        }
        r = { level: a, revision: oa, data: C, rfc_cookie: ja };
        if (!R || 0 < c.length || !Y)
          Y = true, ua(T, JSON.stringify(r)), La();
        if (typeof wa === "function" && !R)
          return R = true, wa(r);
        typeof xa === "function" && 0 < c.length && xa(r, c);
        d && window.location.reload();
      }
      function cb(a, b) {
        M = f("div");
        M.id = "cc--main";
        M.style.position = "fixed";
        M.style.zIndex = "1000000";
        M.innerHTML = '<!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div" class="cc_div"></div><!--<![endif]-->';
        var c = M.children[0], d = L, e = typeof ca.textContent === "string" ? "textContent" : "innerText";
        ya = b;
        za = function(z) {
          z.force_consent === true && F(ca, "force--consent");
          w = f("div");
          var V = f("div"), Z = f("div"), ma = f("div"), Aa = f("div"), pa = f("div"), na = f("button"), da = f("button"), qa = f("div");
          w.id = "cm";
          V.id = "c-inr";
          Z.id = "c-inr-i";
          ma.id = "c-ttl";
          Aa.id = "c-txt";
          pa.id = "c-bns";
          na.id = "c-p-bn";
          da.id = "c-s-bn";
          qa.id = "cm-ov";
          na.className = "c-bn";
          da.className = "c-bn c_link";
          ma.setAttribute("role", "heading");
          ma.setAttribute("aria-level", "2");
          w.setAttribute("role", "dialog");
          w.setAttribute("aria-modal", "true");
          w.setAttribute("aria-hidden", "false");
          w.setAttribute("aria-labelledby", "c-ttl");
          w.setAttribute("aria-describedby", "c-txt");
          w.style.visibility = qa.style.visibility = "hidden";
          qa.style.opacity = 0;
          ma.insertAdjacentHTML("beforeend", z.languages[d].consent_modal.title);
          var ra = z.languages[d].consent_modal.description;
          Ba && (ra = Y ? ra.replace("{{revision_message}}", "") : ra.replace("{{revision_message}}", Qa || z.languages[d].consent_modal.revision_message || ""));
          Aa.insertAdjacentHTML("beforeend", ra);
          na[e] = z.languages[d].consent_modal.primary_btn.text;
          da[e] = z.languages[d].consent_modal.secondary_btn.text;
          var Ra;
          z.languages[d].consent_modal.primary_btn.role == "accept_all" && (Ra = "all");
          G(na, "click", function() {
            h.hide();
            h.accept(Ra);
          });
          z.languages[d].consent_modal.secondary_btn.role == "accept_necessary" ? G(da, "click", function() {
            h.hide();
            h.accept([]);
          }) : G(da, "click", function() {
            h.showSettings(0);
          });
          Z.appendChild(ma);
          Z.appendChild(Aa);
          pa.appendChild(na);
          pa.appendChild(da);
          V.appendChild(Z);
          V.appendChild(pa);
          w.appendChild(V);
          c.appendChild(w);
          c.appendChild(qa);
          O = true;
        };
        a || za(b);
        I = f("div");
        var g = f("div"), l = f("div"), k = f("div");
        P = f("div");
        var t = f("div"), m = f("div"), p = f("button"), W = f("div"), J = f("div"), K = f("div");
        I.id = "s-cnt";
        g.id = "c-vln";
        k.id = "c-s-in";
        l.id = "cs";
        t.id = "s-ttl";
        P.id = "s-inr";
        m.id = "s-hdr";
        J.id = "s-bl";
        p.id = "s-c-bn";
        K.id = "cs-ov";
        W.id = "s-c-bnc";
        p.className = "c-bn";
        p.setAttribute("aria-label", b.languages[d].settings_modal.close_btn_label || "Close");
        I.setAttribute("role", "dialog");
        I.setAttribute("aria-modal", "true");
        I.setAttribute("aria-hidden", "true");
        I.setAttribute("aria-labelledby", "s-ttl");
        t.setAttribute("role", "heading");
        I.style.visibility = K.style.visibility = "hidden";
        K.style.opacity = 0;
        W.appendChild(p);
        G(g, "keydown", function(z) {
          z = z || window.event;
          z.keyCode == 27 && h.hideSettings(0);
        }, true);
        G(p, "click", function() {
          h.hideSettings(0);
        });
        x = b.languages[L].settings_modal.blocks;
        X = b.languages[L].settings_modal.cookie_table_headers;
        p = x.length;
        t.insertAdjacentHTML("beforeend", b.languages[L].settings_modal.title);
        for (var n = 0; n < p; ++n) {
          var v = f("div"), y = f("div"), q = f("div"), D = f("div");
          v.className = "c-bl";
          y.className = "desc";
          q.className = "p";
          D.className = "title";
          q.insertAdjacentHTML("beforeend", x[n].description);
          if (typeof x[n].toggle !== "undefined") {
            var A = "c-ac-" + n, aa = f("button"), E = f("label"), B = f("input"), S = f("span"), ba = f("span"), ea = f("span"), Sa = f("span");
            aa.className = "b-tl";
            E.className = "b-tg";
            B.className = "c-tgl";
            ea.className = "on-i";
            Sa.className = "off-i";
            S.className = "c-tg";
            ba.className = "t-lb";
            aa.setAttribute("aria-expanded", "false");
            aa.setAttribute("aria-controls", A);
            B.type = "checkbox";
            S.setAttribute("aria-hidden", "true");
            var Ca = x[n].toggle.value;
            B.value = Ca;
            ba[e] = x[n].title;
            aa.insertAdjacentHTML("beforeend", x[n].title);
            D.appendChild(aa);
            S.appendChild(ea);
            S.appendChild(Sa);
            a ? -1 < H(r.level, Ca) ? (B.checked = true, Q.push(true)) : Q.push(false) : x[n].toggle.enabled ? (B.checked = true, Q.push(true)) : Q.push(false);
            N.push(Ca);
            x[n].toggle.readonly ? (B.disabled = true, F(S, "c-ro"), Da.push(true)) : Da.push(false);
            F(y, "b-acc");
            F(D, "b-bn");
            F(v, "b-ex");
            y.id = A;
            y.setAttribute("aria-hidden", "true");
            E.appendChild(B);
            E.appendChild(S);
            E.appendChild(ba);
            D.appendChild(E);
            (function(z, V, Z) {
              G(aa, "click", function() {
                Ga(V, "act") ? (ta(V, "act"), Z.setAttribute("aria-expanded", "false"), z.setAttribute("aria-hidden", "true")) : (F(V, "act"), Z.setAttribute("aria-expanded", "true"), z.setAttribute("aria-hidden", "false"));
              }, false);
            })(y, v, aa);
          } else
            A = f("div"), A.className = "b-tl", A.setAttribute("role", "heading"), A.setAttribute("aria-level", "3"), A.insertAdjacentHTML("beforeend", x[n].title), D.appendChild(A);
          v.appendChild(D);
          y.appendChild(q);
          if (b.remove_cookie_tables !== true && typeof x[n].cookie_table !== "undefined") {
            A = document.createDocumentFragment();
            for (E = 0; E < X.length; ++E)
              B = f("th"), q = X[E], B.setAttribute("scope", "col"), q && (D = q && ha(q)[0], B[e] = X[E][D], A.appendChild(B));
            q = f("tr");
            q.appendChild(A);
            D = f("thead");
            D.appendChild(q);
            A = f("table");
            A.appendChild(D);
            E = document.createDocumentFragment();
            for (B = 0; B < x[n].cookie_table.length; B++) {
              S = f("tr");
              for (ba = 0; ba < X.length; ++ba)
                if (q = X[ba])
                  D = ha(q)[0], ea = f("td"), ea.insertAdjacentHTML("beforeend", x[n].cookie_table[B][D]), ea.setAttribute("data-column", q[D]), S.appendChild(ea);
              E.appendChild(S);
            }
            q = f("tbody");
            q.appendChild(E);
            A.appendChild(q);
            y.appendChild(A);
          }
          v.appendChild(y);
          J.appendChild(v);
        }
        a = f("div");
        p = f("button");
        n = f("button");
        a.id = "s-bns";
        p.id = "s-sv-bn";
        n.id = "s-all-bn";
        p.className = "c-bn";
        n.className = "c-bn";
        p.insertAdjacentHTML("beforeend", b.languages[L].settings_modal.save_settings_btn);
        n.insertAdjacentHTML("beforeend", b.languages[L].settings_modal.accept_all_btn);
        a.appendChild(n);
        if (b = b.languages[L].settings_modal.reject_all_btn)
          v = f("button"), v.id = "s-rall-bn", v.className = "c-bn", v.insertAdjacentHTML("beforeend", b), G(v, "click", function() {
            h.hideSettings();
            h.hide();
            h.accept([]);
          }), P.className = "bns-t", a.appendChild(v);
        a.appendChild(p);
        G(p, "click", function() {
          h.hideSettings();
          h.hide();
          h.accept();
        });
        G(n, "click", function() {
          h.hideSettings();
          h.hide();
          h.accept("all");
        });
        m.appendChild(t);
        m.appendChild(W);
        P.appendChild(m);
        P.appendChild(J);
        P.appendChild(a);
        k.appendChild(P);
        l.appendChild(k);
        g.appendChild(l);
        I.appendChild(g);
        c.appendChild(I);
        c.appendChild(K);
        (Xa || document.body).appendChild(M);
      }
      function db() {
        function a(c, d) {
          var e = false, g = false;
          try {
            for (var l = c.querySelectorAll(b.join(':not([tabindex="-1"]), ')), k, t = l.length, m = 0; m < t; )
              k = l[m].getAttribute("data-focus"), g || k !== "1" ? k === "0" && (e = l[m], g || l[m + 1].getAttribute("data-focus") === "0" || (g = l[m + 1])) : g = l[m], m++;
          } catch (p) {
            return c.querySelectorAll(b.join(", "));
          }
          d[0] = l[0];
          d[1] = l[l.length - 1];
          d[2] = e;
          d[3] = g;
        }
        var b = ["[href]", "button", "input", "details", '[tabindex="0"]'];
        a(P, fa);
        O && a(w, Ea);
      }
      function Ta(a, b) {
        if (b.hasOwnProperty(a))
          return a;
        if (0 < ha(b).length)
          return b.hasOwnProperty(L) ? L : ha(b)[0];
      }
      function eb() {
        for (var a = document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'), b = 0; b < a.length; b++)
          a[b].setAttribute("aria-haspopup", "dialog"), G(a[b], "click", function(c) {
            h.showSettings(0);
            c.preventDefault ? c.preventDefault() : c.returnValue = false;
          });
      }
      function fb(a) {
        typeof a.cookie_expiration === "number" && (Ia = a.cookie_expiration);
        typeof a.autorun === "boolean" && (Ua = a.autorun);
        typeof a.cookie_domain === "string" && (U = a.cookie_domain);
        typeof a.cookie_same_site === "string" && (Ka = a.cookie_same_site);
        typeof a.cookie_path === "string" && (Ja = a.cookie_path);
        typeof a.cookie_name === "string" && (T = a.cookie_name);
        typeof a.onAccept === "function" && (wa = a.onAccept);
        typeof a.onChange === "function" && (xa = a.onChange);
        typeof a.revision === "number" && (-1 < a.revision && (oa = a.revision), Ba = true);
        a.autoclear_cookies === true && (Pa = true);
        a.use_rfc_cookie === true && (ja = true);
        a.hide_from_bots === true && (Va = navigator && navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent));
        Ma = a.page_scripts === true;
        Na = a.page_scripts_order !== false;
        if (a.auto_language === true) {
          var b = navigator.language || navigator.browserLanguage;
          2 < b.length && (b = b[0] + b[1]);
          L = Ta(b.toLowerCase(), a.languages);
        } else
          typeof a.current_lang === "string" && (L = Ta(a.current_lang, a.languages));
      }
      function Za(a) {
        return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(b, c) {
          return String.fromCharCode(parseInt(c, 16));
        }));
      }
      function Ya(a) {
        return decodeURIComponent(Array.prototype.map.call(atob(a), function(b) {
          return "%" + ("00" + b.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
      }
      var L = "en", Ua = true, T = "cc_cookie", Ia = 182, U = location.hostname, Ja = "/", Ka = "Lax", ja = false, Pa = true, oa = 0, Ma, Na, h = {}, r = {}, O = false, R = false, la = false, va = false, ka = false, u, X, x, wa, xa, Y = true, Ba = false, C = null, Va = false, sa, Fa, Ea = [], fa = [], Q = [], N = [], Da = [], ca = document.documentElement, M, w, I, P, ya, za, Qa = "";
      h.allowedCategory = function(a) {
        return -1 < H(JSON.parse(ia(T, "one", true) || "{}").level || [], a);
      };
      h.run = function(a) {
        if (!document.getElementById("cc_div") && (fb(a), !Va && (r = JSON.parse(ia(T, "one", true) || "{}"), R = r.level !== void 0, C = r.data !== void 0 ? r.data : null, Y = typeof a.revision === "number" ? R ? -1 < a.revision ? r.revision === oa : true : true : true, O = !R || !Y, cb(!O, a), ab(a.theme_css, function() {
          db();
          Oa(a.gui_options);
          eb();
          Ua && O && h.show(a.delay || 0);
          setTimeout(function() {
            F(M, "c--anim");
          }, 30);
          setTimeout(function() {
            $a();
          }, 100);
        }), R && Y))) {
          var b = typeof r.rfc_cookie === "boolean";
          if (!b || b && r.rfc_cookie !== ja)
            r.rfc_cookie = ja, ua(T, JSON.stringify(r));
          La();
          if (typeof a.onAccept === "function")
            a.onAccept(r);
        }
      };
      h.showSettings = function(a) {
        setTimeout(function() {
          F(ca, "show--settings");
          I.setAttribute("aria-hidden", "false");
          va = true;
          setTimeout(function() {
            la ? Fa = document.activeElement : sa = document.activeElement;
            fa.length !== 0 && (fa[3] ? fa[3].focus() : fa[0].focus(), u = fa);
          }, 200);
        }, 0 < a ? a : 0);
      };
      h.set = function(a, b) {
        switch (a) {
          case "data":
            a = b.value;
            var c = false;
            if (b.mode === "update")
              if (C = h.get("data"), (b = typeof C === typeof a) && typeof C === "object") {
                !C && (C = {});
                for (var d in a)
                  C[d] !== a[d] && (C[d] = a[d], c = true);
              } else
                !b && C || C === a || (C = a, c = true);
            else
              C = a, c = true;
            c && (r.data = C, ua(T, JSON.stringify(r)));
            return c;
          case "revision":
            return d = b.value, a = b.prompt_consent, b = b.message, M && R && typeof d === "number" && r.revision !== d ? (Ba = true, Qa = b, Y = false, oa = d, a === true ? (O || (za(ya), Oa(ya.gui_options, true)), h.show()) : h.accept(), b = true) : b = false, b;
        }
      };
      h.get = function(a) {
        return JSON.parse(ia(T, "one", true) || "{}")[a];
      };
      h.loadScript = function(a, b, c) {
        var d = typeof b === "function";
        if (document.querySelector('script[src="' + a + '"]'))
          d && b();
        else {
          var e = f("script");
          if (c && 0 < c.length)
            for (var g = 0; g < c.length; ++g)
              c[g] && e.setAttribute(c[g].name, c[g].value);
          d && (e.readyState ? e.onreadystatechange = function() {
            if (e.readyState === "loaded" || e.readyState === "complete")
              e.onreadystatechange = null, b();
          } : e.onload = b);
          e.src = a;
          (document.head ? document.head : document.getElementsByTagName("head")[0]).appendChild(e);
        }
      };
      h.show = function(a) {
        O && setTimeout(function() {
          F(ca, "show--consent");
          w.setAttribute("aria-hidden", "false");
          la = true;
          setTimeout(function() {
            sa = document.activeElement;
            u = Ea;
          }, 200);
        }, 0 < a ? a : 0);
      };
      h.hide = function() {
        O && (ta(ca, "show--consent"), w.setAttribute("aria-hidden", "true"), la = false, setTimeout(function() {
          sa.focus();
          u = null;
        }, 200));
      };
      h.hideSettings = function() {
        ta(ca, "show--settings");
        va = false;
        I.setAttribute("aria-hidden", "true");
        setTimeout(function() {
          la ? (Fa && Fa.focus(), u = Ea) : (sa.focus(), u = null);
          ka = false;
        }, 200);
      };
      h.accept = function(a, b) {
        function c() {
          for (var g = document.querySelectorAll(".c-tgl") || [], l = [], k = 0; k < g.length; k++)
            g[k].checked && l.push(g[k].value);
          return l;
        }
        a = a || void 0;
        var d = b || [];
        b = [];
        if (a)
          if (typeof a === "object" && typeof a.length === "number")
            for (var e = 0; e < a.length; e++)
              H(N, a[e]) !== -1 && b.push(a[e]);
          else
            typeof a === "string" && (a === "all" ? b = N.slice() : H(N, a) !== -1 && b.push(a));
        else
          b = c();
        if (1 <= d.length)
          for (e = 0; e < d.length; e++)
            b = b.filter(function(g) {
              return g !== d[e];
            });
        for (e = 0; e < N.length; e++)
          Da[e] === true && H(b, N[e]) === -1 && b.push(N[e]);
        bb(b);
      };
      h.eraseCookies = function(a, b, c) {
        var d = [];
        c = c ? [c, "." + c] : [U, "." + U];
        if (typeof a === "object" && 0 < a.length)
          for (var e = 0; e < a.length; e++)
            this.validCookie(a[e]) && d.push(a[e]);
        else
          this.validCookie(a) && d.push(a);
        Ha(d, b, c);
      };
      h.validCookie = function(a) {
        return ia(a, "one", true) != "";
      };
      return h;
    }
    typeof window.initCookieConsent !== "function" && (window.initCookieConsent = Wa);
  })();

  // src/languages/en.js
  var config = {
    consent_modal: {
      title: "I use cookies",
      description: "Your cookie consent message here",
      primary_btn: {
        text: "Accept",
        role: "accept_all"
      },
      secondary_btn: {
        text: "Reject",
        role: "accept_necessary"
      }
    },
    settings_modal: {
      title: "Cookie settings",
      save_settings_btn: "Save settings",
      accept_all_btn: "Accept all",
      reject_all_btn: "Reject all",
      close_btn_label: "Close",
      blocks: [
        {
          toggle: {
            value: "necessary",
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "analytics",
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality",
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization",
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };

  // src/languages/cs.js
  var config2 = {
    consent_modal: {
      title: "Tyto str\xE1nky pou\u017E\xEDvaj\xED cookies",
      description: 'Cookies pou\u017E\xEDv\xE1me, abychom zajistili spr\xE1vn\xE9 fungov\xE1n\xED a bezpe\u010Dnost na\u0161ich str\xE1nek, t\xEDm p\xE1dem co nejlep\u0161\xED zku\u0161enost p\u0159i n\xE1v\u0161t\u011Bv\u011B. Kliknut\xEDm na \u201EP\u0159ijmout v\u0161echny\u201C d\xE1v\xE1te sv\u016Fj souhlas s pou\u017Eit\xEDm cookies pro \xFA\u010Dely reklamy a analytik. Sv\xE1 nastaven\xED cookies m\u016F\u017Eete pozd\u011Bji kdykoliv zm\u011Bnit. V\xEDce informac\xED naleznete v <a href="#">Prohl\xE1\u0161en\xED o cookies.</a>',
      primary_btn: {
        text: "P\u0159ijmout",
        role: "accept_all"
      },
      secondary_btn: {
        text: "P\u0159ijmout nezbytn\xE9",
        role: "accept_necessary"
      }
    },
    settings_modal: {
      title: "Nastaven\xED cookies",
      save_settings_btn: "Ulo\u017Eit nastaven\xE9",
      accept_all_btn: "P\u0159ijmout v\u0161e",
      reject_all_btn: "Odm\xEDtnout v\u0161e",
      close_btn_label: "Zav\u0159\xEDt",
      blocks: [
        {
          toggle: {
            value: "necessary",
            enabled: true,
            readonly: true
          }
        },
        {
          toggle: {
            value: "analytics",
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "functionality",
            enabled: false,
            readonly: false
          }
        },
        {
          toggle: {
            value: "personalization",
            enabled: false,
            readonly: false
          }
        }
      ]
    }
  };

  // src/LmcCookieConsentManager.js
  var defaultOptions = { currentLang: "cs", themeCss: "", config: {} };
  var LmcCookieConsentManager = (options = defaultOptions) => {
    const { currentLang, themeCss, config: config3 } = options;
    const cookieconsent = window.initCookieConsent();
    cookieconsent.run(__spreadValues({
      current_lang: currentLang,
      auto_language: true,
      theme_css: themeCss,
      cookie_name: "lmc_ccm",
      cookie_expiration: 365,
      use_rfc_cookie: true,
      autorun: true,
      delay: 0,
      force_consent: false,
      hide_from_bots: true,
      gui_options: {
        consent_modal: {
          layout: "bar",
          position: "bottom center",
          transition: "slide"
        }
      },
      onAccept: (cookie) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "CookieConsent-update",
          "CookieConsent.necessary": cookie.level.includes("necessary"),
          "CookieConsent.analytics": cookie.level.includes("analytics"),
          "CookieConsent.functionality": cookie.level.includes("functionality"),
          "CookieConsent.personalization": cookie.level.includes("personalization"),
          "CookieConsent.revision": cookie.revision
        });
      },
      languages: {
        en: config,
        cs: config2
      }
    }, config3));
  };
  var LmcCookieConsentManager_default = LmcCookieConsentManager;
})();
