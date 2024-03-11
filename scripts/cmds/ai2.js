module.exports = {
  config: {
    name: "ai",
    aliases: [],
    version: 1.6,
    author: "modified by (anonymous)",
    role: 0,
    shortDescription: "AI that can speak every language on Earth fluently",
    guide: "{pn} <query>",
    category: "AI"
  },
  onStart: function() {},
  onChat: async function({ message: m, event: e, args: a, usersData: u }) {
    var p = [`${await global.utils.getPrefix(e.threadID)}${this.config.name}`, "ai"]; 

if (p.some(b => a[0].toLowerCase().startsWith(b))) {
     try {
          var __ = [{ id: e.senderID, tag: await u.getName(e.senderID) }];
          const r = await require("axios").post(`https://test-ai-ihc6.onrender.com/api`, {
      prompt: a.slice(1).join(" "),
    apikey: "GayKey-YMBsPUY0xUSNjHvycOx9",
       name: __[0]['tag'],
       id: __[0]['id'],
          });
          var _ = r.data.result.replace(/{name}/g, __[0]['tag']).replace(/{pn}/g, p[0]);
          if (r.data.av) {
            if (Array.isArray(r.data.av)) {
              const avs = r.data.av.map(url => global.utils.getStreamFromURL(url));
              const avss = await Promise.all(avs);
  m.reply({
  body: _,
 mentions: __,
 attachment: avss
  });
   } else {
   m.reply({
     body: _,
     mentions: __,
                attachment: await global.utils.getStreamFromURL(r.data.av)
             });
      }
          } else {
          m.reply({
     body: _,
      mentions: __
     });
        }
        } catch (error) {
          console.error(error);
          m.reply("Error " + error);
        }
      }

  }
};