if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>a(e,r),n={module:{uri:r},exports:c,require:l};i[r]=Promise.all(d.map((e=>n[e]||l(e)))).then((e=>(s(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客技巧/index.html",revision:"009247329e3be3b6199480214c0ef2ac"},{url:"2023/08/10/markdown基本语法/index.html",revision:"9ac759a6946c14e0124a7763a66999a5"},{url:"2023/08/13/Month-1/index.html",revision:"2e1244439286a3230c5375e599d69fd7"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"ce98d01dfadaa635930eb8f8cfdfb035"},{url:"2023/09/01/简记10天军训/index.html",revision:"28451b281b24e86ca33d653715be784d"},{url:"2023/09/03/开箱/index.html",revision:"75aa33d25ab4ac4a883b44509ec82ab0"},{url:"2023/09/05/LaTeX-从入门到日常使用/index.html",revision:"6abedc8cad8b19b3303dbefec205d0e4"},{url:"2023/09/09/简评《不哭不哭，痛痛飞走吧》/index.html",revision:"81824c1d269c30c46350d41722b1b7aa"},{url:"404.html",revision:"306def1e71973cba7c285ae1c9e88e6b"},{url:"about/index.html",revision:"a100f31fc63128942b9fb65df6587ce0"},{url:"archives/2023/08/index.html",revision:"293ebe090302a21f8ecc3024539817b1"},{url:"archives/2023/09/index.html",revision:"524ce2eb0ca6435d24ddb5b3fef2a187"},{url:"archives/2023/index.html",revision:"78ec903653a466d9480d1889b4689f0d"},{url:"archives/index.html",revision:"49e4aed178570ab4f96df1324e2ff6d7"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"65158a76aa160662c6588bd6084ab9e2"},{url:"categories/English/index.html",revision:"82cf787845e3035ff794b26567215f3e"},{url:"categories/index.html",revision:"c39703a1ae2c82be3a2c2acbfd16cca0"},{url:"categories/博客/index.html",revision:"a878e37e72f276fd8c11339c5a292fc9"},{url:"categories/日记/index.html",revision:"9f77d02eb923b0356db6895bc8f599a3"},{url:"chronicle/index.html",revision:"480737523191d63fbac0324bba4a9dfc"},{url:"cinemas/index.html",revision:"b4395c99d878fb8687da110e59cb6a5f"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"07c548d1825505e5fec4b3ae89f95d09"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"08e03a97bcd3b1d46958b3d669af18a4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"67cc97ae4ffa19208dfdb57457fce1d8"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"e17eb68b9b43578d2644f27904f477e1"},{url:"live2dw/assets/moc/miku.2048/texture_00.png",revision:"f69191e3aa1aa64d66bef43d38bb45e8"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"e136a77ef74a21a703135902c0ba8b69"},{url:"tags/index.html",revision:"5c178db0dc64f76273e0808b6f178dd0"},{url:"tags/LaTeX/index.html",revision:"23d952d72b5118c8f5efc9258e6639ec"},{url:"tags/markdown/index.html",revision:"2dd2005f3dcc0239dca1021242f00195"},{url:"tags/note/index.html",revision:"1b344464a5ce6b8c9edb1be3ad8a56a9"},{url:"tags/private/index.html",revision:"6dca8bcd778ec59b3d67d5b271513abb"},{url:"tags/书评/index.html",revision:"57ba7483203edf975a7be2820c940913"},{url:"tags/博客/index.html",revision:"5258896d4bc53c1bd228dd0e8dc5d3ae"},{url:"tags/学习/index.html",revision:"1f0e47391fb473207d78c4a0ecfb7314"},{url:"tags/日记/index.html",revision:"5e7186405d48360a7460b86a834ec7f7"},{url:"tags/编程-设计/index.html",revision:"4b6d252562571f3b900dacdf6ccac0a5"}],{})}));
//# sourceMappingURL=service-worker.js.map
