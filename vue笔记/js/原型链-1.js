function fun() {
    this.a=0;
    this.b=function () {
        console.log(this.a);
    }
}
fun.prototype={
    b: function () {
        this.a=20;
        console.log(this.a);
    }
    c: function () {
        this.a=30;
        console.log(this.a);
    }
}
var my_fun=new fun();
my_fun.b();
my.fun.c();
// this对应的是my_fun，则0
// this.a在c函数中被修改为30；并输出