import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ContactForm() {

        const [ value, setValue ] = useState()
        const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

        const onSubmit = async (data) => {
                console.log(data);
                reset();
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

                        <input
                                type="submit"
                                value="Subscribe"
                                className='py-2 px-6 rounded-lg border-solid border border-mainColor-500 outline-1 outline outline-mainColor-500 text-sm text-DarkColor-800 font-semibold bg-mainColor-500 cursor-pointer transition-all duration-300 hover:text-mainColor-400 hover:bg-DarkColor-700'
                        />
                </form>
        )
}
