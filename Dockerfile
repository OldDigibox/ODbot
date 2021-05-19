FROM node:fermium-alpine

RUN apk add --no-cache gettext curl

RUN mkdir -pv /digibot
WORKDIR /digibot

COPY / .
RUN npm install

ENTRYPOINT [ "entrypoint.sh" ]