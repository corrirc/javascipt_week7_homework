const RequestHelper = function (url) {
  this.url = url
}

// RequestHelper.prototype.get = function (onComplete) {
//     return fetch(this.url)
//     .then((res) => res.json());
//   }

RequestHelper.prototype.get = function (onComplete) {
const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', function() {
    if(this.status !== 200){
      return;
    }
    const data = JSON.parse(this.responseText);
    onComplete(data);
  });
  xhr.setRequestHeader('X-Auth-Token', 'd6a51eb8581e457b8507c2edc1a19f94');
  xhr.send();
}

module.exports = RequestHelper;
