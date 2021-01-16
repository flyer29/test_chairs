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
    this._setEventListeners();
  }

  _close = () => {
    this.element.classList.add('hidden');
    this.form.reset();
    this.container.removeChild(this.form);
    this._removeEventListeners();
  }

  _closeByEsc = (event) => {
    event.keyCode === 27 && this._close();

  }

  _closeByPopupClick = (event) => {
    event.target.classList.contains('popup') && this._close();
  }

  /* _sendForm = (event) => {
    event.preventDefault();

      работа с вервером

    this._close();
  } */

  _setEventListeners = () => {
    this.closeButton.addEventListener('click', this._close);
    window.addEventListener('keydown', this._closeByEsc);
    window.addEventListener('click', this._closeByPopupClick);
    /* this.form.addEventListener('submit', this._sendForm); */
  }

  _removeEventListeners = () => {
    this.closeButton.removeEventListener('click', this._close);
    window.removeEventListener('keydown', this._closeByEsc);
    window.removeEventListener('click', this._closeByPopupClick);
    /* this.form.removeEventListener('submit', this._sendForm); */
  }
}