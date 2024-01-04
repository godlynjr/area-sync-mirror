const api = "http://localhost:8080";

class Data {
    #accesToken = undefined;

    // constructor() {
    // }

    #fillRequestHeaders(Format)
    {
      return {
        accept: Format,
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('authToken')
      };
    }

    async login(mail, password) {
        try {
          const response = await fetch(api + "/login", {
            method: "POST",
            headers: this.#fillRequestHeaders("application/json"),
            body: JSON.stringify({ email: mail, password: password }),
          })
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('authToken', data.token);
            // Redirection
            window.location.href = '/Dashboard';
          })
          .catch(error => {
            console.error('Erreur de connexion :', error);
          });
        } catch (error) {
          console.log(error);
        }
      }

    searchUserByName(UserList, name)
    {
        const lowerName = name.toLowerCase();

        return UserList.filter((item) => {
        return item.username.toLowerCase() === lowerName || item.email.toLowerCase() === lowerName;
        });
    }

    // Ajoutez d'autres méthodes pour gérer d'autres actions ici
}

const Infos = new Data();
export default Infos;
