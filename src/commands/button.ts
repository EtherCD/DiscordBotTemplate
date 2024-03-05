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
		.setDescription('Create button on message')
)
export class Button {
	@Reply('button')
	async reply(interaction: ChatInputCommandInteraction) {
		const button = new ActionRowBuilder().setComponents(
			new ButtonBuilder()
				.setCustomId('testbutton')
				.setLabel('Test button')
				.setStyle(ButtonStyle.Success)
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
