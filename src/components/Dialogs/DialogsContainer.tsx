import { sendMessage } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import React from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Dialogs } from './Dialogs'
import { compose } from 'redux'
import { AppRootStateT } from '../../redux/reduxStore'

const mapStateToProps = (state: AppRootStateT) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		sendMessage
	}),
	WithAuthRedirect
)(Dialogs)

