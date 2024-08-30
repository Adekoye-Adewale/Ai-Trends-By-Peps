import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Newsletter() {

        const { register, handleSubmit, reset, formState: { errors } } = useForm();
        const [ status, setStatus ] = useState('');
        const [errorMessage, setErrorMessage] = useState('');

        const onSubmit = async (data) => {
                setStatus('loading');
                setErrorMessage('');

                try {
                        const res = await fetch('/api/subscribe', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ email: data.email }),
                        });

                        const result = await res.json();

                        if (res.ok) {
                                setStatus('success');
                                reset();
                        } else {
                                setStatus('error');
                                setErrorMessage(result.error || 'An unexpected error occurred.');
                        }
                } catch (error) {
                        setStatus('error');
                        setErrorMessage('Fetch Error: ' + error.message);
                }
        };

        return (
                <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col gap-2'
                >
                        <label 
                                htmlFor="email"
                                className='hidden'
                        >
                                Your email address
                        </label>
                        <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='sample@email.com'
                                {...register("email", {
                                        required: "Email Address is required",
                                        pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                message: "Please enter a valid email address"
                                        },
                                        minLength: {
                                                value: 7,
                                                message: "Email must be at least 7 characters long"
                                        },
                                        maxLength: {
                                                value: 50,
                                                message: "Email cannot exceed 50 characters"
                                        },
                                        // validate: {
                                        //         notGmail: value =>
                                        //                 !value.endsWith("@gmail.com") || "Gmail addresses are not allowed"
                                        // }
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                                className='py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md text-LightColor-400 bg-transparent placeholder:text-LightColor-700'
                        />
                        {errors.email && 
                                <span 
                                        role="alert"
                                        className='text-[#c00000] text-center text-xs'
                                >
                                        {errors.email?.message}
                                </span>}
                        <input
                                type="submit"
                                value="Subscribe"
                                className='py-2 px-10 rounded-md text-DarkColor-800 font-semibold bg-mainColor-500 cursor-pointer transition-all duration-300 hover:text-mainColor-400 hover:bg-DarkColor-700'
                        />

                        {status === 'loading' && <p className="text-mainColor-800 text-xs text-center">Loading...</p>}
                        {status === 'success' && <p className="text-[#009100] text-xs text-center">Success! Check your email to confirm subscription.</p>}
                        {status === 'error' && <p className="text-[#c00000] text-xs text-center">{errorMessage}</p>}
                </form>
        )
}
