import React from 'react'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { InjectedFormProps, reduxForm } from 'redux-form'

export type ProfileDataFormPT = {
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
}

const ProfileDataForm = (props: InjectedFormProps<ProfileDataFormPT>) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<button onClick={() => {
			}}>save
			</button>
		</div>
		<div>
			<b>
				Full Name:
			</b>
			{createField('Full Name', 'fullName', [], Input)}
		</div>
		<div>
			<b>
				Looking for a job:
			</b>
			{createField('looking For A Job', 'lookingForAJob', [], Input, { type: 'checkbox' })}
		</div>
		<div>
			<b>
				My professional skills:
			</b>
			{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
		</div>
		<div>
			<b>
				About me:
			</b>
			{createField('About me', 'aboutMe', [], Textarea)}
		</div>
	</form>
}

export const ProfileDataReduxForm = reduxForm<ProfileDataFormPT>(
	{ form: 'editProfile' }
)
(ProfileDataForm)
