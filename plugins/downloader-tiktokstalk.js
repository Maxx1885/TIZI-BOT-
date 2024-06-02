
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {

  if (!text) throw `‎ ‎  ‎ ━━「 🌸 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗖 𝗜 𝗢 𝗡 🌸 」━━\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ \n🧸 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 \n🧸 𝙐𝙨𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 𝙙𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \n𝖤𝗃𝖾𝗆𝗉𝗅𝗈: .tiktokstalk juandamc`
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
_*Ｔ Ｉ Ｋ Ｔ Ｏ Ｋ  Ｓ Ｔ Ａ Ｌ Ｋ*_

•🎈 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:
${res.username}

•🎈 𝗡𝗢𝗠𝗕𝗥𝗘:
 ${res.name}

•🎈 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗥𝗘𝗦:
 ${res.followers}

• 🎈𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗦:
${res.following}

•🎈 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢́𝗡:
${res.desc}
 
𝗟𝗜𝗡𝗞: https://tiktok.com/${res.username}

𝗕𝗬: 𝖲𝖺𝗆𝗆𝗒𝖡𝗈𝗍-𝖬𝖣 🧸✨`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`‎ ‎  ‎ ━━「 🌸 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗖 𝗜 𝗢 𝗡 🌸 」━━\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ \n🧸 𝗥𝗲𝘃𝗶𝘀𝗲 𝗾𝘂𝗲 𝗲𝗹 𝗻𝗼𝗺𝗯𝗿𝗲 𝗱𝗲 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 
𝘀𝗲𝗮 𝗱𝗲 𝗧𝗶𝗸𝗧𝗼𝗸.`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler