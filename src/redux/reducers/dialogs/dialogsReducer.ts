import { ActionsType, DialogsPageType, SendMessageAT } from '../../../types/types'

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

export const sendMessage = (newMessageBody: string): SendMessageAT =>
	({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer
