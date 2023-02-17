/*<![CDATA[*/console.log('script loaded...');
/*TimeAgo by Aruf*/
const timeAgo = (e, xmp)=> {
  let xTime = [60000, 3600000, 86400000, 604800000, 2629800000, 31557600000],
  aTime="undefined"!=typeof timeLang ? timeLang : [
    ["minute","hour","day","week","month","year"],
    ["minutes","hours","days","weeks","months","years","seconds"],
    "right now","about ","about a "," ago","Today at "," AM"," PM"
  ],
  tVal = Date.now() - e;

  if ((tVal) < 60000) {
    let xStm = parseInt(tVal/1000);

    if(xStm < 2){
      return aTime[2];
    }else{
      return xStm + " "+ aTime[1][6] + aTime[5];
    }

  }

  let currDate = new Date,
  oldDate = new Date(e);

  if (null!=xmp && (currDate.getDate() == oldDate.getDate()) && (tVal <= xTime[2])) {
    //today at **:** (am/pm)

    let ot=t=>1==t.toString().length?"0"+t.toString():t,
    apm = () => oldDate.getHours() > 11 ? aTime[8] : aTime[7];

    return aTime[6] + (((oldDate.getHours() - 12) * (oldDate.getHours() > 12)) + ((oldDate.getHours()) * (oldDate.getHours() < 13))) + ':' + ot(oldDate.getMinutes()) + apm();
  
  } else {

    //about a **** ago
    for (let aa = 0; aa < xTime.length; aa++) {
      if ((xTime[(xTime.length - (aa + 1))] - 1) < tVal) {
        let xVal = Math.floor(tVal / (xTime[(xTime.length - (aa + 1))] - 1));
        if (xVal > 1) {
          //about * *** ago
          return aTime[3] + xVal + ' ' + aTime[1][xTime.length - (aa + 1)] + aTime[5];
        } else {
          return aTime[4] + aTime[0][xTime.length - (aa + 1)] + aTime[5]
          break;
        }
      }
    }
  }
}

/*!@shinsenter/defer.js@3.4.0*/
!function(e){function n(n){e.addEventListener(n,B)}function t(n){e.removeEventListener(n,B)}function o(e,n,t){C?z(e,n):(t||o.lazy&&void 0===t?S:L).push(e,n)}function i(e){k.head.appendChild(e)}function c(e,n){q.call(e.attributes)[y](n)}function r(e,n,t,o){return o=(n?k.getElementById(n):o)||k.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function u(e,n,t){(t=e.src)&&((n=r(m)).rel="preload",n.as=h,n.href=t,(t=e[g](w))&&n[b](w,t),(t=e[g](x))&&n[b](x,t),i(n))}function a(e,n){return q.call((n||k).querySelectorAll(e))}function s(e,n){e.parentNode.replaceChild(n,e)}function f(e,n){a("source,img",e)[y](f),c(e,(function(n,t){(t=/^data-(.+)/.exec(n.name))&&e[b](t[1],n.value)})),"string"==typeof n&&n&&(e.className+=" "+n),p in e&&e[p]()}function l(e,n,t){o((function(n){(n=a(e||N))[y](u),function e(t,o){(t=n[E]())&&((o=r(t.nodeName)).text=t.text,c(t,(function(e){"type"!=e.name&&o[b](e.name,e.value)})),o.src&&!o[g]("async")?(o.onload=o.onerror=e,s(t,o)):(s(t,o),e()))}()}),n,t)}var d="Defer",m="link",h="script",p="load",v="pageshow",y="forEach",g="getAttribute",b="setAttribute",E="shift",w="crossorigin",x="integrity",A=["mousemove","keydown","touchstart","wheel"],I="on"+v in e?v:p,N=h+"[type=deferjs]",j=e.IntersectionObserver,k=e.document||e,z=e.setTimeout,C=/p/.test(k.readyState),L=[],S=[],q=L.slice,B=function(e,i){for(i=I==e.type?(t(I),C=o,A[y](n),L):(A[y](t),S);i[0];)z(i[E](),i[E]())};l(),o.all=l,o.dom=function(e,n,t,i,c){o((function(n){function r(e){i&&!1===i(e)||f(e,t)}n=!!j&&new j((function(e){e[y]((function(e,t){e.isIntersecting&&(n.unobserve(t=e.target),r(t))}))}),c),a(e||"[data-src]")[y]((function(e){e[d]!=o&&(e[d]=o,e[b]("lazied",""),n?n.observe(e):r(e))}))}),n,!1)},o.css=function(e,n,t,c,u){o((function(t){(t=r(m,n,c)).rel="stylesheet",t.href=e,i(t)}),t,u)},o.js=function(e,n,t,c,u){o((function(t){(t=r(h,n,c)).src=e,i(t)}),t,u)},o.reveal=f,e[d]=o,C||n(I)}(this);

Defer.dom(".lazy", 100, "loaded", null, {rootMargin: "1px"});


xAR.sLS("xAR_script", (new Date).getTime() + 864e5);
const ARtb = tempSet;

const xAR2={
	_Str:"mUlTeXbLoGgERtMpOcDjFWYZaChIkJnKqNsPvQwSzVx1357986420ByArufHid+/=",
	en:e=>{var t,r,o,a,n,c,h,d="",s=0;for(e=xAR._utf8_en(e);s<e.length;)a=(t=e.charCodeAt(s++))>>2,n=(3&t)<<4|(r=e.charCodeAt(s++))>>4,c=(15&r)<<2|(o=e.charCodeAt(s++))>>6,h=63&o,isNaN(r)?c=h=64:isNaN(o)&&(h=64),d=d+xAR._Str.charAt(a)+xAR._Str.charAt(n)+xAR._Str.charAt(c)+xAR._Str.charAt(h);return d},
	de:e=>{var t,r,o,a,n,c,h="",d=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<e.length;)t=xAR._Str.indexOf(e.charAt(d++))<<2|(a=xAR._Str.indexOf(e.charAt(d++)))>>4,r=(15&a)<<4|(n=xAR._Str.indexOf(e.charAt(d++)))>>2,o=(3&n)<<6|(c=xAR._Str.indexOf(e.charAt(d++))),h+=String.fromCharCode(t),64!=n&&(h+=String.fromCharCode(r)),64!=c&&(h+=String.fromCharCode(o));return xAR._utf8_de(h)},
	_utf8_en:e=>{e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},
	_utf8_de:e=>{for(var t="",r=0,o=c1=c2=0;r<e.length;)(o=e.charCodeAt(r))<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),r+=3);return t},
	xe:(e,t,r)=>"a"+xAR.en(e+(null==t?"":null==r?t:xAR.e(t))),
	xd:(e,t,r)=>xAR.de(e.substring(1)).replace(null==t?"":null==r?t:xAR.e(t),"")
};

Object.assign(xAR,xAR2);


/*BEGIN*/
let admCk=geId("admCk"),
txO1 = "location",
txO2 = "href",
lcBD = "6372953478572614305",
txO3 = "https://www.aruf.my.id/?ref=",
lcPT = "template",
lcPN = "multex",
lcDn = isPv ? "" : "+"+window[txO1].hostname;

const xIdb=t=>blogId==t,

c_blgId=d=>{let e=xAR.en(d.feed.id.$t.split("-")[1]);xAR.sLS("_AR_blgId",e)},

c_aBlog = e => {

	let data = e.feed.entry;
	if(data!=null){
		let s = xAR.en(data[0].content.$t);
		xAR.sLS("_AR_aBlog", s);

		let t = data[0].link.filter((e => "enclosure" == e.rel)),
			r = {};
		t.forEach((e => {
			let s = e.href.replace("http://", "").replace(".id", ""),
				t = e.type;
			r[s] = t
		})), 
		xAR.sLS("_AR_Usr", xAR.en(JSON.stringify(r))), 
		xAR.sC("_AR_sess", 1, {"max-age": parseInt(r.xsess)})		
	}else{
		P_aBlg(0, 1)
	}


},

_aBlog = l => {
	let a = JSON.parse(xAR.de(xAR.gLS("_AR_aBlog"))).blog,
		e = iVa(a, "id", xAR.de(l));
	if (e >= 0) {
		let l = a[e];
		p_aBlg(l.id, l.url, l.code, l.auth); 
		/*mainJs*/ /*ldJs(bsGtb + "js/main.js", "main-js", !0)*/
	} else P_aBlg(0, 1)
},

p_aBlg = (_id, _url, _code, _auth) => {
	let data = JSON.parse(xAR.de(xAR.gLS("_AR_Usr")));
	console.groupCollapsed("%cValid License", "color:#57956A;font-size:12px"), 
		console.groupCollapsed("License for : "),
			console.log("ID : "+_id),
			console.log("Domain : "+_url),
			console.log("Code : "+_code),
			console.log("Owner : "+_auth),
			console.log("Type : "+data.xtype),
		console.groupEnd(),
		console.group(data.xname),
			console.log("Demo : "+data.xlink), 
		console.groupEnd(),
	console.groupEnd()
},

P_aBlg = (t, i) => {
	let n=null,geId=l=>n,gCls=l=>n,qSel=l=>n,qSell=l=>n;
	alert("invalid license");
	"undefined"!=typeof isPv?0==isPv&&(window[txO1][txO2]=txO3+window[txO1][txO2]):window[txO1][txO2]=txO3+window[txO1][txO2];
},

cxLss = s => {
	if(xIdb(xAR.de(s))){
		if ( null != xAR.gLS("_AR_aBlog") ) {
		 	_aBlog(s);	
		} else {
			let lcIB = xAR.de(s);
			ldJsx({
				src: "https://www.blogger.com/feeds/" + lcBD + "/posts/default?alt=json-in-script&max-results=1&q=label:" + lcPT + "+label:" + lcPN + "+" + lcIB + lcDn + "&callback=c_aBlog",
				rem: !0,
				load: () => {
					_aBlog(s)
				},
				err: () => P_aBlg(0,1)
			})
		}	
	}else{
		P_aBlg(0,1)
	}
};

/*check id blog*/
null==xAR.gC("_AR_sess")&&(xAR.rLS("_AR_blgId"),xAR.rLS("_AR_aBlog"),xAR.rLS("_AR_Usr"));
if (null != xAR.gLS("_AR_blgId")) {
	let s = xAR.gLS("_AR_blgId");
	cxLss(s)
} else setTimeout((() => {
	let dom = isPv ? blogUrl : "/";
	ldJsx({
		src: dom+"feeds/posts/summary/?alt=json-in-script&max-results=0&callback=c_blgId",
		rem: !0,
		load: () => {
			let s = xAR.gLS("_AR_blgId");
			cxLss(s)
		},
		err: () => {
			let s = xAR.en(blogId);
			xAR.sLS("_AR_blgId", s), cxLss(s)
		}
	})
}), 0);


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



/* --- isHomepage begin --- */
if(isHm){
/* --- --- --- */
/*psByLabel begin*/
function _psByLbl(){

	let numbPs = null != ARtb.psByLabel.numbPs ? ARtb.psByLabel.numbPs : 6, 
	    szThumb = null != ARtb.psByLabel.szThumb ? ARtb.psByLabel.szThumb : 120,
	    sortDt = null != ARtb.psByLabel.sortDt ? ARtb.psByLabel.sortDt : "updated",
	    lblPst = qSell(".lblPst:not(.no-items)");

	for (var i = 0; i < lblPst.length; i++) {
	  remCt(lblPst[i],"hidden");
	  let label = lblPst[i].querySelector(".label-item").innerText;
	  let lbl = label.length > 0 ? encodeURI("/-/" + label) : "";
	  let elC = lblPst[i].querySelector(".lblPst-item");

	//begin
	xAR.gAj({
	  url: "/feeds/posts/summary"+lbl+"?alt=json&orderby="+sortDt+"&max-results="+numbPs,
	  async: !0,
	  success: function(e) {
	    let n = JSON.parse(e).feed.entry;
	    if(n!=null){
	    let elPs= '<div class="psLbl">';
	      n.forEach(function(dt, idx) {

	        const psTtl = dt.title.$t,
	            psLink = gVa(dt.link, "rel", "alternate", "href"),
	            psThumb = dt.media$thumbnail ? dt.media$thumbnail.url : "none",
	            
	            dtPub={date:new Date(dt.published.$t),year:()=>dtPub.date.getUTCFullYear(),month:()=>parseInt(dtPub.date.getUTCMonth())+1,day:()=>dtPub.date.getUTCDate(),hour:()=>dtPub.date.getUTCHours(),min:()=>dtPub.date.getUTCMinutes()},

	            psRate=t=>{let u=dtPub.hour(),d=dtPub.day(),e="";if("v"==t){let t=dtPub.min()%10;e=17==u||5==u?"5.0":u<12?"3."+t:"4."+t}else e=dtPub.year()+3*dtPub.month()*6*d+(6*u+1)*(2*dtPub.min()+1);return e},

	            dtUpd={date:new Date(dt.updated.$t),year:()=>dtUpd.date.getUTCFullYear(),month:()=>monthAb[dtUpd.date.getUTCMonth()],day:()=>dtUpd.date.getUTCDate()},

	            xSpr = iVa(dt.category,"term","Sponsored")>=0?!0:!1,
	            psSpr = {
	              name : gVa(dt.link,"href","spr.name","type")
	            },

	            xApp = iVa(dt.category,"term","_Apps")>=0||iVa(dt.category,"term","_Games")>=0?!0:!1,
	            psApp={name:gVa(dt.link,"href","name.app","type"),icon:gVa(dt.link,"href","icon.app","type"),ver:gVa(dt.link,"href","ver.app","type"),mod:gVa(dt.link,"href","mod.app","type"),txApk:""!=gVa(dt.link,"href","apk-tx.app","type")?gVa(dt.link,"href","apk-tx.app","type"):"APK",txMod:""!=gVa(dt.link,"href","mod-tx.app","type")?gVa(dt.link,"href","mod-tx.app","type"):"MOD"},

	            xProd = iVa(dt.category,"term","Product")>=0?!0:!1,
	            psProd= {
	              name : gVa(dt.link,"href","name.prod","type"),
	              price : gVa(dt.link,"href","price.prod","type")
	            },

	            xAnime = iVa(dt.category,"term","Anime")>=0?!0:!1,
	            psAnime= {
	              name : gVa(dt.link,"href","name.ani.me","type"),
	              epi : gVa(dt.link,"href","episodes.ani.me","type")
	            },

	            z = "";


	        
	        let pTtl = psTtl,
	            pThumb = "",
	            pRate = '<div class="psRt"><g-review-stars aria-hidden="true"><span class="Fam1ne tPhRLe" role="img"><span drt-val="'+ psRate("v") +'"></span></span></g-review-stars> <span>'+ psRate("v") +'</span> · ‎<span drt-count="'+ psRate() +'">'+ xAR.abv(psRate()) +'</span></div>',
	            pUpd = dtUpd.month()+" "+dtUpd.day()+", "+dtUpd.year(),
	            pDate = "",
	            clsYt = "",
	            appVM = "",
	            appAM = "",
	            clsPs = "";

	        // title
	        if(psApp.name!=""){
	          pTtl=psApp.name;
	        }else if(psProd.name!=""){
	          pTtl=psProd.name;
	        }

	        // image
	        if(xApp&&psApp.icon!=""){
	          pThumb="url('" + xSz(psApp.icon,szThumb) + "')";
	        }else if(psThumb!="none"){
	          if(psThumb.includes("img.youtube.com")){
	            pThumb = psThumb.replace("/vi/", "/vi_webp/").replace("/default.jpg", "/mqdefault.webp");
	            clsYt = " iyt"
	          }else{
	            pThumb = xSz(psThumb,szThumb);
	          }
	          pThumb="url('" + pThumb + "')";
	        }

	        // date
	        if(!xApp){
	          if(xSpr){
	            pDate = '<span class="pTtmp" data-tx="Ad">'+psSpr.name+'</span>';
	          }else if(xProd){
	            pDate = '<span class="pTtmp" data-tx="Price">'+psProd.price+'</span>';
	          }else{
	            pDate = '<time data-text="' + pUpd + '" data-tx="Updated" class="pTtmp"></time>';
	          }
	        }

	        // app
	        if(xApp){
	          if(psApp.ver!=""&&psApp.mod!=""){
	            appVM='<span class="apVM">v' + psApp.ver + " • " + psApp.mod + "</span>";
	            appAM='<div class="apAM"><span class="apk" data-text="'+psApp.txApk+'"></span><span class="mod" data-text="'+psApp.txMod+'"></span>'+pRate+'</div>';
	          }else if(psApp.ver!=""&&psApp.mod==""){
	            appVM='<span class="apVM">v' + psApp.ver +"</span>";
	            appAM='<div class="apAM"><span class="apk" data-text="'+psApp.txApk+'"></span>'+pRate+'</div>';
	          }
	          clsPs = " nApGm";
	        }


	        // console.log('pTtl : '+pTtl);
	        // console.log('pThumb : '+pThumb);
	        // console.log('pRate : '+pRate);
	        // console.log('pUpd : '+pUpd);

	        elPs += '<article><a class="item' + clsPs + '" aria-label="' + psTtl + '" href="' + psLink + '"><div class="iThmb pThmb' + clsYt + '"><div class="thmb"><div class="img" style="background-image: ' + pThumb + '"></div></div></div> <div class="itmTtl"><span>' + pTtl + "</span>" + pDate + appVM + appAM + "</div></a></article>";

	      });

	    elPs += "</div>";
	    elC.innerHTML = elPs;

	    }else{
	      elC.innerHTML = "<p class='note wr'>No posts yet.</p>";
	    }
	  }
	});
	//end


	}

}

/*run*/
if(null != qSel(".lblPst:not(.no-items") && ARtb.psByLabel.enable){
	_psByLbl();
}
/*end psByLabel*/
/* --- --- --- */
}
/* --- end isHomepage --- */



/* --- isSingleItem begin --- */
if(isIt){
/* --- --- --- */
/* Table of Content */
class TableOfContents{constructor({from:e,to:t}){this.fromElement=e,this.toElement=t,this.headingElements=this.fromElement.querySelectorAll("h1:not(.n),h2:not(.n),h3:not(.n),h4:not(.n),h5:not(.n),h6:not(.n)"),this.tocElement=document.createElement("div")}getMostImportantHeadingLevel(){let e=6;for(let t=0;t<this.headingElements.length;t++){let n=TableOfContents.getHeadingLevel(this.headingElements[t]);e=n<e?n:e}return e}static generateId(e){return e.textContent.replace(/\s+/g,"_")}static getHeadingLevel(e){switch(e.tagName.toLowerCase()){case"h1":default:return 1;case"h2":return 2;case"h3":return 3;case"h4":return 4;case"h5":return 5;case"h6":return 6}}generateToc(){let e=this.getMostImportantHeadingLevel()-1,t=this.tocElement;if(0!==this.headingElements.length){for(let n=0;n<this.headingElements.length;n++){let l=this.headingElements[n],a=TableOfContents.getHeadingLevel(l),o=a-e,r=document.createElement("a");if(l.id||(l.id=TableOfContents.generateId(l)),r.href=`#${l.id}`,r.textContent=l.textContent,o>0){for(let e=0;e<o;e++){let e=document.createElement("ol"),n=document.createElement("li");e.appendChild(n),t.appendChild(e),t=n}t.appendChild(r)}else{for(let e=0;e<-o;e++)t=t.parentNode.parentNode;let e=document.createElement("li");e.appendChild(r),t.parentNode.appendChild(e),t=e}e=a}this.toElement.appendChild(this.tocElement.firstChild)}else rEl("#HTML11")}}


/*iframe & content Comment*/
setTimeout(()=> {
  let ifrCmn = geId("comment-editor");
  if(ifrCmn!=null){
    let ifSrc = ifrCmn.getAttribute("data-src"),
  	rpTo = qSell(".rpTo"),
  	cmnFm = geId("commentForm"),
  	addCm = geId("addCm"),
  	xFcm = gCls("cmFrm")[0];
  	rpTo.forEach((el)=> {
  		el.addEventListener("click", ()=> {
  			let d = el.getAttribute("data-reply-to");
  			geId("c" + d).appendChild(cmnFm), cmnFm.className = "cmRbox", addCm.className = "cmAd", ifrCmn.src = ifSrc + "&parentID=" + d	
  		})
  	});
  	addCm.addEventListener("click", (()=> {
  	  xFcm.appendChild(cmnFm), cmnFm.className = "cmRbox", addCm.className = "cmAd hidden", ifrCmn.src = ifSrc
  	}))
  }
}, 0);

/* parse Comment */ 
var cmnParse = e => {
    let r = geId("cod-K"),
      a = r.value.replace(/\t/g, "    "),
      t = e.getAttribute("data-text");
    if ("" != r.value) {
      "pre" == t || "code" == t ? (a = a.replace(/&/g, "&amp;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), a = "pre" == t ? a.replace(/^/, '<i rel="pre">') : a.replace(/^/, '<i rel="code">')) : "image" == t ? a = a.replace(/^/, '<i rel="image">') : "quote" == t ? a = a.replace(/^/, '<i rel="quote">') : "tag" == t && (a = a.replace(/^/, '<i rel="tag">')), a = a.replace(/$/, "</i>"), r.value = a, r.focus(), remCt(geId("bcpKomen"), "hidden"), a = qSell(".parCmn .btn.m");
      for (let l = 0; l < a.length; l++) a[l].disabled = !0
    } else r.focus()
  },
  clrPcmn = () => {
    let e = geId("cod-K");
    e.value = "", e.focus(), addCt(geId("npC"), "hidden"), addCt(geId("bcpKomen"), "hidden");
    for (let r = qSell(".parCmn .btn.m"), a = 0; a < r.length; a++) r[a].disabled = !1
  },
  cpyPcmn = () => {
    geId("cod-K").select(), document.execCommand("copy"), geId("cod-K").value = "", remCt(geId("npC"), "hidden"), setTimeout((function() {
      clrPcmn()
    }), 1e3)
  },
  repText = e => {
    let r = geId(e);
    if (r) {
      let a = r.innerHTML;
      a = (a = a.replace(/<i rel="image">(.*?)<\/i>/gi, '<img class="lazy" data-src="$1" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Image Comment" \/>')).replace(/<i rel="pre">(.*?)<\/i>/gi, '<div class="pre"><pre>$1</pre></div>'), r.innerHTML = a
    }
  };
repText("cmHolder");

/* Comments url in new tab */ 
qSell(".cmBd .cmCo a").forEach((t=>{t.setAttribute("target","_blank"),addCt(t,"extL")}));

/*TimeAgo Comment*/
let dtTm = qSell(".dtTm");
dtTm.forEach((el)=> {
  el.innerHTML = timeAgo(Date.parse(el.getAttribute("data-datetime")));
});

/*lazy yt click thumnail*/
for(let e=qSell(".lazyYt"),t=0;t<e.length;t++){let a="https://img.youtube.com/vi_webp/"+e[t].dataset.embed+"/sddefault.webp",l=new Image();addCt(l,"lazy"),setAttr(l,"data-src",a),setAttr(l,"src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),setAttr(l,"alt","Youtube video"),l.addEventListener("load",void e[t].appendChild(l)),e[t].addEventListener("click",(function(){let e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://play.google.com/video/lava/web/player/yt:movie:"+this.dataset.embed+"?autoplay=1&amp;authuser=0&amp;embed=play"),this.innerHTML="",this.appendChild(e)}))}
/* Active Table of Content */
null!=geId("toContent")&&document.addEventListener("DOMContentLoaded",(()=>new TableOfContents({from:qSel("#postBody"),to:geId("toContent")}).generateToc()));
/* pre Double Click to Copy*/
for(let e=document.getElementsByTagName("pre"),t=0;t<e.length;t++)e[t].addEventListener("dblclick",(function(){let e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges(),toastNotif("Copied to clipboard!")}),!1);


/*related posts begin*/
if(null!=geId("rPst")){

! function() {
var xNumbPs, xSzThumb, xSzThumbApp, t = {
  rpstTtlOpen: '<h3 class="title">',
  rpstTtlClose: "</h3>",
  rpstTtl: "Artikel Terkait",
  numbPs: 6,
  thmbSize: "s280",
  thmbSizeApp: "s120",
  relOuter: "rPst"
};

for (var l in rPstConfig) "undefined" != rPstConfig[l] && (t[l] = rPstConfig[l]);

xNumbPs = null == relatedPost.numbPs ? t.numbPs : relatedPost.numbPs, xSzThumb = null == relatedPost.szThumb ? t.thmbSize : relatedPost.szThumb, xSzThumbApp = null == relatedPost.szThumbApp ? t.thmbSizeApp : relatedPost.szThumbApp;

var n = t.rpstTtl;

function r(e) {
  var s = document.createElement("script");
  s.src = e, document.getElementsByTagName("head")[0].appendChild(s)
}

function i(e) {
  var s, a, t = e.length;
  if (0 === t) return !1;
  for (; --t;) s = Math.floor(Math.random() * (t + 1)), a = e[t], e[t] = e[s], e[s] = a;
  return e
}

if ("object" == typeof psLabels && 0 < psLabels.length) var rpLabel = "/-/" + xAR.rdm(psLabels).replace("&amp;", "%26");
else rpLabel = "";

arRelatedPosts = function(e) {

  var T = t.rpstTtlOpen + n + t.rpstTtlClose,
    $ = geId(t.relOuter),
    x = i(e.feed.entry);
    // DATA POST x 

  if (psLabels.includes("_Apps") || psLabels.includes("_Games")) var rpClass = '<ul class="nApGm">', psAG=1;
  else rpClass = '<ul class="rPst-ul">', psAG=0;

  T += rpClass;
  
    for (var k = 0; k < x.length; k++) 

    for (var z = 0, A = x[k].link.length; z < A; z++) {
      x[k].link[z].href == t.postUrl && x.splice(k, 1);
    }

  
  if (0 < x.length) {
    for (var M = 0; M < xNumbPs && M < x.length; M++) {
      var xM = x[M],
      psTtl = xM.title.$t,
      psTitle = psTtl,
      psThumb = xM.media$thumbnail ? xM.media$thumbnail.url : "none",
      psLink,
      txApk = "APK",
      txMod = "MOD",
      iconApp,
      nameApp,
      verApp,
      modApp,
      appVM,
      appAM,
      nmSpr,
      nmPrd,
      prcPrd,
      clsYt="",
      clsPs="",
      xAG=0,
      psDate="",
      rtCount="",
      rtVal="",
      psRating="";

      psLink = gVa(xM.link, "rel", "alternate", "href");
      iconApp = gVa(xM.link, "href", "icon.app", "type");
      nameApp = gVa(xM.link, "href", "name.app", "type");
      verApp = gVa(xM.link, "href", "ver.app", "type");
      modApp = gVa(xM.link, "href", "mod.app", "type");
      nmSpr = gVa(xM.link, "href", "spr.name", "type");
      nmPrd = gVa(xM.link, "href", "name.prod", "type");
      prcPrd = gVa(xM.link, "href", "price.prod", "type");

      if(iconApp!=""&&psAG){
        iconApp = xSz(iconApp,xSzThumbApp);
        psThumb="url('" + iconApp + "')";
      }else if(psThumb!="none"){
        if(psThumb.includes("img.youtube.com")){
          psThumb = psThumb.replace("/vi/", "/vi_webp/").replace("/default.jpg", "/mqdefault.webp");
          clsYt = " iyt"
        }else{
          psThumb = xSz(psThumb,xSzThumb);
        }
        psThumb="url('" + psThumb + "')";
      }

      if(nameApp!=""){
        psTitle=nameApp;
      }else if(nmPrd!=""){
        psTitle=nmPrd;
      }


      if(iVa(xM.category,"term","_Apps")>=0 || iVa(xM.category,"term","_Games")>=0){
        xAG=1;
      }

      if(iVa(xM.category,"term","Product")>=0){
        clsPs=" pTag";
      }

      var txDt = null!=xM.updated.$t?"Updated":"Published",
      xDateP = xM.published.$t,
      xDate = null!=xM.updated.$t?xM.updated.$t.substring(0,10):xM.published.$t.substring(0,10),
      xY = xDate.substring(0, 4),
      xM = monthAb[parseInt(xDate.substring(5, 7)) - 1];
      xD = parseInt(xDate.substring(8, 10)),
      pYr = parseInt(xDateP.substring(0, 4)),
      pMn = parseInt(xDateP.substring(5, 7)),
      pDy = parseInt(xDateP.substring(8, 10)),
      pHr = parseInt(xDateP.substring(11, 13)),
      pMt = parseInt(xDateP.substring(14, 16)),
      xZon = parseInt(xDateP.substring(23, 26));

      pHr<xZon?(pHr=pHr+24-xZon,pDy-=1):pHr==xZon?pHr=0:pHr-=xZon;

      rtCount=pYr+3*pMn*6*pDy+(6*pHr+1)*(2*pMt+1);

      pMt%=10;

      var rtVal="";
      17==pHr||5==pHr?rtVal="5.0":pHr<12?rtVal="3."+pMt:rtVal="4."+pMt;

      if(psAG){
        psRating = '<div class="psRt"><g-review-stars aria-hidden="true"><span class="Fam1ne tPhRLe" role="img"><span drt-val="'+ rtVal +'"></span></span></g-review-stars> <span>'+ rtVal +'</span> · ‎<span drt-count="'+ rtCount +'">'+ xAR.abv(rtCount) +'</span></div>';
      }

      if(xAG==0){
        if(nmSpr!=""){
          psDate = '<span class="pTtmp" data-tx="Ad">'+nmSpr+'</span>';
        }else if(prcPrd!=""){
          psDate = '<span class="pTtmp" data-tx="Price">'+prcPrd+'</span>';
        }else{
          psDate = '<time data-text="' + xM + " " + xD + ", " + xY + '" data-tx="' + txDt + '" class="pTtmp"></time>';
        }
      }

      if(verApp!=""&&modApp!=""){
        appVM='<span class="apVM">v' + verApp + " • " + modApp + "</span>";
        appAM='<div class="apAM"><span class="apk" data-text="'+txApk+'"></span><span class="mod" data-text="'+txMod+'"></span>'+psRating+'</div>';
      }else if(verApp!=""&&modApp==""){
        appVM='<span class="apVM">v' + verApp +"</span>";
        appAM='<div class="apAM"><span class="apk" data-text="'+txApk+'"></span>'+psRating+'</div>';
      }else{
        appVM="";
        appAM="";
      }

      T += '<li><a class="item' + clsPs + '" aria-label="' + psTtl+ '" href="' + psLink + '"><div class="iThmb pThmb' + clsYt + '"><div class="thmb"><div class="rPst-img lazy" data-style="background-image: ' + psThumb + '"></div></div></div> <div class="itmTtl"><span>' + psTitle + "</span>" + psDate + appVM + appAM + "</div></a></li>"

    }
    $.innerHTML = T += "</ul>"
  }
}, 

arRandomIndex = function(s) {
  var maxResults = xNumbPs + 1,
  totalResults = s.feed.openSearch$totalResults.$t,
  startIndex = totalResults > maxResults ? 1 + Math.floor(Math.random() * (totalResults - xNumbPs)) : 1;
  // console.log('startIndex : '+startIndex);
  if(totalResults > 1){
    r(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=updated&start-index=" + startIndex + "&max-results=" + maxResults + "&callback=arRelatedPosts");
  }else {
    // console.log('Related Post Tidak Ada');
    geId(t.relOuter).remove();
  }
},

// console.log('rPst[rpLabel] : '+rpLabel);
r(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=updated&max-results=0&callback=arRandomIndex");

}();

}
/*end related posts*/


/* --- --- --- */
}
/* --- end isSingleItem --- */



if(ARtb.infiniteScroll){
/*! Simple AJAX infinite scroll */ 
!function(t,e){t.InfiniteScroll=function(n){function r(t,n){return n=n||e,n.querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return"function"==typeof t}function i(t,e){t=t||{};for(var n in e)t[n]="object"==typeof e[n]?i(t[n],e[n]):e[n];return t}function s(t,e,n){return o(t)?o(e)?void(o(n)?g[t][n]=e:g[t].push(e)):g[t]:g}function d(t,e){o(e)?delete g[t][e]:g[t]=[]}function l(t,e){if(o(g[t]))for(var n in g[t])g[t][n](e)}function c(){return L.innerHTML=p.text.loading,v=!0,M?(addCt(y,p.state.loading),l("loading",[p]),void u(M,function(t,n){y.className=x+" "+p.state.load,h=e.createElement("div"),h.innerHTML=t;var o=r("title",h),a=r(p.target.post,h),i=r(p.target.anchors+" "+p.target.anchor,h),s=r(p.target.post,H);if(o=o&&o[0]?o[0].innerHTML:"",a.length&&s.length){var d=s[s.length-1];e.title=o,d.insertAdjacentHTML("afterend"," "),h=e.createElement("div");for(var c=0,u=a.length;u>c;++c)h.appendChild(a[c]);d.insertAdjacentHTML("afterend",h.innerHTML),f(),M=i.length?i[0].href:!1,v=!1,q++,l("load",[p,t,n])}},function(t,e){addCt(y,p.state.error),v=!1,f(1),l("error",[p,t,e])})):(addCt(y,p.state.loaded),L.innerHTML=p.text.loaded,l("loaded",[p]))}function f(t){if(L.innerHTML="",T){h.innerHTML=p.text[t?"error":"load"];var e=h.firstChild;e.onclick=function(){return 2===p.type&&(T=!1),c(),!1},L.appendChild(e)}}var u="infinite-scroll-state-",p={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:u+"load",loading:u+"loading",loaded:u+"loaded",error:u+"error"}},g={load:[],loading:[],loaded:[],error:[]};p=i(p,n||{}),p.on=s,p.off=d;var h=null,u=function(e,n,r){if(t.XMLHttpRequest){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r&&a(r)&&r(o.responseText,o));n&&a(n)&&n(o.responseText,o)}},o.open("GET",e),o.send()}},T=1!==p.type,v=!1,H=r(p.target.posts)[0],L=r(p.target.anchors)[0],M=r(p.target.anchor,L),m=e.body,y=e.documentElement,x=y.className||"",E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=0,b=null,q=1;if(M.length){M=M[0].href,H.insertAdjacentHTML("afterbegin"," "),h=e.createElement("div"),f();var w=function(){E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=m.scrollTop||y.scrollTop,v||E>A+j||c()};w(),0!==p.type&&t.addEventListener("scroll",function(){T||(b&&t.clearTimeout(b),b=t.setTimeout(w,200))},!1)}return p}}(window,document); if("undefined"!=typeof InfiniteScroll)var infinite_scroll=new InfiniteScroll({type:0,target:{posts:".blogPts",post:".ntry",anchors:".blogPg",anchor:".olLnk"},text:{load:"<a aria-label='"+txMore+"' class='jsLd ripple' data-text='"+txMore+"' href='javascript:;'></a>",loading:"<div class='jsLd wait nPst' data-text='"+txLoading+"'><svg viewBox='0 0 50 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'></animateTransform></path></svg></div>",loaded:"<div class='jsLd nPst ripple' data-text='"+txNoRst+"'>"+txNoRst+"</div>",error:"<a aria-label='"+txMore+"' class='jsLd error' data-text='"+txMoreElp+"' href='javascript:;'></a>"}});

/* infinite scroll*/
"undefined" != typeof infinite_scroll && infinite_scroll.on("load", (function() {
  Defer.dom(".lazy", 100, "loaded", null, {rootMargin: "1px"});
  "function"==typeof cImgpAG&&cImgpAG();
  "function"==typeof imgPsRw&&imgPsRw();
  "function"==typeof dtNumb&&dtNumb();

  // "function"==typeof qEdit&&qEdit();
  // "function"==typeof _CvdAG&&_CvdAG();
  // "function"==typeof _BmPs&&_BmPs();
  // qSell(".ntry.pAdin ins.adsbygoogle").length>0&&(adsbygoogle=window.adsbygoogle||[]).push({});
}));
}



/*Widgets Feature begin*/
/*Maintenance Mode*/
if(null!=qSel(".mMT")){let e=qSel(".mMT .days"),t=qSel(".mMT .hours"),n=qSel(".mMT .minutes"),l=qSel(".mMT .seconds"),T=qSel(".mMT"),o=new Date(mtEndOn),m=!1;const r=()=>{let T=new Date(),r=o.getTime()-T.getTime();r<=1e3&&(m=!0);let M=36e5,a=Math.floor(r/864e5),i=Math.floor(r%864e5/M),s=Math.floor(r%M/6e4),h=Math.floor(r%6e4/1e3);e.innerText=a<10?"0"+a:a,t.innerText=i<10?"0"+i:i,n.innerText=s<10?"0"+s:s,l.innerText=h<10?"0"+h:h};setInterval((()=>{m?addCt(T,"h"):r()}),1e3)}
/*end widgets feature*/



/**conf translate**/function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:ARtb.gTranslate.pageLang,includedLanguages:ARtb.gTranslate.includedLangs,layout:google.translate.TranslateElement.InlineLayout.SIMPLE},"google_translate_element")}
/*conf analytics*/function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config",ARtb.analytics.propertyID)
/*Push adSense*/
if(ARtb.adSense.enable)for(let e=qSell("ins.adsbygoogle"),l=0;l<e.length;l++)e[l]&&(adsbygoogle=window.adsbygoogle||[]).push({});

/*]]>*/
