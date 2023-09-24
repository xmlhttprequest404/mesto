export default class Card {
  constructor (cardDataApi, meId, templateSelector, popupDelete, handleCardClick, handleToggleLike, handleInitialLikes) {
    this._name = cardDataApi.name;
    this._link = cardDataApi.link;
    this._alt = cardDataApi.name;
    this.likes = cardDataApi.likes;
    this._id = cardDataApi._id;
    this._meId = meId;
    this._owner = cardDataApi.owner._id;
    this._popupDelete = popupDelete;
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
    this._popupDelete.getCardId(this._id);
    this._popupDelete.getElemForDel(this._card);
  }

  _setEventListeners() {
    const trashButton = this._card.querySelector('.element__trash');
    const cardImage = this._card.querySelector('.element__image');
    const like = this._card.querySelector('.element__like');

    if (trashButton) {
      trashButton.addEventListener('click', (evt) => {
        this._popupDelete.open();
        this._handleRemoveCard();
      });
    }

    cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    like.addEventListener('click', (evt) => {
      this._handleToggleLike(evt, this._id, this._likesCounterEl);
    });

  }

  _generateTrashButton () {
    if (this._owner === this._meId) {
      this._buttonDelete = document.createElement('button');
      this._buttonDelete.ariaLabel = 'Кнопка удаления';
      this._buttonDelete.type = 'button';
      this._buttonDelete.classList.add('element__trash');
      this._image.after(this._buttonDelete);
    }
  }

  generateCard() {
    this._card = this._getTemplate();

    this._text = this._card.querySelector('.element__text');
    this._image = this._card.querySelector('.element__image');
    this._likesCounterEl = this._card.querySelector('.element__like-counter');
    this._like = this._card.querySelector('.element__like');

    this._handleInitialLikes(this._like);

    this._likesCounterEl.textContent = this.likes.length;
    this._image.src = this._link;
    this._image.alt = this._alt;
    this._text.textContent = this._name;

    this._generateTrashButton();
    this._setEventListeners();

    return this._card;
  }

}
