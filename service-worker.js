if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const l=e=>n(e,o),u={module:{uri:o},exports:a,require:l};s[o]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(i(...e),a)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"predevcamp"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/418/assets/Eng.jpg",revision:"d213dbb7322dd1ccb9338ac3d19a0c87"},{url:"/418/assets/Kevin.jpg",revision:"a362a0acd94fd27062247a441a637ef3"},{url:"/418/assets/Nueng.jpg",revision:"01b6c5bfb5feefbec9e8017db99d31aa"},{url:"/418/assets/back.png",revision:"ab5011851af77a76fd16875cb3dab4b5"},{url:"/418/assets/background.png",revision:"288703a515351cc3f370be77447f1dd8"},{url:"/418/assets/background_one.png",revision:"70d0b0b7df5708839ed446816a801bc1"},{url:"/418/assets/dog.glb",revision:"16a290372a8072bfbc567422692eeda6"},{url:"/418/assets/font/CentraNo2-Bold.ttf",revision:"4ea3794d631bedab7999678f46b0a162"},{url:"/418/assets/font/CentraNo2-Book.ttf",revision:"386f05946a76935fcabf319affff517a"},{url:"/418/assets/font/CentraNo2-Medium.ttf",revision:"63911e8535278ced52b8a37e819f6f5d"},{url:"/418/assets/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/418/css/845.72962abe.css",revision:null},{url:"/418/css/app.ee9215d2.css",revision:null},{url:"/418/css/chunk-vendors.6983a6ea.css",revision:null},{url:"/418/dog.glb",revision:"16a290372a8072bfbc567422692eeda6"},{url:"/418/fonts/bootstrap-icons.6fdf98f9.woff2",revision:null},{url:"/418/fonts/bootstrap-icons.dba5e3b7.woff",revision:null},{url:"/418/img/background_one.3e99e863.png",revision:null},{url:"/418/img/background_two.3f4a76b9.jpg",revision:null},{url:"/418/img/cardOne.574a4d23.png",revision:null},{url:"/418/img/cardThree.33a7ad45.png",revision:null},{url:"/418/img/cardTwo.801c09f0.png",revision:null},{url:"/418/img/eng.a450a2d5.png",revision:null},{url:"/418/img/kevin.497dca89.png",revision:null},{url:"/418/img/nueng.099ac5c6.png",revision:null},{url:"/418/index.html",revision:"7675bc692eb72f1efbc53f5077002015"},{url:"/418/js/845.f4924035.js",revision:null},{url:"/418/js/app.f0e4adad.js",revision:null},{url:"/418/js/chunk-vendors.6476904e.js",revision:null},{url:"/418/manifest.json",revision:"9573be26d6a4dfb9d105abd476fbb68a"},{url:"/418/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
