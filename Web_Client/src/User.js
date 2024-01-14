import axios from 'axios';
const api = "http://localhost:8080";

class Client {
  #personal = null;
  isLoggedIn = false;
  redirectUrl = null;

  constructor() {
  } 

  fillRequestHeaders() {
    return {
      "Content-Type": "application/json",
      'Authorization' : 'Bearer ' + localStorage.getItem('authToken'),
      'Url': 'http://localhost:8081' + this.redirectUrl
    };
  }

  async log(mail, password) {
    try {
      const response = await fetch(api + "/auth/web/", {
        method: "POST",
        headers: this.fillRequestHeaders(),
        body: JSON.stringify({ email: mail, password: password }),
      })
      .then(response => response.json())
      .then(data => {
        this.isLoggedIn = true;
        localStorage.setItem('authToken', data.token);
        window.location.href = '/home';
      })
      .catch(error => {
        console.error('Erreur de connexion :', error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAbout() {
    try {
      const response = await fetch(api + "/about.json", {
        method: "GET",
        headers: this.fillRequestHeaders(),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error; // Re-throw the error so it can be caught in the calling code
    }
  }

  async DiscordLogin(Url) {
    this.redirectUrl = Url;
    try {
      axios
          .get(api + "/users/discord/login", {
           headers: this.fillRequestHeaders(),
           body: JSON.stringify({ url: Url }),
          })
          .then((res) => {
            console.log(res.data);
            window.location.href = res.data;
          })
          .catch((err) => console.log(err));
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    }
  }

  async SpotifyLogin() {
    try {
      axios
          .get(api + "/spotify/login", {
           headers: this.fillRequestHeaders(),
          })
          .then((res) => {
            console.log(res.data);
            window.location.href = res.data;
          })
          .catch((err) => console.log(err));
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    }
  }

  async CalendarLogin(Url) {
    this.redirectUrl = Url;
    try {
      axios
          .get(api + "users/discord/calendar/login", {
           headers: this.fillRequestHeaders(),
          })
          .then((res) => {
            console.log(res.data);
            window.location.href = res.data;
          })
          .catch((err) => console.log(err));
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    }
  }
}

const User = new Client();
export default User;
