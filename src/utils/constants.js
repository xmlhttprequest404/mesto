import karachaevsk from '../images/karachaevsk.png';
import elbrus from '../images/elbrus-mountin.png';
import dombay from '../images/dombay.png';
import karachaevsk_1 from '../images/karachaevsk1.png';
import altay from '../images/altay.png';

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSelector: '.popup__submit',
  inactiveSubmitClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'popup__error_visible'
};

export const initialCards = [
  {
    name: 'Карачаевск',
    link: karachaevsk,
    alt: 'Архитектурное старинное здание, похожее на церковь на фоне поля, леса и гор'
  },
  {
    name: 'Гора Эльбрус',
    link: elbrus,
    alt: 'Равнина с небольшими холмами и вдалеке гора Эльбрус'
  },
  {
    name: 'Домбай',
    link: dombay,
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
    link: karachaevsk_1,
    alt: 'Архитектурное старинное здание, похожее на церковь на фоне поля, леса и гор'
  },
  {
    name: 'Горный Алтай',
    link: altay,
    alt: 'Горный лес в тумане'
  }
];
