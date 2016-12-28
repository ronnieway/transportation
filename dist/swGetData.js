'use strict';(void 0).addEventListener('load',()=>{if(window.Notification&&Notification.permission!=='granted'){Notification.requestPermission(a=>{if(Notification.permission!==a){Notification.permission=a}})}});(void 0).addEventListener('install',a=>{a.waitUntil(caches.open('BART-transportation-data').then(cache=>cache.addAll(['/','/index.html','/README.md','/css/main.css','/js/main.js','/img/map.gif'])))});(void 0).addEventListener('activate',a=>{a.waitUntil(caches.keys().then(cacheNames=>Promise.all(cacheNames.filter(cacheName=>cacheName!=='BART-transportation-data').map(b=>{console.log('Deleting '+b);return caches.delete(b)}))))});(void 0).addEventListener('fetch',a=>{a.respondWith(caches.match(a.request).then(b=>{if(b){return b}var c=a.request.clone();return fetch(c).then(d=>{if(!d||d.status!==200){return d}var e=d.clone();caches.open('BART-transportation-data').then(f=>{f.add(c)});return d}).catch(d=>{console.log('There has been a problem with your fetch operation: '+d.message)})}))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzd0dldERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG51bmRlZmluZWQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0Ly8gQXQgZmlyc3QsIGxldCdzIGNoZWNrIGlmIHdlIGhhdmUgcGVybWlzc2lvbiBmb3Igbm90aWZpY2F0aW9uXG5cdC8vIElmIG5vdCwgbGV0J3MgYXNrIGZvciBpdFxuXHRpZiAod2luZG93Lk5vdGlmaWNhdGlvbiAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gXCJncmFudGVkXCIpIHtcblx0XHROb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oZnVuY3Rpb24gKHN0YXR1cykge1xuXHRcdFx0aWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSBzdGF0dXMpIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPSBzdGF0dXM7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG51bmRlZmluZWQuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRldmVudC53YWl0VW50aWwoY2FjaGVzLm9wZW4oJ0JBUlQtdHJhbnNwb3J0YXRpb24tZGF0YScpLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XG5cdFx0cmV0dXJuIGNhY2hlLmFkZEFsbChbJy8nLCAnL2luZGV4Lmh0bWwnLCAnL1JFQURNRS5tZCcsICcvY3NzL21haW4uY3NzJywgJy9qcy9tYWluLmpzJywgJy9pbWcvbWFwLmdpZiddKTtcblx0fSkpO1xufSk7XG5cbnVuZGVmaW5lZC5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGZ1bmN0aW9uIChldmVudCkge1xuXHRldmVudC53YWl0VW50aWwoY2FjaGVzLmtleXMoKS50aGVuKGZ1bmN0aW9uIChjYWNoZU5hbWVzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGNhY2hlTmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChjYWNoZU5hbWUpIHtcblx0XHRcdHJldHVybiBjYWNoZU5hbWUgIT09ICdCQVJULXRyYW5zcG9ydGF0aW9uLWRhdGEnO1xuXHRcdH0pLm1hcChmdW5jdGlvbiAoY2FjaGVOYW1lKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRGVsZXRpbmcgJyArIGNhY2hlTmFtZSk7XG5cdFx0XHRyZXR1cm4gY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuXHRcdH0pKTtcblx0fSkpO1xufSk7XG5cbnVuZGVmaW5lZC5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuXHRcdGlmIChyZXNwKSB7XG5cdFx0XHRyZXR1cm4gcmVzcDtcblx0XHR9XG5cdFx0dmFyIGZldGNoUmVxdWVzdCA9IGV2ZW50LnJlcXVlc3QuY2xvbmUoKTtcblx0XHRyZXR1cm4gZmV0Y2goZmV0Y2hSZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG5cdFx0XHRpZiAoIXJlc3AgfHwgcmVzcC5zdGF0dXMgIT09IDIwMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcDtcblx0XHRcdH1cblx0XHRcdHZhciByZXNwb25zZVRvQ2FjaGUgPSByZXNwLmNsb25lKCk7XG5cdFx0XHRjYWNoZXMub3BlbignQkFSVC10cmFuc3BvcnRhdGlvbi1kYXRhJykudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcblx0XHRcdFx0Y2FjaGUuYWRkKGZldGNoUmVxdWVzdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiByZXNwO1xuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XG5cdFx0fSk7XG5cdH0pKTtcbn0pOyJdLCJmaWxlIjoic3dHZXREYXRhLmpzIn0=
