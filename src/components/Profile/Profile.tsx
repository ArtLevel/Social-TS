import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../types/Pages/ProfilePageType'

interface IProfile {
	status: string
	profile: ProfileType | null
	
	updateStatus: (status: string) => void
}

export const Profile: FC<IProfile> = (props) => {
	return (
		<div>

			<ProfileInfo {...props} />
			<MyPostsContainer />

		</div>
	)
}
