import style from '@/assets/styles/Profile/Profile.module.css'
import TitleSection from '@/components/Title'
import WrapperGrid from './parts/Like'
import WrapperGridWatch from './parts/Watch'

const Profile = async ( ) => {

    return (
        <main className={style.main}>
            <section className={style.hero} />
            <section className={style.section}>
                <TitleSection word1={'like '} word2={'this:'}/>
                <WrapperGrid />
            </section>
            <section className={style.section}>
                <TitleSection word1={'Watch'} word2={'later:'}/>
                <WrapperGridWatch />
            </section>
        </main>
    )
}

export default Profile