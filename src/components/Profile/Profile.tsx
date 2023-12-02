import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileT } from '../../types/Pages/Profile/ProfilePageT'
import { ProfileDataFormValuesT } from './ProfileInfo/ProfileDataForm'

interface IProfile {
	status: string
	profile: ProfileT | null
	isOwner: boolean
	savePhoto: (photoFile: File) => void

	updateUserStatus: (status: string) => void
	saveProfile: (formData: ProfileDataFormValuesT) => Promise<void>
}

export const Profile: FC<IProfile> = (props) => {
	return (
		<div>

			<ProfileInfo {...props} />
			<MyPostsContainer />

		</div>
	)
}
