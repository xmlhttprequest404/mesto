export default class Card {
  constructor (data, mePromise, templateSelector, handleCardClick, handleToggleLike, handleInitialLikes) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this.likes = data.likes;
    this._id = data._id;
    this._mePromise = mePromise;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleToggleLike = handleToggleLike;
    this._handleInitialLikes = handleInitialLikes;
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

  _setEventListeners() {
    const trashButton = this._card.querySelector('.element__trash');
    const cardImage = this._card.querySelector('.element__image');
    const like = this._card.querySelector('.element__like');

    trashButton.addEventListener('click', () => {
      this._handleRemoveCard();
    });

    cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    like.addEventListener('click', (evt) => {
      this._handleToggleLike(evt, this._id, this._likes, this._mePromise);
    });

  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._text = this._card.querySelector('.element__text');
    this._image = this._card.querySelector('.element__image');
    this._likes = this._card.querySelector('.element__like-counter');
    this._like = this._card.querySelector('.element__like');

    this._mePromise.then(meData => {
      this._handleInitialLikes(this._like, meData);
    })

    this._likes.textContent = this.likes.length;
    this._image.src = this._link;
    this._image.alt = this._alt;
    this._text.textContent = this._name;

    return this._card;
  }

}
