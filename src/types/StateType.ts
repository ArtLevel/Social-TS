import { ProfilePageType } from './Pages/ProfilePageType'
import { DialogsPageType } from './Pages/DialogsPageType'
import { SidebarPageType } from './Pages/SidebarPageType'
import { UsersPageType } from './Pages/UsersPageType'
import { AuthType } from './AuthType'

export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sidebar: SidebarPageType
	usersPage: UsersPageType
	auth: AuthType
}