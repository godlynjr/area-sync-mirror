const api = 'http://10.50.6.210:8080';

class Client {
    #accesToken = undefined;
    #personal = null;
    constructor() {
        this.isLoggedIn = false;
    }
    fillRequestHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }

    async getData(endpoint) {
        const response = await fetch(endpoint,
            {
                headers: this.fillRequestHeaders()
            });
        return await response.json();
    }

    async fetchPersonalData() {
        try {
            this.#personal = await this.getData(api + '/me');
        } catch (error) {
            console.log(error);
        }
    }

    async login(mail, password) {
        try {
            const response = await fetch(api + "/auth/login", {
                method: "POST",
                headers: this.fillRequestHeaders(),
                body: JSON.stringify({ email: mail, password: password }),
            })
            // console.log(response);
            // if (response.status == 200)
            //     console.log("Is good")
            // if (response.status == 400)
            //     console.log("Is good")
            .then(response => { 
                const statusCode = response.status;
                const data = response.json();
            })
            // .then(data => {
            //     window.location.href = '/';
            //     console.log(data)
            // })
            .catch(error => {
                console.error('Erreur de connexion :', error);
            });
            this.isLoggedIn = true;
            this.#accesToken = (await response.json()).access_token;
            await this.fetchPersonalData();
        } catch (error) {
            console.log(error);
        }
    }

    async checkMail(mail) {
        try {
            const response = await fetch(api + "/auth/check_mail", {
                method: "POST",
                headers: this.fillRequestHeaders(),
                body: JSON.stringify({ email: mail }),
            })
            .then(response => {
                const statusCode = response.status;
                const data = response.json();
                console.log(statusCode)
            })
            // .then(data => {
            //     window.location.href = '/check_mail';
            //     console.log(data)
            // })
            .catch(error => {
                console.error('Erreur de connexion :', error);
            });
            // console.log(response);
            // if (response.status == 200)
            //     console.log("Is good")
            // if (response.status == 400)
            //     console.log("Is good")

        } catch (error) {
            console.log(error);
        }
    }

    async register(mail, password) {
        try {
            const response = await fetch(api + "/auth/register", {
                method: "POST",
                headers: this.fillRequestHeaders(),
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
