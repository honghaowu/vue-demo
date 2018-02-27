if(!("a" in window)){
    var a=1;
}
console.log(a);
// undefined;
/***
 * 分析： 首先变量提升，var a;  (变量提升不管条件是否成立，都会提升)
 * 相当于window.a=undefined;
 * 则条件不成立，输出undefined；
 * **/