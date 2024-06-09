import LogoutButton from "@/components/Buttons/logout"
import style from './css/NoLoged.module.css'
import Link from "next/link"

export const Loged = () => {
    return (
        <ul className={style.list}>
            <Link href={'/'} className={style.InvisibleLink}> Home </Link>
            <Link href={'/movies'} className={style.InvisibleLink}> Movies </Link>
            <Link href={'/series'} className={style.InvisibleLink}> Series </Link>
            <Link href={'/contact'} className={style.InvisibleLink}> Contact </Link>
            <Link href={'/profile'} className={style.link}>Profile</Link>
            <LogoutButton className={style.link} />
        </ul>
    )
}

export const NoLoged = () => {
    return (
        <ul className={style.list}>
            <Link href={'/'} className={style.InvisibleLink}> Home </Link>
            <Link href={'/movies'} className={style.InvisibleLink}> Movies </Link>
            <Link href={'/series'} className={style.InvisibleLink}> Series </Link>
            <Link href={'/contact'} className={style.InvisibleLink}> Contact </Link>
            <Link href={'/register'} className={style.link}> Register </Link>
            <Link href={'/login'} className={style.link}> Login </Link>
        </ul>
    )
}