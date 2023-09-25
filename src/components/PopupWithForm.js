import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleSubmitForm, enableForm, getInitialCards) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._enableForm = enableForm;
    this.getInitialCards = getInitialCards;
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    this._preloader = this._popup.querySelector('.preloader');
    this._form = this._popup.querySelector('.popup__form');
  }

  finalyHandle () {
    this.renderLoading(false);
    this.close();
    this._form.reset();
  }

  renderLoading (isLoading) {
    if (isLoading) {
      this._preloader.classList.add('preloader_visible');
    } else {
      this._preloader.classList.remove('preloader_visible');
    }
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }



  setEventListeners() {
    super.setEventListeners();
    this._enableForm(this);
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues(), this);
    });
  }

}
