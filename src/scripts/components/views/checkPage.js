const CheckPage = {
  async render() {
    return `
      <section id="check-gizi">
        <h1>Check Gizi Anda dengan <span class="nutriguide">NutriGuide</span></h1>
        <p>Kenali status gizi anda sekarang! 
        Apakah termasuk kategori underweight, normal, overweight atau obesitas?</p>
      </section>

      <section id="img">
        <img src="./images/checkBMI.png" alt="BMI Chart">
      </section>

      <section id="select-category">
        <h2>Pilih Kategori Anda untuk Memeriksa Gizi</h2>
          <div class="category-buttons">
          <button data-category="baby" class="category-card">
            <img src="./images/checkBaby.png" alt="0-5 Tahun">
              <span>0-5 Tahun</span>
          </button>
          <button data-category="teenager" class="category-card">
            <img src="./images/checkTeenager.png" alt="5-18 Tahun">
            <span>5-18 Tahun</span>
          </button>
          <button data-category="adult" class="category-card">
            <img src="./images/checkAdult.png" alt="≥ 19 Tahun">
            <span>≥ 19 Tahun</span>
          </button>
            </div>
      </section>

    `;
  },

  async afterRender() {
    document.querySelectorAll('.category-buttons button').forEach((button) => {
      button.addEventListener('click', () => {
        window.location.hash = '#/calculator-check';
        sessionStorage.setItem('selectedCategory', button.dataset.category);
      });
    });
  },
};

export default CheckPage;
