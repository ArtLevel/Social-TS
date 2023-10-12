import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import React from 'react'

export type AddPostFormPT = {
	newPostText: string
}

const AddNewPostForm = (props: InjectedFormProps<AddPostFormPT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component='textarea' name='newPostText' placeholder='your post text' />
		</div>
		<div>
			<button>Add post</button>
		</div>
	</form>
}

export const AddPostFormRedux = reduxForm<AddPostFormPT>({
	form: 'ProfileAddNewPostForm'
})(AddNewPostForm)
