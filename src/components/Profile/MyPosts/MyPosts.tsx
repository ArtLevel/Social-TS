import React, { FC } from 'react'

import { Post } from './Post/Post'
import { PostT } from '../../../types/types'

import s from './MyPosts.module.css'
import { AddPostFormPT, AddPostFormRedux } from './AddNewPostForm'

interface IMyPostsProps {
	posts: PostT[]
	addPost: (newPostText: string) => void
}

export const MyPosts: FC<IMyPostsProps> = React.memo(({ posts, addPost }) => {
		const postEl = posts.map(p => <Post key={p.id} {...p} />)
		const onAddPost = (values: AddPostFormPT) => addPost(values.newPostText)

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
)
