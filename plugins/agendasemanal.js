import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
let url = agenda[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `*🔥 AGENDA SEMANAL 🔥*`, m)
//conn.sendButton(m.chat, `🔥 AGENDA SEMANAL 🔥`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['agenda']
handler.tags = ['internet']
handler.command = /^(agendasemanal)$/
handler.exp = 50
handler.level = 0
export default handler


global.agenda = [
"https://cdn.discordapp.com/attachments/1234592983794454530/1243658949845061773/FB_IMG_1716581761671.jpg?ex=66524727&is=6650f5a7&hm=e5c4849fbc960bb0985a0de136a4e449e1aa36d00c30e897d27c9e38546ec39b&",
]