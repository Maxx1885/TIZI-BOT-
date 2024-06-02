
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {

  if (!text) throw `‎ ‎  ‎ ━━「 🌸 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗖 𝗜 𝗢 𝗡 🌸 」━━
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ 
🧸 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 
🧸 𝙐𝙨𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 𝙙𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: 
𝖤𝗃𝖾𝗆𝗉𝗅𝗈: .tiktokstalk juandamc'
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
_*Ｔ Ｉ Ｋ Ｔ Ｏ Ｋ  Ｓ Ｔ Ａ Ｌ Ｋ*_

» 𝙉𝙤𝙢𝙗𝙧𝙚𝙨: ${res.name}
» 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚: ${res.username}
» 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙧𝙚𝙨: ${res.followers}
» 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙙𝙤: ${res.following}
» 𝘿𝙚𝙨𝙘:
 ${res.desc}

» 🔗 𝙇𝙞𝙣𝙠 : https://tiktok.com/${res.username}

» 𝘽𝙔: 𝙓𝙄𝘼 𝘽𝙊𝙏 𝙋𝙍𝙊`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙍𝙚𝙫𝙞𝙨𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙨𝙚𝙖 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler