export class FormValidator {
  constructor(config, form) {
    this._input = config.inputSelector,
    this._submit = config.submitSelector,
    this._inactiveSubmit = config.inactiveSubmitClass,
    this._error = config.inputErrorClass,
    this._errorVisible = config.errorVisibleClass
    this._currentForm = form;
  }

  _showInputError(inputElement) {
    const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._error);
    if (inputElement.validationMessage.length > 55) {
      inputElement.style.marginBottom = '10px';
    }
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorVisible);
  }

  _hideInputError(inputElement) {
    const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._error);
    errorElement.classList.remove(this._errorVisible);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  _disableButton(buttonElement) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(this._inactiveSubmit);
  }

  _enableButton(buttonElement) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(this._inactiveSubmit);
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement);
    } else {
      this._enableButton(buttonElement);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._currentForm.querySelectorAll(this._input));
    const buttonElement = this._currentForm.querySelector(this._submit);
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._currentForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
