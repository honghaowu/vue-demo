var a= 10;
function fn() {
    console.log(a);
    var a=12;
}
fn();
console.log('全局：'+a);
// undefined  10;
// fn内部的a为局部变量，局部变量在函数执行完毕后销毁。所以var a=12; 在外面已经把这个a销毁了。最后执行的是全局的a;
var a= 10;
function fn() {
    console.log(a);
    a=12;
}
fn();
console.log('全局：'+a);
// 10 12
// fn中的a会沿着作用域链找到全局的，所以输出10，函数中对全局的修改，所以最后全局的为12；

// b=10;
console.log(b);
b=10;
// 报错，b未定义；b is not defined;
