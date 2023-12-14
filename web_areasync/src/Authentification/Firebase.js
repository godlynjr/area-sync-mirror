
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjiGLyOypsxAZ8clwPEUTjTe56ewA2xag",
  authDomain: "areasync.firebaseapp.com",
  projectId: "areasync",
  storageBucket: "areasync.appspot.com",
  messagingSenderId: "765291059536",
  appId: "1:765291059536:web:1778f14d20bbc3a9ff7455",
  measurementId: "G-8QNCMS653D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(Auth, provider).then((result) => {
        console.log(result);
        fetch('http://localhost:8181/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: result.user.email,
                password: result.user.uid,
            }),
            })
            .then(response => response.json())
            .then(data => {
                // // Stockage du token (à faire en fonction de votre mécanisme choisi)
                // // Par exemple, en utilisant localStorage
                localStorage.setItem('authToken', data.token);

                // // Redirection vers la page d'accueil ou une autre page sécurisée
                // window.location.href = '/accueil';
                console.log(data)
                console.log(data.token)
            })
            .catch(error => {
                console.error('Erreur de connexion :', error);
            });
    }).catch((error) => {
        console.log(error);
    });
}

export const signUpWithGoogle = () => {
    signInWithPopup(Auth, provider).then((result) => {
        console.log(result);
        fetch('http://localhost:8181/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: result.user.email,
                password: result.user.uid,
            }),
            })
            .then(response => response.json())
            .then(data => {
                // // Stockage du token (à faire en fonction de votre mécanisme choisi)
                // // Par exemple, en utilisant localStorage
                localStorage.setItem('authToken', data.token);

                // // Redirection vers la page d'accueil ou une autre page sécurisée
                // window.location.href = '/accueil';
                console.log(data)
                console.log(data.token)
            })
            .catch(error => {
                console.error('Erreur de connexion :', error);
            });
    }).catch((error) => {
        console.log(error);
    });
}