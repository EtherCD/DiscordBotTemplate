import {
	ChatInputCommandInteraction,
	StringSelectMenuInteraction,
} from 'discord.js'

export type SelectReplyCallback = (
	interaction: StringSelectMenuInteraction
) => Promise<void>

export type Selects = Record<string, SelectReplyCallback>
