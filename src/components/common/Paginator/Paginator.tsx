import React, { FC } from 'react'
import s from './Paginator.module.css'

interface IPaginator {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (currentPage: number) => void
}

export const Paginator: FC<IPaginator> = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) pages.push(i)
	const pagesMapped = pages.map(p => <span key={p} onClick={() => onPageChanged(p)}
	                                         className={currentPage === p ? s.selectedPage : ''}>{p}</span>)

	return (
		<div>
			{pagesMapped}
		</div>
	)
}
