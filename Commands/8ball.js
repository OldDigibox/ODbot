const positiveAnswers = ["It is certain", "As I see it, yes", "It is decidedly so", "Most likely", "Without a doubt", "Outlook good", "Yes, definitely", "Yes", "You may rely on it", "Signs point to yes"];
const unknownAnswers = ["Reply hazy, please try again", "Try again later", "Better not tell you now.", "ERR 15: Cannot connect to 8-Ball service", "Concentrate, and then try again"];
const negativeAnswer = ["Don't count on it", "My reply is no", "My sources say no", "Outlook, not so good", "Very doubtful"];

const { MessageEmbed } = require("discord.js");

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	// eslint-disable-next-line no-inline-comments
	return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

module.exports = (_, msg, suffix) => {
	if (!suffix) {
		return msg.reply(":8ball: You need to actually ask something!");
	}
	let random = getRandomInt(1, 4);
	if (random == 1) {
		return msg.reply({ embed: new MessageEmbed()
			.setTitle("The Magic 8-Ball")
			.setDescription(`\`\`\`diff\n- ${negativeAnswer[getRandomInt(0, 4)]}\`\`\``)
			.setColor("#ff3860") });
	} else if (random == 2) {
		return msg.reply({ embed: new MessageEmbed()
			.setTitle("The Magic 8-Ball")
			.setDescription(`\`\`\`diff\n+ ${unknownAnswers[getRandomInt(0, 4)]}\`\`\``)
			.setColor("#ffdd57") });
	} else {
		return msg.reply(new MessageEmbed()
			.setTitle("The Magic 8-Ball")
			.setDescription(`\`\`\`md\n# ${positiveAnswers[getRandomInt(0, 9)]}\`\`\``)
			.setColor("#23d160"));
	}
};

module.exports.info = {
	name: "8ball",
	description: "Functions similarly to a Magic 8-Ball, will predict and answer questions at random",
};
