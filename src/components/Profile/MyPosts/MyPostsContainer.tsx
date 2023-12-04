import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { AppRootStateT } from '../../../redux/store/reduxStore'
import { actions } from '../../../types/Action/ActionNamesConst'

const mapStateToProps = (state: AppRootStateT) => {
	return {
		posts: state.profilePage.posts
	}
}

export const MyPostsContainer = connect(mapStateToProps, {
	addPost: actions.addPost
})(MyPosts)
