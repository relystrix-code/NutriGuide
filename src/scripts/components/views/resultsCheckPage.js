const ResultsCheckPage = {
  async render() {
    const { name, bmi } = JSON.parse(sessionStorage.getItem("bmiResult"));
    let status = "";
    let imageSrc = "";
    let articles = [];

    if (bmi < 18.5) {
      status = "Underweight";
      imageSrc = "resultsCheckBMI1.png";
      articles = [
        { title: "Tips Meningkatkan Berat Badan", link: "#/article/1", date: "1/12/2024" },
        { title: "Nutrisi Penting untuk Tubuh Kurus", link: "#/article/2", date: "2/12/2024" },
        { title: "Cara Meningkatkan Selera Makan", link: "#/article/3", date: "3/12/2024" },
      ];
    } else if (bmi < 25) {
      status = "Normal";
      imageSrc = "resultsCheckBMI2.png";
      articles = [
        { title: "Pola Hidup Sehat untuk Mempertahankan Berat", link: "#/article/4", date: "1/12/2024" },
        { title: "Olahraga Rutin untuk Hidup Seimbang", link: "#/article/5", date: "2/12/2024" },
        { title: "Tips Nutrisi untuk Gaya Hidup Aktif", link: "#/article/6", date: "3/12/2024" },
      ];
    } else if (bmi < 30) {
      status = "Overweight";
      imageSrc = "resultsCheckBMI3.png";
      articles = [
        { title: "Cara Efektif Menurunkan Berat Badan", link: "#/article/7", date: "1/12/2024" },
        { title: "Makanan Rendah Kalori yang Enak dan Sehat", link: "#/article/8", date: "2/12/2024" },
        { title: "Panduan Olahraga untuk Menurunkan Berat Badan", link: "#/article/9", date: "3/12/2024" },
      ];
    } else {
      status = "Obese";
      imageSrc = "resultsCheckBMI4.png";
      articles = [
        { title: "Langkah-langkah Awal untuk Melawan Obesitas", link: "#/article/11", date: "1/12/2024" },
        { title: "Pentingnya Konsultasi dengan Ahli Gizi", link: "#/article/12", date: "2/12/2024" },
        { title: "Olahraga yang Aman untuk Pengidap Obesitas", link: "#/article/13", date: "3/12/2024" },
      ];
    }

    return `
      <section id="bmi-result">
        <h2>Hasil Status Gizi untuk ${name}</h2>
        <div class="result-container">
          <p class="bmi-value">IMT: <span>${bmi}</span></p>
          <p class="bmi-status">Status: <span>${status}</span></p>
          <img src="./images/${imageSrc}" alt="${status}" class="bmi-image" />
        </div>
        <p class="bmi-description">
          ${this.getDescription(status)}
        </p>
        <section class="relevant-articles">
          <h3>Artikel Relevan</h3>
          <div class="articles-list">
            ${articles
              .map(
                (article) => `
                  <div class="article-item">
                    <a href="${article.link}" class="article-link">
                      <img src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1634502900/attached_image/perhatikan-anjuran-makanan-dari-ahli-gizi-berikut.jpg" alt="${article.title}" />
                      <div class="article-title">${article.title}</div>
                      <div class="article-date">${article.date}</div>
                    </a>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      </section>
    `;
  },

  getDescription(status) {
    switch (status) {
      case "Underweight":
        return "Berat badan kamu kurang. Pastikan untuk mengonsumsi makanan bergizi dan berkonsultasi dengan ahli gizi.";
      case "Normal":
        return "Hasil status gizi kamu Normal. Ini artinya kondisi tubuhmu sudah sangat baik! Namun, jangan lengah tetap jaga pola makan seimbang dan perhatikan asupan gizimu agar kesehatan tubuh tetap optimal.";
      case "Overweight":
        return "Berat badan kamu berlebih. Kurangi konsumsi makanan tinggi lemak dan tingkatkan aktivitas fisik.";
      case "Obese":
        return "Berat badan kamu masuk kategori obesitas. Konsultasikan dengan ahli gizi untuk rencana penurunan berat badan.";
      default:
        return "";
    }
  },

  async afterRender() {
    // Optional: Tambahkan event listener jika diperlukan
  },
};

export default ResultsCheckPage;
