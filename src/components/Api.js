export default class Api {
  constructor (url, headers) {
    this._url = url;
    this._headers = headers;
  }

  getUserInfoApi () {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    })

      .then (res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch (error => {
        console.log(error);
      });
  }

  sendUserInfoApi (userData) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userData)
    })

    .then (res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch (error => {
      console.log(error);
    })
  }

  getInitialCards () {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then (res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch (error => {
        console.log(error);
      });
  }

  sendCard (userData) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(userData)
    })
      .then (res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch (error => {
        console.log(error);
      });
  }
}




