const { Client } = require("discord.js");
const { token } = require("./Configuration/auth.js");
const config = require("./Configuration/config.js");
const { readdir } = require("fs/promises");

const client = new Client({ disableEveryone: "all" });

(async() => {
	const constants = {
		config,
		client,
		startupTime: new Date(),
		commands: [],
	};

	let commands = await readdir("./Commands");
	for (let i of commands) {
		if (!i.endsWith(".js")) continue;
		const info = require(`./Commands/${i}`).info;
		if (!info.aliases) info.aliases = [];
		info.aliases.push(i.replace(".js", ""));
		info.filename = i;

		constants.commands.push(info);
	}

	let events = await readdir("./Events");
	for (let i of events) {
		if (!i.endsWith(".js")) continue;
		let eventName = i.replace(".js", "");
		client.on(eventName, async(...args) => require(`./Events/${i}`)(constants, ...args));
	}
})();

client.login(token);
