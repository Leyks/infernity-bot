const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	bot.user.setGame('Discord').catch(console.error)
}

	)

bot.on('guildMemberAdd', async member => {
const channel = member.guild.channels.find('name', '#général')
if (!channel) return
channel.send(`Bienvenue à ${member} qui nous a rejoint !
N'ésite pas à aller voir les #infos_du_clan.`)
}
)



bot.on('guildMemberAdd', function (member) {
	member.createDM().then(function(channel) {
		return channel.send('Bienvenue sur le serveur ' + member.displayName)
	}).catch(console.error)
	
	}


	)

bot.login('NTYwNTMzMzQ0NDk3MTcyNDgw.D31Y9A.WFjKSeZLxqi2odqjTK3Urn2AoFA')
