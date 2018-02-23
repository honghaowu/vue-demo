getData(method, url){
    var promise = new Promise(function(resolve, reject){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(method, url);
        xmlHttp.send();
        xmlHttp.onload = function () {
            if (this.status == 200 ) {
                resolve(this.response);
            } else {
                reject(this.statusText);
            }
        };
        xmlHttp.onerror = function () {
            reject(this.statusText);
        };
    })
    return promise;
}

getData('get','www.xxx.com').then(successFun, failFun);