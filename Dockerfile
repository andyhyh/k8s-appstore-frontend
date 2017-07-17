FROM node:6.11.1-alpine

RUN apk add --update --no-cache curl
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

COPY package.json /usr/src/frontend/
RUN npm install

COPY . /usr/src/frontend
RUN ./install-fonts.sh

EXPOSE 8080
CMD ["npm", "start"]
