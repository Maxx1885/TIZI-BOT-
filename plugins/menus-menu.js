import moment from 'moment-timezone';
var shadow = async (m, {  
      command, 
      conn, 
      args,  
      usedPrefix,  
      text
  }) => {  
    const d = new Date(new Date() + 3600000); 
   const locale = "es"; 
   const week = d.toLocaleDateString(locale, {weekday: "long"}); 
   const date = d.toLocaleDateString(locale, {day: "numeric", month: "long", year: "numeric"}); 
   const _uptime = process.uptime() * 1000; 
   const uptime = clockString(_uptime); 
   const {exp, limit, dolares, role} = global.db.data.users[m.sender]; 
   const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
   const username = conn.getName(who); 
   let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
   const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: '[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ]', orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
   const db = "imagen1.jpg"

if (command == "menu" || command == "menú") {
let uwu = `variostiposdemenu😅`
conn.sendButton(m.chat, uwu, null, imagen1, [
['🌐 menucompleto', '.allmenu'],
['🧳 descargasmenu', '.descargasmenu'],
['👾 estado', '/estado']], null, 
[['🎭 Grupo de WhatsApp', md]], m)}

if (command == "menucompleto" || command == "allmenu") {
await m.reply(`[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ]`);                 
var completomenu = `q onda con esto bolo`.trim();
 await  conn.sendMessage(m.chat,{ image:{ url:"https://telegra.ph/file/dde9bd1f999297449d139.jpg", }, caption: completomenu, 
contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: `MENU - COMPLETO`, 
sourceUrl: "http://paypal.me/DorratBotOficial", mediaType: 1, showAdAttribution: true, thumbnailUrl: "https://telegra.ph/file/dde9bd1f999297449d139.jpg", 
}, }, }, { quoted: m,});}};

  shadow.command = [
  "menu",
  "menú",
  "menucompleto",
  "allmenu"
  ];
  shadow.tags = ["internet"]  
  export default shadow 

  function clockString(ms) { 
   const h = isNaN(ms) ? "--" : Math.floor(ms / 3600000); 
   const m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60; 
   const s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60; 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":"); 
 } 

 function ucapan() { 
   const time = moment.tz("America/Los_Angeles").format("HH"); //America/Los_Angeles  Asia/Jakarta   America/Toronto 

   var res = "🌉Buenas madrugadas"; 

   if (time >= 4) { 
     res = "🌇Buenos Días"; 
   } 

   if (time >= 11) { 
     res = "🏙️Buenas Tardes"; 
   } 

   if (time >= 15) { 
     res = "🌆Buenas tardes"; 
   } 

   if (time >= 17) { 
     res = "🌃Buenas noches"; 
   } 

   return res; 
 }