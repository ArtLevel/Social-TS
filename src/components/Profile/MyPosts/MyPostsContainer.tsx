import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { StateType } from '../../../types/types'

const mapStateToProps = (state: StateType) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostTextActionCreator(text))
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
