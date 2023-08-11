import React, {createRef, FC} from 'react';

import {Post} from './Post/Post';
import {PostType} from '../../../types/types';

import s from './MyPosts.module.css';

interface IMyPostsProps {
	posts: PostType[]
	newPostText: string
	addPost: (postMessage: string) => void
	updateNewPostText: (newText: string) => void
}

export const MyPosts: FC<IMyPostsProps> = ({posts, addPost, newPostText, updateNewPostText}) => {
	const postEl = posts.map(p => <Post key={p.id} {...p}/>)
	const newPostElement = createRef<HTMLTextAreaElement>()

	const addPostHandler = () => {
		addPost(newPostText)
		updateNewPostText('')
	}

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
					<button onClick={addPostHandler}>Add post</button>
				</div>
			</div>

			<div className={s.posts}>
				{postEl}
			</div>

		</div>
	)
}
