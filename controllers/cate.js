'use strict'

var mongoose =  require('mongoose')
var Cate = mongoose.model('Cate')


exports.add = async (ctx,next) => {
  // var phoneNumber = xss(ctx.request.body.phoneNumber.trim())
  console.log(ctx.request.body)
}
