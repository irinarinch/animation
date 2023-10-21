import heart from '../images/heart.png';

export default class Like {
  constructor() {
    this.container = document.querySelector('.like-container');
    this.button = document.querySelector('.like-btn');
  }

  init() {
    document.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('animationend', (e) => {
      e.target.remove();
    });
  }

  onClick(e) {
    if (!e.target.closest('.like-btn')) return;

    this.addHeart();
  }

  addHeart() {
    const img = document.createElement('img');
    img.src = heart;
    img.className = 'heart';

    this.container.appendChild(img);

    const top = this.button.offsetTop + this.button.offsetHeight / 2;
    const left = this.button.offsetLeft + this.button.offsetWidth / 2;

    img.style.top = `${top - img.offsetHeight / 2}px`;
    img.style.left = `${left - img.offsetWidth / 2}px`;

    this.getTrajectory(img);
  }

  getTrajectory(el) {
    const arr = ['first', 'second', 'third', 'fourth'];
    const index = Math.floor(Math.random() * arr.length);
    const img = el;

    img.style.animationName = arr[index];
    img.style.zIndex = index;

    this.button.style.zIndex = 3;
  }
}
