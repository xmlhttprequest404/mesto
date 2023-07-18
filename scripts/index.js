function openPopup(element) {
  element.classList.add('popup_opened');
}
  
function closePopup(element) {
  element.classList.remove('popup_opened');
}

function makeProfileForm() {

  function handleProfileFormSubmit (evt) { 
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileText.textContent = profileInputOccupation.value;
    closePopup(popupProfile);
  }
  
  editButton.addEventListener('click', () => {
    profileInputName.value = profileName.textContent;
    profileInputOccupation.value = profileText.textContent;
    openPopup(popupProfile);
  });
  exitProfileButton.addEventListener('click', () => {
    closePopup(popupProfile)
  });
  popupProfile.addEventListener('submit', handleProfileFormSubmit);
}

function createCard(name, link, alt) {
  const template = document.querySelector('#elements').content;
  const cardsElement = template.querySelector('.element').cloneNode(true);
  const like = cardsElement.querySelector('.element__like');
  const trashButton = cardsElement.querySelector('.element__trash');
  const cardImage = cardsElement.querySelector('.element__image');
  const cardText = cardsElement.querySelector('.element__text');
  
  cardImage.src = link;
  cardImage.alt = alt;
  cardText.textContent = name;

  trashButton.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });
  
  cardImage.addEventListener('click', (evt) => {
    popupImage.src = evt.target.src;
    popupText.textContent = cardText.textContent;
    popupImage.alt = evt.target.alt;
    openPopup(popupZoomCard);
  });
  
  like.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like_theme_dark');
  });
  
  return cardsElement;
}

function makeAddCardsForm() {
  
  function handleAddCardsFormSubmit(evt) {
    evt.preventDefault();
    const name = cardsInputTitle.value;
    const link = cardsInputLink.value;
    const alt = cardsInputTitle.value;
    container.prepend(createCard(name, link, alt));
    popupForm.reset();
    closePopup(popupCards);
  }

  addButton.addEventListener('click', () => {
    openPopup(popupCards);
  });
  exitAddCardsFormButton.addEventListener('click', () => {
    closePopup(popupCards);
  });
  popupCards.addEventListener('submit', handleAddCardsFormSubmit);
}

exitZoomButton.addEventListener('click', () => {
  closePopup(popupZoomCard);
});

initialCards.forEach((item) => {
  container.prepend(createCard(item.name, item.link, item.alt));
});

makeProfileForm();
makeAddCardsForm();