<div align="center"> 
  <img alt="Icon" src="./repo/dbt.svg" width="160" />

  <h1>DiscordBotTemplate</h1>
  <p>My first template for working with discord.js</p>

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EtherCD/DiscordBotTemplate?style=flat-square">
  <img alt="GitHub License" src="https://img.shields.io/github/license/EtherCD/DiscordBotTemplate?style=flat-square&color=white">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EtherCD/DiscordBotTemplate?display_timestamp=author&style=flat-square&color=black">

</div>

# Package commands

> dev - staring project wtih nodemon

> build - builds the project

> start - starts the builded project

# Starting

> Create .env file:

```env
TOKEN=Your discord bot token
CLIENT_ID=Your discord aplication client id
```

# Guide

> Standard command file structure

```ts
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js'
import Bind from '../decorators/bind.decorator'
import Reply from '../decorators/command.decorator'

// Adds command to command array
@Bind(
	new SlashCommandBuilder()
		.setName('mycommand') // Required field
		.setDescription('My first command') // Required field
)
export class MyCommand {
	// Registers the response to command execution
	@Reply('mycommand')
	async reply(interaction: ChatInputCommandInteraction) {
		await interaction.reply({ content: 'Hello World!' })
	}
}
```

> Response to other types of interactions

```ts
// In command class
class MyCommand {
	@ButtonReply('') // customId of button
	async buttonReply(interaction: ButtonInteraction) {
		await interaction.reply('Button click response')
	}

	@ModalReply('') // customId of modal window
	async modalReply(interaction: ModalSubmitInteraction) {
		await interaction.reply('Response on confirm of modal window')
	}

	@SelectReply('') // customId of select
	async selectReply(interaction: AnySelectMenuInteraction) {
		await interaction.reply('Select response')
	}
}
```
