var  ary=[1,2,3,4];
function fn(ary){
    ary[0]=0;
    ary=[0];
    ary[0]=100;
    return ary;
}
var res =fn(ary);
console.log(ary); //
console.log(res);
//
/***
 * 分析
 * 全局作用域   var ary ;   fn ,res
 * 代码执行  ary=[1,2,3,4];  开辟空间存起来
 * fn(ary)是把开辟的ary的空间地址传给形参，则局部作用域的和全局作用域的此时指向同一个地址，fn中ary[0]=0; 修改了全局的内容
 * ary=[0]； 则是重新开辟一个数组空间，把局部变量的ary指向他；
 * ary[0]=100; 此时的修改的为局部的，即刚才创建的那个[0]的
 *所以，结果为 ： 【0，2，3，4】  100
 * **/