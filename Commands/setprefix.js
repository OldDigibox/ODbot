module.exports = async(client, msg) => {
	msg.channel.send({
		embed: {
			color: 0xFF0000,
			title: "Pinging...",
		},
	})
};
module.exports.info = {
	name: "setprefix",
	description: "edits the default prefix of the bot",
};
