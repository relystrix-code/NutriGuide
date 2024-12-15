const generateId = require("../utils/generateId");
const { readData, writeData } = require("../utils/dataStore");

const addArticleHandler = (request, h) => {
  const {
    category,
    date,
    title,
    picture,
    headerText,
    sectionSubtitle1,
    sectionText1,
    sectionSubtitle2,
    sectionText2,
    sectionSubtitle3,
    sectionText3,
    footerText,
  } = request.payload;

  if (!title || !category || !date) {
    return h
      .response({
        status: "fail",
        message: "Failed to add article. Please provide all required fields.",
      })
      .code(400);
  }

  const id = generateId();
  const newArticle = {
    id,
    category,
    date,
    title,
    picture,
    headerText,
    sectionSubtitle1,
    sectionText1,
    sectionSubtitle2,
    sectionText2,
    sectionSubtitle3,
    sectionText3,
    footerText,
  };

  const articles = readData();
  articles.push(newArticle);
  writeData(articles);

  return h
    .response({
      status: "success",
      message: "Article successfully added.",
      data: {
        articleId: id,
      },
    })
    .code(201);
};

const getAllArticlesHandler = (request, h) => {
  const { category, title } = request.query;

  let filteredArticles = readData();

  if (category) {
    filteredArticles = filteredArticles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (title) {
    filteredArticles = filteredArticles.filter((article) =>
      article.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return h
    .response({
      status: "success",
      data: {
        articles: filteredArticles.map(({ id, title, category, date }) => ({
          id,
          title,
          category,
          date,
        })),
      },
    })
    .code(200);
};

const getArticleByIdHandler = (request, h) => {
  const { articleId } = request.params;
  const article = readData().find((a) => a.id === articleId);

  if (!article) {
    return h
      .response({
        status: "fail",
        message: "Article not found.",
      })
      .code(404);
  }

  return h
    .response({
      status: "success",
      data: {
        article,
      },
    })
    .code(200);
};

const updateArticleByIdHandler = (request, h) => {
  const { articleId } = request.params;
  const {
    category,
    date,
    title,
    picture,
    headerText,
    sectionSubtitle1,
    sectionText1,
    sectionSubtitle2,
    sectionText2,
    sectionSubtitle3,
    sectionText3,
    footerText,
  } = request.payload;

  const articles = readData();
  const index = articles.findIndex((a) => a.id === articleId);

  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: "Failed to update article. ID not found.",
      })
      .code(404);
  }

  articles[index] = {
    ...articles[index],
    category,
    date,
    title,
    picture,
    headerText,
    sectionSubtitle1,
    sectionText1,
    sectionSubtitle2,
    sectionText2,
    sectionSubtitle3,
    sectionText3,
    footerText,
  };

  writeData(articles);

  return h
    .response({
      status: "success",
      message: "Article successfully updated.",
    })
    .code(200);
};

const deleteArticleByIdHandler = (request, h) => {
  const { articleId } = request.params;
  const articles = readData();

  const index = articles.findIndex((a) => a.id === articleId);

  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: "Failed to delete article. ID not found.",
      })
      .code(404);
  }

  articles.splice(index, 1);
  writeData(articles);

  return h
    .response({
      status: "success",
      message: "Article successfully deleted.",
    })
    .code(200);
};

module.exports = {
  addArticleHandler,
  getAllArticlesHandler,
  getArticleByIdHandler,
  updateArticleByIdHandler,
  deleteArticleByIdHandler,
};
