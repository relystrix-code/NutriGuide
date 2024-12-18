const AboutPage = {
  async render() {
    return `
        <section class="hero-about">
          <div class="hero-content-about">
            <h1>NutriGuide</h1>
            <p>Your guide to a healthy living and balanced nutrition</p>
            <img src="./images/discusshero.png" alt="Hero Image">
          </div>
        </section>
  
        <section class="about-us">
          <div class="about-content">
            <h2>Tentang Kami</h2>
            <p>
              <span>NutriGuide</span> dirancang untuk membantu masyarakat mengelola pola makan sehat dan memenuhi kebutuhan gizi harian. 
              Dengan fitur pelacakan nutrisi, kalkulator gizi, konsultasi ahli, dan artikel kesehatan, <span>NutriGuide</span> menjadi solusi lengkap 
              untuk meningkatkan kesehatan dan kualitas hidup Anda.
            </p>
          </div>
          <div class="team-section">
            <h3>Our Team</h3>
            <div class="team-members">
              <div class="team-member">
                <img src="./images/consultationProfile1.png" alt="Vian Haryadi">
                <h4>Vian Haryadi</h4>
                <p>Project Manager <br>Back-end Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-github"></i></a>
                </div>
              </div>
              <div class="team-member">
                <img src="./images/consultationProfile1.png" alt="Salman Alfarisi">
                <h4>Salman Alfarisi</h4>
                <p>Front-end Developer <br>Back-end Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-github"></i></a>
                </div>
              </div>
              <div class="team-member">
                <img src="./images/consultationProfile1.png" alt="Anindya Salsabila">
                <h4>Anindya Salsabila</h4>
                <p>UI/UX Designer <br>Front-end Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-github"></i></a>
                </div>
              </div>
              <div class="team-member">
                <img src="./images/consultationProfile1.png" alt="Paramesti Astagina">
                <h4>Paramesti Astagina</h4>
                <p>UI/UX Designer <br>Front-end Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    console.log('About Page rendered');
  },
};

export default AboutPage;

