/* eslint-disable no-underscore-dangle */
import { createError } from './templates/template-creator';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, loader, error,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._loader = loader;
    this._error = error;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._errorHandler(error);
    }
    this._loader.style.display = 'none';
  }

  _errorHandler(error) {
    switch (error.message) {
      case 'Failed to fetch':
        this._error.innerHTML = createError('Gagal Memuat halaman/ data.');
        break;
      default:
        break;
    }
  }
}

export default App;
