/*引入http模块 用于编写和创建web服务器*/
var http=require('http');
/*创建一个服务器*/
var server=http.createServer();
/*绑定 request请求事件 */
server.on('request',function (req,res) {
    /*设置响应体的文件类型*/
    res.setHeader('Content-Type','text/palin;charset=utf-8');
   // console.log(req.socket.remoteAddress,req.socket.remotePort);
   //获取请求的主机和端口
   //  var host=req.getHeader('Content-Length');
    /*获取请求的url地址*/
    var url=req.url;
   if (url == '/'){
        console.log("请求的路径是"+url);
        res.end("index page");
   }
   else if (url=='/yan'){
       console.log("请求的路径是"+url);
       res.end('yan哈哈');
   }
   else {
       console.log("请求的路径是"+url);
       res.end('你访问的页面不存在404!');
   }
});
//监听4000端口 启动服务器
server.listen(4000,function () {
   console.log('服务器启动成功');
});