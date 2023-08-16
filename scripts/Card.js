import { openPopup } from "./index.js";

export class Card {
  constructor (data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _handleRemoveCard() {
    this._card.remove();
  }

  _handleZoomOpen(evt) {
    popupImage.src = evt.target.src;
    popupText.textContent = this._text.textContent;
    popupImage.alt = evt.target.alt;
    openPopup(popupZoomCard);
  }

  _handleToggleLike(evt) {
    evt.target.classList.toggle('element__like_theme_dark');
  }

  _setEventListeners() {
    const trashButton = this._card.querySelector('.element__trash');
    const cardImage = this._card.querySelector('.element__image');
    const like = this._card.querySelector('.element__like');

    trashButton.addEventListener('click', () => {
      this._handleRemoveCard();
    });

    cardImage.addEventListener('click', (evt) => {
      this._handleZoomOpen(evt);
    });

    like.addEventListener('click', (evt) => {
      this._handleToggleLike(evt);
    });

  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._text = this._card.querySelector('.element__text');
    this._image = this._card.querySelector('.element__image');

    this._image.src = this._link;
    this._image.alt = this._alt;
    this._text.textContent = this._name;

    return this._card;
  }

}
