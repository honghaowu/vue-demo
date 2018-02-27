// "use strict";
var a=4;
function b(x,y,a) {
    console.log(a);
    arguments[2]=10;
    console.log(a);
}
a=b(1,2,3);
console.log(a);
// 非严格模式下： 实参和形参存在映射    3  10  undefined
// 严格模式下： 3  3  undefined
/***
 * b中的a为形参，a=3;
 * 改变实参，因为非严格模式存在实参与形参映射，则a=10; 如果修改a，对应的argument也会改变。
 * 最后，函数返回值undefined；
 * 严格模式下，映射关系被切断，相互之间互不干扰。
 * **/
