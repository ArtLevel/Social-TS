import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { ActionsType, StateType } from '../../types/types'

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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)