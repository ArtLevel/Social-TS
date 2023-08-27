import React, { createRef, FC } from 'react'

import { Post } from './Post/Post'
import { PostType } from '../../../types/types'

import s from './MyPosts.module.css'

interface IMyPostsProps {
	posts: PostType[]
	newPostText: string
	addPost: () => void
	updateNewPostText: (text: string) => void
}

export const MyPosts: FC<IMyPostsProps> = ({ posts, newPostText, addPost, updateNewPostText }) => {
	const postEl = posts.map(p => <Post key={p.id} {...p} />)
	const newPostElement = createRef<HTMLTextAreaElement>()

	const onAddPost = () => addPost()

	const onPostChange = () => {
		if (newPostElement.current) {
			const text = newPostElement.current.value
			updateNewPostText(text)
		}
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={newPostText}></textarea>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>

			<div className={s.posts}>
				{postEl}
			</div>

		</div>
	)
}
