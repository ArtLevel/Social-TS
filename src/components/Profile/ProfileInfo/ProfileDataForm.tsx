import React from 'react'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileT } from '../../../types/Pages/Profile/ProfilePageT'
import s from './ProfileInfo.module.css'

export type ProfileDataFormValuesT = {
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
}

type ProfileDataFormPT = {
	profile: ProfileT
}

const ProfileDataForm = (props: InjectedFormProps<ProfileDataFormValuesT, ProfileDataFormPT> & ProfileDataFormPT) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<button onClick={() => {
			}}>save
			</button>
		</div>
		{
			props.error && <div className={s.formSummaryError}>
				{props.error}
			</div>
		}
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
		<div>
			<b>
				Contacts:
			</b>
			{
				Object.keys(props.profile.contacts)
					.map(key =>
						<div key={key} className={s.contact}>
							<b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
						</div>
					)
			}
		</div>
	</form>
}

export const ProfileDataReduxForm = reduxForm<ProfileDataFormValuesT, ProfileDataFormPT>(
	{ form: 'editProfile' }
)
(ProfileDataForm)
