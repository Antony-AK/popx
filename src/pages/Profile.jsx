import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.jpeg";

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="h-full relative">
            {/* Header */}
            <div className="p-6 ">
                <h2 className="text-lg font-semibold mt-1">Account Settings</h2>
            </div>

            {/* User Info */}
            <div className="bg-gray-100">
                <div className="p-6 flex gap-4 ">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-purple-600 w-5 h-5 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs -mt-1">📷</span>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-sm">
                            {user?.name || "Marry Doe"}
                        </p>
                        <p className="text-xs text-gray-500">
                            {user?.email || "marry@gmail.com"}
                        </p>
                    </div>
                </div>


                {/* Description */}
                <p className="px-6 text-sm text-gray-600 leading-relaxed">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
                    Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                    Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>



                {/* Dotted Separator */}
                <div className=" mt-10 border-t-2 border-gray-200 font-medium border-dashed"></div>
            </div>

            <div className="absolute bottom-10 left-0 h-[20%]  w-full z-10 border-b-2 border-gray-200 font-medium border-dashed"></div>

        </div>
    );
}
