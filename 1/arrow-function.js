 // 箭头函数，不具有this和arguments,自己不具备this,所以this是外层的，也导致箭头函数不能作为构造函数
 // 更改this的指向  1） call apply bind  2)var that=this; 3)=>箭头函数
function sum(a,b) {
    return a+b;
}
let sum = (a,b)=>a+b;// 如果函数体return的是一句，则可以直接去掉大括号和return，参数是一个可以省略小括号。

 // 闭包
 let a=function (b) {
     return function (c) {
         return b+c;
     }
 }();
 //实际上a是function(c){return b+c;}，函数执行后返回的是一个引用数据类型，且被外界变量接受，此时函数不会销毁，a中占用了父级的b;

 //库和框架
 //  框架 vue 拥有完整的解决方案，是库的升级。
 // 库 jquery  underscore zepto annimate.css