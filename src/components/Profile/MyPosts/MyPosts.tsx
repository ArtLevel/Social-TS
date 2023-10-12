import React, { createRef, FC } from 'react'

import { Post } from './Post/Post'
import { PostType } from '../../../types/types'

import s from './MyPosts.module.css'
import { AddPostFormPT, AddPostFormRedux } from './AddPostForm'

interface IMyPostsProps {
	posts: PostType[]
	newPostText: string
	addPost: () => void
	updateNewPostText: (text: string) => void
}

export const MyPosts: FC<IMyPostsProps> = ({ posts, newPostText, addPost, updateNewPostText }) => {
	const postEl = posts.map(p => <Post key={p.id} {...p} />)
	const newPostElement = createRef<HTMLTextAreaElement>()

	const onAddPost = (values: AddPostFormPT) => addPost()

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddPostFormRedux onSubmit={onAddPost} />

			<div className={s.posts}>
				{postEl}
			</div>

		</div>
	)
}
