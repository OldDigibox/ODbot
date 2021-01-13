const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config }, msg) => {
	msg.reply(`:game_die: You rolled a **${Math.ceil(Math.random() * 6)}**`);
};

module.exports.info = {
	name: "dice",
	description: "Rolls a dice.",
};
