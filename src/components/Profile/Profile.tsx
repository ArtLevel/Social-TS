import React, { FC } from 'react'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { StoreType } from '../../types/types'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'

interface IProfile {
	store: StoreType
}

export const Profile: FC<IProfile> = ({ store }) => {
	return (
		<div>

			<ProfileInfo />
			<MyPostsContainer store={store} />

		</div>
	)
}
