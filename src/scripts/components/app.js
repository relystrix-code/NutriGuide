import DrawerInitiator from "../utils/drawerInitiator";
import UrlParser from "../routes/urlParser";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, overlay, content }) {
    this._button = button;
    this._drawer = drawer;
    this._overlay = overlay;
    this._content = content;

    this._initializeAppShell();
  }

  _initializeAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      overlay: this._overlay,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      console.error(`The page for URL '${url}' was not found in the routes.`);
    }
  }
}

export default App;
