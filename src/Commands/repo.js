const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config }, msg) => msg.reply(`Here is the OldDigibot GitHub repository:\nhttps://github.com/OldDigibox/ODbot`);
module.exports.info = {
	name: "repo",
	description: "Link to the GitHub repository of the bot",
	aliases: ["sourcecode", "code"],
};
