import {PostType} from './PostType';
import {DialogType} from './DialogType';
import {MessageType} from './MessageType';
import {SidebarType} from './SidebarType';

export type StateType = {
	profilePage: {
		posts: PostType[]
		newPostText: string
	}
	messagesPage: {
		messages: MessageType[]
		dialogs: DialogType[]
	}
	sidebar: {
		sidebar: SidebarType[]
	}
}