import './index.css';
import { validationConfig, initialCards } from '../utils/constants';
import {
  container,
  popupZoomCard,
  popupCardsElement,
  addButton,
  profileName,
  profileText,
  editButton,
  popupProfileElement,
  profileInputName,
  profileInputOccupation,
} from '../utils/elements.js';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";



const cardList = new Section(
  { items: initialCards, renderer: (item) => {
    const card = new Card(item, '#elements', () => {
      const popupImg = new PopupWithImage(popupZoomCard);
      popupImg.open(item);
      popupImg.setEventListeners();
    }).generateCard();
    cardList.addItem(card);
  }
}, container);

const userProfile = new UserInfo({
  userName: profileName,
  userAbout: profileText
});

const popupProfile = new PopupWithForm(popupProfileElement, (inputValues) => {
  userProfile.setUserInfo({
    name: inputValues.popupName,
    about: inputValues.popupOccupation
  });
});

const popupCards = new PopupWithForm(popupCardsElement, (inputValues) => {
  const data = [{
    name: inputValues.popupTitle,
    link: inputValues.popupUrlImage,
    alt: inputValues.popupTitle
  }];

  cardList.renderedItems = data;
  cardList.renderItems();
});

function setIndexEventListeners() {
  editButton.addEventListener('click', () => {
    profileInputName.value = userProfile.getUserInfo().name;
    profileInputOccupation.value = userProfile.getUserInfo().about;
    popupProfile.open();
    validatorEditProfile.disableSubmitButton();
    validatorEditProfile.resetValidation();
  });

  addButton.addEventListener('click', () => {
    popupCards.open();
    validatorAddCard.disableSubmitButton();
  });
}

cardList.renderItems();
popupProfile.setEventListeners();
popupCards.setEventListeners();
setIndexEventListeners();

const validatorEditProfile = new FormValidator(validationConfig, popupProfileElement);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, popupCardsElement);
validatorAddCard.enableValidation();

