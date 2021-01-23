const moment = require("moment");
const { version } = require("../package.json");
const { MessageEmbed } = require("discord.js");
require

module.exports = async({ client, config }, msg) => {
	//const uptime = moment(config.startupTime).fromNow(true);
	  const uptime =  moment.duration(client.uptime).format("D [days], H [hours], m [minutes], s [seconds]")
	  
	let aboutEmbed = new MessageEmbed()
		// .setAuthor(client.user.username, client.user.avatarURL(), config.websiteURL)
		.setColor(config.colors.default)
		.setTitle(`About ${client.user.username}`)
		.setDescription(`Version: ${version}`)
		.setURL(config.websiteURL)
		.addField("Uptime", uptime, true)
		.addField("Ping", `${client.ws.ping}ms`, true)
		.setDescription(`[Visit the website](${config.websiteURL})`);


	msg.channel.send(aboutEmbed);
};
module.exports.info = {
	name: "about",
	description: "About the bot",
};
