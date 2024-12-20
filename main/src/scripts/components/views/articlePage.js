const ArticlePage = {
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
      const response = await fetch('./database/article.json');
      const data = await response.json();
      const articles = data.article;
      const artikelGrid = document.getElementById('artikel-grid');

      articles.forEach((article) => {
        const artikelCard = `
          <div class="artikel-card">
            <img src="${article.picture}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.category} | ${new Date(article.date).toLocaleDateString('id-ID')}</p>
          </div>
        `;
        artikelGrid.innerHTML += artikelCard;
      });
    } catch (error) {
      console.error('Gagal memuat artikel:', error);
    }
  },
};

export default ArticlePage;
