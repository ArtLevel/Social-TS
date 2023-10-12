export const required = (value: string) => {
	if (value && value.trim()) return undefined
	return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
	if (value && value.trim().length > maxLength) return `Max length is ${maxLength} symbols`
	return undefined
}
