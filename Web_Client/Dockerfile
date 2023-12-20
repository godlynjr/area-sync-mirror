FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force

COPY . .

ENV PORT 8081

EXPOSE 8081

CMD ["npm", "start"]