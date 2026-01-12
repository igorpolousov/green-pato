import { Bot, webhookCallback } from 'grammy'


const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error('TELEGRAM_BOT_TOKEN is unset');

const bot = new Bot(token);

bot.command('start', (ctx) => ctx.reply('Привет! Бот на Next.js 2026 работает.'));
bot.on('message', (ctx) => ctx.reply('Вы написали: ' + ctx.message.text));

export const POST = webhookCallback(bot, 'std/http');