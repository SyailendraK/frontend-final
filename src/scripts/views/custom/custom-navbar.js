class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<nav class="nav">
    <span class="logo">
      <img src="./icons/icon-128x128.png" alt="Logo Mam-Mang" />
      <h1>Mam-Mang</h1>
    </span>
    <span id="hamburgerButton">
      <button aria-label="Toggle navigation">☰</button>
    </span>
    <ul class="nav__list" id="navigationDrawer">
      <li class="nav__item">
        <i class="fas fa-home"></i><a href="#/">home</a>
      </li>
      <li class="nav__item">
        <i class="fas fa-heart"></i><a href="#/favorite">favorite</a>
      </li>
      <li class="nav__item">
        <i class="fas fa-users"></i
        ><a href="https://www.linkedin.com/in/syailendra/" target="_blank" rel="noopener"
          >about us</a
        >
      </li>
    </ul>
  </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
