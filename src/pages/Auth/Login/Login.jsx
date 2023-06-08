import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Login = () => {
    const [axiosSecure] = useAxiosSecure()

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { googleSignIn, signIn } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student' }
                axiosSecure.post('/users', saveUser)
                    .then(data => {
                        console.log(data.data);
                    })
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-gray-200 p-6 rounded shadow">
                <h2 className="text-2xl mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                {...register('password', { required: true })}
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
                        {errors.password && <p className="text-red-500 mt-1 text-sm">Password is required</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Login
                    </button>
                    <div className="mt-4">
                        <p>Dont have an account? <a href="/signup" className="text-blue-500">Register</a></p>
                    </div>

                </form>
                <div className="mt-4">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded"
                        onClick={() => handleGoogleLogin()}
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;