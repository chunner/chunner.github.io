if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const l=e=>d(e,s),n={module:{uri:s},exports:c,require:l};i[s]=Promise.all(a.map((e=>n[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"9695548ced3e55148ef32b1c5bd6cb34"},{url:"2023/08/10/markdown基本语法/index.html",revision:"fbd682e3fc44a1c27e3f889cadf24e35"},{url:"2023/08/13/Month-1/index.html",revision:"5060dcb228dd3048aa83373dce7d8595"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"d0949abd7739698a5a048f3407730b26"},{url:"2023/09/01/简记10天军训/index.html",revision:"344bf2312fc69258e47a171cab2e46c8"},{url:"2023/09/03/开箱/index.html",revision:"7641bd6684fb5426addec79e77ae366c"},{url:"2023/09/05/LaTeX-从入门到日常使用/index.html",revision:"f402552c46ef80f38294e3839968463a"},{url:"2023/09/09/简评《不哭不哭，痛痛飞走吧》/index.html",revision:"fcf721772ad3e5f30ed8cc16c712878b"},{url:"404.html",revision:"5a5debebcef733369f68e96969857640"},{url:"about/index.html",revision:"ebf581f589b1fd35f2966a7d34a69a1f"},{url:"archives/2023/08/index.html",revision:"281793cf4228898d44d0c2e499059d4c"},{url:"archives/2023/09/index.html",revision:"c95263c8e35a919737bf42cdf7201291"},{url:"archives/2023/index.html",revision:"a588d88589b8753afbfdb97f4ff943c1"},{url:"archives/index.html",revision:"138e47fe95ef5fbb512ff5fad23ae828"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"a1a769c5a61ef3eb5289e697170d84a2"},{url:"categories/English/index.html",revision:"cb97e3dc448ae731bcbd9e20c9a96426"},{url:"categories/index.html",revision:"fe16d39785b5b25133c8711f291cfd10"},{url:"categories/书评/index.html",revision:"b0851398ac71b3badae6ea8607d5adb5"},{url:"categories/博客/index.html",revision:"f990284b3c0d89c0628abce166d6ed43"},{url:"categories/日记/index.html",revision:"763e3386863c94e5f8918c3de098f3e5"},{url:"chronicle/index.html",revision:"566697c9ab815b456dc32266c54b6bd9"},{url:"cinemas/index.html",revision:"de1300e34119f81a66ab5b9d5060a3b4"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"08e03a97bcd3b1d46958b3d669af18a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"d239efae2a1bd305b660063ef0984ef7"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"629e8ca2159b28277a12dc476e5f072a"},{url:"live2dw/assets/moc/miku.2048/texture_00.png",revision:"f69191e3aa1aa64d66bef43d38bb45e8"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"c086378b87929323cfc6ec483db16c25"},{url:"tags/index.html",revision:"5729fcf3e27dc761a8b2d67399a837c3"},{url:"tags/LaTeX/index.html",revision:"1680cb254208ba01b04ef2645af03976"},{url:"tags/markdown/index.html",revision:"ae395e776ddb809616a40877b4b74944"},{url:"tags/note/index.html",revision:"da3505c7d4b0ad32e35611211d5d124f"},{url:"tags/private/index.html",revision:"3dec20200bf9bd407b1d71be8df8eae4"},{url:"tags/三秋缒/index.html",revision:"a62b3ed16729b034800a9b63648baf41"},{url:"tags/博客/index.html",revision:"6ade28614029fa88ef549dd937de4392"},{url:"tags/学习/index.html",revision:"e8b349a4d77d817beea0904d15dd986b"},{url:"tags/日记/index.html",revision:"8cbba805362cb3d18370c6bd9b8a1850"},{url:"tags/编程-设计/index.html",revision:"2588575927e6ec850966d9bb68c2435b"}],{})}));
//# sourceMappingURL=service-worker.js.map
