const { MessageEmbed } = require("discord.js");

module.exports = async({ client, config }, msg) => msg.reply(`Here is a link to the OldDigibox Archive:\nhttps://chitco.sharepoint.com/:f:/g/EgLrSVVkVZtFifvBcHfsXRkBKFSFO2GCslPWp_zNc10n4A?e=28twK`);
module.exports.info = {
	name: "Archive",
	description: "Link to the archive",
};
