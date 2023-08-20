import { SidebarType } from './SidebarType'
import { ProfilePageType } from './Pages/ProfilePageType'
import { DialogsPageType } from './Pages/DialogsPageType'

export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sidebar: {
		sidebar: SidebarType[]
	}
}