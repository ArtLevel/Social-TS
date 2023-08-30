import { ProfilePageType } from './Pages/ProfilePageType'
import { DialogsPageType } from './Pages/DialogsPageType'
import { SidebarPageType } from './Pages/SidebarPageType'
import { UsersPageType } from './Pages/UsersPageType'

export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sidebar: SidebarPageType
	usersPage: UsersPageType
}