// 生成一个随机数，看是不是去
function go() {
    let p= new Promise((resolve,reject)=>{
        setTimeout(function () {
            if(Math.random()-0.5>0){
                resolve('去');
            }else{
                reject('不去');
            }
        },1000);
    });
    return p;
}
go().then((data)=>{
        console.log(data);
    },(data)=>{
        console.log(data);
    });