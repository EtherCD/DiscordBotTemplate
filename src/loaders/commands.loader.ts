import { SlashCommands } from '../types/interaction.type'
import FilesLoader from './files.loader'

export default class CommandsLoader {
	static commands: SlashCommands = []
	static loadedCommands: Array<Object> = []

	static async load() {
		this.loadedCommands = FilesLoader.loadInteractions()
	}
}
