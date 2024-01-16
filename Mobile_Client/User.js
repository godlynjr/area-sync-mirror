const api = 'https://area-sync-stagging.onrender.com';

class Client {
    #accesToken = undefined;
    #personal = null;
    constructor() {
        this.isLoggedIn = false;
    }
    fillRequestHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.#accesToken,
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

    async discord_calendar() {
        try {
            const response = await fetch(api + "/users/discord/calendar/connect", {
                method: "POST",
                headers: this.fillRequestHeaders(),
                // body: JSON.stringify({ email: mail, password: password }),
            });
            const statusCode = response.status;
            const data = await response.json();
            // if (statusCode === 200) {
            //     // console.log("Is goodlogin");
            //     this.isLoggedIn = true;
            //     this.#accesToken = data.access_token;
            //     await this.fetchPersonalData();
            //     return 200;
            // } else if (statusCode === 400) {
            //     // console.log("Is badlogin");
            //     return 400;
            // }
        } catch (error) {
            console.error('Erreur de connexion :', error);
            return 500;
        }
    }


    async loginGithub() {
        try {
            const response = await fetch(api + "/users/github/login", {
                method: "GET",
                headers: this.fillRequestHeaders(),
                // body: JSON.stringify({ email: mail, password: password }),
            });
            console.log("Reponse: " + response);
            return response;
        } catch (error) {
            console.error('Erreur de connexion github:', error);
            return 500;
        }
    }

    async loginNotion() {
        try {
            const response = await fetch(api + "/users/notion/login", {
                method: "GET",
                headers: this.fillRequestHeaders(),
                // body: JSON.stringify({ email: mail, password: password }),
            });
        } catch (error) {
            console.error('Erreur de connexion github:', error);
            return 500;
        }
    }

    async loginCalendar() {
        try {
            const response = await fetch(api + "/users/calendar/login", {
                method: "GET",
                headers: this.fillRequestHeaders(),
                // body: JSON.stringify({ email: mail, password: password }),
            });
        } catch (error) {
            console.error('Erreur de connexion github:', error);
            return 500;
        }
    }

    async loginDiscords() {
        console.log('logindiscord');
        try {
            const response = await fetch(api + "/users/discord/login", {
                method: "GET",
                headers: this.fillRequestHeaders(),
                // body: JSON.stringify({ email: mail, password: password }),
            })
                .then(response => {
                    console.log('ange ' + response);
                    const data = response.text();
                    console.log(data);
                    return data
                })
            // .catch(error => {
            //     console.error(error);
            // });
        } catch (error) {
            console.error('Erreur de connexion discord:', error);
            return 500;
        }
    }

    async loginDiscord() {
        console.log('Try to connect to Discord');
        return new Promise((resolve, reject) => {
            fetch(api + '/users/discord/login', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.#accesToken,
                },
                credentials: 'include',
            })
                .then(response => {
                    if (response.status === 200) {
                        response.text()
                            .then(data => {
                                console.log('Response JSON:', data);
                                resolve(data);
                            })
                            .catch(jsonError => {
                                console.error('Error:', jsonError);
                                reject(jsonError);
                            });
                    } else {
                        response.json()
                            .then(data => {
                                console.log('Response JSON:', data);
                                console.log(data.err);
                                alert(data.err);
                                reject(data.err);
                            })
                            .catch(error => {
                                console.error(error);
                                reject(error);
                            });
                    }
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
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
            console.error('Erreur de connexion check mail:', error);
            return 500;
        }
    }

    async fetchAboutData() {
        try {
            // const token = 'votre_token'; // Remplacez par votre token d'authentification
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.#accesToken,
            };
            const response = await fetch(api + '/about.json', {
                method: 'GET',
                headers: headers,
            });
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                return data;
            } else {
                console.error('Erreur lors de la requête GET :', response.status);
            }
        } catch (error) {
            console.error('Erreur lors de la requête GET :', error);
        }
    }

    async startPrayerService() {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.#accesToken,
            };
            const response = await fetch(api + '/datetime/sendprayertime', {
                method: 'POST',
                headers: headers,
            });
            if (response.ok) {
                console.log('Service de prière démarré avec succès');
            } else {
                throw new Error('La requête a échoué');
            }
        } catch (error) {
            console.error('Erreur lors du démarrage du service de prière', error);
            throw error;
        }
    }
};

// async fetchAboutData() {
//     try {
//         const response = await fetch(api + "/about.json",
//             {
//                 method: "GET",
//                 headers: this.fillRequestHeaders(),
//             });
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             return data;
//         } else {
//             console.error('Erreur lors de la requête GET1111 :', response.status);
//         }
//     } catch (error) {
//         console.error('Erreur lors de la requête GET2222 :', error);
//     }
// }

const User = new Client();
export default User;
