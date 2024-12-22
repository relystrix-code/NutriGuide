import Endpoints from '../api/endpoints';

const Articles = {
  async render() {
    return `
        <section class="hero-article">
          <div class="hero-content-article">
            <h1>NutriGuide</h1>
            <p>Temukan artikel pilihan dan jadikan hari Anda lebih bermakna!</p>
            <img src="./images/heroes/article-page.webp" alt="Hero Image"> 
          </div>
        </section>
        <section class="artikel-section">
          <h2>Artikel</h2>
          <div class="artikel-grid" id="artikel-grid"></div>
        </section>
      `;
  },

  async afterRender() {
    try {
      const response = await Endpoints.AllArticles();
      const articles = response.data.articles;
      const artikelGrid = document.getElementById('artikel-grid');

      if (!articles || articles.length === 0) {
        artikelGrid.innerHTML = '<p>Tidak ada artikel tersedia.</p>';
        return;
      }

      artikelGrid.innerHTML = articles
        .map(
          (article) => `
          <a href="#/articles/${article.id}">
            <div class="artikel-card">
              <img src="${article.picture}" alt="${article.title}">
              <h3>${article.title}</h3>
              <p>${article.category} | ${new Date(
  article.date
).toLocaleDateString('id-ID')}</p>
            </div>
          </a>
        `
        )
        .join('');
    } catch (error) {
      console.error('Gagal memuat artikel:', error);
      const artikelGrid = document.getElementById('artikel-grid');
      artikelGrid.innerHTML = '<p>Gagal memuat artikel.</p>';
    }
  },
};

export default Articles;
