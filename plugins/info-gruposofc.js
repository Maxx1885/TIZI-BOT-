const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝗛𝗢𝗟𝗔, @user 𝗘𝗦𝗧𝗔𝗦 𝗜𝗡𝗩𝗜𝗧𝗔𝗗𝗢 𝗔 𝗨𝗡𝗜𝗥𝗧𝗘 𝗔 𝗟𝗢𝗦 𝗚𝗥𝗨𝗣𝗢𝗦 𝗢𝗙𝗜𝗖𝗜𝗔𝗟𝗘𝗦 𝗗𝗘 𝖲𝖠𝖬𝖬𝖸𝖡𝖮𝖳-𝖬𝖣 🧸,𝗬 𝗖𝗢𝗡𝗩𝗜𝗩𝗜𝗥 𝗖𝗢𝗡 𝗟𝗢𝗦 𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 𝗗𝗘 𝗦𝗨 𝗖𝗢𝗠𝗨𝗡𝗜𝗗𝗔𝗗 ;D.*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎 𝗦𝗔𝗠𝗠𝗬𝗕𝗢𝗧-𝗠𝗗🧸*
*1.-* https://chat.whatsapp.com/Gq4sgn9JH7kJmu7vGx5485
*➤ 𝙲𝚊𝚗𝚊𝚕 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎 𝗦𝗔𝗠𝗠𝗬𝗕𝗢𝗧-𝗠𝗗 🧸*
*1.-* https://whatsapp.com/channel/0029Vab0Bez3QxS6HnWr3Z3t`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/ancelzzz/`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝗦𝗔𝗠𝗠𝗬𝗕𝗢𝗧-𝗠𝗗🧸」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/axr.rmz/',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ʙᴏᴛ ᴍᴀꜱ ᴀᴇꜱᴛʜᴇᴛɪᴄ',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/axr.rmz/'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
