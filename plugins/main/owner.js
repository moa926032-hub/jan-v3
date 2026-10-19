import crypto from "crypto";
import config, { getOwnerName } from "../../config.js";
import { getDatabase } from "../../src/lib/ourin-database.js";
import {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
} from "ourin";
import { AIRich } from "../../src/lib/ourin-builder.js";
import axios from "axios";
import sharp from "sharp";
const pluginConfig = {
  name: "owner",
  alias: ["creator", "dev", "developer"],
  category: "main",
  description: "Menampilkan kontak owner bot",
  usage: ".owner",
  example: ".owner",
  isOwner: false,
  isPremium: false,
  isGroup: false,
  isPrivate: false,
  cooldown: 10,
  energi: 0,
  isEnabled: true,
};

async function handler(m, { sock, config: botConfig }) {
  const db = getDatabase();
  const ownerType = db.setting("ownerType") || 1;
  const configOwners = botConfig.owner?.number || [];
  const dbOwners = db.data.owner || [];
  const ownerNumbers = [...new Set([...configOwners, ...dbOwners])];
  const botName = botConfig.bot?.name || "Ourin-AI";
  if (ownerType === 2) {
    const contacts = [];

    for (const number of ownerNumbers) {
      const cleanNumber = number.replace(/[^0-9]/g, "");

      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${getOwnerName(number)}\nTEL;type=CELL;type=VOICE;waid=${cleanNumber}:+${cleanNumber}\nEND:VCARD`;

      contacts.push({ vcard });
    }

    const zanne = await sock.sendMessage(
      m.chat,
      {
        contacts: {
          displayName: `مطور بوت JAN MD`,
          contacts,
        },
      },
      { quoted: m.raw },

    );
    await sock.sendMessage(m.chat, {
      text: "💬 لو عندك سؤال أو محتاج مساعدة، كلم مطوّر البوت على الرقم اللي تحت."
    }, { quoted: zanne })
  } else {
    const ownerText = `👑 *معلومات مطوّر البوت*\n\n╭┈┈⬡「 📋 *التفاصيل* 」\n┃ الاسم: *${ownerNumbers.map((n) => getOwnerName(n)).join(", ")}*\n┃ البوت: *${botName}*\n┃ الحالة: *🟢 متصل*\n╰┈┈⬡\n\nلو عندك سؤال أو محتاج مساعدة، تواصل مع المطوّر من الكارت اللي تحت.`;

    await m.reply(ownerText);

    for (const number of ownerNumbers) {
      const cleanNumber = number.replace(/[^0-9]/g, "");

      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${getOwnerName(number)} (Owner ${botName})\nTEL;type=CELL;type=VOICE;waid=${cleanNumber}:+${cleanNumber}\nEND:VCARD`;

      await sock.sendMessage(
        m.chat,
        {
          contacts: {
            displayName: getOwnerName(number),
            contacts: [{ vcard }],
          },
        },
        { quoted: m.raw },
      );
    }
  }
}

export { pluginConfig as config, handler };
