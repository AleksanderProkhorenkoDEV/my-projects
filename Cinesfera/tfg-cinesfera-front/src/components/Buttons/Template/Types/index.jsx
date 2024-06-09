import style from '../css/Navigate.module.css'
import Image from "next/image"
import Link from 'next/link'

export const Basic = ({ label }) => {
    return (
        <span>{label}</span>
    )
}
export const Icon = ({ label }) => {
    return (
        <>  
            <Image 
                src={"images/icons/play.svg"}
                width={24}
                height={24}
                alt="Play icon"
            />
            <span>{label}</span>
        </>
        
    )
}
export const Navigate = ({label, url}) => {
    return (
        <Link href={url} className={style.link}>{label}</Link>
    )
}