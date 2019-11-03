module.exports = app => {
  var article = require ('../Controller/ArticleController')
  app.route('/articles').get(article.getArticles)
  app.route('/article/:idArticle').get(article.getArticle)
  app.route('/article').post(article.postArticle)
  app.route('/article/:idArticle').put(article.updateArticle)
  app.route('/article/:idArticle').delete(article.deleteArticle)
}
