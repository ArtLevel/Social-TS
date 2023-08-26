import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import { Dialogs } from './Dialogs'
import StoreContext from '../../StoreContext'

export const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				const state = store.getState().dialogsPage

				const onSendMessageClick = () => {
					store.dispatch(sendMessageCreator())
				}

				const onNewMessageChange = (body: string) => {
					store.dispatch(updateNewMessageBodyCreator(body))
				}

				return <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange}
				                sendMessage={onSendMessageClick} />
			}}
		</StoreContext.Consumer>
	)
}