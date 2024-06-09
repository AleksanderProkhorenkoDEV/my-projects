'use server'

import { cleanDirtyJSONMovies, filterClips, serviceSplitMovies } from "./Services/MoviesService"
import { cleanDirtyJSONSeries, serviceSplitSeries } from "./Services/SeriesService"
import { get } from "../MainRequestTMDB"
import { getCookie } from "cookies-next"
import { delet, post } from "../MaintRequest"
import { cookies } from 'next/headers'



/**-----------------------MOVIES----------------------------- */

/**
 *  ->OBTENER LAS PELICULAS QUE ESTAN POR SALIR 
 *      endpoint: upcoming
 */


export const upComing = async (length = 5) => {
    const response = await get('/movie/upcoming')

    const data = serviceSplitMovies(response.results, length)

    return data
}

/**
 *  ->OBTENER LAS PELICULAS POPULARES
 *      endpoint: popular
 */

export const popularMovies = async () => {
    return await get('/movie/popular')
}


/**
 *  ->OBTENER LAS PELICULAS POPULARES CON SERVICE
 *      endpoint: popular
 */

export const popularMoviesService = async () => {
    const response = await get('/movie/popular')

    const data = serviceSplitMovies(response.results, 5)

    return data
}

export const topMovies = async () => {
    const response = await get('/movie/top_rated')

    const data = serviceSplitMovies(response.results, 5)

    return data
}


/**
 *  ->OBTENER LAS PELICULAS BUSCADAS
 *          endpoint: search/movie?query
 * 
 */

export const searchMovie = async (params) => {
    const page = params?.page ? params?.page : 1
    const response = await get(`/search/movie?query=${params?.query}&year=${params?.date}&languaje=${params?.languaje}&page=${page}`)
    const pages = response.total_pages
    const data = cleanDirtyJSONMovies(response)
    return { data, pages }
}

/**
 *  ->OBTENER DATOS DE UNA PELICULA
 *          endpoint: /movie/{movie_id}
 * 
 */

export const getMovie = async (id) => {
    const response = await get(`/movie/${id}`)

    return response
}

/**
 *  ->OBTENER KEY VIDEO DE UNA PELICULA
 *          endpoint: /movie/{movie_id}/videos
 * 
 */
export const getVideoMovie = async (id) => {
    const response = await get(`/movie/${id}/videos`)
    const key = filterClips(response)
    return key
}

/**
 *  ->OBTENER ACTORES DE UNA PELICULA
 *          endpoint: /movie/{movie_id}/credits
 * 
 */

export const getCredits = async (media_id) => {
    const response = await get(`/movie/${media_id}/credits`)
    return response
}

/**
 *  ->OBTENER REVIEW DE UNA PELICULA
 *          endpoint: /movie/{movie_id}/reviews
 * 
 */

export const getReview = async (media_id) => {
    const response = await get(`/movie/${media_id}/reviews`)
    return response
}

/**
 *  ->OBTENER LAS PELICULAS SIMILARES DE UNA PELICULA
 *          endpoint: /movie/{movie_id}/similar
 * 
 */
export const getSimilar = async (media_id) => {
    const response = await get(`/movie/${media_id}/similar`)
    const data = cleanDirtyJSONMovies(response)
    return data
}

/**-----------------------SERIES----------------------------- */

/**
 *  ->OBTENER DATOS DE UNA SERIE
 *          endpoint: /serie/{serie_id}
 * 
 */

export const getSerie = async (id) => {
    const response = await get(`/tv/${id}`)

    return response
}

/**
 *  ->OBTENER KEY VIDEO DE UNA PELICULA
 *          endpoint: /movie/{movie_id}/videos
 * 
 */
export const getVideoSerie = async (id) => {
    const response = await get(`/tv/${id}/videos`)
    const key = filterClips(response)
    return key
}

/**
 *  ->OBTENER ACTORES DE UNA SERIE
 *          endpoint: /tv/{serie_id}/credits
 * 
 */

export const getCreditsSeries = async (media_id) => {
    const response = await get(`/tv/${media_id}/credits`)
    return response
}

/**
 *  ->OBTENER LAS SERIES SIMILARES DE UNA SERIE EN CONCRETO
 *          endpoint: /tv/{serie_id}/similar
 * 
 */
export const getSimilarSeries = async (media_id) => {
    const response = await get(`/tv/${media_id}/similar`)
    const data = cleanDirtyJSONMovies(response)
    return data
}

/**
 *  ->OBTENER REVIEW DE UNA PELICULA
 *          endpoint: /tv/{serie_id}/reviews
 * 
 */

export const getReviewSeries = async (media_id) => {
    const response = await get(`/tv/${media_id}/reviews`)
    return response
}
/**
 *  ->OBTENER LAS SERIES QUE ESTAN POR SALIR 
 *      endpoint: upcoming
 */


export const upComingSeries = async (length = 5) => {
    const response = await get('/tv/popular')

    const data = serviceSplitMovies(response.results, length)

    return data
}

/**
 *  ->OBTENER LAS SERIES POPULARES
 *      endpoint: popular
 */

export const popularSeries = async () => {
    return await get('/tv/popular')
}


/**-----------------------ACTIONS BUTTONS----------------------------- */


export const likeMedia = async (user_id, media_id, media_type, backdrop_path) => {
    let data
    try {
        data = await post('/media', { user_id, media_id, media_type, backdrop_path })
    } catch (error) {
        data = 'An error occurred while adding it'
    }
    return data
}

export const watchList = async (user_id, media_id, backdrop_path, media_type) => {
    let data
    try {
        data = await post('/watch', { user_id, media_id, backdrop_path, media_type })
    } catch (error) {
        data = 'An error occurred while adding it'
    }
    return data
}

export const dislikeMedia = async (user_id, media_id) => {
    try {
        const response = await delet(`/media?media_id=${media_id}&user_id=${user_id}`)
        const data = await response
        return data
    } catch (error) {
        return 'There was an unexpected error'
    }
}

export const unWatchMedia = async (user_id, media_id) => {
    try {
        const response = await delet(`/watch?media_id=${media_id}&user_id=${user_id}`)
        const data = await response
        return data
    } catch (error) {
        return 'There was an unexpected error'
    }
}

export const searchMedia = async (user_id, movie_id) => {

    try {
        const cookie = getCookie('user_token', { cookies })
        const response = await fetch(`http://tfg-cinesfera-back.dvl.to/api/media/${movie_id}/user/${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie}`
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        return 'There was an unexpected error'
    }

}

export const searchWatch = async (user_id, movie_id) => {
    try {
        const cookie = getCookie('user_token', { cookies })
        const response = await fetch(`http://tfg-cinesfera-back.dvl.to/api/watch/${movie_id}/user/${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie}`
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        return 'There was an unexpected error'
    }
}

/**
 *  ->OBTENER LAS SERIES POPULARES CON SERVICE
 *      endpoint: popular
 */

export const popularSeriesService = async () => {
    const response = await get('/tv/popular')

    const data = serviceSplitSeries(response.results, 5)

    return data
}

export const topSeries = async () => {
    const response = await get('/tv/top_rated')

    const data = serviceSplitSeries(response.results, 5)

    return data
}

export const searchSerie = async (params) => {
    const page = params?.page ? params?.page : 1
    const response = await get(`/search/tv?query=${params?.query}&year=${params?.date}&languaje=${params?.languaje}&page=${page}`)
    const pages = response.total_pages
    const data = cleanDirtyJSONSeries(response)
    return { data, pages }
}