import CONFIG from "./configuration";

const articlesApi = {
  AllArticles: `${CONFIG.BASE_URL}/articles`,
  ArticleById: (id) => `${CONFIG.BASE_URL}/articles/${id}`,
};

export default articlesApi;
