export default class Card {
  constructor(template, popup) {
    this.template = template;
    this.popup = popup;
  }

  create = (data) => {
    const card = this.template.content.firstElementChild.cloneNode(true);
    card.querySelector('.card__title').textContent = data.name;
    card.querySelector('.card__price').textContent = data.price;
    card.querySelector('.card__image').setAttribute('src', data.img);
    this.button = card.querySelector('.button');
    this._setEventListeners();
    return card;
  }

  _setEventListeners = () => {
    this.button.addEventListener('click', this.popup.open);
  }
}