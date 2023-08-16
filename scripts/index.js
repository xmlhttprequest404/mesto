import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

export function openPopup(element, FormValidator) {
  element.classList.add('popup_opened');
  const buttonElement = element.querySelector(validationConfig.submitSelector);
  if (buttonElement) {
    FormValidator.enableValidation();
  }
  window.addEventListener('keydown', keyHandler);
  element.addEventListener('mousedown', evt => {
    closePopupByOverlay(evt, FormValidator);
  });
}

function closePopup(element, FormValidator) {
  element.classList.remove('popup_opened');
  const buttonElement = element.querySelector(validationConfig.submitSelector);
  if (buttonElement) {
    FormValidator.enableValidation();
  }
  window.removeEventListener('keydown', keyHandler);
  element.removeEventListener('click', evt => {
    closePopupByOverlay(evt, FormValidator);
  });
}

const closePopupByOverlay = (evt, FormValidator) => {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget, FormValidator);
  }
}

function keyHandler(evt) {
    if (evt.key === 'Escape'){
      const popup = document.querySelector('.popup_opened');
      if (popup && popup.classList.contains('popup_cards')) {
        closePopup(popup, AddCardsForm);
      } else if (popup && popup.classList.contains('popup_profile')){
        closePopup(popup, ProfileForm);
      } else {
        closePopup(popup, popupZoomCard);
      }
    }
}

function makeProfileForm() {

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
const ProfileForm = new FormValidator(validationConfig, popupProfile);
makeAddCardsForm();
const AddCardsForm = new FormValidator(validationConfig, popupCards);

