if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const l=e=>a(e,s),f={module:{uri:s},exports:r,require:l};i[s]=Promise.all(d.map((e=>f[e]||l(e)))).then((e=>(c(...e),r)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"f1ab2deada0c8e6dbe7d1521a1df9791"},{url:"2023/08/10/markdown基本语法/index.html",revision:"83271c52457fb3ac4fdad16f42762c7d"},{url:"2023/08/13/Month-1/index.html",revision:"58abd568bfb5c85e38187b4bd28cebcb"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"f62dbeb2da6bdd2de24be14c457ea3fa"},{url:"2023/09/01/简记10天军训/index.html",revision:"a91b65a47e51e3ade79db9fe51eef258"},{url:"404.html",revision:"bba81f08e1ed505d54c963a6ba9076ec"},{url:"about/index.html",revision:"d7130ac3a1ebc997a4aa4322d1e5491b"},{url:"archives/2023/08/index.html",revision:"194efa4ba0c4585b4037f4ac44198e64"},{url:"archives/2023/09/index.html",revision:"936f0adec0183546cbeb28fc8cdab44b"},{url:"archives/2023/index.html",revision:"1f1d9ca084404595f6fd20fc2d9d95de"},{url:"archives/index.html",revision:"de3c4a6643d3af386923c10a8a56845f"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"5126d8eaa9b953a8585157f0cc5c1869"},{url:"categories/English/index.html",revision:"5b4f0ad178d0f1ad440a329c9c8ecf0b"},{url:"categories/index.html",revision:"2b861ed1f3f93d4bd81bca3df83ea3c2"},{url:"categories/博客/index.html",revision:"c1c8766cdbaa0f646e71f13f2bdac401"},{url:"categories/日记/index.html",revision:"8ce6943cb135bca4dea35eb4e1a30432"},{url:"cinemas/index.html",revision:"fb37a4b467e1223e14825b8275455c39"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7755cebe9ceb710bd16116a46d0ac45b"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"e8b29f25f198cc21a44afc17b55819e5"},{url:"music/index.html",revision:"39cb8476444c8b916cd5882dff5c1685"},{url:"tags/index.html",revision:"db65163eac4938f226719d78054932c9"},{url:"tags/markdown/index.html",revision:"b10ef3a5b1165fa353ff82002866c193"},{url:"tags/博客/index.html",revision:"dca3f8cb6b164d43e54fcc2586d0be8c"},{url:"tags/学习/index.html",revision:"73b5643399ee529a8f7abf5158841878"},{url:"tags/日记/index.html",revision:"3a34c86eb55e33bd58126a5c98dff4f1"},{url:"tags/编程-设计/index.html",revision:"393f3d302f7b13c1b20771cc05b13d0c"}],{})}));
//# sourceMappingURL=service-worker.js.map
