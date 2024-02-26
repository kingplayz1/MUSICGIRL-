import { Client, GatewayIntentBits } from "discord.js";
import { Bot } from "./structs/Bot";

export const bot = new Bot(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages
    ]
  })
);

require("../server");

// const Eris = require("eris");
// const keep_alive = require('../keep_alive.js');

// // Replace TOKEN with your bot account's token
// const bot = new Eris(process.env.token);

// bot.on("error", (err) => {
//   console.error(err); // or your preferred logger
// });

// bot.connect(); // Get the bot to connect to Discord