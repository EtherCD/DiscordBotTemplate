import { ButtonInteraction, InteractionType } from 'discord.js'
import { Buttons } from '../types/buttons.type'
import Interaction from '../decorators/interaction.decorator'

export const ButtonsRecord: Buttons = {}

export default class ButtonHandler {
	@Interaction(i => i.isButton())
	static async handle(interaction: ButtonInteraction) {
		const ids = Object.keys(ButtonsRecord)
		for (const i in ids) {
			const id = ids[i]
			if (interaction.customId === id) {
				await ButtonsRecord[id](interaction)
				return
			}
		}
	}
}
