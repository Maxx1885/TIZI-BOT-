const handler = async (m, {conn, usedPrefix}) => {
  const pp = imagen4;
  try {
  } catch (e) {
  } finally {
    const name = await conn.getName(m.sender);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
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

𝖠𝗊𝗎𝗂 𝗉𝗎𝖾𝖽𝖾𝗌 𝗀𝗎𝖺𝗋𝖽𝖺𝗋 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌 𝗊𝗎𝖾 𝗊𝗎𝗂𝖾𝗋𝖺𝗌 𝗏𝖾𝗋 𝗆𝖺́𝗌 𝗍𝖺𝗋𝖽𝖾.

 ┏━━━━━━━━━━━━━━━━━━━━┓
  *|* 𝗔𝗚𝗥𝗘𝗚𝗔𝗥 𝗔 𝗟𝗔 𝗟𝗜𝗦𝗧𝗔 🗳️                                
 ┗━━━━━━━━━━━━━━━━━━━━┛
 │•🗳️ _*agregarmsg <texto>*_
 │•🗳️ *_(responde un texto)_*
 │•🗳️ *_agregarvn <texto>_*
 │•🗳️ *_(responde a una nota de voz)_*
 │•🗳️ *_agregarvideo <texto>_*
 │•🗳️ *_(responde a un video)_*
 │•🗳️ *_agregaraudio <texto>_*
 │•🗳️ *_(responde a un audio)_*
 │•🗳️ *_agregarimg <texto>_*
 │•🗳️ *_(responde a una imagen)_*
 │•🗳️ *_agregarsticker <texto>_*
 │•🗳️ *_(responde a un sticker)_*
 ┗━━━━━━━━━━━━━━━━━━━━┛
 ┏━━━━━━━━━━━━━━━━━━━━┓
  *|* • 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 🗳️                              
 ┗━━━━━━━━━━━━━━━━━━━━┛
 │• 🗳️ *_listamsg_*
 │• 🗳️ *_listavn_*
 │• 🗳️ *_listavideo_*
 │• 🗳️ *_listaaudio_*
 │• 🗳️ *_listaimg_*
 │• 🗳️ *_listasticker_*
 ┗━━━━━━━━━━━━━━━━━━━━┛
 ┏━━━━━━━━━━━━━━━━━━━━┓
  *|* 𝗩𝗘𝗥 𝗧𝗘𝗫𝗧𝗢𝗦 𝗢 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦🗳️                               
 ┗━━━━━━━━━━━━━━━━━━━━┛
 │•🗳️ *_versmg_*
 │•🗳️ *_vervn_*
 │•🗳️ *_vervideo_*
 │•🗳️ *_veraudio_*
 │•🗳️ *_verimg_*
 │•🗳️ *_versticker_*
 ┗━━━━━━━━━━━━━━━━━━━━┛
 ┏━━━━━━━━━━━━━━━━━━━━┓
  *|* •𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 🗳️                               
 ┗━━━━━━━━━━━━━━━━━━━━┛
  │•🗳️ *_eliminarmsg_*
  │•🗳️ *_elminarvn_*
  │•🗳️ *_eliminarvideo_*
  │•🗳️ *_eliminaraudio_*
  │•🗳️ *_eliminarimg_*
  │•🗳️ *_eliminarsticker_*
  ┗━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
    // conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
  }
};
handler.help = ['cajafuerte'];
handler.tags = ['owner'];
handler.command = /^(cajafuerte)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
