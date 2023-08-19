import React, { createRef, FC } from 'react'

import { Post } from './Post/Post'
import { ActionType, PostType } from '../../../types/types'

import s from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'

interface IMyPostsProps {
	posts: PostType[]
	newPostText: string
	dispatch: (action: ActionType) => void
}

export const MyPosts: FC<IMyPostsProps> = ({ posts, newPostText, dispatch }) => {
	const postEl = posts.map(p => <Post key={p.id} {...p} />)
	const newPostElement = createRef<HTMLTextAreaElement>()

	const addPostHandler = () => {
		dispatch(addPostActionCreator())
	}

	const onPostChange = () => {
		if (newPostElement.current) {
			const text = newPostElement.current.value

			dispatch(updateNewPostTextActionCreator(text))
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
					<button onClick={addPostHandler}>Add post</button>
				</div>
			</div>

			<div className={s.posts}>
				{postEl}
			</div>

		</div>
	)
}
