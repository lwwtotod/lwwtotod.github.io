/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_posts/20-5-13-npm-script流.html",
    "revision": "b3c5981069abab628bcd428d5a9bfdf4"
  },
  {
    "url": "_posts/InterView/常见面试题.html",
    "revision": "ed161ab967a9475fd2f57b0079974c34"
  },
  {
    "url": "_posts/leetcode/LeetCode.html",
    "revision": "262662959d4a279a9db60644b7c16398"
  },
  {
    "url": "_posts/Nginx/mac下配置ngxin.html",
    "revision": "10304a0bf3847823ed80d5bb59202138"
  },
  {
    "url": "_posts/Nodejs/npm与yarn.html",
    "revision": "fc187c907c6bbc38363605f1a26a92db"
  },
  {
    "url": "_posts/Nodejs/Sequelize的配置.html",
    "revision": "70b28a3e5198d83e3aa2111514643097"
  },
  {
    "url": "_posts/Terminal/Terminal下的一些配置.html",
    "revision": "174a23e6f575f484b737d6df0aa19974"
  },
  {
    "url": "_posts/Vue/Axios基础配置.html",
    "revision": "109d672db2e1bcc5ad6d9980ff9d0ad6"
  },
  {
    "url": "_posts/Vue/layout.html",
    "revision": "9baa2f916e0e40359d9907cc39c4fd97"
  },
  {
    "url": "_posts/Vue/vuepress主题配置.html",
    "revision": "4b148d9301ebd4cdc33233e6536c3319"
  },
  {
    "url": "_posts/Windows/autohotkey.html",
    "revision": "7f796a1fd3ed87dfb196d3bf7246135a"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现图.html",
    "revision": "cd79e51862aa654f0a029062eecac648"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现字典散列表.html",
    "revision": "eeede1346525293888e59f708726b2c8"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现排序算法.html",
    "revision": "066a30d1bb14ee55c3ad78ce0309a220"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现栈.html",
    "revision": "82896afd8f924a86d80d9199f5577d33"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现简单二叉查找树.html",
    "revision": "da38fec456b2341257023cce0a958b78"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现链表.html",
    "revision": "fd18a39fc91b7b6f766a4631ae565880"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现队列.html",
    "revision": "792ae6d60282196880224f6597b66c52"
  },
  {
    "url": "_posts/数据结构与算法/javascript实现集合.html",
    "revision": "dd63a22b974d4a49325f1b5ded10bcee"
  },
  {
    "url": "404.html",
    "revision": "6d2df4e0951465fd0305373a90cbef25"
  },
  {
    "url": "assets/css/0.styles.cf2db36b.css",
    "revision": "8d8e9da0791306b5187949740cad96c7"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/iconfont.a5d11a0b.svg",
    "revision": "a5d11a0b839107259b8740e4657868f2"
  },
  {
    "url": "assets/js/10.ffb092dd.js",
    "revision": "221d42dbbd57c626ac5dc3578c2b0a51"
  },
  {
    "url": "assets/js/11.72815dec.js",
    "revision": "ada31c78fd3c349e462a323744757a77"
  },
  {
    "url": "assets/js/12.7bcb5c13.js",
    "revision": "86a668b3b9860c18c02fe1e438f31956"
  },
  {
    "url": "assets/js/13.7f56f5f8.js",
    "revision": "cee6d4de58f9bc7dd09e77461eccebd0"
  },
  {
    "url": "assets/js/14.7afd5ad3.js",
    "revision": "e5a753c166a2d5a71bc2b9c81ec4edf0"
  },
  {
    "url": "assets/js/15.5ca3edab.js",
    "revision": "db273debee402c69b3e10087775f707f"
  },
  {
    "url": "assets/js/16.b4afd2b7.js",
    "revision": "c63a3f7644b947c890b22ff6f0f87945"
  },
  {
    "url": "assets/js/17.a487afb0.js",
    "revision": "f64bdd51f792db33d2d707245bb0c44e"
  },
  {
    "url": "assets/js/18.6e7f60d9.js",
    "revision": "98be4c8658c80ca72007099caba60d5e"
  },
  {
    "url": "assets/js/19.dc9c3a6a.js",
    "revision": "930e74b7129841e612ad91d8594c4b5e"
  },
  {
    "url": "assets/js/2.c637fd5d.js",
    "revision": "045e9901b1f19d26d77987df8239dcec"
  },
  {
    "url": "assets/js/20.8ec7a113.js",
    "revision": "508287317b60fa66a12ebec6b61f0c6b"
  },
  {
    "url": "assets/js/21.6d7d52b6.js",
    "revision": "58148f32dba3fd40e4a658aff66fc1b2"
  },
  {
    "url": "assets/js/22.782cbacf.js",
    "revision": "732e23917dccaa7b21543e87ae62f83b"
  },
  {
    "url": "assets/js/23.310baf69.js",
    "revision": "54035284e3d48b0d00eb9a1420d9e441"
  },
  {
    "url": "assets/js/24.f1a4d32f.js",
    "revision": "af1510a1c68561b61de62a59de7102be"
  },
  {
    "url": "assets/js/25.24cfb05c.js",
    "revision": "d950e062cfffc35a88a0c8ad886177ba"
  },
  {
    "url": "assets/js/26.3e93c740.js",
    "revision": "865f588d4ec952a8c31ba21a95523043"
  },
  {
    "url": "assets/js/27.ed66f4f7.js",
    "revision": "5ef294fc2eeceeed46b0636947973f0d"
  },
  {
    "url": "assets/js/3.4eee789f.js",
    "revision": "a1183f450a1e8aa7c9c35fedc257c156"
  },
  {
    "url": "assets/js/4.05fb1e4c.js",
    "revision": "ae66f99ef2c3281646f18d42ec607a4e"
  },
  {
    "url": "assets/js/5.bc12ff3c.js",
    "revision": "e24677e65c84b2eb8e2e5ecb9e86d517"
  },
  {
    "url": "assets/js/6.dfd0b0fd.js",
    "revision": "d266b647264245e4d156760446f36395"
  },
  {
    "url": "assets/js/7.12338346.js",
    "revision": "b3836958ed0fd7d3acc5d8d033647e1d"
  },
  {
    "url": "assets/js/8.c1736cd1.js",
    "revision": "069bb3b3ebd7a0044aeca03b4c6d8987"
  },
  {
    "url": "assets/js/9.d61788f4.js",
    "revision": "1a995213d5ed5ab7f54947c0bcff7041"
  },
  {
    "url": "assets/js/app.616fa53a.js",
    "revision": "1ea07bf34984928cfdbdd52a2d6a32fe"
  },
  {
    "url": "bg.png",
    "revision": "05f2112302be13fd1ff0ef5cde26b554"
  },
  {
    "url": "index.html",
    "revision": "cb24f673b97b5569ee228058508c6a96"
  },
  {
    "url": "list/index.html",
    "revision": "5399ee61f9b77c32b8d46f28d51527f2"
  },
  {
    "url": "tags/index.html",
    "revision": "8829d04ee6988765f169c994ea2f9f37"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d0caa9ca291d4e4dff3c1d5354b9642"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
