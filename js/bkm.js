/*<![CDATA[*//*Bkm*/

/*nav BmPs*/qSel('#TextList000 > .headIc').insertAdjacentHTML('afterbegin', '<li class="isBkm"><label aria-label="Bookmark" class="tBkmt tIc bIc n" for="offBkm">'+ARtb.bookmark.Icon+'</label></li>');

/*content BmPs*/geId('header-icon').insertAdjacentHTML('beforeend', '<div class="cBkPs"><input class="bkmI hidden" id="offBkm" type="checkbox"/><div class="wBkm sl"><div class="bkmS fixLs"><div class="bkmH fixH fixT" data-text="'+ARtb.bookmark.title+'"><label aria-label="'+ARtb.bookmark.txClose+'" class="c cl" for="offBkm"></label></div><div id="dBmPs" class="bkmC"></div></div></div><label class="bkmCls" for="offBkm"></label></div>');

/* set obj LS Bookmark, value*/
let objBmPs={}; 
const LS_BM_PS='Bookmark_Post', giBmPs=xAR.gLS(LS_BM_PS),
/*null BkmPs*/nBkmPs=()=>{geId('dBmPs').innerHTML='<div class="n">'+ARtb.bookmark.noBmIcon+'<p>'+ARtb.bookmark.noBmMes+'</p><a class="button" href="'+ARtb.bookmark.noBmLink+'">'+ARtb.bookmark.noBmAll+'</a></div>'},
/*get result BmPs*/gBmPs=(d,i)=>{let l=i.id,s=i.title,a=i.image,m=i.link;null!==geId("dBmPs")&&(geId("dBmPs").innerHTML+='<div class="item" id="bkm'+l+'"><div class="pThmb"><div class="thmb"><div class="bkmImg" style="background-image:url(\''+a+'\');"></div></div></div><div class="itmTtl"><a href="'+m+'">'+s+'</a></div><div class="del" onclick="delBmPs(\''+l+"')\">"+ARtb.bookmark.delIcon+"</div></div>"),qSell('.bmPs[bm-id="'+l+'"]').forEach((d=>{addCt(d,"a")}))},
/*refresh BkmPs*/rBmPs=()=>{if(geId("dBmPs").innerHTML="",xAR.gLS(LS_BM_PS)){objBmPs=JSON.parse(xAR.gLS(LS_BM_PS));for(let t in objBmPs)gBmPs(t,objBmPs[t]);let t=Object.keys(objBmPs).length;t>0?(qSel(".tBkmt").setAttribute("data-text",t),remCt(qSel(".tBkmt"),"n")):(addCt(qSel(".tBkmt"),"n"),nBkmPs())}},
/*crud stu value*/synBmPs=(e,s,t,a,m)=>{switch(e){case"ADD":case"UPD":xAR.gLS(LS_BM_PS)&&(objBmPs=JSON.parse(xAR.gLS(LS_BM_PS)));let e={id:s,title:t,image:a,link:m};objBmPs[e.id]=e,geId("tNtf").innerHTML="<span>"+ARtb.bookmark.addedNtf+"</span>";break;case"DEL":delete objBmPs[s],qSell('.bmPs[bm-id="'+s+'"]').forEach((e=>{remCt(e,"a")})),geId("tNtf").innerHTML="<span>"+ARtb.bookmark.removedNtf+"</span>"}xAR.sLS(LS_BM_PS,JSON.stringify(objBmPs)),rBmPs()},
/*del BmPs*/delBmPs=(s)=>{if(xAR.gLS(LS_BM_PS)){if(objBmPs=JSON.parse(xAR.gLS(LS_BM_PS)),null!=objBmPs[s]){addCt(geId("bkm"+s),"d"),setTimeout((()=>{synBmPs("DEL",s)}),1e3)}}},
/*set btn*/setBmPs=()=>{qSell(".bmPs").forEach((t=>{t.classList.contains("h")&&(t.classList.contains("p")&&null!=ARtb.bookmark.bmPost?t.innerHTML=ARtb.bookmark.bmPost:t.innerHTML=ARtb.bookmark.bmIcon,remCt(t,"h"),t.addEventListener("click",(s=>{let b=t.getAttribute("bm-id"),m=t.getAttribute("bm-ttl"),e=t.getAttribute("bm-img"),n=t.getAttribute("bm-url");xAR.gLS(LS_BM_PS)?(objBmPs=JSON.parse(xAR.gLS(LS_BM_PS)),null==objBmPs[b]?synBmPs("ADD",b,m,e,n):synBmPs("DEL",b)):synBmPs("ADD",b,m,e,n)})))}))},
_BmPs=()=>{setBmPs();rBmPs()};

/*load LS*/
giBmPs?rBmPs():nBkmPs();

/*set result item value*/
qSell(".bmPs").forEach((t=>{t.classList.contains("p")&&null!=ARtb.bookmark.bmPost?t.innerHTML=ARtb.bookmark.bmPost:t.innerHTML=ARtb.bookmark.bmIcon,t.classList.contains("h")&&remCt(t,"h"),t.addEventListener("click",(s=>{let b=t.getAttribute("bm-id"),m=t.getAttribute("bm-ttl"),e=t.getAttribute("bm-img"),n=t.getAttribute("bm-url");xAR.gLS(LS_BM_PS)?(objBmPs=JSON.parse(xAR.gLS(LS_BM_PS)),null==objBmPs[b]?synBmPs("ADD",b,m,e,n):synBmPs("DEL",b)):synBmPs("ADD",b,m,e,n)}))}));
/*]]>*/
