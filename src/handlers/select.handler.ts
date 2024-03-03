import { StringSelectMenuInteraction } from 'discord.js'
import { Selects } from '../types/select.type'

export default class SelectHandler {
	static selects: Selects = {}

	static handle(interaction: StringSelectMenuInteraction) {
		const ids = Object.keys(this.selects)
		for (const i in ids) {
			const id = ids[i]
			if (interaction.customId === id) this.selects[id](interaction)
		}
	}
}
