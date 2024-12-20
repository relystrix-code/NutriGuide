import CONFIG from './configuration';

const ArticlesApi = {
  AllArticles: `${CONFIG.BASE_URL}/articles`,
  ArticleById: (id) => `${CONFIG.BASE_URL}/articles/${id}`,
};

export default ArticlesApi;
