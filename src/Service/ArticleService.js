var articleRepository = require('../Repository/ArticleRepository')

exports.deleteArticle = (conn, idArticle) => {
  try {
    return new Promise(resolve => {
      articleRepository.deleteArticle(conn, idArticle).then(results => {
        data = {
          "status": 200,
          "error": null,
          "info": null,
          "response": results
        }
        if (results.affectedRows === 0)
          data.info = "l'idArticle est introuvable en base"
        resolve(data)
      })
    })
  } catch (error) {
    console.log(error)
  }
}
