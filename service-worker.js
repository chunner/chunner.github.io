if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>a(e,r),f={module:{uri:r},exports:c,require:l};i[r]=Promise.all(d.map((e=>f[e]||l(e)))).then((e=>(s(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"5d51903d8bdbbe9f73d051f4950ad1ea"},{url:"2023/08/10/markdown基本语法/index.html",revision:"f08c9117a7b637a3ee445d57dc3ed704"},{url:"2023/08/13/Month-1/index.html",revision:"052c19235bc617a518c212264684746d"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"2de65422ed2b04bc82384effde045d4c"},{url:"2023/09/01/简记10天军训/index.html",revision:"a084855e362f31df600e52e0558a604d"},{url:"2023/09/03/开箱/index.html",revision:"cce190c6b3a11567bfe45c63987d2340"},{url:"2023/09/05/LaTeX-从入门到日常使用/index.html",revision:"15c8d27c48c49384cb58e77ab639051b"},{url:"404.html",revision:"a48086c126cd300f7f2e0e8076cafc3e"},{url:"about/index.html",revision:"ad15e9c3d73674fe2090b6c6a84820e1"},{url:"archives/2023/08/index.html",revision:"0878c5f62ea14cb9471890494e3076dc"},{url:"archives/2023/09/index.html",revision:"9439a14fab3eba5a95e55eefdf1ff592"},{url:"archives/2023/index.html",revision:"db9fd114b0026a17012ffde2493fa7eb"},{url:"archives/index.html",revision:"e9d2455d8e167efe610a12e31b29c63d"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"bd8e77d47bc00426d6ae2587b9190830"},{url:"categories/English/index.html",revision:"9f4c3487ef86fd69969090fe22c6f444"},{url:"categories/index.html",revision:"47b30b21030af66164011acc5052cf7b"},{url:"categories/博客/index.html",revision:"26cedcabae04393d285cba50afd23207"},{url:"categories/日记/index.html",revision:"383a321b3f06b1c58a939146f4c9b357"},{url:"chronicle/index.html",revision:"64d572e266fdb1ce71ef283c7bf7f9eb"},{url:"cinemas/index.html",revision:"6fe159ff8a8c6ca8be4d7e972556a176"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"08e03a97bcd3b1d46958b3d669af18a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"081adb214405b38d043b5af5ef2c9785"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"6a1664da2828453820b176effaf05e7b"},{url:"live2dw/assets/moc/miku.2048/texture_00.png",revision:"f69191e3aa1aa64d66bef43d38bb45e8"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"a351848e21ec5738e4163b303086af1f"},{url:"tags/index.html",revision:"9d98f3af36867c1e21a83665e88db4a4"},{url:"tags/LaTeX/index.html",revision:"0ead4be279ee901fcf5ca820bd43933b"},{url:"tags/markdown/index.html",revision:"bd00611f7b08851649077fd22822b955"},{url:"tags/note/index.html",revision:"5d1454b16491b30ebb2d711c818a1343"},{url:"tags/private/index.html",revision:"09ac003f56162e4bdf983abfb026eda8"},{url:"tags/博客/index.html",revision:"f293b206355d73c7d7ae82692cbcf61a"},{url:"tags/学习/index.html",revision:"70da767f469ad44a0b75152c35b7c206"},{url:"tags/日记/index.html",revision:"95f39b3302de1c25b89a8b6d2ff6dc55"},{url:"tags/编程-设计/index.html",revision:"6582a5292dfce7b9d9178b8f7d9e5d8f"}],{})}));
//# sourceMappingURL=service-worker.js.map
