import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col w-full mb-4">
            {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}

            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg bg-gray-100 focus-within:border-purple-600">
                <input
                    type={type === "password" ? (showPassword ? "text" : "password") : type}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-gray-700"
                    value={value}
                    onChange={onChange}
                />

                {type === "password" && (
                    showPassword ? (
                        <FaRegEye
                            size={22}
                            className="text-purple-600 cursor-pointer"
                            onClick={toggleShowPassword}
                        />
                    ) : (
                        <FaRegEyeSlash
                            size={22}
                            className="text-gray-400 cursor-pointer"
                            onClick={toggleShowPassword}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Input;
