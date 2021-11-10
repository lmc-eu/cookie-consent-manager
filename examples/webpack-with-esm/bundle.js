(()=>{"use strict";var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,i=(e,i)=>{for(var l in i||(i={}))n.call(i,l)&&o(e,l,i[l]);if(t)for(var l of t(i))a.call(i,l)&&o(e,l,i[l]);return e};"function"!=typeof window.initCookieConsent&&(window.initCookieConsent=function(e){var t,n,a,o,i,l,c,s,r,d,u,p,g,m,y={current_lang:"en",auto_language:null,autorun:!0,cookie_name:"cc_cookie",cookie_expiration:182,cookie_domain:window.location.hostname,cookie_path:"/",cookie_same_site:"Lax",use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:"data-cookiecategory"},f={},h={},v=!1,b=!1,_=!1,k=!1,w=!1,C=!0,A=!1,z=null,N=!1,x=[],j=[],S=[],T=[],L=[],O=document.documentElement,E=function(e,t){return Object.prototype.hasOwnProperty.call(t,e)?e:0<V(t).length?Object.prototype.hasOwnProperty.call(t,y.current_lang)?y.current_lang:V(t)[0]:void 0},$=function(){function e(e,n){var a=!1,o=!1;try{for(var i,l=e.querySelectorAll(t.join(':not([tabindex="-1"]), ')),c=l.length,s=0;s<c;)i=l[s].getAttribute("data-focus"),o||"1"!==i?"0"===i&&(a=l[s],o||"0"===l[s+1].getAttribute("data-focus")||(o=l[s+1])):o=l[s],s++}catch(n){return e.querySelectorAll(t.join(", "))}n[0]=l[0],n[1]=l[l.length-1],n[2]=a,n[3]=o}var t=["[href]","button","input","details",'[tabindex="0"]'];e(u,j),v&&e(r,x)},P="",M=function(e,t){for(var n=e.length,a=0;a<n;a++)if(e[a]===t)return a;return-1},D=function(e){var t=document.createElement(e);return"button"===e&&t.setAttribute("type",e),t},I=function(e,t){function n(e,t,n,a,o,i,l){if(i=i&&i.split(" ")||[],-1<M(t,o)&&(K(e,o),("bar"!==o||"middle"!==i[0])&&-1<M(n,i[0])))for(t=0;t<i.length;t++)K(e,i[t]);-1<M(a,l)&&K(e,l)}if("object"==typeof e){var a=e.consent_modal;e=e.settings_modal,v&&a&&n(r,["box","bar","cloud"],["top","middle","bottom"],["zoom","slide"],a.layout,a.position,a.transition),!t&&e&&n(d,["bar"],["left","right"],["zoom","slide"],e.layout,e.position,e.transition)}};f.allowedCategory=function(e){return-1<M(JSON.parse(q(y.cookie_name,"one",!0)||"{}").level||[],e)},f.run=function(l){if(!document.getElementById("cc_div")&&(function(e){"number"==typeof e.cookie_expiration&&(y.cookie_expiration=e.cookie_expiration),"boolean"==typeof e.autorun&&(y.autorun=e.autorun),"string"==typeof e.cookie_domain&&(y.cookie_domain=e.cookie_domain),"string"==typeof e.cookie_same_site&&(y.cookie_same_site=e.cookie_same_site),"string"==typeof e.cookie_path&&(y.cookie_path=e.cookie_path),"string"==typeof e.cookie_name&&(y.cookie_name=e.cookie_name),"function"==typeof e.onAccept&&(o=e.onAccept),"function"==typeof e.onChange&&(i=e.onChange),"number"==typeof e.revision&&(-1<e.revision&&(y.revision=e.revision),A=!0),!0===e.autoclear_cookies&&(y.autoclear_cookies=!0),!0===e.use_rfc_cookie&&(y.use_rfc_cookie=!0),!0===e.hide_from_bots&&(N=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),y.page_scripts=!0===e.page_scripts,y.page_scripts_order=!1!==e.page_scripts_order,"browser"===e.auto_language||!0===e.auto_language?y.auto_language="browser":"document"===e.auto_language&&(y.auto_language="document");var t=e.languages;e=e.current_lang,"browser"===y.auto_language?(2<(e=navigator.language||navigator.browserLanguage).length&&(e=e[0]+e[1]),e=e.toLowerCase(),t=E(e,t)):t="document"===y.auto_language?E(document.documentElement.lang,t):"string"==typeof e?y.current_lang=E(e,t):y.current_lang,y.current_lang=t}(l),!N&&(h=JSON.parse(q(y.cookie_name,"one",!0)||"{}"),b=void 0!==h.level,z=void 0!==h.data?h.data:null,C=!("number"==typeof l.revision&&b&&-1<l.revision&&h.revision!==y.revision),function(t,o){(s=D("div")).id="cc--main",s.style.position="fixed",s.style.zIndex="1000000",s.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';var i=s.children[0],l=y.current_lang,c="string"==typeof O.textContent?"textContent":"innerText";p=o,g=function(e){!0===e.force_consent&&K(O,"force--consent");var t=e.languages[l].consent_modal.description;if(A&&(t=C?t.replace("{{revision_message}}",""):t.replace("{{revision_message}}",P||e.languages[l].consent_modal.revision_message||"")),r)m.innerHTML=t;else{r=D("div");var n=D("div"),a=D("div"),o=D("div");m=D("div");var s,d=D("div"),u=D("button"),p=D("button"),g=D("div");r.id="cm",n.id="c-inr",a.id="c-inr-i",o.id="c-ttl",m.id="c-txt",d.id="c-bns",u.id="c-p-bn",p.id="c-s-bn",g.id="cm-ov",u.className="c-bn",p.className="c-bn c_link",o.setAttribute("role","heading"),o.setAttribute("aria-level","2"),r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-hidden","false"),r.setAttribute("aria-labelledby","c-ttl"),r.setAttribute("aria-describedby","c-txt"),r.style.visibility=g.style.visibility="hidden",g.style.opacity=0,o.insertAdjacentHTML("beforeend",e.languages[l].consent_modal.title),m.insertAdjacentHTML("beforeend",t),u[c]=e.languages[l].consent_modal.primary_btn.text,p[c]=e.languages[l].consent_modal.secondary_btn.text,"accept_all"===e.languages[l].consent_modal.primary_btn.role&&(s="all"),U(u,"click",(function(){f.hide(),f.accept(s)})),"accept_necessary"===e.languages[l].consent_modal.secondary_btn.role?U(p,"click",(function(){f.hide(),f.accept([])})):U(p,"click",(function(){f.showSettings(0)})),a.appendChild(o),a.appendChild(m),d.appendChild(u),d.appendChild(p),n.appendChild(a),n.appendChild(d),r.appendChild(n),i.appendChild(r),i.appendChild(g),v=!0}},t||g(o),d=D("div");var b=D("div"),_=D("div"),k=D("div");u=D("div");var w=D("div"),z=D("div"),N=D("button"),x=D("div"),j=D("div"),E=D("div");d.id="s-cnt",b.id="c-vln",k.id="c-s-in",_.id="cs",w.id="s-ttl",u.id="s-inr",z.id="s-hdr",j.id="s-bl",N.id="s-c-bn",E.id="cs-ov",x.id="s-c-bnc",N.className="c-bn",N.setAttribute("aria-label",o.languages[l].settings_modal.close_btn_label||"Close"),d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),d.setAttribute("aria-hidden","true"),d.setAttribute("aria-labelledby","s-ttl"),w.setAttribute("role","heading"),d.style.visibility=E.style.visibility="hidden",E.style.opacity=0,x.appendChild(N),U(b,"keydown",(function(e){27===(e=e||window.event).keyCode&&f.hideSettings(0)}),!0),U(N,"click",(function(){f.hideSettings(0)})),a=o.languages[y.current_lang].settings_modal.blocks,n=o.languages[y.current_lang].settings_modal.cookie_table_headers,N=a.length,w.insertAdjacentHTML("beforeend",o.languages[y.current_lang].settings_modal.title);for(var $=0;$<N;++$){var I=D("div"),H=D("div"),J=D("div"),q=D("div");if(I.className="c-bl",H.className="desc",J.className="p",q.className="title",J.insertAdjacentHTML("beforeend",a[$].description),void 0!==a[$].toggle){var F="c-ac-"+$,W=D("button"),G=D("label"),X=D("input"),Q=D("span"),Y=D("span"),Z=D("span"),ee=D("span");W.className="b-tl",G.className="b-tg",X.className="c-tgl",Z.className="on-i",ee.className="off-i",Q.className="c-tg",Y.className="t-lb",W.setAttribute("aria-expanded","false"),W.setAttribute("aria-controls",F),X.type="checkbox",Q.setAttribute("aria-hidden","true");var te=a[$].toggle.value;X.value=te,Y[c]=a[$].title,W.insertAdjacentHTML("beforeend",a[$].title),q.appendChild(W),Q.appendChild(Z),Q.appendChild(ee),t?-1<M(h.level,te)?(X.checked=!0,S.push(!0)):S.push(!1):a[$].toggle.enabled?(X.checked=!0,S.push(!0)):S.push(!1),T.push(te),a[$].toggle.readonly?(X.disabled=!0,K(Q,"c-ro"),L.push(!0)):L.push(!1),K(H,"b-acc"),K(q,"b-bn"),K(I,"b-ex"),H.id=F,H.setAttribute("aria-hidden","true"),G.appendChild(X),G.appendChild(Q),G.appendChild(Y),q.appendChild(G),function(e,t,n){U(W,"click",(function(){R(t,"act")?(B(t,"act"),n.setAttribute("aria-expanded","false"),e.setAttribute("aria-hidden","true")):(K(t,"act"),n.setAttribute("aria-expanded","true"),e.setAttribute("aria-hidden","false"))}),!1)}(H,I,W)}else(F=D("div")).className="b-tl",F.setAttribute("role","heading"),F.setAttribute("aria-level","3"),F.insertAdjacentHTML("beforeend",a[$].title),q.appendChild(F);if(I.appendChild(q),H.appendChild(J),!0!==o.remove_cookie_tables&&void 0!==a[$].cookie_table){for(F=document.createDocumentFragment(),G=0;G<n.length;++G)X=D("th"),J=n[G],X.setAttribute("scope","col"),J&&(q=J&&V(J)[0],X[c]=n[G][q],F.appendChild(X));for((J=D("tr")).appendChild(F),(q=D("thead")).appendChild(J),(F=D("table")).appendChild(q),G=document.createDocumentFragment(),X=0;X<a[$].cookie_table.length;X++){for(Q=D("tr"),Y=0;Y<n.length;++Y)(J=n[Y])&&(q=V(J)[0],(Z=D("td")).insertAdjacentHTML("beforeend",a[$].cookie_table[X][q]),Z.setAttribute("data-column",J[q]),Q.appendChild(Z));G.appendChild(Q)}(J=D("tbody")).appendChild(G),F.appendChild(J),H.appendChild(F)}I.appendChild(H),j.appendChild(I)}t=D("div"),N=D("button"),$=D("button"),t.id="s-bns",N.id="s-sv-bn",$.id="s-all-bn",N.className="c-bn",$.className="c-bn",N.insertAdjacentHTML("beforeend",o.languages[y.current_lang].settings_modal.save_settings_btn),$.insertAdjacentHTML("beforeend",o.languages[y.current_lang].settings_modal.accept_all_btn),t.appendChild($),(o=o.languages[y.current_lang].settings_modal.reject_all_btn)&&((I=D("button")).id="s-rall-bn",I.className="c-bn",I.insertAdjacentHTML("beforeend",o),U(I,"click",(function(){f.hideSettings(),f.hide(),f.accept([])})),u.className="bns-t",t.appendChild(I)),t.appendChild(N),U(N,"click",(function(){f.hideSettings(),f.hide(),f.accept()})),U($,"click",(function(){f.hideSettings(),f.hide(),f.accept("all")})),z.appendChild(w),z.appendChild(x),u.appendChild(z),u.appendChild(j),u.appendChild(t),k.appendChild(u),_.appendChild(k),b.appendChild(_),d.appendChild(b),i.appendChild(d),i.appendChild(E),(e||document.body).appendChild(s)}(!(v=!b||!C),l),function(e,t){if("string"!=typeof e||""===e||document.getElementById("cc--style"))t();else{var n=D("style");n.id="cc--style";var a=new XMLHttpRequest;a.onreadystatechange=function(){4===this.readyState&&200===this.status&&(n.setAttribute("type","text/css"),n.styleSheet?n.styleSheet.cssText=this.responseText:n.appendChild(document.createTextNode(this.responseText)),document.getElementsByTagName("head")[0].appendChild(n),t())},a.open("GET",e),a.send()}}(l.theme_css,(function(){$(),I(l.gui_options),function(){for(var e=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),t=0;t<e.length;t++)e[t].setAttribute("aria-haspopup","dialog"),U(e[t],"click",(function(e){f.showSettings(0),e.preventDefault?e.preventDefault():e.returnValue=!1}))}(),y.autorun&&v&&f.show(l.delay||0),setTimeout((function(){K(s,"c--anim")}),30),setTimeout((function(){!function(){var e=!1,n=!1;U(document,"keydown",(function(a){"Tab"===(a=a||window.event).key&&(t&&(a.shiftKey?document.activeElement===t[0]&&(t[1].focus(),a.preventDefault()):document.activeElement===t[1]&&(t[0].focus(),a.preventDefault()),n||w||(n=!0,!e&&a.preventDefault(),a.shiftKey?t[3]?t[2]?t[2].focus():t[0].focus():t[1].focus():t[3]?t[3].focus():t[0].focus())),!n&&(e=!0))})),document.contains&&U(s,"click",(function(e){e=e||window.event,k?u.contains(e.target)?w=!0:(f.hideSettings(0),w=!1):_&&r.contains(e.target)&&(w=!0)}),!0)}()}),100)})),b&&C))){var c="boolean"==typeof h.rfc_cookie;(!c||c&&h.rfc_cookie!==y.use_rfc_cookie)&&(h.rfc_cookie=y.use_rfc_cookie,J(y.cookie_name,JSON.stringify(h))),H(),"function"==typeof l.onAccept&&l.onAccept(h)}},f.showSettings=function(e){setTimeout((function(){K(O,"show--settings"),d.setAttribute("aria-hidden","false"),k=!0,setTimeout((function(){_?c=document.activeElement:l=document.activeElement,0!==j.length&&(j[3]?j[3].focus():j[0].focus(),t=j)}),200)}),0<e?e:0)};var H=function(){if(y.page_scripts){var e=document.querySelectorAll("script["+y.script_selector+"]"),t=y.page_scripts_order,n=h.level||[],a=function(e,o){if(o<e.length){var i=e[o],l=i.getAttribute(y.script_selector);if(-1<M(n,l)){i.type="text/javascript",i.removeAttribute(y.script_selector),l=i.getAttribute("data-src");var c=D("script");if(c.textContent=i.innerHTML,function(e,t){for(var n=t.attributes,a=n.length,o=0;o<a;o++)t=n[o],e.setAttribute(t.nodeName,t.nodeValue)}(c,i),l?c.src=l:l=i.src,l&&(t?c.readyState?c.onreadystatechange=function(){"loaded"!==c.readyState&&"complete"!==c.readyState||(c.onreadystatechange=null,a(e,++o))}:c.onload=function(){c.onload=null,a(e,++o)}:l=!1),i.parentNode.replaceChild(c,i),l)return}a(e,++o)}};a(e,0)}};f.set=function(e,t){switch(e){case"data":e=t.value;var n=!1;if("update"===t.mode)if((t=typeof(z=f.get("data"))==typeof e)&&"object"==typeof z)for(var a in!z&&(z={}),e)z[a]!==e[a]&&(z[a]=e[a],n=!0);else!t&&z||z===e||(z=e,n=!0);else z=e,n=!0;return n&&(h.data=z,J(y.cookie_name,JSON.stringify(h))),n;case"revision":return a=t.value,e=t.prompt_consent,t=t.message,s&&"number"==typeof a&&h.revision!==a?(A=!0,P=t,C=!1,y.revision=a,!0===e?(g(p),I(p.gui_options,!0),$(),f.show()):f.accept(),t=!0):t=!1,t;default:return!1}},f.get=function(e,t){return JSON.parse(q(t||y.cookie_name,"one",!0)||"{}")[e]},f.getConfig=function(e){return y[e]},f.loadScript=function(e,t,n){var a="function"==typeof t;if(document.querySelector('script[src="'+e+'"]'))a&&t();else{var o=D("script");if(n&&0<n.length)for(var i=0;i<n.length;++i)n[i]&&o.setAttribute(n[i].name,n[i].value);a&&(o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,t())}:o.onload=t),o.src=e,(document.head?document.head:document.getElementsByTagName("head")[0]).appendChild(o)}},f.updateScripts=function(){H()},f.show=function(e){v&&setTimeout((function(){K(O,"show--consent"),r.setAttribute("aria-hidden","false"),_=!0,setTimeout((function(){l=document.activeElement,t=x}),200)}),0<e?e:0)},f.hide=function(){v&&(B(O,"show--consent"),r.setAttribute("aria-hidden","true"),_=!1,setTimeout((function(){l.focus(),t=null}),200))},f.hideSettings=function(){B(O,"show--settings"),k=!1,d.setAttribute("aria-hidden","true"),setTimeout((function(){_?(c&&c.focus(),t=x):(l.focus(),t=null),w=!1}),200)},f.accept=function(e,t){var l=t||[];if(t=[],e=e||void 0)if("object"==typeof e&&"number"==typeof e.length)for(var c=0;c<e.length;c++)-1!==M(T,e[c])&&t.push(e[c]);else"string"==typeof e&&("all"===e?t=T.slice():-1!==M(T,e)&&t.push(e));else t=function(){for(var e=document.querySelectorAll(".c-tgl")||[],t=[],n=0;n<e.length;n++)e[n].checked&&t.push(e[n].value);return t}();if(1<=l.length)for(c=0;c<l.length;c++)t=t.filter((function(e){return e!==l[c]}));for(c=0;c<T.length;c++)!0===L[c]&&-1===M(t,T[c])&&t.push(T[c]);!function(e){var t=document.querySelectorAll(".c-tgl")||[],l=[],c=!1;if(0<t.length){for(var s=0;s<t.length;s++)-1!==M(e,T[s])?(t[s].checked=!0,S[s]||(l.push(T[s]),S[s]=!0)):(t[s].checked=!1,S[s]&&(l.push(T[s]),S[s]=!1));if(y.autoclear_cookies&&b&&0<l.length){t=a.length,s=-1;var r=q("","all"),d=[y.cookie_domain,"."+y.cookie_domain];if("www."===y.cookie_domain.slice(0,4)){var u=y.cookie_domain.substr(4);d.push(u),d.push("."+u)}for(u=0;u<t;u++){var p=a[u];if(Object.prototype.hasOwnProperty.call(p,"toggle")&&!S[++s]&&Object.prototype.hasOwnProperty.call(p,"cookie_table")&&-1<M(l,p.toggle.value)){var g=p.cookie_table,m=V(n[0])[0],f=g.length;"on_disable"===p.toggle.reload&&(c=!0);for(var v=0;v<f;v++){var _=g[v],k=[],w=_[m],A=_.is_regex||!1,N=_.domain||null;if(_=_.path||!1,N&&(d=[N,"."+N]),A)for(A=0;A<r.length;A++)r[A].match(w)&&k.push(r[A]);else-1<(w=M(r,w))&&k.push(r[w]);0<k.length&&(F(k,_,d),"on_clear"===p.toggle.reload&&(c=!0))}}}}}if(h={level:e,revision:y.revision,data:z,rfc_cookie:y.use_rfc_cookie},(!b||0<l.length||!C)&&(C=!0,J(y.cookie_name,JSON.stringify(h)),H()),"function"==typeof o&&!b)return b=!0,o(h);"function"==typeof i&&0<l.length&&i(h,l),c&&window.location.reload()}(t)},f.eraseCookies=function(e,t,n){var a=[];if(n=n?[n,"."+n]:[y.cookie_domain,"."+y.cookie_domain],"object"==typeof e&&0<e.length)for(var o=0;o<e.length;o++)this.validCookie(e[o])&&a.push(e[o]);else this.validCookie(e)&&a.push(e);F(a,t,n)};var J=function(e,t){t=y.use_rfc_cookie?encodeURIComponent(t):t;var n=new Date;n.setTime(n.getTime()+864e5*y.cookie_expiration),e=e+"="+(t||"")+(n="; expires="+n.toUTCString())+"; Path="+y.cookie_path+";",e+=" SameSite="+y.cookie_same_site+";",-1<window.location.hostname.indexOf(".")&&(e+=" Domain="+y.cookie_domain+";"),"https:"===window.location.protocol&&(e+=" Secure;"),document.cookie=e},q=function(e,t,n){var a;if("one"===t){if((a=(a=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?n?a.pop():e:"")&&e===y.cookie_name){try{a=JSON.parse(a)}catch(e){try{a=JSON.parse(decodeURIComponent(a))}catch(e){a={}}}a=JSON.stringify(a)}}else if("all"===t)for(e=document.cookie.split(/;\s*/),a=[],t=0;t<e.length;t++)a.push(e[t].split("=")[0]);return a},F=function(e,t,n){t=t||"/";for(var a=0;a<e.length;a++)for(var o=0;o<n.length;o++)document.cookie=e[a]+"=; path="+t+(-1<n[o].indexOf(".")?"; domain="+n[o]:"")+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"};f.validCookie=function(e){return""!==q(e,"one",!0)};var U=function(e,t,n,a){e.addEventListener?!0===a?e.addEventListener(t,n,{passive:!0}):e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},V=function(e){if("object"==typeof e){var t=[],n=0;for(t[n++]in e);return t}},K=function(e,t){e.classList?e.classList.add(t):R(e,t)||(e.className+=" "+t)},B=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," ")},R=function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))};return f});var l=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},c=(e,t)=>e.reduce(((n,a,o)=>0===o?`${n}${a}`:o===e.length-1?`${n} ${t} ${a}`:`${n}, ${a}`)),s=(e,t,n)=>1===e?t:n,r={and:"a",company:"společnosti",companies:"společnostem"},d=e=>{const t=i(i({},r),e);return{consent_modal:{title:"Tyto stránky využívají cookies",description:`Kliknutím na „Přijmout vše“ dáváte souhlas ${s(t.companyNames.length,t.company,t.companies)} ${c(t.companyNames,t.and)} k využívání souborů Cookies a dalších identifikátorů ve vašem zařízení. Použití těchto Cookies a dalších identifikátorů usnadní navigaci na stránkách, zobrazení personalizovaného obsahu, cílený marketing, analýzu využívání našich produktů a služeb.\n      Více informací naleznete na stránce <a href="https://www.lmc.eu/cs/cookies" target="_blank">Používání cookies</a>.`,primary_btn:{text:"Přijmout vše",role:"accept_all"},secondary_btn:{text:"Přijmout nezbytné",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},u={and:"und"},p=e=>{const t=i(i({},u),e);return{consent_modal:{title:"Diese Website verwendet Cookies",description:`Indem Sie auf „Alles akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Gerät durch ${c(t.companyNames,u.and)} zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.\n      Weitere Informationen finden Sie unter <a href="https://www.lmc.eu/en/cookies/" target="_blank">Verwendung von Cookies</a>.`,primary_btn:{text:"Alles akzeptieren",role:"accept_all"},secondary_btn:{text:"Das Notwendigste akzeptieren",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},g={and:"and"},m=e=>{const t=i(i({},g),e);return{consent_modal:{title:"This website uses cookies",description:`By clicking on "Accept all", you give your consent to ${c(t.companyNames,g.and)} to use cookies and other identifiers on your device. The use of these cookies and other identifiers will simplify navigation on the site, enable personalized content, targeted marketing, analysis of the usage of our products and services.\n      For more information read page <a href="https://www.lmc.eu/en/cookies/" target="_blank">Use of cookies</a>.`,primary_btn:{text:"Accept all",role:"accept_all"},secondary_btn:{text:"Accept necessary",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},y={and:"és"},f=e=>{const t=i(i({},y),e);return{consent_modal:{title:"Az oldalak süti fájlokat használnak",description:`A „Mindent elfogadok” gombra kattintva a hozzájárulását adja ahhoz, hogy az ${c(t.companyNames,y.and)} süti fájlokat és egyéb azonosítókat használjon az Ön eszközén. E süti fájlok és egyéb azonosítók használata megkönnyíti a weboldalon belüli navigációt, a személyre szabott tartalom megjelenítését, a célzott marketinget, valamint termékeink és szolgáltatásaink használatának elemzését.\n      Bővebb információkat a <a href="https://www.lmc.eu/en/cookies/" target="_blank">Sütihasználat</a> oldalon talál.`,primary_btn:{text:"Minden elfogadása",role:"accept_all"},secondary_btn:{text:"A legszükségesebbek elfogadása",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},h={and:"i"},v=e=>{const t=i(i({},h),e);return{consent_modal:{title:"Ta strona używa cookies",description:`Klikając „Akceptuję wszystkie”, wyrażasz zgodę dla ${c(t.companyNames,h.and)} do wykorzystywania plików i innych identyfikatorów na Twoim urządzeniu. Korzystanie z tych plików cookie i innych identyfikatorów ułatwi nawigację w serwisie, wyświetlanie spersonalizowanych treści, marketing ukierunkowany, analizę korzystania z naszych produktów i usług.\n      Więcej informacji znajdziesz na stronie <a href="https://www.lmc.eu/pl/cookies" target="_blank">Korzystanie z plików Cookies</a>.`,primary_btn:{text:"Akceptuj wszystkie",role:"accept_all"},secondary_btn:{text:"Akceptuj niezbędne",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},b={and:"и",company:"компаниям",companies:"компаниям"},_=e=>{const t=i(i({},b),e);return{consent_modal:{title:"Этот сайт использует файлы cookie",description:`Нажав «Принять все», Вы даете свое согласие ${s(t.companyNames.length,t.company,t.companies)} ${c(t.companyNames,t.and)} на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.\n      Для получения дополнительной информации см. раздел <a href="https://www.lmc.eu/en/cookies/" target="_blank">использование файлов cookie</a>.`,primary_btn:{text:"Принять все",role:"accept_all"},secondary_btn:{text:"Принятие необходимо",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},k={and:"a",company:"spoločnosti",companies:"spoločnostiam"},w=e=>{const t=i(i({},k),e);return{consent_modal:{title:"Tieto stránky používajú cookies",description:`Kliknutím na „Prijať všetky“ dávate súhlas ${s(t.companyNames.length,t.company,t.companies)} ${c(t.companyNames,t.and)} k využívaniu súborov Cookies a ďalších identifikátorov vo vašom zariadení. Použitie týchto cookies a ďalších identifikátorov uľahčí navigáciu na stránkach, zobrazenie personalizovaného obsahu, cielený marketing, analýzu využívania našich produktov a služieb.\n      Viac informácií nájdete na stránke <a href="https://www.lmc.eu/sk/cookies" target="_blank">Používanie cookies</a>.`,primary_btn:{text:"Prijať všetky",role:"accept_all"},secondary_btn:{text:"Prijať nevyhnutné",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},C={and:"i",company:"компаніям",companies:"компаніям"},A=e=>{const t=i(i({},C),e);return{consent_modal:{title:"Цей сайт використовує файли cookie",description:`Натиснувши «Прийняти все», Ви даєте свою згоду ${s(t.companyNames.length,t.company,t.companies)} ${c(t.companyNames,t.and)} на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.\n      Для отримання додаткової інформації див. розділ <a href="https://www.lmc.eu/en/cookies/" target="_blank">Використання файлів cookie</a>.`,primary_btn:{text:"Прийняти все",role:"accept_all"},secondary_btn:{text:"Прийняття необхідно",role:"accept_necessary"}},settings_modal:{blocks:[{toggle:{value:"necessary",enabled:!0,readonly:!0}},{toggle:{value:"ad",enabled:!1,readonly:!1}},{toggle:{value:"analytics",enabled:!1,readonly:!1}},{toggle:{value:"functionality",enabled:!1,readonly:!1}},{toggle:{value:"personalization",enabled:!1,readonly:!1}}]}}},z={defaultLang:"cs",autodetectLang:!0,consentCollectorApiUrl:"https://ccm.lmc.cz/local-data-acceptation-data-entries",onFirstAccept:(e,t)=>{},onFirstAcceptOnlyNecessary:(e,t)=>{},onFirstAcceptAll:(e,t)=>{},onAccept:(e,t)=>{},onAcceptOnlyNecessary:(e,t)=>{},onAcceptAll:(e,t)=>{},companyNames:["LMC"],config:{}},N=(e,t)=>{if(!e||""===e||"string"!=typeof e)throw new Error("serviceName is a required parameter and must be a string");const n=i(i({},z),t),{defaultLang:a,autodetectLang:o,consentCollectorApiUrl:c,onFirstAccept:s,onFirstAcceptOnlyNecessary:r,onFirstAcceptAll:u,onAccept:g,onAcceptOnlyNecessary:y,onAcceptAll:h,companyNames:b,config:k}=n,C="lmc_ccm",N=window.initCookieConsent(),x=!N.validCookie(C),j={cs:d({companyNames:b}),de:p({companyNames:b}),en:m({companyNames:b}),hu:f({companyNames:b}),pl:v({companyNames:b}),ru:_({companyNames:b}),sk:w({companyNames:b}),uk:A({companyNames:b})},S=i({auto_language:o?"document":null,autorun:!0,cookie_expiration:365,cookie_name:C,current_lang:a,delay:0,force_consent:!1,hide_from_bots:!0,page_scripts:!0,use_rfc_cookie:!0,gui_options:{consent_modal:{layout:"bar",position:"bottom center",transition:"slide"}},onAccept:t=>{const n=N.get("level"),a=1===n.length&&"necessary"===n[0];if(g(t,N),x){const n=N.get("data");null!==n&&"uid"in n||N.set("data",{value:{serviceName:e,uid:l()},mode:"update"}),function(e){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"CookieConsent-update","CookieConsent.necessary":e.level.includes("necessary"),"CookieConsent.analytics":e.level.includes("analytics"),"CookieConsent.ad":e.level.includes("ad"),"CookieConsent.functionality":e.level.includes("functionality"),"CookieConsent.personalization":e.level.includes("personalization"),"CookieConsent.revision":e.revision})}(t),null!==c&&function(e,t,n){const a=function(e,t){const n=e.get("data"),a=e.get("level"),o=t?["ad","analytics","functionality","personalization"]:[];return{data:{type:"localDataAcceptationDataEntries",attributes:{acceptation_id:n.uid,accept_type:t?"accept_necessary":"accept_all",accepted_categories:a,rejected_categories:o,revision:e.get("revision"),source:n.serviceName,language:e.getConfig("current_lang"),days_of_acceptation:e.getConfig("cookie_expiration")}}}}(t,n);!async function(e,t){(await fetch(e,{method:"POST",headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"},body:JSON.stringify(t)})).json()}(e,a)}(c,N,a),s(t,N),a?r(t,N):u(t,N)}a?y(t,N):h(t,N)},languages:j},k);return N.run(S),N};window.addEventListener("load",(()=>{N("example")}))})();