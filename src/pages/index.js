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
  popupDeleteElement,
  popupAvatarElement,
  avatarButton,
  profileAvatar
} from '../utils/elements.js';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from '../components/Api';
import PopupForDelete from '../components/PopupForDelete';

const apiOptions = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-75/',
  headers: {
    authorization: 'ecf50b82-c9ee-411a-985f-cc6b9ba52a55',
    "Content-Type": "application/json"
  }
}

const api = new Api(apiOptions.url, apiOptions.headers);

const popupAvatar = new PopupWithForm(popupAvatarElement, (inputValues) => {
  popupAvatar.renderLoading(true);
  api.loadNewAvatar({ avatar: inputValues.avatarUrlImage })
  .then (res => {
    profileAvatar.style.background = `url(${res.avatar}) 50% center/cover no-repeat`;
  })
  .catch (error => {
    console.log(error);
  })
  .finally (() => {
    popupAvatar.finalyHandle();
  })
});

const popupDelete = new PopupForDelete(popupDeleteElement, (id) => {
  api.deleteCard(id)
  .then (res => {
    if (res.ok) {
      console.log(res);
    }
  })
});


const handleCardClick = function (cardApi) {
  const popupImg = new PopupWithImage(popupZoomCard);
  popupImg.open(cardApi);
  popupImg.setEventListeners();
}

const createCard = function (cardDataApi, meId) {
      const card = new Card(cardDataApi, meId, '#elements', popupDelete, () => handleCardClick(cardDataApi),
      (evt, cardId, likesCounterEl) => {

        if (cardDataApi.likes.some(like => like._id === meId)) {
            api.decreaseLike(cardId)
            .then (res => {
              likesCounterEl.textContent = res.likes.length;
              cardDataApi = res;
            });
            evt.target.classList.remove('element__like_theme_dark');
          } else {
            api.increaseLike(cardId)
            .then ((res) => {
              likesCounterEl.textContent = res.likes.length;
              cardDataApi = res;
            });
            evt.target.classList.add('element__like_theme_dark');
          }

      },

      (likeEl) => {
        if (cardDataApi.likes.some(like => like._id === meId)) {
          likeEl.classList.add('element__like_theme_dark');
        } else {
          likeEl.classList.remove('element__like_theme_dark');
        }
      }).generateCard();

    return card;
}


api.getInitialCards().
then(res => {
  const cardList = new Section(
    { cardData: res, renderer: (cardApi, meId) => {
      cardList.addItemAppend(createCard(cardApi, meId));
    }
  }, container, api.getUserInfoApi());
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
  popupProfile.renderLoading(true);
  api.sendUserInfoApi({
    name: inputValues.popupName,
    about: inputValues.popupOccupation
  })
  .then (res => {
    userProfile.setUserInfo(res);
  })
  .catch (error => {
    console.log(error);
  })
  .finally(() => {
    popupProfile.finalyHandle();
  });

});


const popupCards = new PopupWithForm(popupCardsElement, (inputValues) => {
  popupCards.renderLoading(true);
  const data = {
    name: inputValues.popupTitle,
    link: inputValues.popupUrlImage,
  };
  api.sendCard(data)
  .then (res => {
    const card = new Section({ cardData: res, renderer: (cardApi, meId) => {
      card.addItemPrepend(createCard(cardApi, meId));
    }
  }, container, api.getUserInfoApi());
  card.cardData = res;
  card.renderItem();
  })
  .catch (error => {
    console.log(error);
  })
  .finally (() => {
    popupCards.finalyHandle();
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

  avatarButton.addEventListener('click', () => {
    popupAvatar.open();

  });
}

popupProfile.setEventListeners();
popupCards.setEventListeners();
popupDelete.setEventListeners();
popupAvatar.setEventListeners();
setIndexEventListeners();


const validatorEditProfile = new FormValidator(validationConfig, popupProfileElement);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, popupCardsElement);
validatorAddCard.enableValidation();

const validatorPopupAvatar = new FormValidator(validationConfig, popupAvatarElement);
validatorPopupAvatar.enableValidation();


