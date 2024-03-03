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
		.setName('button')
		.setDescription('Just testing buttons')
)
export class Button {
	@Reply('button')
	async reply(interaction: ChatInputCommandInteraction) {
		await interaction.reply({
			content: 'Click at buttons',
			components: [
				//@ts-ignore
				new ActionRowBuilder().setComponents(
					new ButtonBuilder()
						.setCustomId('button1')
						.setLabel('Button 1')
						.setStyle(ButtonStyle.Success)
				),
			],
		})
	}

	@ButtonReply('button1')
	async buttonReply(interaction: ButtonInteraction) {
		await interaction.reply('Button is working!!!')
	}
}
