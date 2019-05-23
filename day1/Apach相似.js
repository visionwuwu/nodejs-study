/*引入文件操作模块*/
var fs=require('fs')
/*引入服务器创建模块*/
var http=require('http')
//创建一个web服务器
var server=http.createServer()
//监听请求事件 处理回调函数
/*定义一个网站根目录路径变量*/
var wwwDir='D:\\黑马\\nodejs\\nodejs复习\\www\\';
server.on('request',function (req,res) {
    /*根据请求的路径找到 对应网站的资源文件*/
    var url = req.url
    console.log('请求的路径是'+url)
    if (url === '/'||url==='/index.html') {
        //设置响应头的响应内容为html 字符编码为utf8
        res.setHeader('Content-Type','text/html;charset=utf-8')
        /*读取网站根目录*/
        fs.readFile(wwwDir+'index.html',function(err, data){
            if (err){
                return res.end('404 Not Found!!!');
            }
            res.end(data);
        })
    }
    else if(url==='/index.js'){
        //设置响应类型为 字符编码为utf8
        res.setHeader('Content-Type','application/x-javascript;charset=utf-8')
        fs.readFile(wwwDir+'index.js',function(err, data){
            if (err){
                return reqs.end('404 Not Found!!!')
            }
            res.end(data)
        })
    }
    else if (url==='/images/wc.jpg') {
        //设置响应体类型为jpg
        res.setHeader('Content-Type','image/jpeg')
        fs.readFile(wwwDir+'images\\wc.jpg',function(err,data){
            if (err){
                return res.end('404 Not Found!!!')
            }
            res.end(data)
        })
    }
    else{
        res.end('404 Not Found!!!')
    }
})
//监听3000端口 启动服务器
server.listen(3000,function () {
    console.log('Server is running...')
})
