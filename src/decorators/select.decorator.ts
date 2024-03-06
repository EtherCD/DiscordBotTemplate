import { SelectsRecord } from '../handlers/select.handler'
import { ClassWithCallBack } from '../types/interaction.type'
import { SelectReplyCallback } from '../types/select.type'

export default function SelectReply<
  T extends SelectReplyCallback,
>(id: string) {
  return function (
    target: ClassWithCallBack<T>,
    propertyKey: keyof ClassWithCallBack<T>,
  ) {
    SelectsRecord[id] = target[propertyKey] as T
  }
}
