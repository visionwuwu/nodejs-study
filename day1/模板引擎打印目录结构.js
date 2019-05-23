var fs=require('fs')
var template=require('art-template')
var http=require('http')
var wwwDir='D:\\黑马\\nodejs\\nodejs复习\\www'
http.createServer(function (req,res) {
    var url=req.url
    url=(url==='/'?'/index.html':url)
    console.log('请求的路径是'+url)
    fs.readFile(wwwDir+url,function (err,data) {
        if (err){
            if (url!=='/index.html'){
                res.setHeader('Content-Type','charset=utf-8')
                res.end('没有 首页');
            }
            else {
                fs.readdir(wwwDir,function(err,files){
                    if (err){
                        res.setHeader('Content-Type','charset=utf-8')
                        return res.end('网站不存在 404!')
                    }
                    //使用模板引擎
                    fs.readFile('template/index.html',function(err,data){
                        var htmlStr=template.render(data.toString(),{
                            names:files,
                            describe:'目录',
                            title:'不变'
                        })
                        /*响应*/
                        res.setHeader('Content-Type','text/html')
                        res.end(htmlStr)
                    })
                })
            }
            return false;
        }
        res.end(data)
    })
}).listen(5000,function(){
    console.log('Server is running')
})