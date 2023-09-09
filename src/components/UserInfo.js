import { profileName, profileText } from "../utils/elements";

export default class UserInfo {
  constructor({ userName, userAbout }) {
    this._userName = userName;
    this._userAbout = userAbout;
  }

  getUserInfo() {
    const userData = {
      name: this._userName,
      about: this._userAbout
    };
    return userData;
  }

  setUserInfo(userData) {
    this._userName = userData.name;
    this._userAbout = userData.about;
    profileName.textContent = userData.name;
    profileText.textContent = userData.about;
  }
}
