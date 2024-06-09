'use client'

import style from "./css/MenuTrakerClick.module.css"
import { hasCookie } from 'cookies-next'
import MenuDropContent from "../server"
import { useState } from "react"


const MenuTrakerClick = ({ children }) => {

    const [isOpen, setOpen] = useState(false)
    const [isLoged, setLoged] = useState('no-loged')
    const handleClick = () => {
        setOpen(!isOpen)
        hasCookie('user_token') ? setLoged('loged') : setLoged('no-loged')
    }

    return (
        <div onClick={handleClick} className={style.settings}>
            {children}
            {isOpen && <MenuDropContent type={isLoged} />}
        </div>
    )
}

export default MenuTrakerClick