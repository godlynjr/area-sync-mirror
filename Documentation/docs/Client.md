#

Pour voir la liste des services disponibles au niveau du projet veiller consulter la section Service/Action/Reactions.

## Comment les services sont integres du cote du Frontend

Dans notre app l’intégration des services se faire essentiellement par les méthodes POST et GET . En effet une fois la route vers le service disponible nous communiquons avec l’api en envoyant des requêtes POST pour envoyer des informations(un exemple, les informations de connexion des utilisateurs) et GET pour récupérer des informations ( les actions et réactions relatives à un service par exemple). 
L’exemple ci dessous met en lumière la communication avec l’api à travers la méthode POST. 

    const handleSubmit = async(event) => {
            event.preventDefault(); 
            try {
                const url = "https://inspired-strictly-starling.ngrok-free.app/api/v1/login";
                const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                });
                console.log(formData)
                if    (response.ok) {
                    const data = response.json();
                    window.location.href='/userhome';
                }
                else {
                    const lol = response.json();
                } 
            } catch (error) {
                console.error("Erreur d'envoi des données", error);
            }
    }

Nous récupérons ainsi les informations d’authentification de l’utilisateur ayant un compte existant que nous transmettons à l’api 


## <u> AREA Creation Process </u>

Well before the user can create an AREA, they must authenticate, therefore register on the platform.
Creating an AREA is done by following several steps. We can cite in this case:

- Choose area name
- create action 
- see services that have actions list :

        (GET /api/v1/service/list)

- check if connected to service selected 

        (GET /api/v1/service/status/:name)

- if connected display that user is connected else, ask user to connect
- if user try to connect to service, use : 

        GET /api/v1/service/connect/:name that will
send you a redirection link that user will use to connectto service

- after user end his connection, service send token that are stored on server session
- after connected user can choose action on this service (you can list actions with) 
    
        (/api/v1/service/info/service_name)
    
- after ask information corresponding to informations return the server about actions
- Do same about reactions
- After everithing have chosend send this request:<br>

        POST /api/v1/area/create:

`params`:

- name: area name enter by user
- action: action name, params_name: value
- reactions: reaction name, reaction_name: value