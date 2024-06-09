import style from './style/Card.module.css'

const CardCarruselActores = ({ img_url, title}) => {

    return (
        <div className={style.poster}>
            <img src={img_url != null ? `https://image.tmdb.org/t/p/original${img_url}` : '/images/ImagenAutor.jpg'} alt={`Poster of ${title}`} className={style.imgCarrusel} />
            <p className={style.parrafo}>{title}</p>
        </div>
    )
}

export default CardCarruselActores