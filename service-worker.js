if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const l=e=>d(e,c),f={module:{uri:c},exports:a,require:l};i[c]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(r(...e),a)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"8d3becd75cc3d7d84eed70ceeb495d47"},{url:"2023/08/10/markdown基本语法/index.html",revision:"1e536ccfebbbbd107bc384e14c6a24a8"},{url:"2023/08/13/Month-1/index.html",revision:"f299721a4955234050296fc42e2300d0"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"772541cdb5ea3030364653c5349025bc"},{url:"2023/09/01/简记10天军训/index.html",revision:"547b7bfc5ed5d8b3b2a81edf11d906c5"},{url:"404.html",revision:"d1d8db6ec5d7d1ec29dc60ff72d975c5"},{url:"about/index.html",revision:"10388f3561778bcc21d07ac7eddf4ebf"},{url:"archives/2023/08/index.html",revision:"914ef07b8d42881014bf51629c2bbb47"},{url:"archives/2023/09/index.html",revision:"7189b4079a84f39196730fe60e6ed312"},{url:"archives/2023/index.html",revision:"c44742925babca8185d72322b65ff2bc"},{url:"archives/index.html",revision:"b7dbb3626cdb90fc3d94a9fdf5afb17b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"fad334efd3a4df5f7221e89515148091"},{url:"categories/English/index.html",revision:"b48ed5f9f3a64fde5249d7b9c4b2db78"},{url:"categories/index.html",revision:"655a74aba320d5d13d353ba65978bb04"},{url:"categories/博客/index.html",revision:"9eda563ce1a81beee6558e96b11462ca"},{url:"categories/日记/index.html",revision:"3cad75d20edac0b048fba4abd4a15ef4"},{url:"cinemas/index.html",revision:"67855531c31772a1135539c1973c60d3"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"937f3ca6240b8a826843c2e4ddbe5337"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"a4b6b9e932b0bc7d4e2a31d27828b4ae"},{url:"music/index.html",revision:"68665967f0ca31ef590f1ec231c7d3c1"},{url:"tags/index.html",revision:"1700ccaf4eb337858fa5c13f0f37e3f9"},{url:"tags/markdown/index.html",revision:"63d7dc237327fa64d38fe94d41e81b4f"},{url:"tags/博客/index.html",revision:"8adf602c6d48132e35e61e6e32c47b66"},{url:"tags/学习/index.html",revision:"62139bcdb4ce355734145c1ef8f83fb3"},{url:"tags/日记/index.html",revision:"348c66d6be4cd47fe64eaaf759f28c41"},{url:"tags/编程-设计/index.html",revision:"07ac7e17f206351d4fa089d3a480f2f7"}],{})}));
//# sourceMappingURL=service-worker.js.map
