if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>a(e,r),l={module:{uri:r},exports:s,require:n};i[r]=Promise.all(d.map((e=>l[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/04/博客git-bush命令/index.html",revision:"88e274ec372dd5c2702edc80b4b10fd1"},{url:"2023/08/10/markdown基本语法/index.html",revision:"c8dd4e495684a059840fcb1a3afec1f0"},{url:"2023/08/13/Month-1/index.html",revision:"8dcd5a6979b1fe1ecbf26abce59c0c3f"},{url:"2023/08/20/记第一次设计的小游戏/index.html",revision:"803d24423e7ac7f96b2dc21234ec2467"},{url:"2023/09/01/简记10天军训/index.html",revision:"8d17d4b8befe94719e19bb06718aa7f1"},{url:"2023/09/03/开箱/index.html",revision:"af2113f4012d79495ac435cbdc20b239"},{url:"2023/09/05/LaTeX-从入门到日常使用/index.html",revision:"0b045632a9243331d042d368ccdea66a"},{url:"2023/09/09/简评《不哭不哭，痛痛飞走吧》/index.html",revision:"3f77c09ef74ca05b300abb155d05aa52"},{url:"2023/12/31/2023年度总结/index.html",revision:"63c11b306e0212bea00bf945700cc514"},{url:"2024/01/21/Gobang-AI-Development-Log/index.html",revision:"c45a72d996885059cbf1ea6bff42695f"},{url:"2024/07/16/reading-notes-of-It-ends-with-us/index.html",revision:"6351bfc98a597faa3c20fb5aaa2b62a4"},{url:"404.html",revision:"3d2d4b6bdee5a1995e9b42bd6169c856"},{url:"about/index.html",revision:"3af6e9d409ef337e970bc7222ea603ea"},{url:"archives/2023/08/index.html",revision:"11be4159def922ec1583422e5ed7fec7"},{url:"archives/2023/09/index.html",revision:"da65f0d161044341545a0b0e579abb1d"},{url:"archives/2023/12/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2023/index.html",revision:"5ceb0cf301d1c4c499d0a9379b0b31a7"},{url:"archives/2024/01/index.html",revision:"24e11cfe4724c0ebcf8fb1894f209aab"},{url:"archives/2024/07/index.html",revision:"f215277f6fb7fe6077718a50137c121d"},{url:"archives/2024/index.html",revision:"ff3849afa96af0c07542e30143df46b6"},{url:"archives/index.html",revision:"46236f25c9986028590b2211413942fc"},{url:"archives/page/2/index.html",revision:"f32a262e6d490a6f30d4cad3e10c2bbb"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"00de2a4b44f856e139e93131bed6e16a"},{url:"categories/English/index.html",revision:"ccad51ea6ac2fa28b9186da88c0159cf"},{url:"categories/index.html",revision:"d0e64a931d56338d7d689aeb318b02c0"},{url:"categories/书评/index.html",revision:"8578b738b4a962ce0f011a35efb02a92"},{url:"categories/博客/index.html",revision:"61f3f614dee51cc9a2c5f5c133c563dc"},{url:"categories/日记/index.html",revision:"d0dc314f351c9da2cf47deaf48946e66"},{url:"chronicle/index.html",revision:"96d6c5e0be511521608c6981dfbbb3fd"},{url:"cinemas/index.html",revision:"853482607abfc9d6583e9ac724326558"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"0f04fe0510dcd83c8c63a1ac50a5cc05"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b6fa256b7f9e64db8eba9ed89b4685a5"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"3046e61ccd7b56abbdabe1e8623364a2"},{url:"live2dw/assets/moc/miku.2048/texture_00.png",revision:"f69191e3aa1aa64d66bef43d38bb45e8"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"e9dd6cd0cd07564b001d68d259ed5686"},{url:"page/2/index.html",revision:"4184f1dd14b74a9baa87be4855e1567f"},{url:"tags/index.html",revision:"5696b488294a4d1ff282890550bd308d"},{url:"tags/LaTeX/index.html",revision:"4f1e0dd5875cea334fcc5bc2b2a863a4"},{url:"tags/markdown/index.html",revision:"212d736c3d647098b5d592c917e94144"},{url:"tags/note/index.html",revision:"36099fd48972f9ee0964f74567b7b2c7"},{url:"tags/private/index.html",revision:"f5ec731580c299e5cca2979f1ca4919d"},{url:"tags/reading-notes/index.html",revision:"1475d373708050bef62721234a77d6ab"},{url:"tags/三秋缒/index.html",revision:"a4bd787f0490050390eb3b07df8d3050"},{url:"tags/书评/index.html",revision:"0a5de4a9ccaae895874f259702ff4809"},{url:"tags/博客/index.html",revision:"c588dbd684570f82233bf265a0609b5d"},{url:"tags/学习/index.html",revision:"3c8f14b346befac8e1ae218d171858b7"},{url:"tags/日志/index.html",revision:"46efa11b96701958b444043ea6fe7fe1"},{url:"tags/日记/index.html",revision:"32b1cf0bd4a7a9ca09adc2bcf4918a56"},{url:"tags/编程-设计/index.html",revision:"d8dbc27c7f9f0cff261727fa577b33d5"},{url:"tags/编程/index.html",revision:"41db4254656e57c4153454432bd9c91b"}],{})}));
//# sourceMappingURL=service-worker.js.map
