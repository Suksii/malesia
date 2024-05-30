import React from 'react';

const PageWrapper = ({children}) => {
    return (
        <div className="bg-gray-100 min-h-screen md:py-10 md:px-4">
            <div className="w-full md:w-3/4 mx-auto bg-white shadow-md rounded-lg p-8">
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;