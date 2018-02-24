vue全家桶 vue.js +vue-router + vuex + axios  

vue双向数据绑定的原理 Object.defineProperty(es5的)，IE8+  

npm init -y （-y是默认，不加自己配置）  
初始化，会产生一个package.json的文件，描述项目依赖。  
## 1 data
data会被vm代理，vm.$data.msg="haha";  vm.msg='hehe',都可以改变
{{msg}}里面可以放表达式，赋值，三元运算符
## 2 vue双向数据绑定的原理
vue的指令都是以v-开头，input selected checked的value默认情况下会忽略掉
v-model 实现双向数据绑定，
原理 Object.defineProperty
let obj={};
let temp={};
Object.defineProperty(obj,'name',{
	get(){
		return temp["name"];
	},
	set(newVal){
		temp["name"]=newVal;
	}
});
## 3 基础指令
v-text ='text'效果{{}}，防止刷新出现大括号，或者加v-cloak,并结合css  
```
[v-cloak] {
    display: none;
}
```
v-once 初始化一次，后面修改对其无效
v-html='html',相当于innerHTML

## 4 响应式变化
使用变量的时候，先初始化，否则新加的属性不会导致页面刷新
如：
```
data: {
   //第一种情况
	a: {name: ''}
	// 第2种情况
	a: {}
}
```
在控制台输入，vm.a.name=1; 会给a.name上面加上get set方法，会刷新页面。 
如果是第二种情况，则，vm.a.name=1; 页面没反应的。  
所以即使为空值，也要写上去。  
或者设置 vm.$set(vm.a,"name",value);这个也是响应式的。  
或者直接改变a, vm.a={name: 2};  

改变数组中的某一项是监控不到  
vm.arr[0]=100; // 不行，不能刷新页面  
数组长度也不行；  
可以用pop push shift unshift reserve splice 操作改变。  
vm.arr= vm.arr.map(x=>x*3);//map filter是生成的新数组，所以要替换掉原有数组。  

## 5  v-for 循环
要循环谁，就在谁上面加v-for,用item in arr或者item of arr;    
数组：(item,index) in arr  
对象： (value,key) in json 或者 (value,key,index) in json  
```
<li v-for="(item,index) in arr">{{item}}</li>
```

## 6 事件
原生的要加上();  
```
<div onclick='fn()'></div>  
```
vue的如果没有参数，不用加，如果要用事件对象，$event推荐放在最后一个参数  
```
<div v-on: click="fn"></div>  
<div @click="fn(a,$event)"></div> 
```
methods中的this都指向vue实例，不用箭头函数，否则this变成window了。   
@keyup.enter: enter是修饰符，当按下enter时候执行  
