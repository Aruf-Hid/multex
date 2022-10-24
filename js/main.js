/*<![CDATA[*/
const adBLockD=()=>{fixedNotif('<div class="dtAdB">'+ARtb.antiAdBlock.icon+"<h5>"+ARtb.antiAdBlock.title+"</h5>"+ARtb.antiAdBlock.text+"</div>"),ARtb.antiAdBlock.close&&(qSel(".dtAdB").insertAdjacentHTML("afterend",'<span class="cls"></span>'),qSel("#fNtf .cls").addEventListener("click",(()=>{addCt(geId("fNtf"),"hidden")})))},
ld_Adsense=()=>{let e=document.createElement("script");e.setAttribute("crossorigin","anonymous"),e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+ARtb.adSense.publisherId;let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),e.onerror=()=>ARtb.antiAdBlock.enable&&adBLockD()},
/**/ld_Analytics=()=>{ldJs("https://www.googletagmanager.com/gtag/js?id="+ARtb.analytics.propertyID,"analytics-js",!0)},
ld_Abc=()=>{ldJs(bsGtb+"js/abc.js","abc-js",!0)},
ld_Fbd=()=>{ldJs(bsGtb+"js/fbd.js","fbd-js",!0)},
ld_Gts=()=>{ldCss(bsGtb+"css/gts.css","gts-css",(()=>{qSel("#header-icon .headIc").insertAdjacentHTML("afterbegin",'<li id="google_translate_element"/>'),ldJs(bsGtb+"lib/gts.js","gts-js",!0,(()=>{setTimeout((()=>{null!=gCls("goog-te-gadget-simple")[0]&&addCt(gCls("goog-te-gadget-simple")[0],"tIc")}),2e3)}))}))},
ld_Abp=()=>{ldCss(bsGtb+"css/abp.css","abp-css",(()=>ldJs(bsGtb+"js/abp.js","abp-js",!0)))},
set_hljs=()=>{qSell("pre.hljs").forEach((t=>{hljs.highlightElement(t),null==t.parentElement.getAttribute("data-text")&&t.parentElement.classList.contains("pre")&&t.parentElement.setAttribute("data-text",t.getAttribute("class").replace(/hljs|language-| /gi,""))}))};

/*addt*/ldCss(bsGtb+"css/addt.css","addt-css",(()=>ldJs(bsGtb+"js/addt.js","addt-js",!0)));
/*bkm*/ARtb.bookmark.enable&&ldCss(bsGtb+"css/bkm.css","bkm-css",(()=>ldJs(bsGtb+"js/bkm.js","bkm-js",!0)));
/*rpst*/isPs&&!isPvb&&(null!=geId("aRel")&&ldJs(bsGtb+"js/aRel.js","aRel-js",!0),null!=geId("pPvNx")&&ldJs(bsGtb+"js/pPvNx.js","pPvNx-js",!0));
/*adSense*/ARtb.adSense.enable&&("lazy"==ARtb.adSense.loadType?ld_Adsense():"defer"==ARtb.adSense.loadType&&Defer((()=>ld_Adsense())));
/*analytics*/ARtb.analytics.enable&&("lazy"==ARtb.analytics.loadType?ld_Analytics():"defer"==ARtb.analytics.loadType&&Defer((()=>ld_Analytics())));
/*abc*/ARtb.antiBoomClick.enable&&("lazy"==ARtb.antiBoomClick.loadType?ld_Abc():"defer"==ARtb.antiBoomClick.loadType&&Defer((()=>ld_Abc())));
/*fbd*/ARtb.firebase.enable&&("lazy"==ARtb.firebase.loadType?ld_Fbd():"defer"==ARtb.firebase.loadType&&Defer((()=>ld_Fbd())));
/*gts*/ARtb.gTranslate.enable&&("lazy"==ARtb.gTranslate.loadType?ld_Gts():"defer"==ARtb.gTranslate.loadType&&Defer((()=>ld_Gts())));

Defer(()=>{
/**hljs**/0<qSell("pre.hljs").length&&null==geId("hl-js")?ldJs(bsGtb+"lib/hl-11.5.1.js","hl-js",!0,(()=>set_hljs())):0<qSell("pre.hljs").length&&null!=geId("hl-js")&&set_hljs();
/**abp**/null!=geId("AudioBookPlayer")&&null==geId("vue-js")?ldJs(bsGtb+"lib/vue-2.6.11.js","vue-js",!0,(()=>{ld_Abp()})):null!=geId("AudioBookPlayer")&&null!=geId("vue-js")&&ld_Abp();
});

/*scroll*/
let lazyJsc=!1;window.addEventListener('scroll',()=>{(0!=document.documentElement.scrollTop&&!1===lazyJsc||0!=document.body.scrollTop&&!1===lazyJsc)&&(!function(){
/*adSense*/ARtb.adSense.enable&&"scroll"==ARtb.adSense.loadType&&ld_Adsense();
/*analytics*/ARtb.analytics.enable&&"scroll"==ARtb.analytics.loadType&&ld_Analytics();
/*abc*/ARtb.antiBoomClick.enable&&"scroll"==ARtb.antiBoomClick.loadType&&ld_Abc();
/*fbd*/ARtb.firebase.enable&&"scroll"==ARtb.firebase.loadType&&ld_Fbd();
/*gts*/ARtb.gTranslate.enable&&"scroll"==ARtb.gTranslate.loadType&&ld_Gts();
}(),lazyJsc=!0)},!0);
/*]]>*/
