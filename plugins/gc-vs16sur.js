import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤ16 𝖵𝖤𝖱𝖲𝖴𝖲 16
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝖧𝖮𝖱𝖠𝖱𝖨𝖮
│ 
│ㅤ🇦🇷 𝖠𝗋𝗀𝖾𝗇𝗍𝗂𝗇𝖺: 
│
│ 🇵🇪 𝖯𝖾𝗋𝗎: 
│
│ 🇧🇴 𝖡𝗈𝗅𝗂𝗏𝗂𝖺:
│
│➥ 𝖬𝖮𝖣𝖠𝖫𝖨𝖣𝖠𝖣: 
│ 
│➥ 𝖩𝖴𝖦𝖠𝖣𝖮𝖱𝖤𝖲:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1
│
│👑 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│     
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2
│
│👑 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3
│
│👑 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 4
│
│👑 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│🧸 ➤ 
│🧸 ➤ 
╰─────────────╯
 ↳𝗕𝗬:𝖲𝖺𝗆𝗆𝗒𝖡𝗈𝗍-𝖬𝖣 🧸✨
                
` 
}
handler.command = /^(vs16sur|16vs16sur)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler
