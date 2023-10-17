import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import React from 'react'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { AddPostFormPT } from '../../../types/types'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps<AddPostFormPT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component={Textarea} name='newPostText' placeholder='post message'
			       validate={[required, maxLength10]} />
		</div>
		<div>
			<button>Add post</button>
		</div>
	</form>
}

export const AddPostFormRedux = reduxForm<AddPostFormPT>({
	form: 'ProfileAddNewPostForm'
})(AddNewPostForm)
