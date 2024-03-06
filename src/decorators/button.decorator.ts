import { ButtonsRecord } from '../handlers/button.handler'
import { ButtonReplyCallback } from '../types/buttons.type'
import { ClassWithCallBack } from '../types/interaction.type'

export default function ButtonReply<
  T extends ButtonReplyCallback,
>(id: string) {
  return function (
    target: ClassWithCallBack<T>,
    propertyKey: keyof ClassWithCallBack<T>,
  ) {
    ButtonsRecord[id] = target[propertyKey] as T
  }
}
