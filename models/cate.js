'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var cateSchema = new Schema({
  name: {
    type:String,
    unique:true
  },
  type: {
    type: Number,
    unique:true
  }
})

cateSchema.pre('save',function(next) {
  if(this.isNew) {
    this.createTime = Date.now()
  }
  next()
})

var Cate = mongoose.model('Cate',cateSchema)

module.exports = Cate
