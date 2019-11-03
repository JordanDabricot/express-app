var articleRepository = require('../Repository/ArticleRepository')
var articleService = require('../Service/ArticleService')

exports.getArticles = (req, res) => {
  articleRepository.getArticles(res.locals.connection).then(dataArticles => {
    res.send(JSON.stringify({"status": 200, "error": null, "response": dataArticles}))
  })
}

exports.getArticle = (req, res) => {
  articleRepository.getArticle(res.locals.connection, req.params.idArticle).then(dataArticle => {
    res.send(JSON.stringify({"status": 200, "error": null, "response": dataArticle}))
  })
}

exports.postArticle = (req, res) => {
  articleRepository.postArticle(res.locals.connection, req.body).then(resultPostArticle => {
    res.send(JSON.stringify({"status": 201, "error": null, "response": resultPostArticle}))
  })
}

exports.updateArticle = (req, res) => {
  articleRepository.updateArticle(res.locals.connection, req.body, req.params.idArticle).then(resultUpdateArticle => {
    res.send(JSON.stringify({"status": 200, "error": null, "response": resultUpdateArticle}))
  })
}

exports.deleteArticle = (req, res) => {
  articleService.deleteArticle(res.locals.connection, req.params.idArticle).then(resultDeleteArticle => {
    res.send(JSON.stringify(resultDeleteArticle))
  })
}
