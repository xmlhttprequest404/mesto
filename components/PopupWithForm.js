import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {

  }

  setEventListeners() {

  }

  close() {

  }
}
