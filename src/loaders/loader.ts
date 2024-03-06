import { SlashCommands } from '../types/interaction.type'
import FilesLoader from './files.loader'

export default class Loader {
  static commands: SlashCommands = []
  static loadedCommands: Array<unknown> = []

  static async load() {
    this.loadedCommands = FilesLoader.loadInteractions()
  }
}
