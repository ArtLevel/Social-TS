import React, { FC } from 'react'

import { Post } from './Post/Post'
import { AddPostFormPT } from '../../../types/types'
import { useAppDispatch, useAppSelector } from '../../../redux/store/reduxStore'
import { actions } from '../../../types/Action/ActionNamesConst'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { AddPostFormRedux } from './AddNewPostForm'

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
			<StyledPosts>
				<AddPostFormRedux onSubmit={onAddPost} />

				<PostsBlock>
					{postEl}
				</PostsBlock>

			</StyledPosts>
		)
	}
)

const StyledPosts = styled.div`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    padding: 20px;

    background-color: ${theme.colors.primaryBgColor};
    margin-bottom: 50px;
`

const PostsBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`