const cacheName = 'safedial-offline-v1'

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const scope = self.registration.scope
    const manifestResponse = await fetch(new URL('precache-manifest.json', scope))
    const assets = await manifestResponse.json()
    const cache = await caches.open(cacheName)

    await cache.addAll([
      scope,
      new URL('offline.html', scope).href,
      ...assets,
    ])
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys
      .filter((key) => key.startsWith('safedial-offline-') && key !== cacheName)
      .map((key) => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)

  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request)
        if (response.ok) {
          const cache = await caches.open(cacheName)
          await cache.put(request, response.clone())
        }
        return response
      } catch {
        const cache = await caches.open(cacheName)
        return await cache.match(request)
          || await cache.match(self.registration.scope)
          || await cache.match(new URL('offline.html', self.registration.scope))
      }
    })())
    return
  }

  event.respondWith((async () => {
    const cache = await caches.open(cacheName)
    const cached = await cache.match(request)
    if (cached) return cached

    const response = await fetch(request)
    if (response.ok) await cache.put(request, response.clone())
    return response
  })())
})