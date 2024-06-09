'use client'

import { popularMovies, popularSeries } from '@/lib/Requests/tmbd_api'
import { Suspense, useEffect, useState } from 'react'
import style from './style/Carrusel.module.css'
import CardCarrusel from './parts/Cards'

const Carrusel = ({ isMovie = false, dataFetch }) => {

    const [length, setLenght] = useState(0)
    const [movies, setMovies] = useState([])

    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(5);

    const getData = async () => {
        let data
        if (dataFetch == null) {
            isMovie ? data = await popularMovies() : data = await popularSeries()
            setLenght(data.results.length)
            setMovies(data.results)
        } else {
            data = dataFetch.cast
            setLenght(data.length)
            setMovies(data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const handlePrev = () => {
        if (startIdx > 0) {
            setStartIdx(startIdx - 1);
            setEndIdx(endIdx - 1);
        }
    };

    const handleNext = () => {
        if (endIdx < length) {
            setStartIdx(startIdx + 1);
            setEndIdx(endIdx + 1);
        }
    };

    return (

        <div className={style.carrusel}>
            <Suspense fallback={<p>Loading...</p>}>
                <div className={style.wrapperCarrusel}>
                    {movies.slice(startIdx, endIdx).map((item) => (
                        <CardCarrusel
                            key={item.id}
                            media_id={item.id}
                            media_type={isMovie ? 'movies' : 'series'}
                            img_url={dataFetch != null ? item.profile_path : item.poster_path }
                            title={item?.title ? item?.title : item?.name}
                        />
                    ))}
                </div>
            </Suspense>
            <div className={style.divButtons}>
                <button onClick={handlePrev}><img width={30} height={30} src='/images/icons/arrowLeft.svg'></img></button>
                <button onClick={handleNext}><img width={30} height={30} src='/images/icons/arrowRight.svg'></img></button>
            </div>
        </div>
    )
}

export default Carrusel