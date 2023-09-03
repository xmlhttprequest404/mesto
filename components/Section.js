export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._containerSelector = document.querySelector(containerSelector);
    this._renderedItems = items;
    this._renderer = renderer;
  }

  clear() {
    this._containerSelector.innerHTLM = '';
  }

  addItem(element) {
    this._containerSelector.append(element);
  }

  renderItems() {
    this.clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}