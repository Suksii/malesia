import React from 'react';
import {useNavigate} from "react-router-dom";
import {FaArrowLeftLong} from "react-icons/fa6";

const ErrorPage = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-950">
            <div className="relative">
                <h1 className="text-[16rem] font-bold text-orange-600 mb-4">404</h1>
                <h2 className="absolute text-2xl left-1/2 -translate-x-1/2 bottom-1/3 translate-y-1/2 font-semibold py-1 px-2 rounded-md bg-gray-100 transform -rotate-12">Page not found</h2>
            </div>
            <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300" onClick={goBack}>
                <FaArrowLeftLong />
                <span>Idi nazad</span>
            </button>
        </div>
    );
};

export default ErrorPage;