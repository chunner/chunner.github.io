if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const c=e=>d(e,r),l={module:{uri:r},exports:f,require:c};i[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(a(...e),f)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/11/hello-world/index.html",revision:"8942ca31e98c7c0dfd5d69599959567e"},{url:"2023/07/11/测试/index.html",revision:"06ae27275069fa1ffb219528bc9e350e"},{url:"2023/08/04/博客技巧/index.html",revision:"cd75ece9b65acda8b94304f1da4dbedc"},{url:"2023/08/04/测试-1/index.html",revision:"acb264b10b6173f67bb89e01b7ed246b"},{url:"2023/08/10/markdown基本语法/index.html",revision:"08cdfac7f46179fa00ed570c174d43b0"},{url:"404.html",revision:"efbc652341f9046d7d09781fb94513f4"},{url:"about/index.html",revision:"fdb442b7c6dae0944a4f2097f410f022"},{url:"archives/2023/07/index.html",revision:"e1f75034278eb1cd73662bb07d18c24b"},{url:"archives/2023/08/index.html",revision:"85b41042c6249ab7a33d755f480a176c"},{url:"archives/2023/index.html",revision:"b27bb476f70b46bcbddeed4f7da0f558"},{url:"archives/index.html",revision:"ae7ffcf301a82ddcb110564ad1c240fa"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"64c3fce4728806e3d0a73f0353fe22d6"},{url:"categories/index.html",revision:"d4d95b115ae206b78f177bb78832669e"},{url:"cinemas/index.html",revision:"ed3aa0e042ba31ed8433f3f9a2783a4e"},{url:"css/index.css",revision:"6971eb1e38ff984257422e22f4dc4856"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"d5cd930630b56b676f580413f84ca47b"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"e29984febc8a2c00c8485237491d59e0"},{url:"tags/index.html",revision:"9d6e34c7d77854988ce1a19891da2e87"},{url:"tags/markdown/index.html",revision:"3db0ff86d72ec9eb42fd8228d281762b"},{url:"tags/博客/index.html",revision:"ffb0d55d05bc966fc277413a6f37fd7c"},{url:"tags/图库/index.html",revision:"d27e5082fb6d9a99aadf2e425a05c7bf"},{url:"tags/测试/index.html",revision:"3886a622a0ee8405607db21c22173797"}],{})}));
//# sourceMappingURL=service-worker.js.map
