/* The planning tool moved to a private address. This worker only clears the old cache and removes itself so nobody sees a stale copy. */
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.map(function(n){return caches.delete(n)}))}).then(function(){return self.registration.unregister()}).then(function(){return self.clients.matchAll({type:"window"})}).then(function(cs){cs.forEach(function(c){c.navigate(c.url)})}))});
