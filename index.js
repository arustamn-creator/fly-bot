require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { registerFlightCommands } = require('./flights');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
  polling: true
});

bot.on('polling_error', (err) => {
  console.error(`[FlyBot] Ошибка поллинга: ${err.message}`);
});

registerFlightCommands(bot);

console.log('✅ Fly Bot запущен и ожидает сообщения...');
