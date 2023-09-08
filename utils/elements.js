const container = document.querySelector('.elements');

// createCard
const popupZoomCard = document.querySelector('.popup_element');
const popupImage = popupZoomCard.querySelector('.popup__image');
const popupText = popupZoomCard.querySelector('.popup__text');
const exitZoomButton = popupZoomCard.querySelector('.popup__exit');

// makeAddCardsForm
const popupCardsElement = document.querySelector('.popup_cards');
const exitAddCardsFormButton = popupCardsElement.querySelector('.popup__exit');
const cardsInputTitle = popupCardsElement.querySelector('.popup__input_title');
const cardsInputLink = popupCardsElement.querySelector('.popup__input_url-image');
const addButton = document.querySelector('.profile__add-button');
const popupForm = popupCardsElement.querySelector('.popup__form');

// makeProfileForm
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const popupProfileElement = document.querySelector('.popup_profile');
const exitProfileButton = popupProfileElement.querySelector('.popup__exit');
const profileInputName = popupProfileElement.querySelector('.popup__input_name');
const profileInputOccupation = popupProfileElement.querySelector('.popup__input_occupation');
