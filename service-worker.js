if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const l=e=>a(e,r),b={module:{uri:r},exports:s,require:l};i[r]=Promise.all(c.map((e=>b[e]||l(e)))).then((e=>(d(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"92668f35ea728fdd0881d33e712b3514"},{url:"2023/08/10/markdown基本语法/index.html",revision:"fab1b0cbb02a190d0d7baa38fa0e378f"},{url:"2023/08/13/Month-1/index.html",revision:"81807663b3c82a65c3d896ca93af3c15"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"c0594fe3b7663ab7ab67f07ea0df3511"},{url:"2023/09/01/简记10天军训/index.html",revision:"4ac2ec94677b9941dbc940173b59f6a4"},{url:"2023/09/03/开箱/index.html",revision:"23df55dbe017b7110e353b0dc2a56707"},{url:"2023/09/05/LaTeX-从入门到日常使用/index.html",revision:"3c1329fe9bed567e5325ceceacac140d"},{url:"2023/09/09/简评《不哭不哭，痛痛飞走吧》/index.html",revision:"95783ec36ce1db595e923aa5b37c401a"},{url:"404.html",revision:"75eb4d3c1e7dc8a20f434f30bcac88bf"},{url:"about/index.html",revision:"b46a1091b1fb5ac4ec03f65f7d79e162"},{url:"archives/2023/08/index.html",revision:"7cde0fda52f0652afbada40ac91181eb"},{url:"archives/2023/09/index.html",revision:"6a37cd7ad63718b2f147f952d851415f"},{url:"archives/2023/index.html",revision:"803a794228e7fabd6264575210ff89ae"},{url:"archives/index.html",revision:"0282330b2025661f5ab0944f29592ec5"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"3ba8e0d95048097bf9701afd89d5fb29"},{url:"categories/English/index.html",revision:"b80533ac46c79f07c6ab187c4209e813"},{url:"categories/index.html",revision:"cba57f12ae7bf606550e3e3ce1240d6c"},{url:"categories/书评/index.html",revision:"2afe71fed2e84c9fe70bdbfcdd4ad854"},{url:"categories/博客/index.html",revision:"7ad3100aba1d868c1c44100076b0c5a8"},{url:"categories/日记/index.html",revision:"89ded75218f93f7c25a8c54ea63af51c"},{url:"chronicle/index.html",revision:"e35470b88b06a28c9c6e5f20fe0e5f68"},{url:"cinemas/index.html",revision:"895066b17c8216bfc11d0ae6aed332f0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"08e03a97bcd3b1d46958b3d669af18a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1294eaa844f9791f4333515f02be4e8f"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"106e292e2983fcd6df9b7c9ede031ff9"},{url:"live2dw/assets/moc/miku.2048/texture_00.png",revision:"f69191e3aa1aa64d66bef43d38bb45e8"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"23918699dd28bf1c3903f5b29147a24f"},{url:"tags/index.html",revision:"56813e159aca2daa55e3a23554cffa0f"},{url:"tags/LaTeX/index.html",revision:"115b7ca00b762c898218d1060e3bedd6"},{url:"tags/markdown/index.html",revision:"c9edd4fdc0d88bf85e6b1f59c9cfe026"},{url:"tags/note/index.html",revision:"f91d5596f78bc0074bb1103c58074fd6"},{url:"tags/private/index.html",revision:"21c9e70cd66a2629580a0c125f0dbd0b"},{url:"tags/三秋缒/index.html",revision:"ad40c48f5765ffd1e2221db01dbe9288"},{url:"tags/博客/index.html",revision:"ba5cc09d12d6f44b8a0c2a91c5cbbe6b"},{url:"tags/学习/index.html",revision:"a325b918b439d4ce25f17c5b25cb8e36"},{url:"tags/日记/index.html",revision:"bbf458aeb37241a78517728e93aeba6c"},{url:"tags/编程-设计/index.html",revision:"ab1bf17300ddbb6cec9454f90821a971"}],{})}));
//# sourceMappingURL=service-worker.js.map
