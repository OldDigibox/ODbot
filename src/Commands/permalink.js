module.exports = async({ client, config }, msg) => msg.reply(`Here is a permanent invite to the Discord server:\nhttps://discord.gg/6Y6RkAuQ5S`);
module.exports.info = {
        name: "permalink",
        description: "Sends a permanent link to the Discord server",
        aliases: ["invite", "serverlink",],
};
