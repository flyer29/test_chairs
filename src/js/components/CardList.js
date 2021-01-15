export default class CardList {
  constructor(createCardFunction, container) {
    this.createCardFunction = createCardFunction;
    this.container = container;
  }

  renderCards = (data) => {
    this._addCard(data);
  }

  _addCard = (array) => {
    array.forEach((item) => {
      this.container.appendChild(this.createCardFunction(item));
    })
  }

};