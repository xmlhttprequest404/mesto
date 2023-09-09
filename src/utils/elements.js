const container = document.querySelector('.elements');

// createCard
const popupZoomCard = document.querySelector('.popup_element');
const popupImage = popupZoomCard.querySelector('.popup__image');
const popupText = popupZoomCard.querySelector('.popup__text');
// makeAddCardsForm
const popupCardsElement = document.querySelector('.popup_cards');
const addButton = document.querySelector('.profile__add-button');

// makeProfileForm
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const popupProfileElement = document.querySelector('.popup_profile');
const profileInputName = popupProfileElement.querySelector('.popup__input_name');
const profileInputOccupation = popupProfileElement.querySelector('.popup__input_occupation');


export {
  container,
  popupZoomCard,
  popupImage,
  popupText,
  popupCardsElement,
  addButton,
  profileName,
  profileText,
  editButton,
  popupProfileElement,
  profileInputName,
  profileInputOccupation
};
