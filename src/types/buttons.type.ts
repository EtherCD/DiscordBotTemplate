import { ButtonInteraction } from 'discord.js'

export type ButtonReplyCallback = (
	interaction: ButtonInteraction
) => Promise<void>

export type Buttons = Record<string, ButtonReplyCallback>
