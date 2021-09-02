class Loader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
  }
}

customElements.define('spin-loader', Loader);
