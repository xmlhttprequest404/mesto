export default class UserInfo {
  constructor({ userName, userAbout }) {
    this._profileName = userName;
    this._profileText = userAbout;
  }

  getUserInfo() {
    const userData = {
      name: this._profileName.textContent,
      about: this._profileText.textContent
    };
    return userData;
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileText.textContent = userData.about;
  }
}
