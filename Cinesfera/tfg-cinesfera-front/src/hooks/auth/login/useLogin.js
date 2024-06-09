'use client'

import { displayErrorMessage, displaySuccesMessage } from "@/lib/Static/Static"
import { loginRequest } from "@/lib/Requests/auth/authRequest"
import useEmailStore from "@/hooks/Context/useStore"
import { useRouter } from "next/navigation"
import { setCookie } from 'cookies-next'
import { useState } from "react"


const useLogin = ({ setValue }) => {
    const [isLoading, setLoading] = useState(false)

    const router = useRouter()

    const setEmail = useEmailStore(state => state.setEmail)
    const setName = useEmailStore(state => state.setName)
    const setId = useEmailStore(state => state.setId)

    const cleanDirtyFields = () => {
        setValue('email', "")
        setValue('password', '')
    }

    const handleResponse = (status, result) => {
        if (status != 200) {
            displayErrorMessage(result.message)
        } else {
            displaySuccesMessage(`Hello ${result.user.name} you are loged now again`)
            setEmail(result?.user?.email)
            setName(result?.user?.name)
            setId(result?.user.id)
            setCookie('user_token', result.token);
            cleanDirtyFields()
        }
        setLoading(false)
    }

    const handleErrorResponse = (message) => {
        displayErrorMessage(message)
        setLoading(false)
    }

    const handleFinallyResponse = () => {
        setLoading(false)
    }

    const sendLogin = async (dataForm) => {
        setLoading(true)
        const sanetizeFields = {
            email: dataForm.email,
            password: dataForm.password
        }
        await loginRequest('/auth/login', sanetizeFields, handleResponse, handleErrorResponse, handleFinallyResponse)
        router.push('/profile')
    }

    return { isLoading, sendLogin }
}

export default useLogin