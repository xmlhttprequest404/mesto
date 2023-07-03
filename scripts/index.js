// Элементы блока profile
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
// Элементы блока popup
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');
const popupExit = popup.querySelector('.popup__exit');
const popupInputName = formElement.querySelector('#popup__name');
const popupInputOccupation = formElement.querySelector('#popup__occupation');

// Элемент блока element
const like = document.querySelectorAll('.element__like');

function toggleLike() {  // переключатель лайков
  for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function() {
      like[i].classList.toggle('element__like_theme_dark');
    });
  }
}

function closePopup () {  // закрыть попап
  popup.classList.remove('popup_opened');
}

function openPopup () {  // открыть попап
  popupInputName.value = profileName.textContent;
  popupInputOccupation.value = profileText.textContent;
  popup.classList.add('popup_opened');
}

function handleFormSubmit (evt) {  // обработчик полей формы и кнопки "сохранить"
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileText.textContent = popupInputOccupation.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
popupExit.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

toggleLike();


