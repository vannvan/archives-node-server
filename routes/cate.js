'use strict'

const Router = require('koa-router')
// const Cate = require('../app/controllers/cate')

module.exports = function(){
    var router = new Router({
    prefix: '/api'
  })

  // cate
  router.post('/cate/add', Cate.add)


  return router
}
