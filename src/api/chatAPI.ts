import { ChatMessageAPIType } from '../pages/Chat/ChatPage'
import { StatusOfChatT } from '../types/Pages/Chat/ChatPageT'

type MessagesReceivedSubscriberT = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscriberT = (status: StatusOfChatT) => void

type EventNamesT = 'messages-received' | 'status-changed'

let subscribers = {
	'messages-received': [] as MessagesReceivedSubscriberT[],
	'status-changed': [] as StatusChangedSubscriberT[]
}

let ws: WebSocket | null = null

const closeHandler = () => {
	notifySubscribersAboutStatus('pending')
	setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
	const newMessages = JSON.parse(e.data)
	subscribers['messages-received'].forEach(s => s(newMessages))
}

const openHandler = () => {
	notifySubscribersAboutStatus('ready')
}

const onlineHandler = () => {
	notifySubscribersAboutStatus('ready')
	createChannel()
	console.log('WI-FI works !!!')
}

const errorHandler = () => {
	notifySubscribersAboutStatus('error')
	console.error('WI-FI does not work')
}

const cleanUp = () => {
	window?.removeEventListener('offline', closeHandler)
	window?.removeEventListener('online', onlineHandler)

	ws?.removeEventListener('message', messageHandler)
	ws?.removeEventListener('open', openHandler)
	ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusOfChatT) => {
	subscribers['status-changed'].forEach(s => s(status))
}

const createChannel = () => {
	cleanUp()
	ws?.close()

	ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

	notifySubscribersAboutStatus('pending')

	window.addEventListener('offline', closeHandler)
	window.addEventListener('online', onlineHandler)

	ws.addEventListener('message', messageHandler)
	ws.addEventListener('open', openHandler)
	ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
	subscribe(eventName: EventNamesT, callback: MessagesReceivedSubscriberT | StatusChangedSubscriberT) {
		// @ts-ignore
		subscribers[eventName].push(callback)
		return () => {
			// @ts-ignore
			subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
		}
	},
	unsubscribe(eventName: EventNamesT, callback: MessagesReceivedSubscriberT | StatusChangedSubscriberT) {
		// @ts-ignore
		subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
	},
	sendMessage(message: string) {
		ws?.send(message)
	},
	start() {
		createChannel()
	},
	stop() {
		subscribers['messages-received'] = []
		subscribers['status-changed'] = []

		cleanUp()
		ws?.close()
	}
}
