import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*[❗] Los comandos +18 están desactivados en este grupo, si es admin y desea activarlos use ${usedPrefix}enable modohorny*`; 
  try {
    const pp = imagen5;
    const vn = './media/La biblia.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━• 🔞 𝗧𝗜𝗭𝗜 - 𝗕𝗢𝗧 🔞 •━━━┓
│┌──────────────────┐
│  •☠️¡ʜᴏʟᴀ! @${m.sender.split`@`[0]}
│└──────────────────┘
││•🪐 ᴄʀᴇᴀᴅᴏʀ ᴡᴀ.ᴍᴇ/+5493536568522
││•🪐 ᴠᴇʀᴄɪᴏ̃ɴ ᴅᴇʟ ʙᴏᴛ| 1.0.0
││•🪐 ғᴇᴄʜᴀ| ${date}                                             
┗━━━━━━━━•◦ ☠️ •◦━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗠𝗘𝗡𝗨́ +18👹
┗━━━━━━━━━━━━━━━━━━━━┛
│•🔞ᴘᴀᴄᴋ
│•🔞ᴘᴀᴄᴋ 2
│•🔞ᴘᴀᴄᴋ 3
│•🔞ᴠɪᴅᴇᴏsxxx
│•🔞 ᴠɪᴅᴇᴏʟᴇsʙɪxxx
│•🔞ᴛᴇᴛᴀs
│•🔞ʙᴏᴏᴛʏ
│•🔞ᴇᴄᴄʜɪ
│•🔞ғᴜʀʀᴏ
│•🔞ɪᴍᴀɢᴇɴʟᴇsʙɪᴀɴs
│•🔞ᴘᴀɴᴛɪᴇs
│•🔞ᴘᴇɴᴇ
│•🔞ᴘᴏʀɴᴏ
│•🔞ʀᴀɴᴅᴏᴍxxx
│•🔞ᴘᴇᴄʜᴏs
│•🔞ʏᴀᴏɪ
│•🔞ʏᴀᴏɪ 2
│•🔞ʏᴜʀɪ
│•🔞ʏᴜʀɪ 2
│•🔞ᴛʀᴀᴘɪᴛᴏ
│•🔞ʜᴇɴᴛᴀɪ
│•🔞ɴsғᴡʟᴏʟɪ
│•🔞ɴsғᴡғᴏᴏᴛ
│•🔞ɴsғᴡᴀss
│•🔞ɴsғᴡᴅʙsᴍ
│•🔞ɴsғᴡᴄᴜᴍ
│•🔞ɴsғᴡᴇʀᴏ
│•🔞ɴsғᴡғᴇᴍᴅᴏᴍ
│•🔞ɴsғᴡɢʟᴀss
│•🔞ʜᴇɴᴛᴀɪᴘᴅғ <ᴛᴇxᴛᴏ>
│•🔞ʜᴇɴᴛᴀɪsᴇᴀʀᴄʜ <ᴛᴇxᴛᴏ>
┗━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, '🧸 𝗘𝘀𝘁𝗲 𝗺𝗲𝗻𝘂́ 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗶𝗻𝘁𝗲𝗿𝗻𝗼, 𝗽𝗼𝗿 𝗹𝗼 𝗰𝘂𝗮𝗹 𝗻𝗼 𝗳𝘂𝗲 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗲𝗻𝘃𝗶𝗮𝗿𝗹𝗼. 𝗥𝗲𝗽𝗼𝗿𝘁𝗮 𝗲𝘀𝘁𝗲 𝗲𝗿𝗿𝗼𝗿 𝗮𝗹 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.command = /^(menulabiblia|labiblia|Labiblia)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
