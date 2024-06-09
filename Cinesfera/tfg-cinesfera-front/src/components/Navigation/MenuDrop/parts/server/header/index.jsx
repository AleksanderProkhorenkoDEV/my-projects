
import useEmailStore from '@/hooks/Context/useStore'
import style from './css/HeaderDropMenu.module.css'
import Br from '@/components/Br'
import Image from "next/image"

const DropMenuHeader = () => {
    const email = useEmailStore(state => state.email)
    const name = useEmailStore(state => state.name)
    return (
        <>
            <header className={style.header}>
                <div>
                    <Image
                        src={"/images/icons/Acount.svg"}
                        width={34}
                        height={34}
                        alt='Icon profile' />
                </div>
                <div className={style.userData}>
                    <h4 className={style.userName}>{name}</h4>
                    <p>{email}</p>
                </div>
            </header>
            <Br />
        </>
    )
}

export default DropMenuHeader