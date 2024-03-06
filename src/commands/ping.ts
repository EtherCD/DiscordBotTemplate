import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js'
import Reply from '../decorators/reply.decorator'
import Bind from '../decorators/bind.decorator'

@Bind(
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Just a ping!'),
)
export class Ping {
  @Reply('ping')
  async reply(interaction: ChatInputCommandInteraction) {
    await interaction.reply(
      `<@${interaction.user.id}> pong!`,
    )
  }
}
