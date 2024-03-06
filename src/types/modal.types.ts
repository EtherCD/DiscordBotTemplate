import { ModalSubmitInteraction } from 'discord.js'

export type ModalReplyCallback = (
  interaction: ModalSubmitInteraction,
) => Promise<void>

export type Modals = Record<string, ModalReplyCallback>
