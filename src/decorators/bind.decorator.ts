import { SlashCommandBuilder } from 'discord.js'
import CommandsLoader from '../loaders/loader'

export default function Bind(builder: SlashCommandBuilder) {
	return function (target: any) {
		CommandsLoader.commands.push(builder)
	}
}
