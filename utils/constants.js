const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSelector: '.popup__submit',
  inactiveSubmitClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'popup__error_visible'
};

// cards
const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaevsk.png',
    alt: 'Архитектурное старинное здание, похожее на церковь на фоне поля, леса и гор'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus-mountin.png',
    alt: 'Равнина с небольшими холмами и вдалеке гора Эльбрус'
  },
  {
    name: 'Домбай',
    link: './images/dombay.png',
    alt: 'Хвойный лес в горах, на заднем плане лысая заснеженна гора'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Горы, покрытые зеленью'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Зимний лес и река'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Панельные дома вечером'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Равнина перед вулканом'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Рельсы идущие через лесостепь'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Холмистое побережье Байкала зимой'
  },
  {
    name: 'Карачаево-Черкессия',
    link: './images/karachaevsk1.png',
    alt: 'Архитектурное старинное здание, похожее на церковь на фоне поля, леса и гор'
  },
  {
    name: 'Горный Алтай',
    link: './images/altay.png',
    alt: 'Горный лес в тумане'
  }
];
