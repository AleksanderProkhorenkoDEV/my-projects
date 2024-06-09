import Link from 'next/link'
import style from './style/Card.module.css'

const CardCarrusel = ({ img_url, title, media_id, media_type }) => {
    
    return (
        <Link href={`/${media_type}/${media_id}`} className='links'>
            <div className={style.poster}>
                <img src={img_url != null ? `https://image.tmdb.org/t/p/original${img_url}` : '/images/ImagenAutor.jpg'} alt={`Poster of ${title}`} className={style.imgCarrusel} />
                <p className={style.parrafo}>{title}</p>
            </div>
        </Link>
    )
}

export default CardCarrusel