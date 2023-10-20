import React, { FC, useEffect, useState } from 'react'
import s from './Paginator.module.css'

interface IPaginator {
	totalItemsCount: number
	pageSize: number
	currentPage: number
	portionSize?: number

	onPageChanged: (currentPage: number) => void
}

export const Paginator: FC<IPaginator> = ({
	                                          totalItemsCount,
	                                          pageSize,
	                                          currentPage,
	                                          onPageChanged,
	                                          portionSize = 10
                                          }) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	const pagesMapped = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => <span
		key={p} onClick={() => onPageChanged(p)}
		className={currentPage === p ? s.selectedPage : ''}>{p}</span>)

	const incrementPortionNumberHandler = () => setPortionNumber(prevState => prevState + 1)
	const decrementPortionNumberHandler = () => setPortionNumber(prevState => prevState - 1)

	useEffect(() => {
		setPortionNumber(Math.ceil(currentPage / portionSize))
	}, [currentPage])

	return (
		<div>
			{portionNumber > 1 && <button onClick={decrementPortionNumberHandler}>back</button>}
			{pagesMapped}
			{portionNumber < portionCount &&
				<button onClick={incrementPortionNumberHandler}>next</button>}
		</div>
	)
}
