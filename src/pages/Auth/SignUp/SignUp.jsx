import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [axiosSecure] = useAxiosSecure();
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, role: 'student' }
                        axiosSecure.post('/users', saveUser)
                            .then(data => {
                                console.log(data);
                                if (data.data.acknowledged) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(err => console.log(err))
            })

    };

    return (
        <div className="bg-blue-500 min-h-screen flex justify-center items-center">
            <div className="bg-white w-96 p-8 rounded shadow">
                <h2 className="text-2xl mb-4 text-center">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.name && <p className="text-red-500 mt-1 text-sm">Name is required</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.email && <p className="text-red-500 mt-1 text-sm">Email is required</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                                })}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 p-2 rounded pr-10"
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 14a5 5 0 0110 0v2a1 1 0 01-1 1H8a1 1 0 01-1-1v-2z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7.828 7.828A4 4 0 005.05 10.05M16.172 7.828A4 4 0 0118.95 10.05M4 4l16 16"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {errors.password && errors.password.type === 'required' && (
                            <p className="text-red-500 mt-1 text-sm">Password is required</p>
                        )}
                        {errors.password && errors.password.type === 'minLength' && (
                            <p className="text-red-500 mt-1 text-sm">Password must be at least 6 characters long</p>
                        )}
                        {errors.password && errors.password.type === 'pattern' && (
                            <p className="text-red-500 mt-1 text-sm">Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register('confirmPassword', {
                                required: true,
                                validate: (value) => value === watch('password')
                            })}
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                            <p className="text-red-500 mt-1 text-sm">Confirm Password is required</p>
                        )}
                        {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                            <p className="text-red-500 mt-1 text-sm">Passwords do not match</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block mb-2">Photo URL</label>
                        <input
                            type="text"
                            id="photoUrl"
                            {...register('photoUrl')}
                            placeholder="Enter the URL of your photo"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Already have an account?</p>
                    <a href="/login" className="text-blue-600 underline">Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;