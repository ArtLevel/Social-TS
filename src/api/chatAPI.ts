import { ChatMessageT } from '../pages/Chat/ChatPage'

type SubscriberT = (messages: ChatMessageT[]) => void

let subscribers = [] as SubscriberT[]

let ws: WebSocket | null = null

const closeHandler = () => {
	console.log('CLOSE WS')
	setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
	const newMessages = JSON.parse(e.data)
	subscribers.forEach(s => s(newMessages))
}

const createChannel = () => {
	ws?.removeEventListener('close', closeHandler)
	ws?.close()

	ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
	ws.addEventListener('close', closeHandler)
	ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
	subscribe(callback: SubscriberT) {
		subscribers.push(callback)
		return () => {
			subscribers = subscribers.filter(s => s !== callback)
		}
	},
	unsubscribe(callback: SubscriberT) {
		subscribers = subscribers.filter(s => s !== callback)
	},
	sendMessage(message: string) {
		ws?.send(message)
	},
	start() {
		createChannel()
	},
	stop() {
		subscribers = []
		ws?.removeEventListener('close', closeHandler)
		ws?.removeEventListener('message', messageHandler)
		ws?.close()
	}
}
