import Popup from "./Popup.js";

export default class PopupForDelete extends Popup {
  constructor (popupSelector, handleSubmitDel) {
    super(popupSelector);
    this.handleSubmitDel = handleSubmitDel;
  }

  setEventListeners (id, cardDataApi, card) {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleSubmitDel(id, cardDataApi, card);
      this.close();
    });
  }

}
