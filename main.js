(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitSelector:".popup__submit",inactiveSubmitClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorVisibleClass:"popup__error_visible"},t=document.querySelector(".elements"),n=document.querySelector(".popup_element"),r=document.querySelector(".popup_cards"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__name"),u=document.querySelector(".profile__text"),a=document.querySelector(".profile__edit-button"),c=document.querySelector(".popup_profile"),l=c.querySelector(".popup__input_name"),s=c.querySelector(".popup__input_occupation"),f=document.querySelector(".popup_delete"),p=document.querySelector(".popup_avatar"),y=document.querySelector(".profile__button-img");function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}document.querySelector(".profile__avatar");var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.renderer(e)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._exitButton=t.querySelector(".popup__exit"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&document.querySelector(".popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._exitButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageCaption=t._popup.querySelector(".popup__text"),t}return t=u,(n=[{key:"open",value:function(e){w(E(u.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImageCaption.textContent=e.name,this._popupImage.alt=e.alt}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleSubmitForm=t,r._enableForm=n,r._inputList=Array.from(r._popup.querySelectorAll(".popup__input")),r._preloader=r._popup.querySelector(".preloader"),r._form=r._popup.querySelector(".popup__form"),r}return t=u,(n=[{key:"finalyHandle",value:function(){this.renderLoading(!1),this._form.reset()}},{key:"renderLoading",value:function(e){e?this._preloader.classList.add("preloader_visible"):this._preloader.classList.remove("preloader_visible")}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;L(q(u.prototype),"setEventListeners",this).call(this),this._enableForm(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues(),e)}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var x=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardDataApi=t,this._name=t.name,this._link=t.link,this._alt=t.name,this.likes=t.likes,this._id=t._id,this._meId=n,this._owner=t.owner._id,this._popupHandleDelete=a,this._templateSelector=r,this._handleCardClick=o,this._handleToggleLike=i,this._handleInitialLikes=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._card.querySelector(".element__trash"),n=this._card.querySelector(".element__image"),r=this._card.querySelector(".element__like");t&&t.addEventListener("click",(function(){e._popupHandleDelete(e._id,e._cardDataApi,e._card)})),n.addEventListener("click",(function(){e._handleCardClick()})),r.addEventListener("click",(function(t){e._handleToggleLike(t,e._id,e._likesCounterEl)}))}},{key:"_generateTrashButton",value:function(){this._owner===this._meId&&(this._buttonDelete=document.createElement("button"),this._buttonDelete.ariaLabel="Кнопка удаления",this._buttonDelete.type="button",this._buttonDelete.classList.add("element__trash"),this._image.after(this._buttonDelete))}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._text=this._card.querySelector(".element__text"),this._image=this._card.querySelector(".element__image"),this._likesCounterEl=this._card.querySelector(".element__like-counter"),this._like=this._card.querySelector(".element__like"),this._handleInitialLikes(this._like),this._likesCounterEl.textContent=this.likes.length,this._image.src=this._link,this._image.alt=this._alt,this._text.textContent=this._name,this._generateTrashButton(),this._setEventListeners(),this._card}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var B=function(){function e(t){var n=t.userName,r=t.userAbout;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileText=r,this._profileAvatar=document.querySelector(".profile__avatar")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileText.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileText.textContent=e.about,this._profileAvatar.style.background="url(".concat(e.avatar,") 50%/cover no-repeat")}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var N=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._input=t.inputSelector,this._inactiveSubmit=t.inactiveSubmitClass,this._error=t.inputErrorClass,this._errorVisible=t.errorVisibleClass,this._currentForm=n,this._submit=this._currentForm.querySelector(t.submitSelector),this._inputList=Array.from(this._currentForm.querySelectorAll(this._input))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._currentForm.querySelector(".".concat(e.id,"-error"));e.classList.add(this._error),e.validationMessage.length>112&&(e.style.marginBottom="10px"),t.textContent=e.validationMessage,t.classList.add(this._errorVisible)}},{key:"_hideInputError",value:function(e){var t=this._currentForm.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._error),t.classList.remove(this._errorVisible),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableButton",value:function(){this._submit.setAttribute("disabled",!0),this._submit.classList.add(this._inactiveSubmit)}},{key:"_enableButton",value:function(){this._submit.removeAttribute("disabled"),this._submit.classList.remove(this._inactiveSubmit)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._submit)}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._checkInputValidity(t)}))}},{key:"enableValidation",value:function(){this._currentForm.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var J=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfoApi",value:function(){return this._sendRequest("".concat(this._url,"users/me"),{method:"GET",headers:this._headers})}},{key:"sendUserInfoApi",value:function(e){return this._sendRequest("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)})}},{key:"getInitialCards",value:function(){return this._sendRequest("".concat(this._url,"cards"),{method:"GET",headers:this._headers})}},{key:"sendCard",value:function(e){return this._sendRequest("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._sendRequest("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"increaseLike",value:function(e){return this._sendRequest("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"decreaseLike",value:function(e){return this._sendRequest("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"loadNewAvatar",value:function(e){return this._sendRequest("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)})}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==G(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e)).handleSubmitDel=t,n}return t=u,(n=[{key:"setEventListeners",value:function(e,t,n){var r=this;z(Q(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(o){o.preventDefault(),r.handleSubmitDel(e,t,n),r.close()}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v),X=new J("https://mesto.nomoreparties.co/v1/cohort-75/",{authorization:"ecf50b82-c9ee-411a-985f-cc6b9ba52a55","Content-Type":"application/json"}),Y=null;X.getUserInfoApi().then((function(e){Y=e,Z.setUserInfo(e)})).catch((function(e){console.log(e)}));var Z=new B({userName:i,userAbout:u}),$=new T(p,(function(e){$.renderLoading(!0),X.loadNewAvatar({avatar:e.avatarUrlImage}).then((function(e){Z.setUserInfo(e),$.close()})).catch((function(e){console.log(e)})).finally((function(){$.finalyHandle()}))}),(function(){y.addEventListener("click",(function(){$.open(),ue.disableButton()}))})),ee=new W(f,(function(e,t,n){X.deleteCard(e).then((function(e){console.log(e),n.remove()})).catch((function(e){console.log(e)}))})),te=function(e){return new x(e,Y._id,"#elements",(function(){return t=e,(r=new O(n)).open(t),void r.setEventListeners();var t,r}),(function(t,n,r){e.likes.some((function(e){return e._id===Y._id}))?X.decreaseLike(n).then((function(n){r.textContent=n.likes.length,e=n,t.target.classList.remove("element__like_theme_dark")})).catch((function(e){console.log(e)})):X.increaseLike(n).then((function(n){r.textContent=n.likes.length,e=n,t.target.classList.add("element__like_theme_dark")})).catch((function(e){console.log(e)}))}),(function(t){e.likes.some((function(e){return e._id===Y._id}))?t.classList.add("element__like_theme_dark"):t.classList.remove("element__like_theme_dark")}),(function(e,t,n){ee.open(),ee.setEventListeners(e,t,n)})).generateCard()},ne=new T(c,(function(e){ne.renderLoading(!0),X.sendUserInfoApi(e).then((function(e){Z.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.finalyHandle()}))}),(function(){a.addEventListener("click",(function(){var e=Z.getUserInfo();l.value=e.name,s.value=e.about,ne.open(),oe.disableButton(),oe.resetValidation()}))})),re=new _({renderer:function(e){re.addItemAppend(te(e,Y._id))}},t);X.getInitialCards().then((function(e){re.renderItems(e)})).catch((function(e){console.log(e)})),new T(r,(function(e,t){t.renderLoading(!0),X.sendCard(e).then((function(e){re.renderer=function(){re.addItemPrepend(te(e,Y._id)),t.close()},re.renderer()})).catch((function(e){console.log(e)})).finally((function(){t.finalyHandle()}))}),(function(e){o.addEventListener("click",(function(){e.open(),ie.disableButton()}))})).setEventListeners(),ne.setEventListeners(),$.setEventListeners();var oe=new N(e,c);oe.enableValidation();var ie=new N(e,r);ie.enableValidation();var ue=new N(e,p);ue.enableValidation()})();