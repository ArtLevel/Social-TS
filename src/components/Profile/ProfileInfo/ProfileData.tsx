import { ProfileT } from '../../../types/Pages/Profile/ProfilePageT'
import React, { FC } from 'react'
import { Contact } from './ProfileContact'

interface IProfileData {
	profile: ProfileT
	isOwner: boolean

	activateEditMode: () => void
}

export const ProfileData: FC<IProfileData> = ({ profile, isOwner, activateEditMode }) => {
	return <div>
		{isOwner && <div>
			<button onClick={activateEditMode}>
				SetEditMode
			</button>
		</div>}
		<div>
			<b>
				Full Name:
			</b>
			{profile.fullName}
		</div>
		<div>
			<b>
				Looking for a job:
			</b>
			{profile.lookingForAJob ? 'yes' : 'no'}
		</div>
		{profile.lookingForAJob && <div>
			<b>
				My professional skills:
			</b>
			{profile.lookingForAJobDescription}
		</div>}
		<div>
			<b>
				About me:
			</b>
			{profile.aboutMe}
		</div>
		<div>
			<b>
				Contacts:
			</b>
			{
				Object.keys(profile.contacts)
					.map((key) => <Contact
						key={key}
						contactTitle={key}
						contactValue={profile.contacts[key]} />)
			}
		</div>
	</div>
}
