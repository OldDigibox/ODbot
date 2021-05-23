module.exports = async(client, msg) => {
	msg.channel.send({
		embed: {
			color: 0xFF0000,
			title: "Pinging...",
		},
	}).then(nmsg => {
		nmsg.edit({
			embed: {
				color: 0x00FF00,
				title: "Pong!",
				description: `Took ${nmsg.createdAt - msg.createdAt}ms :ping_pong:`,
			},
		});
	});
};
module.exports.info = {
	name: "Ping",
	description: "Displays the latency to Discord",
	aliases: ["latency"],
};
