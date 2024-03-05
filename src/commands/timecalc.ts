import {
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	SlashCommandIntegerOption,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'

@Bind(
	new SlashCommandBuilder()
		.setName('timecalc')
		.setDescription('Calculating of time')
		.addIntegerOption(
			new SlashCommandIntegerOption()
				.setName('seconds')
				.setRequired(true)
				.setDescription('anything')
		) as SlashCommandBuilder
)
export default class TimeCalc {
	@Reply('timecalc')
	async reply(i: ChatInputCommandInteraction) {
		const a = i.options.getInteger('seconds', true)
		await i.reply(
			`'Seconds: ${Math.floor((Date.now() - a) / 1000) % 60}\nMinutes: ${
				Math.floor((Date.now() - a) / 1000) % 600
			}`
		)
	}
}
