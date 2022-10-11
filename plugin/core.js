if(geId("AR_Shortlink")!=null||geId("AR_Safelink")!=null){
  ldCss(bsGtb+"plugin/css/form.css","plugin-form-css",(function(){
    /* shortlink html */
    null!=geId("AR_Shortlink")&&"undefined"!=typeof oShortlink&&(geId("AR_Shortlink").innerHTML='<div class="inp"><input type="text" class="i_lnk" placeholder="'+oShortlink.txInp+'"/><button class="button gen">'+oShortlink.tbGen+'</button></div><div class="rst h"><input type="text" class="r_lnk"/><button class="button cpy">'+oShortlink.tbCpy+"</button></div>");
    /* end shortlink html */

    /* safelink html */
    null!=geId("AR_Safelink")&&"undefined"!=typeof oSafelink&&(geId("AR_Safelink").innerHTML='<div class="inp"><input type="text" class="i_lnk" placeholder="'+oSafelink.txInp+'"/><button class="button gen">'+oSafelink.tbGen+'</button></div><div class="rst h"><input type="text" class="r_lnk"/><button class="button cpy">'+oSafelink.tbCpy+"</button></div>");
    /* end safelink html */
  }));
}


/*set safelink*/
if("undefined"!=typeof oSafelink)for(var l_arSL=qSell(oSafelink.class),i=0;i<l_arSL.length;i++)l_arSL[i].setAttribute("href",blogUrl+"?"+oSafelink.param+"="+xAR.e(l_arSL[i].getAttribute("href")));
/*end set safelink*/


/*set cookies SL*/
if(isHm&&"undefined"!=typeof oSafelink)if(xAR.pU(oSafelink.param)&&xAR.pU("xsl")){xAR.sC("AR_SL",xAR.pU(oSafelink.param),{secure:!0,"max-age":3600});var grPgSL=xAR.rdm(oSafelink.PageSL),idPageSL=grPgSL.split("#")[1],gPageSL=grPgSL.replace("#"+idPageSL,"");xAR.sC("AR_SL_Page",idPageSL,{secure:!0,"max-age":3600}),window.location.href=gPageSL}else xAR.pU(oSafelink.param)&&fdyLnk(window.location+"&xsl=1",oSafelink.domain,oSafelink.apiKey,(function(a){window.location.href=a}));
/*end set cookies SL*/


/*dec cookies SL*/
if(isIt&&null!=xAR.gC("AR_SL")&&xAR.gC("AR_SL_Page")==postId&&"undefined"!=typeof oSafelink){function gHs(e){if(e.indexOf("https")>=0)var t=e.match(/^https:\/\/[^/]+/);else if(e.indexOf("http")>=0)t=e.match(/^http:\/\/[^/]+/);else t=e.match(/^\/\/[^/]+/);return t?t[0]:null}var adTop=geId("adTop"),adBot=geId("adBot"),pgfB=qSell(".postBody p"),pBdf=pgfB[0],pBdl=pgfB[pgfB.length-1];pBdf.insertAdjacentHTML("beforebegin",'<p class="note" id="pWait1">'+oSafelink.dec.txWait+"</p>"),pBdf.insertAdjacentHTML("afterend",'<div id="SL_s1" style="display:block;text-align:center"><span style="pointer-events:none;opacity:0.4;" onclick="stC(\'pWait2\');">'+oSafelink.dec.txSpan1+"</span></div>"),pBdf.insertAdjacentElement("afterend",adTop),geId("SL_s1").insertAdjacentElement("afterend",adBot),pBdl.insertAdjacentHTML("beforebegin",'<p class="note hidden" id="pWait2">'+oSafelink.dec.txWait+"</p>"),pBdl.insertAdjacentHTML("afterend",'<div id="SL_s2" style="display:none;text-align:center"><span style="pointer-events:none;opacity:0.4;" onclick="stC(\'pWait1\');">'+oSafelink.dec.txWait+"</span></div>");var tmLf1=oSafelink.dec.tmLf1,dTmr1=setInterval((function(){tmLf1<=0?(clearInterval(dTmr1),geId("pWait1").innerHTML=oSafelink.dec.txNote1,qSel("#SL_s1>span").removeAttribute("style"),remCt(geId("pWait2"),"hidden"),geId("SL_s2").style.display="block"):geId("pWait1").innerHTML=oSafelink.dec.txNote1a+tmLf1+oSafelink.dec.txNote1b,tmLf1-=1}),1e3);qSel("#SL_s1>span").addEventListener("click",(function(){if(geId("SL_s2").insertAdjacentElement("beforebegin",adTop),geId("SL_s2").insertAdjacentElement("afterend",adBot),this.setAttribute("style","pointer-events:none;opacity:0.4"),1==oSafelink.dec.step)geId("pWait2").innerHTML=oSafelink.dec.txRsla+gHs(xAR.d(xAR.gC("AR_SL")))+oSafelink.dec.txRslb,geId("SL_s2").innerHTML='<a href="'+xAR.d(xAR.gC("AR_SL"))+'" target="_blank" rel="noopener noreferrer">'+oSafelink.dec.txLink+"</a>",qSel("#SL_s2>a").addEventListener("click",(function(){xAR.dC("AR_SL")})),geId("pWait1").remove(),geId("SL_s1").remove();else var e=oSafelink.dec.tmLf2,t=setInterval((function(){e<=0?(clearInterval(t),geId("pWait2").innerHTML=oSafelink.dec.txNote2,qSel("#SL_s2>span").removeAttribute("style"),qSel("#SL_s2>span").innerHTML=oSafelink.dec.txSpan2):geId("pWait2").innerHTML=oSafelink.dec.txNote2a+e+oSafelink.dec.txNote2b,e-=1}),1e3);stC("pWait2")})),1!=oSafelink.dec.step&&qSel("#SL_s2>span").addEventListener("click",(function(){geId("SL_s1").insertAdjacentElement("beforebegin",adTop),geId("SL_s1").insertAdjacentElement("afterend",adBot),geId("pWait1").innerHTML=oSafelink.dec.txRsla+gHs(xAR.d(xAR.gC("AR_SL")))+oSafelink.dec.txRslb,geId("SL_s1").innerHTML='<a href="'+xAR.d(xAR.gC("AR_SL"))+'" target="_blank" rel="noopener noreferrer">'+oSafelink.dec.txLink+"</a>",qSel("#SL_s1>a").addEventListener("click",(function(){xAR.dC("AR_SL")})),geId("pWait2").remove(),geId("SL_s2").remove(),stC("pWait1")}))}
/*dec set cookies SL*/


/*cek Plugin*/
Defer(function(){
  null!=geId("admCk").getAttribute("xid")?idPlug(geId("admCk").getAttribute("xid")):idPlug(0);
});

function idPlug(s){if(s){var u=xAR.d(s);cxPlug(u)}else xAR.gAj({url:"/feeds/posts/summary/?alt=json&max-results=0",async:!0,success:function(s){var u=JSON.parse(s).feed.id.$t.split("-")[1];cxPlug(u)},error:function(s){var u=blogId;cxPlug(u)}})}

function cxPlug(x){
xAR.gAj({
  url: "https://script.google.com/macros/s/AKfycbyMK179NFmtdItQUqEWn6LrCRWiINJ_93RRY5o5JaqjGwD7q2M8llayBb0IeeKqkbD7mA/exec",
  async: !0,
  success: function(e) {
    var o = JSON.parse(e).plugin, t = o.findIndex((function(o){return o.id == x}));
    if(t >= 0){

console.group("%cPlugin APMODY","color:#57956A;font-size:12px"),o[t].shortlink?console.log("Shortlink : Registered"):console.log("Shortlink : Unregistered"),o[t].safelink?console.log("Safelink : Registered"):console.log("Safelink : Unregistered"),o[t].subtounlock?console.log("SubtoUnlock : Registered"):console.log("SubtoUnlock : Unregistered"),console.groupEnd();

/*SHORTLINK*/o[t].shortlink?null!=geId("AR_Shortlink")&&"undefined"!=typeof oShortlink&&(qSel("#AR_Shortlink .gen").addEventListener("click",(function(){var t=qSel("#AR_Shortlink .i_lnk"),n=t.value,o=qSel("#AR_Shortlink .r_lnk");""!=n&&n.includes("://")?(o.value=n,fdyLnk(o.value,oShortlink.domain,oShortlink.apiKey,(function(t){o.value=t,remCt(qSel("#AR_Shortlink .rst"),"h"),addCt(qSel("#AR_Shortlink .rst"),"a"),stC("AR_Shortlink")}))):(t.focus(),toastNotif(oShortlink.errMsg))})),qSel("#AR_Shortlink .cpy").addEventListener("click",(function(){qSel("#AR_Shortlink .r_lnk").select(),document.execCommand("copy"),toastNotif(oShortlink.txCpy),setTimeout((function(){addCt(qSel("#AR_Shortlink .rst"),"h")}),2e3)}))):null!=geId("AR_Shortlink")&&(geId("AR_Shortlink").remove(),toastNotif("Shortlink : <b>Unregistered</b>"));
/*SAFELINK*/o[t].safelink?null!=geId("AR_Safelink")&&"undefined"!=typeof oSafelink&&(qSel("#AR_Safelink .gen").addEventListener("click",(function(){var e=qSel("#AR_Safelink .i_lnk"),n=e.value,l=qSel("#AR_Safelink .r_lnk");""!=n&&n.includes("://")?(l.value=blogUrl+"?"+oSafelink.param+"="+xAR.e(n),fdyLnk(l.value,oSafelink.domain,oSafelink.apiKey,(function(e){l.value=e,remCt(qSel("#AR_Safelink .rst"),"h"),addCt(qSel("#AR_Safelink .rst"),"a"),stC("AR_Safelink")}))):(e.focus(),toastNotif(oSafelink.errMsg))})),"undefined"!=typeof oSafelink&&qSel("#AR_Safelink .cpy").addEventListener("click",(function(){qSel("#AR_Safelink .r_lnk").select(),document.execCommand("copy"),toastNotif(oSafelink.txCpy),setTimeout((function(){addCt(qSel("#AR_Safelink .rst"),"h")}),2e3)}))):(null!=geId("AR_Safelink")&&geId("AR_Safelink").remove(),null!=geId("SL_s1")&&(geId("SL_s1").remove(),geId("SL_s2").remove(),geId("pWait1").style.display="none"),toastNotif("Safelink : <b>Unregistered</b>"));

    }else{alert("inactive plugin for this blog"),window[xAR.de(txO5)][xAR.de(txO6)]=xAR.de(txO7)+window[xAR.de(txO5)][xAR.de(txO6)]}

  }
}); 
}
/*end cek Plugin*/
