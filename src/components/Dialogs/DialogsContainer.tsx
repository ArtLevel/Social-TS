import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { StateType } from '../../types/types'
import React from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Dialogs } from './Dialogs'
import { compose } from 'redux'

const mapStateToProps = (state: StateType) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		updateNewMessageBody,
		sendMessage
	}),
	WithAuthRedirect
)(Dialogs)

