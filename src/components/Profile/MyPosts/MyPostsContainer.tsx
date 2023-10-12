import React from 'react'
import { addPost } from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { StateType } from '../../../types/types'

const mapStateToProps = (state: StateType) => {
	return {
		posts: state.profilePage.posts
	}
}

export const MyPostsContainer = connect(mapStateToProps, {
	addPost
})(MyPosts)
