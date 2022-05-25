'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "app.js": "690dbbe6ea12c9777d3d4d1c4981887c",
"assets/AssetManifest.json": "511cdb19c4857a2df89320b4f8fce71b",
"assets/assets/images/ExcelExport.png": "1cf4a1543de50d072e74dba6ae248046",
"assets/assets/images/forget_password.png": "d013bdde716e54d703f1f304f9a09a83",
"assets/assets/images/icon.png": "d7f33e345d605291389371f2e299132e",
"assets/assets/images/Logo.png": "0bc2d7f29d2467ac2d08e03e21fb2a0f",
"assets/assets/images/Logo2.png": "1842ba7dc76c0e6bbf57e456daa3b8ba",
"assets/assets/images/no-avatar.png": "a7ce18dec9affaf5ab51395ac967ae78",
"assets/assets/images/no_data.png": "c8ff184cdf3bd040d7a48e29f76f25d4",
"assets/assets/images/otp.png": "ded9f9d844bd0e25d4ae1dd6b0179a51",
"assets/assets/images/sign_in.png": "c21342039eaf092cc968103715b8ab28",
"assets/assets/images/sign_up.png": "701d52bb3144b3806d3afe2e484992c9",
"assets/assets/maps/diaphanhuyen.geojson": "218b80a8915008881831b639586f6b00",
"assets/assets/maps/diaphantinh.geojson": "67c4b5d4aaae002ef58e6862d4177cc2",
"assets/assets/maps/vietnam.json": "c606e38878263b0ebb462030f7d60ef5",
"assets/assets/svg/binh_thuong.svg": "ccd3920d59b22fad96e26ba692d83c31",
"assets/assets/svg/building.svg": "8f2ec52bc28340c7aacb412c8515a7f1",
"assets/assets/svg/cho_xet_duyet.svg": "c7f6bd7c8bb60a5dfcf847bf09baa5da",
"assets/assets/svg/covid.svg": "b6a8ba77249759a992ddec41eb0e7459",
"assets/assets/svg/dang_cach_ly.svg": "20e5214701306c2d1b037398d8c9987d",
"assets/assets/svg/dieu_tri.svg": "7e5740c837aeb0db9084eb9633831578",
"assets/assets/svg/duong_tinh.svg": "d780141f23411298b04974d11199b3c3",
"assets/assets/svg/giuong_trong.svg": "306173f3b0c20c99cabbd615e995dcd7",
"assets/assets/svg/Location.svg": "71a7f44f526108e9c72468d70df59161",
"assets/assets/svg/nghi_ngo.svg": "8e275efe4da62dccf786a983ae598aa3",
"assets/assets/svg/nghi_nhiem.svg": "d076f649b89efc9c1af87d517bcdc5cb",
"assets/assets/svg/No_avatar.svg": "7636eaf8ef9c08f2c4b3cf6b567a16f8",
"assets/assets/svg/ovaldecoration.svg": "9f9249a268727ecc4466c0972646381f",
"assets/assets/svg/Phone.svg": "0a4cb4525d2bc8123613e82542b52f57",
"assets/assets/svg/sap_hoan_thanh_cach_ly.svg": "d718c39df0e362d7a2bf79eb89d749c3",
"assets/assets/svg/toi_han_xet_nghiem.svg": "fbc4f23945fa29080c0b362f735693bc",
"assets/assets/svg/total.svg": "caa284a7c50522ff424953f19429d9c0",
"assets/assets/svg/xet_nghiem_cap_nhat.svg": "4d2b109ff6a21b403711b3a5c48a606e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "f29ad2cbc47473e8cb415eb7e592e54d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"google6658f68e367dfdb4.html": "898c99b50ce4f4fa6388409ee8ff8638",
"icons/android-icon-144x144.png": "d1553f768dd62ce84736dac902b00dd8",
"icons/android-icon-192x192.png": "3180a2a0f89b0ae7e3148b68d8480464",
"icons/android-icon-36x36.png": "f18484e2e67431a2713f286cd43d6022",
"icons/android-icon-48x48.png": "fb17eedf427eeca3727af322c5cd8370",
"icons/android-icon-72x72.png": "cb47ef4816c1d2b670b47182b8a66050",
"icons/android-icon-96x96.png": "58ef7539ae44ee310d267ddfdb18a593",
"icons/apple-icon-114x114.png": "a4773634d7bcd68b367c25342723780f",
"icons/apple-icon-120x120.png": "b9e2816d3678518788281e7a74074940",
"icons/apple-icon-144x144.png": "d1553f768dd62ce84736dac902b00dd8",
"icons/apple-icon-152x152.png": "cf3d4d9bcf9270e0b6158b74b7fbba6d",
"icons/apple-icon-180x180.png": "33ad13798f23e815277a4b95d83486b7",
"icons/apple-icon-57x57.png": "c01511436a6899ed983150b433fbdbdb",
"icons/apple-icon-60x60.png": "e3688d7b86f8df56e104a2c48ead63a4",
"icons/apple-icon-72x72.png": "cb47ef4816c1d2b670b47182b8a66050",
"icons/apple-icon-76x76.png": "3ef721f2a12fdb2b9d318a2de455f40c",
"icons/apple-icon-precomposed.png": "e53cf42bf12a33e1fad58c508734b894",
"icons/apple-icon.png": "e53cf42bf12a33e1fad58c508734b894",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "1b1243eef9b5b8f5d245a6c2df15d654",
"icons/favicon-32x32.png": "85cb3a2611329f22a0660523f847029b",
"icons/favicon-96x96.png": "58ef7539ae44ee310d267ddfdb18a593",
"icons/favicon.ico": "24b115e15e29d796646d13fd3a798e9e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "d1553f768dd62ce84736dac902b00dd8",
"icons/ms-icon-150x150.png": "29ab772e7f8fa0206c2de6e15a8ccf06",
"icons/ms-icon-310x310.png": "3f596a6d695daf56ef6c50746a428493",
"icons/ms-icon-70x70.png": "7a1e467be8f8ef88f82de2ea222d9a2d",
"index.html": "a40d1fd4fb613f0a777e627ec056f2ab",
"/": "a40d1fd4fb613f0a777e627ec056f2ab",
"main.dart.js": "ba178efc68232ab38fca87470acf6edd",
"manifest.json": "731d90263539dcbbbc5279441451fbd9",
"OneSignalSDKWorker.js": "7ff0485cee1f7099162a18fe12b8b8a3",
"splash/img/dark-1x.png": "ececb4f8a3f638e484cc92e257d84512",
"splash/img/dark-2x.png": "b9c449ff71936d8952a1860bac5abac0",
"splash/img/dark-3x.png": "ce24ca750e0b8674ae6f15afcfb959db",
"splash/img/dark-4x.png": "55959e3589f270dfa2a3e79fc2e421e1",
"splash/img/light-1x.png": "ececb4f8a3f638e484cc92e257d84512",
"splash/img/light-2x.png": "b9c449ff71936d8952a1860bac5abac0",
"splash/img/light-3x.png": "ce24ca750e0b8674ae6f15afcfb959db",
"splash/img/light-4x.png": "55959e3589f270dfa2a3e79fc2e421e1",
"splash/style.css": "64227ec06c71fef909f75868ada72c30",
"version.json": "117b0bd8be913e4af6f6733af5f57469"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
