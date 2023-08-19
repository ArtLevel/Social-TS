import { SidebarType } from './SidebarType'
import { PostType } from './PostType'
import { DialogType } from './DialogType'
import { MessageType } from './MessageType'

export type StateType = {
	profilePage: {
		posts: PostType[]
		newPostText: string
	}
	dialogsPage: {
		messages: MessageType[]
		dialogs: DialogType[]
	}
	sidebar: {
		sidebar: SidebarType[]
	}
}