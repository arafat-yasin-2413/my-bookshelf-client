import React from "react";
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border w-2xl shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Register now!</h1>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label fieldset-legend text-base">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input w-full h-12"
                            placeholder="your name"
                        />
                        {/* email */}
                        <label className="label fieldset-legend text-base">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="input w-full h-12"
                            placeholder="email"
                        />

                        {/* photoURL */}
                        <label className="label fieldset-legend text-base">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            className="input w-full h-12"
                            placeholder="photo URL"
                        />

                        {/* password */}
                        <label className="label fieldset-legend text-base">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="input w-full h-12"
                            placeholder="Password"
                        />

                        <div>
                            <Link className="link link-hover fieldset-legend">
                                Forgot password?
                            </Link>
                        </div>

                        <div>
                            {/* Google */}
                            <button className="btn bg-white text-black border-[#e5e5e5] w-full h-12 hover:bg-base-300">
                                <svg
                                    aria-label="Google logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <g>
                                        <path
                                            d="m0 0H512V512H0"
                                            fill="#fff"
                                        ></path>
                                        <path
                                            fill="#34a853"
                                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                        ></path>
                                        <path
                                            fill="#4285f4"
                                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                        ></path>
                                        <path
                                            fill="#fbbc02"
                                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                        ></path>
                                        <path
                                            fill="#ea4335"
                                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                        ></path>
                                    </g>
                                </svg>
                                Login with Google
                            </button>
                        </div>

                        <button className="btn btn-neutral mt-4">
                            Register
                        </button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;
