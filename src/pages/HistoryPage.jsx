import React from 'react';
import slika7 from '../assets/slika7.jpg';
import slika1 from '../assets/slika1.jpg';
import slika2 from '../assets/slika2.jpg';
import slika3 from '../assets/slika3.jpg';
import slika4 from '../assets/slika4.jpg';
import slika5 from '../assets/slika5.jpg';

const HistoryPage = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Istorija Albanskog Stanovništva u Malesiji</h1>
            <div className="flex md:gap-10 items-center flex-col lg:flex-row">
                <p className="text-xl xl:py-10 px-4 leading-8">
                    Albanci u Malesiji imaju dugu i složenu istoriju. Ovaj region je kroz vjekove bio dio različitih država i političkih entiteta. U doba Osmanskog carstva, mnogi Albanci su zadržali svoju kulturu i jezik, uprkos pokušajima asimilacije. Kasnije, sa širenjem Kraljevine Crne Gore, Malesija je postala dio crnogorske države, ali su Albanci i dalje uspeli da očuvaju svoj identitet.
                </p>
                <img src={slika4} alt={slika7} className="w-[400px] md:h-[40vh] object-cover xl:mt-10 mb-10"/>
            </div>
            <div className="flex gap-10 items-center flex-col xl:flex-row-reverse">
                <p className="text-xl xl:py-10 px-4 leading-8">
                    U 20. vijeku, region je prolazio kroz turbulentne periode, uključujući Drugi svjetski rat i socijalističku eru Jugoslavije. Tokom socijalističkog perioda, postojali su pokušaji homogenizacije stanovništva, ali su Albanci u Malesiji i dalje održavali svoju kulturu, jezik i običaje. Poslije raspada Jugoslavije i sticanja nezavisnosti Crne Gore 2006. godine, Albanci su dobili veće mogućnosti za političku reprezentaciju i očuvanje svog identiteta.
                </p>
                <img src={slika2} alt={slika7} className="w-full xl:w-[80%] xl:h-[60vh] object-cover"/>
            </div>
        </>
    );
};

export default HistoryPage;