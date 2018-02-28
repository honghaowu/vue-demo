var foo=1;
function bar() {
    if(!foo){
        var foo=10;
    }
    console.log(foo);
}
bar();
/***
 * foo 外面的是全局变量
 * foo 里面的有var 是局部变量
 * 函数内部的顺序为，参数赋值，变量提升，函数体执行
 * 所以，无论if 是否成立，都会变量提升。
 * 则，函数内部，foo=undefined   !foo为true
 * 执行foo=10;
 * 输出10；
 * */
