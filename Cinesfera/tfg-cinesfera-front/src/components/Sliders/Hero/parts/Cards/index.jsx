import { displayDescription } from '@/lib/Static/Static'
import { kanitExtraBold } from '@/assets/Fonts'
import style from './css/Card.module.css'
import ViewMore from './parts'

const Card = ({ img_url, title, description, id, label, media_Type }) => {

    const finalyDescription = displayDescription(description)
    return (
        <article className={style.article}>
            <img src={img_url} alt="" className={style.img} />
            <div className={style.container}>
                <p className={`${style.movieTitle} ${kanitExtraBold.className}`}>{title}</p>
                <p className={style.movieDescription}>{finalyDescription}</p>
                <ViewMore 
                    id={id} 
                    label={label}
                    title={title}
                    media_type={media_Type} />
            </div>

        </article>
    )
}

export default Card