var  n=0;
function a() {
    var n=10;
    function b() {
        n++;
        console.log(n);
    }
    b();
    return b;
}
var c= a();
c();
console.log(n);
// 11   12  0
/***
 *作用域 3 个： 全局： a   b的私有作用域
 * a里面的n 是私有变量，
 * 假设A的作用域AAAFFF111, B的作用域BBBFFF111
 * 则c=BBBFFF111； 外部的变量c占用B，B中有n,导致A释放不了。形成闭包。
 * a执行到b()时候，输出11；
 * c(); 即b再次执行，此时的n为12；
 * **/