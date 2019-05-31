const express = require('express')

// 创建一个路由容器
const router = express.Router()

// 引入users模块
const User = require('./modules/users')

// 引入md5
const md5 = require('blueimp-md5')

// 引入express-session包


// 设计路由
router.get('/', function (req, res, next) {
	res.render('index.html', {
		session: req.session.user
	})
})

// 登录页面
router.get('/login', function (req, res, next) {
	res.render('login.html')
})

// 处理登录请求
router.post('/login', function (req, res, next) {
	var user = req.body

	user.password = md5(md5(user.password))

	User.findOne({
		email: user.email,
		password: user.password
	})
	.then(function (data) {
		if (data) {
			
			req.session.user = data

			res.status(200).json({
				err_code: 200
			})
		}
		else {
			res.json({
				err_code: 500
			})
		}
	})
})

// 注册页面

router.get('/register', function (req, res, next) {
	res.render('register.html')
})

// 处理注册请求
router.post('/register', function (req, res, next) {
	// function title (err_msg) {
	// 	res.render('register.html', {
	// 		status: err_msg
	// 	})
	// }
	// 获取表单提交的数据
	var user = req.body
	user.password = md5(md5(user.password))
	console.log(user)
	console.log(user.password)
	/* 校验数据
	*  	根据条件(用户名和邮箱)判断是否存在
	*	存在提示
	*	不存在创建一个
	*/
	User.findOne({
		$or: [
			{email: user.email},
			{nickname: user.nickname}
		]
	})
	.then(function (data) {
		if (data) {
			return res.json({
				err_code: 100
			})
		}
		/*res.status(200).json({
			err_code: 200,
			message: ''
		})*/
		return new User({
			email: user.email,
			nickname: user.nickname,
			password: user.password
		}).save()
	})
	.then(function (data) {
		/*res.status(200).json({
			err_code: 200,
			message: '恭喜你注册成功'
		})*/
		if (!data) {
			return res.json({
				err_code: 300
			})
		}
		// res.render('register.html', {
		// 	status: '恭喜你注册成功'
		// })

		// 由于http请求是无状态的 这里保存一个session在服务端 发送一把私钥到客户端 服务端存储一把公钥
		// 用于建立 session会话

		req.session.user = user

		res.status(200).json({
			err_code: 200
		})
	})
	
})

// 个人信息
router.get('/settings/profile', function (req, res, next) {
	res.render('settings/profile.html')
})

// 管理
router.get('/settings/admin', function (req, res, next) {
	res.render('settings/admin.html')
})

// 新建一个
router.get('/topics/new', function (req, res) {
	res.render('topic/new.html')
})

// 退出登陆
router.get('/logout', function (req, res) {
	// 清除session
	req.session.user = null

	// 重定向到首页
	res.redirect(302, '/')
})


// 404处理
router.use(function (req, res, next) {
	res.render('404.html')
})

// 导出路由对象
module.exports = router