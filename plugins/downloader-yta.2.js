import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝗜𝗡𝗦𝗘𝗥𝗧𝗘 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗠𝗔𝗦 𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 / 𝗟𝗜𝗡𝗞 𝗗𝗘 𝗨𝗡 𝗩𝗜𝗗𝗘𝗢 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨𝗕𝗘*';
  await m.reply(`*_⏳𝗌𝖾 𝖾𝗌𝗍𝖺 𝗉𝗋𝗈𝖼𝖾𝗌𝖺𝗇𝖽𝗈 𝗌𝗎 𝖺𝗎𝖽𝗂𝗈...⏳_*\n\n*◉ 𝖲𝗂 𝗌𝗎 𝖺𝗎𝖽𝗂𝗈 𝗇𝗈 𝖾𝗌 𝖾𝗇𝗏𝗂𝖺𝖽𝗈, 𝗉𝗋𝗎𝖾𝖻𝖾 𝖼𝗈𝗇 𝖾𝗅 𝖼𝗈𝗆𝖺𝗇𝖽𝗈 #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`);
  try {
    const q = '128kbps';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    const cap = `*◉—⌈📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥⌋—◉*\n❏ *𝙏𝙄𝙏𝙐𝙇𝙊:* ${ttl}\n❏ *𝙋𝙀𝙎𝙊:* ${size}`.trim();
    await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉—⌈📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥⌋—◉*\n❏ *𝙏𝙄𝙏𝙐𝙇𝙊:* ${n}\n❏ *𝙋𝙀𝙎𝙊:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] 𝗘𝗥𝗥𝗢𝗥,𝗡𝗢 𝗙𝗨𝗘 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗥 𝗘𝗟 𝗔𝗨𝗗𝗜𝗢*', m);
    }
  }
};
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i;
export default handler;
