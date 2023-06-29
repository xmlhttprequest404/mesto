export function popupHandle () {
  let popup = document.querySelector('.popup');
  let editButton = document.querySelector('.profile__edit-button');
  let popupExit = popup.querySelector('.popup__exit');
  let formElement = popup.querySelector('.popup__container');
  let popupInputName = formElement.querySelector('.popup__name');
  let popupInputOccupation = formElement.querySelector('.popup__occupation');

  // открытие и закрытие попапа

  editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
  });

  popupExit.addEventListener('click', function () {
    if (popupInputName.value !== "Жак-Ив Кусто" || popupInputOccupation.value !== "Исследователь океана") {
      popupInputName.value = "Жак-Ив Кусто";
      popupInputOccupation.value = "Исследователь океана";
    }
    popup.classList.remove('popup_opened');
  });

  // обработка полей формы

  function handleFormSubmit (evt) {
    evt.preventDefault();

    let profileName = document.querySelector('.profile__name');
    let profileText = document.querySelector('.profile__text');

    profileName.textContent = popupInputName.value;
    profileText.textContent = popupInputOccupation.value;

    popup.classList.remove('popup_opened');
  }

  formElement.addEventListener('submit', handleFormSubmit);
}

popupHandle();
