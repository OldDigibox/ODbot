/* MIT License
 *
 *  Copyright (c) 2020 404invalid-user
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
    name: 'meme',
    description: " olddigibotbot meme command ",
    execute(message, args) {

        const https = require('https');
        const Discord = require('discord.js');
        const { prefix, colour, website, ImgUrl } = require('../conf.json');

        const url = 'https://www.reddit.com/r/memes/.json?limit=200'

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {
                    message.channel.send('there has been a olddigibotup retrying...')
                }

                if (!index.preview) return message.channel.send('a big oof has hapened do that command agian');

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    console.log('meme.js line 38 |')
                }

                console.log(image);

                const imageembed = new Discord.MessageEmbed()
                    .setTitle('a meme from reddit')
                    .setImage(image)
                    .setColor(`${colour}`)
                    .setDescription(`[${title}](${link})`)
                    //.setURL(`https://reddit.com/${subRedditName}`)
                    .setFooter('powered by ' + `${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function(e) {
                console.log('Got an error: ', e).catch(e => console.log(e))
            })
        })

    }
}