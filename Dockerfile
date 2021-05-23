FROM node:fermium-alpine

RUN apk add --no-cache gettext && \
    mkdir -pv /digibot
    
WORKDIR /digibot
COPY src/ .

RUN npm install && \
    envsubst < ./Configuration/auth-template.js > ./Configuration/auth.js

ENTRYPOINT [ "npm", "start" ]