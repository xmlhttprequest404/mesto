import './index.css';
import { validationConfig } from '../utils/constants';
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
import profileImage from '../images/profile-image.jpg';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from '../components/Api';

const apiOptions = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-75/',
  headers: {
    authorization: 'ecf50b82-c9ee-411a-985f-cc6b9ba52a55',
    "Content-Type": "application/json"
  }
}

const api = new Api(apiOptions.url, apiOptions.headers);


const handleCardClick = function (cardApi) {
  const popupImg = new PopupWithImage(popupZoomCard);
  popupImg.open(cardApi);
  popupImg.setEventListeners();
}



const createCard = function (cardApi) {
      const card = new Card(cardApi, api.getUserInfoApi() , '#elements', () => handleCardClick(cardApi),
      (evt, cardId, likesEl, mePromise) => {

        mePromise.then(meData => {
          if (cardApi.likes.some(likesApi => likesApi._id === meData._id)) {
            api.decreaseLike(cardId)
            .then (res => {
              console.log(res.likes.length);
              likesEl.textContent = res.likes.length;
              console.log(res);
            });
            evt.target.classList.remove('element__like_theme_dark');
          } else {
            api.increaseLike(cardId)
            .then (res => {
              likesEl.textContent = res.likes.length;
              console.log(res);
            });
            evt.target.classList.add('element__like_theme_dark');
          }
        })
      }, (like, meData) => {
        if (cardApi.likes.some(likesApi => likesApi._id === meData._id)) {
          like.classList.add('element__like_theme_dark');
        } else {
          like.classList.remove('element__like_theme_dark');
        }
      }).generateCard();
    return card;
}


api.getInitialCards().
then(res => {
  const cardList = new Section(
    { cardData: res, renderer: (cardApi) => {
      cardList.addItemAppend(createCard(cardApi));
    }
  }, container);
  cardList.renderItems();
});

const userProfile = new UserInfo(
  {
    userName: profileName,
    userAbout: profileText
  }
);

api.getUserInfoApi()
  .then(res => {
    userProfile.setUserInfo(res);
  });

const popupProfile = new PopupWithForm(popupProfileElement, (inputValues) => {
  api.sendUserInfoApi({
    name: inputValues.popupName,
    about: inputValues.popupOccupation
  })
  .then(res => {
    userProfile.setUserInfo(res);
  })
});


const popupCards = new PopupWithForm(popupCardsElement, (inputValues) => {
  const data = {
    name: inputValues.popupTitle,
    link: inputValues.popupUrlImage,
  };
  api.sendCard(data)
  .then (res => {
    const card = new Section({ cardData: res, renderer: (item) => {
      card.addItemPrepend(createCard(item));
    }
  }, container);
  card.renderItem();
  });
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

popupProfile.setEventListeners();
popupCards.setEventListeners();
setIndexEventListeners();


const validatorEditProfile = new FormValidator(validationConfig, popupProfileElement);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, popupCardsElement);
validatorAddCard.enableValidation();


