import { SelectsRecord } from '../handlers/select.handler'
import { SelectReplyCallback } from '../types/select.type'

export default function SelectReply<T extends SelectReplyCallback>(id: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		SelectsRecord[id] = target[propertyKey] as T
	}
}
