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
    popupAvatar.close();
  })
  .catch (error => {
    console.log(error);
  })
  .finally (() => {
    popupAvatar.finalyHandle();
  })
}, () => {
    avatarButton.addEventListener('click', () => {
    popupAvatar.open();
    validatorPopupAvatar.disableButton();
  });
});

const popupDelete = new PopupForDelete(popupDeleteElement, (id) => {
  api.deleteCard(id)
  .then (res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
});


const handleCardClick = function (cardApi) {
  const popupImg = new PopupWithImage(popupZoomCard);
  popupImg.open(cardApi);
  popupImg.setEventListeners();
}

const createCard = function (cardDataApi, meId) {
      const card = new Card(cardDataApi, meId, '#elements', () => handleCardClick(cardDataApi),
      (evt, cardId, likesCounterEl) => {

        if (cardDataApi.likes.some(like => like._id === meId)) {
            api.decreaseLike(cardId)
            .then (res => {
              likesCounterEl.textContent = res.likes.length;
              cardDataApi = res;
            })
            .catch(error => {
              console.log(error);
            });
            evt.target.classList.remove('element__like_theme_dark');
          } else {
            api.increaseLike(cardId)
            .then (res => {
              likesCounterEl.textContent = res.likes.length;
              cardDataApi = res;
            })
            .catch (error => {
              console.log(error);
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
      },

      (id, card) => {
        popupDelete.open();
        console.log(card);
        popupDelete.setEventListeners(id, card);
      })
      .generateCard();

    return card;
}


const userProfile = new UserInfo(
  {
    userName: profileName,
    userAbout: profileText
  }
);


api.getUserInfoApi()
  .then (res => {
    userProfile.setUserInfo(res);
  })
  .catch (error => {
    console.log(error);
  });


const popupProfile = new PopupWithForm(popupProfileElement, (inputValues) => {
  popupProfile.renderLoading(true);
  api.sendUserInfoApi(inputValues)
  .then (res => {
    userProfile.setUserInfo(res);
    popupProfile.close();
  })
  .catch (error => {
    console.log(error);
  })
  .finally(() => {
    popupProfile.finalyHandle();
  });

}, () => {
    editButton.addEventListener('click', () => {
    profileInputName.value = userProfile.getUserInfo().name;
    profileInputOccupation.value = userProfile.getUserInfo().about;
    popupProfile.open();
    validatorEditProfile.disableButton();
    validatorEditProfile.resetValidation();
  });
});


api.getInitialCards().
then (cards => {
  const cardList = new Section(
    { renderer: () => {
      api.getUserInfoApi()
      .then (me => {
        cards.forEach(item => {
          cardList.addItemAppend(createCard(item, me._id));
        });
      })
    }
  }, container);
  cardList.renderItem();
  return cardList;
})
.then (cardList => {
   new PopupWithForm(popupCardsElement, (inputValues, popup) => {
    popup.renderLoading(true);
    api.sendCard(inputValues)
    .then (card => {
      cardList.renderer = () => {
        api.getUserInfoApi()
        .then (me => {
          cardList.addItemPrepend(createCard(card, me._id));
          popup.close();
        })
        .catch (error => {
          console.log(error)
        });
      }
      cardList.renderItem();
    })
    .catch (error => {
      console.log(error);
    })
    .finally ( () => {
      popup.finalyHandle();
    });
  }, (popup) => {
      addButton.addEventListener('click', () => {
      popup.open();
      validatorAddCard.disableButton();
    })
  }).setEventListeners();
})
.catch (error => {
  console.log(error);
});

popupProfile.setEventListeners();
popupDelete.setEventListeners();
popupAvatar.setEventListeners();

const validatorEditProfile = new FormValidator(validationConfig, popupProfileElement);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, popupCardsElement);
validatorAddCard.enableValidation();

const validatorPopupAvatar = new FormValidator(validationConfig, popupAvatarElement);
validatorPopupAvatar.enableValidation();


