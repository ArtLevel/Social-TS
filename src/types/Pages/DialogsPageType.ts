import { MessageType } from '../MessageType'
import { DialogType } from '../DialogType'

export type DialogsPageType = {
	messages: MessageType[]
	dialogs: DialogType[]
}