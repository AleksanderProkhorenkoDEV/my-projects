import style from "./css/MenuDropContent.module.css"
import DropMenuHeader from "./header"
import { template } from "./body"



const MenuDropContent = ({ type='no-loged' }) => {

    const Actualtemplate = template[type]

    return (
        <nav className={style.dropContent}>
            <DropMenuHeader />
            <Actualtemplate />
        </nav>
    )
}

export default MenuDropContent