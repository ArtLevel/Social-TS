import React, { FC, useEffect, useState } from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/reducers/chat/chatReducer'
import { useAppSelector } from '../../redux/store/reduxStore'

export type ChatMessageT = {
	message: string
	photo: string
	userId: number
	userName: string
}

const ChatPage: FC = () => {
	return (
		<div>
			<Chat />
		</div>
	)
}

const Chat: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startMessagesListening())

		return () => {
			dispatch(stopMessagesListening())
		}
	}, [])

	return <div>
		<Messages />
		<AddMessageFormChatPage />
	</div>
}

const Messages = () => {
	const messages = useAppSelector(state => state.chat.messages)


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

interface IAddMessageFormChatPage {
}

const AddMessageFormChatPage: FC<IAddMessageFormChatPage> = () => {
	const [message, setMessage] = useState('')
	const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

	const dispatch = useDispatch()

	const sendMessageHandler = () => {
		if (!message) {
			return
		}
		dispatch(sendMessage(message))

		setMessage('')
	}

	return <div>
		<div>
			<textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
		</div>
		<div>
			<Button onClick={sendMessageHandler} disabled={false}>Send</Button>
		</div>
	</div>
}

export default WithAuthRedirect(ChatPage)
