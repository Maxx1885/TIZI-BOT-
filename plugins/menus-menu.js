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
var completomenu = `┏━━━• 💌 𝗦𝗮𝗺𝗺𝘆 𝗕𝗼𝘁 💌 •━━━┓
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

 ┏━━━━━━━━━━━━━━━━━━━━┓
  | • 𝗜𝗡𝗙𝗢́𝗥𝗠𝗔𝗖𝗜𝗢́𝗡   🈯️                                       
 ┗━━━━━━━━━━━━━━━━━━━━┛
 │•🈯️  _*!help*_
 │•🈯️ _*!allmenu*_
 │•🈯️ _*!owner*_
 │•🈯️ *_!contacto_*
 │•🈯️ *_!creador_*
 │•🈯️ *_!contactos_*
 │•🈯️ *_!tqto>_*
 │•🈯️ *_!creditos_*
 │•🈯️ *_!credits_*
 │•🈯️ *_!thanks_*
 │•🈯️  *_!thanksto_*
 │•🈯️ *_!cuentasoficiales_*
 │•🈯️ *_!cuentasofc_* 
 │•🈯️ *_!cuentas_*
 │•🈯️ *_!grupos_*
 │•🈯️ *_!dash_*
 │•🈯️ *_!dashboard_*
 │•🈯️ *_!views_*
 │•🈯️  *_!database_*
 │•🈯️  *_!usuarios>_*
 │•🈯️  *_!user_*
 │•🈯️ *_!donar_*
 │•🈯️ *_!donate_*
 │•🈯️ *_!donasi_*
 │•🈯️ *_!groups_*
 │•🈯️ *_!grouplist_*
 │•🈯️ *_!infobot_*
 │•🈯️ *_!script_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗚𝗥𝗨𝗣𝗢𝗦 📙
┗━━━━━━━━━━━━━━━━━━━━┛
 │•📙 *_!add_*
 │•📙 *_!admins_*
 │•📙 *_!aprobar_*
 │•📙 *_!group open / close_**
 │•📙 *_!grupo abrir / cerrar_*
 │•📙 *_!demote_*
 │•📙 *_hidetag_*
 │•📙 *_!idgc_*
 │•📙 *_!infogrupo_*
 │•📙 *_!kick_*
 │•📙 *_!link_*
 │•📙 *_!listanum_*
 │•📙 *_!kicknum_*
 │•📙 *_!promote_*
 │•📙 *_!revoke_*
 │•📙 *_!setbye_*
 │•📙 *_!setdesc_*
 │•📙 *_!setname_*
 │•📙 *_!setpp_*
 │•📙 *_!setppgc_*
 │•📙 *_!setppgroup_*
 │•📙 *_!setwelcome_*
 │•📙 *_!simulate_*
 │•📙 *_!tagall_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗝𝗨𝗘𝗚𝗢𝗦  🎮
┗━━━━━━━━━━━━━━━━━━━━┛
 │ •🎮 *_!love_*
 │ •🎮 *_!suerte_*
 │ •🎮 *_!ruleta_*
 │ •🎮 *_!ruletas_*
 │ •🎮 *_!acertijo_*
 │ •🎮 *_!acert_*
 │ •🎮 *_!adivinanza_*
 │ •🎮 *_!tekateki_*
 │ •🎮 *_!advpe_*
 │ •🎮 *_!adv_*
 │ •🎮 *_!película_*
 │ •🎮  *_!películas_*
 │ •🎮  *_!cancion_*
 │ •🎮  *_!delttt_*
 │ •🎮  *_!delttc_*
 │ •🎮  *_!delxo_*
 │ •🎮  *_!doxear_*
 │ •🎮  *_!doxeo_*
 │ •🎮  *_!doxxeo_*
 │ •🎮  *_!gay_*
 │ •🎮  *_!los10_*
 │ •🎮  *_!mates_*
 │ •🎮  *_!personalidad_*
 │ •🎮  *_!pregunta_*
 │ •🎮  *_!reto_*
 │ •🎮  *_!fap_*
 │ •🎮  *_!ship_*
 │ •🎮  *_!simi_*
 │ •🎮  *_!slot_*
 │ •🎮  *_!buscarpalabra_*
 │ •🎮  *_!sopa_*
 │ •🎮  *_!soup_*
 │ •🎮  *_!spdepalabras_*
 │ •🎮  *_!tictactoe_*
 │ •🎮  *_!topgays_*
 │ •🎮  *_!topotakus_*
 │ •🎮  *_!topheteros_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

 ┏━━━━━━━━━━━━━━━━━━━━┓
  | • 𝗢𝗧𝗥𝗢𝗦 𝗠𝗘𝗡𝗨𝗦 🌈                                      
 ┗━━━━━━━━━━━━━━━━━━━━┛
 │•🔥 _*menuff*_
 │•▶️ *_menuaudios_* 
 │•🌸 *_menuanime_*
 │•🆓 *_menuapks_* 
 │•🔞 *_labiblia_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

 ┏━━━━━━━━━━━━━━━━━━━━┓
  │• 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦  🚀
 ┗━━━━━━━━━━━━━━━━━━━━┛
│•🚀  *_!instagram<enlace / link / url>_*
│•🚀  *_!mediafire *<enlace / link / url>_*
│•🚀  *_gitclone *<enlace / link / url>_*
│•🚀  *_!gdrive *<enlace / link / url>_*
│•🚀  *_!tiktok <enlace / link / url>_*
│•🚀  *_!tiktokimg *<enlace / link/ url>_*
│•🚀  *_!xnxxdl *<enlace / link / url>_*
│•🚀  *_!xvideosdl *<enlace / link / url>_*
│•🚀  *_!twitter *<enlace / link / url>_*
│•🚀  *_!fb *<enlace / link / url>_*
│•🚀  *_!ytshort *<enlace / link / url>_*
│•🚀  *_!ytmp3 *<enlace / link / url>_*
│•🚀  *_!ytmp4 *<enlace / link / url>_*
│•🚀  *_!ytmp3doc *<enlace / link / url>_*
│•🚀  *_!ytmp4doc *<enlace / link / url>_*
│•🚀  *_!videodoc *<enlace / link / url>_*
│•🚀  *_!dapk2 *<enlace / link / url>_*
│•🚀  *_!stickerpack *<enlace / link / url>_*
│•🚀  *_!play *<texto>_*
│•🚀  *_!play2 *<texto>_*
│•🚀  *_!play.1 *<texto>_*
│•🚀  *_!play.2 *<texto>_*
│•🚀  *_!playdoc *<texto>_*
│•🚀  *_!playdoc2 *<texto>_*
│•🚀  *_!playlist *<texto>_*
│•🚀  *_!spotify *<texto>_*
│•🚀  *_!ringtone *<texto>_*
│•🚀  *_!soundcloud *<texto>_*
│•🚀  *_!imagen *<texto>*
│•🚀  *_!pinterest *<texto>_*
│•🚀  *_!wallpaper *<texto>_*
│•🚀  *_!pptiktok *<nombre de usuario>_*
│•🚀  *_!igstalk *<nombre de usuario>_*
│•🚀  *_!igstory *<nombre de usuario>_*
│•🚀  *_!tiktokstalk *<username>_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │•𝗘𝗡𝗔𝗕𝗟𝗘✅️/𝗗𝗜𝗦𝗔𝗕𝗟𝗘❌️
┗━━━━━━━━━━━━━━━━━━━━┛
 │•✅️  *_!enable_*
 │•❌️  *_!disable_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦 🔎
┗━━━━━━━━━━━━━━━━━━━━┛
│•🔎 *_!githubsearch <texto>_*
│•🔎 *_!modapk <texto>_*
│•🔎 *_!stickersearch <texto>_*
│•🔎 *_!stickersearch2 <texto>_*
│•🔎 *_!xnxxsearch <texto>_*
│•🔎 *_!animeinfo  <texto>_*
│•🔎 *_!google  <texto>_*
│•🔎 *_!letra  <texto>_*
│•🔎 *_!wikipedia  <texto>_*
│•🔎 *_!ytsearch <texto>_*
│•🔎 *_!playstore <texto>_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦 🔊
┗━━━━━━━━━━━━━━━━━━━━┛
│•🔊 *_!toanime <imagen>_*
│•🔊 *_!togifaud <video>_*
│•🔊 *_!toimg <sticker>_*
│•🔊 *_!tomp3 <video>_*
│•🔊 *_!tomp3 <nota de voz>_*
│•🔊 *_!toptt <video / audio>_*
│•🔊 *_!tovideo <sticker>_*
│•🔊 *_!tourl <video / imagen / audio>_*
│•🔊 *_!tts <idioma> <texto>_*
│•🔊 *_!tts <efecto> <texto>_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 ⭐️
┗━━━━━━━━━━━━━━━━━━━━┛
 │•⭐️  _*!sticker <responder a imagen o video>*_
 │•⭐️ _*!sticker <enlace / link / url>*_
 │•⭐️ _*!sticker2 <responder a imagen o video>*_
 │•⭐️ _*!sticker2 <enlace / link / url>*_
 │•⭐️ _*!s <responder a imagen o video>*_
 │•⭐️ _*!s <enlace / link / url>*_
 │•⭐️ _*!emojimix <emoji 1>&<emoji 2>*_
 │•⭐️ _*!scircle <imagen>*_
 │•⭐️ _*!sremovebg <imagen>*_
 │•⭐️ _*!semoji <tipo> <emoji>*_
 │•⭐️ _*!qc <texto>*_
 │•⭐️ _*!attp <texto>*_
 │•⭐️ _*!attp2 <texto>*_
 │•⭐️ _*!attp3 <texto>*_
 │•⭐️ _*!ttp <texto>*_
 │•⭐️ _*!ttp2 <texto>*_
 │•⭐️ _*!ttp3 <texto>*_
 │•⭐️ _*!ttp4 <texto>*_
 │•⭐️ _*!ttp5 <texto>*_
 │•⭐️ _*!pat <@tag>*_
 │•⭐️ _*!slap <@tag>*_
 │•⭐️ _*!kiss <@tag>*_
 │•⭐️ _*!dado*_
 │•⭐️ _*!wm <packname> <author>*_
 │•⭐️ _*!stickermarker <efecto> <imagen>*_
 │•⭐️ _*!stickerfilter <efecto> <imagen>*_
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │•𝗥𝗣𝗚  💰
┗━━━━━━━━━━━━━━━━━━━━┛
 │•💰*_!adventure_*
 │•💰 *_!cazar_*
 │•💰 _*!cofre*_
 │•💰 *_!balance_*
 │•💰 *_!claim_*
 │•💰 *_!heal_*
 │•💰 *_lb_*
 │•💰 *_!levelup_*
 │•💰 *_!myns_*
 │•💰 *_!perfil_*
 │•💰 *_!work_*
 │•💰 _*!minar*_
 │•💰 *_!minar2_*
 │•💰 *_!buy_*
 │•💰 *_!buyall_*
 │•💰 *_!verificar_*
 │•💰 *_!robar <cantidad> <@tag>_*
 │•💰 *_!transfer <tipo> <cantidad> <@tag>*_
 │•💰 _! *unreg <numero de serie>*_
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │•𝗔𝗨𝗗𝗜𝗢𝗦 𝗬 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 🎤
┗━━━━━━━━━━━━━━━━━━━━┛
│•🎤 *𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰*
│•🎤 *_!bass_*
│•🎤 *_!blown_*
│•🎤 *_!deep_*
│•🎤 *_!earrape_*
│•🎤 *_fast_*
│•🎤 *_!fat_*
│•🎤 *_!nightcore_*
│•🎤 *_!reverse_*
│•🎤 *_!robot_*
│•🎤 _*!slow*_
│•🎤 _*!smooth*_
│•🎤 *_!tupai_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 🧰
┗━━━━━━━━━━━━━━━━━━━━┛
 │•🧰 *_!acortar_*
 │•🧰 *_!delete_*
 │•🧰 *_!dropmail_*
 │•🧰 *_!fake_*
 │•🧰 *_!readviewonce_*
 │•🧰 *_!nowa_*
 │•🧰 *_!qrcode_*
 │•🧰 *_!spoiler_*
 │•🧰 *_!readqr_*
 │•🧰 *_!style_*
 │•🧰 *_!traducir_*
 │•🧰 *_!codesidiomas_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │•𝗜𝗔 👾
┗━━━━━━━━━━━━━━━━━━━━┛
 │•👾 *_!bard_*
 │•👾 *_!bardimg_*
 │•👾 *_!dalle_*
 │•👾 *_!dall2_*
 │•👾 *_!hd_*
 │•👾 *_!openia_*
 │•👾 *_!chatgpt_*
 │•👾 *_!ia_*
 │•👾 *_!gemini_*
 ┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗜𝗠𝗔𝗚𝗘𝗡𝗘𝗦 🖼️
┗━━━━━━━━━━━━━━━━━━━━┛
 │•🖼️ *_!gimage_*
 │•🖼️ *_!imagen_*
 │•🖼️ *_!pinterest_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗢𝗪𝗡𝗘𝗥 👑
┗━━━━━━━━━━━━━━━━━━━━┛
 │• 👑 *_!menuowner_*
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗕𝗢𝗧 🤖
┗━━━━━━━━━━━━━━━━━━━━┛
 │•🤖  *_!cuentas_*
 │•🤖  *_!saludo_*
 │•🤖  *_!velocidad_*
 │•🤖  *_!metodo_*
 │•🤖  *_!instalarbot_*
 │•🤖  *_!terminosycondiciones_*
 │•🤖  *_!grupos_*
 │•🤖  *_!estado_*
 │•🤖  *_!aprender_*
 │•🤖  *_!infobot_*
 │•🤖  *_!speedtest_*
 │•🤖  *_!donar_*
 │•🤖  *_!owner_*
 │•🤖  *_!contactos_*
 │•🤖  *_!database_*
 │•🤖  *_!colaboradores_*
 │•🤖  *_!script_*
 │•🤖  *_Bot_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 📑
┗━━━━━━━━━━━━━━━━━━━━┛
 │•📑 *_!totalf_*
 │•📑 *_!setcmd_*
 │•📑 *_!delcmd_*
 │•📑 *_!listcmd_*
 ┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
 │• 𝗙𝗥𝗔𝗦𝗘𝗦 💌
┗━━━━━━━━━━━━━━━━━━━━┛
 │•💌 *_!consejo_*
 │•💌 *_!oracion_*
 │•💌 *_!piropo_*
 │•💌 *_!refran_*
 ┗━━━━━━━━━━━━━━━━━━━━┛`.trim();
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