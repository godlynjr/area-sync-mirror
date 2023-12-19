const api = "http://localhost:8181";

class Client {
  #accesToken = undefined;
  #personal = null;
  constructor() {
    this.isLoggedIn = false;
  }

  #fillRequestHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  async #getData(endpoint) {
    const response = await fetch(endpoint, {
      headers: this.#fillRequestHeaders(),
    });
    return await response.json();
  }

  async #fetchPersonalData() {
    try {
      this.#personal = await this.#getData(api + "/me");
    } catch (error) {
      console.log(error);
    }
  }

  async login(mail, password) {
    try {
      const response = await fetch(api + "/auth/web/login", {
        method: "POST",
        headers: this.#fillRequestHeaders(),
        body: JSON.stringify({ email: mail, password: password }),
      })
      .then(response => response.json())
      .then(data => {
        // localStorage.setItem('authToken', data.token);

        // // Redirection
        window.location.href = '/';
        console.log(data)
      })
      .catch(error => {
        console.error('Erreur de connexion :', error);
      });
      this.isLoggedIn = true;
      this.#accesToken = (await response.json()).access_token;
      await this.#fetchPersonalData();
    } catch (error) {
      console.log(error);
    }
  }

  async register(mail, password) {
    try {
      const response = await fetch(api + "/auth/web/register", {
        method: "POST",
        headers: this.#fillRequestHeaders(),
        body: JSON.stringify({ email: mail, password: password }),
      })
      .then(response => response.json())
      .then(data => {
        // localStorage.setItem('authToken', data.token);

        // // Redirection
        console.log(data)
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Erreur de connexion :', error);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const User = new Client();
export default User;
