import {
	actions,
	MESSAGES_RECEIVED,
	MessagesReceivedAT,
	SetStatusOfChatAT,
	STATUS_CHANGED_OF_CHAT,
	STOP_MESSAGES_LISTENING_OF_CHAT,
	StopMessagesListeningOfChatAT
} from '../../../types/types'
import { AppThunkActionT } from '../../store/reduxStore'
import { ChatPageT, StatusOfChatT } from '../../../types/Pages/Chat/ChatPageT'
import { chatAPI } from '../../../api/chatAPI'
import { ChatMessageAPIType } from '../../../pages/Chat/ChatPage'
import { Dispatch } from 'redux'
import { v1 } from 'uuid'

type ActionsT = MessagesReceivedAT | SetStatusOfChatAT | StopMessagesListeningOfChatAT

export type ChatMessageT = ChatMessageAPIType & { id: string }

const initialState: ChatPageT = {
	messages: [],
	status: 'pending'
}

const chatReducer = (state: ChatPageT = initialState, action: ActionsT): ChatPageT => {
	switch (action.type) {
		case MESSAGES_RECEIVED:
			return {
				...state,
				messages: [
					...state.messages,
					...action.payload.messages.map(m => ({ ...m, id: v1() }))
				]
					.filter((m, index, array) => index >= array.length - 100)
			}
		case STATUS_CHANGED_OF_CHAT:
			return { ...state, status: action.payload.status }
		case STOP_MESSAGES_LISTENING_OF_CHAT:
			return { ...state, messages: [] }
		default:
			return state
	}
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
	if (_newMessageHandler === null) {
		return _newMessageHandler = (messages) => {
			dispatch(actions.messagesReceived(messages))
		}
	}

	return _newMessageHandler
}


let _statusChangedHandler: ((status: StatusOfChatT) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
	if (_statusChangedHandler === null) {
		return _statusChangedHandler = (status) => {
			dispatch(actions.setStatusOfChat(status))
		}
	}

	return _statusChangedHandler
}


// THUNK
export const startMessagesListening = (): AppThunkActionT => async (dispatch) => {
	chatAPI.start()
	chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
	chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): AppThunkActionT => async (dispatch) => {
	chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
	chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
	chatAPI.stop()
	
	dispatch(actions.stopMessagesListeningOfChat())
}
export const sendMessage = (message: string): AppThunkActionT => async (dispatch) => {
	chatAPI.sendMessage(message)
}

export default chatReducer
