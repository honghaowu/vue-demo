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

vue-cli

vue-cli的安装(常用命令)
 npm install vue-cli -g
 vue init webpack myproject
 cd myproject
 npm install
 npm run dev
配置文件
.
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
.