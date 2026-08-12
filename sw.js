const CACHE = "spendit-v20";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin) return;

  // Network first, with cache only as an offline fallback.
  // We deliberately do not cache the live response here. This prevents
  // Response.clone()/body-used errors and ensures deployed app updates
  // reach both laptop and Android.
  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .catch(() =>
        caches.match(event.request).then(
          cached => cached || caches.match("./index.html")
        )
      )
  );
});
