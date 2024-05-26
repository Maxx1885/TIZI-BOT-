import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤ12 𝖵𝖤𝖱𝖲𝖴𝖲 12
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝖧𝖮𝖱𝖠𝖱𝖨𝖮 
│
│•🇲🇽 𝗆𝖾𝗑𝗂𝖼𝗈: 
│
│•🇨🇴 𝖼𝗈𝗅𝗈𝗆𝖻𝗂𝖺:
│ 
│➥ 𝖢𝖮𝖫𝖮𝖱 𝖣𝖤 𝖱𝖮𝖯𝖠: 
│•
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
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│🧸 ➤ 
│🧸 ➤ 
╰─────────────╯
↳𝗕𝗬:𝖲𝖺𝗆𝗆𝗒𝖡𝗈𝗍-𝖬𝖣 🧸✨
                 
` 
}
handler.command = /^(vs12norte|12vs12norte)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler
