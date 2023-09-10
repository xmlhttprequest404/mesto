export default class Card {
  constructor (data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick();
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
