/*<![CDATA[*/
xAR.sLS("xAR_script", (new Date).getTime() + 864e5);
console.log('script loaded...');
/*!@shinsenter/defer.js@3.4.0*/
!function(e){function n(n){e.addEventListener(n,B)}function t(n){e.removeEventListener(n,B)}function o(e,n,t){C?z(e,n):(t||o.lazy&&void 0===t?S:L).push(e,n)}function i(e){k.head.appendChild(e)}function c(e,n){q.call(e.attributes)[y](n)}function r(e,n,t,o){return o=(n?k.getElementById(n):o)||k.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function u(e,n,t){(t=e.src)&&((n=r(m)).rel="preload",n.as=h,n.href=t,(t=e[g](w))&&n[b](w,t),(t=e[g](x))&&n[b](x,t),i(n))}function a(e,n){return q.call((n||k).querySelectorAll(e))}function s(e,n){e.parentNode.replaceChild(n,e)}function f(e,n){a("source,img",e)[y](f),c(e,(function(n,t){(t=/^data-(.+)/.exec(n.name))&&e[b](t[1],n.value)})),"string"==typeof n&&n&&(e.className+=" "+n),p in e&&e[p]()}function l(e,n,t){o((function(n){(n=a(e||N))[y](u),function e(t,o){(t=n[E]())&&((o=r(t.nodeName)).text=t.text,c(t,(function(e){"type"!=e.name&&o[b](e.name,e.value)})),o.src&&!o[g]("async")?(o.onload=o.onerror=e,s(t,o)):(s(t,o),e()))}()}),n,t)}var d="Defer",m="link",h="script",p="load",v="pageshow",y="forEach",g="getAttribute",b="setAttribute",E="shift",w="crossorigin",x="integrity",A=["mousemove","keydown","touchstart","wheel"],I="on"+v in e?v:p,N=h+"[type=deferjs]",j=e.IntersectionObserver,k=e.document||e,z=e.setTimeout,C=/p/.test(k.readyState),L=[],S=[],q=L.slice,B=function(e,i){for(i=I==e.type?(t(I),C=o,A[y](n),L):(A[y](t),S);i[0];)z(i[E](),i[E]())};l(),o.all=l,o.dom=function(e,n,t,i,c){o((function(n){function r(e){i&&!1===i(e)||f(e,t)}n=!!j&&new j((function(e){e[y]((function(e,t){e.isIntersecting&&(n.unobserve(t=e.target),r(t))}))}),c),a(e||"[data-src]")[y]((function(e){e[d]!=o&&(e[d]=o,e[b]("lazied",""),n?n.observe(e):r(e))}))}),n,!1)},o.css=function(e,n,t,c,u){o((function(t){(t=r(m,n,c)).rel="stylesheet",t.href=e,i(t)}),t,u)},o.js=function(e,n,t,c,u){o((function(t){(t=r(h,n,c)).src=e,i(t)}),t,u)},o.reveal=f,e[d]=o,C||n(I)}(this);

Defer.dom(".lazy", 100, "loaded", null, {rootMargin: "1px"});

const xIdb=t=>blogId==t&&document.getElementById("admCk").getAttribute("data-id")==t,
c_blgId=d=>{let e=xAR.en(d.feed.id.$t.split("-")[1]);xAR.sLS("_AR_blgId",e)},
c_aBlog=e=>{let s=xAR.en(e.entry.content.$t);xAR.sLS("_AR_aBlog",s);let t=e.entry.link.filter((e=>"enclosure"==e.rel)),r={};t.forEach((e=>{let s=e.href.replace("http://","").replace(".us",""),t=e.type;r[s]=t})),xAR.sLS("_AR_Usr",xAR.en(JSON.stringify(r))),xAR.sC("_AR_sess",1,{"max-age":parseInt(r.session)})},
_aBlog = l => {
	let a = JSON.parse(xAR.de(xAR.gLS("_AR_aBlog"))).blog,
		e = iVa(a, "id", xAR.de(l));
	if (e >= 0) {
		let l = a[e];
		p_aBlg(l.url, null != l.auth ? l.auth : l.code); 
		/*mainJs*/ /*xAo && ldJs(bsGtb + "js/main.js", "main-js", !0)*/
	} else P_aBlg(0, 1)
},
p_aBlg=(o,e)=>{console.group("%cValid License","color:#57956A;font-size:12px"),console.log("License for : "+o+" | "+e),console.log("MULTEX - Blogger templates"),console.log("Demo : https://multex.aruef.com/"),console.groupEnd()},
P_aBlg=(t,i)=>{alert("invalid license"),window[txO1][txO2]=txO3+window[txO1][txO2]},
cxLss=s=>{if(geId("admCk").setAttribute("xid",s),xIdb(xAR.de(s))||P_aBlg(0,1),null!=xAR.gLS("_AR_aBlog"))_aBlog(s);else{let t=""!=xAR.xd(xAR.d(dLss).substring(1))?xAR.xd(xAR.d(dLss).substring(1)):xAR.xd(dLss.substring(1)),d=(t.split("-")[0],t.split("-")[1]),l=t.split("-")[2];ldJsx({src:"https://www.blogger.com/feeds/"+d+"/posts/default/"+l+"?alt=json-in-script&callback=c_aBlog",rem:!0,load:()=>{_aBlog(s)},err:()=>window[txO1][txO2]=txO3+window[txO1][txO2]})}};

/*check id blog*/
null==xAR.gC("_AR_sess")&&(xAR.rLS("_AR_blgId"),xAR.rLS("_AR_aBlog"),xAR.rLS("_AR_Usr"));
if(null!=xAR.gLS("_AR_blgId")){let s=xAR.gLS("_AR_blgId");cxLss(s)}else setTimeout((()=>{ldJsx({src:"/feeds/posts/summary/?alt=json-in-script&max-results=0&callback=c_blgId",rem:!0,load:()=>{let s=xAR.gLS("_AR_blgId");cxLss(s)},err:()=>{let s=xAR.en(blogId);xAR.sLS("_AR_blgId",s),cxLss(s)}})}),0);

/*LzJs*/ 
null==xAR.gLS("Lz_Js")&&xAR.sLS("Lz_Js",(new Date).getTime()),loadLzJs();

/*font on Mobile*/
if(isMob){
  var loadLzJsM=()=>{let e=document.createElement("style");e.id="mobileFonts",e.textContent=ARtb.mobileFonts,document.head.appendChild(e)};
  loadLzJsM();
}


/*additional*/
null!=xAR.gLS("mode")&&("darkmode"==xAR.gLS("mode")?(thmC=themeCdrk,qSel("body").classList.add("drK")):thmC=themeC,thmC1.content=thmC,thmC2.content=thmC,thmC3.content=thmC);
isId&&("listmode"===xAR.gLS("list")?qSel("#mainCont").classList.add("grD"):qSel("#mainCont").classList.remove("grD"));

function darkMode(){let e;qSel("body").classList.contains("drK")?(qSel("body").classList.remove("drK"),xAR.rLS("mode"),e=themeC):(qSel("body").classList.add("drK"),xAR.sLS("mode","darkmode"),e=themeCdrk),thmC1.content=e,thmC2.content=e,thmC3.content=e}
function cImgpAG(){for(let l=qSell(".ntry.pApGm .imgThm, .ntry.pJob .imgThm"),m=0;m<l.length;m++){var t=l[m].getAttribute("alt-img"),i=l[m].getAttribute("s1x1-img"),e="";null!=t&&null!==i&&(e="listmode"!=xAR.gLS("list")?i:t,isHm&&!isMob&&(e=t),""!=e&&(l[m].setAttribute("src",e),l[m].setAttribute("data-src",e)))}}
function gridMode(){xAR.sLS("list","listmode"===xAR.gLS("list")?"grid":"listmode"),"listmode"===xAR.gLS("list")?qSel("#mainCont").classList.add("grD"):qSel("#mainCont").classList.remove("grD"),cImgpAG()}
("listmode"==xAR.gLS("list")&&isMl||"listmode"==xAR.gLS("list")&&isId&&!isMl&&isMob)&&cImgpAG();
let dF=new Date(),nF=dF.getFullYear();geId("getYear").innerHTML=nF;
/*Private Blog Notif*/1==isPvb&&toastNotif(blogTtl+" Blog is Private.");


/*change img url*/
const sRwImg=(e,n)=>{let u=e.getAttribute(n),t=u.substr(u.length-20);(t.includes("-p-k-no-nu")||u.includes("-p-k-no-nu/")||t.includes("=w600-h337-pd"))&&!u.includes("-e30-rw")&&(u=t.includes("=w600-h337-pd")?u.replace("=w600-h337-pd","=w600-h337-pd-e30-rw"):u.replace("-p-k-no-nu","-p-k-no-nu-e30-rw"),e.setAttribute(n,u))},
imgPsRw=()=>{let t=qSell("img.lazy[data-src]:not([lazied]), div.lazy[data-style]:not([lazied]), .bmPs[bm-img]");for(let l=0;l<t.length;l++){let a=t[l],e=a.getAttribute("data-src"),g=a.getAttribute("data-style");xC=a.getAttribute("bm-img"),null!=e?sRwImg(a,"data-src"):null!=g?sRwImg(a,"data-style"):null!=xC&&sRwImg(a,"bm-img")}},
dtNumb=()=>{let t=qSell("span[drt-count], span[dt-sold], .cmnt[data-text]");if(t.length>0)for(let e=0;e<t.length;e++){let l=t[e],n=l.innerText,r=getAttr(l,"drt-count"),a=getAttr(l,"dt-val"),d=getAttr(l,"dt-sold"),A=getAttr(l,"data-text");""==r?(setAttr(l,"drt-count",n),l.innerText=xAR.abv(n)):null!=d&&null==a?(setAttr(l,"dt-val",n),l.innerText=xAR.abv(n,1)):null!=A&&null==a&&(setAttr(l,"dt-val",A),setAttr(l,"data-text",xAR.abv(A,1)))}};

imgPsRw();dtNumb();


/*check admin blog*/
const _admBlg=()=>{
  ldCss("https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + blogId, "auth-css", ()=> {
    let e=geId("admCk");
    if(null != e && "block" == window.getComputedStyle(e)["display"]){
      addCt(qSel("body"),"onAdm");
      null!=qSel(".mMT")&&addCt(qSel(".mMT"),"h");
      admBlg();
      // ldJs(bsGtb+"js/qedt.js","qedt-js",!0,(()=>qEdit()));
    }else{
      /*allRC*/
      //if(xAR.pU("aruf")!="edit"){
        qSel("body")["setAttribute"]("oncontextmenu","return false");
        function allRC(){qSel("body")["removeAttribute"]("oncontextmenu");setTimeout(function(){qSel("body")["setAttribute"]("oncontextmenu","return false")},100)}
        qSell(".postBody p,.postBody span").forEach(elA=>{elA["addEventListener"]("contextmenu",el=>{allRC()})});
        document["onkeydown"]=function(e){if(e["ctrlKey"]&&e["shiftKey"]&&e["keyCode"]=='I'["charCodeAt"](0)){return false}if(e["ctrlKey"]&&e["keyCode"]=='U'["charCodeAt"](0)){return false}if(e["ctrlKey"]&&e["keyCode"]=='S'["charCodeAt"](0)){return false}}
        qSel(".mainIn").remove();return false;
      //}
    }
  });
};
_admBlg();


/* infinite scroll*/

"undefined" != typeof infinite_scroll && infinite_scroll.on("load", (function() {
  Defer.dom(".lazy", 100, "loaded", null, {rootMargin: "1px"});
  "function"==typeof cImgpAG&&cImgpAG();
  "function"==typeof imgPsRw&&imgPsRw();
  "function"==typeof dtNumb&&dtNumb();
}));

/*]]>*/
