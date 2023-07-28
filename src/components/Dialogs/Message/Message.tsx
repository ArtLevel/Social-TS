import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {FC} from 'react';

interface IMessage {
	message: string
}

export const Message: FC<IMessage> = ({message}) => {
	return (
		<div className={s.message}>{message}</div>
	)
}