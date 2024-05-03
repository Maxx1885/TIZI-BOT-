let handler = async (m, { conn, groupMetadata, text, command}) => {
  if (!m.mentionedJid[0] && !m.quoted) throw '𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘱𝘢𝘳𝘢 𝘳𝘦𝘢𝘭𝘪𝘻𝘢𝘳 𝘶𝘯𝘢 𝙖𝙘𝙘𝙞𝙤𝙣'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let participants = groupMetadata.participants
  conn.reply(m.chat, `Le acabas de ${command} ${text} a *@${user.split('@')[0]}* 😳`, null, { mentions: [user] })

}
handler.help = ['acciones']
handler.tags = ['acciones']
handler.command = /^(regalar|dar|enviar|meter|chupar|metersela|retar)$/
handler.register = true
handler.group = true

export default handler
