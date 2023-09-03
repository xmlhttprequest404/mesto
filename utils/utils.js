function openPopup(element) {
  element.classList.add('popup_opened');
  window.addEventListener('keydown', keyHandler);
  element.addEventListener('mousedown', closePopupByOverlay);
}

function closePopup(element) {
  element.classList.remove('popup_opened');
  window.removeEventListener('keydown', keyHandler);
  element.removeEventListener('click', closePopupByOverlay);
}

const closePopupByOverlay = (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}

const keyHandler = function(evt) {
  if (evt.key === 'Escape'){
    const popup = document.querySelector('.popup_opened');
    if (popup) {
      closePopup(popup);
    }
  }
}

export { openPopup, closePopup };
