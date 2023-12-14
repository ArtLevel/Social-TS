import { Meta, StoryObj } from '@storybook/react'
import { ReduxStoreProviderDecorator } from '../decorators/ReduxStoreProviderDecorator'
import { Preloader } from '../../components/common/Preloader/Preloader'
import preloaderGif from '../../assets/images/preloader.gif'

const meta: Meta<typeof Preloader> = {
	title: 'SAMURAI_NETWORK/Preloader',
	component: Preloader,
	tags: ['autodocs'],
	decorators: [ReduxStoreProviderDecorator]
}

export default meta
type Story = StoryObj<typeof Preloader>

export const PreloaderStory: Story = {
	args: {
		preloader: preloaderGif
	}
}
