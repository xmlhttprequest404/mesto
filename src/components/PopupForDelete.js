import Popup from "./Popup.js";

export default class PopupForDelete extends Popup {
  constructor (popupSelector, handleSubmitDel) {
    super(popupSelector);
    this.handleSubmitDel = handleSubmitDel;
  }

  getCardId (id) {
    this._id = id;
  }

  getElemForDel (elem) {
    this._elem = elem;
  }

  setEventListeners () {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleSubmitDel(this._id);
      this.close();
      this._elem.remove();
    });
  }

}
