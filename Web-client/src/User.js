const api = "http://localhost:8080";

class Client {
  #personal = null;
  constructor() {
    this.isLoggedIn = false;
  }

  #fillRequestHeaders() {
    return {
      "Content-Type": "application/json",
      'Authorization' : 'Bearer ' + localStorage.getItem('authToken')
    };
  }

  async log(mail, password) {
    try {
      const response = await fetch(api + "/auth/web/", {
        method: "POST",
        headers: this.#fillRequestHeaders(),
        body: JSON.stringify({ email: mail, password: password }),
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('authToken', data.token);

        // Redirection
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
      const response = await fetch(api + "/auth/json/", {
        method: "POST",
        headers: this.#fillRequestHeaders(),
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
}

const User = new Client();
export default User;
