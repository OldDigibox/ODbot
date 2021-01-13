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
    name: 'help',
    description: "help command http://olddigibotbot.tk/github",
    execute(message, args) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const { colour, website, imgUrl } = require('../conf.json')


        var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        var guild = data[message.guild.id];
        var prefix = guild.prefix

        let helpEmbed = new Discord.MessageEmbed()
            .setAuthor('olddigibot', `${ImgUrl}`, `${website}`)
            .setColor(`${colour}`)
            .setTitle('help with OldDigibot')
            .setURL(`${website}`)
            .setDescription(`commands:\n${prefix}ping - shows olddigibots ping\n${prefix}help - shows this\n${prefix}about - gives information about this bot\n${prefix}prefix {new prefix} - sets new prefix for the bot\n${prefix}archive - gives you a link to the olddigibox archive\n${prefix}meme - Sends a random meme from r/memes\n${prefix}coin - olddigibot flips a coin for you\n${prefix}8ball - olddigibots 8ball will answer all your questions\n${prefix}dice - rolls a dice for you`)


        message.channel.send(helpEmbed).catch(e => console.log(e))



    }
}