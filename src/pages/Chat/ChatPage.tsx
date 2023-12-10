import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { useDispatch } from 'react-redux'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/reducers/chat/chatReducer'
import { useAppSelector } from '../../redux/store/reduxStore'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Avatar, BlockTitle, Button, Textarea } from '../../components/styled/Helpers.styled'
import { Link } from 'react-router-dom'
import { Preloader } from '../../components/common/Preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'

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

	return <>
		<BlockTitle>
			Chat With Other Users
		</BlockTitle><StyledChatPage>

		{
			status === 'error' && <div>PLEASE REFRESH PAGE. WIFI doesn't work</div>
		}
		<Messages />
		<AddMessageFormChatPage />
	</StyledChatPage>
	</>
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

	return <StyledMessages onScroll={scrollHandler}>
		{messages.map((m, i) => <Message key={m.id} message={m} />)}
		<div ref={messagesAnchorRef}></div>
	</StyledMessages>
})

interface IMessage {
	message: ChatMessageAPIType
}

const Message: FC<IMessage> = React.memo(({ message }) => {
	return <StyledMessage>
		<Link to={`/profile/${message.userId}`}>
			<Avatar src={message.photo} maxHeight='80px' maxWidth='80px' />
		</Link>
		<DescriptionOfUser>
			<h2>{message.userName}</h2>
			<span>{message.message}</span>
		</DescriptionOfUser>
	</StyledMessage>
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

	const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.currentTarget.value)
	}

	return <StyledAddMessageForm>
		<Textarea value={message} onChange={onChangeTextarea}></Textarea>
		{
			status !== 'ready'
				? <Button onClick={sendMessageHandler}>Send</Button>
				: <Preloader preloader={preloaderGif} maxWidthForPreloader='50px' maxHeightForPreloader='50px' />
		}
	</StyledAddMessageForm>
})

const StyledAddMessageForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;
`

export default WithAuthRedirect(ChatPage)

const StyledChatPage = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${theme.colors.primaryBgColor};

    margin-bottom: 50px;
`

const StyledMessages = styled.div`
    width: 100%;
    height: 600px;

    display: flex;
    
    flex-direction: column;
    gap: 25px;

    padding: 15px;
    border-radius: 5px;

    overflow-y: auto;
    margin-bottom: 25px;

    border: 2px solid ${theme.colors.secondaryBgColor};
`

const StyledMessage = styled.div`
    width: 50%;
    height: 100px;

    display: flex;
    gap: 20px;

    padding: 15px;

    background-color: ${theme.colors.secondaryBgColor};
`

const DescriptionOfUser = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    h2 {
        color: ${theme.colors.primaryAccentColor};
    }
`
