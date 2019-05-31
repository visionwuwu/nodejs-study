const express = require('express')

const path = require('path')

const app = express()

const router = require('./routers')

const bodyParser = require('body-parser')

const session = require('express-session')

// 开放静态服务
// 动态服务路径相对于执行node命令所处目录的路径
app.use('/public/', express.static(path.join(__dirname, '/public/')))

app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')))

// 配置art-template在express中使用

app.engine('html', require('express-art-template'))

// 配置解析表单 post请求体
app.use(bodyParser.urlencoded( {extended: false} ))

app.use(bodyParser.json())

// 配置session 
app.use(session({
  secret: 'keyboard cat', // 加密更加安全 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // 无论你是否使用session 默认将发送一把钥匙 sessionID
}))

// 将路由挂载到服务器上
app.use(router)

// 监听5000端口 开启服务器
app.listen(5000, function () {
	console.log('Server is running...')
})