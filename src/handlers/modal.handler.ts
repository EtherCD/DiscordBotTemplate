import { ModalSubmitInteraction } from 'discord.js'
import { Modals } from '../types/modal.types'
import Interaction from '../decorators/interaction.decorator'

export const ModalsRecord: Modals = {}

export default class ModalHandler {
	@Interaction(i => i.isModalSubmit())
	static async handle(interaction: ModalSubmitInteraction) {
		const ids = Object.keys(ModalsRecord)
		for (const i in ids) {
			const id = ids[i]
			if (interaction.customId === id) {
				await ModalsRecord[id](interaction)
				return
			}
		}
	}
}
