import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // to get the whole object
        const { email, password, ...rest } = Object.fromEntries(
            formData.entries()
        );

        // console.log(email, password, rest);

        // to get specific field
        // const email = formData.get("email");
        // const password = formData.get("password");
        const name = formData.get("name");
        const photo = formData.get("photoURL");

        // console.log(email, name);

        createUser(email, password)
            .then((result) => {
                result.user.displayName = name;
                result.user.photoURL = photo;
                console.log(result.user);

                const userProfile = {
                    email,
                    ...rest,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime,
                };

                // save profile in DB
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userProfile),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("after saving the profile", data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User info saved to DB",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
            })
            .catch((error) => {
                console.log(error);
            });

        form.reset();
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border w-2xl shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">
                        Register now!
                    </h1>
                    <form onSubmit={handleRegister} className="fieldset">
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
                            <p className="text-base font-medium">
                                Already have an Account?{" "}
                                <Link
                                    className="link-hover text-blue-400"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>

                        <div className="mt-2">
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

                        <div className="flex w-full flex-col">
                            <div className="divider">OR</div>
                        </div>

                        <button className="btn btn-neutral mt-4">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
