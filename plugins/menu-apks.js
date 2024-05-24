import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
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
    const str = `┏━━━━• 💌 𝗦𝗮𝗺𝗺𝘆 𝗕𝗼𝘁 💌 •━━━━┓
│ ┌──────────────────┐
│   •🧸 ¡𝗛𝗲𝗹𝗹𝗼! @user
│ └──────────────────┘
││•🫀 *_CREADOR/A_*  wa.me/+543585753625
││•🫀 *_VERSIÓN DEL BOT:_* *1.0.0*
││•🫀 *_FECHA:_* ${date} 
││•🫀  *_NIVEL:_* ${level}
││•🫀 *_EXP_* ${exp} 
││•🫀 *_RANGO:_* ${role}  
││•🫀 *_DIAMANTES:_* ${limit}
││•🫀 *_COINS:_* ${money}
││•🫀 *_TOKENS:_* ${joincount}
││•🫀 *_TIEMPO ACTIVO:_* ${uptime}                                                                                                  
┗━━━━━━━━•◦ 🧸 •◦━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│ *Este es el menú*
┃│ *de apks premium por*
┃│ *el momento no hay*
┃│ *muchas apks pero se*
┃│ *irán aumentando*
┃│ *poco a poco*
┃╰──────────────────
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┃╭─────────────────
┃│𝗔𝗣𝗞𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌥️
┃├────────────────
┃│•☁️ *_apkdynamicisland_*
┃│•☁️ *_apkcapcut_*
┃│•☁️ *_apkbeachbuggy_*
┃│•☁️ *_apkminecraft_*
┃│•☁️ *_apkpiscart_*
┃│•☁️ *_apkpoppyplaytime_*
┃│•☁️ *_apkspam_*
┃│•☁️ *_apkspotify_*
┃│•☁️ *_apkyoutubemusic_*
┃╰─────────────────
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│ *Úsalo bajo tu propio*
┃│ *riesgo Sammy Bot*
┃│ *no se hace responsable*
┃│ *de nada que haya*
┃│ *pasado con algún fallo*
┃│ *o problema que tenga*
┃╰──────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`.trim();
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
    conn.reply(m.chat, '🧸 𝗘𝘀𝘁𝗲 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗶𝗻𝘁𝗲𝗿𝗻𝗼 𝗽𝗼𝗿 𝗹𝗼 𝗰𝘂𝗮𝗹 𝗻𝗼 𝗳𝘂𝗲 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗲𝗻𝘃𝗶𝗮𝗿𝗹𝗼. 𝗥𝗲𝗽𝗼𝗿𝘁𝗲 𝗲𝘀𝘁𝗲 𝗲𝗿𝗿𝗼𝗿 𝗰𝗼𝗻 𝗲𝗹 𝘀𝘁𝗮𝗳𝗳 𝗼 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗱𝗲𝗹 𝗯𝗼𝘁.', m);
  }
};
handler.command = /^(Menuapks|menuapks|menuapk)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}