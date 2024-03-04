import { InteractionsArray } from '../handlers/interaction.handler'
import {
	InteractionCallBack,
	InteractionCheckCallBack,
} from '../types/interaction.type'

export default function Interaction<T extends InteractionCallBack>(
	typeCheckCallBack: InteractionCheckCallBack
) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		InteractionsArray.push([typeCheckCallBack, target[propertyKey] as T])
	}
}
