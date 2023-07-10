const formTemplate = document.querySelector('#form').content;
const formContainer = document.querySelector('.popup__container');
const editButton = document.querySelector('.profile__edit-button');

const renderForm = (formTitle, placeholderFirst, placeholderSecond, buttonAction) => {
  const formElement = formTemplate.querySelector('.popup__form').cloneNode(true);
  // Элементы блока profile
  const profileName = document.querySelector('.profile__name');
  const profileText = document.querySelector('.profile__text');
  // Элементы блока popup
  const popup = document.querySelector('.popup');
  const popupExit = popup.querySelector('.popup__exit');
  const popupInputName = formElement.querySelector('#popup__name');
  const popupInputOccupation = formElement.querySelector('#popup__occupation');

  formElement.querySelector('.popup__title').textContent = formTitle;
  popupInputName.placeholder = placeholderFirst;
  popupInputOccupation.placeholder = placeholderSecond;

  console.log(formContainer.children);

  function closePopup () {  // закрыть попап
    popup.classList.remove('popup_opened');
    formElement.remove();
  }

  function openPopup () {  // открыть попап
    formContainer.append(formElement);
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

  buttonAction.addEventListener('click', openPopup);
  popupExit.addEventListener('click', closePopup);
  formElement.addEventListener('submit', handleFormSubmit);
}

renderForm('Редактировать профиль', 'Имя', 'О себе', editButton);





