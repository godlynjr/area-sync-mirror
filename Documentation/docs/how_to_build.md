#  Project Construction

The project has a docker-compose.yml file at the root of the repository which will be used to coordinate the deployment of all our services in Docker containers. Docker-compose has 3 services.

* `mongo`:
For deploying the mongo database from the official mongo image.
This service is exposed at por 27017

* `area_server`:
For deploying the backend server of the application. It builds a dockerfile contained in the Server folder, dockerfile which copies our application into the container and installs the dependencies.
It exposes the server on port 8080

* `area_web_client`:
For the deployment of the area web client. It builds a dockerfile contained in the Client/Web folder.
It exposes the web service on port 8081

You cannot launch all the services with the following command:
sudo docker-compose up --build

To launch only a specific service, use the following command:
sudo docker-compose up service-name --build