import React, { FC, ReactNode } from 'react'
import { StoreType } from './types/types'
import store from './redux/store'

const StoreContext = React.createContext<StoreType>(store)

interface IProvider {
	store: StoreType
	children: ReactNode
}

export const Provider: FC<IProvider> = ({ store, children }) => {
	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreContext