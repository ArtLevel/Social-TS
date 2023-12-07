import { ChatMessageT } from '../../../redux/reducers/chat/chatReducer'

export type StatusOfChatT = 'pending' | 'ready' | 'error'

export type ChatPageT = {
	messages: ChatMessageT[]
	status: StatusOfChatT
}
