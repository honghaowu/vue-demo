function a(callback){
    setTimeout(()=>{
        let s=8;
        callback(s);
    })
}
let b=function (c){
    console.log(c);
};
a(b);
// b作为a的回调函数。