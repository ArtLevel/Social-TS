import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileT } from '../../types/Pages/Profile/ProfilePageT'

interface IProfile {
	status: string
	profile: ProfileT | null
	isOwner: boolean

	updateUserStatus: (status: string) => void
}

export const Profile: FC<IProfile> = (props) => {
	return (
		<div>

			<ProfileInfo {...props} />
			<MyPostsContainer />

		</div>
	)
}
