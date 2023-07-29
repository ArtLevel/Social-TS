import React from 'react';

import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
	const postData = [
		{
			id: 1,
			message: 'Hi, how are you ?',
			likesCount: 12
		},
		{
			id: 2,
			message: 'Yo !',
			likesCount: 30
		},
		{
			id: 3,
			message: 'It\'s my first post',
			likesCount: 120
		}
	]

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>

			<div className={s.posts}>
				{postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
			</div>

		</div>
	)
}
