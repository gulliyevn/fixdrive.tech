const CACHE = 'fixdrive-cache-v2'
const OFFLINE_URL = '/offline.html'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll([
      '/',
      OFFLINE_URL,
      '/manifest.webmanifest',
    ]))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  event.respondWith(
    fetch(request).catch(async () => {
      const cache = await caches.open(CACHE)
      const cached = await cache.match(request)
      return cached || cache.match(OFFLINE_URL)
    })
  )
})


