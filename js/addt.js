/*<![CDATA[*/
/*progScrollbar*/
if(null!=qSel(".toTopF")||ARtb.progScrollbar){
  ARtb.progScrollbar&&(addCt(qSel("header"),"pgs"),qSel("header").innerHTML+='<div class="hPgCnt"><div class="hPgBar"></div></div>');
  let preSc=window.pageYOffset;
  window.addEventListener("scroll",(()=>{
    let yOf=window.pageYOffset;preSc>yOf?remCt(qSel('body'),'onSb'):addCt(qSel('body'),'onSb'),preSc=yOf;
    let e;e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;
    ARtb.progScrollbar&&(qSel(".hPgCnt .hPgBar").style.width=e+"%");

    if(null!=qSel(".toTopF")){
      qSel(".toTopF .c").style.strokeDashoffset=100-e;
      let o=window.pageYOffset||document.documentElement.scrollTop,t=qSel(".toTopF");
      o>200?(addCt(qSel("header"),"ws2"),addCt(t,"vsbl")):(remCt(qSel("header"),"ws2"),remCt(t,"vsbl"));
    }   

    /* if(window.innerHeight+window.pageYOffset >= document.body.offsetHeight-100){   }else{   }*/
    
  }));
}
/*end progScrollbar*/


/*No Internet*/let n=geId("noInet");null!=n&&(window.addEventListener("offline",(()=>{remCt(n,"hidden"),toastNotif("You are <b>Offline</b>")})),window.addEventListener("online",(()=>{addCt(n,"hidden"),toastNotif("You are <b>Online</b>")})));

/*Cookie Consent*/let ckWrp=geId("ckWrp"),ckAcc=geId("ckAcc");null!=ckWrp&&(null==xAR.gC("CookiePolicy")&&addCt(ckWrp,"v"),ckAcc.onclick=()=>{navigator.cookieEnabled?(addCt(ckWrp,"a"),xAR.sC("CookiePolicy","Accepted",{secure:!0,"max-age":2592e3})):fixedNotif('<svg class="line" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line class="svgC" x1="12" x2="12" y1="8" y2="12"></line><line class="svgC" x1="12" x2="12.01" y1="16" y2="16"></line></svg> <h5>Cookie can&#039;t be set!</h5> <p>Please unblock this site from the cookie setting of your browser.</p> <a href="'+window.location.href+'">Refresh</a>')});

/*widget onIt*/
if(isIt){
null==qSel(".arWG")&&qSel(".pEnt").insertAdjacentHTML("afterend",'<div class="arWG"></div>');
  if(qSel(".arWG")!=null){
    if(null!=geId("comment")){let l="";if(alwCmn){let n="";nofCmn>0&&(n='data-text="'+xAR.abv(nofCmn)+'" '),l='<label class="wbCmn" '+n+'for="forComments">'+ic_chat+"</label>"}qSel(".arWG").innerHTML+=l}
    if(null!=qSel(".shBr")){let l="";alwShr&&(l='<label class="wbShr" for="forShare">'+ic_share+"</label>"),qSel(".arWG").innerHTML+=l}
    if(null!=qSel(".fnB")){let l='<label class="wbFsz" for="forFont">'+ic_font+"</label>";qSel(".arWG").innerHTML+=l}
    let htmlGret='<span class="wbGret a o" id="ar-Gret">'+ic_smile+"</span>";qSel(".arWG").innerHTML+=htmlGret;let welElem=geId("ar-Gret"),curHr=(new Date).getHours(),welMes=msgWel,welText="";welText=curHr<4?welMes[0]:curHr<12?welMes[1]:curHr<17?welMes[2]:curHr<19?welMes[3]:curHr<22?welMes[4]:welMes[5],welElem.setAttribute("data-text",welText);
  }
}
/*]]>*/
