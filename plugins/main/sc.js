import { getAssetBuffer } from "../../src/lib/ourin-asset-manager.js";
import config from "../../config.js"

const pluginConfig = {
    name: "sc",
    alias: ["script"],
    category: "main",
    description: "رابط مستودع نسخة JAN MD",
    usage: ".sc",
    example: ".sc",
    isPremium: false,
    isOwner: false,
    isBanned: false,
    isAdmin: false,
    cooldown: 10,
    energi: 0,
    isBotAdmin: false,
    isEnabled: true
}

async function handler(m, { sock }) {
    const sourceUrl = config.info?.website || "https://github.com/moa926032-hub/jan-v3";
    return await sock.sendMessage(m.chat, {
        image: getAssetBuffer("ourin"),
        caption: `💜 أهلًا يا *${m.pushName || "صاحبي"}*
        
ده مستودع نسخة *${config.bot?.name || "𝐉𝐀𝐍 𝐌𝐃 𓅃"}* الرسمي. هتلاقي فيه الكود والتحديثات الخاصة بالبوت.`,
        footer: `👨‍💻 المطوّر: ${config.bot?.developer || "𝑭𝑶𝑹𝑨1𝑶𝑵"}`,
        interactiveButtons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "📂 افتح مستودع JAN MD",
                    url: sourceUrl,
                    merchant_url: sourceUrl
                })
            }
        ]

    }, { quoted: m })
}

export { pluginConfig as config, handler }