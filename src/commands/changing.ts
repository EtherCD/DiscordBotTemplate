import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/reply.decorator'
import ButtonReply from '../decorators/button.decorator'

@Bind(
  new SlashCommandBuilder()
    .setName('changing')
    .setDescription('Testing changes to a sent message'),
)
export class Changing {
  @Reply('changing')
  async reply(interaction: ChatInputCommandInteraction) {
    const button = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId('change')
        .setLabel('Change message')
        .setStyle(ButtonStyle.Primary)
        .setEmoji('👍'),
    ) as ActionRowBuilder<ButtonBuilder>

    await interaction.reply({
      content: 'Hey...',
      components: [button],
    })
  }

  @ButtonReply('change')
  async nextpage(interaction: ButtonInteraction) {
    await interaction.update({
      content: 'Changed',
      components: [
        // To remove components, just put here empty array
      ],
    })
  }
}
