import {
	ChatInputCommandInteraction,
	EmbedBuilder,
	SlashCommandBuilder,
	SlashCommandUserOption,
} from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'

@Bind(
	new SlashCommandBuilder()
		.setName('withoptions')
		.setDescription('Command with options')
		.addUserOption(
			new SlashCommandUserOption()
				.setName('user')
				.setDescription('Select a user')
		) as SlashCommandBuilder
)
export default class WithOptions {
	@Reply('withoptions')
	async reply(interaction: ChatInputCommandInteraction) {
		let user = interaction.options.getUser('user', false)
		user = user ? user : interaction.user

		const createdAt = Math.floor(user.createdAt.getTime() / 1000)

		const embed = new EmbedBuilder()
			.setTitle(user.displayName)
			.setDescription('Here info of this user')
			.setColor('DarkerGrey')
			.addFields([
				{
					name: 'Joined to discord',
					value: `<t:${createdAt}:f>\n<t:${createdAt}:R>`,
				},
			])
			.setImage(user.avatarURL())

		await interaction.reply({
			embeds: [embed],
		})
	}
}
