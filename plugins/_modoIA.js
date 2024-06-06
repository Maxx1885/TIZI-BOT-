
import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {

if (!text) throw `🧸 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙝𝙖𝙗𝙡𝙖𝙧 𝙘𝙤𝙣 𝙘𝙝𝙖𝙩𝙂𝙋𝙏`;

 let syst = `Eres Senna Bot, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
        try {
                let gpt = await fetch(global.API('fgmods', '/api/info/openai', { prompt: syst, text }, 'apikey'));
        let res = await gpt.json()
        await m.reply(res.result, null, rcanal)
        } catch {
                m.reply(`🧸 𝙀𝙍𝙍𝙊𝙍: 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 𝙢𝙖𝙨 𝙩𝙖𝙧𝙙𝙚.`);
        }

}
handler.help = ['ai <text>']; 
handler.tags = ['tools'];
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt'];

export default handler;