import React from 'react';

const PageWrapper = ({children}) => {
    return (
        <div className="bg-gray-100 min-h-screen md:px-4">
            <div className="w-full md:w-3/4 mx-auto bg-white shadow-md rounded-lg p-8">
                {children}
            </div>
            <div className="flex justify-end py-4">
                <p className="w-[80%] lg:w-1/5 text-[17px] italic">Sajt je nastao u okviru projekta "TRADICIJA ALBANACA U MALESIJI KAO BOGASTVO KOJE SPAJA" podržanog od Fonda za zaštitu i ostvarivanje manjinskih prava Crne Gore</p>
            </div>
            <p className="text-center text-xl pb-2 font-semibold">Iznijeti stavovi su isključivo odgovornost autora i/ili izdavača i nužno ne izražavaju stavove Fonda.</p>
        </div>
    );
};

export default PageWrapper;