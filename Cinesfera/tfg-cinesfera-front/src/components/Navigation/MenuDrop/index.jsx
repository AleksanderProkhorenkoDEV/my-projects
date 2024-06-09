import MenuTrakerClick from "./parts/client"
import Image from "next/image"

const DropMenu = () => {
    return (
        <MenuTrakerClick>
            <Image src={"/images/icons/Settings.svg"} width={24} height={24} alt="Icono acciones perfil"/>
        </MenuTrakerClick>
    )
}

export default DropMenu