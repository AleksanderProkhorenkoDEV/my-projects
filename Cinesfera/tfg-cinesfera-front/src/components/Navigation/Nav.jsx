import { montserratRegular } from '@/assets/Fonts'
import style from './style/Nav.module.css'
import routes from '@/lib/router/routes'
import DropMenu from './MenuDrop'
import Link from 'next/link'

export default function Nav ()  {

    const MenuLinks = routes.map((route) => {
        return <Link href={route.url} key={route.url} className={`${style.link} ${montserratRegular.className}`}> {route.text} </Link>
    })
    
    return (
        <nav className={style.nav}>
            {MenuLinks}
            <DropMenu />
        </nav>
    )
}