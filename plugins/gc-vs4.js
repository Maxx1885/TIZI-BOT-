import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤㅤ4 𝖵𝖤𝖱𝖲𝖴𝖲 4
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝖧𝖮𝖱𝖠𝖱𝖨𝖮 
│
│ㅤ🇲🇽 𝖬𝖾𝗑𝗂𝖼𝗈: 
│
│ㅤ🇨🇴 𝖢𝗈𝗅𝗈𝗆𝖻𝗂𝖺: 
│
│➥ 𝖬𝖮𝖣𝖠𝖫𝖨𝖣𝖠𝖣: 
│
│➥ 𝖩𝖴𝖦𝖠𝖣𝖮𝖱𝖤𝖲:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
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
handler.command = /^(vs4norte|4vs4norte|vs4n|4vs4n)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler
