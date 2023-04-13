import Markup from 'telegraf/markup.js'

export function TokyoGhoul() {
    return Markup.inlineKeyboard(
        [
            Markup.callbackButton('1 сезон', 'tokyougoul_1s'),
            // Markup.callbackButton('2 сезон', 'tokyougoul_1s'),
        ],
        { columns: 2 },
    ).extra()
}
