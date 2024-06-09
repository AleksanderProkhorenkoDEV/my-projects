'use client'

import { displayInfoMessage } from '@/lib/Static/Static'
import style from './style/ViewMore.module.css'
import Link from 'next/link'

const ViewMore = ({ id, label, title, media_type }) => {

    const handleClick = () => {
        displayInfoMessage(`Redirecting to  ${title}`)
    }

    return <div className={style.actions}>
        <Link href={`/${media_type}/${id}`} className='link-button' onClick={handleClick}>{label}</Link>
    </div>
}

export default ViewMore