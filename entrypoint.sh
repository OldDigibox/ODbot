#!/bin/sh

cd /opt/digibot
envsubst < /digibot/Configuration/auth-template.js > /digibot/Configuration/auth.js
/usr/local/bin/node /digibot/bot.js