import { SlashCommandBuilder } from 'discord.js'
import CommandsLoader from '../loaders/loader'

export default function Bind(builder: SlashCommandBuilder) {
  return function (target: unknown) {
    if (builder.name.length === 0)
      throw new Error(
        `Bind Error: Builder must be with name`,
      )
    if (
      CommandsLoader.commands
        .map(v => v.name)
        .includes(builder.name)
    )
      throw new Error(
        `Bind Error: There is already a command with the same name`,
      )

    CommandsLoader.commands.push(builder)
  }
}
