import { ButtonInteraction } from 'discord.js'
import { Buttons } from '../types/buttons.type'

export default class ButtonHandler {
	static buttons: Buttons = {}

	static handle(interaction: ButtonInteraction) {
		const ids = Object.keys(this.buttons)
		for (const i in ids) {
			const id = ids[i]
			if (interaction.customId === id) this.buttons[id](interaction)
		}
	}
}
