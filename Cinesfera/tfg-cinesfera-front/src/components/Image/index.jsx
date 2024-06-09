import style from './style/MyImage.module.css'

const MyImage = ({img_url, altDescription}) => {
    return <img src={`https://image.tmdb.org/t/p/original${img_url}`} alt={`Movie poster of ${altDescription}`}  className={style.imgMovies}/>
}

export default MyImage