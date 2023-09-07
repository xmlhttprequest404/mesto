export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._exitButton = popupSelector.querySelector('.popup__exit');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      if (popup) {
        this.close();
      }
    }
  }

  setEventListeners() {
    this._exitButton.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    });
    window.addEventListener('keydown', this._handleEscClose.bind(this));
  }
}
