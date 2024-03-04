import { CommandsRecord } from '../handlers/command.handler'
import { CommandReplyCallback } from '../types/command.type'

export default function Reply<T extends CommandReplyCallback>(id: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		CommandsRecord[id] = target[propertyKey] as T
	}
}
