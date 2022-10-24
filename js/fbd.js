/*<![CDATA[*/
if(xAo){
ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js", "fb-ap", !0, function() {
  ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-app-check.js", "fb-apc", !0, function() {
  ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js", "fb-auth", !0, function() {
  ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js", "fb-db", !0, function() {

    firebase.initializeApp({apiKey:ARtb.firebase.apiKey,authDomain:ARtb.firebase.authDomain,databaseURL:ARtb.firebase.databaseURL,projectId:ARtb.firebase.projectId,storageBucket:ARtb.firebase.storageBucket,messagingSenderId:ARtb.firebase.messagingSenderId,appId:ARtb.firebase.appId});

    // apc-ARUEF
    // xAR.d("aNzY4Q0FDODYtNUFBMy00NjU4LTlFMzYtRTcyRkM5NUM1MEVD")
    let appCheck=firebase.appCheck();appCheck.activate(ARtb.firebase.siteKey,!0);let auth=firebase.auth();

    // Sign Anonym
    auth.signInAnonymously().then(function(){/*begin*/
      console.log('Login Anonym..')

    "function"==typeof _dbReady&&_dbReady();

    if(ARtb.firebase.counter.enable){
    	/*read view dl, write view*/
	    for(let t=qSell(".pThmb>.iFxd[data-id], .ps.post[data-id]"),e=0;e<t.length;e++){let n=t[e],a=n.getAttribute("data-id"),l=firebase.database().ref("BlogID_"+blogId+"/"+a);l.once("value",function(t){return function(e){let n=e.exists()&&null!=e.val()._view?e.val()._view:0,a=e.exists()&&null!=e.val()._dl?e.val()._dl:0;if(t.classList.contains("ps")){let e=t.getAttribute("hide-counter");if((n>0||a>0)&&(null==e||null!=e&&"true"!=e)){let e=t.querySelector("span[dt-vw]"),l=t.querySelector("span[dt-dl]");null!=e&&(e.setAttribute("dt-vw",xAR.nwc(n)),e.innerText=xAR.nwc(n)+"x"),null!=l&&(l.setAttribute("dt-dl",xAR.nwc(a)),l.innerText=xAR.nwc(a)+"x");let i=qSel(".arWG > :last-child");if(null!=i){let t='<span data-text="'+xAR.abv(n)+'" class="wbVw">'+ARtb.firebase.counter.iconView+"</span>";i.insertAdjacentHTML("beforebegin",t)}}}else{let e=t.parentElement.parentElement.getAttribute("hide-counter");t.classList.contains("s")||null!=e&&(null==e||"true"==e)||(a>0&&t.insertAdjacentHTML("afterend",'<div class="iFxd dl"><span data-text="'+xAR.abv(a)+'">'+ARtb.firebase.counter.iconDl+"</span></div>"),n>0&&t.insertAdjacentHTML("afterend",'<div class="iFxd vw"><span data-text="'+xAR.abv(n)+'">'+ARtb.firebase.counter.iconView+"</span></div>"),addCt(t,"s"))}"true"==t.getAttribute("data-inc")&&(n+=1,l.update({_view:n}))}}(n))}

	    /*write dl*/
	    qSell(".ldApGm .cnt > .ld, .bApGm, .btnDL").forEach((l=>{l.addEventListener("click",(a=>{if(!l.classList.contains("o")){l.classList.add("o");let a=firebase.database().ref("BlogID_"+blogId+"/"+postId);a.once("value",(l=>{let e=l.exists()&&null!=l.val()._dl?l.val()._dl:0;e+=1,a.update({_dl:e})}))}}))}));
	}

	if(ARtb.firebase.clap.enable){/*CLAP*/
		if(isIt){

		if(null!=qSel(".arWG")){let htmlClap='<span class="wbClap" id="arClap">'+ARtb.firebase.clap.icon+"</span>";qSel(".arWG").insertAdjacentHTML("afterbegin",htmlClap)}
		let idps=postId||pageId;
		/*read Clap*/
		let fDb,eClp=geId("arClap");(fDb=firebase.database().ref("BlogID_"+blogId+"/"+idps)).once("value",function(a,t){return function(t){let e=t.exists()&&null!=t.val()._clap?t.val()._clap:0;e>0&&(a.setAttribute("d-val",e),a.setAttribute("data-text",xAR.abv(e)))}}(eClp));
		/*LS Clap*/
		let nmVtLS,objClpPs={};
		null!=xAR.gLS("xUID")?nmVtLS=xAR.gLS("xUID"):(xAR.sLS("xUID",xUID),nmVtLS=xUID);
		const LS_CLP_PS="Clap_"+nmVtLS,
		synClpPs=(s,P,S)=>{switch(s){case"ADD":case"UPD":xAR.gLS(LS_CLP_PS)&&(objClpPs=JSON.parse(xAR.gLS(LS_CLP_PS))),objClpPs[P]=S;break;case"DEL":delete objClpPs[P]}xAR.sLS(LS_CLP_PS,JSON.stringify(objClpPs))};
		
		/*write Clap*/geId("arClap").addEventListener("click",(function(){if(!this.classList.contains("a")){this.classList.add("a");let t,a=JSON.parse(xAR.gLS(LS_CLP_PS));if(parseInt(this.getAttribute("d-val")),(t=null!=a&&null!=a[idps]?a[idps]:0)<ARtb.firebase.clap.max){let a=firebase.database().ref("BlogID_"+blogId+"/"+idps),e=t+1,s=geId("arClap");a.once("value",(function(t){let e=t.exists()&&null!=t.val()._clap?t.val()._clap:0;e+=1,a.update({_clap:e}),s.setAttribute("d-val",e),s.setAttribute("data-text",xAR.abv(e))})),synClpPs("ADD",idps,e),toastNotif(ARtb.firebase.clap.txClp+e)}else toastNotif(ARtb.firebase.clap.txMax+t);setTimeout((function(){remCt(geId("arClap"),"a")}),1e3)}}));

		}
	}



	/*end*/
    }).catch(function(err){err.code, err.message});



  });
  });
  });
});


/*read view dl*/
if(ARtb.firebase.counter.enable)function _CvdAG(){dD=qSell(".pThmb>.iFxd[data-id], .ps.post[data-id]");for(let e=0;e<dD.length;e++){let t=firebase.database(),a=dD[e],n=a.getAttribute("data-id");t.ref("BlogID_"+blogId+"/"+n).once("value",function(e){return function(t){let a=t.exists()&&null!=t.val()._view?t.val()._view:0,n=t.exists()&&null!=t.val()._dl?t.val()._dl:0,i=e.parentElement.parentElement.getAttribute("hide-counter");e.classList.contains("s")||null!=i&&(null==i||"true"==i)||(n>0&&e.insertAdjacentHTML("afterend",'<div class="iFxd dl"><span data-text="'+xAR.abv(n)+'">'+ARtb.firebase.counter.iconDl+"</span></div>"),a>0&&e.insertAdjacentHTML("afterend",'<div class="iFxd vw"><span data-text="'+xAR.abv(a)+'">'+ARtb.firebase.counter.iconView+"</span></div>"),addCt(e,"s"))}}(a))}}


}
/*]]>*/
