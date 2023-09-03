export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open () {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close () {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleEscapeClose.bind(this));
  }

  _handleEscapeClose () {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      if (popup) {
        this.close();
      }
    }
  }

  setEventListeners () {
    window.addEventListener('keydown', this._handleEscapeClose.bind(this));
  }
}