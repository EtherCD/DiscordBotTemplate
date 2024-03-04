import { ModalsRecord } from '../handlers/modal.handler'
import { ModalReplyCallback } from '../types/modal.types'

export default function ModalReply<T extends ModalReplyCallback>(id: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		ModalsRecord[id] = target[propertyKey] as T
	}
}
