const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config }, msg) => msg.reply(`Here is a link to the OldDigibox GitHub organisation. Feel free to check out some of our open source projects!\nhttps://github.com/OldDigibox`);
module.exports.info = {
	name: "github",
	description: "Link to the Old Digibox GitHub organisation,\nwhere you can check out some of our open source projects.",
	aliases: ["gh"],
};
