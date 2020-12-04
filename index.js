const discord = require("discord.js");                         
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });  //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
const { readdirSync } = require("fs");                        //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
const { join } = require("path");                            //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
const { TOKEN, PREFIX } = require("./config.json");         //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
                                                           //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
client.login(TOKEN);                                      //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
client.commands = new discord.Collection();              //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
client.prefix = PREFIX;                                 //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
client.queue = new Map();                              //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
                                                      //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
/**                                                  //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
 * Event Kısmı                                      //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
 */                                                //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
client.on("ready", () => {                        //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999    //merlin#9999
	console.log(`${client.user.username} Giriş Yaptı!`);
	client.user.setActivity(client.user.username + ` Müzik | ${PREFIX}`);
});
client.on("warn", info => console.log(info));
client.on("error", console.error);

/**
 * Komut İmport Kısmı
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Komut Yürütülürken Bir Hata Oluştu.").catch(console.error);
    }
  }
});


client.on("ready", () => {
	console.log(`${client.user.username} Hazır!`);
   const link = "https://discordapp.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8";

   console.log(`Davet : [${link}]!!`)
});



/*
BU ALTYAPI MERLİN#9999 KİŞİSİNE AİTTİR İZİNSİZ PAYLAŞIMI TAMAMEN YASAKTIR!
-------------------------------ASGARD CODE--------------------------------
*/