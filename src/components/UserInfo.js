export default class UserInfo {
  constructor({userName, userAbout}) {
    this._profileName = userName;
    this._profileText = userAbout;
    this._profileAvatar = document.querySelector('.profile__avatar');

  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileText.textContent
    }
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileText.textContent = userData.about;
    this._profileAvatar.style.background = `url(${userData.avatar}) 50%/cover no-repeat`;
  }
}
