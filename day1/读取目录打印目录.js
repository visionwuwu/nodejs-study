var fs=require('fs')
var http=require('http')
var server=http.createServer()
var wwwDir='D:\\黑马\\nodejs\\nodejs复习\\www'
server.on('request',function (req,res) {
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
                    var dirModle=``
                    files.forEach(function(item){
                        dirModle+=`
                            <tr>
                                <td><a href="D:\\黑马\\nodejs\\nodejs复习\\www">${item}</a></td>
                                <td>哈哈</td>
                                <td>2017/11/2 上午10:32:47</td>
                            </tr>
                            `
                    })
                    fs.readFile('D:\\黑马\\nodejs\\nodejs复习\\day1\\template\\index.html',function(err,data){
                        res.setHeader('Content-Type','text/html')
                        var content=data.toString()
                        res.end(content.replace('燕',dirModle))
                    })
                })
            }
            return false;
        }
        res.end(data)
    })
})
server.listen(5000,function(){
    console.log('Server is running')
})