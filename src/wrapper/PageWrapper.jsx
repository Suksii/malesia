import React from 'react';

const PageWrapper = ({children}) => {
    return (
        <div className="bg-gray-100 min-h-screen md:px-4">
            <div className="w-full md:w-3/4 mx-auto bg-white shadow-md rounded-lg p-8">
                {children}
            </div>
            <p className="text-center text-xl pt-4 pb-2 font-semibold">Iznijeti stavovi su isključivo odgovornost autora i/ili izdavača i nužno ne izražavaju stavove Fonda.</p>
        </div>
    );
};

export default PageWrapper;