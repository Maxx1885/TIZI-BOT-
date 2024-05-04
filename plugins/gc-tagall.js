const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*⺀𝚁 𝙴 𝚅 𝙸 𝚅 𝙰 𝙽 - 𝙼 𝚄 𝙴 𝚁 𝚃 𝙾 𝚂⺀*\n\n❏ ${oi}\n\n❏ *𝘌𝘛𝘐𝘘𝘜𝘌𝘛𝘈𝘚:*\n`;
  for (const mem of participants) {
    teks += `┣・🧸 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・🧸 𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿🩷\n\n ▌│█║▌║▌║║▌║▌║▌║█`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|a|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;