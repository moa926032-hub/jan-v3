import { getDatabase } from "./src/lib/ourin-database.js";
import * as ownerPremiumDb from "./src/lib/ourin-premium-db.js";

//  utamakan baca object config sampai bawah
const config = {
  info: {
    website: "https://github.com/moa926032-hub/jan-v3",
    grupwa: "https://chat.whatsapp.com/xxxx",
  },

  owner: {
    name: "𝑭𝑶𝑹𝑨1𝑶𝑵",
    number: ["201515063273"],
    ids: ["201515063273@s.whatsapp.net", "156556473708763@lid"],
  },

  session: {
    pairingNumber: "62xxxxxxxxxxx", // Nomor WA yang akan di-pair, ini penting
    usePairingCode: true, // true = Pairing Code, false = QR Code
  },

  // fitur ini buat fitur kayak playcall, tapi nanti disuruh pairing lagi
  fake_call: {
    active: true, // kalau true berarti sistem aktif dan bisa di pakai, kalau false berarti sistem tidak aktif dan tidak bisa di pakai
    usePairing: true,
    dir: "./session_voip",
  },

  bot: {
    name: "𝐉𝐀𝐍 𝐌𝐃 𓅃", // Bot display name
    version: "3.3", // Versi bot
    developer: "𝑭𝑶𝑹𝑨1𝑶𝑵", // Developer display name
  },

  assets: {
    "ourin-daftar": "./assets/image/ourin-daftar.png",
    "ourin-demote": "./assets/image/ourin-demote.png",
    "ourin-fishit": "./assets/image/ourin-fishit.jpg",
    "ourin-games": "./assets/image/ourin-games.jpg",
    "ourin-landscape": "./assets/image/ourin-landscape.jpg",
    "ourin-levelup": "./assets/image/ourin-levelup.jpg",
    "ourin-minecraft": "./assets/image/ourin-minecraft.jpg",
    "ourin-promote": "./assets/image/ourin-promote.png",
    "ourin-rpg": "./assets/image/ourin-rpg.jpg",
    "ourin-rules": "./assets/image/ourin-rules.jpg",
    "ourin-store": "./assets/image/ourin-store.png",
    "ourin-v8": "./assets/image/ourin-v8.jpg",
    "ourin-winner": "./assets/image/ourin-winner.jpg",
    "ourin": "./assets/image/jan-logo.jpg",
    "ourin2": "./assets/image/jan-sections.jpg",
    "ourin3": "./assets/image/ourin3.jpg",
    "pp-kosong": "./assets/image/pp-kosong.jpg",
    "ourin-mp4": "./assets/video/ourin-mp4.mp4",
    "ourin-mp3": "./assets/audio/ourin-mp3.mp3",
    "ourin-font": "./assets/ourin-font.ttf",
    "ourin-kertas": "./assets/image/ourin-kertas.jpg",
  },

  mode: "public",

  // Untuk mengganti prefix
  command: {
    prefix: ".",
  },

  vercel: {
    // ambil token vercel: https://vercel.com/account/tokens
    token: "", // Vercel Token untuk fitur deploy ( Kalau .deploy mau work, ini wajib di isi )
  },

  payment: {
    qrisUrl: "",
    methods: [
      { name: "Dana", number: "", holder: "" },
      { name: "GoPay", number: "", holder: "" },
      { name: "OVO", number: "", holder: "" },
      { name: "ShopeePay", number: "", holder: "" },
    ],
    banks: [],
    customText: "https://imgdrop.web.id/KodpV.webp",
  },

  donasi: {
    payment: [
      { name: "Dana", number: "08xxxxxxxxxx", holder: "Nama Owner" },
      { name: "GoPay", number: "08xxxxxxxxxx", holder: "Nama Owner" },
      { name: "OVO", number: "08xxxxxxxxxx", holder: "Nama Owner" },
    ],
    links: [
      { name: "Saweria", url: "saweria.co/username" },
      { name: "Trakteer", url: "trakteer.id/username" },
    ],
    benefits: [
      "Mendukung development",
      "Server lebih stabil",
      "Fitur baru lebih cepat",
      "Priority support",
    ],
    qris: "https://imgdrop.web.id/KodpV.webp",
  },

  energi: {
    enabled: true, // Jika true, maka sistem energi/limit akan bekerja
    default: 99999,
    premium: 99999999,
    owner: -1,
  },

  sticker: {
    packname: "𝐉𝐀𝐍 𝐌𝐃 𓅃", // Sticker pack name
    author: "𝑭𝑶𝑹𝑨1𝑶𝑵", // Sticker author
  },

  saluran: {
    id: "120363401670228863@newsletter",
    name: "𝑭𝒍𝒂𝒔𝒉𝒃𝒂𝒄𝒌",
    link: "",
  },

  groupProtection: {
    antilink: "⚠️ ممنوع إرسال الروابط — @%user% بعت لينك.\nالرسالة اتمسحت.",
    antilinkKick: "⚠️ @%user% اتشال من الجروب عشان بعت لينك.",
    antilinkGc: "⚠️ ممنوع لينكات واتساب — @%user% بعت لينك جروب.\nالرسالة اتمسحت.",
    antilinkGcKick: "⚠️ @%user% اتشال عشان بعت لينك جروب واتساب.",
    antilinkAll: "⚠️ ممنوع إرسال الروابط — @%user% بعت لينك.\nالرسالة اتمسحت.",
    antilinkAllKick: "⚠️ @%user% اتشال من الجروب عشان بعت لينك.",
    antitagsw: "⚠️ منشن الحالة من @%user% اتمسح.",
    antiviewonce: "👁️ رسالة عرض مرة واحدة من @%user%.",
    antiremove: "🗑️ @%user% حذف الرسالة دي:",
    antiswgc: "⚠️ ممنوع نشر حالات الجروب هنا يا @%user%.",
    antihidetag: "⚠️ إخفاء المنشن من @%user% اتمسح.",
    antitoxicWarn: "⚠️ @%user% استخدم كلام مش مناسب.\nده التحذير %warn% من %max%، والمرة الجاية ممكن يتعمله %method%.",
    antitoxicAction: "🚫 @%user% اتعمله %method% بسبب الإساءة. (%warn%/%max%)",
    antidocument: "⚠️ مستند @%user% اتمسح.",
    antisticker: "⚠️ استيكر @%user% اتمسح.",
    antimedia: "⚠️ ميديا @%user% اتمسحت.",
    antibot: "🤖 @%user% اتعرف كبوت واتشال من الجروب.",
    notAdmin: "⚠️ البوت مش أدمن، فمش قادر يمسح الرسالة.",
  },

  errorTemplate: `⚠️ الأمر \`{prefix}{command}\` فيه مشكلة دلوقتي. جرّب كمان شوية يا {pushName}.\n\nلو المشكلة فضلت، كلم مطوّر البوت.`,

  features: {
    antiCall: false, // Jika true, bot akan menolak panggilan masuk
    blockIfCall: false, // Jika true, bot akan memblokir nomor yang menelpon bot
    autoTyping: true,
    autoRead: true,
    logMessage: true,
    dailyLimitReset: true,
    smartTriggers: false,
  },

  registration: {
    enabled: false, // Jika true, user harus mendaftar sebelum menggunakan bot
    rewards: {
      koin: 30000,
      energi: 300,
      exp: 300000,
    },
  },

  welcome: { defaultEnabled: false },
  goodbye: { defaultEnabled: false },

  ui: {
    menuVariant: 3,
  },

  messages: {
    wait: "🕕 *استنى ثانية بس...* البوت بيجهّز طلبك.",
    success: "✅ *تمام!* طلبك خلص بنجاح.",
    error: "❌ *حصلت مشكلة!* جرّب تاني كمان شوية.",
    ownerOnly: "⛔ الأمر ده للمطوّر بس.",
    premiumOnly: "💎 الأمر ده للأعضاء Premium. اكتب *.benefitpremium* عشان تعرف التفاصيل.",
    groupOnly: "👥 الأمر ده شغال جوه الجروبات بس.",
    privateOnly: "🔒 الأمر ده شغال في الخاص مع البوت بس.",
    adminOnly: "🛡️ لازم تكون أدمن في الجروب عشان تستخدم الأمر ده.",
    botAdminOnly: "🤖 لازم تدي البوت صلاحية أدمن عشان ينفّذ الأمر.",
    cooldown: "🕕 استنى شوية، فاضل %time% ثانية وتقدر تستخدم الأمر تاني.",
    energiExceeded: "⚡ طاقتك خلصت. استنى إعادة الضبط أو اشترك Premium.",
    limitDeducted: "🔋 اتخصم {amount} من رصيدك. المتبقي: {sisa}.",
    banned: "🚫 مش هتقدر تستخدم البوت عشان حسابك موقوف لمخالفة القواعد.",
    rejectCall: "🚫 من فضلك ما تتصلش بالرقم ده؛ ابعت رسالة بدل المكالمة.",
  },

  database: { path: "./database/main" },
  backup: { enabled: false, intervalHours: 24, retainDays: 7 },
  scheduler: { resetHour: 0, resetMinute: 0 },

  // Dev mode settings (auto-enabled jika NODE_ENV=development)
  dev: {
    enabled: process.env.NODE_ENV === "development",
    watchPlugins: true, // Hot reload plugins (SAFE)
    watchSrc: false, // DISABLED - src reload causes connection conflict 440
    debugLog: false, // Show stack traces
  },

  // bisa dikosongin
  pterodactyl: {
    server1: {
      domain: "",
      apikey: "",
      capikey: "",
      egg: "15",
      nestid: "5",
      location: "1",
    },
    server2: {
      domain: "",
      apikey: "",
      capikey: "",
      egg: "15",
      nestid: "5",
      location: "1",
    },
    server3: {
      domain: "",
      apikey: "",
      capikey: "",
      egg: "15",
      nestid: "5",
      location: "1",
    },
    server4: {
      domain: "",
      apikey: "",
      capikey: "",
      egg: "15",
      nestid: "5",
      location: "1",
    },
    server5: {
      domain: "",
      apikey: "",
      capikey: "",
      egg: "15",
      nestid: "5",
      location: "1",
    },
  },

  digitalocean: {
    token: "",
    region: "sgp1",
    sellers: [],
    ownerPanels: [],
  },


  // NOTE: kalau mau command "autoai" nya berfungsi, ini gak wajib di isi yak
  // ambil apikey di: https://aistudio.google.com/apikey
  geminiApiKey: "",

  autoaiPersonas: {
    Bell409: `إنت مساعد بوت JAN MD. ردودك بالمصري الطبيعي، خليك مختصر وواضح ولطيف من غير تكلف. لو مش متأكد من معلومة قول ده بصراحة، وما تدّعيش إنك إنسان. استخدم تعبيرات مصرية زي "إزيك" و"تمام" و"ماشي" بشكل طبيعي ومن غير مبالغة في العامية أو الإيموجي.`
  },

  //  APIkey
  APIkey: {
    lolhuman: process.env.LOLHUMAN_API_KEY || "",
    neoxr: process.env.NEOXR_API_KEY || "",
    fgsi: process.env.FGSI_API_KEY || "",
    google: process.env.GOOGLE_API_KEY || "",
    groq: process.env.GROQ_API_KEY || "",
    betabotz: process.env.BETABOTZ_API_KEY || "",
    covenant: process.env.COVENANT_API_KEY || "",
    onlym: process.env.ONLYM_API_KEY || "",
    obscura: process.env.OBSCURA_API_KEY || "",
    firefly: process.env.FIREFLY_API_KEY || "",
    cuki: process.env.CUKI_API_KEY || "",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function isOwner(number) {
  if (!number) return false;
  const cleanNumber = number.split(":")[0].replace(/[^0-9]/g, "");
  if (!cleanNumber) return false;

  if (config.bot?.number) {
    const botNum = config.bot.number.replace(/[^0-9]/g, "");
    if (
      botNum &&
      (cleanNumber.includes(botNum) || botNum.includes(cleanNumber))
    )
      return true;
  }

  try {
    const db = getDatabase();

    const configuredOwners = [
      ...(Array.isArray(config.owner?.number) ? config.owner.number : []),
      ...(Array.isArray(config.owner?.ids) ? config.owner.ids : []),
    ];
    const match = configuredOwners.some((own) => {
      const c = String(own).replace(/[^0-9]/g, "");
      return (
        c &&
        (cleanNumber === c ||
          cleanNumber.endsWith(c) ||
          c.endsWith(cleanNumber))
      );
    });
    if (match) return true;

    if (db?.data && Array.isArray(db.data.owner)) {
      const match = db.data.owner.some((own) => {
        const c = String(own).replace(/[^0-9]/g, "");
        return (
          c &&
          (cleanNumber === c ||
            cleanNumber.endsWith(c) ||
            c.endsWith(cleanNumber))
        );
      });
      if (match) return true;
    }
    if (db) {
      const definedOwner = db.setting("ownerNumbers");
      if (Array.isArray(definedOwner)) {
        const match = definedOwner.some((own) => {
          const c = String(own).replace(/[^0-9]/g, "");
          return (
            c &&
            (cleanNumber === c ||
              cleanNumber.endsWith(c) ||
              c.endsWith(cleanNumber))
          );
        });
        if (match) return true;
      }
    }

    return false;
  } catch {
    return false;
  }
}

function isPremium(number) {
  if (!number) return false;
  if (isOwner(number)) return true;
  if (isPartner(number)) return true;

  const cleanNumber = number
    .split(":")[0]
    .split("@")[0]
    .replace(/[^0-9]/g, "");
  const premiumList = config.premiumUsers || [];

  const inConfig = premiumList.some((premium) => {
    if (!premium) return false;
    const cleanPremium = premium
      .split(":")[0]
      .split("@")[0]
      .replace(/[^0-9]/g, "");
    return (
      cleanNumber === cleanPremium ||
      cleanNumber.endsWith(cleanPremium) ||
      cleanPremium.endsWith(cleanNumber)
    );
  });

  if (inConfig) return true;

  try {
    if (ownerPremiumDb && ownerPremiumDb.isPremium(cleanNumber)) return true;
  } catch { }

  try {
    const db = getDatabase();
    if (db && db.data && Array.isArray(db.data.premium)) {
      const now = Date.now();
      const foundIndex = db.data.premium.findIndex((p) => {
        if (typeof p === "string") return p === cleanNumber;
        if (p.id) return p.id === cleanNumber;
        return false;
      });

      if (foundIndex !== -1) {
        const found = db.data.premium[foundIndex];
        if (typeof found === "string") return true;

        const expireTime =
          found.expired ||
          (found.expiredAt ? new Date(found.expiredAt).getTime() : 0);
        if (expireTime && expireTime < now) {
          db.data.premium.splice(foundIndex, 1);
          const jid = cleanNumber + "@s.whatsapp.net";
          const user = db.getUser(jid);
          if (user) {
            user.isPremium = false;
            db.setUser(jid, user);
          }
          db.save();
          return false;
        }
        return true;
      }
    }
    if (db) {
      const savedPremium = db.setting("premiumUsers") || [];
      const inDb = savedPremium.some((premium) => {
        if (!premium) return false;
        const cleanPremium = premium
          .split(":")[0]
          .split("@")[0]
          .replace(/[^0-9]/g, "");
        return (
          cleanNumber === cleanPremium ||
          cleanNumber.endsWith(cleanPremium) ||
          cleanPremium.endsWith(cleanNumber)
        );
      });
      if (inDb) return true;
    }
  } catch { }

  return false;
}

function isPartner(number) {
  if (!number) return false;
  if (isOwner(number)) return true;

  const cleanNumber = number
    .split(":")[0]
    .split("@")[0]
    .replace(/[^0-9]/g, "");
  const partnerList = config.partnerUsers || [];

  const inConfig = partnerList.some((partner) => {
    if (!partner) return false;
    const cleanPartner = partner
      .split(":")[0]
      .split("@")[0]
      .replace(/[^0-9]/g, "");
    return (
      cleanNumber === cleanPartner ||
      cleanNumber.endsWith(cleanPartner) ||
      cleanPartner.endsWith(cleanNumber)
    );
  });

  if (inConfig) return true;

  try {
    if (ownerPremiumDb && ownerPremiumDb.isPartner(cleanNumber)) return true;
  } catch { }

  try {
    const db = getDatabase();
    if (db && db.data && Array.isArray(db.data.partner)) {
      const now = Date.now();
      const foundIndex = db.data.partner.findIndex((p) => {
        if (typeof p === "string") return p === cleanNumber;
        if (p.id) return p.id === cleanNumber;
        return false;
      });

      if (foundIndex !== -1) {
        const found = db.data.partner[foundIndex];
        if (typeof found === "string") return true;

        const expireTime =
          found.expired ||
          (found.expiredAt ? new Date(found.expiredAt).getTime() : 0);
        if (expireTime && expireTime < now) {
          db.data.partner.splice(foundIndex, 1);
          db.save();
          return false;
        }
        return true;
      }
    }
  } catch { }

  return false;
}

function isBanned(number) {
  if (!number) return false;
  if (isOwner(number)) return false;

  const cleanNumber = number
    .split(":")[0]
    .split("@")[0]
    .replace(/[^0-9]/g, "");

  let bannedList = [];
  try {
    const db = getDatabase();
    if (db) {
      bannedList = db.setting("bannedUsers") || [];
      config.bannedUsers = bannedList;
    }
  } catch { }

  return bannedList.some((banned) => {
    const cleanBanned = String(banned)
      .split(":")[0]
      .split("@")[0]
      .replace(/[^0-9]/g, "");
    return (
      cleanNumber === cleanBanned ||
      cleanNumber.endsWith(cleanBanned) ||
      cleanBanned.endsWith(cleanNumber)
    );
  });
}

function setBotNumber(number) {
  if (number) config.bot.number = number.replace(/[^0-9]/g, "");
}

function isSelf(number) {
  if (!number || !config.bot.number) return false;
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const botNumber = config.bot.number.replace(/[^0-9]/g, "");
  return cleanNumber.includes(botNumber) || botNumber.includes(cleanNumber);
}

function getOwnerName(number) {
  if (!number) return config.owner?.name || "Owner";
  const cleanNumber = String(number).replace(/[^0-9]/g, "");
  try {
    const db = getDatabase();
    const nameMap = db.setting("ownerNames") || {};
    if (nameMap[cleanNumber]) return nameMap[cleanNumber];
  } catch { }
  if (config.owner?.number) {
    const isMainOwner = config.owner.number.some((own) => {
      const c = own.replace(/[^0-9]/g, "");
      return (
        c &&
        (cleanNumber === c ||
          cleanNumber.endsWith(c) ||
          c.endsWith(cleanNumber))
      );
    });
    if (isMainOwner) return config.owner?.name || "Owner";
  }
  return "Owner";
}

function getConfig() {
  return config;
}

config.isOwner = isOwner;
config.isPremium = isPremium;
config.isPartner = isPartner;
config.isBanned = isBanned;
config.setBotNumber = setBotNumber;
config.isSelf = isSelf;
config.getOwnerName = getOwnerName;

export default config;
export {
  config,
  getConfig,
  isOwner,
  isPartner,
  isPremium,
  isBanned,
  setBotNumber,
  isSelf,
  getOwnerName,
};
