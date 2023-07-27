import React from 'react';

import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
	return (
		<div>

			<textarea></textarea>
			<button>Add post</button>
			<button>Remove post</button>

			<div className={s.posts}>
				<Post message='Hi, how are you ?' countLike={15}/>
				<Post message="It's my first post" countLike={150}/>
			</div>

		</div>
	)
}
