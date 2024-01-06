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
        'Authorization' : 'Bearer ' + localStorage.getItem('auth-token')
      };
    }

    async login(mail, password) {
        try {
            const response = await fetch(api + "/backoffice/login", {
                method: "POST",
                headers: this.#fillRequestHeaders("application/json"),
                body: JSON.stringify({ email: mail, password: password }),
            });
    
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('auth-token', data.token);
                // Redirection
                window.location.href = '/Dashboard';
                return true;
            } else if (response.status === 400) {
                // Handle 400 Bad Request (wrong email or password)
                console.error('Erreur de connexion : Identifiants invalides');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
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
    // /backoffice/users/infos get toutes les infos
    // /backoffice/services total of services
    // /backoffice/user/edit/id edit special user
    // /backoffice/user/delete/id delete special user
}

const Infos = new Data();
export default Infos;
