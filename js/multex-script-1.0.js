/*<![CDATA[*/console.log('test script...');
/*!@shinsenter/defer.js@3.4.0*/
!function(e){function n(n){e.addEventListener(n,B)}function t(n){e.removeEventListener(n,B)}function o(e,n,t){C?z(e,n):(t||o.lazy&&void 0===t?S:L).push(e,n)}function i(e){k.head.appendChild(e)}function c(e,n){q.call(e.attributes)[y](n)}function r(e,n,t,o){return o=(n?k.getElementById(n):o)||k.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function u(e,n,t){(t=e.src)&&((n=r(m)).rel="preload",n.as=h,n.href=t,(t=e[g](w))&&n[b](w,t),(t=e[g](x))&&n[b](x,t),i(n))}function a(e,n){return q.call((n||k).querySelectorAll(e))}function s(e,n){e.parentNode.replaceChild(n,e)}function f(e,n){a("source,img",e)[y](f),c(e,(function(n,t){(t=/^data-(.+)/.exec(n.name))&&e[b](t[1],n.value)})),"string"==typeof n&&n&&(e.className+=" "+n),p in e&&e[p]()}function l(e,n,t){o((function(n){(n=a(e||N))[y](u),function e(t,o){(t=n[E]())&&((o=r(t.nodeName)).text=t.text,c(t,(function(e){"type"!=e.name&&o[b](e.name,e.value)})),o.src&&!o[g]("async")?(o.onload=o.onerror=e,s(t,o)):(s(t,o),e()))}()}),n,t)}var d="Defer",m="link",h="script",p="load",v="pageshow",y="forEach",g="getAttribute",b="setAttribute",E="shift",w="crossorigin",x="integrity",A=["mousemove","keydown","touchstart","wheel"],I="on"+v in e?v:p,N=h+"[type=deferjs]",j=e.IntersectionObserver,k=e.document||e,z=e.setTimeout,C=/p/.test(k.readyState),L=[],S=[],q=L.slice,B=function(e,i){for(i=I==e.type?(t(I),C=o,A[y](n),L):(A[y](t),S);i[0];)z(i[E](),i[E]())};l(),o.all=l,o.dom=function(e,n,t,i,c){o((function(n){function r(e){i&&!1===i(e)||f(e,t)}n=!!j&&new j((function(e){e[y]((function(e,t){e.isIntersecting&&(n.unobserve(t=e.target),r(t))}))}),c),a(e||"[data-src]")[y]((function(e){e[d]!=o&&(e[d]=o,e[b]("lazied",""),n?n.observe(e):r(e))}))}),n,!1)},o.css=function(e,n,t,c,u){o((function(t){(t=r(m,n,c)).rel="stylesheet",t.href=e,i(t)}),t,u)},o.js=function(e,n,t,c,u){o((function(t){(t=r(h,n,c)).src=e,i(t)}),t,u)},o.reveal=f,e[d]=o,C||n(I)}(this);


Defer.dom(".lazy", 100, "loaded", null, {rootMargin: "1px"});

"undefined" != typeof infinite_scroll && infinite_scroll.on("load", (function() {
  Defer.dom(".lazy", 100, "loaded", null, {rootMargin: "1px"})
}));
/*]]>*/
