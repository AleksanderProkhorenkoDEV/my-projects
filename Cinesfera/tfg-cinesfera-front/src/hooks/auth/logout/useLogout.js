'use client'

import { displayErrorMessage, displaySuccesMessage } from "@/lib/Static/Static"
import { logoutRequest } from "@/lib/Requests/auth/authRequest"
import useEmailStore from "@/hooks/Context/useStore"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useState } from "react"

const useLogout = ( ) => {
    const [isLoading, setLoading] = useState(false)
    const resetContext = useEmailStore(state => state.resetState)
    const router = useRouter()

    const handleResponse = ( status, response ) => {
        if(status != 200){
            displayErrorMessage('We could not log you out there was an error.')
        }else{
            displaySuccesMessage(response.message)
            deleteCookie('user_token')
            resetContext()
        }
        setLoading(false)
    }

    const handleErrorResponse = ( message ) => {
        displayErrorMessage(message)
        setLoading(false)
    }


    const sendLogout = async ( ) => {
        setLoading(true)
        await logoutRequest('/auth/logout', handleResponse, handleErrorResponse)
        router.push('/')
    }

    return { isLoading, sendLogout }
}

export default useLogout