import React, {FC} from 'react';

import {Post} from './Post/Post';
import {PostDataType} from '../../../types/PostDataType';

import s from './MyPosts.module.css';

interface IMyPostsProps {
	postData: PostDataType[]
}

export const MyPosts: FC<IMyPostsProps> = ({postData}) => {
	const postEl = postData.map(p => <Post key={p.id} {...p}/>)

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
				{postEl}
			</div>

		</div>
	)
}
