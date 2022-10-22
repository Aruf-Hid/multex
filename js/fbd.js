/*<![CDATA[*/
if(xAo){
ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js", "fb-ap", !0, function() {
  ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-app-check.js", "fb-apc", !0, function() {
  ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js", "fb-auth", !0, function() {
  ldJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js", "fb-db", !0, function() {

    firebase.initializeApp({
    	apiKey: ARtb.firebase.key,
    	databaseURL:ARtb.firebase.db
    });

    // apc-ARUEF
    // 768CAC86-5AA3-4658-9E36-E72FC95C50EC
    const appCheck = firebase.appCheck();
    appCheck.activate("6Ld6vJ8iAAAAAMPYRjWsWfraGM6Xw2XVvK8DwfRg", true);

    var auth = firebase.auth();

    // Sign Anonym
    auth.signInAnonymously().then(function() {
      console.log('Login Anonym..')

    "function"==typeof _dbReady&&_dbReady();


    if(ARtb.firebase.counter.enable){
    	/*read view dl, write view*/
	    for (var dD = qSell(".pThmb>.iFxd[data-id], .ps.post[data-id]"), dB = firebase.database(), n = 0; n < dD.length; n++) {
	    	var i = dD[n],
	    		dC = i.getAttribute("data-id");
	    	(dC = dB.ref("BlogID_" + blogId + "/" + dC)).once("value", function(a, d) {
	    		return function(i) {
	    			var n = i.exists() && null != i.val()._view ? i.val()._view : 0,
	    				s = i.exists() && null != i.val()._dl ? i.val()._dl : 0;

	    			if(a.classList.contains("ps")){
	    				var hC = a.getAttribute("hide-counter");

	    				if((n > 0 || s > 0) && (hC==null || (hC!=null && hC!="true"))){
	    					var eVw = a.querySelector("span[dt-vw]");
	    					var eDl = a.querySelector("span[dt-dl]");

	    					if(eVw!=null){
	    						eVw.setAttribute("dt-vw", xAR.nwc(n));
	    						eVw.innerText = xAR.nwc(n) + "x";
	    					}

	    					if(eDl!=null){
	    						eDl.setAttribute("dt-dl", xAR.nwc(s));
	    						eDl.innerText = xAR.nwc(s) + "x";
	    					}

	    					var lWb = qSel(".arWG > :last-child");
	    					if(lWb!=null){
	    						var arVw = '<span data-text="'+ xAR.abv(n) +'" class="wbVw">' + ARtb.firebase.counter.iconView + '</span>';
	    						lWb.insertAdjacentHTML("beforebegin", arVw);
	    					}

	    				}

	    			}else{
	    				var hC = a.parentElement.parentElement.getAttribute("hide-counter");
	    				
	    				if(!a.classList.contains("s") && (hC==null || (hC!=null && hC!="true")) ){
	    					
	    					if(s > 0){
			    				a.insertAdjacentHTML("afterend", '<div class="iFxd dl"><span data-text="' + xAR.abv(s) + '">' + ARtb.firebase.counter.iconDl + "</span></div>");
	    					}

	    					if(n > 0){
								a.insertAdjacentHTML("afterend", '<div class="iFxd vw"><span data-text="' + xAR.abv(n) + '">' + ARtb.firebase.counter.iconView + "</span></div>");
	    					}	    	

							addCt(a, "s")

	    				}

	    			}

	    			"true" == a.getAttribute("data-inc") && (n += 1, d.update({
	    				_view: n
	    			}))

	    		}
	    	}(i, dC))
	    }



	    /*write dl*/
	    qSell(".ldApGm .cnt > .ld, .bApGm, .btnDL").forEach((a=>{a.addEventListener("click",(l=>{if(!a.classList.contains("o")){a.classList.add("o");var s=firebase.database().ref("BlogID_"+blogId+"/"+postId);s.once("value",(a=>{var l=a.exists()&&null!=a.val()._dl?a.val()._dl:0;l+=1,s.update({_dl:l})}))}}))}));
	}

	if(ARtb.firebase.clap.enable){/*CLAP*/
		if(isIt){
		if(null!=qSel(".arWG")){var htmlClap='<span class="wbClap" id="arClap">'+ARtb.firebase.clap.icon+"</span>";qSel(".arWG").insertAdjacentHTML("afterbegin",htmlClap)}
		if(postId)var idps=postId;else idps=pageId;
		/*read Clap*/
		var fDb,eClp=geId("arClap");(fDb=firebase.database().ref("BlogID_"+blogId+"/"+idps)).once("value",function(a,t){return function(t){var e=t.exists()&&null!=t.val()._clap?t.val()._clap:0;e>0&&(a.setAttribute("d-val",e),a.setAttribute("data-text",xAR.abv(e)))}}(eClp));
		/*LS Clap*/
		if(null!=xAR.gLS("xUID"))var nmVtLS=xAR.gLS("xUID");else{xAR.sLS("xUID",xUID);nmVtLS=xUID}
		const LS_CLP_PS="Vote_"+nmVtLS;let objClpPs={},giClpPs=xAR.gLS(LS_CLP_PS);
		function synClpPs(s,P,S){switch(s){case"ADD":case"UPD":xAR.gLS(LS_CLP_PS)&&(objClpPs=JSON.parse(xAR.gLS(LS_CLP_PS))),objClpPs[P]=S;break;case"DEL":delete objClpPs[P]}xAR.sLS(LS_CLP_PS,JSON.stringify(objClpPs))}
		/*write Clap*/
		geId("arClap").addEventListener("click",(function(){if(!this.classList.contains("a")){this.classList.add("a");var t,a=JSON.parse(xAR.gLS(LS_CLP_PS));parseInt(this.getAttribute("d-val"));if((t=null!=a&&null!=a[idps]?a[idps]:0)<ARtb.firebase.clap.max){var e,i=t+1,s=geId("arClap");(e=firebase.database().ref("BlogID_"+blogId+"/"+idps)).once("value",(l=s,d=e,function(t){var a=t.exists()&&null!=t.val()._clap?t.val()._clap:0;a+=1,d.update({_clap:a}),l.setAttribute("d-val",a),l.setAttribute("data-text",xAR.abv(a))})),synClpPs("ADD",idps,i),toastNotif(ARtb.firebase.clap.txClp+i)}else toastNotif(ARtb.firebase.clap.txMax+t);setTimeout((function(){remCt(geId("arClap"),"a")}),1e3)}var l,d}));
		}
	}




    }).catch(function(err) {
      err.code, 
      err.message
    });



  });
  });
  });
});

/*read view dl*/
if (ARtb.firebase.counter.enable) {
	function _CvdAG() {
		dD = qSell(".pThmb>.iFxd[data-id], .ps.post[data-id]");
		for (var a = firebase.database(), e = 0; e < dD.length; e++) {
			var t = dD[e],
				i = t.getAttribute("data-id");
			(i = a.ref("BlogID_" + blogId + "/" + i)).once("value", function(a, e) {
				return function(e) {
					var t = e.exists() && null != e.val()._view ? e.val()._view : 0,
						i = e.exists() && null != e.val()._dl ? e.val()._dl : 0;
					
					var hC = a.parentElement.parentElement.getAttribute("hide-counter");
					
					if(!a.classList.contains("s") && (hC==null || (hC!=null && hC!="true")) ){
						i > 0 && a.insertAdjacentHTML("afterend", '<div class="iFxd dl"><span data-text="' + xAR.abv(i) + '">' + ARtb.firebase.counter.iconDl + "</span></div>");
						t > 0 && a.insertAdjacentHTML("afterend", '<div class="iFxd vw"><span data-text="' + xAR.abv(t) + '">' + ARtb.firebase.counter.iconView + "</span></div>");
						addCt(a, "s")
					}


				}
			}(t))
		}
	}	
}




}
/*]]>*/
