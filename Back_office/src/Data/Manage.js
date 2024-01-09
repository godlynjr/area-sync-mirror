const api = "http://localhost:8080";

class Data {
    #fillRequestHeaders()
    {
      return {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
      };
    }

    async login(mail, password) {
        try {
            const response = await fetch(api + "/backoffice/login", {
                method: "POST",
                headers: this.#fillRequestHeaders(),
                body: JSON.stringify({ email: mail, password: password }),
            });
    
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('auth-token', data.token);
                console.log('Token received:', localStorage.getItem('auth-token'));
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

    async getStats() {
        try {
            const response = await fetch(api + "/backoffice/dashboard", {
                method: "GET",
                headers: this.#fillRequestHeaders(),
            });

            if (!response.ok)
                throw new Error('Network response was not ok');

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUsers() {
        try {
            const response = await fetch(api + "/backoffice/users/infos", {
                method: "GET",
                headers: this.#fillRequestHeaders(),
            });

            if (!response.ok)
                throw new Error('Network response was not ok');

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async EditUserById(id) {
        try {

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async DeletetUserById(id) {
        try {
            const response = await fetch(`${api}/backoffice/user/delete/${id}`, {
                method: "DELETE",
                headers: this.#fillRequestHeaders(),
            });

            if (!response.ok)
                throw new Error('Network response was not ok');

            const data = await response.json();
            window.location.href = '/UserList';
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    searchUserByName(ulist, name)
    {
        const lowerName = name.toLowerCase();

        return ulist.filter((item) => {
        return item.username.toLowerCase() === lowerName || item.email.toLowerCase() === lowerName;
        });
    }

    // Ajoutez d'autres méthodes pour gérer d'autres actions ici
    // /backoffice/user/edit/id edit special user
    // /backoffice/user/delete/id delete special user
}

const Infos = new Data();
export default Infos;
