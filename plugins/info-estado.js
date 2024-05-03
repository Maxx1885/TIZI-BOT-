const handler = async (m, {conn}) => {
  m.reply(global.ping);
};
handler.command = /^(ping|Ping)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.ping = ` 
 [🩷] *Bot:* 𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸
 [📶] *Ping:* ${rtime}
`;