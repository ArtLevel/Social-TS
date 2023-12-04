import { connect } from 'react-redux'
import React from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Dialogs } from './Dialogs'
import { compose } from 'redux'
import { AppRootStateT } from '../../redux/store/reduxStore'
import { actions } from '../../types/Action/ActionNamesConst'

const mapStateToProps = (state: AppRootStateT) => ({
	dialogsPage: state.dialogsPage
})

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		sendMessage: actions.sendMessage
	}),
	WithAuthRedirect
)(Dialogs)
