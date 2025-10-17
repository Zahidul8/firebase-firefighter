import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MyContainer from "../Components/MyContainer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { toast } from "react-toastify";
import { useState } from "react";


const Signup = () => {

    const [show, setShow] = useState(false);

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

        if (!passwordPattern.test(password)) {
            toast.error("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character.")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                toast.success('SignUp is successful');

                
            })
            .catch(error => {
                console.log(error.code);
                const code = error.code;
                let message = "";

                // 🔥 Authentication Errors
                if (code === "auth/invalid-email") {
                    message = "Invalid email address format.";
                } else if (code === "auth/missing-email") {
                    message = "Please enter your email address.";
                } else if (code === "auth/missing-password") {
                    message = "Please enter your password.";
                } else if (code === "auth/weak-password") {
                    message = "Password should be at least 6 characters.";
                } else if (code === "auth/email-already-in-use") {
                    message = "This email is already registered.";
                } else if (code === "auth/user-not-found") {
                    message = "No account found with this email.";
                } else if (code === "auth/wrong-password") {
                    message = "Incorrect password. Please try again.";
                } else if (code === "auth/user-disabled") {
                    message = "This account has been disabled. Please contact support.";
                } else if (code === "auth/popup-closed-by-user") {
                    message = "The sign-in popup was closed before completing sign-in.";
                } else if (code === "auth/cancelled-popup-request") {
                    message = "Popup sign-in request cancelled.";
                } else if (code === "auth/account-exists-with-different-credential") {
                    message =
                        "An account already exists with this email but different sign-in method.";
                } else if (code === "auth/credential-already-in-use") {
                    message = "This credential is already associated with another account.";
                } else if (code === "auth/invalid-credential") {
                    message = "The provided credential is invalid or expired.";
                } else if (code === "auth/operation-not-allowed") {
                    message = "This authentication method is not enabled in Firebase console.";
                } else if (code === "auth/network-request-failed") {
                    message = "Network error — please check your internet connection.";
                } else if (code === "auth/too-many-requests") {
                    message =
                        "Too many failed attempts. Please try again later or reset your password.";
                } else if (code === "auth/requires-recent-login") {
                    message = "Please reauthenticate before performing this action.";
                } else if (code === "auth/invalid-verification-code") {
                    message = "Invalid verification code. Please try again.";
                } else if (code === "auth/invalid-verification-id") {
                    message = "Invalid verification ID. Please try again.";


                }

                toast.error(message);

                })


    }


    return (
        <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
            {/* Animated floating circles */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
            </div>

            <MyContainer>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                    <div className="max-w-lg text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold drop-shadow-lg">
                            Create Your Account
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Join our community and unlock exclusive features. Your journey
                            begins here!
                        </p>
                    </div>

                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                            Sign Up
                        </h2>

                        <form onSubmit={handleSignUp} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={show ? 'text' : 'password'}
                                        name="password"
                                        placeholder="••••••••"
                                        className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                    <span onClick={() => setShow(!show)} className="absolute top-3 right-6 z-10 cursor-pointer">{show ? <FaEyeSlash /> : <FaEye />}</span>
                                </div>

                            </div>

                            <button type="submit" className="my-btn bg-linear-65 from-purple-500 to-pink-500 w-full py-2 cursor-pointer">
                                Sign Up
                            </button>

                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>



                            <div className="text-center mt-3">
                                <p className="text-sm text-white/80">
                                    Already have an account?{" "}
                                    <Link
                                        to="/signin"
                                        className="text-pink-300 hover:text-white font-medium underline"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Signup;