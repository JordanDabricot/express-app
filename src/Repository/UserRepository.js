exports.getUsers = conn => {
  try {
    return new Promise(resolve => {
      var request = "SELECT * FROM user"
      conn.query(request, (error, results, fields) => {
        if (error) throw error
        resolve(results)
      })
    })
  } catch(error) {
    console.log('Error', error)
  }
}

exports.getUser = (conn, idUser) => {
  try {
    return new Promise(resolve => {
      var request = "SELECT * FROM user WHERE id='"+idUser+"'"
      conn.query(request, (error, results, fields) => {
        if (error) throw error
        resolve(results[0])
      })
    })
  } catch(error) {
    console.log('Error', error)
  }
}

exports.postUser = (conn, req) => {
  try {
    return new Promise(resolve => {
      var request = "INSERT INTO user (pseudo, email, password, created_at) VALUES ('"+req.pseudo+"', '"+req.email+"', '"+req.password+"', NOW())"
      conn.query(request, (error, results) => {
        if (error) throw error
        resolve(results)
      })
    })
  } catch(error) {
    console.log('Error', error)
  }
}
