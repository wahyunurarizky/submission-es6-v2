class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get value() {
    return this.shadowDOM.querySelector('.input').value;
  }
  render() {
    this.shadowDOM.innerHTML = `<style> 
      .search-form {
        display: flex;
        justify-content: center;
      }
      
      .input {
        width: 60%;
        padding: 16px 20px;
        border: none;
        border-radius: 4px;
        background-color: #f1f1f1;
      }
      .button {
        width: 10%;
        margin: 0 20px;
      }
    </style>
    <div class="search-form brarba">
      <input class="input" type="text" />
      <button class="button">cari</button>
    </div>
    `;
    this.shadowDOM
      .querySelector('.button')
      .addEventListener('click', this._clickEvent);
  }
}
customElements.define('search-bar', SearchBar);
