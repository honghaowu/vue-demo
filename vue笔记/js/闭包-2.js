/***
 * 1 变量提升和全局私有变量考察
 * 函数内部的顺序是先形参赋值，然后变量提升，然后函数执行
 * **/
console.log(a);
var a=12;
function fn() {
    console.log(a);
    var a=20;
    // a=20,如果不加var  则根据作用域链找，a为全局变量。
}
fn();
console.log(a);
// undefined undefined 12
function fn1(a) {
    console.log(a);
    var a=20;
    console.log(a);
}
fn1(30);
// 30 20   先形参赋值，然后才变量提升；
//闭包作用，保护里面的私有变量不受外面的干扰，同时，也避免了全局变量的污染。
//  形成一个不销毁的栈内存保存变量。
// 缺点： 耗内存，内存泄漏等。


