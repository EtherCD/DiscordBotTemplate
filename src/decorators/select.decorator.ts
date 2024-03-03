import SelectHandler from '../handlers/select.handler'
import { SelectReplyCallback } from '../types/select.type'

export default function SelectReply<T extends SelectReplyCallback>(id: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		SelectHandler.selects[id] = target[propertyKey] as T
	}
}
