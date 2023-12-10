import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../../redux/store/reduxStore'
import styled, { css } from 'styled-components'
import { Button } from '../../styled/Helpers.styled'
import { theme } from '../../../styles/Theme'

interface IPaginator {
	portionSize?: number

	onPageChanged: (currentPage: number) => void
}

export const Paginator: FC<IPaginator> = (props) => {
	const {
		portionSize = 10,
		onPageChanged
	} = props
	const { currentPage, pageSize, totalUsersCount } = useAppSelector(state => state.usersPage)

	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	const pagesMapped = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
		.map(p => <PaginatorItem
			key={p} onClick={() => onPageChanged(p)}
			isActive={currentPage === p}>{p}</PaginatorItem>)

	const incrementPortionNumberHandler = () => setPortionNumber(prevState => prevState + 1)
	const decrementPortionNumberHandler = () => setPortionNumber(prevState => prevState - 1)

	useEffect(() => {
		setPortionNumber(Math.ceil(currentPage / portionSize))
	}, [currentPage])

	console.log(portionNumber)

	return (
		<StyledPaginator>
			{portionNumber > 1 && <Button onClick={decrementPortionNumberHandler}>back</Button>}
			{pagesMapped}
			{portionNumber < portionCount &&
				<Button onClick={incrementPortionNumberHandler}>next</Button>}
		</StyledPaginator>
	)
}


const StyledPaginator = styled.div`
    width: 100%;
    max-height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    margin: 10px 0;
`

interface IPaginatorItem {
	isActive: boolean
}

const PaginatorItem = styled.span<IPaginatorItem>`
    min-height: 30px;
    min-width: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    border-radius: 5px;
    border: 2px solid ${theme.colors.secondaryBgColor};
    cursor: pointer;

    ${props => props.isActive && css<IPaginatorItem>`
        color: ${theme.colors.primaryAccentColor};
        font-weight: bold;
    `}
`