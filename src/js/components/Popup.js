export default class Popup {
  constructor (element, form) {
    this.element = element;
    this.closeButton = this.element.querySelector('.popup__close');
    this.form = form;
    this.container = this.element.querySelector('.popup__container');
  }

  open = () => {
    this.element.classList.remove('hidden');
    this.container.appendChild(this.form);
    this.setEventListeners();
  }

  _close = () => {
    this.element.classList.add('hidden');
    this.container.removeChild(this.form);
  }

  setEventListeners = () => {
    this.closeButton.addEventListener('click', this._close);
  }
}