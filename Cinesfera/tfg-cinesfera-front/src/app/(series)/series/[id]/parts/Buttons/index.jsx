'use client'

import { dislikeMedia, likeMedia, searchMedia, searchWatch, unWatchMedia, watchList } from "@/lib/Requests/tmbd_api"
import { displayErrorMessage, displaySuccesMessage, displayWarning } from "@/lib/Static/Static"
import useEmailStore from "@/hooks/Context/useStore"
import style from './style/ActionButtons.module.css'
import { getCookie } from 'cookies-next'
import { useEffect } from "react"
import { useState } from "react"
import Image from "next/image"

const ActionButtons = ({ movie_id, backdrop_path, media_type }) => {
    const user_id = useEmailStore(state => state.id)

    const [isAdded, setAdded] = useState()
    const [isWatched, setWatched] = useState()

    useEffect(() => {
        findMovieDB()
    }, [isAdded, isWatched])

    const findMovieDB = async () => {
        const findMovie = await searchMedia(user_id, movie_id)
        setAdded(findMovie.data)
        const watchMovie = await searchWatch(user_id, movie_id)
        setWatched(watchMovie.data)
    }

    const handleLikeClick = async () => {

        if (getCookie('user_token') != undefined) {
            const response = await likeMedia(user_id, movie_id, 'series', backdrop_path)
            if (response.status < 400) {
                displaySuccesMessage('Movie added to favourite succesful.')
                setAdded(true)
            } else {
                displayErrorMessage('Any failed')
            }
        } else {
            displayWarning('You can´t do this if you aren´t logged')
        }
    }

    const handleWatchClick = async () => {
        if (getCookie('user_token') != undefined) {
            const response = await watchList(user_id, movie_id, backdrop_path, media_type)
            if (response.status < 400) {
                displaySuccesMessage('Movie added to watch list succesful')
                setWatched(true)
            } else {
                displayErrorMessage(response)
            }
        } else {
            displayWarning('You can´t add a movie/serie if you aren´t logged')
        }
    }
    const handleDislikeClick = async () => {
        if (getCookie('user_token') != undefined) {
            const response = await dislikeMedia(user_id, movie_id)
            if (response.status != 404) {
                displaySuccesMessage('Movie remove to watch list succesful')
                setAdded(false)
            } else {
                displayErrorMessage(response.message)
            }
        } else {
            displayWarning('You can´t add a movie/serie if you aren´t logged')
        }
    }

    const handleUnwatchClick = async ( ) => {
        if (getCookie('user_token') != undefined) {
            const response = await unWatchMedia(user_id, movie_id)
            if (response.status != 404) {
                displaySuccesMessage('Movie remove to watch list succesful')
                setWatched(false)
            } else {
                displayErrorMessage(response.message)
            }
        } else {
            displayWarning('You can´t add a movie/serie if you aren´t logged')
        }
    }


     return (
        <div className={style.containerActionButons}>
            {
                !isAdded ? 
                    <div className={style.item} onClick={handleLikeClick}>
                        <Image src={'/images/icons/añadirMegusta.svg'} width={24} height={24} alt="like icon"/>
                    </div> 
                    : 
                    <div className={style.item} onClick={handleDislikeClick}>
                        <Image src={'/images/icons/dislike.svg'} width={24} height={24} alt="Dislike icon"/>
                    </div>
            }
            {
                !isWatched ? 
                    <div className={style.item} onClick={handleWatchClick}>
                        <Image src={'/images/icons/guardar.svg'} width={24} height={24} alt="Save icon"/>
                    </div> 
                    : 
                    <div className={style.item} onClick={handleUnwatchClick}>
                        <Image src={'/images/icons/guardado.svg'} width={24} height={24} alt="Saved icon"/>
                    </div>
            }
        </div>
    )
}

export default ActionButtons