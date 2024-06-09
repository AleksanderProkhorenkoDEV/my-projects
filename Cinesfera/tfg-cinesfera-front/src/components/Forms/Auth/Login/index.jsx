'use client'

import { validationSchema } from '@/lib/validation/loginForm/validation'
import useValidation from '@/hooks/validation/useValidation'
import useLogin from '@/hooks/auth/login/useLogin'
import style from './style/Login.module.css'
import Button from '@/components/Buttons'

const LoginForm = () => {

    const { register, handleSubmit, errors, setValue } = useValidation(validationSchema)

    const { sendLogin, isLoading } = useLogin({ setValue })

    return (
        <div className={style.div}>
            <form className={style.form} onSubmit={handleSubmit(sendLogin)}>
                <h1 className={style.title}>Log In</h1>
                <p className={style.containerLabel}>
                    <label className={style.label} htmlFor="email">Email</label>
                    <input className={style.input}
                        type="email"
                        {...register('email')} />
                    {errors?.email?.message && <p className={style.error}>{errors?.email?.message}</p>}
                </p>
                <p className={style.containerLabel}>
                    <label className={style.label} htmlFor="">Password</label>
                    <input className={style.input}
                        type="password"
                        {...register('password')} />
                    {errors?.password?.message && <p className={style.error}>{errors?.password?.message}</p>}
                </p>
                <Button
                    type={'submit'}
                    label={'Log In'}
                    styleType='formButton'
                    isLoading={isLoading} />
            </form>
        </div>
    )
}

export default LoginForm