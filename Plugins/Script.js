const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Bot link ලබා දෙයි.'
else tmsg = "It gives bot link."


cmd({
    pattern: "script",
    alias: ["sc","git"],
    react: '📚',
    desc: tmsg,
    category: "main",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const result = '*🍭 ZeroTwo MD 🍭*\n\n*Github:*https://github.com/CHALAH73/CHALAH-MD..git \n\n*Channel:*https://whatsapp.com/channel/0029Vb3v0Fe1dAvw1XUIV61t*\n\n*group: https://chat.whatsapp.com/LAj0BMDUnfl1bQZRdKuvuu'
reply(result)
} catch (e) {
l(e)
}
})
