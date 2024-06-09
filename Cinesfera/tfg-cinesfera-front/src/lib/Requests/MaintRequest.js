'use server'

import { API_URL } from "@/constants/Api"
import { getCookie } from "cookies-next"
import { cookies } from 'next/headers'


export const request = async (endPoint, options) => {

    const response = await fetch(`${API_URL}${endPoint}`, options)
    const data = await response.json()
    // console.log( await response.text());
    return data
}

export const get = async (endPoint) => {
    const cookie = getCookie('user_token', { cookies })
    return request(endPoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
        },
    })
}

export const post = async (endPoint, params) => {
    const cookie = getCookie('user_token', { cookies })
    return await request(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
        },
        body: JSON.stringify(params)
    })
}

export const delet = async (endPoint) => {
    const cookie = getCookie('user_token', { cookies })
    return await request(endPoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
        },
    })
}