require('dotenv').config()

const { Client, MessageEmbed } = require('discord.js')
const ReactionRole = require("reaction-role");
const system = new ReactionRole(process.env.TOKEN);

const prefix = ">>";

const client = new Client()

client.once('ready', () => console.log(`Logged in as ${client.user.username}`))

let elektrotenik = system.createOption("elektrotehnika:761546567660208148", "761359929948504102");
let racunalnicar = system.createOption("racunalnistvo:761546557014540308", "761359808137003049");
let gimnazijec = system.createOption("gimnazija:761546544428089355", "761360052250476574");

system.createMessage("761552751343566909", "761298424338317342", 1, null, elektrotenik, racunalnicar, gimnazijec);

system.init();

client.on('message', messageHandler)

client.on('guildMemberAdd', member => {
    const welcomeChannels = [ 'join-messages', 'welcome-messages' ]
    const { user, guild } = member
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && welcomeChannels.includes(channel.name))

    const embed = new MessageEmbed()
    embed.setColor('#ff0099')
    embed.setDescription(`Hey <@${user.id}>, has joined \n\n **Welcome** to the Vegova Discord server`)
    embed.setThumbnail(user.avatarURL({ dynamic: true }))
    embed.setFooter('（＾ｖ＾）')

    channel.send(embed)
})

client.on('guildMemberRemove', member => {
    const welcomeChannels = [ 'join-messages', 'welcome-messages' ]
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
