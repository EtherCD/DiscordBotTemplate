import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonInteraction,
	ButtonStyle,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'
import ButtonReply from '../decorators/button.decorator'

@Bind(
	new SlashCommandBuilder()
		.setName('changing')
		.setDescription('Just testing changing of sended message')
)
export class Changing {
	@Reply('changing')
	async reply(interaction: ChatInputCommandInteraction) {
		await interaction.reply({
			content: 'Hey...',
			components: [
				//@ts-ignore
				new ActionRowBuilder().setComponents(
					new ButtonBuilder()
						.setCustomId('change')
						.setLabel('Change message')
						.setStyle(ButtonStyle.Primary)
						.setEmoji('👍')
				),
			],
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
