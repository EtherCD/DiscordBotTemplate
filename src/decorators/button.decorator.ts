import { ButtonsRecord } from '../handlers/button.handler'
import { ButtonReplyCallback } from '../types/buttons.type'

export default function ButtonReply<T extends ButtonReplyCallback>(id: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		ButtonsRecord[id] = target[propertyKey] as T
	}
}
