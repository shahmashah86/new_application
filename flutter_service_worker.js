'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "01df6cab9357a39bf752c2eedeb2a76c",
"assets/AssetManifest.bin.json": "bca5f95bbfcbac21bf85e27a59f30c96",
"assets/AssetManifest.json": "85508b8d7327cefb184cd079d0c3dcd0",
"assets/assets/adminicon/business.png": "e517ece2c8c761c1956131f363aad0a9",
"assets/assets/adminicon/cart.png": "de4ce94587c60c96dabef89aa05394fa",
"assets/assets/adminicon/FreshMart.png": "d9a4712d5b45561d9e86372ea1cc0b89",
"assets/assets/adminicon/groceries.png": "c0aed3d04c3b4b6cee78ff11ff87e071",
"assets/assets/adminicon/group.png": "f583b6f22e0a59e2752170a91c86153b",
"assets/assets/adminicon/Not-Found.jpg": "d1dccf974054a11f6c2a58ab20fbe104",
"assets/assets/adminicon/orders.png": "362e6428c5dc1d27c246665930f18857",
"assets/assets/adminicon/stock.png": "947e1dacd395cef64e2db66ad1aac10a",
"assets/assets/adminicon/stockout.png": "869652dd3979ddf201285be14746f6ea",
"assets/assets/adminicon/team.png": "b29933e48f295742b25f5ebdbf26d6d4",
"assets/assets/adminicon/user.jpg": "0fe9bc72a215b30b776aa92ea2b58f4e",
"assets/assets/animations/Animation%2520-%25201737092875452.json": "2ea8ee7d4c00565ff686b18441bb52f3",
"assets/assets/animations/Animation%2520-%25201737095020281.json": "204a35c83cdbf0b922a2c36f6a5f58e8",
"assets/assets/banner/Offer.jpg": "8f17abf67b122b746129f4de6ed75eb2",
"assets/assets/banner/Offer2.jpg": "42c64b6e5108c087581c7e4592dbc026",
"assets/assets/banner/person.jpg": "58b44c263f294fce62420e48cb8076e9",
"assets/assets/banner/th.jpg": "e04a11fb04a44d61a510356a37d96ea2",
"assets/assets/images/apricot.jpeg": "cd71a04f03f0c20d694b7f3de388b91e",
"assets/assets/images/bagColored.jpeg": "b255026998d24b3990ac9c95f62bb1ac",
"assets/assets/images/bagcolored.jpg": "b255026998d24b3990ac9c95f62bb1ac",
"assets/assets/images/cartempty.png": "b8ace82dc1e5ca7daf196a004005bbb5",
"assets/assets/images/emptycart.png": "b678bbf80353ca0dfbc9c7f5d739578e",
"assets/assets/images/face.jpeg": "963117b6a48578e605aeef2c4d4110ea",
"assets/assets/images/log&reg.jpeg": "a7ff9c5efb48e5e76335702d7d9ad9c1",
"assets/assets/images/WhatsApp%2520Image%25202025-01-12%2520at%25209.36.07%2520AM%2520-%2520Copy.jpeg": "e04da608ad857533da8141b74f85ae5c",
"assets/assets/user/cart.png": "c17b9542a480c40e6381a826d0667fb2",
"assets/assets/user/notFound.png": "6dd84a3f66d5fed13ad2e19ea6273f72",
"assets/assets/user/shoppingcart.png": "e50ada85865318800002c804aea8925f",
"assets/assets/user/tag1.png": "29d2bc2196df572c6a6dfd035f34afc1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7b1c95fe064ac23ef5dcdd0e0fd7d2a6",
"assets/NOTICES": "e898e284b0b945e479314b9df80002e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8471fd9a543672e1e60c4e2a80f8c935",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "642726593ba05de58dba57aa994929ed",
"/": "642726593ba05de58dba57aa994929ed",
"main.dart.js": "7e9589d8a8b055c1ba7bda180cbe7161",
"manifest.json": "857d7438891fe081a903fd431d44ce05",
"version.json": "868c6fca6cfa40393c07f0ab75b73b60"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
