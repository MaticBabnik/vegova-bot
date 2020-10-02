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

client.on('message', message => {
    console.log("I'm in");
    if(message.content.startsWith(`${prefix}initialMessage`)){
        console.log("Sending inital message");
        message.channel.send("Pozdravljeni v Vegova Discord Strežniku!\nCilj strežnika je, da se zbere tu čimveč dijakov iz naše šole, v prijazno skupnost, ki si bo med seboj pomagala.\n\nPridobi si vlogo svoje smeri izobrazbe tako, ta reactaš na sporočilo z spodnjimi reakcijami:\n\n <:elektrotehnika:761546567660208148>   Za elektrotehnike\n\n <:racunalnistvo:761546557014540308>   Za računalničarje\n\n <:gimnazija:761546544428089355>   Za gimnazijce\n\nIzberi le eno vlogo, ker ti bo bot dovolil samo ta prvo\nPreden nadaljujete, si še preberite pravila v kanalu <#761298400200359977>\n\n LP Aiken Tine Ahac, Martin Hanzlowksky");
    }
})
    

client.on('guildMemberAdd', member => {
    const welcomeChannels = [ 'welcome-messages', 'join-messages' ]
    const { user, guild } = member
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && welcomeChannels.includes(channel.name))
    member.roles.set(['761506206610882560']);

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
