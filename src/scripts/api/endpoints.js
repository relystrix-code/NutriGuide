import articlesApi from "./articlesApi";

class Endpoints {
  static async AllArticles() {
    const response = await fetch(articlesApi.AllArticles);
    const responseJson = await response.json();
    return responseJson;
  }

  static async ArticleById(id) {
    const response = await fetch(articlesApi.ArticleById(id));
    return response.json();
  }
}

export default Endpoints;
