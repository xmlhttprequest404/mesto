export default class Section {
  constructor( { renderer }, containerSelector ) {
    //this.renderedData = cardData;
    this.renderer = renderer;
    this._container = containerSelector;
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }

  renderItems () {
    // this._mePromise.then(meData => {
    //   this.renderedData.forEach(item => {
    //     this._renderer(item, meData._id);
    //   });
    // })
    this.renderedData.forEach(item => {
      this._renderer(item);
    });
  }

   renderItem () {
    this.renderer(this.renderedData);
  }
}
