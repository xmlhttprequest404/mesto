const container = document.querySelector('.elements');

// createCard 
const popupZoomCard = document.querySelector('.popup_element');
const popupImage = popupZoomCard.querySelector('.popup__image');
const popupText = popupZoomCard.querySelector('.popup__text');
const exitZoomButton = popupZoomCard.querySelector('.popup__exit');

// makeAddCardsForm
const popupCards = document.querySelector('.popup_cards');
const exitAddCardsFormButton = popupCards.querySelector('.popup__exit');
const cardsInputTitle = popupCards.querySelector('.popup__input_title');
const cardsInputLink = popupCards.querySelector('.popup__input_url-image');
const addButton = document.querySelector('.profile__add-button');
const popupForm = popupCards.querySelector('.popup__form');

// makeProfileForm
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const exitProfileButton = popupProfile.querySelector('.popup__exit');
const profileInputName = popupProfile.querySelector('.popup__input_name');
const profileInputOccupation = popupProfile.querySelector('.popup__input_occupation');