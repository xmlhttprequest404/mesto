export default class Section {
  constructor( { items, renderer }, containerSelector ) {
    this.renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this.renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
