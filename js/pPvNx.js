/*<![CDATA[*/
/**Prev Next Post**/
! function() {

  var xTabLnk, t = {
    newTabLink: !0,
    relOuter: "pPvNx"
  };

  for (var s in rPstConfig) "undefined" != rPstConfig[s] && (t[s] = rPstConfig[s]);

  function n(a) {
    var e = document.createElement("script");
    e.src = a, document.getElementsByTagName("head")[0].appendChild(e)
  }

  if (xTabLnk = autoPrevNext.newTabLink ? ' target="_blank"' : "", "object" == typeof psLabels && 0 < psLabels.length) var rpLabel = "/-/" + xAR.rdm(psLabels).replace("&amp;", "%26");
  else rpLabel = "";


  arAutoPrevNext = function(a) {

    var p = "",
      c = geId(t.relOuter),
      d = a.feed.entry.reverse();

    if (psLabels.includes("_Apps") || psLabels.includes("_Games")) var u = '<div class="pPvNx nApGm">';
    else u = '<div class="pPvNx">';

    p += u;

    if (2 < d.length) {
    for (var f = 0; f < d.length; f++)
      for (var m = 0, h = d[f].link.length; m < h; m++) d[f].link[m].href == t.postUrl && d.splice(f, 1);
    }
    
    if (0 < d.length) {
      for (var i = 0; i < d.length; i++) {
        var di = d[i],
        psTtl = di.title.$t,
        psTitle = psTtl,
        psLink,
        nameApp,
        verApp,
        modApp,
        appVM="",
        xVh="";

        psLink = gVa(di.link, "rel", "alternate", "href");
        nameApp = gVa(di.link, "href", "name.app", "type");
        verApp = gVa(di.link, "href", "ver.app", "type");
        modApp = gVa(di.link, "href", "mod.app", "type");

        if(nameApp!=""){
          psTitle=nameApp;
        }

        if(verApp!=""&&modApp!=""){
          appVM=' v' + verApp + ' (' + modApp + ")";
        }else if(verApp!=""&&modApp==""){
          appVM=' v' + verApp;
        }

        if(psLink==t.postUrl){
          xVh = ' class="vh"';
        }

        if(autoPrevNext.titleLength!="auto" && psTitle.length > autoPrevNext.titleLength){
          psTitle = psTitle.substring(0, autoPrevNext.titleLength) + "&hellip;";
        }

        p += '<a'+ xVh +' href="' + psLink + '" ' + xTabLnk + ' data-text="' + psTitle + appVM + '"></a>'

      }
      c.innerHTML = p += "</div>"
    }

  }, 


  autoPrevNextIndex = function(s) {

    var pEntry = s.feed.entry;
    var totalResults = s.feed.openSearch$totalResults.$t;

    if(totalResults>1){

      for (var i = 0; i < pEntry.length; i++) {
        var xCek="";

        var pLink = pEntry[i].link;

          for (var ii = 0; ii < pLink.length; ii++) {
            if(pLink[ii].rel == "alternate"){

              if(pLink[ii].href == t.postUrl){
                xCek="OK";

                if(i == 0){
                  n(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=published&start-index=1&max-results=2&callback=arAutoPrevNext");
                }else{
                  n(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=published&start-index=" + i + "&max-results=3&callback=arAutoPrevNext");
                }

                break;
              }

            }
          }

        if(xCek!=""){break}

      }

    }else{
      geId(t.relOuter).remove();
    }

  },

  n(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=published&callback=autoPrevNextIndex");

}();

/*]]>*/
