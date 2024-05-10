const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon|hdp|maldito|maldita|perro|perra|lcdtm|sexo|pene|vagina|chupala/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `𝗛𝗼𝗹𝗮 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝗱𝗲𝗰𝗶𝗿 𝗹𝗮 𝗽𝗮𝗹𝗮𝗯𝗿𝗮 (${isToxic}) 𝗲𝘀𝘁𝗮 𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗱𝗮 *${user.warn}/5* 𝗮𝗱𝘃𝗲𝗿𝘁𝗲𝗻𝗰𝗶𝗮 [💢]`, false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`𝗠𝗺𝗺 *@${m.sender.split`@`[0]}*, 𝗵𝗮𝘀 𝘀𝘂𝗽𝗲𝗿𝗮𝗱𝗼 𝗹𝗮𝘀 𝗮𝗱𝘃𝗲𝗿𝘁𝗲𝗻𝗰𝗶𝗮𝘀, 𝘀𝗲𝗿𝗮𝘀 𝗲𝘅𝗽𝘂𝗹𝘀𝗮𝗱𝗼 𝗽𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁𝗲𝗺𝗲𝗻𝘁𝗲 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 [💢]`, false, {mentions: [m.sender]});
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
