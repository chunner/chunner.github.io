if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>d(e,r),f={module:{uri:r},exports:c,require:l};i[r]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(s(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"8d4482dd56c4029b98c9d737781f4aca"},{url:"2023/08/10/markdown基本语法/index.html",revision:"8cc95d2d60864373f8618bead746524d"},{url:"2023/08/13/Month-1/index.html",revision:"5bdd6d34d383cc2ec750a475d047ded6"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"b1946f36de1aacb13e56dfc283bc4cbc"},{url:"2023/09/01/简记10天军训/index.html",revision:"79594bbc25fbffd0dd63a3a84e91f739"},{url:"2023/09/03/开箱/index.html",revision:"217dbcb233ebe9d483670c16bd2c7662"},{url:"404.html",revision:"5173f799e5bc39bdb0bfc32129138528"},{url:"about/index.html",revision:"6b645c60e6ab667d00911ebee66518e2"},{url:"archives/2023/08/index.html",revision:"ae06e075bb42a77274b3615c01f5d075"},{url:"archives/2023/09/index.html",revision:"9c75c7ecf09d9f2903f45bd63f1b28d0"},{url:"archives/2023/index.html",revision:"e56502ef5b48ed48b09ead2042f01daa"},{url:"archives/index.html",revision:"399a5df05a7c31aab58e318977d2b9ff"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"2506470c00ef7e4ab3349e20ac54f5a9"},{url:"categories/English/index.html",revision:"1128578e657339bb6e100fbfbedde636"},{url:"categories/index.html",revision:"2bafe4e2cc9f3680b4228a104117cc89"},{url:"categories/博客/index.html",revision:"883e012a2ae35bb92d71ca91ed1ce933"},{url:"categories/日记/index.html",revision:"42241a45ee5ad2ee57ee4352351e672d"},{url:"chronicle/index.html",revision:"1427b2d0c0c1cda38175edc870c6c06a"},{url:"cinemas/index.html",revision:"fa2cca29cf8c0937ffaa4ae02226dddb"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"08e03a97bcd3b1d46958b3d669af18a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f1cb538706947fc926b190c14b8fa726"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"f2ff11b0432aed1e60a8aaa8a2c3271e"},{url:"live2dw/assets/moc/miku.2048/texture_00.png",revision:"f69191e3aa1aa64d66bef43d38bb45e8"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"03b881c95cead5df104d7d46c951d534"},{url:"tags/index.html",revision:"84df5d8886b830946c0d2e5d2344653f"},{url:"tags/markdown/index.html",revision:"337f0da9e7b6f473fa1ae166e9107d66"},{url:"tags/private/index.html",revision:"d4ea4afe1044a64bbd4ebfd29f614c05"},{url:"tags/博客/index.html",revision:"ef89004d29ffb9e6042279a95bb3bec5"},{url:"tags/学习/index.html",revision:"856d1175b6bf3ddd395c672e7f6a2bd0"},{url:"tags/日记/index.html",revision:"364b9211d1f88deaf5fae3e5f29db878"},{url:"tags/编程-设计/index.html",revision:"e0e0bbf41ec2dfad51dcfce239dbe81f"}],{})}));
//# sourceMappingURL=service-worker.js.map
