import React, { FC } from 'react'

import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ActionType, PostType } from '../../types/types'

import s from './Profile.module.css'

interface IProfile {
	posts: PostType[]
	newPostText: string
	dispatch: (action: ActionType) => void
}

export const Profile: FC<IProfile> = ({ posts, newPostText, dispatch }) => {
	return (
		<div>

			<ProfileInfo />
			<MyPosts posts={posts} dispatch={dispatch} newPostText={newPostText} />

		</div>
	)
}
