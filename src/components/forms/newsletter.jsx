import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Newsletter() {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const [ status, setStatus ] = useState('');

        const onSubmit = async (data) => {
                setStatus('loading');

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
                        } else {
                                setStatus('error');
                                console.error(result.error);
                        }
                } catch (error) {
                        setStatus('error');
                        console.error('Fetch Error:', error);
                }
        };

        return (
                <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col gap-5'
                >
                        <label htmlFor="email">
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
                        />
                        {errors.email && 
                                <span 
                                        role="alert"
                                        className='text-[#ff0000]'
                                >
                                        {errors.email?.message}
                                </span>}
                        <input
                                type="submit"
                                value="Subscribe"
                                className='py-2 px-10 text-DarkColor-800 bg-mainColor-500 cursor-pointer'
                        />

                        {status === 'loading' && <p>Loading...</p>}
                        {status === 'success' && <p className="text-green-500">Success! Check your email to confirm subscription.</p>}
                        {status === 'error' && <p className="text-red-500">Oops! Something went wrong. Please try again.</p>}
                </form>
        )
}
