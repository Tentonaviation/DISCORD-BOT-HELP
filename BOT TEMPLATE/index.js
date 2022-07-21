const Discord = require('discord.js');
const bot = new Discord.Client({ intents: 32767 });

const PREFIX = '?';

bot.on('ready', () =>{
    console.log('Bot is ready!')
});

client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;
    
    const messageArray = message.content.split(" ");
    const cmd = messageArray[0]
    const args = messageArray.slice(1);


    if (message.content.toLowerCase() === `${prefix}ip`) {
        message.channel.send("the mc server ip is IgloSMP.vsmc.co if that doesn't work try 141.95.190.254:25576")
    }
})

bot.login('replace me with bot token at https://discord.com/developers');