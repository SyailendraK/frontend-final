import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/favorite.css';
import '../styles/detail.css';
import '../styles/loader.css';
import '../styles/callout.css';
import './views/custom/custom-navbar';
import './views/custom/custom-loader';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  loader: document.querySelector('.lds-ellipsis'),
  error: document.querySelector('.callout'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // NavBar();
  swRegister();
});
