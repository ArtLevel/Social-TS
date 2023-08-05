import {PostType} from './PostType';
import {DialogType} from './DialogType';
import {MessageType} from './MessageType';

export type StateType = {
	posts: PostType[]
	dialogs: DialogType[]
	messages: MessageType[]
}