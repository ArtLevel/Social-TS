import React from 'react'
import { addPost, updateNewPostText } from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { StateType } from '../../../types/types'

const mapStateToProps = (state: StateType) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

export const MyPostsContainer = connect(mapStateToProps, {
	updateNewPostText,
	addPost
})(MyPosts)
