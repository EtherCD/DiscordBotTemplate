import { SlashCommandBuilder } from 'discord.js'
import CommandsLoader from '../loaders/commands.loader'

export default function Bind<T>(builder: SlashCommandBuilder) {
	return function (target: any) {
		CommandsLoader.commands.push(builder)
	}
}
