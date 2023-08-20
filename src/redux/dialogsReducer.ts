import { ActionType, DialogsPageType } from '../types/types'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			if (action.newText !== undefined) {
				state.newMessageBody = action.newText
			}
			return state
		}
		case SEND_MESSAGE: {
			const body = state.newMessageBody
			state.messages.push({ id: 4, message: body })

			state.newMessageBody = ''
			return state
		}
		default: {
			return state
		}
	}
}

export const sendMessageCreator = (): ActionType =>
	({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (newText: string): ActionType =>
	({ type: UPDATE_NEW_MESSAGE_BODY, newText })


export default dialogsReducer
