import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {FC} from 'react';

interface IDialogItem {
	id: number
	name: string
}

export const DialogItem: FC<IDialogItem> = ({name, id}) => {
	const path = '/dialogs/' + id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}