export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._exitButton = popupSelector.querySelector('.popup__exit');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleEscClose);
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
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    });
  }
}
