import HomePage from '../components/views/homePage';
import CheckPage from '../components/views/checkPage';
import CalculatorCheckPage from '../components/views/calculatorCheckPage';
import ResultsCheckPage from '../components/views/resultsCheckPage';
import ArticlePage from '../components/views/articlePage';
import ArticleDetailsPage from '../components/template/articleDetailsPage';
import ConsultationPage from '../components/views/consultationPage';
import AboutPage from '../components/views/aboutPage';
import LoginPage from '../components/views/loginPage';
import SignupPage from '../components/views/signupPage';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/check': CheckPage,
  '/calculator-check': CalculatorCheckPage,
  '/results-check': ResultsCheckPage,
  '/article': ArticlePage,
  '/article/:id': ArticleDetailsPage,
  '/consultation': ConsultationPage,
  '/about': AboutPage,
  '/login': LoginPage,
  '/signup': SignupPage,
};

export default routes;
