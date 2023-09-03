import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openPopup, closePopup } from "../utils/utils.js";

const createCard = function(data, template) {
  const card = new Card(data, template);
  return card;
}

function setEditProfileFormListeners() {

  function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileText.textContent = profileInputOccupation.value;
    closePopup(popupProfile);
  }

  editButton.addEventListener('click', () => {
    profileInputName.value = profileName.textContent;
    profileInputOccupation.value = profileText.textContent;
    openPopup(popupProfile);
    validatorEditProfile.disableSubmitButton();
  });

  exitProfileButton.addEventListener('click', () => {
    closePopup(popupProfile);
  });

  popupProfile.addEventListener('submit', handleProfileFormSubmit);
}

function setAddCardFormListeners() {

  function handleAddCardsFormSubmit(evt) {
    evt.preventDefault();
    const data = {
      name: cardsInputTitle.value,
      link: cardsInputLink.value,
      alt: cardsInputTitle.value
    };
    container.prepend(createCard(data, '#elements').generateCard());
    popupForm.reset();
    closePopup(popupCards);
  }

  addButton.addEventListener('click', () => {
    openPopup(popupCards);
    validatorAddCard.disableSubmitButton();
  });
  exitAddCardsFormButton.addEventListener('click', () => {
    closePopup(popupCards);
  });
  popupCards.addEventListener('submit', handleAddCardsFormSubmit);

}

exitZoomButton.addEventListener('click', () => {
  closePopup(popupZoomCard);
});

initialCards.forEach((item) => {
  container.prepend(createCard(item, '#elements').generateCard());
});

setEditProfileFormListeners();
const validatorEditProfile = new FormValidator(validationConfig, popupProfile);
validatorEditProfile.enableValidation();
setAddCardFormListeners();
const validatorAddCard = new FormValidator(validationConfig, popupCards);
validatorAddCard.enableValidation();

