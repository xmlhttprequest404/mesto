export class FormValidator {
  constructor(config, form) {
    this._input = config.inputSelector,
    this._inactiveSubmit = config.inactiveSubmitClass,
    this._error = config.inputErrorClass,
    this._errorVisible = config.errorVisibleClass,
    this._currentForm = form,
    this._submit = this._currentForm.querySelector(config.submitSelector),
    this._inputList = Array.from(this._currentForm.querySelectorAll(this._input));
  }

  _showInputError(inputElement) {
    const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._error);
    if (inputElement.validationMessage.length > 112) {
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

  disableSubmitButton() {
    this._submit.setAttribute('disabled', true);
    this._submit.classList.add(this._inactiveSubmit);
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
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._submit);
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
