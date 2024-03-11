module.exports = {
  config: {
      name: "hi",
     aliases: [],
      version: "1.0",
      author: "yukinori",
      countDown: 5,
      role: 0,
      shortDescription: "sarcasm",
      longDescription: "sarcasm",
      category: "reply",
  },
onStart: async function(){}, 
onChat: async function({
  event,
  message,
  getLang
}) {
  if (event.body && event.body.toLowerCase() == "hi") return message.reply("Hey! How was your day? Anything interesting happen?");
}
};