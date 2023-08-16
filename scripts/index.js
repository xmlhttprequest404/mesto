import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

export function openPopup(element, FormValidator) {
  element.classList.add('popup_opened');
  const buttonElement = element.querySelector(validationConfig.submitSelector);
  if (buttonElement) {
    const inputList = Array.from(element.querySelectorAll(validationConfig.inputSelector));
    FormValidator._toggleButtonState(inputList, element.querySelector(validationConfig.submitSelector));
  }
  window.addEventListener('keydown', (evt) => {
    keyHandler(evt, FormValidator);
  });
  element.addEventListener('mousedown', (evt) => {
    closePopupByOverlay(evt, FormValidator);
  });
}

function closePopup(element, FormValidator) {
  element.classList.remove('popup_opened');
  const inputList = Array.from(element.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((input) => {
    FormValidator._hideInputError(input);
  });
  window.removeEventListener('keydown', (evt) => {
    keyHandler(evt, FormValidator);
  });
  element.removeEventListener('click', (evt) => {
    closePopupByOverlay(evt, FormValidator);
  });
}

const closePopupByOverlay = (evt, FormValidator) => {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget, FormValidator);
  }
}

function keyHandler(evt, FormValidator) {
    if (evt.key === 'Escape'){
      const popup = document.querySelector('.popup_opened');
      if (popup) {
        closePopup(popup, FormValidator);
      }
    }
}

function makeProfileForm() {
  const ProfileForm = new FormValidator(validationConfig, popupProfile);

  function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileText.textContent = profileInputOccupation.value;
    closePopup(popupProfile, ProfileForm);
  }

  editButton.addEventListener('click', () => {
    ProfileForm.enableValidation();
    profileInputName.value = profileName.textContent;
    profileInputOccupation.value = profileText.textContent;
    openPopup(popupProfile, ProfileForm);
  });

  exitProfileButton.addEventListener('click', () => {
    closePopup(popupProfile, ProfileForm);
  });

  popupProfile.addEventListener('submit', handleProfileFormSubmit);
}

function makeAddCardsForm() {
  const AddCardsForm = new FormValidator(validationConfig ,popupCards);

  function handleAddCardsFormSubmit(evt) {
    evt.preventDefault();
    const data = {
      name: cardsInputTitle.value,
      link: cardsInputLink.value,
      alt: cardsInputTitle.value
    };
    const card = new Card(data, '#elements');
    container.prepend(card.generateCard());
    popupForm.reset();
    closePopup(popupCards, AddCardsForm);
  }

  addButton.addEventListener('click', () => {
    AddCardsForm.enableValidation();
    openPopup(popupCards, AddCardsForm);
  });
  exitAddCardsFormButton.addEventListener('click', () => {
    closePopup(popupCards, AddCardsForm);
  });
  popupCards.addEventListener('submit', handleAddCardsFormSubmit);

}

exitZoomButton.addEventListener('click', () => {
  closePopup(popupZoomCard);
});

initialCards.forEach((item) => {
  const card = new Card(item, '#elements');
  container.prepend(card.generateCard());
});

makeProfileForm();
makeAddCardsForm();

