import style from './style/Grid.module.css'
import Buttons from './parts/buttons'
import CardGrid from './parts'
import Link from 'next/link'

const Grid = ({ data, isSingle = false, media_type }) => {

    let movie
    let page
    if (isSingle) {
        movie =  data
    } else {
        movie =  data.data
        page =  data.pages
    }
    return (
        <div className={style.gridContainer}>
            <article className={style.articleGrid}>
                {
                    movie?.length != 0 ?
                        movie?.map((item) => (
                            <Link key={item.id} href={`/${media_type ?? item.media_type}/${media_type != null ? item.id : item.media_id }`}>
                                <CardGrid
                                    img_url={item.backdrop_path}
                                    title={item.original_title} />
                            </Link>
                        ))
                        :
                        <article className={style.noReviews}>
                            <p className={style.face}>
                                (^_^*)
                            </p>
                            <p className={style.noData}>No movies/series with this data...</p>
                        </article>
                }
            </article>
            <div>
                {!isSingle && <Buttons
                    pages={page} />}
            </div>
        </div>
    )
}

export default Grid