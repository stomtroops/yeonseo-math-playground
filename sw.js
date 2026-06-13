const CACHE_NAME = "yeonseo-math-v16";
const APP_SHELL = [
  new URL("./", self.location).toString(),
  new URL("./index.html", self.location).toString(),
  new URL("./manifest.webmanifest", self.location).toString(),
  new URL("./icon.svg", self.location).toString(),
  new URL("./icon-192.png", self.location).toString(),
  new URL("./icon-512.png", self.location).toString(),
  new URL("./apple-touch-icon.png", self.location).toString()
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => (
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => (
          caches.match(event.request)
            .then((cached) => cached || caches.match(new URL("./index.html", self.location).toString()))
        ))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(new URL("./index.html", self.location).toString()));
    })
  );
});
