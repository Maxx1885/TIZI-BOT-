import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen7;
    // let vn = './media/menu.mp3'
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
    const str = `𝗟𝗜𝗡𝗞 𝗔𝗣𝗞 𝗗𝗘 𝗦𝗣𝗔𝗠 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣

https://www.mediafire.com/file/elvm4t2m0tf25ux/SPAM_WHATSAPP.apk/file

𝙱𝚈: 𝚂𝙰𝙼𝙼𝚈𝙱𝙾𝚃-𝙼𝙳

𝗔𝗗𝗩𝗘𝗥𝗧𝗘𝗡𝗖𝗜𝗔⚠️

𝖴𝗌𝖺 𝖾𝗅 𝖺𝗉𝗄 𝖻𝖺𝗃𝗈 𝗍𝗎 𝗉𝗋𝗈𝗉𝗂𝗈 𝗋𝗂𝖾𝗌𝗀𝗈. 𝖤𝗅 𝗌𝗍𝖺𝖿𝖿 𝖽𝖾 𝖲𝖺𝗆𝗆𝗒𝖡𝗈𝗍-𝖬𝖣 𝗇𝗈 𝗌𝖾 𝗁𝖺𝖼𝖾 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖺𝖻𝗅𝖾 𝖽𝖾 𝗇𝗂𝗇𝗀𝗎𝗇 𝗍𝗂𝗉𝗈 𝖽𝖾 𝖾𝗋𝗋𝗈𝗋/𝖿𝖺𝗅𝗅𝖺𝗌/𝖻𝗅𝗈𝗊𝗎𝖾𝗈𝗌 𝗉𝗈𝗋 𝗅𝖺 𝖺𝗉𝗅𝗂𝖼𝖺𝖼𝗂𝗈́𝗇.\n 𝖣𝗂𝗌𝖿𝗋𝗎𝗍𝖺 𝖾𝗅 𝖺𝗉𝗄,𝖾𝗌𝗉𝖾𝗋𝖺𝗆𝗈𝗌 𝗌𝖾𝗀𝗎𝗂𝗋 𝗍𝗋𝖺𝗒𝖾𝗇𝖽𝗈 𝗇𝗎𝖾𝗏𝗈𝗌 𝖺𝗉𝗄𝗌 𝗌𝖾𝗀𝗎𝗋𝗈𝗌 𝗉𝖺𝗋𝖺 𝖾𝗅 𝗎𝗌𝗎𝖺𝗋𝗂𝗈.`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '𝗔𝗽𝗸 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 📩 𝘀𝗶 𝗻𝗼 𝘀𝗲 𝗲𝗻𝘃𝗶𝗼 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗰𝗼𝗻 𝗲𝗹 𝘀𝘁𝗮𝗳𝗳 𝗼 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗱𝗲 𝗯𝗼𝘁.', m);
  }
};
handler.command = /^(Apkspam|apkspam|spamapk)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}