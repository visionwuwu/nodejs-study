/*引入 fs模块*/
var fs=require('fs');
//创建文件 写文件
/*
*写入成功 error 是null
*写入失败 error 是error对象
*
 */
// fs.writeFile('hello-nodejs.txt','你好 nodejs',function (error) {
//     if (!error){
//         console.log("文件写入成功!");
//     }
// });
/*
* 读取文件 fs.readFilr(fileName,callback(data,error))
* 文件读取成功 执行回调函数
* 成功 data为读取内容 error为null
* 失败 data为null error为错误对象
* */
fs.readFile('hello-nodejs.txt',function (error,data) {
    if (error){
        console.log(error);
        console.log('文件读取失败');
        return false;
    }
    console.log(data.toString());
});