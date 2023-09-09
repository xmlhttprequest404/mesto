import Popup from "./Popup.js";
import { popupImage, popupText } from "../utils/elements.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(evt) {
    super.open();
    const textEl = evt.target.parentElement.querySelector('.element__text');
    popupImage.src = evt.target.src;
    popupText.textContent = textEl.textContent;
    popupImage.alt = evt.target.alt;
  }
}
