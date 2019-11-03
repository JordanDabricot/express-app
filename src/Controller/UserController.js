var user = require('../Repository/UserRepository')

exports.getUsers = (req, res) => {
  user.getUsers(res.locals.connection).then(dataUsers => {
    res.send(JSON.stringify({"status": 200, "error": null, "response": dataUsers}))
  })
}

exports.getUser = (req, res) => {
  user.getUser(res.locals.connection, req.params.idUser).then(dataUser => {
    res.send(JSON.stringify({"status": 200, "error": null, "response": dataUser}))
  })
}

exports.postUser = (req, res) => {
  user.postUser(res.locals.connection, req.body).then(resultUser => {
    res.send(JSON.stringify({"status": 201, "error": null, "response": resultUser}))
  })
}
