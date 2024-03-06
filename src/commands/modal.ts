import {
  ChatInputCommandInteraction,
  ModalSubmitInteraction,
  SlashCommandBuilder,
  TextInputStyle,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/reply.decorator'
import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
} from '@discordjs/builders'
import ModalReply from '../decorators/modal.decorator'

@Bind(
  new SlashCommandBuilder()
    .setName('modal')
    .setDescription('Create modal window'),
)
export class Modal {
  @Reply('modal')
  async reply(interaction: ChatInputCommandInteraction) {
    const modal = new ModalBuilder()
      .setTitle('Modal Title')
      .setCustomId('modal')
      .setComponents(
        new ActionRowBuilder().setComponents(
          new TextInputBuilder()
            .setLabel('First Input')
            .setCustomId('finput')
            .setStyle(TextInputStyle.Short),
        ) as ActionRowBuilder<TextInputBuilder>,
        new ActionRowBuilder().setComponents(
          new TextInputBuilder()
            .setLabel('Second Input')
            .setCustomId('sinput')
            .setStyle(TextInputStyle.Short),
        ) as ActionRowBuilder<TextInputBuilder>,
      )
    await interaction.showModal(modal)
  }

  @ModalReply('modal')
  async modalReply(interaction: ModalSubmitInteraction) {
    const get = (s: string) =>
      interaction.fields.getTextInputValue(s)
    await interaction.reply(
      `Hey!\n` +
        `First input value: ${get('finput')}\n` +
        `Second input value: ${get('sinput')}`,
    )
  }
}
