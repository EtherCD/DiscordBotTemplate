import {
	ChatInputCommandInteraction,
	ModalSubmitInteraction,
	SlashCommandBuilder,
	TextInputStyle,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'
import {
	ActionRowBuilder,
	ModalBuilder,
	TextInputBuilder,
} from '@discordjs/builders'
import ModalReply from '../decorators/modal.decorator'

@Bind(
	new SlashCommandBuilder()
		.setName('modal')
		.setDescription('Just testing modal window')
)
export class Modal {
	@Reply('modal')
	async reply(interaction: ChatInputCommandInteraction) {
		const modal = new ModalBuilder()
			.setTitle('Create stream')
			.setCustomId('modal')
			.setComponents(
				new ActionRowBuilder().setComponents(
					new TextInputBuilder()
						.setLabel('Name')
						.setCustomId('name')
						.setStyle(TextInputStyle.Short)
				) as ActionRowBuilder<TextInputBuilder>,
				new ActionRowBuilder().setComponents(
					new TextInputBuilder()
						.setLabel('Date')
						.setCustomId('date')
						.setStyle(TextInputStyle.Short)
				) as ActionRowBuilder<TextInputBuilder>
			)
		await interaction.showModal(modal)
	}

	@ModalReply('modal')
	async modalReply(interaction: ModalSubmitInteraction) {
		await interaction.reply(
			`Yey!\n Here stream name: ${interaction.fields.getTextInputValue(
				'name'
			)} \n Here stream date: ${interaction.fields.getTextInputValue('date')}`
		)
	}
}
