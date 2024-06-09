'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import style from '../Sidebar/style/SideBar.module.css'
import Image from "next/image"

const SelectLenguaje = ({queryName, nameIcon, label}) => {

    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleChange = (term) => {
        const params = new URLSearchParams(searchParams)

        if (term) {
            params.set(`${queryName}`, term)
        } else {
            params.delete(`${queryName}`)
        }
        replace(`${pathName}?${params.toString()}`, {scroll:false})
    }

    return (
        <p className={style.inputContainer}>
                    <label htmlFor="" className={style.label}>{label}</label>
                    <Image 
                        src={`/images/icons/${nameIcon}`}
                        width={20}
                        height={20}
                        alt="Magnifying glass"
                        className={style.iconoLabel} />
                    <select className={style.input} onChange={(event) => handleChange(event.target.value)} value={searchParams?.get('languaje') ? searchParams?.get('languaje') : ''} >
                        <option value=''>Select a lenguage</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="us">English</option>
                    </select>
                </p>
    )
}

export default SelectLenguaje