const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*✅ 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼́𝗻 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 𝗺𝗼𝗱𝗶𝗳𝗶𝗰𝗮𝗱𝗮 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲*');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^setdesk|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
