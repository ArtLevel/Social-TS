import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { ActionsType, StateType } from '../../types/types'
import React from 'react'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: StateType) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
	return {
		updateNewMessageBody: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
		sendMessage: () => dispatch(sendMessageCreator())
	}
}

const AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)