import config from '../../config.js'
import path from 'path'
import fs from 'fs'
import { AIRich } from '../../src/lib/ourin-builder.js'
const pluginConfig = {
    name: 'tqto',
    alias: ['thanksto', 'credits', 'kredit'],
    category: 'main',
    description: 'عرض حقوق ومعلومات تطوير البوت',
    usage: '.tqto',
    example: '.tqto',
    isOwner: false,
    isPremium: false,
    isGroup: false,
    isPrivate: false,
    cooldown: 5,
    energi: 0,
    isEnabled: true
}

async function handler(m, { sock }) {
    const botName = config.bot?.name || '𝐉𝐀𝐍 𝐌𝐃 𓅃'
    const version = config.bot?.version || '3.3'
    const developer = config.bot?.developer || '𝑭𝑶𝑹𝑨1𝑶𝑵'
    const channelName = config.saluran?.name || '𝑭𝒍𝒂𝒔𝒉𝒃𝒂𝒄𝒌'

    const credits = [
        { name: developer, role: 'المطوّر والمسؤول عن نسخة JAN MD — 01515063273', icon: '👨‍💻' },
        { name: channelName, role: 'القناة الرسمية للبوت', icon: '📢' },
        { name: 'مجتمع البرمجيات مفتوحة المصدر', role: 'شكرًا لمطوّري المكتبات والأدوات المستخدمة', icon: '🌐' },
    ]

    const creditLines = credits
        .map((credit, index) => `*${index + 1}.* *${credit.name}* — ${credit.icon} ${credit.role}`)
        .join('\n')

    await m.reply(`💜 *حقوق وتطوير ${botName}*

> الإصدار: *${version}*

${creditLines}`)
}

export { pluginConfig as config, handler }