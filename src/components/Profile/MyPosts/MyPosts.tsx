import React, {FC} from 'react';

import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type PostDataType = {
	id: number
	message: string
	likesCount: number
}

interface IMyPostsProps {
	postData: PostDataType[]
}

export const MyPosts: FC<IMyPostsProps> = ({postData}) => {
	const postEl = postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

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
