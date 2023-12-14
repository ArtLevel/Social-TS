import { Meta, StoryObj } from '@storybook/react'
import { ReduxStoreProviderDecorator } from '../decorators/ReduxStoreProviderDecorator'
import { ReactRouterStoreDecorator } from '../decorators/ReactRouterStoreDecorator'
import { NavBar } from '../../components/NavBar/NavBar'

const meta: Meta<typeof NavBar> = {
	title: 'SAMURAI_NETWORK/NavBar',
	component: NavBar,
	tags: ['autodocs'],
	decorators: [ReduxStoreProviderDecorator, ReactRouterStoreDecorator]
}

export default meta
type Story = StoryObj<typeof NavBar>

export const NavBarStory: Story = {
	args: {}
}
