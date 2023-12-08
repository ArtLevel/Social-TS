import React, { FC } from 'react'
import s from './ProfileInfo.module.css'

interface IContact {
	contactTitle: string
	contactValue: string
}

export const Contact: FC<IContact> = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
