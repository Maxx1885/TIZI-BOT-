    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://www.instagram.com/axr.rmz?igsh=MTVkM3R4dXVqc3EzMg==` },
    mimetype: `application/${document}`,
    fileName: `𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🌸`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://www.instagram.com/axr.rmz?igsh=MTVkM3R4dXVqc3EzMg==",
        mediaType: 2,
        previewType: "pdf",
        title: "Tᴜ Mᴇᴊᴏʀ Bᴏᴛ!",
        body: wm,
        thumbnail: imagen2,
        sourceUrl: "https://www.instagram.com/axr.rmz?igsh=MTVkM3R4dXVqc3EzMg==",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
handler.register = true
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}