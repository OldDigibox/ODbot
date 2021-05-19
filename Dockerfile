FROM node:fermium-alpine

RUN apk add --no-cache gettext curl

RUN mkdir -pv /digibot
WORKDIR /digibot

COPY / .
RUN npm install

RUN chmod +x /digibot/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]
