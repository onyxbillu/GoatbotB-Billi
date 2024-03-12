module.exports = {
 config: {
   name: "prefix",
   aliases: ["suzumi"],
   aliases: ["bot"],
   version: "1.0",
   author: "Tokodori_Frtiz",//remodified by cliff
   countDown: 0,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Hey Little Brat 
               Well do you know my prefix?
          let me say it 😉😤 [+]
While let me help you 👇
      **✨➥ Help [𝓷𝓾𝓶𝓫𝓮𝓻 𝓸𝓯 𝓹𝓪𝓰𝓮] - Hey Stupid guy Dont forget to use (+) before sending He**
      **✨➥ 𝓼𝓲𝓶 [𝓶𝓮𝓼𝓼𝓪𝓰𝓮] - 𝓽𝓪𝓵𝓴 𝓽𝓸 𝓽𝓱𝓮 𝓫𝓸𝓽**
      **✨➥ 𝓬𝓪𝓵𝓵𝓪𝓭 [𝓶𝓮𝓼𝓼𝓪𝓰𝓮] - 𝓻𝓮𝓹𝓸𝓻𝓽 𝓪𝓷𝔂 𝓹𝓻𝓸𝓫𝓵𝓮𝓶 𝓮𝓷𝓬𝓸𝓾𝓷𝓽𝓮𝓻𝓮𝓭**
      **✨➥ 𝓱𝓮𝓵𝓹 [𝓬𝓸𝓶𝓶𝓪𝓷𝓭] - 𝓰𝓮𝓽 𝓲𝓷𝓯𝓸𝓻𝓶𝓪𝓽𝓲𝓸𝓷 𝓪𝓷𝓭 𝓾𝓼𝓪𝓰𝓮 𝓸𝓯 𝓬𝓸𝓶𝓶𝓪𝓷𝓭𝓼**

      **✨𝓗𝓪𝓿𝓮 𝓪 𝓯𝓾𝓷-𝓽𝓪𝓼𝓽𝓲𝓬 𝓪𝓷𝓭 𝓼𝓽𝔂𝓵𝓲𝓼𝓱 𝓮𝓷𝓬𝓸𝓾𝓷𝓽𝓮𝓻! 𝓔𝓷𝓳𝓸𝔂! ❤️**
       **✨𝓑𝓸𝓽 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻: [𝓛𝓲𝓷𝓴 𝓽𝓸 𝓽𝓱𝓮 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻'𝓼 𝓕𝓪𝓬𝓮𝓫𝓸𝓸𝓴 𝓹𝓻𝓸𝓯𝓲𝓵𝓮]👉👇(https://www.facebook.com/m.zenesha)🤙

      I hope this helps! Enjoy `,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/KIKVJO9.jpeg")
 });
 }
 }
}