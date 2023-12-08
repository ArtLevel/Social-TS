import React, { FC, useEffect, useRef, useState } from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { useDispatch } from 'react-redux'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/reducers/chat/chatReducer'
import { useAppSelector } from '../../redux/store/reduxStore'

export type ChatMessageAPIType = {
	message: string
	photo: string
	userId: number
	userName: string
}

const ChatPage: FC = React.memo(() => {
	return (
		<div>
			<Chat />
		</div>
	)
})

const Chat: FC = React.memo(() => {
	const status = useAppSelector(state => state.chat.status)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startMessagesListening())

		return () => {
			dispatch(stopMessagesListening())
		}
	}, [])

	return <div>
		{
			status === 'error' && <div>PLEASE REFRESH PAGE. WIFI doesn't work</div>
		}
		<Messages />
		<AddMessageFormChatPage />
	</div>
})

const Messages = React.memo(() => {
	const [isAutoScroll, setIsAutoScroll] = useState(true)
	const messagesAnchorRef = useRef<HTMLDivElement>(null)

	const messages = useAppSelector(state => state.chat.messages)

	useEffect(() => {
		if (isAutoScroll) {
			messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages])

	const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		const element = e.currentTarget

		if (Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight < 300) {
			!isAutoScroll && setIsAutoScroll(true)
		} else {
			isAutoScroll && setIsAutoScroll(false)
		}
	}

	return <div style={{ height: '400px', overflowY: 'auto' }} onScroll={scrollHandler}>
		{messages.map((m, i) => <Message key={m.id} message={m} />)}
		<div ref={messagesAnchorRef}></div>
	</div>
})

interface IMessage {
	message: ChatMessageAPIType
}

const Message: FC<IMessage> = React.memo(({ message }) => {
	console.log('message')

	return <div>
		<img src={message.photo} />
		<b>{message.userName}</b>
		<br />
		{message.message}
		<hr />
	</div>
})

interface IAddMessageFormChatPage {
}

const AddMessageFormChatPage: FC<IAddMessageFormChatPage> = React.memo(() => {
	const [message, setMessage] = useState('')
	const status = useAppSelector(state => state.chat.status)

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
			<button onClick={sendMessageHandler} disabled={status !== 'ready'}>Send</button>
		</div>
	</div>
})

export default WithAuthRedirect(ChatPage)
