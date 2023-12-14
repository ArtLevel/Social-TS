import { Meta, StoryObj } from '@storybook/react'
import { Paginator } from '../../components/common/Paginator/Paginator'
import { action } from '@storybook/addon-actions'
import { ReduxStoreProviderDecorator } from '../decorators/ReduxStoreProviderDecorator'

const meta: Meta<typeof Paginator> = {
	title: 'SAMURAI_NETWORK/Paginator',
	component: Paginator,
	tags: ['autodocs'],
	argTypes: {
		onPageChanged: action('Page Changed'),
		portionSize: 10 as Number
	},
	decorators: [ReduxStoreProviderDecorator]
}

export default meta
type Story = StoryObj<typeof Paginator>

export const PaginatorStory: Story = {}
