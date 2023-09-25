import Popup from "./Popup.js";

export default class PopupForDelete extends Popup {
  constructor (popupSelector, handleSubmitDel) {
    super(popupSelector);
    this.handleSubmitDel = handleSubmitDel;
  }

  setEventListeners (id, card) {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if (id) {
        this.handleSubmitDel(id)
        card.remove();
      };
      this.close();
    });
  }

}
