var num = 10;
var obj = {num: 20};
obj.fn = (function (num) {
    this.num = num * 3;
    num ++;
    return  function (n) {
        this.num += n;
        num ++;
        console.log(num);
    }
})(obj.num);

var fn = obj.fn;
fn(5);
obj.fn(10);
//  22 23
/**
 *  关键是this的指向. fn前面没点 ，所以两个都是window
 *  自执行函数中的this是window;
 * **/