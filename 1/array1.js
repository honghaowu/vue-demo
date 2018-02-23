let arr=[1,2,3,4];
// 1)forEach不支持return
arr.forEach(function (item,index,arr) {
    console.log(item); // 1 2 3 4
});
/**
 * forEach 不支持return
 * for in,即for(key in arr) key是字符串类型，而且
 * 如果arr.b=100;则也会遍历出数组上的属性，而forEach不会。
 *
 * **/
// for in 可以遍历数组，也可以遍历对象
arr.b=100;
for(let key in arr){
    console.log(arr[key]); // 1 2 3 4 100 ,会把数组的私有属性遍历
}
// for of  支持return 并且是item of arr ，不能遍历对象
for(let item of arr){
    console.log(item); //  1 2 3 4
}
  // 2）filter过滤，返回的是回调函数true组成的新数组
let filterArr=arr.filter(function(item,index,arr){
    return item > 2;
});
console.log(filterArr);
// filter 去重
var uniqueArr=[1,2,3,4,5,2,3,6].filter(function(item,index,arr){
    return arr.indexOf(item)===index;
});
console.log(uniqueArr);
/*[...new Set(arr)]也可以去重数组*/

// 3）map映射为一个新的数组,回调函数中返回操作后的数组，数组length不变
let arrMap=arr.map(function(item,index,arr){
    return `<li>${item}</li>`; // ``是字符串模板，${}是变量
});
console.log(arrMap.join(""));

// 4）includes 返回boolean,5不是arr3的一项，所以返回false；
let arr3 = [1, 2,3, 55];
console.log(arr3.includes(5));//false

// 5） find返回找到的那一项，找到就不继续找了,找不到返回undefined，不会改变原有数组,回调函数返回true表示找到
let result=arr3.find(function (item,index) {
    return item.toString().indexOf(5)>-1;
});
console.log(result);

// 6）some 找true，找到停止，找不到返回undefined；
// 7 ）every找false,找到停止

// 8）reduce 收敛函数，回调函数4个参数，返回叠加后的结果,原数组不变
let total=arr3.reduce(function (prev,next,index,arr) {// index为next的索引,第一次index为1，把第一项作为prev；
    return prev+next; //本次的返回值，会作为下一次的prev
});
console.log(total);
// reduce 第一个参数为回调函数，第二个参数设置为首次的prev的值；
let sum=[{price: 20,count: 1},{price: 30, count: 2}].reduce(function (prev,next,index,arr) {
    return prev+next.price*next.count;
},0);
console.log(sum);

// 数组的扁平化
let plat=[[1,2,3],[2,3,4,],[4,5,6]].reduce(function (prev,next) {
   return prev.concat(next);
});
console.log(plat);