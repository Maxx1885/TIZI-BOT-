import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤ24 𝖵𝖤𝖱𝖲𝖴𝖲 24
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝖧𝖮𝖱𝖠𝖱𝖨𝖮
│ 
│ㅤ🇲🇽 𝖬𝖾𝗑𝗂𝖼𝗈 : 
│
│ㅤ🇨🇴 𝖢𝗈𝗅𝗈𝗆𝖻𝗂𝖺 : 
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
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 5
│
│👑 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│🧸 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 6
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
 ↳𝗕𝗬:𝖲𝖺𝗆𝗆𝗒𝖡𝗈𝗍-𝖬𝖣 🧸✨️
                 
` 
}
handler.command = /^(vs24norte|24vs24norte|vs24n|24vs24n)$/i
handler.admin = true
handler.register = true
handler.group = true
export default handler
