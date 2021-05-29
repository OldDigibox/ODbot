const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config, commands }, msg) => {
	const prefix = config.defaultPrefix;

	const embed = {
		author: {
			name: client.user.username,
			url: config.websiteURL,
			icon_url: client.user.avatarURL(),
		},
		color: config.colors.default,
		description: "Here are the available commands:",
		fields: [],
	};

	for (let i of commands) {
		// Do not change as all falsy values will not work in this case.
		if (!i || i.display === false) continue;

		embed.fields.push({
			name: `${prefix}${i.name.toLowerCase()}`, value: i.description,
		});
	}

	return msg.channel.send({ embed: embed });
};

module.exports.info = {
	name: "help",
	description: "Views a list of all commands.",
	aliases: ["commands", "bot-cmds"],
};
