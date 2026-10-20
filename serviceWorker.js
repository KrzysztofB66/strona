const staticDevSite = "dev_site_v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/icon.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevSite).then(cache => {
      cache.addAll(assets)
    })
  )
})