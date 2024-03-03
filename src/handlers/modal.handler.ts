import { ModalSubmitInteraction } from 'discord.js'
import { Modals } from '../types/modal.types'

export default class ModalHandler {
	static modals: Modals = {}

	static handle(interaction: ModalSubmitInteraction) {
		const ids = Object.keys(this.modals)
		for (const i in ids) {
			const id = ids[i]
			if (interaction.customId === id) this.modals[id](interaction)
		}
	}
}
