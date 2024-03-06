import { Client, IntentsBitField } from 'discord.js'
import { config } from 'dotenv'
import { init } from './rest'
import InteractionHandler from './handlers/interaction.handler'

config()

const client = new Client({
  intents: [IntentsBitField.Flags.GuildMessages],
})

init()

client.on('ready', context => {
  console.log(
    `The application ${context.user.username} is started.`,
  )
})

client.on('interactionCreate', InteractionHandler.handle)

client.login(process.env.TOKEN)
