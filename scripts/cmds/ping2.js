module.exports = {
    config: {
        name: "ping2",
        aliases: ["p"],
        version: "2.0",
        author: "Mr perfect",
        role: 0,
        shortDescription: {
            en: "Displays the current ping of the bot's system."
        },
        longDescription: {
            en: "Displays the current ping of the bot's system."
        },
        category: "System",
        guide: {
            en: "Use {p}ping to check the current ping of the bot's system."
        }
    },
    onMessage: async function ({ api, event }) {
        if (event.body.toLowerCase() === "ping") {
            const timeStart = Date.now();
            await api.sendMessage("Checking ping... ⌛️", event.threadID);
            const ping = Date.now() - timeStart;
            api.sendMessage(`Ping: ${ping}ms ⚡️`, event.threadID);
        }
    }
};