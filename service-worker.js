if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const f=e=>d(e,a),l={module:{uri:a},exports:r,require:f};i[a]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(s(...e),r)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"dceae7c16705d0ba40b17fdca5f2c471"},{url:"2023/08/10/markdown基本语法/index.html",revision:"e284aac3d63eb0bafcfbd629e52e85a3"},{url:"2023/08/13/Month-1/index.html",revision:"ea45384b233921010051bb003c0c25db"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"209912c5d16fee5d75261c2ecffdb1ff"},{url:"404.html",revision:"c0f4b5c1c7c4fd552535a0bf0a08984b"},{url:"about/index.html",revision:"fc6f957e09c801fc33b46b5d493161c7"},{url:"archives/2023/08/index.html",revision:"0e9a70f02855a7479f7069bbda5a12ed"},{url:"archives/2023/index.html",revision:"bc19522e0bd3d6c212d4ea91c1a175dd"},{url:"archives/index.html",revision:"ddd80db5d17efddcaa7821cdd1f5448c"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"cceccc1ee6039aa28f35a6a7e69c7e88"},{url:"categories/English/index.html",revision:"397fc136c27a4b3b82f518649002d9a3"},{url:"categories/index.html",revision:"84002280932c11cf0eb3958fc82a5182"},{url:"categories/博客/index.html",revision:"259e4d5b463c4e9b4f6dcfb1e08cf89f"},{url:"cinemas/index.html",revision:"1916e8156b13a53174159b2ae1e0bc5d"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"3ba8cfa31f4e8f480a3c8e23f2adb0f4"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"801c033b4d79cfc92f1417d9d15d3659"},{url:"music/index.html",revision:"8031f6236864c86f2d50f98c07792322"},{url:"tags/index.html",revision:"8cd7294447a5e1617f6de2d1acb5ac4b"},{url:"tags/markdown/index.html",revision:"f5d6681bbc800dd0a30b0bb1c517f1e1"},{url:"tags/博客/index.html",revision:"536977c3cf4002c83ed253601b7aa025"},{url:"tags/学习/index.html",revision:"f3542e971e4ab284566d9573ff9fbf55"},{url:"tags/编程-设计/index.html",revision:"926824ded3ffd0d77f114c8df8398704"}],{})}));
//# sourceMappingURL=service-worker.js.map
