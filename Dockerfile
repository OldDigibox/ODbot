FROM node:fermium-alpine

RUN apk add --no-cache gettext && \
    mkdir -pv /digibot
    
WORKDIR /digibot
COPY src/ .

RUN npm install

ENTRYPOINT [ "node", "/digibot/bot.js" ]
