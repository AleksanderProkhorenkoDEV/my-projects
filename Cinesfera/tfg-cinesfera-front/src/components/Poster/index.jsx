import style from './style/TopMedia.module.css'
import Poster from "./parts"
import Link from 'next/link'

const TopMedia = async ({ getData, media_type }) => {

    const movies = await getData

    return (
        <article className={style.wrapPoster}>
            {
                movies.map((item, index) => (
                    <Link key={item.id} href={`/${media_type}/${item.id}`}>
                        <div className={style.containerPoster} >
                            <Poster
                                index={index + 1}
                                img_url={item.poster_path} />
                        </div>
                    </Link>
                ))
            }
        </article>
    )
}

export default TopMedia