const ConsultationPage = {
  async render() {
    return `
      <main class="main-content">
        <section class="consultation">
          <h1>Tanya Ahli Nutrisi Sekarang!</h1>
          <p>
            Punya pertanyaan tentang pola makan atau nutrisi? Hubungi ahli kami melalui WhatsApp
            untuk mendapatkan jawaban cepat dan terpercaya.
          </p>
          <div class="consultants">
            <a href="https://www.whatsapp.com/" target="_blank" class="consultant-card">
              <div>
                <img src="./images/consultationProfile2.png" alt="Chika, S.Gz, M.P.H">
                <h3>Chika, S.Gz, M.P.H</h3>
                <p>Jam Konsultasi: Senin - Jumat, 09.00 - 17.00 WIB</p>
              </div>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" class="consultant-card">
              <div>
                <img src="./images/consultationProfile1.png" alt="Zayyan, S.Gz, M.Gz">
                <h3>Zayyan, S.Gz, M.Gz</h3>
                <p>Jam Konsultasi: Senin - Jumat, 09.00 - 17.00 WIB</p>
              </div>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" class="consultant-card">
              <div>
                <img src="./images/consultationProfile3.png" alt="Bella, S.Gz, M.Gz">
                <h3>Bella, S.Gz, M.Gz</h3>
                <p>Jam Konsultasi: Senin - Jumat, 09.00 - 17.00 WIB</p>
              </div>
            </a>
          </div>
        </section>
        <section class="faq">
          <h2>FAQ</h2>
          <div class="faq-item">
            <button class="faq-question">
              Apakah ngemil di antara waktu makan itu sehat?
              <span class="toggle-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Ngemil dapat sehat jika dilakukan dengan memilih makanan yang bernutrisi dan tidak berlebihan.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              Apa itu pola makan seimbang?
              <span class="toggle-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Pola makan seimbang adalah konsumsi makanan dengan proporsi yang tepat dari semua kelompok makanan untuk memenuhi kebutuhan tubuh.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              Bagaimana cara menjaga berat badan ideal?
              <span class="toggle-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Berat badan ideal dapat dijaga dengan mengatur pola makan sehat, rutin olahraga, dan cukup istirahat.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              Apakah benar harus makan 3 kali sehari agar nutrisi kita cukup?
              <span class="toggle-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Tidak harus makan 3 kali sehari, tetapi penting untuk memastikan kebutuhan nutrisi harian terpenuhi.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              Berapa banyak air yang harus saya minum setiap hari?
              <span class="toggle-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Kebutuhan air harian bervariasi tergantung pada usia, berat badan, aktivitas, dan lingkungan. Umumnya, dianjurkan minum sekitar 8 gelas (2 liter) per hari</p>
            </div>
          </div>
        </section>
    `;
  },

  async afterRender() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
    console.log("Consultation Page rendered");
  },
};

export default ConsultationPage;
