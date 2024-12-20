import Endpoints from '../api/endpoints';
import CONFIG from '../api/configuration';

const ArticleDetails = {
  async render() {
    return `
      <section id="article-details">
        <div id="loading">Loading article...</div>
      </section>
    `;
  },

  async afterRender() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (!articleId) {
      document.getElementById('article-details').innerHTML =
        '<p>Article ID is missing in the URL.</p>';
      return;
    }

    try {
      const result = await Endpoints.ArticleById(articleId);

      if (result && result.data && result.data.article) {
        const article = result.data.article;
        document.getElementById('article-details').innerHTML = `
          <article>
            <h1>${article.title}</h1>
            <p><strong>Category:</strong> ${article.category}</p>
            <p><strong>Date:</strong> ${article.date}</p>
            <img src="${CONFIG.BASE_URL + article.picture}" alt="${
  article.title
}" />
            <p>${article.headerText || ''}</p>
            <h2>${article.sectionSubtitle1 || ''}</h2>
            <p>${article.sectionText1 || ''}</p>
            <h2>${article.sectionSubtitle2 || ''}</h2>
            <p>${article.sectionText2 || ''}</p>
            <h2>${article.sectionSubtitle3 || ''}</h2>
            <p>${article.sectionText3 || ''}</p>
            <footer>${article.footerText || ''}</footer>
          </article>
        `;
      } else {
        document.getElementById('article-details').innerHTML = `<p>${
          result.message || 'Article not found.'
        }</p>`;
      }
    } catch (error) {
      document.getElementById(
        'article-details'
      ).innerHTML = `<p>Error fetching article: ${error.message}</p>`;
    }
  },
};

export default ArticleDetails;
