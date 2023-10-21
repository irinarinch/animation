import closer from '../images/close.png';
import button from '../images/green.png';

export default class CallbackWidget {
  constructor(root) {
    this.root = root;
    this.button = button;
  }

  getHtml() {
    return `
      <img src=${this.button} class="form-opener">
      <form class="form closed">      
        <img class="form-closer" src=${closer}>
        <label>Напишите нам</label>
        <textarea></textarea>
        <button class="form-btn">Отправить</button>      
      </form>
    `;
  }

  init() {
    this.root.innerHTML = this.getHtml();
    this.form = document.querySelector('.form');
    this.formOpenBtn = document.querySelector('.form-opener');

    document.addEventListener('click', (e) => {
      this.openForm(e);
      this.closeForm(e);

      if (e.target.closest('.form-btn')) {
        e.preventDefault();
      }
    });
  }

  openForm(e) {
    if (!e.target.closest('.form-opener')) return;

    this.form.classList.remove('closed');
    this.form.classList.add('opened');
    this.formOpenBtn.classList.add('hidden');
  }

  closeForm(e) {
    if (!e.target.closest('.form-closer')) return;

    this.form.classList.remove('opened');
    this.form.classList.add('closed');

    this.formOpenBtn.classList.remove('hidden');
  }
}
