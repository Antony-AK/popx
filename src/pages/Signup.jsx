import React, { useState } from "react";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "yes",
    });

    const [errors, setErrors] = useState({});

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isFormValid = () => {
        return (
            form.fullName &&
            form.phone &&
            isValidEmail(form.email) &&
            form.password &&
            form.agency
        );
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = () => {
        let newErrors = {};

        if (!form.fullName) newErrors.fullName = "Full name is required";
        if (!form.phone) newErrors.phone = "Phone number is required";

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!form.password) newErrors.password = "Password is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Please fix the highlighted errors");
            return;
        }

        localStorage.setItem(
            "user",
            JSON.stringify({
                name: form.fullName,
                email: form.email,
            })
        );

        toast.success("Account created successfully");
        navigate("/profile");

    };


    return (
        <div className="p-6 flex flex-col h-screen ">
            {/* Heading */}
            <h2 className="text-[22px] font-bold mb-6 leading-snug">
                Create your <br /> PopX account
            </h2>

            {/* Full Name */}
            <div className="relative mb-6">
                <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`peer w-full border rounded-md px-3 py-3 text-sm focus:outline-none
            ${errors.fullName
                            ? "border-red-500"
                            : "border-gray-300 focus:border-purple-600"
                        }`}
                />
                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${form.fullName
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600`}
                >
                    Full Name<span className="text-red-500 "> * </span>
                </label>

                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.fullName}
                    </p>
                )}

            </div>

            {/* Phone */}
            <div className="relative mb-6">
                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`peer w-full border rounded-md px-3 py-3 text-sm focus:outline-none
            ${errors.phone
                            ? "border-red-500"
                            : "border-gray-300 focus:border-purple-600"
                        }`}
                />
                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${form.phone
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600`}
                >
                    Phone number<span className="text-red-500 "> * </span>
                </label>
                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                    </p>
                )}

            </div>

            {/* Email */}
            <div className="relative mb-6">
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`peer w-full border rounded-md px-3 py-3 text-sm focus:outline-none
            ${errors.email
                            ? "border-red-500"
                            : "border-gray-300 focus:border-purple-600"
                        }`}
                />
                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${form.email
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600`}
                >
                    Email address<span className="text-red-500 "> * </span>
                </label>
                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                    </p>
                )}

            </div>

            {/* Password */}
            <div className="relative mb-6">
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className={`peer w-full border rounded-md px-3 py-3 text-sm focus:outline-none
            ${errors.password
                            ? "border-red-500"
                            : "border-gray-300 focus:border-purple-600"
                        }`}
                />
                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${form.password
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600`}
                >
                    Password<span className="text-red-500 "> * </span>
                </label>
                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.password}
                    </p>
                )}

            </div>

            {/* Company */}
            <div className="relative mb-8">
                <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:border-purple-600"
                />
                <label
                    className={`absolute left-3 bg-white px-1.5 transition-all duration-200
            ${form.company
                            ? "-top-2 text-xs text-purple-600 font-medium"
                            : "top-3 text-sm text-gray-400"
                        }
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600`}
                >
                    Company name
                </label>
            </div>

            {/* Agency */}
            <p className="text-sm font-medium mb-2">
                Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="flex gap-6 mb-10">
                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="radio"
                        name="agency"
                        value="yes"
                        checked={form.agency === "yes"}
                        onChange={handleChange}
                        className="accent-purple-600"
                    />
                    Yes
                </label>

                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="radio"
                        name="agency"
                        value="no"
                        checked={form.agency === "no"}
                        onChange={handleChange}
                        className="accent-purple-600"
                    />
                    No
                </label>
            </div>

            {/* Button */}
            <div className="mt-28">
                <Button text="Create Account" onClick={handleSignup} />
            </div>
        </div>
    );
}
