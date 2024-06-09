import SelectLenguaje from '../SelectLengguaje'
import style from './style/SideBar.module.css'
import TitleSection from '../Title'
import SearchBar from '../Search'



const SideBar = () => {
    return (
        <article className={style.articleSidebar}>
            <span className={style.title}>
                <TitleSection
                        word1={'Billboard'}
                        word2={''} />
            </span>
            <form className={style.sidebar}>
                <SearchBar
                    label={'Search by name'}
                    queryName={'query'}
                    nameIcon={'Lupa.svg'} />
                <SearchBar
                    label={'Search by published date'}
                    queryName={'date'}
                    nameIcon={'calendario.svg'} />
                <SelectLenguaje
                    label={'Search by language'}
                    queryName={'languaje'}
                    nameIcon={'flechaBaja.svg'}
                />
            </form>
        </article>
    )
}

export default SideBar