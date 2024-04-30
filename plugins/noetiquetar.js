let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*[ ⚠️ ] 𝐍𝐎 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐄𝐒 𝐀 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑/𝐀,𝐒𝐈 𝐓𝐈𝐄𝐍𝐄𝐒 𝐀𝐋𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀 𝐎 𝐃𝐔𝐃𝐀 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐀 𝐂𝐎𝐍 𝐄𝐋/𝐋𝐀 𝐀 𝐒𝐔 𝐂𝐇𝐀𝐓 𝐏𝐑𝐈𝐕𝐀𝐃𝐎/n𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@5493585753625$/i
export default handler
