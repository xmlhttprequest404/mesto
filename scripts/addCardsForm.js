function addCardsForm(formElement, formContainer) {
  
  const cardsInputTitle = formElement.querySelector('#firstInputLine');
  const cardsInputLink = formElement.querySelector('#secondInputLine');

  formElement.id = "addCardsForm";
  formElement.name = 'addCardsForm';
  formElement.querySelector('.popup__title').textContent = 'Новое место';
  cardsInputTitle.placeholder = 'Название';
  cardsInputLink.placeholder = 'Ссылка на картинку';
  cardsInputTitle.required = true;
  cardsInputLink.required = true;

  function openPopup() {
    formContainer.append(formElement);
    popup.classList.add('popup_opened');
  }

  function closePopup() {
    popup.classList.remove('popup_opened');
    formElement.remove();
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    initialCards.unshift({name: cardsInputTitle.value, link: cardsInputLink.value, alt: 'Карточка пользователя'});
    renderCards(cardsInputLink.value, cardsInputTitle.value, '');
    toggleLike();
    closePopup();
  }

  addButton.addEventListener('click', openPopup);
  exitButton.addEventListener('click', closePopup);
  formElement.addEventListener('submit', handleFormSubmit);
}