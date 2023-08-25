import React, { FC } from 'react'
import { PostType, StoreType } from '../../../types/types'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'

interface IMyPostsContainer {
	store: StoreType
}

export const MyPostsContainer: FC<IMyPostsContainer> = ({ store }) => {
	const state = store.getState()

	const addPost = () => {
		store.dispatch(addPostActionCreator())
	}

	const onPostChange = (text: string) => {
		store.dispatch(updateNewPostTextActionCreator(text))
	}

	return (
		<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
		         updateNewPostText={onPostChange} addPost={addPost} />
	)
}
