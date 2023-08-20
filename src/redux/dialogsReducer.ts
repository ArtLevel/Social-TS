import { ActionType, DialogsPageType } from '../types/types'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		if (action.newText !== undefined) {
			state.newMessageBody = action.newText
		}
	}

	if (action.type === SEND_MESSAGE) {
		const body = state.newMessageBody
		state.messages.push({ id: 4, message: body })

		state.newMessageBody = ''
	}

	return state
}

export default dialogsReducer
