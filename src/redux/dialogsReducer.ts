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
	],
	newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			if (action.newText) return { ...state, newMessageBody: action.newText }
			return state
		}
		case SEND_MESSAGE: {
			const body = state.newMessageBody
			if (body) return {
				...state,
				messages: [...state.messages, { id: 6, message: body }],
				newMessageBody: ''
			}
			return state
		}
		default:
			return state
	}
}

export const sendMessageCreator = (): SendMessageAT =>
	({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (newText: string): UpdateNewMessageBodyAT =>
	({ type: UPDATE_NEW_MESSAGE_BODY, newText })


export default dialogsReducer
