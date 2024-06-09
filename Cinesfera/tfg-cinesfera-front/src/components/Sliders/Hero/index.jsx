'use client'

import { useState, useEffect } from "react"
import Circle from "./parts/Circle"
import Card from "./parts/Cards"


const Slider = ({ getData, label, media_Type }) => {

    const [movies, setMovies] = useState([])

    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }   


    const fetchData = async () => {
        const data = await getData
        setMovies(data);
    };

    useEffect(() => {
        fetchData()

        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % movies?.length);
        }, 10000);

        // Limpia el intervalo cuando el componente se desmonta o actualiza
        return () => clearInterval(intervalId);
    }, [ movies]); // Dependencia para actualizar el intervalo cuando cambia la longitud de los datos

    return (
        <div className="container-hero">
            <div className="slider">
                {movies?.map((item, index) => (
                    <div key={item.id} className={`slide ${index === activeIndex ? 'active' : ''}`}>
                        <Card
                            img_url={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                            title={item.original_title ? item.original_title : item.name}
                            description={item.overview}
                            id={item.id}
                            label={label}
                            media_Type={media_Type}
                        />
                    </div>
                ))}
                <div className="container-circle">
                    {movies?.map((item, index) => (
                        <div key={item.id}>
                            <Circle
                                isActive={index === activeIndex ? true : false}
                                callback={handleClick}
                                index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider