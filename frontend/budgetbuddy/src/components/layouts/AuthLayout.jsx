import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";
import CARD_2 from "../../assets/images/card2.png";

const AuthLayout = ({ children }) => {
    return (
        <div className="flex w-screen h-screen">

            {/* Left Side - Login Section */}
            <div className="w-full md:w-[60vw] px-12 pt-8 pb-12 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-900">Expense Tracker</h2>
                <div className="mt-6">
                    {children}
                </div>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="hidden md:flex w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative items-center justify-center">

                {/* Background Shapes */}
                <div className="w-40 h-40 rounded-[50px] bg-purple-600 absolute -top-5 -left-5" />
                <div className="w-40 h-40 rounded-[30px] bg-violet-500 absolute -bottom-5 -left-5" />

                {/* Income & Expenses Card */}
                <div className="absolute top-9 right-10 bg-white p-5 rounded-xl shadow-lg border border-gray-200/50 z-10 flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[26px] text-white bg-purple-600 rounded-full drop-shadow-lg">
                        <LuTrendingUpDown />
                    </div>
                    <div>
                        <h6 className="text-sm text-gray-600">Track Your Income & Expenses</h6>
                        <span className="text-2xl font-bold">$430,000</span>
                    </div>
                </div>

                {/* Transactions Chart */}
                <img
                    src={CARD_2}
                    className="w-[85%] absolute bottom-6 shadow-lg shadow-blue-400/15"
                    alt="Transactions"
                />
            </div>
        </div>
    );
};

export default AuthLayout;
