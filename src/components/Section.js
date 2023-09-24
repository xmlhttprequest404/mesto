export default class Section {
  constructor( { cardData, renderer }, containerSelector, mePromise ) {
    this.renderedData = cardData;
    this._renderer = renderer;
    this._container = containerSelector;
    this._mePromise = mePromise;
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }

  renderItems () {
    this._mePromise.then(meData => {
      this.renderedData.forEach(item => {
        this._renderer(item, meData._id);
      });
    })
  }

  renderItem () {
    this._mePromise.then(meData => {
      this._renderer(this.renderedData, meData._id);
    })
  }
}
