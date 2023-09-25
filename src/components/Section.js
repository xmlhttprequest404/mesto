export default class Section {
  constructor( { renderer }, containerSelector ) {
    this.renderer = renderer;
    this._container = containerSelector;
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }

   renderItem () {
    this.renderer(this.renderedData);
  }
}
