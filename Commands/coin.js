const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config }, msg) => msg.reply(`:coin: You landed **${["heads", "tails"][Math.round(Math.random())]}**`);
module.exports.info = {
	name: "coin",
	description: "Flip a coin",
};
