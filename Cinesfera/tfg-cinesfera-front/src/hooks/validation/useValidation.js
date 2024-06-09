import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"

const useValidation = (validationSchema) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(validationSchema)
    })

    return { register, handleSubmit, errors, setValue}
}

export default useValidation