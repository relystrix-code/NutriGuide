const HomePage = {
  async render() {
    return `
      <section class="hero-home">
        <div class="hero-conten-home">
          <h1>Wujudkan Pola Hidup Sehat Mulai dari Sekarang dengan <span>NutriGuide</span></h1>
          <p><span>NutriGuide</span> hadir sebagai solusi modern untuk membantu Anda mengelola asupan nutrisi harian dengan mudah dan praktis. Bersama <span>NutriGuide</span>, wujudkan hidup sehat dan berkualitas mulai dari hari ini!</p>
          <img src="./images/heroes/home-page.webp" alt="Hero Image"> 
        </div>
      </section>

        <div class="check-nutrition">
          <h2>Cek Gizi</h2>
          <div class="nutrition-content">
            <div class="nutrition-text">
              <p>Yuk, <span>check gizi</span> kamu sekarang dan temukan informasi penting tentang kesehatan tubuhmu!</p>
              <button id="check-nutrition-btn" class="btn-check">Cek Gizi Sekarang!</button>
            </div>
            <img src="./images/features/home-check.webp" alt="Image Gizi">
          </div>
        </div>

      <section class="artikel-section">
          <h2>Artikel</h2>
          <div class="artikel-grid" id="artikel-grid">
          </div>
          <a href="#/article" class="read-more-link">Selengkapnya ></a>
      </section>
      `;
  },

  async afterRender() {
    console.log('Home Page rendered');

    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) header.style.display = '';
    if (footer) footer.style.display = '';

    const checkNutritionButton = document.getElementById('check-nutrition-btn');
    if (checkNutritionButton) {
      checkNutritionButton.addEventListener('click', () => {
        window.location.hash = '#/check';
      });
    }

    try {

      const response = await fetch('./database/article.json');
      const data = await response.json();
      const articles = data.article.slice(0, 5);;

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
  }

};

export default HomePage;
