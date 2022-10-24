/*<![CDATA[*/
/**anti boom click**/
let clsAd,clsiAd,mxcAd,rstAd,nmcAd,ntwAd;

clsAd=null==ARtb.antiBoomClick.classAd?".adsbygoogle, .adB":ARtb.antiBoomClick.classAd;
clsiAd=null==ARtb.antiBoomClick.iframeAd?".adsbygoogle iframe":ARtb.antiBoomClick.iframeAd;
mxcAd=null==ARtb.antiBoomClick.max?3:ARtb.antiBoomClick.max;
rstAd=null==ARtb.antiBoomClick.resetTime?3600:ARtb.antiBoomClick.resetTime;
nmcAd=null==ARtb.antiBoomClick.name?"AD_Click":ARtb.antiBoomClick.name;
ntwAd=null==ARtb.antiBoomClick.msg?"Please don't be naughty if you don't want to support us..":ARtb.antiBoomClick.msg;

const dsbAD=()=>{let e=qSell(clsAd);if(e.length>0)for(let l=0;l<e.length;l++)e[l].style.pointerEvents="none"};

let clcAd=xAR.gC(nmcAd);null!=clcAd&&mxcAd==clcAd&&dsbAD(),qSell(clsAd).forEach((e=>{e.addEventListener("click",(e=>{if(null==xAR.gC(nmcAd))xAR.sC(nmcAd,1,{secure:!0,"max-age":rstAd});else{let A=Number(xAR.gC(nmcAd));if(A<mxcAd){let e=A+1;xAR.sC(nmcAd,e,{secure:!0,"max-age":rstAd}),e==mxcAd&&(geId("tNtf").innerHTML="<span>"+ntwAd+"</span>",dsbAD())}else e.preventDefault()}}))}));

window.addEventListener("blur",(()=>{setTimeout((()=>{for(let e=qSell(clsiAd),n=0;n<e.length;n++)if(document.activeElement==e[n]){if(null==xAR.gC(nmcAd))xAR.sC(nmcAd,1,{secure:!0,"max-age":rstAd});else{let e=Number(xAR.gC(nmcAd));if(e<mxcAd){let n=e+1;xAR.sC(nmcAd,n,{secure:!0,"max-age":rstAd})}else geId("tNtf").innerHTML="<span>"+ntwAd+"</span>",dsbAD()}null!=geId("searchIn")&&(geId("searchIn").focus(),geId("searchIn").blur())}}))}));
/*]]>*/
