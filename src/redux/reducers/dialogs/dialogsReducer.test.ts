import { SendMessageAT } from '../../../types/ActionT'
import { DialogsPageT } from '../../../types/Pages/Dialogs/DialogsPageT'
import dialogsReducer from './dialogsReducer'

let state: DialogsPageT

beforeEach(() => {
	state = {
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
})

it('length of the messages should be increment', () => {
	const action: SendMessageAT = {
		type: 'SEND-MESSAGE',
		newMessageBody: 'Who is he?'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.messages.length).toBe(4)
})

it('length of the dialogs should not be increment', () => {
	const action: SendMessageAT = {
		type: 'SEND-MESSAGE',
		newMessageBody: 'Who is he?'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.dialogs.length).toBe(3)
})

it('message of the messages should be correct', () => {
	const action: SendMessageAT = {
		type: 'SEND-MESSAGE',
		newMessageBody: 'Who is he?'
	}
	const newState = dialogsReducer(state, action)

	expect(newState.messages[3].message).toBe('Who is he?')
})


