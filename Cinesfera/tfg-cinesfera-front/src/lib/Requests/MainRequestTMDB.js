'use server'

import { API_URL_TMDB, TOKEN_TMDB } from "@/constants/Api"

export const request = async (endPoint, options) => {

    const response = await fetch(`${API_URL_TMDB}${endPoint}`, options)
    const data = await response.json()

    return data
}


export const get = async (endPoint) => {
    return request(endPoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN_TMDB}`
        },
    })
}