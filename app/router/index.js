const CateRoute = require('./cate')()
const UsersRoute = require('./users')()

module.exports = {...CateRoute,...UsersRoute}
