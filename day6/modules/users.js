const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true})

// 设计Schema 数据集合
const Schema = mongoose.Schema

const UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	gender: {
		type: Number,
		enum: [-1, 0, 1],
		default: -1
	},
	create_time: {
		type: Date,
		default: Date.now
	},
	lastmodify_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: '/public/img/avatar-max-img.png'
	},
	birthday: {
		type: String
	},
	bio: {
		type: String,
    	default: ''
	},
	status: {
		type: Number,
		enum: [0, 1, 2], //0 没有权限限制 1 限制评论 2 限制登录
		default: 0
	}
})

//导出模板构造函数
module.exports = mongoose.model('User', UserSchema)