const CardGrid = ({img_url, title}) => {

    const img = img_url != null ? `https://image.tmdb.org/t/p/original${img_url}` : 'images/logo/logo2.jpg'
    const text = title != null ? title : 'No title asigned'
    return(
        <img 
            alt={`Poster of movie/serie ${text}`}
            width={400}
            height={200}
            src={img}
        />
    )
}

export default CardGrid