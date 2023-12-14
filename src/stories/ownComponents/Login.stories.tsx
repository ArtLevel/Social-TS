import { Meta, StoryObj } from '@storybook/react'
import { ReduxStoreProviderDecorator } from '../decorators/ReduxStoreProviderDecorator'
import { ReactRouterStoreDecorator } from '../decorators/ReactRouterStoreDecorator'
import Login from '../../components/Login/Login'

const meta: Meta<typeof Login> = {
	title: 'SAMURAI_NETWORK/Login',
	component: Login,
	tags: ['autodocs'],
	decorators: [ReduxStoreProviderDecorator, ReactRouterStoreDecorator]
}

export default meta
type Story = StoryObj<typeof Login>

export const LoginStory: Story = {
	args: {}
}
