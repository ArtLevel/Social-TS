import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../types/Pages/ProfilePageType'

interface IProfile {
	profile: ProfileType | null
}

export const Profile: FC<IProfile> = (props) => {
	return (
		<div>

			<ProfileInfo {...props} />
			<MyPostsContainer />

		</div>
	)
}
