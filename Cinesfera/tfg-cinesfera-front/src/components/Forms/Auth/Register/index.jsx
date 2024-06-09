'use client'

import { validationSchema } from '@/lib/validation/registerForm/validation'
import useValidation from '@/hooks/validation/useValidation'
import useRegister from '@/hooks/auth/register/useRegister'
import style from'./style/Register.module.css'
import Button from '@/components/Buttons'

const RegisterForm = () => {

    const { register, handleSubmit, errors, setValue } = useValidation(validationSchema)
    const { sendRegister, isLoading } = useRegister({ setValue })
    
    return (
        <div className={style.div}>
            <form className={style.form} onSubmit={handleSubmit(sendRegister)}>
            <h1 className={style.title}>Register</h1>
            <p className={style.containerLabel}>
                <label className={style.label} htmlFor="display_name">Display name</label>
                    <input className={style.input}
                        type="text"
                        {...register('display_name')} />
                    {errors?.display_name?.message && <p className={style.error}>{errors?.display_name?.message}</p>}
            </p>
            <p className={style.containerLabel}>
                <label className={style.label} htmlFor="name">Name</label>
                    <input className={style.input}
                        type="text"
                        {...register('name')} />
                    {errors?.name?.message && <p className={style.error}>{errors?.name?.message}</p>}
            </p>
            <p className={style.containerLabel}>
                <label className={style.label} htmlFor="email">Email</label>
                    <input className={style.input}
                        type="email"
                        {...register('email')} />
                    {errors?.email?.message && <p className={style.error}>{errors?.email?.message}</p>}
            </p>
            <p className={style.containerLabel}>
                <label className={style.label} htmlFor="password">Password</label>
                <input className={style.input}
                    type="password"
                    {...register('password')} />
                {errors?.password?.message && <p className={style.error}>{errors?.password?.message}</p>}
            </p>
            <p className={style.containerLabel}>
                <label className={style.label} htmlFor="password">Password Confirmation</label>
                <input className={style.input}
                    type="password"
                    {...register('password_confirmation')} />
                {errors?.password_confirmation?.message && <p className={style.error}>{errors?.password_confirmation?.message}</p>}
            </p>
                <Button 
                    label={'Register'}
                    type={'submit'}
                    styleType='formButton'
                    isLoading={isLoading} />
            </form>
        </div>
    )
}

export default RegisterForm