import "regenerator-runtime";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "../sass/main.scss";
import "../sass/responsive.scss";
import App from "./components/app";
import swRegister from "./utils/swRegister";

const app = new App({
  button: document.querySelector("#menu-button"),
  drawer: document.querySelector("#drawer"),
  overlay: document.querySelector("#overlay"),
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
