const { Client, MessageActionRow } = require("discord.js-selfbot-v13");
const client = new Client({ checkUpdate: false }); // All partials are loaded automatically
var author_ids = []
client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});

client.on("messageCreate", async (message) => {
  if (message.channel.type == "DM") {
    if (message.author.id != "your bot id") {
      if (!(author_ids.includes(message.author.id))) {
        const ezid = message.author.id;
        author_ids.push(ezid)
        setTimeout(() => {
          client.users.send(ezid, "your discord server link");
        }, 3000);
        setTimeout(() => {
          client.users.send(ezid, "Dn");
        }, 10000);
      }
    }
  }
});
client.on("ready", async () => {
  setInterval(() => {
    const guild = client.guilds.cache.get("j4j server id");
    const channel = guild.channels.cache.get("j4j server channel id");
    channel.send("J4J NO BOT!");
  }, 40000);
});
client.login(
  "token"
);
