FROM node:15.12.0-alpine3.10

WORKDIR /usr/src/app/

COPY package*.json ./
COPY ./index.js ./

RUN npm install

EXPOSE 4000

CMD ["npm","start"]