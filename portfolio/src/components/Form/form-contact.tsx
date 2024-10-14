'use client'

import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'sonner';

const FormContact = ({email_title, message, buton_text, succes_text, error_text}: {email_title:string, message:string, buton_text:string, succes_text:string, error_text:string}) => {

    const [state, handleSubmit] = useForm("mrbgzdbo");

    if (state.succeeded) {
        toast.success(succes_text)
    }

    if(state.errors){
        toast.error(error_text)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-11/12 '>
            <label htmlFor="email">
                {email_title}
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name={message}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                {buton_text}
            </button>
        </form>
    );
}

export default FormContact