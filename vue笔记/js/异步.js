/**
 * 同步：Js当前的任务没有完成，下面的任务不会执行，只有当当前的任务完成，才会继续往下执行
 * 异步：JS当前的任务没有完成，放入事件队列中，继续执行下面的代码
 * 所有的事件绑定都是异步编程
 * **/

for(var i=0; i<inputs.length; i++){
    inputs[i].onclick=function () {
        console.log(i);//
    }
}
//突出两个点，事件绑定是*异步编程；作用域链，函数中作用域查找，上面的i已经变为5；
/**
 * 1 自定义属性
 * **/
for(var i=0; i<inputs.length; i++){
    inputs[i].myIndex=i;
    inputs[i].onclick=function () {
        console.log(i);
    }
}
/***
 * 闭包解决
 * */
for(var i=0; i<inputs.length; i++){
    (function (i) {
        inputs[i].onclick=function () {
            console.log(i);
        }
    })(i)
}
//闭包写法2
for(var i=0; i<inputs.length; i++){
        inputs[i].onclick=(function (i) {
            return function () {
                console.log(i);
            }
        })(i);
}
/***
 * 3 块级作用域
 * **/
for(let i=0; i<inputs.length; i++){
    inputs[i].onclick=function () {
        console.log(i);//
    }
}