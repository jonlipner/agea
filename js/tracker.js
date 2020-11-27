/*const isIncognito => () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
      const {usage, quota} = await navigator.storage.estimate();
      console.log(`Using ${usage} out of ${quota} bytes.`);

      if(quota < 120000000){
        return true;
      } else {
        return false;
      }   
  } else {
      return false;
  }
}*/

let userAgent = navigator.userAgent;

//let incognito = isIncognito();

let referrer = document.referrer;

let hash = localStorage.getItem('userHash');

let headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "User-Agent": userAgent,
    //"Incognito": incognito,
    "Referrer": referrer,
    "Hash": hash,
});

fetch('https://agea.url/post', {
        method: 'POST',
        headers: headers,
        body: ''
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });