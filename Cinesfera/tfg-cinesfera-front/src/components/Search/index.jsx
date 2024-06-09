'use client'

import useDebouncedSearchParams from '@/hooks/search/useSearchParams'
import style from '../Sidebar/style/SideBar.module.css'
import { useSearchParams } from 'next/navigation'
import Image from "next/image"

const SearchBar = ({ queryName, nameIcon, label }) => {
    const searchParams = useSearchParams();
    const handleChange = useDebouncedSearchParams(queryName)

    return (
        <p className={style.inputContainer}>
            <label htmlFor="" className={style.label}>{label}</label>
            <Image
                src={`/images/icons/${nameIcon}`}
                width={20}
                height={20}
                alt="Magnifying glass"
                className={style.iconoLabel}
            />
            <input
                type="text"
                className={style.input}
                defaultValue={searchParams.get(`${queryName}`)}
                onChange={(event) => handleChange(event.target.value)} />
        </p>
    )
}

export default SearchBar