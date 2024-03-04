import path from 'path'

const RootPath: string = path.join(__dirname, '../../')

const paths = {
	commands: RootPath + '/src/commands/',
	handlers: RootPath + '/src/handlers/',
}

export default paths
