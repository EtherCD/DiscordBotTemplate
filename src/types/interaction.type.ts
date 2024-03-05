import { Interaction, SlashCommandBuilder } from 'discord.js'

export type SlashCommands = Array<SlashCommandBuilder>

export type InteractionCallBack = (interaction: Interaction) => Promise<void>

export type InteractionCheckCallBack = (interaction: Interaction) => boolean

export type Interactions = Array<
	[InteractionCheckCallBack, InteractionCallBack]
>
