require('dotenv').config()

const { Client, MessageEmbed } = require('discord.js')

const client = new Client()

client.once('ready', () => console.log(`Logged in as ${client.user.username}`))

client.on('message', messageHandler)

client.on('guildMemberAdd', member => {
    const welcomeChannels = [ 'welcome-messages', 'join-messages' ]
    const { user, guild } = member
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && welcomeChannels.includes(channel.name))

    const embed = new MessageEmbed()
    embed.setColor('#ff0099')
    embed.setDescription(`Hey <@${user.id}>, has joined \n\n **WELCOME**`)
    embed.setThumbnail(user.avatarURL({ dynamic: true }))
    embed.setFooter('MrPolarBear#0669 is best coder（＾ｖ＾）')

    channel.send(embed)
})

client.on('guildMemberRemove', member => {
    const welcomeChannels = [ 'welcome-messages', 'join-messages' ]
    const { user, guild } = member
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && welcomeChannels.includes(channel.name))

    const embed = new MessageEmbed()
    embed.setColor('#404242')
    embed.setDescription(`Sad to see you go ${user.username}`)

    channel.send(embed)
})

client.login(process.env.TOKEN)

function messageHandler(message) {
    return null
}
