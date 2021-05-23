const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config }, msg) => msg.reply(`Here is a link to the OldDigibox YouTube channel:\nhttps://www.youtube.com/channel/UCXFM2yYtQ3NmMcD33OFZQKg`);
module.exports.info = {
	name: "YouTube",
	description: "Link to the YouTube channel",
	aliases: ["yt"],
};
