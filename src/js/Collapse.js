export default class Collapse {
  constructor() {
    this.container = document.querySelector('.collapsible-container');
    this.button = document.querySelector('.collapse-btn');
  }

  init() {
    this.button.addEventListener('click', () => {
      if (!this.container.style.maxHeight) {
        this.container.style.maxHeight = `${this.container.scrollHeight}px`;
      } else {
        this.container.style.maxHeight = null;
      }
    });
  }
}
