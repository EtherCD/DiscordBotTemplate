import { InteractionsArray } from '../handlers/interaction.handler'
import {
  ClassWithCallBack,
  InteractionCallBack,
  InteractionCheckCallBack,
} from '../types/interaction.type'

export default function Interaction<
  T extends InteractionCallBack,
>(typeCheckCallBack: InteractionCheckCallBack) {
  return function (
    target: ClassWithCallBack<T>,
    propertyKey: keyof ClassWithCallBack<T>,
  ) {
    InteractionsArray.push([
      typeCheckCallBack,
      target[propertyKey] as T,
    ])
  }
}
