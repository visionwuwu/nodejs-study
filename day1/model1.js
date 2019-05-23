var foo=1
var m2=require('./model2.js')
function f(){
    console.log('m1')
}
// console.log(foo)
// console.log(m2.foo)
exports.f=f;
//模块与模块之间有模块作用域 互相访问不到对方的变量 函数
/*
* require 有两个作用
* 1. 引入模块文件 执行引入的模块代码
* 2. 获取被引入的模块文件的导出对象 exports
* */
