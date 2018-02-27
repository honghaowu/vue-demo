let url='www.baidu.com?wd=wh&age=28';
/***
 * 第一种方法
 * 原理： 首先看是否存在？，不存在，则后面没有跟参数，
 * 存在，则用？分割url，取后面部分，再根据&分割，再进一步根据=分割
 * 用到str.indexOf
 * str.split()方法
 * 最后把分割的项存到一个对象里面
 * **/

String.prototype.myUrlQuery=function () {
    let obj={};
    if(this.indexOf("？")!==-1){
        return obj;
    }else{
        let url=this.split('?');
        let item=url[1].split("&");//[wd=wh,age=28]
        for(let i=0; i<item.length; i++){
            let cur=item[i].split('=');
            obj[cur[0]]=cur[1];
        }
    }
    return obj;
};
let url1=url.myUrlQuery();
console.log(url1);
/***
 * 第二种方法
 * 利用正则;靠等号链接，并且前后不能是=？&
 * /([^&=?]+)=(([^&=?]+)/g
 * str.replace(reg,function(){});
 * function中参数，第一个为符合要求的整体匹配，剩下的为小括号组成的小组
 * **/
String.prototype.myQueryReg=function(){
    let reg=/([^&?=]+)=([^&=?]+)/g;
    let obj={};
    this.replace(reg,function (...arg) {
        obj[arg[1]]=arg[2];
    });
    return obj;
};
let url2=url.myQueryReg();
console.log(url2);