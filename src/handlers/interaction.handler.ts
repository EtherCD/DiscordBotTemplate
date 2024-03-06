import { Interaction, InteractionType } from 'discord.js'
import { Interactions } from '../types/interaction.type'

export const InteractionsArray: Interactions = []

export default class InteractionHandler {
  static handle(interaction: Interaction) {
    for (const i in InteractionsArray) {
      if (InteractionsArray[i][0](interaction)) {
        InteractionsArray[i][1](interaction)
        return
      }
    }
  }
}
