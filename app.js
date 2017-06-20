const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https');
const axios = require('axios');




client.on('ready', () => {
console.log('I am ready!');
});
client.on('message', message => {
if (message.content === 'ping') {
message.reply('pong');
}
   else if (message.content === '!blague') {
			
			axios.get('http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb=1').then(function(response){
				message.reply(response.data[0].fact);
			}).catch(console.log);
   
 else message.reply("Bonjour , désolé j'ai rien compris");  
console.log(message);
});
	
client.on('presenceUpdate', function(oldMember, newMember) {

if((newMember.presence.status=="online" || newMember.presence.status=="idle") && newMember.user.username=="wali")
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
