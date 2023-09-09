import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";


const CardList = new Section(
  { items: initialCards, renderer: (item) => {
    const card = new Card(item, '#elements', (evt) => {
      const popupImg = new PopupWithImage(popupZoomCard);
      popupImg.open(evt);
      popupImg.setEventListeners();
    }).generateCard();
    CardList.addItem(card);
  }
}, container);

const userProfile = new UserInfo({
  userName: profileName.textContent,
  userAbout: profileText.textContent
});

const popupProfile = new PopupWithForm(popupProfileElement, (inputList) => {
  userProfile.setUserInfo({
    name: inputList[0].value,
    about: inputList[1].value
  });
});

const popupCards = new PopupWithForm(popupCardsElement, (inputList) => {
  const data = [{
    name: inputList[0].value,
    link: inputList[1].value,
    alt: inputList[0].value
  }];

  CardList.renderedItems = data;
  CardList.renderItems();
});

function setIndexEventListeners() {
  editButton.addEventListener('click', () => {
    profileInputName.value = userProfile.getUserInfo().name;
    profileInputOccupation.value = userProfile.getUserInfo().about;
    popupProfile.open();
    validatorEditProfile.disableSubmitButton();
  });

  addButton.addEventListener('click', () => {
    popupCards.open();
    validatorAddCard.disableSubmitButton();
  });
}

CardList.renderItems();
popupProfile.setEventListeners();
popupCards.setEventListeners();
setIndexEventListeners();

const validatorEditProfile = new FormValidator(validationConfig, popupProfileElement);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, popupCardsElement);
validatorAddCard.enableValidation();

