import { create } from 'react-test-renderer'
import { ProfileStatus } from './ProfileStatus'

describe('Button component', () => {
	test('Status from props should be in the state', () => {
		const component = create(<ProfileStatus status="I'm a programmer" updateUserStatus={() => {
		}} />)
		const root = component.root

		expect(root.props.status).toBe('I\'m a programmer')
	})
	test('after created span span should be displayed', () => {
		const component = create(<ProfileStatus status="I'm a programmer" updateUserStatus={() => {
		}} />)
		const root = component.root
		const span = root.findByType('span')

		expect(span).not.toBeNull()
	})
	test('after created input doesn\'t should be displayed', () => {
		const component = create(<ProfileStatus status="I'm a programmer" updateUserStatus={() => {
		}} />)
		const root = component.root
		expect(() => {
			const input = root.findByType('input')
		}).toThrow()
	})
	test('after created input span should have correct', () => {
		const component = create(<ProfileStatus status="I'm a programmer" updateUserStatus={() => {
		}} />)
		const root = component.root
		const span = root.findByType('span')

		expect(span.children[0]).toBe('I\'m a programmer')
	})
	test('input should be displayed in editMode instead of span', () => {
		const component = create(<ProfileStatus status="I'm a programmer" updateUserStatus={() => {
		}} />)
		const root = component.root
		const span = root.findByType('span')
		span.props.onDoubleClick()

		const input = root.findByType('input')
		expect(input.props.value).toBe('I\'m a programmer')
	})
	test('callback should be called', () => {
		const mockCallback = jest.fn()
		const component = create(<ProfileStatus status="I'm a programmer" updateUserStatus={mockCallback} />)
		const instance = component.getInstance()
		// @ts-ignore
		instance.deactivateEditMode()
		expect(mockCallback.mock.calls.length).toBe(1)
	})
})
