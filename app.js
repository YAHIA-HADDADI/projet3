const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https');
const axios = require('axios');




client.on('ready', () => {
console.log('I am ready!');
});
client.on('message', message => {
if(message.mentions.users.has(client.user.id))
{
	message.reply("salut, que puis je faire pour vous!!");
}
	if (message.channel.type=="dm" && message.author.bot==false )
	{
	if (message.content === 'ping') {
	message.reply('pong');
	}
   else if (message.content === '!blague') {
			
			axios.get('http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb=1').then(function(response){
				message.reply(response.data[0].fact);
				console.log(response.data[0].fact);
			}).catch(console.log); 
		}
		
		else if(message.content.search("!météo")!=-1)
{
	var position_deb=message.content.search("!météo");
	var taille="!meteo".length;

	var mot_cle=message.content.substring(position_deb+taille,message.content.length)
	
	axios.get('http://api.openweathermap.org/data/2.5/weather?q='+mot_cle+' &appid=39fe3cf4cf00a66d11c4b5423669b0cc').then(function(response){
				
			message.reply("weather of  "+mot_cle+"\n"+
					      "longitude: "+response.data.coord.lon+"\n"+
					      "Latitude: "+response.data.coord.lat+"\n"+
					      
					    "Description :"  +response.data.weather[0].description);
			}).catch(console.log); 
}else
{
	message.reply("Je n'ai pas compris votre message!!")
}
   
}

console.log(message);
});

	

client.on('presenceUpdate', function(oldMember, newMember) {

if((newMember.presence.status=="online" || newMember.presence.status=="idle") && newMember.user.username=="bramas")
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

