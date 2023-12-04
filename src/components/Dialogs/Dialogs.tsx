import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { FC } from 'react'
import { AddMessageFormPT } from '../../types/types'
import { actions } from '../../types/Action/ActionNamesConst'
import s from './Dialogs.module.css'
import { AddMessageFormRedux } from './AddMessageForm'
import { useAppDispatch, useAppSelector } from '../../redux/store/reduxStore'

interface IDialogs {
}

export const Dialogs: FC<IDialogs> = () => {
	const { dialogs, messages } = useAppSelector(state => state.dialogsPage)
	const dispatch = useAppDispatch()

	const dialogsEl = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
	const messagesEl = messages.map(m => <Message key={m.id} message={m.message} />)

	const addNewMessage = (values: AddMessageFormPT) => {
		dispatch(actions.sendMessage(values.newMessageBody))
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsEl}
			</div>
			<div className={s.messages}>
				{messagesEl}
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	)
}