FROM node:fermium-alpine

RUN apk add --no-cache gettext && \
    mkdir -pv /digibot
    
WORKDIR /digibot
COPY / .

RUN npm install && \
    chmod +x /digibot/entrypoint.sh
    
ENTRYPOINT [ "/digibot/entrypoint.sh" ]
