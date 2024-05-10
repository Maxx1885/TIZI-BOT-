import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    let fkon = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.reply(m.chat, '𝙀𝙟𝙚𝙘𝙩𝙪𝙖𝙣𝙙𝙤 𝙖𝙘𝙘𝙞𝙤́𝙣, 𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 🚀. . .', m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🌟 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀!!', body: wm, sourceUrl: global.md, thumbnail: imagen1 }}})
//m.react('🧸');
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`${m.sender.split('@')[0]} ÑÑÑÑÑÑ`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿🧸🩷', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": [gp1, md, gp2, channel2].getRandom()}}}, {quoted: m});
 // m.react('🧸');
  } catch {
    conn.reply(m.chat, '🧸 𝗘𝘀𝘁𝗲 𝗺𝗲𝗻𝘂́ 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗶𝗻𝘁𝗲𝗿𝗻𝗼, 𝗽𝗼𝗿 𝗹𝗼 𝗰𝘂𝗮𝗹 𝗻𝗼 𝗳𝘂𝗲 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗲𝗻𝘃𝗶𝗮𝗿𝗹𝗼. 𝗥𝗲𝗽𝗼𝗿𝘁𝗮 𝗲𝘀𝘁𝗲 𝗲𝗿𝗿𝗼𝗿 𝗮𝗹 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(allmenu|menucompleto|menúcompleto|allmenú|comando|herramientas|comandos)$/i;
handler.register = true
export default handler;
