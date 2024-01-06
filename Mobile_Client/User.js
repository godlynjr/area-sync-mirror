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
            // console.log(error);
        }
    }

    async login(mail, password) {
        try {
            const response = await fetch(api + "/auth/login", {
                method: "POST",
                headers: this.fillRequestHeaders(),
                body: JSON.stringify({ email: mail, password: password }),
            });
            const statusCode = response.status;
            const data = await response.json();
            if (statusCode === 200) {
                // console.log("Is goodlogin");
                this.isLoggedIn = true;
                this.#accesToken = data.access_token;
                await this.fetchPersonalData();
                return 200;
            } else if (statusCode === 400) {
                // console.log("Is badlogin");
                return 400;
            }
        } catch (error) {
            console.error('Erreur de connexion :', error);
            return 500;
        }
    }

    async checkMail(mail) {
        try {
            const response = await fetch(api + "/auth/check_mail", {
                method: "POST",
                headers: this.fillRequestHeaders(),
                body: JSON.stringify({ email: mail }),
            });
            const statusCode = response.status;
            const data = await response.json();
            // console.log(statusCode);
            if (statusCode === 200) {
                // console.log("mail already exist");
                return 200;
            } else if (statusCode === 201) {
                // console.log("you have to register");
                return 201;
            }
        } catch (error) {
            console.error('Erreur de connexion ghjj:', error);
            return 500;
        }
    }
}

const User = new Client();
export default User;
