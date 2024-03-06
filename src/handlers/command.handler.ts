import { ChatInputCommandInteraction } from 'discord.js'
import { Commands } from '../types/command.type'
import Interaction from '../decorators/interaction.decorator'

export const CommandsRecord: Commands = {}

export default class CommandHandler {
  @Interaction(i => i.isChatInputCommand())
  static async handle(
    interaction: ChatInputCommandInteraction,
  ) {
    const names = Object.keys(CommandsRecord)
    for (const i in names) {
      const name = names[i]
      if (interaction.commandName === name) {
        await CommandsRecord[name](interaction)
        return
      }
    }
  }
}
