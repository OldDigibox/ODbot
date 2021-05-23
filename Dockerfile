FROM node:fermium-alpine

RUN apk add --no-cache gettext && \
    mkdir -pv /digibot
    
WORKDIR /digibot
COPY src/ .

RUN npm install
RUN envsubst < /digibot/Configuration/auth-template.js > /digibot/Configuration/auth.js

ENTRYPOINT [ "npm", "start" ]
