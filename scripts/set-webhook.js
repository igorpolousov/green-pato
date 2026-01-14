require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
const WEBHOOK_URL = process.env.NEXT_PUBLIC_APP_URL + '/api/bot'

async function setWebhook() {
    try {
        await bot.telegram.setWebhook(WEBHOOK_URL)
        console.log('Webhook установлен на:', WEBHOOK_URL)
        
        const webhookInfo = await bot.telegram.getWebhookInfo()
        console.log('Webhook info:', webhookInfo)
    } catch (error) {
        console.error('Ошибка установки вебхука:', error)
    }
}

setWebhook()