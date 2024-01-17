# <u> AREA </u> 🌎

Welcome to the documentation of Area 🎉
Here you'll find everything you need to know about the project, its features and how to use it!

AREA is an academic project of the third year of EPITECH. It is a project which requires the establishment of a website and a mobile platform both interacting with a server.

That said,students carrying out this project will have to choose a stack (a set of tools) in accordance with the functionalities of the project.

## <u> Goal of the project </u> 🎯

The goal of the project is therefore to have a platform that works a bit like IFFT/Zapier.
IFTTT works on the principle “If this, then that”. It allows you to create applets, which are simple rules specifying a condition (the "if") in one application or service, and an action to be performed (the "then") in another application or service.

For example, you can set up an applet that says: "If I post a photo to Instagram (condition), then automatically save this photo to my Google Drive folder (action)." IFTTT will take care of monitoring your Instagram account and as soon as it detects a new published photo, it will perform the action of saving this photo to your Google Drive folder. The operating principle of our platform will be the same.
On the platform we must be able to connect to services, link actions from one service to that of another and create an Area.

The project being substantial, it is divided into three parts:

`A Server`: which implements all the functionalities of the project.

`A Web Client`: which runs in the browser and which queries the server.

`A Mobile Client`: which works on the phone and which also queries the server.

## <u> Project Organisation </u> 📊

* The first defense (2nd week after the start of the Project) - Schedule:

The goal here is to have experienced different tech stacks and languages and choose the best one to get the job done.
In addition, for the first defense, the organization of the group must already be defined. Likewise a Poc of the different technologies used is evaluated.


* The second defense (4th week) - Minimum Viable Product:

The goal here is to demonstrate the architecture put in place for the realization of the project and
implemented the basic concepts (making different APIs interact with each other).
In addition, planning must be adjusted to the reality of the work carried out on the project. Analyzes and changes will be requested and evaluated.

* Final defense (after 7 weeks of work) - Final Product:

The goal here is to have finished the project with as many features as possible (different types of services, interesting interactions, good user interface, deployment via docker, . . .).
The project presentation will also be evaluated as well as an analysis of what went right and wrong during the development of the project and what was learned along the way.
​
## <u> Requirement </u> 📌

For the project it is necessary to implement a certain number of services. But the number of services to integrate is equal to the number of people present in the group plus one. So we have 7 services to implement and 18 actions/reactions.

## <u> Technologie Used  </u> 🔩

For the realization of this project we opted for the choice of the MERN stack which consists of MongoDB, Express JS, React and finally Node Js.

* `MongoDB`: The MongoDB database is a NoSQL database and at first glance its format is easier to use than a relational database. With MongoDB data is stored in a type of JSON format called BSON.

* `Express Js`: Express Js is a Node Js framework designed to create cross-platform APIs, web applications and mobile applications. In the case of our project the server is designed using this framework.

* `React`: React is a JavaScript framework used to create user interfaces for web and mobile applications. We implement the front end with this framework.

* `NodeJs`:

We chose this stack because some of us had already used certain technologies from this stack.

## <u> About distribution of tasks  </u> ❓

To carry out the project we divided the team into three:

* those responsible for the backend and the server.
* those responsible for the front end (web and mobile).
* those responsible for compilation via Docker and deployment.

That said, at the front end Web we have Ange HOUNNOUVI who worked so that the user interface is the most beautiful and the user experience is the best possible. In addition he took care of the documentation.

On the Frontend Mobile, Rawdath DEMBA-DIALLO is in charge. She also ensures that the visual rendering is attractive and that the user experience is as fluid as possible.

At the Backend level we have Bridge ATINDOKPO and Yannick KEKE.

* Yannick KEKE took care of database administration, oAuth authentication and certain Google services (Gmail, Google Calendar).

* Godlyn KIKISSAGBE as project manager took care of the good progress and administration of the tasks.  the implementation of the swagger and the implementation of certain services including Gitlab and Spotify.
In addition to the services he took care of the compilation of the project via Docker. He also participated in linking the work of the different members. Basically it emerged the work of the different members of the group.

For more information about the members of the Group, please go to the Contributor 🤝 section on the repository.

## <u> Keywords:</u> 🔑 

* Action: An event that starts your workflow, made available by an integration
* AREA: The name of the project, which stands for Action REAction
* Reaction: An event a workflow performs after it starts.
* Workflow: A combination of an Action and one or several Reactions that can be created in the web or mobile interface. Workflows allow you to use the plethora of integrations available in Area to create the perfect automation for you use-cases.