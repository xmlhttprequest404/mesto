function profileForm(formElement, formContainer) {

  const profileInputName = formElement.querySelector('#firstInputLine');
  const profileInputOccupation = formElement.querySelector('#secondInputLine');
  const profileName = document.querySelector('.profile__name');
  const profileText = document.querySelector('.profile__text');  

  formElement.id = 'profileForm';
  formElement.name = 'editProfileForm';
  formElement.querySelector('.popup__title').textContent = 'Редактировать профиль';
  profileInputName.placeholder = 'Имя';
  profileInputOccupation.placeholder = 'О себе';  

  function openPopup() {
    formContainer.append(formElement);
    profileInputName.value = profileName.textContent;
    profileInputOccupation.value = profileText.textContent;
    popup.classList.add('popup_opened');
  }

  function closePopup() {
    popup.classList.remove('popup_opened');
    formElement.remove();
  }
  
  function handleFormSubmit (evt) { 
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileText.textContent = profileInputOccupation.value;
    closePopup();
  }
  
  editButton.addEventListener('click', openPopup);
  exitButton.addEventListener('click', closePopup);
  formElement.addEventListener('submit', handleFormSubmit);
}