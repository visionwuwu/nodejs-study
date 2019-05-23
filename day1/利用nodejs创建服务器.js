/*引入 http 服务器模块*/
var http=require('http');
/*创建一个服务器*/
var server=http.createServer();
/*绑定请求事件 请求完毕执行回调函数 request请求对象 response响应对象*/
server.on('request',function (request,response) {
    /*查看当前请求路径并打印*/
    var url=request.url;
    console.log("请求路径是===>"+url);
    /*对客户端做出响应*/
    /*write()方法为写入的响应内容*/
    response.setHeader('Content-Type',"text/html;charset=utf-8");
    response.write("哈喽！哈喽",'utf8');
    /*响应必须关闭end()*/
    response.end();
});
/*监听3000端口 启动服务器 启动成功执行回调函数*/
server.listen(4000,function () {
   console.log("服务器启动成功");
});