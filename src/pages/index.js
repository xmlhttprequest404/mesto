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
  avatarButton
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
  // url: 'https://mesto.nomoreparties.co/v1/cohort-75/',
  // headers: {
  //   authorization: 'ecf50b82-c9ee-411a-985f-cc6b9ba52a55',
  //   "Content-Type": "application/json"
  // }

  url: 'https://mesto.nomoreparties.co/v1/cohort-76/',
  headers: {
    authorization: '8f8af84c-eec3-4285-befa-34c0d077142c',
    "Content-Type": "application/json"
  }
}

const api = new Api(apiOptions.url, apiOptions.headers);

let user = null;

api.getUserInfoApi()
  .then (me => {
    user = me;
    userProfile.setUserInfo(me);
  })
  .catch (error => {
    console.log(error);
  });

  const userProfile = new UserInfo(
    {
      userName: profileName,
      userAbout: profileText
    }
  );


const popupAvatar = new PopupWithForm(popupAvatarElement, (inputValues) => {
  popupAvatar.renderLoading(true);
  api.loadNewAvatar({ avatar: inputValues.avatarUrlImage })
  .then (res => {
    userProfile.setUserInfo(res);
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


const popupDelete = new PopupForDelete(popupDeleteElement, (id, cardDataApi, card) => {
  // при удалении карточки повторно, не обновляя страницы, отправляется запрос со старыми id и вместе с ним новый, т.е. если удаляю
  // 3 карточки, во-первых скрипт отправляет 3 запроса, два из которых со старыми данными (на которых всплывает ошибка: от сервера о
  // том, что можно удалять только свои карточки, и соответственно в консоли, о том что ответ пришел пустой). Я искал где все-таки
  // значение id может накапливаться.. но не нашел.. а заметил, что данные старые и просто не успевают обновляться..
  // поэтому подумал обновлять данные здесь
  // api.getInitialCards()
  //   .then (cards => {
  //     if(cards.some(item => item._id === id)){
  //       api.deleteCard(id)
  //         .then (res => {
  //           console.log(res);
  //           card.remove();
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         })
  //         } else {
  //           cardDataApi = cards;
  //           Promise.resolve(console.log('refreshing data..'));
  //         }
  //   })
  //   .catch (error => {
  //     console.log(error);
  //   });

    api.deleteCard(id)
      .then (res => {
        console.log(res);
        card.remove();
      })
      .catch(error => {
        console.log(error);
      });

});


const popupImg = new PopupWithImage(popupZoomCard);
popupImg.setEventListeners();

const handleCardClick = function (cardApi) {
  popupImg.open(cardApi);
}

const createCard = function (cardDataApi) {
      const card = new Card(cardDataApi, user._id, '#elements', () => handleCardClick(cardDataApi),
      (evt, cardId, likesCounterEl) => {

        if (cardDataApi.likes.some(like => like._id === user._id)) {
            api.decreaseLike(cardId)
            .then (res => {
              likesCounterEl.textContent = res.likes.length;
              cardDataApi = res;
              evt.target.classList.remove('element__like_theme_dark');
            })
            .catch(error => {
              console.log(error);
            });

          } else {
            api.increaseLike(cardId)
            .then (res => {
              likesCounterEl.textContent = res.likes.length;
              cardDataApi = res;
              evt.target.classList.add('element__like_theme_dark');
            })
            .catch (error => {
              console.log(error);
            });

          }

      },

      (likeEl) => {
        if (cardDataApi.likes.some(like => like._id === user._id)) {
          likeEl.classList.add('element__like_theme_dark');
        } else {
          likeEl.classList.remove('element__like_theme_dark');
        }
      },

      (id, cardDataApi, card) => {
        popupDelete.open();
        popupDelete.setEventListeners(id, cardDataApi, card);
      })
      .generateCard();

    return card;
}


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
      const userData = userProfile.getUserInfo();
      profileInputName.value = userData.name;
      profileInputOccupation.value = userData.about;
      popupProfile.open();
      validatorEditProfile.disableButton();
      validatorEditProfile.resetValidation();
  });
});


const cardList = new Section({ renderer: (card) => {
    cardList.addItemAppend(createCard(card, user._id));
  }
}, container);


api.getInitialCards()
  .then (cards => {
    cardList.renderItems(cards);
  })
  .catch (error => {
    console.log(error);
  });


const popupCards = new PopupWithForm(popupCardsElement, (inputValues, popup) => {
  popup.renderLoading(true);
  api.sendCard(inputValues)
    .then (card => {
      cardList.renderer = () => {
        cardList.addItemPrepend(createCard(card, user._id));
        popup.close();
      }
      cardList.renderer();
    })
    .catch (error => {
      console.log(error);
    })
    .finally ( () => {
      popup.finalyHandle();
    });
  },
  (popup) => {
    addButton.addEventListener('click', () => {
    popup.open();
    validatorAddCard.disableButton();
  })
});

popupCards.setEventListeners();
popupProfile.setEventListeners();
popupAvatar.setEventListeners();

const validatorEditProfile = new FormValidator(validationConfig, popupProfileElement);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationConfig, popupCardsElement);
validatorAddCard.enableValidation();

const validatorPopupAvatar = new FormValidator(validationConfig, popupAvatarElement);
validatorPopupAvatar.enableValidation();


