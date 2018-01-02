1 安装live-server生成demo目录
    live-server 安装
    cnpm install -g live-server
    live-server
    Hello world
2   --
3   -- 
4   v-text 和{{}}效果一样，但是网速慢或者代码出错，{{}}会渲染在页面上。v-text不会，仅显示为空白。  
    v-html 容易引起xxs攻击，尽量少用。
5   v-on
6   v-bind 例如：v-bind:src 对标签的自带的属性绑定变量。

vue生命周期：

beforecreated：el 和 data 并未初始化 
created:完成了 data 数据的初始化，el没有
beforeMount：完成了 el 和 data 初始化 
mounted ：完成挂载

1.el: undefined, data: undefined,message: undefined
即
beforeCreate(){}
2- el :undefined,data和message有
created(){}
3-完成了 el 和 data 初始化 ,但是Dom中未渲染，显示的是{{message}}
beforeMount()
4 mounted ：完成挂载
mounted();
