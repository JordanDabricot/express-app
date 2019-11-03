exports.getArticles = conn => {
  try {
    return new Promise(resolve => {
      var request = "SELECT * FROM article"
      conn.query(request, (error, results, fields) => {
        if (error) throw error
        resolve(results)
      })
    })
  } catch (error) {
    console.log(error)
  }
}

exports.getArticle = (conn, idArticle) => {
  try {
    return new Promise(resolve => {
      var request = "SELECT * FROM article WHERE id="+idArticle
      conn.query(request, (error, results) => {
        if (error) throw error
        resolve(results[0])
      })
    })
  } catch(error) {
    console.log(error)
  }
}

exports.postArticle = (conn, req) => {
  try {
    return new Promise(resolve => {
      var request = "INSERT INTO article (title, content, created_at, user_id) VALUES ('"+req.title+"', '"+req.content+"', NOW(), "+req.idUser+")"
      conn.query(request, (error, results) => {
        if (error) throw error
        resolve(results)
      })
    })
  } catch(error) {
    console.log(error)
  }
}

exports.updateArticle = (conn, req, idArticle) => {
  try {
    return new Promise(resolve => {
      var request = "UPDATE article SET title='"+req.title+"', content='"+req.content+"', modified_at=NOW() WHERE id="+idArticle
      conn.query(request, (error, results) => {
        if (error) throw error
        resolve(results)
      })
    })
  } catch(error) {
    console.log(error)
  }
}

exports.deleteArticle = (conn, idArticle) => {
  try {
      var request = "DELETE FROM article WHERE id="+idArticle
      return new Promise(resolve => {
        conn.query(request, (error, results) => {
          if (error) throw error
          resolve(results)
        })
      })
  } catch(error) {
    console.log(error)
  }
}
