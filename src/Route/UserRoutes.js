module.exports = app => {
  var users = require('../Controller/UserController')
  
  app.route('/users').get(users.getUsers)
  app.route('/user/:idUser').get(users.getUser)
  app.route('/user').post(users.postUser)
}
