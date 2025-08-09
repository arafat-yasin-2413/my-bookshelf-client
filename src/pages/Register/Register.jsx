import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Register = () => {
    const location = useLocation();
        useEffect(()=>{
            document.title = "Register";
        },[location.pathname])
    

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
	const { createUser, updateUserProfile, user, setUser, googleLogin } = use(AuthContext);
    const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();

		const form = e.target;

		const formData = new FormData(form);
		// const email = formData.get("email");
		// const password = formData.get('password')
		

		setError("");
        setSuccess(false);
        const { email, password, ...rest } = Object.fromEntries(
			formData.entries()
		);

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

		

		createUser(email, password)
			.then((result) => {
				// console.log(result.user);
                // setSuccess(true);
                
                result.user.photURL= formData.get("photoURL");

				// update user profile
				updateUserProfile({
					displayName: formData.get("name"),
					photoURL: formData.get("photoURL"),
				})
					.then(() => {
						setUser({
							...user,
							displayName: formData.get("name"),
							photoURL: formData.get("photoURL"),
						});
					
					})
					.catch((error) => {
						
                        toast.error(error);
						setUser(user);
					});
                    navigate("/");

				const userProfileInfo = {
					email,
					...rest,
					creationTime: result.user?.metadata?.creationTime,
					lastSignInTime: result.user?.metadata?.lastSignInTime,
				};




				// save profile info to the db
				fetch(`${import.meta.env.VITE_API_URL}/users`, {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(userProfileInfo),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.insertedId) {
							// console.log(
							// 	"after profile saved to db : ",
							// 	data
							// );

							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Account Created Successfully",
								showConfirmButton: false,
								timer: 1500,
							});
							form.reset();
						}
					});

                    const desiredPath = location.state?.from?.pathname || "/";
                    navigate(desiredPath);

                    
			})
			.catch((error) => {
				// console.log(error);
				setError(error.message);
                toast.error(`User creation failed : ${error.message}`)
			});
	};




    const handleGoogleLogin = (e) => {
		e.preventDefault();
		// console.log("google diye login korbo");
		googleLogin()
			.then((result) => {
                toast.success("Login with Google Successfull!")
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((error) => {
				// console.log(error);
				setError(error.code);
                toast.error(`Google Login failed: ${error.message}`)
			});
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

                        {/* showing error in the UI */}
                        {
                            error && (
                                <p className="text-red-400 font-semibold">
                                    {error}
                                </p>
                            )
                        }


                        <div>
                            <p className="text-base font-medium">
                                Already have an Account?
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
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full h-12 hover:bg-base-300">
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
