import {PostType} from './PostType';
import {DialogType} from './DialogType';
import {MessageType} from './MessageType';

export type StateType = {
	profilePage: {
		posts: PostType[]
	}
	messagesPage: {
		messages: MessageType[]
		dialogs: DialogType[]
	}
}