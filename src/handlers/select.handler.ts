import { AnySelectMenuInteraction } from 'discord.js'
import { Selects } from '../types/select.type'
import Interaction from '../decorators/interaction.decorator'

export const SelectsRecord: Selects = {}

export default class SelectHandler {
	@Interaction(i => i.isAnySelectMenu())
	static async handle(interaction: AnySelectMenuInteraction) {
		const ids = Object.keys(SelectsRecord)
		for (const i in ids) {
			const id = ids[i]
			if (interaction.customId === id) {
				await SelectsRecord[id](interaction)
				return
			}
		}
	}
}
