'use client'

import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'sonner';

const FormContact = ({ email_title, message, buton_text, succes_text, error_text }: { email_title: string, message: string, buton_text: string, succes_text: string, error_text: string }) => {

    const [state, handleSubmit] = useForm("mrbgzdbo");

    if (state.succeeded) {
        toast.success(succes_text)
    }

    if (state.errors) {
        toast.error(error_text)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-11/12 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-gray-700 font-semibold">
                    {email_title}:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-gray-700 font-semibold">
                    Message:
                </label>
                <textarea
                    id="message"
                    name={message}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[8rem]"
                    placeholder="Write your message"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className=" font-semibold py-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-md font-semibold bg-indigo-600 hover:bg-indigo-500 dark:text-neutral-200"
            >
                {buton_text}
            </button>
        </form>

    );
}

export default FormContact