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
┃│
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑩𝒖𝒔𝒄𝒂𝒅𝒐𝒓𝒆𝒔
┃├────────────────╯
┃│
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛
 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕

 ╰━━━━━━━━━━━━


╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*

 ╰━━━━━━━━━━━━

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*

 ╰━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*

 ╰━━━━━━━━━━━━

 ╭━〔 🔍 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
xnxxsearch*
google 
letra
wikipedia*
ytsearch*
playstore*
mercadolibre*
pornhubsearch*
 ╰━━━━━━━━━━━━

 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
*┃➤ 🍃 ${usedPrefix}clima*
*┃➤ 🍃 ${usedPrefix}afk*
*┃➤ 🍃 ${usedPrefix}ocr*
*┃➤ 🍃 ${usedPrefix}calc*
*┃➤ 🍃 ${usedPrefix}del*
*┃➤ 🍃 ${usedPrefix}whatmusic*
*┃➤ 🍃 ${usedPrefix}qrcode*
*┃➤ 🍃 ${usedPrefix}traducir*
 ╰━━━━━━━━━━━━

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*┃➤ 🍁 ${usedPrefix}verificar*
*┃➤ 🍁 ${usedPrefix}unreg*
*┃➤ 🍁 ${usedPrefix}minar*
*┃➤ 🍁 ${usedPrefix}buy*
*┃➤ 🍁 ${usedPrefix}work*
*┃➤ 🍁 ${usedPrefix}mendigar*
*┃➤ 🍁 ${usedPrefix}transfer*
 ╰━━━━━━━━━━━━
 *╔══ ≪ FUNCIONES OWNERS ≫ ══╗*
*║* 💎➺ _${usedPrefix}join *enlace*_
*║* 💎➺ _${usedPrefix}unete *enlace*_
*║* 💎➺ _${usedPrefix}dardiamantes *cantidad*_
*║* 💎➺ _${usedPrefix}darxp *cantidad*_
*║* 💎➺ _${usedPrefix}dargatacoins *cantidad*_
*║* 💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}idioma | language_
*║* 💎➺ _${usedPrefix}cajafuerte_
*║* 💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
*║* 💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
*║* 💎➺ _${usedPrefix}comunicarpv *texto*_
*║* 💎➺ _${usedPrefix}broadcastgc *texto*_
*║* 💎➺ _${usedPrefix}comunicargrupos *texto*_
*║* 💎➺ _${usedPrefix}borrartmp | cleartmp_
*║* 💎➺ _${usedPrefix}delexp *@tag*_
*║* 💎➺ _${usedPrefix}deloptimuscoins *@tag*_
*║* 💎➺ _${usedPrefix}deldiamantes *@tag*_
*║* 💎➺ _${usedPrefix}reiniciar | restart_
*║* 💎➺ _${usedPrefix}Actualizar | update_
*║* 💎➺ _${usedPrefix}addprem | +prem *@tag*_
*║* 💎➺ _${usedPrefix}delprem | -prem *@tag*_
*║* 💎➺ _${usedPrefix}listapremium | listprem_
*║* 💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadircoins *@tag cantidad*_
*╚══ ≪ •❈• ≫ ══╝*`.trim();
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
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
