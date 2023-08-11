import {SidebarType} from './SidebarType';
import {ProfilePageType} from './page/ProfilePageType';

export type StateType = {
	profilePage: ProfilePageType
	messagesPage: ProfilePageType
	sidebar: {
		sidebar: SidebarType[]
	}
}