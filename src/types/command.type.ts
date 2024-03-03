import { ChatInputCommandInteraction } from 'discord.js'

export type CommandReplyCallback = (
	interaction: ChatInputCommandInteraction
) => Promise<void>

export type Commands = Record<string, CommandReplyCallback>
