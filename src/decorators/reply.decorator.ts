import { CommandsRecord } from '../handlers/command.handler'
import { CommandReplyCallback } from '../types/command.type'
import { ClassWithCallBack } from '../types/interaction.type'

export default function Reply<
  T extends CommandReplyCallback,
>(id: string) {
  return function (
    target: ClassWithCallBack<T>,
    propertyKey: keyof ClassWithCallBack<T>,
  ) {
    CommandsRecord[id] = target[propertyKey] as T
  }
}
