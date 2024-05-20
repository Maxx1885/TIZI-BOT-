let WAMessageStubType = (await import(global.baileys)).default;
export async function before(m, {conn}) {
  if (!m.messageStubType || !m.isGroup) return;
  let usuario = `@${m.sender.split`@`[0]}`;
  let fkontak = {
    key: {participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "Halo"},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };
  if (m.messageStubType == 21) {
    await this.sendMessage(
      m.chat,
      {text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• ${usuario}
• 𝖢𝖺𝗆𝖻𝗂𝗈 𝖤𝗅 𝖭𝗈𝗆𝖻𝗋𝖾 𝖣𝖾𝗅 𝖦𝗋𝗎𝗉𝗈 𝖠:
• ${m.messageStubParameters[0]}

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 22) {
    await this.sendMessage(m.chat, {text: `_.🎌${usuario} Cambio la foto del grupo_`, mentions: [m.sender]}, {quoted: fkontak});
  } else if (m.messageStubType == 24) {
    await this.sendMessage(
      m.chat,
      {text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• ${usuario}
• 𝖢𝖺𝗆𝖻𝗂𝗈 𝖫𝖺 𝖨𝗆𝖺𝗀𝖾𝗇 𝖽𝖾𝗅 𝖦𝗋𝗎𝗉𝗈 

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 25) {
    await this.sendMessage(
      m.chat,
      {
        text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
•𝘈𝘩𝘰𝘳𝘢 ${m.messageStubParameters[0]} == "on" ? "𝘚𝘖𝘓𝘖 𝘓𝘖𝘚 𝘈𝘋𝘔𝘐𝘕𝘐𝘚𝘛𝘙𝘈𝘋𝘖𝘙𝘌𝘚" : "𝘔𝘐𝘌𝘔𝘉𝘙𝘖𝘚"} 𝘱𝘶𝘦𝘥𝘦𝘯 𝘦𝘥𝘪𝘵𝘢𝘳 𝘭𝘢 𝘪𝘯𝘧𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 26) {
    await this.sendMessage(
      m.chat,
      {
        text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• 𝘎𝘳𝘶𝘱𝘰 ${m.messageStubParameters[0]} == "on" ? "𝘊𝘦𝘳𝘳𝘢𝘥𝘰 🔒" : "𝘈𝘣𝘪𝘦𝘳𝘵𝘰 🔓"}\n ${m.messageStubParameters[0] == "on" ? " •𝘚𝘰𝘭𝘰 𝘈𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 𝘱𝘶𝘦𝘥𝘦𝘯 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘳" : "𝘠𝘢 𝘱𝘶𝘦𝘥𝘦𝘯 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘳 𝘵𝘰𝘥𝘰𝘴"

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸"
        } En este grupo`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 29) {
    await this.sendMessage(
      m.chat,
      {
        text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• @${m.messageStubParameters[0].split`@`[0]}
• 𝘌𝘴 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳/𝘢 𝘋𝘦𝘭 𝘨𝘳𝘶𝘱𝘰
• 𝙇𝙀 𝘿𝙄𝙊 𝘼𝘿𝙈𝙄𝙉:
• ${usuario} 

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 30) {
    await this.sendMessage(
      m.chat,
      {
        text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• @${m.messageStubParameters[0].split`@`[0]}
• 𝘠𝘢 𝘕𝘰 𝘌𝘴 𝘈𝘥𝘮𝘪𝘯 𝘋𝘦𝘭 𝘎𝘳𝘶𝘱𝘰
• 𝙇𝙀 𝙌𝙐𝙄𝙏𝙊 𝙎𝙐 𝘼𝘿𝙈𝙄𝙉: 
• ${usuario}

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 72) {
    await this.sendMessage(
      m.chat,
      {text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• ${usuario}
• 𝖢𝖺𝗆𝖻𝗂𝗈 𝖫𝖺 𝖣𝗎𝗋𝖺𝖼𝗂𝗈́𝗇 𝖽𝖾 𝖫𝗈𝗌 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌 𝖠: 
• ${m.messageStubParameters[0]}

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 123) {
    await this.sendMessage(m.chat, {text: `⚠️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 🧸
⏝⏝⏝⏝⏝⏝⏝⏝
• ${usuario}
• 𝖣𝖾𝗌𝖺𝖼𝗍𝗂𝗏𝗈 𝖫𝗈𝗌 𝖬𝖾𝗇𝗌𝖺𝗃𝖾𝗌 𝖳𝖾𝗆𝗉𝗈𝗋𝖺𝗅𝖾𝗌

🩷 𝙎 𝘼 𝙈 𝙈 𝙔 𝘽 𝙊 𝙏 - 𝙈 𝘿 🧸`, mentions: [m.sender]}, {quoted: fkontak});
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType],
    });
  }
}