const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log('I am ready!');
});
client.on('message', message => {
if (message.content === 'ping') {
message.reply('pong');
}
console.log(message);
});
client.on('presenceUpdate', function(oldMember, newMember) {

if((oldMember.presence.status=="offline") &&((newMember.presence.status=="online")||(newMember.presence.status=="idle") )&& newMember.user.username=="wali")
   newMember.user.sendMessage("Bonjour maitre, je suis le bot de YAHIA, que puis-je faire pour vous aujourdhui ?");

console.log(oldMember.presence, '=>', newMember.presence);
});


client.login(process.env.DISCORD_TOKEN);



var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000);
