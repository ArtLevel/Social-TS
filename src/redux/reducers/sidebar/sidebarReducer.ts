import { SidebarPageT } from '../../../types/types'

const initialState: SidebarPageT = {
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

const sidebarReducer = (state: SidebarPageT = initialState, action: any) => {
	return state
}

export default sidebarReducer