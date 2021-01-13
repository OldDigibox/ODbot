/* MIT License
 *
 *  Copyright (c) 2021 olddigibox
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

const Discord = require('discord.js');
const fs = require('fs');
const conf = require('./conf.json')
const olddigibot = new Discord.Client();
global.client = olddigibot;

const ownerId = '522534458071449620'

//yes i know json go corupt but its just prefixes
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));


olddigibot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    olddigibot.commands.set(command.name, command);
}



olddigibot.on('ready', () => {
    console.log('bot runing')


    olddigibot.user.setActivity("| ")
})


olddigibot.on('guildCreate', guild => {
    //umm remove this 
})





olddigibot.on('message', message => {

    if (message.channel.type == "dm") return message.channel.send('dms wont work right now');
    //see if we have the server in data.json if not we add it 

    var guild = data[message.guild.id];

    if (!guild) {
        data[message.guild.id] = {
            prefix: '!'
        };

        guild = data[message.guild.id];
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    }



    let args = message.content.toLowerCase().substring(guild.prefix.length).split(" ");

    //at bot commands 
    if (message.content.startsWith("<@!" + conf.botId + ">")) {
        olddigibot.commands.get('atthebot').execute(message, args)
    }

    if (!message.content.toLowerCase().startsWith(guild.prefix)) return;

    //commands \/

    if (args[0] === 'prefix') {
        var hasPerm = message.member.hasPermission('MANAGE_MESSAGES') || message.author.id(ownerId);
        if (!args[1]) {
            message.channel.send('No prefix supplied please add the prefix you would like to set eg' + guild.prefix + 'prefix s? to set the prefix too s?').cache(e => console.log(e));

        }
        if (args[1]) {
            if (hasPerm) {

                if (args[2]) {
                    message.channel.send('there can’t be any spaces in your prefix')
                } else {

                    guild.prefix = args[1];
                    message.channel.send('Set the prefix to `' + guild.prefix + '`.').cache(e => console.log(e));

                    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
                }
            } else {

                message.channel.send('You need the `MANAGE MESSAGES` permission for that.').cache(e => console.log(e))
            }
        }
    }

    if (args[0] == 'ping') {
        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var apiPing = Math.round(olddigibot.ws.ping)
            m.edit("ping: " + `${ping}` + "\napi ping: " + `${apiPing}`).catch(e => console.log(e))
        })
    }
    if (args[0] == 'help') {
        olddigibot.commands.get('help').execute(message, args)
    }

    if (args[0] == 'about') {
        olddigibot.commands.get('about').execute(message, args);
    }

    if (args[0] === 'archive') {
        message.reply("Here is a link to the OldDigibox Archive:\nhttps://chitco.sharepoint.com/:f:/g/EgLrSVVkVZtFifvBcHfsXRkBKFSFO2GCslPWp_zNc10n4A?e=28twKd")
    }
    
    if (args[0] === 'youtube' || args[0] == 'yt')
        message.reply("Here is a link to the OldDigibox YouTube channel:\nhttps://www.youtube.com/channel/UCXFM2yYtQ3NmMcD33OFZQKg")
    }


    //fun commands
    if (args[0] == 'meme' || args[0] == 'memes') {
        olddigibot.commands.get('meme').execute(message, args);
    }


    if (args[0] == '8ball') {
        if (!args[1]) return message.reply('ask a question');
        if (args[1]) {
            olddigibot.commands.get('eightball').execute(message, args);
        }
    }
    if (args[0] == 'coin') {
        olddigibot.commands.get('coin').execute(message, args);
    }

    if (args[0] == 'dice') {
        olddigibot.commands.get('dice').execute(message, args);
    }


})



olddigibot.login(conf.token)
