import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ContactForm({ handleClickClose }) {

        const [ status, setStatus ] = useState("idle"); // 'idle', 'loading', 'success', or 'error'
        const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

        const onSubmit = async (data) => {
                setStatus("loading"); // Set to 'loading' when form submission starts

                const formData = new FormData();
                formData.append('fullname', data.fullname);
                formData.append('email', data.email);
                formData.append('phoneNumber', data.phoneNumber);
                formData.append('resourceOfInterest', data.resourceOfInterest);
                formData.append('state', data.state);
                formData.append('country', data.country);
                formData.append('fieldOfWork', data.fieldOfWork);

                try {
                        const response = await axios.post(`/api/email`, formData);
                        if (response.data.success) {
                                setStatus("success"); // Set to 'success' if submission succeeds
                        } else {
                                setStatus("error"); // Set to 'error' if API indicates failure
                        }
                } catch (error) {
                        setStatus("error", error); // Set to 'error' if an exception occurs
                        console.error('An error occurred:', error);
                } finally {
                        reset(); // Reset form fields
                        setTimeout(() => {
                                setStatus("idle"); // Reset status after 3 seconds
                                handleClickClose();
                        }, 3000);
                }
        }

        return (
                <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col gap-5'
                >
                        {/* Full Name Field */}
                        <span className='flex flex-col gap-2'>
                                <label
                                        htmlFor="fullname"
                                >
                                        Full name
                                </label>
                                <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        placeholder='John Doe'
                                        {...register("fullname", {
                                                required: "Full name is required",
                                                minLength: {
                                                        value: 5,
                                                        message: "Full name must be at least 5 characters long"
                                                },
                                                maxLength: {
                                                        value: 50,
                                                        message: "Full name cannot exceed 50 characters"
                                                },
                                        })}
                                        aria-invalid={errors.fullname ? "true" : "false"}
                                        className='py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md rounded-r-none bg-transparent placeholder:text-LightColor-700/65'
                                />       
                                {errors.fullname && (
                                        <span role="alert" className="text-red-600">
                                                {errors.fullname.message}
                                        </span>
                                )}                         
                        </span>

                        {/* Email Field */}
                        <span className='flex flex-col gap-2'>
                                <label
                                        htmlFor="email"
                                >
                                        Email
                                </label>
                                <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder='sample@email.com'
                                        {...register("email", {
                                                required: "email is required",
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
                                        })}
                                        aria-invalid={errors.email ? "true" : "false"}
                                        className='py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md bg-transparent placeholder:text-LightColor-700/65'
                                />                                
                        </span>
                        
                        {/* Phone Number Field */}
                        <div className="flex flex-col gap-2">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <Controller
                                        name="phoneNumber"
                                        control={control}
                                        rules={{
                                                required: "Phone number is required",
                                                pattern: {
                                                        value: /^\+?[1-9]\d{1,14}$/,
                                                        message: "Please enter a valid phone number",
                                                },
                                                minLength: {
                                                        value: 6,
                                                        message: "Phone number must be at least 6 characters long",
                                                },
                                                maxLength: {
                                                        value: 15,
                                                        message: "Phone number cannot exceed 15 characters",
                                                },
                                        }}
                                        render={({ field }) => (
                                                <PhoneInput
                                                        international
                                                        countryCallingCodeEditable={false}
                                                        defaultCountry="QA"
                                                        placeholder="Enter phone number"
                                                        {...field}
                                                        className="py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md bg-transparent"
                                                />
                                        )}
                                />
                                {errors.phoneNumber && (
                                        <span role="alert" className="text-red-600">
                                                {errors.phoneNumber.message}
                                        </span>
                                )}
                        </div>

                        {/* Resource of Interest Field */}
                        <div className="flex flex-col gap-2">
                                <label htmlFor="resourceOfInterest">Resource of interest</label>
                                <select
                                        id="resourceOfInterest"
                                        {...register("resourceOfInterest", { required: "Please select a resource" })}
                                        aria-invalid={errors.resourceOfInterest ? "true" : "false"}
                                        className="py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md bg-transparent"
                                >
                                        <option value="">Select an option</option>
                                        <option value="ebook">Ebook</option>
                                        <option value="courses">Courses</option>
                                        <option value="templates">Templates</option>
                                </select>
                                {errors.resourceOfInterest && (
                                        <span role="alert" className="text-red-600">
                                                {errors.resourceOfInterest.message}
                                        </span>
                                )}
                        </div>

                        {/* Location Fields */}
                        <div className="flex flex-col gap-2">
                                <label 
                                        htmlFor="location"
                                >
                                        Location
                                </label>
                                <input
                                        type="text"
                                        id="state"
                                        placeholder="State"
                                        {...register("state", { required: "State is required" })}
                                        aria-invalid={errors.state ? "true" : "false"}
                                        className="py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md bg-transparent placeholder:text-LightColor-700/65"
                                />
                                {errors.state && (
                                        <span role="alert" className="text-red-600">
                                                {errors.state.message}
                                        </span>
                                )}

                                <input
                                        type="text"
                                        id="country"
                                        placeholder="Country"
                                        {...register("country", { required: "Country is required" })}
                                        aria-invalid={errors.country ? "true" : "false"}
                                        className="py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md bg-transparent placeholder:text-LightColor-700/65"
                                />
                                {errors.country && (
                                        <span role="alert" className="text-red-600">
                                                {errors.country.message}
                                        </span>
                                )}
                        </div>

                        {/* Field of Work */}
                        <div className="flex flex-col gap-2">
                                <label htmlFor="fieldOfWork">Present field of work</label>
                                <input
                                        type="text"
                                        id="fieldOfWork"
                                        placeholder="Your field of work"
                                        {...register("fieldOfWork", { required: "Field of work is required" })}
                                        aria-invalid={errors.fieldOfWork ? "true" : "false"}
                                        className="py-1 px-3 outline-1 outline outline-mainColor-500 rounded-md bg-transparent placeholder:text-LightColor-700/65"
                                />
                                {errors.fieldOfWork && (
                                        <span role="alert" className="text-red-600">
                                                {errors.fieldOfWork.message}
                                        </span>
                                )}
                        </div>

                        {/* Status Messages */}
                        {status === "loading" && (
                                <div className='bg-mainColor-800 py-2 px-5 rounded-lg'>
                                        <p className="text-DarkColor-300 font-medium">Loading...</p>
                                </div>
                        )}
                        {status === "success" && (
                                <div className='bg-mainColor-800 py-2 px-5 rounded-lg'>
                                        <p className="text-mainColor-300 font-medium">Form submitted successfully!</p>
                                </div>
                        )}
                        {status === "error" && (
                                <div className='bg-red-900 py-2 px-5 rounded-lg'>
                                        <p className="text-red-300 font-medium">An error occurred. Please try again.</p>
                                </div>
                        )}

                        <input
                                type="submit"
                                value={status === "loading" ? "Submitting..." : "Submit"}
                                disabled={status === "loading"}
                                className='py-2 px-6 rounded-lg border-solid border border-mainColor-500 outline-1 outline outline-mainColor-500 text-sm text-DarkColor-800 font-semibold bg-mainColor-500 cursor-pointer transition-all duration-300 hover:text-mainColor-400 hover:bg-DarkColor-700'
                        />
                </form>
        )
}
