import React, { FC } from 'react'

import { Post } from './Post/Post'
import { AddPostFormPT } from '../../../types/types'

import s from './MyPosts.module.css'
import { AddPostFormRedux } from './AddNewPostForm'
import { useAppDispatch, useAppSelector } from '../../../redux/store/reduxStore'
import { actions } from '../../../types/Action/ActionNamesConst'

interface IMyPostsProps {
}

export const MyPosts: FC<IMyPostsProps> = React.memo(() => {
		const { posts } = useAppSelector(state => state.profilePage)
		const dispatch = useAppDispatch()

		const postEl = posts.map(p => <Post key={p.id} {...p} />)
		const onAddPost = (values: AddPostFormPT) => {
			dispatch(actions.addPost(values.newPostText))
		}

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
