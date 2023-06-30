// Элементы блока profile
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
let editButton = document.querySelector('.profile__edit-button');
// Элементы блока popup
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__form');
let popupExit = formElement.querySelector('.popup__exit');
let popupInputName = formElement.querySelector('#popup__name');
let popupInputOccupation = formElement.querySelector('#popup__occupation');

// Элемент блока element
let like = document.querySelectorAll('.element__like');

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

function popupHandle () {  // Обработчик формы
  editButton.addEventListener('click', openPopup);
  popupExit.addEventListener('click', closePopup);
  formElement.addEventListener('submit', handleFormSubmit);
}

toggleLike();
popupHandle();


