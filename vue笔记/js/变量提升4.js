var a=10, b=11, c=12;
function test(a) {
    a=1;
    var b=2;
    c=3;
}
test(10);
console.log(a);
console.log(b);
console.log(c);
// 10 11 3
/***
 *  a 为形参，b在内部var了一次，所以 a、b都是私有变量，c 为全局变量
 *  最后输出的是全局变量。
 * **/