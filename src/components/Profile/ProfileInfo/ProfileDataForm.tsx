import React from 'react'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileT } from '../../../types/Pages/Profile/ProfilePageT'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from '../../styled/Helpers.styled'

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
	const stylesForTextarea = {
		resize: 'none',
		border: 'none'
	}

	return <StyledForm onSubmit={props.handleSubmit}>
		<FormItem>
			<Button>Save</Button>
		</FormItem>
		{
			props.error && <FormItem>
				{props.error}
			</FormItem>
		}
		<FormItem>
			<h2>
				Full Name:
			</h2>
			{createField('Full Name', 'fullName', [], Input)}
		</FormItem>
		<FormItem>
			<h2>
				Looking for a job:
			</h2>
			<LookForAJob>
				(Put tick if you look for a job)
				{createField('looking For A Job', 'lookingForAJob', [], Input, { type: 'checkbox' })}
			</LookForAJob>
		</FormItem>
		<FormItem>
			<h2>
				My professional skills:
			</h2>
			{createField('My professional skills', 'lookingForAJobDescription', [], Textarea, {}, '', stylesForTextarea)}
		</FormItem>
		<FormItem>
			<h2>
				About me:
			</h2>
			{createField('About me', 'aboutMe', [], Textarea, {}, '', stylesForTextarea)}
		</FormItem>
		<FormItem>
			<h2>
				Contacts:
			</h2>
			{
				Object.keys(props.profile.contacts)
					.map(key =>
						<div key={key}>
							<b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
						</div>
					)
			}
		</FormItem>
	</StyledForm>
}

const LookForAJob = styled.div`
    display: flex;
    gap: 10px;
`

const StyledForm = styled.form`
    width: 100%;

    gap: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FormItem = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

    h2 {
        margin: 5px 0;

        font-size: 18px;
        color: ${theme.colors.fontColor};
    }
`

export const ProfileDataReduxForm = reduxForm<ProfileDataFormValuesT, ProfileDataFormPT>(
	{ form: 'editProfile' }
)
(ProfileDataForm)
