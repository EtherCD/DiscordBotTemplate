import { AnySelectMenuInteraction } from 'discord.js'

export type SelectReplyCallback = (
  interaction: AnySelectMenuInteraction,
) => Promise<void>

export type Selects = Record<string, SelectReplyCallback>
