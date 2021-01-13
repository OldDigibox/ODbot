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
    name: 'atthebot',
    description: "when you at the bot",
    execute(message, args) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const conf = require('../conf.json')

        var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        var guild = data[message.guild.id];
        var prefix = guild.prefix

        let atBotEmbed = new Discord.MessageEmbed()
            .setAuthor('OldDigibot', `${conf.ImgUrl}`, `${conf.website}`)
            .setColor(`${conf.colour}`)
            .setDescription(`my prefix for this server is \`${prefix}\`\ndo \`${prefix}help\` for help menu`)
        message.channel.send(atBotEmbed).cache(e => console.log(e))
    }
}