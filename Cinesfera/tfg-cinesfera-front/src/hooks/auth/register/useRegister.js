'use client'

import { displayErrorMessage, displayErrorsMessage, displaySuccesMessage } from "@/lib/Static/Static"
import { registerRequest } from "@/lib/Requests/auth/authRequest"
import useEmailStore from "@/hooks/Context/useStore"
import { useRouter } from 'next/navigation'
import { useState } from "react"

const useRegister = ({ setValue }) => {

    const router = useRouter()

    const [isLoading, setLoading] = useState(false)

    const cleanDirtyFields = () => {
        setValue("display_name", "")
        setValue("name", "")
        setValue("email", "")
        setValue("password", "")
        setValue("password_confirmation", "")
    }

    const handleResponse = (status, result) => {
        if (status != 200) {
            displayErrorsMessage(result)
        } else {
            displaySuccesMessage('You are register now!')
            cleanDirtyFields()
            router.push("/login")
        }
        setLoading(false)
    }

    const handleErrorResponse = (err) => {
        displayErrorMessage(err)
    }

    const handleFinallyResponse = () => {
        setLoading(false)
    }

    const sendRegister = async (dataForm) => {
        setLoading(true)
        const sanetizeFields = {
            display_name: dataForm.display_name,
            name: dataForm.name,
            email: dataForm.email,
            password: dataForm.password,
            password_confirmation: dataForm.password_confirmation
        }
        await registerRequest('/auth/register', sanetizeFields, handleResponse, handleErrorResponse, handleFinallyResponse)
    }


    return { isLoading, sendRegister }
}

export default useRegister