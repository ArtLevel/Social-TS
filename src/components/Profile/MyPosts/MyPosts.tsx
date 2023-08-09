import React, {createRef, FC} from 'react';

import {Post} from './Post/Post';
import {PostType} from '../../../types/types';

import s from './MyPosts.module.css';

interface IMyPostsProps {
	posts: PostType[]
}

export const MyPosts: FC<IMyPostsProps> = ({posts}) => {
	const postEl = posts.map(p => <Post key={p.id} {...p}/>)
	const newPostElement = createRef<HTMLTextAreaElement>()

	const addPost = () => {
		if(newPostElement.current) {
			const text = newPostElement.current.value
			console.log(text)
		}
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>

			<div className={s.posts}>
				{postEl}
			</div>

		</div>
	)
}
