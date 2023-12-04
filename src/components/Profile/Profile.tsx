import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsPage } from './MyPosts/MyPostsPage'

interface IProfile {
	isOwner: boolean
}

export const Profile: FC<IProfile> = (props) => {
	return (
		<div>

			<ProfileInfo {...props} />
			<MyPostsPage />

		</div>
	)
}
