import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━═━═━═━═━═━═━═━═━═━┓
┃╭─────────────────
┃│🐲𝑯𝒐𝒍𝒂: @${m.sender.split`@`[0]}
┃│🐲𝑶𝒘𝒏𝒆𝒓 𝒅𝒆𝒍 𝑩𝒐𝒕:
┃│wa.me/523131937695
┃│🐲𝑩𝒐𝒕 𝒐𝒇𝒇: 
┃│wa.me/
┃│🐲𝑽𝒆𝒓𝒔𝒊𝒐𝒏: 𝟹.𝟸.𝟶
┃│🐲𝑭𝒆𝒄𝒉𝒂: ${date}
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│🐉𝑳𝒆𝒗𝒆𝒍: ${level}
┃│🐉𝑬𝒙𝒑: ${exp}
┃│🐉𝑹𝒂𝒏𝒈𝒐: ${role}
┃│🐉𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔: ${limit}
┃│🐉𝑪𝒐𝒊𝒏𝒔: ${money}
┃│🐉𝑻𝒐𝒌𝒆𝒏𝒔: ${joincount}
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑨𝒄𝒕𝒊𝒗𝒂𝒓-𝑫𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒓
┃├────────────────╯
┃│🟢 𝒆𝒏𝒂𝒃𝒍𝒆
┃│🔴 𝒅𝒊𝒔𝒂𝒃𝒍𝒆
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑮𝒓𝒖𝒑𝒐𝒔
┃├────────────────╯
┃│👾 𝒎𝒆𝒏𝒖𝒇𝒇
┃│👾 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔𝒇𝒇
┃│👾 𝒌𝒊𝒄𝒌
┃│👾 𝒈𝒓𝒖𝒑𝒐
┃│👾 𝒑𝒓𝒐𝒎𝒐𝒕𝒆
┃│👾 𝒅𝒆𝒎𝒐𝒕𝒆
┃│👾 𝒅𝒆𝒎𝒐𝒕𝒆
┃│👾 𝒍𝒊𝒏𝒌
┃│👾 𝒕𝒐𝒅𝒐𝒔
┃│👾 𝒔𝒆𝒕𝒘𝒆𝒍𝒄𝒐𝒎𝒆
┃│👾 𝒔𝒆𝒕𝒃𝒚𝒆
┃│👾 𝒉𝒊𝒅𝒆𝒕𝒂𝒈
┃│👾 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔
┃│👾 𝒌𝒊𝒄𝒌𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑭𝒓𝒆𝒆 𝑭𝒊𝒓𝒆
┃├────────────────╯
┃│🐉 𝒎𝒆𝒏𝒖𝒇𝒇
┃│🐉 𝒃𝒆𝒓𝒎𝒖𝒅𝒂
┃│🐉 𝒌𝒂𝒍𝒂𝒉𝒂𝒓𝒊
┃│🐉 𝒂𝒍𝒑𝒆𝒔
┃│🐉 𝒑𝒖𝒓𝒈𝒂𝒕𝒐𝒓𝒊𝒐
┃│🐉 𝒏𝒆𝒙𝒕𝒆𝒓𝒓𝒂
┃│🐉 𝒂𝒈𝒆𝒏𝒅𝒂𝒔𝒆𝒎𝒂𝒏𝒂𝒍
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑩𝒖𝒔𝒄𝒂𝒓 𝑽𝒔-𝑷𝒍𝒂𝒏𝒕𝒊𝒍𝒍𝒂𝒔
┃├────────────────╯
┃│🔱 𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒎𝒂𝒔𝒄
┃│🔱 𝒃𝒔𝒎𝒔𝒂𝒄
┃│🔱 𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒇𝒆𝒎
┃│🔱 𝒃𝒔𝒇𝒆𝒎
┃│🔱 𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒎𝒊𝒙𝒕𝒐
┃│🔱 𝒃𝒔𝒎𝒊𝒙𝒕𝒐
┃│🔱 𝒇𝒐𝒓𝒎𝒖𝒍𝒂𝒓𝒊𝒐
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑳𝒊𝒔𝒕𝒂𝒔-𝑭𝒆𝒎
┃├────────────────╯
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐14
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐16
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐18
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐20
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐22
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐00
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
┃│💟 𝒇𝒆𝒎8𝒗𝒔8
┃│💟 𝒇𝒆𝒎12𝒗𝒔12
┃│💟 𝒇𝒆𝒎16𝒗𝒔16
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑳𝒊𝒔𝒕𝒂𝒔-𝑴𝒂𝒔𝒄
┃├────────────────╯
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐14
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐16
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐18
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐20
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐22
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐00
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
┃│💟 𝒎𝒂𝒔𝒄8𝒗𝒔8
┃│💟 𝒎𝒂𝒔𝒄12𝒗𝒔12
┃│💟 𝒎𝒂𝒔𝒄16𝒗𝒔16
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑳𝒊𝒏𝒌𝒔-𝑫𝒓𝒊𝒗𝒆𝒔
┃├────────────────╯
┃│❇️ 𝑺𝒑𝒂𝒎𝑨𝒑𝒌
┃│❇️ 𝑺𝒑𝒂𝒎𝑪𝒐𝒎𝒖
┃│❇️ 𝑺𝒑𝒂𝒎2
┃│❇️ 𝒓𝒄𝒖𝒓𝒔𝒐𝒔𝒅𝒛𝒏
┃│❇️ 𝒅𝒓𝒊𝒗𝒆𝒔𝒅𝒛𝒏
┃│❇️ 𝒅𝒛𝒏
┃│❇️ 𝑨𝒑𝒌𝑬𝒅𝒊𝒕𝒔
┃│❇️ 𝑫𝒓𝒊𝒗𝒆𝑬𝒅𝒊𝒕𝒔
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔-𝑭𝒊𝒍𝒕𝒓𝒐𝒔
┃├────────────────╯
┃│🍭 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 | 𝒔 𝒊𝒎𝒂𝒈𝒆𝒏/𝒗𝒊𝒅𝒆𝒐
┃│🍭 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 | 𝒔 𝒖𝒓𝒍/𝒋𝒑𝒈
┃│🍭 𝒆𝒎𝒐𝒋𝒊𝒎𝒊𝒙 🙂+😍
┃│🍭 𝒒𝒄 | 𝒎𝒆𝒏𝒔𝒂𝒋𝒆
┃│🍭 𝒔𝒄𝒊𝒓𝒄𝒍𝒆 | 𝒄í𝒓𝒄𝒖𝒍𝒐 𝒊𝒎𝒂𝒈𝒆𝒏
┃│🍭 𝒔𝒆𝒎𝒐𝒋𝒊 | 𝒆𝒎𝒐𝒋𝒊 𝒕𝒊𝒑𝒐/𝒆𝒎𝒐𝒋𝒊
┃│🍭 𝒂𝒕𝒕𝒑 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒂𝒕𝒕𝒑2 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒕𝒕𝒑 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒕𝒕𝒑2 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒕𝒕𝒑3 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒕𝒕𝒑4 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒕𝒕𝒑5 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒕𝒕𝒑6 𝒕𝒆𝒙𝒕𝒐
┃│🍭 𝒅𝒂𝒅𝒐
┃│🍭 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒎𝒂𝒓𝒌𝒆𝒓 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓/𝒊𝒎𝒂𝒈𝒆𝒏
┃│🍭 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒇𝒊𝒍𝒕𝒆𝒓 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓/𝒊𝒎𝒂𝒈𝒆𝒏
┃│🍭 𝒄𝒔 : 𝒄𝒔2 
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑱𝒖𝒆𝒈𝒐𝒔-𝑩𝒐𝒕
┃├────────────────╯
┃│🎮 𝒎𝒂𝒕𝒆𝒔
┃│🎮 𝒑𝒑𝒕
┃│🎮 𝒑𝒓𝒐𝒔𝒕𝒊𝒕𝒖𝒕𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒑𝒓𝒐𝒔𝒕𝒊𝒕𝒖𝒕𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒈𝒂𝒚 <@𝒕𝒂𝒈>
┃│🎮 𝒍𝒆𝒔𝒃𝒊𝒂𝒏𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒑𝒂𝒋𝒆𝒓𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒑𝒂𝒋𝒆𝒓𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒑𝒖𝒕𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒑𝒖𝒕𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒎𝒂𝒏𝒄𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒎𝒂𝒏𝒄𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒓𝒂𝒕𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒏𝒆𝒈𝒓𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒏𝒆𝒈𝒓𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒇𝒆𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒇𝒆𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒔𝒊𝒏𝒑𝒐𝒕𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒔𝒊𝒏𝒕𝒆𝒕𝒂𝒔 <@𝒕𝒂𝒈>
┃│🎮 𝒔𝒊𝒏𝒑𝒊𝒕𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒂𝒅𝒐𝒑𝒕𝒂𝒅𝒂 <@𝒕𝒂𝒈>
┃│🎮 𝒂𝒅𝒐𝒑𝒕𝒂𝒅𝒐 <@𝒕𝒂𝒈>
┃│🎮 𝒍𝒐𝒗𝒆
┃│🎮 𝒍𝒐𝒔10
┃│🎮 𝒔𝒖𝒊𝒕𝒑𝒗𝒑
┃│🎮 𝒔𝒍𝒐𝒕
┃│🎮 𝒔𝒊𝒎𝒊𝒔𝒊𝒎𝒊
┃│🎮 𝒑𝒓𝒆𝒈𝒖𝒏𝒕𝒂
┃│🎮 𝒄𝒖𝒂𝒏𝒅𝒐
┃│🎮 𝒔𝒉𝒊𝒑5
┃│🎮 𝒂𝒃𝒓𝒂𝒛𝒐
┃│🎮 𝒔𝒉𝒊𝒑2
┃│🎮 𝒇𝒐𝒓𝒎𝒂𝒓𝒑𝒂𝒓𝒆𝒋𝒂
┃│🎮 𝒗𝒆𝒓𝒅𝒂𝒅
┃│🎮 𝒓𝒆𝒕𝒐
┃│🎮 𝒄𝒂𝒏𝒄𝒊𝒐𝒏
┃│🎮 𝒑𝒊𝒔𝒕𝒂
┃│🎮 𝒓𝒖𝒍𝒆𝒕𝒂
┃│🎮 𝒛𝒐𝒅𝒊𝒂𝒄
┃│🎮 𝒐𝒅𝒊𝒐
┃│🎮 𝒔𝒉𝒊𝒑
┃│🎮 𝒔𝒐𝒓𝒕𝒆𝒐
┃│🎮 𝒎𝒊𝒏𝒐𝒗𝒊𝒂
┃│🎮 𝒎𝒊𝒏𝒐𝒗𝒊𝒐
┃│🎮 𝒌𝒄𝒉𝒆𝒓𝒐
┃│🎮 𝒌𝒄𝒉𝒆𝒓𝒐
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑰𝒎𝒂𝒈𝒆𝒏𝒆𝒔-𝑩𝒐𝒕
┃├────────────────╯
┃│🎭 𝒈𝒐𝒌𝒖
┃│🎭 𝒗𝒆𝒈𝒆𝒕𝒂
┃│🎭 𝒍𝒐𝒓𝒂
┃│🎭 𝒄𝒓7
┃│🎭 𝒔𝒑𝒊𝒅𝒆𝒓𝒎𝒂𝒏
┃│🎭 𝒃𝒂𝒕𝒎𝒂𝒏
┃│🎭 𝒉𝒆𝒍𝒍𝒐𝒌𝒊𝒕𝒕𝒚
┃│🎭 𝒄𝒉𝒂𝒓𝒎𝒂𝒏𝒅𝒆𝒓
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔
┃├────────────────╯
┃│🈴 𝒑𝒍𝒂𝒚
┃│🈴 𝒑𝒍𝒂𝒚.1
┃│🈴 𝒑𝒍𝒂𝒚2.2
┃│🈴 𝒚𝒕𝒗.2
┃│🈴 𝒚𝒕𝒂.2
┃│🈴 𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕
┃│🈴 𝒔𝒑𝒐𝒕𝒊𝒇𝒚
┃│🈴 𝒔𝒑𝒐𝒕𝒊𝒇𝒚𝒅𝒍
┃│🈴 𝒕𝒊𝒌𝒕𝒐𝒌
┃│🈴 𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎
┃│🈴 𝒎𝒆𝒅𝒊𝒂𝒇𝒊𝒓𝒆
┃│🈴 𝒈𝒅𝒓𝒊𝒗𝒆
┃│🈴 𝒕𝒘𝒊𝒕𝒕𝒆𝒓
┃│🈴 𝒚𝒕𝒂
┃│🈴 𝒚𝒕𝒗
┃│🈴 𝒊𝒎𝒂𝒈𝒆𝒏
┃│🈴 𝒊𝒂𝒊𝒎𝒂𝒈𝒆𝒏
┃│🈴 𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔
┃│🈴 𝒊𝒈𝒔𝒕𝒐𝒓𝒚
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑪𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒅𝒐𝒓𝒆𝒔
┃├────────────────╯
┃│🌴 𝒕𝒐𝒊𝒎𝒈
┃│🌴 𝒕𝒐𝒎𝒑3
┃│🌴 𝒕𝒐𝒑𝒕𝒕
┃│🌴 𝒕𝒐𝒗𝒊𝒅𝒆𝒐
┃│🌴 𝒕𝒕𝒔
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑬𝒇𝒆𝒄𝒕𝒐𝒔-𝑳𝒐𝒈𝒐𝒔
┃├────────────────╯
┃│♓ 𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒇𝒂𝒍𝒔𝒐
┃│♓ 𝒍𝒐𝒈𝒐𝒔
┃│♓ 𝒍𝒐𝒈𝒐𝒄𝒐𝒓𝒂𝒛𝒐𝒏
┃│♓ 𝒚𝒕𝒄𝒐𝒎𝒎𝒆𝒏𝒕
┃│♓ 𝒉𝒐𝒓𝒏𝒚𝒄𝒂𝒓𝒅
┃│♓ 𝒊𝒕𝒔𝒔𝒐𝒔𝒕𝒖𝒑𝒊𝒅
┃│♓ 𝒑𝒊𝒙𝒆𝒍𝒂𝒓
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑭𝒓𝒂𝒔𝒆𝒔-𝑻𝒆𝒙𝒕𝒐𝒔
┃├────────────────╯
┃│💌 𝒑𝒊𝒓𝒐𝒑𝒐
┃│💌 𝒄𝒐𝒏𝒔𝒆𝒋𝒐
┃│💌 𝒇𝒓𝒂𝒔𝒆𝒓𝒐𝒎𝒂𝒏𝒕𝒊𝒄𝒂
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑩𝒖𝒔𝒄𝒂𝒅𝒐𝒓𝒆𝒔
┃├────────────────╯
┃│🔍 𝒙𝒏𝒙𝒙𝒔𝒆𝒂𝒓𝒄𝒉
┃│🔍 𝒈𝒐𝒐𝒈𝒍𝒆 
┃│🔍 𝒍𝒆𝒕𝒓𝒂
┃│🔍 𝒘𝒊𝒌𝒊𝒑𝒆𝒅𝒊𝒂
┃│🔍 𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉
┃│🔍 𝒑𝒍𝒂𝒚𝒔𝒕𝒐𝒓𝒆
┃│🔍 𝒎𝒆𝒓𝒄𝒂𝒅𝒐𝒍𝒊𝒃𝒓𝒆
┃│🔍 𝒑𝒐𝒓𝒏𝒉𝒖𝒃𝒔𝒆𝒂𝒓𝒄𝒉
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑯𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔
┃├────────────────╯
┃│🦦 𝒄𝒍𝒊𝒎𝒂
┃│🦦 𝒂𝒇𝒌
┃│🦦 𝒐𝒄𝒓
┃│🦦 𝒄𝒂𝒍𝒄
┃│🦦 𝒅𝒆𝒍
┃│🦦 𝒘𝒉𝒂𝒕𝒎𝒖𝒔𝒊𝒄
┃│🦦 𝒒𝒓𝒄𝒐𝒅𝒆
┃│🦦 𝒕𝒓𝒂𝒅𝒖𝒄𝒊𝒓
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑬𝒄𝒐𝒏𝒐𝒎𝒊𝒂
┃├────────────────╯
┃│💰 𝒗𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒓
┃│💰 𝒖𝒏𝒓𝒆𝒈
┃│💰 𝒎𝒊𝒏𝒂𝒓
┃│💰 𝒃𝒖𝒚
┃│💰 𝒘𝒐𝒓𝒌
┃│💰 𝒎𝒆𝒏𝒅𝒊𝒈𝒂𝒓
┃│💰 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑭𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔-𝑶𝒘𝒏𝒆𝒓
┃├────────────────╯
┃│🈯 𝒋𝒐𝒊𝒏 𝒆𝒏𝒍𝒂𝒄𝒆
┃│🈯 𝒖𝒏𝒆𝒕𝒆 𝒆𝒏𝒍𝒂𝒄𝒆
┃│🈯 𝒅𝒂𝒓𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒅𝒂𝒓𝒙𝒑 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒅𝒂𝒓𝒈𝒂𝒕𝒂𝒄𝒐𝒊𝒏𝒔 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒂𝒅𝒅𝒑𝒓𝒆𝒎  @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒂𝒅𝒅𝒑𝒓𝒆𝒎2 @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒂𝒅𝒅𝒑𝒓𝒆𝒎3 @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒂𝒅𝒅𝒑𝒓𝒆𝒎4 @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒊𝒅𝒊𝒐𝒎𝒂 | 𝒍𝒂𝒏𝒈𝒖𝒂𝒈𝒆
┃│🈯 𝒄𝒂𝒋𝒂𝒇𝒖𝒆𝒓𝒕𝒆
┃│🈯 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓 | 𝒃𝒄 𝒕𝒆𝒙𝒕𝒐
┃│🈯 𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒄𝒉𝒂𝒕𝒔 | 𝒃𝒄𝒄 𝒕𝒆𝒙𝒕𝒐
┃│🈯 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓𝒑𝒗 𝒕𝒆𝒙𝒕𝒐
┃│🈯 𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒈𝒄 𝒕𝒆𝒙𝒕𝒐
┃│🈯 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓𝒈𝒓𝒖𝒑𝒐𝒔 𝒕𝒆𝒙𝒕𝒐
┃│🈯 𝒃𝒐𝒓𝒓𝒂𝒓𝒕𝒎𝒑 | 𝒄𝒍𝒆𝒂𝒓𝒕𝒎𝒑
┃│🈯 𝒅𝒆𝒍𝒆𝒙𝒑 @𝒕𝒂𝒈
┃│🈯 𝒅𝒆𝒍𝒐𝒑𝒕𝒊𝒎𝒖𝒔𝒄𝒐𝒊𝒏𝒔 @𝒕𝒂𝒈
┃│🈯 𝒅𝒆𝒍𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 @𝒕𝒂𝒈
┃│🈯 𝒓𝒆𝒊𝒏𝒊𝒄𝒊𝒂𝒓 | 𝒓𝒆𝒔𝒕𝒂𝒓𝒕
┃│🈯 𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒓 | 𝒖𝒑𝒅𝒂𝒕𝒆
┃│🈯 𝒂𝒅𝒅𝒑𝒓𝒆𝒎 | +𝒑𝒓𝒆𝒎 @𝒕𝒂𝒈
┃│🈯 𝒅𝒆𝒍𝒑𝒓𝒆𝒎 | -𝒑𝒓𝒆𝒎 @𝒕𝒂𝒈
┃│🈯 𝒍𝒊𝒔𝒕𝒂𝒑𝒓𝒆𝒎𝒊𝒖𝒎 | 𝒍𝒊𝒔𝒕𝒑𝒓𝒆𝒎
┃│🈯 𝒂ñ𝒂𝒅𝒊𝒓𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒂ñ𝒂𝒅𝒊𝒓𝒙𝒑 @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃│🈯 𝒂ñ𝒂𝒅𝒊𝒓𝒄𝒐𝒊𝒏𝒔 @𝒕𝒂𝒈 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🐉 𝑬𝒔𝒕𝒆 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒕𝒆𝒓𝒏𝒐, 𝒑𝒐𝒓 𝒍𝒐 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒇𝒖𝒆 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒆𝒏𝒗𝒊𝒂𝒓𝒍𝒐 𝒓𝒆𝒑𝒐𝒓𝒕𝒂𝒍𝒐 𝒂𝒍 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒐 𝒂𝒍 𝒔𝒕𝒂𝒇𝒇.', m);
  }
};
handler.command = /^(menu|menú|Menú|Menu|menuu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
