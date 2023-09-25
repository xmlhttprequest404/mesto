(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitSelector:".popup__submit",inactiveSubmitClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorVisibleClass:"popup__error_visible"},t=document.querySelector(".elements"),n=document.querySelector(".popup_element"),r=document.querySelector(".popup_cards"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__name"),u=document.querySelector(".profile__text"),a=document.querySelector(".profile__edit-button"),c=document.querySelector(".popup_profile"),l=c.querySelector(".popup__input_name"),s=c.querySelector(".popup__input_occupation"),f=document.querySelector(".popup_delete"),p=document.querySelector(".popup_avatar"),y=document.querySelector(".profile__button-img"),d=document.querySelector(".profile__avatar");function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var b=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"renderItem",value:function(){this.renderer(this.renderedData)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._exitButton=t.querySelector(".popup__exit"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&document.querySelector(".popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._exitButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&e.close()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageCaption=t._popup.querySelector(".popup__text"),t}return t=u,(n=[{key:"open",value:function(e){k(O(u.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImageCaption.textContent=e.name,this._popupImage.alt=e.alt}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t,n,r){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e))._handleSubmitForm=t,o._enableForm=n,o.getInitialCards=r,o._inputList=Array.from(o._popup.querySelectorAll(".popup__input")),o._preloader=o._popup.querySelector(".preloader"),o._form=o._popup.querySelector(".popup__form"),o}return t=u,(n=[{key:"finalyHandle",value:function(){this.renderLoading(!1),this._form.reset()}},{key:"renderLoading",value:function(e){e?this._preloader.classList.add("preloader_visible"):this._preloader.classList.remove("preloader_visible")}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;C(q(u.prototype),"setEventListeners",this).call(this),this._enableForm(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues(),e)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var A=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._alt=t.name,this.likes=t.likes,this._id=t._id,this._meId=n,this._owner=t.owner._id,this._popupHandleDelete=a,this._templateSelector=r,this._handleCardClick=o,this._handleToggleLike=i,this._handleInitialLikes=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._card.querySelector(".element__trash"),n=this._card.querySelector(".element__image"),r=this._card.querySelector(".element__like");t&&t.addEventListener("click",(function(){e._popupHandleDelete(e._id,e._card)})),n.addEventListener("click",(function(){e._handleCardClick()})),r.addEventListener("click",(function(t){e._handleToggleLike(t,e._id,e._likesCounterEl)}))}},{key:"_generateTrashButton",value:function(){this._owner===this._meId&&(this._buttonDelete=document.createElement("button"),this._buttonDelete.ariaLabel="Кнопка удаления",this._buttonDelete.type="button",this._buttonDelete.classList.add("element__trash"),this._image.after(this._buttonDelete))}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._text=this._card.querySelector(".element__text"),this._image=this._card.querySelector(".element__image"),this._likesCounterEl=this._card.querySelector(".element__like-counter"),this._like=this._card.querySelector(".element__like"),this._handleInitialLikes(this._like),this._likesCounterEl.textContent=this.likes.length,this._image.src=this._link,this._image.alt=this._alt,this._text.textContent=this._name,this._generateTrashButton(),this._setEventListeners(),this._card}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var V=function(){function e(t){var n=t.userName,r=t.userAbout;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileText=r,this._profileAvatar=document.querySelector(".profile__avatar")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileText.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileText.textContent=e.about,this._profileAvatar.style.background="url(".concat(e.avatar,") 50%/cover no-repeat")}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._input=t.inputSelector,this._inactiveSubmit=t.inactiveSubmitClass,this._error=t.inputErrorClass,this._errorVisible=t.errorVisibleClass,this._currentForm=n,this._submit=this._currentForm.querySelector(t.submitSelector),this._inputList=Array.from(this._currentForm.querySelectorAll(this._input))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._currentForm.querySelector(".".concat(e.id,"-error"));e.classList.add(this._error),e.validationMessage.length>112&&(e.style.marginBottom="10px"),t.textContent=e.validationMessage,t.classList.add(this._errorVisible)}},{key:"_hideInputError",value:function(e){var t=this._currentForm.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._error),t.classList.remove(this._errorVisible),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableButton",value:function(){this._submit.setAttribute("disabled",!0),this._submit.classList.add(this._inactiveSubmit)}},{key:"_enableButton",value:function(){this._submit.removeAttribute("disabled"),this._submit.classList.remove(this._inactiveSubmit)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._submit)}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._checkInputValidity(t)}))}},{key:"enableValidation",value:function(){this._currentForm.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var G=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfoApi",value:function(){return this._sendRequest("".concat(this._url,"users/me"),{method:"GET",headers:this._headers})}},{key:"sendUserInfoApi",value:function(e){return this._sendRequest("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)})}},{key:"getInitialCards",value:function(){return this._sendRequest("".concat(this._url,"cards"),{method:"GET",headers:this._headers})}},{key:"sendCard",value:function(e){return this._sendRequest("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._sendRequest("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"increaseLike",value:function(e){return this._sendRequest("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"decreaseLike",value:function(e){return this._sendRequest("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"loadNewAvatar",value:function(e){return this._sendRequest("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)})}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e)).handleSubmitDel=t,n}return t=u,(n=[{key:"setEventListeners",value:function(e,t){var n=this;K(W(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(r){r.preventDefault(),e&&(n.handleSubmitDel(e),t.remove()),n.close()}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g),Y=new G("https://mesto.nomoreparties.co/v1/cohort-75/",{authorization:"ecf50b82-c9ee-411a-985f-cc6b9ba52a55","Content-Type":"application/json"}),Z=new T(p,(function(e){Z.renderLoading(!0),Y.loadNewAvatar({avatar:e.avatarUrlImage}).then((function(e){d.style.background="url(".concat(e.avatar,") 50% center/cover no-repeat"),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.finalyHandle()}))}),(function(){y.addEventListener("click",(function(){Z.open(),ie.disableButton()}))})),$=new X(f,(function(e){Y.deleteCard(e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})),ee=function(e,t){return new A(e,t,"#elements",(function(){return t=e,(r=new j(n)).open(t),void r.setEventListeners();var t,r}),(function(n,r,o){e.likes.some((function(e){return e._id===t}))?(Y.decreaseLike(r).then((function(t){o.textContent=t.likes.length,e=t})).catch((function(e){console.log(e)})),n.target.classList.remove("element__like_theme_dark")):(Y.increaseLike(r).then((function(t){o.textContent=t.likes.length,e=t})).catch((function(e){console.log(e)})),n.target.classList.add("element__like_theme_dark"))}),(function(n){e.likes.some((function(e){return e._id===t}))?n.classList.add("element__like_theme_dark"):n.classList.remove("element__like_theme_dark")}),(function(e,t){$.open(),console.log(t),$.setEventListeners(e,t)})).generateCard()},te=new V({userName:i,userAbout:u});Y.getUserInfoApi().then((function(e){te.setUserInfo(e)})).catch((function(e){console.log(e)}));var ne=new T(c,(function(e){ne.renderLoading(!0),Y.sendUserInfoApi(e).then((function(e){te.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.finalyHandle()}))}),(function(){a.addEventListener("click",(function(){l.value=te.getUserInfo().name,s.value=te.getUserInfo().about,ne.open(),re.disableButton(),re.resetValidation()}))}));Y.getInitialCards().then((function(e){var n=new b({renderer:function(){Y.getUserInfoApi().then((function(t){e.forEach((function(e){n.addItemAppend(ee(e,t._id))}))}))}},t);return n.renderItem(),n})).then((function(e){new T(r,(function(t,n){n.renderLoading(!0),Y.sendCard(t).then((function(t){e.renderer=function(){Y.getUserInfoApi().then((function(r){e.addItemPrepend(ee(t,r._id)),n.close()})).catch((function(e){console.log(e)}))},e.renderItem()})).catch((function(e){console.log(e)})).finally((function(){n.finalyHandle()}))}),(function(e){o.addEventListener("click",(function(){e.open(),oe.disableButton()}))})).setEventListeners()})).catch((function(e){console.log(e)})),ne.setEventListeners(),$.setEventListeners(),Z.setEventListeners();var re=new F(e,c);re.enableValidation();var oe=new F(e,r);oe.enableValidation();var ie=new F(e,p);ie.enableValidation()})();