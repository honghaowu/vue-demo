/**
 * 1 条件判断：
 * &&  都为真，整体才为真
 * || 只要有一个为真，则整体为真
 *
 *  2 在赋值操作中
 *   A||B   A为真，则返回A； A为假，返回B（无论B是否为真）；
 *   A&&B  与上面相反，A为假，返回A；A为真，返回B的。优先级高于||
 *   function(num, callback){
 *       num = num || 0;
 *       callback&&callback();
 *   }
 *
 * **/
// console.log(0&&2);
var foo="hello";
(function (foo) {// 形参赋值，其实也默认声明过
    console.log(foo);
    var foo=foo||"hi";
    console.log(foo);
})(foo);
console.log(foo);
// hello hello hello
