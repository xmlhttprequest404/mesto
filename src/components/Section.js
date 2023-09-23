export default class Section {
  constructor( { cardData, renderer }, containerSelector ) {
    this.renderedData = cardData;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }

  renderItems () {
    this.renderedData.forEach(item => {
      this._renderer(item);
    });
  }

  renderItem () {
    this._renderer(this.renderedData);
  }
}
