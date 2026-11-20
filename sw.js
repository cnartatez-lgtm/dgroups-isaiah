// Only the public reader is cached. The lesson schedule, teaching and study notes stay live.
const CACHE = 'isaiah-public-v4-install';
const FILES = [
  "",
  "index.html",
  "data.json",
  "assets/fonts.css",
  "assets/dgroups.png",
  "assets/favicon.svg",
  "assets/eic-logo-light.png",
  "assets/eic-logo-dark.png",
  "commentary-format.js",
  "icons.js",
  "interaction.css",
  "intro-refinement.css",
  "introduction.js",
  "isaiah-layout.css",
  "isaiah-study.js",
  "isaiah.js",
  "journey.css",
  "luke.css",
  "motion-preference.js",
  "motion.css",
  "motion.js",
  "preview.css",
  "refinement.css",
  "resources.js",
  "study-introduction.js",
  "styles.css",
  "study-notes.js",
  "study-notes-api.js",
  "study-notes.css",
  "tools-refinement.css",
  "manifest.webmanifest",
  "install.js",
  "install.css",
  "assets/app-192.png",
  "assets/app-512.png",
  "assets/app-maskable-512.png",
  "assets/isaiah-02-mountain-v2.webp",
  "assets/isaiah-reading-v2.webp"
];
const publicPaths = new Set(FILES);
const scope = new URL(self.registration.scope);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(FILES.map(path => new URL(path, scope)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('isaiah-public-') && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;

  const path = url.pathname.slice(scope.pathname.length);
  if (!publicPaths.has(path) && !path.startsWith('references/') && !path.startsWith('assets/')) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(request);
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(cache.put(request, copy).catch(() => {}));
      }
      return response;
    } catch {
      // Cache entries created at install time have no version query string.
      return (await cache.match(request)) || (await cache.match(request, { ignoreSearch: true })) || Response.error();
    }
  })());
});
