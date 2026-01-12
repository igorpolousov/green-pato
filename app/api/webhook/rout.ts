import { Bot, webhookCallback } from "grammy";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error("TELEGRAM_BOT_TOKEN is unset");

const bot = new Bot(token);

// Define bot behavior
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running in 2026."));
bot.on("message", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// Export the POST handler for the webhook
export const POST = webhookCallback(bot, "std/http");