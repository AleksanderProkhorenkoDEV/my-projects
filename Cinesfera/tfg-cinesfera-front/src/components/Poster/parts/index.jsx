import style from '../style/Poster.module.css'
import { kanitExtraBold } from '@/assets/Fonts'

const Poster = ({ index, img_url }) => {

    return (
        <div className={style.article}>
            <p className={`${style.number} ${kanitExtraBold.className}`}>{index}</p>
            <img
                src={`https://image.tmdb.org/t/p/original${img_url}`}
                className={style.imgPoster} />
        </div>
    )
}

export default Poster