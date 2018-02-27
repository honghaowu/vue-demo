function fn(i) {
    return function (n) {
        console.log((n + (--i)));
    }
}
var f= fn(2);
f(3); // 4
fn(4)(5); // 8
fn(6)(7); // 12
f(8); // 8