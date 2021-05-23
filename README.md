
# ![](https://media.discordapp.net/attachments/709165954931621929/802657285339086858/OldDigibot_Logo.png)

### An open source bot for the Old Digibox community server
  

### AVAILABLE COMMANDS:
```
;8ball
Functions as a Magic 8-Ball, will predict and answer questions at random

;about
About the bot

;archive
Link to the archive

;coin
Flip a coin

;dice
Rolls a dice.

;github
Link to the Old Digibox GitHub organisation,
where you can check out some of our open source projects.

;help
Views a list of all commands.

;permalink
Sends a permanent link to the Discord server

;ping
Displays the latency to Discord

;repo
Link to the GitHub repository of the bot

;youtube
Link to the YouTube channel
```

# RUNNING IN DOCKER

```bash
docker run -d -e TOKEN="<your-bot-token-here>" --restart=unless-stopped cobaltdocker/digibot
```
or for compose:
```yml
version: "3"
services:
  digibot:
    image: cobaltdocker/digibot
    environment:
      TOKEN: "<your-bot-token-here>"
    container-name: digibot
    restart: unless-stopped
```
