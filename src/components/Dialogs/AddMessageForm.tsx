import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { AddMessageFormPT } from '../../types/types'
import { FC } from 'react'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: FC<InjectedFormProps<AddMessageFormPT>> = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			{createField('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
		</div>
		<div>
			<button>Add message</button>
		</div>
	</form>
}

export const AddMessageFormRedux = reduxForm<AddMessageFormPT>({
	form: 'addMessageForm'
})(AddMessageForm)
