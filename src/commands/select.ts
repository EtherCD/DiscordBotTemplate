import {
	ActionRowBuilder,
	ChatInputCommandInteraction,
	SelectMenuBuilder,
	SlashCommandBuilder,
	StringSelectMenuBuilder,
	StringSelectMenuInteraction,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'
import SelectReply from '../decorators/select.decorator'

@Bind(
	new SlashCommandBuilder()
		.setName('select')
		.setDescription('Just testing select')
)
export class Select {
	@Reply('select')
	async reply(integration: ChatInputCommandInteraction) {
		//@ts-ignore
		const actionRowComponent: ActionRowBuilder<StringSelectMenuBuilder> =
			new ActionRowBuilder().setComponents(
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
			)
		await integration.reply({
			content: 'Please select your favorite drink',
			components: [actionRowComponent],
		})
	}

	@SelectReply('select')
	async selectReply(
		interaction: StringSelectMenuInteraction,
		metadata: string
	) {
		await interaction.reply('Tanks for your answer!')
	}
}
