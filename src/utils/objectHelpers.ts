export const updateObjectInArray = (items: any, itemId: number, objPropName: any, newObjProps: any) => {
	// @ts-ignore
	return items.map(u => u[objPropName] === itemId ? { ...u, ...newObjProps } : u)
}