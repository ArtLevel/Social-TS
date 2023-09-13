import { ActionsType, SidebarPageType } from '../types/types'

const initialState: SidebarPageType = {
	sidebar: [
		{
			id: 1,
			name: 'Igor'
		},
		{
			id: 2,
			name: 'Viktor'
		},
		{
			id: 3,
			name: 'Dimych'
		}
	]
}

const sidebarReducer = (state: SidebarPageType = initialState, action: ActionsType) => {

	return state
}

export default sidebarReducer