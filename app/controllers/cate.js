'use strict'

var mongoose =  require('mongoose')
var Cate = mongoose.model('Cate')


exports.add = async (ctx,next) => {
  // var phoneNumber = xss(ctx.request.body.phoneNumber.trim())
  let {name,type} = ctx.request.body
  console.log(ctx.request.body)
  var cate = await Cate.findOne({
	  name: name
	}).exec()

  cate = new Cate({
    name:name,
    type:type
  })
  try{
    cate = await cate.save()
    ctx.body = {
      success:true
    }
  }
  catch (e) {
    ctx.body = {
      success: true
    }

    return next
  }
}
