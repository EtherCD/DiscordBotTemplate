import { REST, Routes } from 'discord.js'
import { config } from 'dotenv'
import InteractionsLoader from './loaders/loader'

config()

const rest = new REST({ version: '10' }).setToken(
  process.env.TOKEN ?? '',
)

export async function init() {
  InteractionsLoader.load()

  console.log('Registering commands')
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID ?? ''),
    {
      body: InteractionsLoader.commands,
    },
  )
  console.log('Slash commands were registered successfull')
}
