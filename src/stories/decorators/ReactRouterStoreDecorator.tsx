import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const ReactRouterStoreDecorator = (storyFn: () => React.ReactNode) => {
	return <BrowserRouter>{storyFn()}</BrowserRouter>
}
