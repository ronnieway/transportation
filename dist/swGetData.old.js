'use strict';console.log('WORKER: executing.');var version='v1::',offlineFundamentals=['/','/index.html','/README.md','/css/main.css','/js/main.js'];self.addEventListener('install',a=>{console.log('WORKER: install event in progress.');a.waitUntil(caches.open('v1:: BART-transportation-data').then(cache=>cache.addAll(offlineFundamentals)).then(()=>{console.log('WORKER: install completed')}))});self.addEventListener('fetch',a=>{console.log('WORKER: fetch event in progress.');if(a.request.method!=='GET'){console.log('WORKER: fetch event ignored.',a.request.method,a.request.url);return}a.respondWith(caches.match(a.request).then(b=>{var e=fetch(a.request).then(c,d).catch(d);console.log('WORKER: fetch event',b?'(cached)':'(network)',a.request.url);return b||e;function c(f){var g=f.clone();console.log('WORKER: fetch response from network.',a.request.url);caches.open('v1:: BART-transportation-data').then(h=>{h.add(a.request)}).then(()=>{console.log('WORKER: fetch response stored in cache.',a.request.url)});return f}function d(){console.log('WORKER: fetch request failed in both cache and network.');return new Response('<h1>Service Unavailable</h1>',{status:503,statusText:'Service Unavailable',headers:new Headers({'Content-Type':'text/html'})})}}))});self.addEventListener('activate',a=>{console.log('WORKER: activate event in progress.');a.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>!key.startsWith(version)).map(key=>caches.delete(key)))).then(()=>{console.log('WORKER: activate completed.')}))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzd0dldERhdGEub2xkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc29sZS5sb2coJ1dPUktFUjogZXhlY3V0aW5nLicpO1xuXG4vKiBBIHZlcnNpb24gbnVtYmVyIGlzIHVzZWZ1bCB3aGVuIHVwZGF0aW5nIHRoZSB3b3JrZXIgbG9naWMsXHJcbiAgIGFsbG93aW5nIHlvdSB0byByZW1vdmUgb3V0ZGF0ZWQgY2FjaGUgZW50cmllcyBkdXJpbmcgdGhlIHVwZGF0ZS5cclxuKi9cbnZhciB2ZXJzaW9uID0gJ3YxOjonO1xuXG4vKiBUaGVzZSByZXNvdXJjZXMgd2lsbCBiZSBkb3dubG9hZGVkIGFuZCBjYWNoZWQgYnkgdGhlIHNlcnZpY2Ugd29ya2VyXHJcbiAgIGR1cmluZyB0aGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MuIElmIGFueSByZXNvdXJjZSBmYWlscyB0byBiZSBkb3dubG9hZGVkLFxyXG4gICB0aGVuIHRoZSBzZXJ2aWNlIHdvcmtlciB3b24ndCBiZSBpbnN0YWxsZWQgZWl0aGVyLlxyXG4qL1xudmFyIG9mZmxpbmVGdW5kYW1lbnRhbHMgPSBbJy8nLCAnL2luZGV4Lmh0bWwnLCAnL1JFQURNRS5tZCcsICcvY3NzL21haW4uY3NzJywgJy9qcy9tYWluLmpzJ107XG5cbi8qIFRoZSBpbnN0YWxsIGV2ZW50IGZpcmVzIHdoZW4gdGhlIHNlcnZpY2Ugd29ya2VyIGlzIGZpcnN0IGluc3RhbGxlZC5cclxuICAgWW91IGNhbiB1c2UgdGhpcyBldmVudCB0byBwcmVwYXJlIHRoZSBzZXJ2aWNlIHdvcmtlciB0byBiZSBhYmxlIHRvIHNlcnZlXHJcbiAgIGZpbGVzIHdoaWxlIHZpc2l0b3JzIGFyZSBvZmZsaW5lLlxyXG4qL1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiaW5zdGFsbFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coJ1dPUktFUjogaW5zdGFsbCBldmVudCBpbiBwcm9ncmVzcy4nKTtcbiAgLyogVXNpbmcgZXZlbnQud2FpdFVudGlsKHApIGJsb2NrcyB0aGUgaW5zdGFsbGF0aW9uIHByb2Nlc3Mgb24gdGhlIHByb3ZpZGVkXHJcbiAgICAgcHJvbWlzZS4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZSBzZXJ2aWNlIHdvcmtlciB3b24ndCBiZSBpbnN0YWxsZWQuXHJcbiAgKi9cbiAgZXZlbnQud2FpdFVudGlsKFxuICAvKiBUaGUgY2FjaGVzIGJ1aWx0LWluIGlzIGEgcHJvbWlzZS1iYXNlZCBBUEkgdGhhdCBoZWxwcyB5b3UgY2FjaGUgcmVzcG9uc2VzLFxyXG4gICAgIGFzIHdlbGwgYXMgZmluZGluZyBhbmQgZGVsZXRpbmcgdGhlbS5cclxuICAqL1xuICBjYWNoZXNcbiAgLyogWW91IGNhbiBvcGVuIGEgY2FjaGUgYnkgbmFtZSwgYW5kIHRoaXMgbWV0aG9kIHJldHVybnMgYSBwcm9taXNlLiBXZSB1c2VcclxuICAgICBhIHZlcnNpb25lZCBjYWNoZSBuYW1lIGhlcmUgc28gdGhhdCB3ZSBjYW4gcmVtb3ZlIG9sZCBjYWNoZSBlbnRyaWVzIGluXHJcbiAgICAgb25lIGZlbGwgc3dvb3AgbGF0ZXIsIHdoZW4gcGhhc2luZyBvdXQgYW4gb2xkZXIgc2VydmljZSB3b3JrZXIuXHJcbiAgKi9cbiAgLm9wZW4odmVyc2lvbiArICcgQkFSVC10cmFuc3BvcnRhdGlvbi1kYXRhJykudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAvKiBBZnRlciB0aGUgY2FjaGUgaXMgb3BlbmVkLCB3ZSBjYW4gZmlsbCBpdCB3aXRoIHRoZSBvZmZsaW5lIGZ1bmRhbWVudGFscy5cclxuICAgICAgIFRoZSBtZXRob2QgYmVsb3cgd2lsbCBhZGQgYWxsIHJlc291cmNlcyBpbiBgb2ZmbGluZUZ1bmRhbWVudGFsc2AgdG8gdGhlXHJcbiAgICAgICBjYWNoZSwgYWZ0ZXIgbWFraW5nIHJlcXVlc3RzIGZvciB0aGVtLlxyXG4gICAgKi9cbiAgICByZXR1cm4gY2FjaGUuYWRkQWxsKG9mZmxpbmVGdW5kYW1lbnRhbHMpO1xuICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnV09SS0VSOiBpbnN0YWxsIGNvbXBsZXRlZCcpO1xuICB9KSk7XG59KTtcblxuLyogVGhlIGZldGNoIGV2ZW50IGZpcmVzIHdoZW5ldmVyIGEgcGFnZSBjb250cm9sbGVkIGJ5IHRoaXMgc2VydmljZSB3b3JrZXIgcmVxdWVzdHNcclxuICAgYSByZXNvdXJjZS4gVGhpcyBpc24ndCBsaW1pdGVkIHRvIGBmZXRjaGAgb3IgZXZlbiBYTUxIdHRwUmVxdWVzdC4gSW5zdGVhZCwgaXRcclxuICAgY29tcHJlaGVuZHMgZXZlbiB0aGUgcmVxdWVzdCBmb3IgdGhlIEhUTUwgcGFnZSBvbiBmaXJzdCBsb2FkLCBhcyB3ZWxsIGFzIEpTIGFuZFxyXG4gICBDU1MgcmVzb3VyY2VzLCBmb250cywgYW55IGltYWdlcywgZXRjLlxyXG4qL1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKCdXT1JLRVI6IGZldGNoIGV2ZW50IGluIHByb2dyZXNzLicpO1xuXG4gIC8qIFdlIHNob3VsZCBvbmx5IGNhY2hlIEdFVCByZXF1ZXN0cywgYW5kIGRlYWwgd2l0aCB0aGUgcmVzdCBvZiBtZXRob2QgaW4gdGhlXHJcbiAgICAgY2xpZW50LXNpZGUsIGJ5IGhhbmRsaW5nIGZhaWxlZCBQT1NULFBVVCxQQVRDSCxldGMuIHJlcXVlc3RzLlxyXG4gICovXG4gIGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAvKiBJZiB3ZSBkb24ndCBibG9jayB0aGUgZXZlbnQgYXMgc2hvd24gYmVsb3csIHRoZW4gdGhlIHJlcXVlc3Qgd2lsbCBnbyB0b1xyXG4gICAgICAgdGhlIG5ldHdvcmsgYXMgdXN1YWwuXHJcbiAgICAqL1xuICAgIGNvbnNvbGUubG9nKCdXT1JLRVI6IGZldGNoIGV2ZW50IGlnbm9yZWQuJywgZXZlbnQucmVxdWVzdC5tZXRob2QsIGV2ZW50LnJlcXVlc3QudXJsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLyogU2ltaWxhciB0byBldmVudC53YWl0VW50aWwgaW4gdGhhdCBpdCBibG9ja3MgdGhlIGZldGNoIGV2ZW50IG9uIGEgcHJvbWlzZS5cclxuICAgICBGdWxmaWxsbWVudCByZXN1bHQgd2lsbCBiZSB1c2VkIGFzIHRoZSByZXNwb25zZSwgYW5kIHJlamVjdGlvbiB3aWxsIGVuZCBpbiBhXHJcbiAgICAgSFRUUCByZXNwb25zZSBpbmRpY2F0aW5nIGZhaWx1cmUuXHJcbiAgKi9cbiAgZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzXG4gIC8qIFRoaXMgbWV0aG9kIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBjYWNoZSBlbnRyeSBtYXRjaGluZ1xyXG4gICAgIHRoZSByZXF1ZXN0LiBPbmNlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHdlIGNhbiB0aGVuIHByb3ZpZGUgYSByZXNwb25zZVxyXG4gICAgIHRvIHRoZSBmZXRjaCByZXF1ZXN0LlxyXG4gICovXG4gIC5tYXRjaChldmVudC5yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChjYWNoZWQpIHtcbiAgICAvKiBFdmVuIGlmIHRoZSByZXNwb25zZSBpcyBpbiBvdXIgY2FjaGUsIHdlIGdvIHRvIHRoZSBuZXR3b3JrIGFzIHdlbGwuXHJcbiAgICAgICBUaGlzIHBhdHRlcm4gaXMga25vd24gZm9yIHByb2R1Y2luZyBcImV2ZW50dWFsbHkgZnJlc2hcIiByZXNwb25zZXMsXHJcbiAgICAgICB3aGVyZSB3ZSByZXR1cm4gY2FjaGVkIHJlc3BvbnNlcyBpbW1lZGlhdGVseSwgYW5kIG1lYW53aGlsZSBwdWxsXHJcbiAgICAgICBhIG5ldHdvcmsgcmVzcG9uc2UgYW5kIHN0b3JlIHRoYXQgaW4gdGhlIGNhY2hlLlxyXG4gICAgICAgUmVhZCBtb3JlOlxyXG4gICAgICAgaHR0cHM6Ly9wb255Zm9vLmNvbS9hcnRpY2xlcy9wcm9ncmVzc2l2ZS1uZXR3b3JraW5nLXNlcnZpY2V3b3JrZXJcclxuICAgICovXG4gICAgdmFyIG5ldHdvcmtlZCA9IGZldGNoKGV2ZW50LnJlcXVlc3QpXG4gICAgLy8gV2UgaGFuZGxlIHRoZSBuZXR3b3JrIHJlcXVlc3Qgd2l0aCBzdWNjZXNzIGFuZCBmYWlsdXJlIHNjZW5hcmlvcy5cbiAgICAudGhlbihmZXRjaGVkRnJvbU5ldHdvcmssIHVuYWJsZVRvUmVzb2x2ZSlcbiAgICAvLyBXZSBzaG91bGQgY2F0Y2ggZXJyb3JzIG9uIHRoZSBmZXRjaGVkRnJvbU5ldHdvcmsgaGFuZGxlciBhcyB3ZWxsLlxuICAgIC5jYXRjaCh1bmFibGVUb1Jlc29sdmUpO1xuXG4gICAgLyogV2UgcmV0dXJuIHRoZSBjYWNoZWQgcmVzcG9uc2UgaW1tZWRpYXRlbHkgaWYgdGhlcmUgaXMgb25lLCBhbmQgZmFsbFxyXG4gICAgICAgYmFjayB0byB3YWl0aW5nIG9uIHRoZSBuZXR3b3JrIGFzIHVzdWFsLlxyXG4gICAgKi9cbiAgICBjb25zb2xlLmxvZygnV09SS0VSOiBmZXRjaCBldmVudCcsIGNhY2hlZCA/ICcoY2FjaGVkKScgOiAnKG5ldHdvcmspJywgZXZlbnQucmVxdWVzdC51cmwpO1xuICAgIHJldHVybiBjYWNoZWQgfHwgbmV0d29ya2VkO1xuXG4gICAgZnVuY3Rpb24gZmV0Y2hlZEZyb21OZXR3b3JrKHJlc3BvbnNlKSB7XG4gICAgICAvKiBXZSBjb3B5IHRoZSByZXNwb25zZSBiZWZvcmUgcmVwbHlpbmcgdG8gdGhlIG5ldHdvcmsgcmVxdWVzdC5cclxuICAgICAgICAgVGhpcyBpcyB0aGUgcmVzcG9uc2UgdGhhdCB3aWxsIGJlIHN0b3JlZCBvbiB0aGUgU2VydmljZVdvcmtlciBjYWNoZS5cclxuICAgICAgKi9cbiAgICAgIHZhciBjYWNoZUNvcHkgPSByZXNwb25zZS5jbG9uZSgpO1xuXG4gICAgICBjb25zb2xlLmxvZygnV09SS0VSOiBmZXRjaCByZXNwb25zZSBmcm9tIG5ldHdvcmsuJywgZXZlbnQucmVxdWVzdC51cmwpO1xuXG4gICAgICBjYWNoZXNcbiAgICAgIC8vIFdlIG9wZW4gYSBjYWNoZSB0byBzdG9yZSB0aGUgcmVzcG9uc2UgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICAgIC5vcGVuKHZlcnNpb24gKyAnIEJBUlQtdHJhbnNwb3J0YXRpb24tZGF0YScpLnRoZW4oZnVuY3Rpb24gYWRkKGNhY2hlKSB7XG4gICAgICAgIC8qIFdlIHN0b3JlIHRoZSByZXNwb25zZSBmb3IgdGhpcyByZXF1ZXN0LiBJdCdsbCBsYXRlciBiZWNvbWVcclxuICAgICAgICAgICBhdmFpbGFibGUgdG8gY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpIGNhbGxzLCB3aGVuIGxvb2tpbmdcclxuICAgICAgICAgICBmb3IgY2FjaGVkIHJlc3BvbnNlcy5cclxuICAgICAgICAqL1xuICAgICAgICBjYWNoZS5hZGQoZXZlbnQucmVxdWVzdCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dPUktFUjogZmV0Y2ggcmVzcG9uc2Ugc3RvcmVkIGluIGNhY2hlLicsIGV2ZW50LnJlcXVlc3QudXJsKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlIHNvIHRoYXQgdGhlIHByb21pc2UgaXMgc2V0dGxlZCBpbiBmdWxmaWxsbWVudC5cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICAvKiBXaGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCwgaXQgbWVhbnMgd2Ugd2VyZSB1bmFibGUgdG8gcHJvZHVjZSBhIHJlc3BvbnNlXHJcbiAgICAgICBmcm9tIGVpdGhlciB0aGUgY2FjaGUgb3IgdGhlIG5ldHdvcmsuIFRoaXMgaXMgb3VyIG9wcG9ydHVuaXR5IHRvIHByb2R1Y2VcclxuICAgICAgIGEgbWVhbmluZ2Z1bCByZXNwb25zZSBldmVuIHdoZW4gYWxsIGVsc2UgZmFpbHMuIEl0J3MgdGhlIGxhc3QgY2hhbmNlLCBzb1xyXG4gICAgICAgeW91IHByb2JhYmx5IHdhbnQgdG8gZGlzcGxheSBhIFwiU2VydmljZSBVbmF2YWlsYWJsZVwiIHZpZXcgb3IgYSBnZW5lcmljXHJcbiAgICAgICBlcnJvciByZXNwb25zZS5cclxuICAgICovXG4gICAgZnVuY3Rpb24gdW5hYmxlVG9SZXNvbHZlKCkge1xuICAgICAgLyogVGhlcmUncyBhIGNvdXBsZSBvZiB0aGluZ3Mgd2UgY2FuIGRvIGhlcmUuXHJcbiAgICAgICAgIC0gVGVzdCB0aGUgQWNjZXB0IGhlYWRlciBhbmQgdGhlbiByZXR1cm4gb25lIG9mIHRoZSBgb2ZmbGluZUZ1bmRhbWVudGFsc2BcclxuICAgICAgICAgICBlLmc6IGByZXR1cm4gY2FjaGVzLm1hdGNoKCcvc29tZS9jYWNoZWQvaW1hZ2UucG5nJylgXHJcbiAgICAgICAgIC0gWW91IHNob3VsZCBhbHNvIGNvbnNpZGVyIHRoZSBvcmlnaW4uIEl0J3MgZWFzaWVyIHRvIGRlY2lkZSB3aGF0XHJcbiAgICAgICAgICAgXCJ1bmF2YWlsYWJsZVwiIG1lYW5zIGZvciByZXF1ZXN0cyBhZ2FpbnN0IHlvdXIgb3JpZ2lucyB0aGFuIGZvciByZXF1ZXN0c1xyXG4gICAgICAgICAgIGFnYWluc3QgYSB0aGlyZCBwYXJ0eSwgc3VjaCBhcyBhbiBhZCBwcm92aWRlci5cclxuICAgICAgICAgLSBHZW5lcmF0ZSBhIFJlc3BvbnNlIHByb2dyYW1tYXRpY2FseSwgYXMgc2hvd24gYmVsb3csIGFuZCByZXR1cm4gdGhhdC5cclxuICAgICAgKi9cblxuICAgICAgY29uc29sZS5sb2coJ1dPUktFUjogZmV0Y2ggcmVxdWVzdCBmYWlsZWQgaW4gYm90aCBjYWNoZSBhbmQgbmV0d29yay4nKTtcblxuICAgICAgLyogSGVyZSB3ZSdyZSBjcmVhdGluZyBhIHJlc3BvbnNlIHByb2dyYW1tYXRpY2FsbHkuIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgdGhlXHJcbiAgICAgICAgIHJlc3BvbnNlIGJvZHksIGFuZCB0aGUgc2Vjb25kIG9uZSBkZWZpbmVzIHRoZSBvcHRpb25zIGZvciB0aGUgcmVzcG9uc2UuXHJcbiAgICAgICovXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8aDE+U2VydmljZSBVbmF2YWlsYWJsZTwvaDE+Jywge1xuICAgICAgICBzdGF0dXM6IDUwMyxcbiAgICAgICAgc3RhdHVzVGV4dDogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0pKTtcbn0pO1xuXG4vKiBUaGUgYWN0aXZhdGUgZXZlbnQgZmlyZXMgYWZ0ZXIgYSBzZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgaW5zdGFsbGVkLlxyXG4gICBJdCBpcyBtb3N0IHVzZWZ1bCB3aGVuIHBoYXNpbmcgb3V0IGFuIG9sZGVyIHZlcnNpb24gb2YgYSBzZXJ2aWNlIHdvcmtlciwgYXMgYXRcclxuICAgdGhpcyBwb2ludCB5b3Uga25vdyB0aGF0IHRoZSBuZXcgd29ya2VyIHdhcyBpbnN0YWxsZWQgY29ycmVjdGx5LiBJbiB0aGlzIGV4YW1wbGUsXHJcbiAgIHdlIGRlbGV0ZSBvbGQgY2FjaGVzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHZlcnNpb24gaW4gdGhlIHdvcmtlciB3ZSBqdXN0IGZpbmlzaGVkXHJcbiAgIGluc3RhbGxpbmcuXHJcbiovXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLyogSnVzdCBsaWtlIHdpdGggdGhlIGluc3RhbGwgZXZlbnQsIGV2ZW50LndhaXRVbnRpbCBibG9ja3MgYWN0aXZhdGUgb24gYSBwcm9taXNlLlxyXG4gICAgIEFjdGl2YXRpb24gd2lsbCBmYWlsIHVubGVzcyB0aGUgcHJvbWlzZSBpcyBmdWxmaWxsZWQuXHJcbiAgKi9cbiAgY29uc29sZS5sb2coJ1dPUktFUjogYWN0aXZhdGUgZXZlbnQgaW4gcHJvZ3Jlc3MuJyk7XG5cbiAgZXZlbnQud2FpdFVudGlsKGNhY2hlc1xuICAvKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCB3aWxsIHJlc29sdmUgdG8gYW4gYXJyYXkgb2YgYXZhaWxhYmxlXHJcbiAgICAgY2FjaGUga2V5cy5cclxuICAqL1xuICAua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAvLyBXZSByZXR1cm4gYSBwcm9taXNlIHRoYXQgc2V0dGxlcyB3aGVuIGFsbCBvdXRkYXRlZCBjYWNoZXMgYXJlIGRlbGV0ZWQuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8vIEZpbHRlciBieSBrZXlzIHRoYXQgZG9uJ3Qgc3RhcnQgd2l0aCB0aGUgbGF0ZXN0IHZlcnNpb24gcHJlZml4LlxuICAgICAgcmV0dXJuICFrZXkuc3RhcnRzV2l0aCh2ZXJzaW9uKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgLyogUmV0dXJuIGEgcHJvbWlzZSB0aGF0J3MgZnVsZmlsbGVkXHJcbiAgICAgICAgIHdoZW4gZWFjaCBvdXRkYXRlZCBjYWNoZSBpcyBkZWxldGVkLlxyXG4gICAgICAqL1xuICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoa2V5KTtcbiAgICB9KSk7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdXT1JLRVI6IGFjdGl2YXRlIGNvbXBsZXRlZC4nKTtcbiAgfSkpO1xufSk7Il0sImZpbGUiOiJzd0dldERhdGEub2xkLmpzIn0=
