const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*—◉ 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗗𝗘 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗔 𝗘𝗦: wa.me/5493585753625*

*—◉ Segundo Numero de Ale es : wa.me/5493585753625*

*—◉ 𝗡𝗨𝗠𝗘𝗥𝗢 𝗢𝗙𝗜𝗖𝗜𝗔𝗟 𝗗𝗘𝗟 𝗕𝗢𝗧: wa.me/5493585137595*`.trim();
  const buttonMessage= {
    'document': {url: `https://whatsapp.com/channel/0029Vab0Bez3QxS6HnWr3Z3t`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝗛𝗢𝗟𝗔 𝗠𝗨𝗡𝗗𝗢 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://whatsapp.com/channel/0029Vab0Bez3QxS6HnWr3Z3t',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'Numero Oficiales',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://whatsapp.com/channel/0029Vab0Bez3QxS6HnWr3Z3t'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;