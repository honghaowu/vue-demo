console.log(document.parentNode);
console.log(document.parentnode);
// null undefined

/**
 * undefined
 * 1 变量提升，只声明未定义
 * 2 严格模式下，没有明确指定执行主体，this就是undefined
 * 3 对象属性值没有设置，默认就是undefined
 * 4 函数定义形参不传值，默认是undefined；
 * 5 函数没有返回值或者return;默认返回undefined;
 * null
 * 1 手动设置变量值或者对象属性或者方法释放为null；
 * 2 JS获取DOM元素，如果没有获取到指定的元素，结果是null；
 * 3 Object.prototype.__proto__=null; 原型链的终点
 * 4 正则捕获，没有获取的时候，返回null;
 * */