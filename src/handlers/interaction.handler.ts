import { Interaction, InteractionType } from 'discord.js'
import CommandHandler from './command.handler'
import SelectHandler from './select.handler'
import ModalHandler from './modal.handler'
import ButtonHandler from './button.handler'

export default class InteractionHandler {
	static handle(interaction: Interaction) {
		if (interaction.isChatInputCommand()) CommandHandler.handle(interaction)
		if (interaction.isStringSelectMenu()) SelectHandler.handle(interaction)
		if (interaction.isModalSubmit()) ModalHandler.handle(interaction)
		if (interaction.isButton()) ButtonHandler.handle(interaction)
	}
}
