var fs=require('fs')
var http=require('http')
/*引入模板引擎模块*/
var template=require('art-template')
var server=http.createServer()
var wwwDir='D:\\黑马\\nodejs\\nodejs复习\\day1'
server.on('request',function(req,res){
    var url=req.url
    console.log('请求的路径是'+url)
    var content=`
           <tr>
               <td>{{ name }}</td>
               <td>{{ work }}</td>
               <td>
                   {{ each hobbys }}
                        {{ $value }}
                   {{ /each }}
               </td>
           </tr>
        `;
    /*使用模板*/
    var htmlStr=template.render(content,{
        name: 'bw',
        work: '程序员',
        hobbys: [
            '唱歌',
            '跳舞',
            '写代码',
            '旅游'
        ]
    })
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end(htmlStr)
})
server.listen(5000,function(){
    console.log('Server is running')
})