import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  ChatInputCommandInteraction,
  Interaction,
  SlashCommandBuilder,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/reply.decorator'
import ButtonReply from '../decorators/button.decorator'

@Bind(
  new SlashCommandBuilder()
    .setName('button')
    .setDescription('Sends message with button'),
)
export class Button {
  @Reply('button')
  async reply(interaction: ChatInputCommandInteraction) {
    const button = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId('testbutton')
        .setLabel('Test button')
        .setStyle(ButtonStyle.Success),
    ) as ActionRowBuilder<ButtonBuilder>
    await interaction.reply({
      content: 'Click at buttons',
      components: [button],
    })
  }

  @ButtonReply('testbutton')
  async buttonReply(interaction: ButtonInteraction) {
    await interaction.reply('Button is working!!!')
  }
}
