if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const l=e=>s(e,d),n={module:{uri:d},exports:c,require:l};i[d]=Promise.all(a.map((e=>n[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"8d3becd75cc3d7d84eed70ceeb495d47"},{url:"2023/08/10/markdown基本语法/index.html",revision:"1e536ccfebbbbd107bc384e14c6a24a8"},{url:"2023/08/13/Month-1/index.html",revision:"f299721a4955234050296fc42e2300d0"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"772541cdb5ea3030364653c5349025bc"},{url:"2023/09/01/简记10天军训/index.html",revision:"06623c0d2b08b9913dffe86f28363aee"},{url:"404.html",revision:"0e3472182bfd890750026e94bf3250e9"},{url:"about/index.html",revision:"8bd2a4f9def20f53c3338612c8ea5037"},{url:"archives/2023/08/index.html",revision:"f3e628fa7b31c3b7c5825a9aabf531a0"},{url:"archives/2023/09/index.html",revision:"5af36329b1bf7b65990a988dbb302df0"},{url:"archives/2023/index.html",revision:"268826c152dc2f6815671bb7f14692bb"},{url:"archives/index.html",revision:"09d053d38c91c768530aa2d7284fdc8a"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"df15354220fafad6f392d52e1fe0ed34"},{url:"categories/English/index.html",revision:"876e092b9db9569bb5b88634db242c34"},{url:"categories/index.html",revision:"848ae124d1ecbcedebf6236cf1fa0450"},{url:"categories/博客/index.html",revision:"39c2015dee7eb237f25190d55941941a"},{url:"categories/日记/index.html",revision:"312c1f70c5b2f167d34036ab64133c02"},{url:"cinemas/index.html",revision:"8f1d50f056dad8e7f04ae267fc90560a"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"92c5fca420c20a4bb7a6087eab9775db"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"bef69cbee19935e1a02f57bd5c99090a"},{url:"music/index.html",revision:"fe0e1cecfccad99bf698185a2958c8ad"},{url:"tags/index.html",revision:"9e8d381e752fed0b74b6616548c55a2e"},{url:"tags/markdown/index.html",revision:"4b8f266cb28d94a4998e7ae38c1feb2c"},{url:"tags/博客/index.html",revision:"76663cbcb204917e31681c3c0eaa2955"},{url:"tags/学习/index.html",revision:"e67db3853ece2265a64d7bf895e24df7"},{url:"tags/日记/index.html",revision:"e6d5eb04363b5b7ec6331a9e3ab7882c"},{url:"tags/编程-设计/index.html",revision:"92b644ab428c3f20a183a109494ee8e6"}],{})}));
//# sourceMappingURL=service-worker.js.map
