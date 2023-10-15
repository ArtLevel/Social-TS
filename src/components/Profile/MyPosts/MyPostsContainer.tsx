import React from 'react'
import { addPost } from '../../../redux/reducers/profile/profileReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { AppRootStateT } from '../../../redux/store/reduxStore'

const mapStateToProps = (state: AppRootStateT) => {
	return {
		posts: state.profilePage.posts
	}
}

export const MyPostsContainer = connect(mapStateToProps, {
	addPost
})(MyPosts)
