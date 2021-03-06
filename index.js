require('dotenv').config()

const { Client, MessageEmbed } = require('discord.js')
const ReactionRole = require("reaction-role");
const system = new ReactionRole(process.env.TOKEN);

const { randomItems } = require('./util')

const prefix = ">>";

const client = new Client()

client.once('ready', () => console.log(`Logged in as ${client.user.username}`))

let elektrotehnik = system.createOption("elektrotehnika:761546567660208148", "761359929948504102");
let racunalnicar = system.createOption("racunalnistvo:761546557014540308", "761359808137003049");
let gimnazijec = system.createOption("gimnazija:761546544428089355", "761360052250476574");

system.createMessage("761552751343566909", "761298424338317342", 1, null, elektrotehnik, racunalnicar, gimnazijec);

system.init();

client.on('message', messageHandler)

client.on('guildMemberAdd', member => {
    const welcomeChannels = ['welcome-messages', 'join-messages']
    const { user, guild } = member
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && welcomeChannels.includes(channel.name))

    const embed = new MessageEmbed()
        .setColor('#ff0099')
        .setDescription(`Hey <@${user.id}>, has joined \n\n **Welcome to the Vegova Discord server**`)
        .setThumbnail(user.avatarURL({ dynamic: true }) || user.defaultAvatarURL)
        .setFooter(...randomItems(['（＾ｖ＾)', '( ͡° ͜ʖ ͡°)']))

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
