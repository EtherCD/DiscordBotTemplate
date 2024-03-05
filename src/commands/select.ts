import {
	ActionRowBuilder,
	AnySelectMenuInteraction,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	StringSelectMenuBuilder,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'
import SelectReply from '../decorators/select.decorator'

@Bind(
	new SlashCommandBuilder()
		.setName('select')
		.setDescription('Create select menu')
)
export class Select {
	@Reply('select')
	async reply(integration: ChatInputCommandInteraction) {
		const actionRowComponent = new ActionRowBuilder().setComponents(
			new StringSelectMenuBuilder().setCustomId('select').setOptions([
				{
					label: 'Coca-Cola',
					value: 'cocacola',
				},
				{ label: 'Fanta', value: 'fanta' },
				{
					label: 'Sprite',
					value: 'sprite',
				},
			])
		) as ActionRowBuilder<StringSelectMenuBuilder>
		await integration.reply({
			content: 'Please select your favorite drink',
			components: [actionRowComponent],
		})
	}

	@SelectReply('select')
	async selectReply(interaction: AnySelectMenuInteraction) {
		await interaction.reply('Tanks for your answer!')
	}
}
