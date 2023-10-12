import { ActionsType, DialogsPageType, SendMessageAT, UpdateNewMessageBodyAT } from '../types/types'

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
	]
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			if (action.newText) return { ...state }
			return state
		}
		case SEND_MESSAGE: {
			if (action.newMessageBody) return {
				...state,
				messages: [...state.messages, { id: 6, message: action.newMessageBody }]
			}
			return state
		}
		default:
			return state
	}
}

export const sendMessageCreator = (newMessageBody: string): SendMessageAT =>
	({ type: SEND_MESSAGE, newMessageBody })

export const updateNewMessageBodyCreator = (newText: string): UpdateNewMessageBodyAT =>
	({ type: UPDATE_NEW_MESSAGE_BODY, newText })


export default dialogsReducer
