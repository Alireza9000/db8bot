function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

exports.run = function (client, message, MessageEmbed) {
    const Discord = require('discord.js');
    // const {MessageEmbed } = require('discord.js');
    const config = client.config;
    var guild = message.guild;
    var select = getRandomIntInclusive(1, 3);
    if (select === 1) {
        const embed = new Discord.MessageEmbed()
            .setColor('#ccff00')
            .setTitle("DB8Bot Help\n")
            .addField('Prefix', `\`${config.prefix}\``)
            .addField('Example:', `\`${config.prefix}ping\``)
            .addField('Commands:', `Do \`${config.prefix}commands\` to see a full list of commands.`)
            // .addField('Checklist:', `Please run the command \`${config.prefix}checklist\` to check if PowerBot has all the required permissions to run.`)
            .addField('Github', `The repo for this bot can be found [here](https://github.com/AirFusion45/db8bot).`)
            .addField('Support Server:', `Come [here](https://discord.gg/rEQc7C7) to get help or just hang out.`)
            .addField('Bot Invite Link', `Use \`${config.prefix}invite\` for the bot's invite link, or click [here](https://discordapp.com/oauth2/authorize?client_id=689368779305779204&scope=bot&permissions=2146958847)`)
            .setFooter(`Made by ${config.ownerTag}`)
            .setTimestamp()

        message.channel.send({ embed: embed })
    }
    if (select === 2) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0072bb')
            .setTitle("DB8Bot Help\n")
            .addField('Prefix:', `\`${config.prefix}\``)
            .addField('Example:', `\`${config.prefix}ping\``)
            .addField('Commands:', `Do \`${config.prefix}commands\` to see a full list of commands.`)
            // .addField('Checklist:', `Please run the command \`${config.prefix}checklist\` to check if PowerBot has all the required permissions to run.`)
            .addField('Github', `The repo for this bot can be found [here](https://github.com/AirFusion45/db8bot).`)
            .addField('Support Server:', `Come [here](https://discord.gg/rEQc7C7) to get help or just hang out.`)
            .addField('Bot Invite Link', `Use \`${config.prefix}invite\` for the bot's invite link, or click [here](https://discordapp.com/oauth2/authorize?client_id=689368779305779204&scope=bot&permissions=2146958847)`)
            .setFooter(`Made by ${config.ownerTag}`)
            .setTimestamp()

        message.channel.send({ embed: embed })
    }
    if (select === 3) {
        const embed = new Discord.MessageEmbed()
            .setColor('#ff4f00')
            .setTitle("DB8Bot Help\n")
            .addField('Prefix:', `\`${config.prefix}\``)
            .addField('Example:', `\`${config.prefix}ping\``)
            .addField('Commands:', `Do \`${config.prefix}commands\` to see a full list of commands.`)
            // .addField('Checklist:', `Please run the command \`${config.prefix}checklist\` to check if PowerBot has all the required permissions to run. If nothing returns, then the bot have essential permissions missing.`)
            .addField('Github', `The repo for this bot can be found [here](https://github.com/AirFusion45/db8bot).`)
            .addField('Support Server:', `Come [here](https://discord.gg/rEQc7C7) to get help or just hang out.`)
            .addField('Bot Invite Link', `Use \`${config.prefix}invite\` for the bot's invite link, or click [here](https://discordapp.com/oauth2/authorize?client_id=689368779305779204&scope=bot&permissions=2146958847)`)
            .setFooter(`Made by ${config.ownerTag}`)
            .setTimestamp()

        message.channel.send({ embed: embed })
    }
}