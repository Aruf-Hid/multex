/*<![CDATA[*/
/**Related Post**/!function(){var a,e,t={numbPs:7,newTabLink:!0,relOuter:"aRel"};for(var s in rPstConfig)"undefined"!=rPstConfig[s]&&(t[s]=rPstConfig[s]);function n(a){var e=document.createElement("script");e.src=a,document.getElementsByTagName("head")[0].appendChild(e)}function l(a){var e,t,s=a.length;if(0===s)return!1;for(;--s;)e=Math.floor(Math.random()*(s+1)),t=a[s],a[s]=a[e],a[e]=t;return a}if(a=null==autoRelatedPost.numbPs?t.numbPs:autoRelatedPost.numbPs,e=autoRelatedPost.newTabLink?' target="_blank"':"","object"==typeof psLabels&&0<psLabels.length)var r="/-/"+l(psLabels)[0].replace("&amp;","%26");else r="";autoRelatedPosts=function(a){var s,n,r,o,i,p="",c=getid(t.relOuter),d=l(a.feed.entry);if(psLabels.includes("_Apps")||psLabels.includes("_Games"))var u='<ol class="autoRpst">';else u='<ol class="rPst-ul autoRpst">';p+=u;for(var f=0;f<d.length;f++)for(var m=0,h=d[f].link.length;m<h;m++)d[f].link[m].href==t.postUrl&&d.splice(f,1);if(0<d.length){for(var g=0;g<d.length;g++){if(n=d[g].title.$t,r="content"in d[g]&&(r=d[g].content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g))||"",o="content"in d[g]&&(o=d[g].content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g))||"",i="content"in d[g]&&(i=d[g].content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g))||"",""!=o)var v=o[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g);else v="";if(""!=i)var b=i[0].match(/(?<=<span.* ?class="apMod".*?>)(.*?)(?=<\/span>)/g);else b="";if(""!=v)if(""!=b)var P=' <span class="v">v'+v+'</span> <span class="m">('+b+")</span>";else P=' <span class="v">v'+v+"</span>";else P="";var R=0;for(h=d[g].link.length;R<h;R++)s="alternate"==d[g].link[R].rel?d[g].link[R].href:"#";var k=n;""!==r&&(n=r.toString().replace(/<(.|\n)*?>/,"")),p+="<li><a"+e+' aria-label="'+k+'" href="'+s+'"> <div class="itmTtl"><span>'+n+"</span>"+P+"</div></a></li>"}c.innerHTML=p+="</ol>"}else getid("aRel").parentNode.remove()},autoRandomIndex=function(e){var s=e.feed.openSearch$totalResults.$t-7,l=1<s?1+Math.floor(Math.random()*s):1;n(t.homePgUrl.replace(/\/$/,"")+"/feeds/posts/default"+r+"?alt=json-in-script&orderby=updated&start-index="+l+"&max-results="+a+"&callback=autoRelatedPosts")},n(t.homePgUrl.replace(/\/$/,"")+"/feeds/posts/summary"+r+"?alt=json-in-script&orderby=updated&max-results=0&callback=autoRandomIndex")}();
/*]]>*/