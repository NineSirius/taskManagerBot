import express from 'express'
import { PORT, TOKEN } from './config.js'
import Telegraf from 'telegraf'
import session from 'telegraf/session.js'
import { getMainMenu, yesNoKeyboard } from './keyboards.js'
import { TokyoGhoul } from './anime/tokyoghoul/index.js'
// import { addName, getMyName } from './db.js'

const app = express()
const bot = new Telegraf(TOKEN)

bot.use(session())

bot.start((ctx) => {
    ctx.replyWithHTML(
        'Приветсвую в <b>AniBam</b>\n\n' +
            'Я вторая версия бота Anibam, который предназначен для просмотра аниме. Данный бот имеет более удобные функции для просмотра аниме\n\nТеперь у нас есть поиск. Введите <b>Токийский гуль</b> и увидите',
        getMainMenu(),
    )
})

bot.hears('Токийский гуль', (ctx) => {
    ctx.replyWithHTML('Токийский гуль', TokyoGhoul())
})

bot.action(['tokyougoul_1s'], (ctx) => {
    if (ctx.callbackQuery.data === 'tokyougoul_1s') {
        ctx.replyWithVideo('https://t.me/tokyo_ghoulonline/17768')  
    }
})

bot.on('text', (ctx) => {
    ctx.replyWithHTML(`Извините, такой команды пока что нету :(`)
})
bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))
