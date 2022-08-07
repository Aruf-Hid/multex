/*<![CDATA[*/
/* autoRelatedPost */
! function() {

  var xNumbPs, xTabLnk, t = {
    numbPs: 5,
    newTabLink: !0,
    relOuter: "aRel"
  };

  for (var s in rPstConfig) "undefined" != rPstConfig[s] && (t[s] = rPstConfig[s]);

  function n(a) {
    var e = document.createElement("script");
    e.src = a, document.getElementsByTagName("head")[0].appendChild(e)
  }

  function l(a) {
    var e, t, s = a.length;
    if (0 === s) return !1;
    for (; --s;) e = Math.floor(Math.random() * (s + 1)), t = a[s], a[s] = a[e], a[e] = t;
    return a
  }

  if (xNumbPs = null == autoRelatedPost.numbPs ? t.numbPs : autoRelatedPost.numbPs, xTabLnk = autoRelatedPost.newTabLink ? ' target="_blank"' : "", "object" == typeof psLabels && 0 < psLabels.length) var rpLabel = "/-/" + l(psLabels)[0].replace("&amp;", "%26");
  else rpLabel = "";

  autoRelatedPosts = function(a) {
    var p = "",
      c = getid(t.relOuter),
      d = l(a.feed.entry);
    if (psLabels.includes("_Apps") || psLabels.includes("_Games")) var u = '<ol class="autoRpst nApGm">';
    else u = '<ol class="autoRpst">';
    p += u;
    for (var f = 0; f < d.length; f++)
      for (var m = 0, h = d[f].link.length; m < h; m++) d[f].link[m].href == t.postUrl && d.splice(f, 1);
    
    if (0 < d.length) {
      for (var i = 0; i < xNumbPs && i < d.length; i++) {
        var di = d[i],
        psTtl = di.title.$t,
        psTitle = psTtl,
        psLink,
        txApk = "APK",
        txMod = "MOD",
        nameApp,
        verApp,
        modApp,
        appVM="";

        psLink = gVa(di.link, "rel", "alternate", "href");
        nameApp = gVa(di.link, "href", "name.app", "type");
        verApp = gVa(di.link, "href", "ver.app", "type");
        modApp = gVa(di.link, "href", "mod.app", "type");

        if(nameApp!=""){
          psTitle=nameApp;
        }

        if(verApp!=""&&modApp!=""){
          appVM=' <span class="v">v' + verApp + '</span> <span class="m">(' + modApp + ")</span>";
        }else if(verApp!=""&&modApp==""){
          appVM=' <span class="v">v' + verApp + '</span>';
        }

        p += "<li><a" + xTabLnk + ' aria-label="' + psTtl + '" href="' + psLink + '"> <div class="itmTtl"><span>' + psTitle + "</span>" + appVM + "</div></a></li>"

      }
      c.innerHTML = p += "</ol>"
    }

  }, 


  autoRandomIndex = function(s) {
    var maxResults = xNumbPs + 1,
    totalResults = s.feed.openSearch$totalResults.$t,
    startIndex = totalResults > maxResults ? 1 + Math.floor(Math.random() * (totalResults - xNumbPs)) : 1;
    // console.log('startIndex : '+startIndex);
    if(totalResults > 1){
      n(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=updated&start-index=" + startIndex + "&max-results=" + maxResults + "&callback=autoRelatedPosts");
    }else {
      // console.log('Related Post Tidak Ada');
      getid(t.relOuter).parentNode.remove();
    }
  },

  n(t.homePgUrl.replace(/\/$/, "") + "/feeds/posts/summary" + rpLabel + "?alt=json-in-script&orderby=updated&max-results=0&callback=autoRandomIndex");

}();

/*]]>*/
