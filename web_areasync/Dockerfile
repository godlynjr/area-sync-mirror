FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y mongodb-tools

COPY . .

ENV PORT 8081

EXPOSE 8081

CMD ["npm", "start"]
