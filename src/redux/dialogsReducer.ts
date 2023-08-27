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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			if (action.newText) {
				const stateCopy: DialogsPageType = { ...state, newMessageBody: action.newText }
				return stateCopy
			}
			return state
		}
		case SEND_MESSAGE: {
			const body = state.newMessageBody
			if (body) {
				const stateCopy: DialogsPageType = {
					...state,
					messages: [...state.messages, { id: 6, message: body }],
					newMessageBody: ''
				}s
				return stateCopy
			}
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
