import { Meta, StoryObj } from '@storybook/react'
import { ReduxStoreProviderDecorator } from '../decorators/ReduxStoreProviderDecorator'
import { ReactRouterStoreDecorator } from '../decorators/ReactRouterStoreDecorator'
import { AppHeader } from '../../components/Header/AppHeader'

const meta: Meta<typeof AppHeader> = {
	title: 'SAMURAI_NETWORK/AppHeader',
	component: AppHeader,
	tags: ['autodocs'],
	decorators: [ReduxStoreProviderDecorator, ReactRouterStoreDecorator]
}

export default meta
type Story = StoryObj<typeof AppHeader>

export const AppHeaderStory: Story = {
	args: {}
}
