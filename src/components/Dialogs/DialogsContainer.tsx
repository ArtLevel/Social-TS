import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import { Dialogs, IDialogs } from './Dialogs'
import { connect } from 'react-redux'
import { ActionsType, StateType } from '../../types/types'
import { Redirect } from 'react-router-dom'
import React from 'react'

const mapStateToProps = (state: StateType) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
	return {
		updateNewMessageBody: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
		sendMessage: () => dispatch(sendMessageCreator())
	}
}

const AuthRedirectComponent = (props: IDialogs) => {
	if (!props.isAuth) return <Redirect to='/login' />
	return <Dialogs {...props} />
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)