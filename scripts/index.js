function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function renderCard(name, link, alt) {
  const template = document.querySelector('#elements').content;
  const container = document.querySelector('.elements');
  const cardsElement = template.querySelector('.element').cloneNode(true);
  cardsElement.querySelector('.element__image').src = link;
  cardsElement.querySelector('.element__image').alt = alt;
  cardsElement.querySelector('.element__text').textContent = name;
  container.prepend(cardsElement);
}

function makeProfileForm() {
  const profileName = document.querySelector('.profile__name');
  const profileText = document.querySelector('.profile__text');
  const editButton = document.querySelector('.profile__edit-button');
  const popupProfile = document.querySelector('.popup_profile');
  const exitButton = popupProfile.querySelector('.popup__exit');
  const profileInputName = popupProfile.querySelector('.popup__input_name');
  const profileInputOccupation = popupProfile.querySelector('.popup__input_occupation');
  
  function handleFormSubmit (evt) { 
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
  exitButton.addEventListener('click', () => {
    closePopup(popupProfile)
  });
  popupProfile.addEventListener('submit', handleFormSubmit);
}

function makeAddCardsForm() {
  const popupCards = document.querySelector('.popup_cards');
  const exitButton = popupCards.querySelector('.popup__exit');
  const cardsInputTitle = popupCards.querySelector('.popup__input_title');
  const cardsInputLink = popupCards.querySelector('.popup__input_url-image');
  const addButton = document.querySelector('.profile__add-button');
  const popupForm = popupCards.querySelector('.popup__form');

  function handleFormSubmit(evt) {
    evt.preventDefault();
    initialCards.push({name: cardsInputTitle.value, link: cardsInputLink.value, alt: 'Карточка пользователя'});

    const name = initialCards[initialCards.length - 1].name;
    const link = initialCards[initialCards.length - 1].link;
    const alt = initialCards[initialCards.length - 1].alt;

    renderCard(name, link, alt);
    makeCards();
    toggleLike();
    popupForm.reset();
    closePopup(popupCards);
  }

  addButton.addEventListener('click', () => {
    openPopup(popupCards);
  });
  exitButton.addEventListener('click', () => {
    closePopup(popupCards);
  });
  popupCards.addEventListener('submit', handleFormSubmit);
}

function makeCards() {
  const popupCards = document.querySelector('.popup_element');
  const exitButton = popupCards.querySelector('.popup__exit');
  
  function removeCardHandler() {
    const trashButton = document.querySelectorAll('.element__trash');
    trashButton.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
      });
    });
  }
  
  function makeCardPopup() {
    const card = document.querySelectorAll('.element');
    card.forEach((item) => {
      const image = item.querySelector('.element__image');
      const text = item.querySelector('.element__text');
      image.addEventListener('click', (evt) => {
        popupCards.querySelector('.element__image_popup').src = evt.target.src;
        popupCards.querySelector('.element__text_popup').textContent = text.textContent;
        openPopup(popupCards);
      });
    });
  }

  removeCardHandler();
  makeCardPopup();
  
  exitButton.addEventListener('click', () => {
  closePopup(popupCards);
});
}

function toggleLike() {
  const like = document.querySelectorAll('.element__like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('element__like_theme_dark');
    });
  });
}

initialCards.forEach((item) => {
  renderCard(item.name, item.link, item.alt);
});

makeCards();
makeProfileForm();
makeAddCardsForm();
toggleLike();

