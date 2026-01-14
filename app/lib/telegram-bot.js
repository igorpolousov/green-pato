const { Telegraf, Markup } = require('telegraf')
const text = require('./const') // Убедитесь что этот файл существует

let config = {
    "admin": process.env.TELEGRAM_ADMIN_ID || 573562828
};

let replyText = {
    "helloAdmin": "Привет админ, ждем сообщения от пользователей",
    "helloUser": "Приветствую, отправьте мне сообщение. Постараюсь ответить в ближайшее время.",
    "replyWrong": "Для ответа пользователю используйте функцию Ответить/Reply."
};

let isAdmin = (userId) => {
    return userId == config.admin;
};

let forwardToAdmin = (ctx) => {
    if (isAdmin(ctx.message.from.id)) {
        ctx.reply(replyText.replyWrong);
    } else {
        ctx.forwardMessage(config.admin, ctx.from.id, ctx.message.id);
    }
};

// Инициализируем бота с использованием webhook
const bot = new Telegraf(process.env.BOT_TOKEN)

// Конфигурация вебхука
const secretPath = `/telegraf/${bot.secretPathComponent()}`

// Основная логика бота (как у вас в коде)
bot.start((ctx) => ctx.reply(`Добро пожаловать ${isAdmin(ctx.message.from.id) ? replyText.helloAdmin : ctx.message.from.first_name}! Какой вопрос вас интересует?`, getMainMenu()))
bot.help((ctx) => ctx.reply(text.commands))

bot.command('ask', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Вопросы</b>', Markup.inlineKeyboard([
            [Markup.button.callback('Аренда не завершилась', 'btn_1')],
            [Markup.button.callback('Депозит не вернулся', 'btn_2')],
            [Markup.button.callback('Тарифы и условия аренды(Частые вопросы)', 'btn_3')],
            [Markup.button.callback('Сотрудничество', 'btn_4')],
            [Markup.button.callback('Аккумулятор не заряжает', 'btn_5')],
            [Markup.button.callback('Аккумулятор не вышел из слота', 'btn_6')],
            [Markup.button.callback('Аккумулятор увезен/утерян/украден', 'btn_7')]
        ]))
    } catch(e) {
        console.error(e)
    }
})

bot.on('message', (ctx) => {
    if (ctx.message.reply_to_message
        && ctx.message.reply_to_message.forward_from
        && isAdmin(ctx.message.from.id)) {
        ctx.telegram.sendCopy(ctx.message.reply_to_message.forward_from.id, ctx.message);
    } else {
        forwardToAdmin(ctx);
    }
});

function getMainMenu() {
    return Markup.inlineKeyboard([
        [Markup.button.callback('Аренда не завершилась', 'btn_1')],
        [Markup.button.callback('Депозит не вернулся', 'btn_2')],
        [Markup.button.callback('Тарифы и условия аренды(Частые вопросы)', 'btn_3')],
        [Markup.button.callback('Сотрудничество', 'btn_4')],
        [Markup.button.callback('Аккумулятор не заряжает', 'btn_5')],
        [Markup.button.callback('Аккумулятор не вышел из слота', 'btn_6')],
        [Markup.button.callback('Аккумулятор увезен/утерян/украден', 'btn_7')]
    ])
}

function addActionBot(name, src, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            }) 
        } catch (e) {
            console.error(e)
        }
    })
}

addActionBot('btn_1', false, text.btn_1Text)
addActionBot('btn_2', false, text.btn_2Text)
addActionBot('btn_3', false, text.btn_3Text)

// Экспортируем бота и secretPath
module.exports = { bot, secretPath }