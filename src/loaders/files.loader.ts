import paths from '../utils/paths.util'
import path from 'path'
import fs from 'fs'

export default class FilesLoader {
  static loadInteractions = () =>
    fs
      .readdirSync(paths.commands)
      .filter(
        e =>
          e.split('.')[1] === 'ts' ||
          e.split('.')[1] === 'js',
      )
      .map(file => {
        const fileName = path.resolve(paths.commands, file)
        const classModule = require(fileName)
        const className = Object.keys(classModule)[0]
        if (className) {
          const ClassConstructor = classModule[className]
          return new ClassConstructor()
        }
      })
}
