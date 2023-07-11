const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const exitButton = popup.querySelector('.popup__exit');

const renderForm = (formId) => {
  const formTemplate = document.querySelector('#form').content;
  const formContainer = document.querySelector('.popup__container');
  const formElement = formTemplate.querySelector('.popup__form').cloneNode(true);

  if (formId === 'profileForm') {
    profileForm(formElement, formContainer);

  } else if (formId === 'addCardsForm') {
    addCardsForm(formElement, formContainer);
  }
}

renderForm('profileForm');
renderForm('addCardsForm');