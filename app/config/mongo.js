/*
* @Author: vannvan <https://github.com/vannvan>
* @Date:   2019-11-26 15:42:52
* @Last Modified by:   vannvan
* @Last Modified time: 2019-11-26 15:43:27
*/
// config/mongo.js
const mongoose = require('mongoose').set('debug', true);
const options = {
    autoReconnect: true
}

// username 数据库用户名
// password 数据库密码
// localhost 数据库ip
const url = 'mongodb://@localhost:27017/archives'

module.exports = {
    connect: ()=> {            
        mongoose.connect(url,options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', ()=> {
            console.log('mongodb connect suucess');
        })
    }
}