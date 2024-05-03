const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, 𝗗𝗘𝗕𝗘𝗥𝗜𝗔𝗦 𝗖𝗔𝗦𝗔𝗥𝗧𝗘 💍 𝗖𝗢𝗡 ${toM(b)}, 𝗛𝗔𝗖𝗘𝗡 𝗨𝗡𝗔 𝗕𝗢𝗡𝗜𝗧𝗔 𝗣𝗔𝗥𝗘𝗝𝗔 💓*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
