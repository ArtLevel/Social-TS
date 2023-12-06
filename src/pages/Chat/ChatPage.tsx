import React, { FC, useEffect, useState } from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

type ChatMessageT = {
	message: string
	photo: string
	userId: number
	userName: string
}


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: FC = () => {
	return (
		<div>
			<Chat />
		</div>
	)
}

const Chat: FC = () => {
	const [messages, setMessages] = useState<ChatMessageT[]>([])

	useEffect(() => {
		ws.addEventListener('message', (e) => {
			const newMessages = JSON.parse(e.data)
			setMessages(prevState => [...prevState, ...newMessages])
		})
	}, [])

	return <div>
		<Messages messages={messages} />
		<AddMessageFormChatPage />
	</div>
}

interface IMessages {
	messages: ChatMessageT[]
}

const Messages: FC<IMessages> = ({ messages }) => {
	return <div style={{ height: '400px', overflowY: 'auto' }}>
		{messages.map((m, index) => <Message key={index} message={m} />)}
	</div>
}

interface IMessage {
	message: ChatMessageT
}

const Message: FC<IMessage> = ({ message }) => {
	return <div>
		<img src={message.photo} />
		<b>{message.userName}</b>
		<br />
		{message.message}
		<hr />
	</div>
}

const AddMessageFormChatPage: FC = () => {
	const [message, setMessage] = useState('')

	const sendMessage = () => {
		if (!message) {
			return
		}
		ws.send(message)
		setMessage('')
	}

	return <div>
		<div>
			<textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
		</div>
		<div>
			<button onClick={sendMessage}>Send</button>
		</div>
	</div>
}

export default WithAuthRedirect(ChatPage)