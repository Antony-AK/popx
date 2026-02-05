import React, { useState } from "react";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    const handleLogin = () => {
        let newErrors = {};

        // basic validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Please fix the highlighted errors");
            return;
        }

        // 🔥 get users from localStorage
        const users = JSON.parse(localStorage.getItem("users"));

        // ❌ No users at all → go to signup
        if (!users || users.length === 0) {
            toast.error("No account found. Redirecting to signup...");
            setTimeout(() => {
                navigate("/signup");
            }, 1500);
            return;
        }

        // 🔍 find user by email
        const foundUser = users.find(
            (u) => u.email === email
        );

        // ❌ Email not found → go to signup
        if (!foundUser) {
            toast.error("User not found. Redirecting to signup...");
            setTimeout(() => {
                navigate("/signup");
            }, 1500);
            return;
        }

        // ❌ Password mismatch
        if (foundUser.password !== password) {
            toast.error("Incorrect password");
            return;
        }

        // ✅ Success → set logged-in user
        localStorage.setItem(
            "user",
            JSON.stringify({
                name: foundUser.name,
                email: foundUser.email,
            })
        );

        toast.success("Login successful");
        navigate("/profile");
    };



    return (
        <div className="p-6 py-10">
            {/* Heading */}
            <h2 className="text-[22px] font-bold mb-2 leading-snug">
                Signin to your <br /> PopX account
            </h2>

            <p className="text-sm text-gray-400 font-medium mb-8">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
            </p>

            {/* Email Input */}
            <div className="relative mb-6">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`peer w-full border rounded-md px-3 py-3 text-sm focus:outline-none
            ${errors.email
                            ? "border-red-500"
                            : "border-gray-300 focus:border-purple-600 "
                        }`}
                />

                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${email
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer:font-medium peer-focus:text-purple-600`}
                >
                    Email Address
                </label>

                {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Password Input */}
            <div className="relative mb-8">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`peer w-full border rounded-md px-3 py-3 text-sm focus:outline-none
            ${errors.password
                            ? "border-red-500"
                            : "border-gray-300 focus:border-purple-600"
                        }`}
                />

                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${password
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600`}
                >
                    Password
                </label>

                {errors.password && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.password}
                    </p>
                )}
            </div>

            {/* Button */}
            <Button
                text="Login"
                disabled={!email || !password}
                onClick={handleLogin}
            />
        </div>
    );
}
