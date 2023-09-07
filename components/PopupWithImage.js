import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super._popup.classList.add('popup_opened');
    super.setEventListeners();

  }
}
