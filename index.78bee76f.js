!function(){var n={"fetchСountries":function(n){return fetch("https://restcountries.com/v3.1/name/".concat(n)).then((function(n){return console.log(n.json())}))}};var t,o,e,i,u={inputText:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};u.inputText.addEventListener("input",(t=1e3,o=function(t){return n.fetchСountries(t.target.value)},i=(e||{}).atBegin,function(n,t,o){var e,i=o||{},u=i.noTrailing,r=void 0!==u&&u,c=i.noLeading,a=void 0!==c&&c,d=i.debounceMode,v=void 0===d?void 0:d,f=!1,s=0;function l(){e&&clearTimeout(e)}function y(){for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];var c=this,d=Date.now()-s;function y(){s=Date.now(),t.apply(c,i)}function m(){e=void 0}f||(a||!v||e||y(),l(),void 0===v&&d>n?a?(s=Date.now(),r||(e=setTimeout(v?m:y,n))):y():!0!==r&&(e=setTimeout(v?m:y,void 0===v?n-d:n)))}return y.cancel=function(n){var t=(n||{}).upcomingOnly,o=void 0!==t&&t;l(),f=!o},y}(t,o,{debounceMode:!1!==(void 0!==i&&i)})));u.inputText,u.countryList,u.countryInfo}();
//# sourceMappingURL=index.78bee76f.js.map
