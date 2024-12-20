import ArticlesApi from './articlesApi';

class Endpoints {
  static async AllArticles() {
    const response = await fetch(ArticlesApi.AllArticles);
    const responseJson = await response.json();
    return responseJson;
  }

  static async ArticleById(id) {
    const response = await fetch(ArticlesApi.ArticleById(id));
    return response.json();
  }
}

export default Endpoints;
