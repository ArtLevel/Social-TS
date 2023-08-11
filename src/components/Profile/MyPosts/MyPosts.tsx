import React, {createRef, FC} from 'react';

import {Post} from './Post/Post';
import {PostType} from '../../../types/types';

import s from './MyPosts.module.css';

interface IMyPostsProps {
	posts: PostType[]
	addPost: (postMessage: string) => void
	newPostText: string
}

export const MyPosts: FC<IMyPostsProps> = ({posts, addPost, newPostText}) => {
	const postEl = posts.map(p => <Post key={p.id} {...p}/>)
	const newPostElement = createRef<HTMLTextAreaElement>()

	const addPostHandler = () => {
		if(newPostElement.current) {
			const text = newPostElement.current.value
			addPost(text)
			newPostElement.current.value = ''
		}
	}

	const onPostChange = () => {

	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={'dasf'}/>
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
