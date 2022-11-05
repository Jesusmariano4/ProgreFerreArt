var nombreCacheEstaticos = "cacheEstaticos1"
var archivosEstaticos = ["/css/menu.css",
    "/MiPrimerAppWebProgresiva.styles.css",
    "/lib/jquery/dist/jquery.min.js",
    "/lib/bootstrap/dist/js/bootstrap.bundle.min.js",
    "/js/menu.js", "/", "/js/generic.js", "/img/loading.gif",
    "/Persona/ListaPersonas"]

self.addEventListener("install", event => {
    console.log("Evento Install")
    event.waitUntil(
        caches.open(nombreCacheEstaticos).then(cache => {
            return cache.addAll(archivosEstaticos)
        })
    )
})

self.addEventListener("activate", event => {
    console.log("Evento Activate")
    event.waitUntil(self.clients.claim())
})

self.addEventListener("fetch", event => {

    const respuesta = caches.match(event.request).then(res => {
        if (res) return res;
        else {
            return fetch(event.request).then(response => {
                return response;
            })
        }
    }).catch(err => {
        return null;
    })

    //if (event.request.url == "https://localhost:7147/css/menu.css") {
    //    event.respondWith(null);
    //}
    //else {
    //}
    //console.log(event.request.url)
    event.respondWith(fetch(event.request.url))
    
})