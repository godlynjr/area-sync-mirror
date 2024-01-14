#

## Les mandatory du Serveur

Le corps du projet se trouve au sein du serveur. En effet le serveur contient des donnees tels que l'implementation des services, la logique metier de l'authentification, la connection a la base de donnees et bien dautres choses.

## Comment on run le Serveur

Pour run le serveur il faut executer une serie de commande dans un ordre precis.
On a :

## Comment l'authenfication a ete mise en place

Il faut dabord creer des identifants du develppeur dans la console google cloud.
Apres avoir recuperaton de l'dentifiant on creer un client google qui sabonne a l'API de google. On lance une requete de connexion a Google en envoyant une URL de redirection au frontend. Apres seste quthentifier l'API de google renvoie toutes les informations conecernant lutilsiateur(comme le username, le mot de passe, son profil, etc).

        export async function connectToGmail(req, res)
        {
        const auth = new google.auth.OAuth2(credential.web.client_id, credential.web.client_secret, credential.web.redirect_uris[1]);
        console.log(req.session);
            const scopes = ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.modify'];
            const authurl = auth.generateAuthUrl({access_type: 'offline', scope: scopes});  
            res.status(200).json({url: authurl});
        }

Comme vous pouvez le voir ci dessous il:


* Récupère le code d'autorisation à partir de la requête req.query, utilise ce code pour obtenir un jeton d'authentification Gmail via auth.getToken(code) et stocke le jeton dans la base de données.

* Renvoie une réponse HTTP avec un statut 200 et un message JSON indiquant que le jeton a été reçu avec succès.

        export async function getTokenToGmail(req, res)
        {
        console.log(req.session);
        const auth = new google.auth.OAuth2(credential.web.client_id, credential.web.client_secret, credential.web.redirect_uris[1]);
        const {code} = req.query;
        const {tokens} = await auth.getToken(code);
        console.log(tokens);
        await putElemInBase(new ObjectId(req.session._id), {gmail: tokens});
        res.status(200).json({message: "token receive"});
        }

## Comment les services sont impletes du cote du Serveur