import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { AddMessageFormPT } from '../../types/types'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormPT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component={Textarea} name='newMessageBody'
			       validate={[required, maxLength50]}
			       placeholder='Enter your message' />
		</div>
		<div>
			<button>Add message</button>
		</div>
	</form>
}

export const AddMessageFormRedux = reduxForm<AddMessageFormPT>({
	form: 'addMessageForm'
})(AddMessageForm)