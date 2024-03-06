import { ModalsRecord } from '../handlers/modal.handler'
import { ClassWithCallBack } from '../types/interaction.type'
import { ModalReplyCallback } from '../types/modal.types'

export default function ModalReply<
  T extends ModalReplyCallback,
>(id: string) {
  return function (
    target: ClassWithCallBack<T>,
    propertyKey: keyof ClassWithCallBack<T>,
  ) {
    ModalsRecord[id] = target[propertyKey] as T
  }
}
