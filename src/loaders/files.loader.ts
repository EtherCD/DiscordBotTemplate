import paths from '../utils/paths.util'
import path from 'path'
import fs from 'fs'

export default class FilesLoader {
	static loadInteractions = () =>
		fs
			.readdirSync(paths.commands)
			.filter(e => e.split('.')[1] === 'ts')
			.map(file => {
				const fileName = path.resolve(paths.commands, file)
				const classModule = require(fileName)
				let className = Object.keys(classModule)[0]
				if (className) {
					const ClassConstructor = classModule[className]
					return new ClassConstructor()
				}
			})
}
