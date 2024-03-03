import ModalHandler from '../handlers/modal.handler'
import { ModalReplyCallback } from '../types/modal.types'

export default function ModalReply<T extends ModalReplyCallback>(id: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		ModalHandler.modals[id] = target[propertyKey] as T
	}
}
