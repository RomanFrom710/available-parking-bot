const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const allowedIdsList = process.env.TELEGRAM_BOT_ALLOWED_IDS;
if (!token || !allowedIdsList) {
  throw new Error('Required env variables cannot be found');
}

const allowedIds = allowedIdsList.split(',');

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/getpic/, (msg) => {
  if (!allowedIds.includes(msg.from.id.toString())) {
    bot.sendMessage(msg.chat.id, 'You are not allowed!');
    return;
  }

  bot.sendMessage(msg.chat.id, 'hi!');
});
