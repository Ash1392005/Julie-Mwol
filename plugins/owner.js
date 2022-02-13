const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919711054140@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*JulieMwol by 𝔉𝔞𝔩𝔩𝔦𝔫𝔤*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '9711054140@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*JulieMwol by 𝔉𝔞𝔩𝔩𝔦𝔫𝔤*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n--------------------', MessageType.text);
        }
    }));
}
