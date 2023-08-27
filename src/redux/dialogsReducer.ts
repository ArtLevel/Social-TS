import { ActionType, DialogsPageType } from '../types/types'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState: DialogsPageType = {
	dialogs: [
		{
			id: 1,
			name: 'Dimych'
		},
		{
			id: 2,
			name: 'Viktor'
		},
		{
			id: 3,
			name: 'Maria'
		}
	],
	messages: [
		{
			id: 1,
			message: 'Hi !'
		},
		{
			id: 2,
			message: 'Yo !'
		},
		{
			id: 3,
			message: 'How are you ?'
		}
	],
	newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			const copyState = { ...state }
			if (action.newText !== undefined) {
				copyState.newMessageBody = action.newText
			}
			return copyState
		}
		case SEND_MESSAGE: {
			const stateCopy = { ...state, messages: [...state.messages.map(o => ({ ...o }))] }
			const body = stateCopy.newMessageBody
			stateCopy.messages.push({ id: 4, message: body })

			stateCopy.newMessageBody = ''
			return stateCopy
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
