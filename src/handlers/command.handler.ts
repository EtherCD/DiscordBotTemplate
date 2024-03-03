import { ChatInputCommandInteraction } from 'discord.js'
import { Commands } from '../types/command.type'

export default class CommandHandler {
	static commands: Commands = {}

	static handle(interaction: ChatInputCommandInteraction) {
		const names = Object.keys(this.commands)
		for (const i in names) {
			const name = names[i]
			if (interaction.commandName === name) this.commands[name](interaction)
		}
	}
}
