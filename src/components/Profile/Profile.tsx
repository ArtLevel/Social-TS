import React, { FC } from 'react'

import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { PostType } from '../../types/types'

import s from './Profile.module.css'

interface IProfile {
	posts: PostType[]
	newPostText: string
	addPost: () => void
	updateNewPostText: (newText: string) => void
}

export const Profile: FC<IProfile> = ({ posts, addPost, newPostText, updateNewPostText }) => {
	return (
		<div>

			<ProfileInfo />
			<MyPosts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText} />

		</div>
	)
}
