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

module.exports = {
    name: 'about',
    description: "about command http://olddigibotbot.tk/github",
    execute(message, args) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const { version } = require('../package.json')
        const { colour, website, imgUrl } = require('../conf.json')
        const conf = require('../conf.json')


        message.channel.send("about").then(m => {

            //bots uptime
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let uptime = `${days} d, ${hours} h, ${minutes} m, ${seconds} s`;

            //bots ping 
            var ping = m.createdTimestamp - message.createdTimestamp;
            var apiPing = Math.round(client.ws.ping)
            var thePing = "ping: " + `${ping}` + " api ping: " + `${apiPing}`


            let aboutEmbed = new Discord.MessageEmbed()
                .setAuthor('olddigibot', `${imgUrl}`, `${website}`)
                .setColor(`${colour}`)
                .setTitle('about')
                .setThumbnail(`${imgUrl}`)
                .setURL(`${website}`)
                .addField('version:', `${version}`)
                .addField('Up Time', uptime)
                .addField('Ping', thePing)
                .addField('Website:', `${website}`)
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`)


            m.edit(aboutEmbed).catch(e => console.log(e))

        });

    }
}