'use client'

import useLogout from "@/hooks/auth/logout/useLogout"
import Button from ".."

const LogoutButton = () => {

    const { sendLogout, isLoadin } = useLogout()

    return (
        <Button
            type="button"
            label={'Log Out'}
            isLoading={isLoadin}
            onClick={sendLogout}
            id={'logout'} />
    )
}

export default LogoutButton