import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const { logInUser, googleLogin } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");

        setError("");
        setSuccess(false);

        const haveDigitExp = /(?=.*\d)/;
        const haveLowerCase = /(?=.*[a-z])/;
        const haveUpperCase = /(?=.*[A-Z])/;
        const haveLength = /^.{6,}$/;

        if (!haveLength.test(password)) {
            setError("Password must be at least 6 character or long.");
            toast.error("Password must be at least 6 character or long.");
            return;
        } else if (!haveDigitExp.test(password)) {
            setError("Password must have at least one Digit!!!");
            toast.error("Password must have at least one Digit!!!");
            return;
        } else if (!haveLowerCase.test(password)) {
            setError("Password must have one Lowercase Letter!");
            toast.error("Password must have one Lowercase Letter!");
            return;
        } else if (!haveUpperCase.test(password)) {
            setError("Password must have one Uppercase Letter!");
            toast.error("Password must have one Uppercase Letter!");
            return;
        }

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                setSuccess(true);
                toast.success("Login Successfull!");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                toast.error(`Login Failed : ${error.message}`);
                setError(error.code);
            });
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();

        googleLogin()
            .then((result) => {
                toast.success("Login with Google Successfull!");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                toast.error(`Google Login Attemp Failed : ${error.message}`);
                setError(error.code);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border w-3/6 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">
                        Login now!
                    </h1>
                    <form onSubmit={handleLogin} className="fieldset">
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
                            <p className="text-base font-medium">
                                Don't have an Account?{" "}
                                <Link
                                    className="link-hover text-blue-400"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>


                        {/* showing error message */}
						<div>
                            {
                                error && <p className="  max-w-fit rounded-md text-red-500 font-semibold">{error}</p>
                            }
                        </div>

                        <div>
                            {/* Google */}
                            <button
                                onClick={handleGoogleLogin}
                                className="btn bg-white text-black border-[#e5e5e5] w-full h-12 hover:bg-base-300"
                            >
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

                        <div className="flex w-full flex-col">
                            <div className="divider">OR</div>
                        </div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
