import React from 'react';
import slika7 from '../assets/slika7.jpg';
import slika2 from '../assets/slika2.jpg';
import slika4 from '../assets/slika4.jpg';
import { motion } from 'framer-motion';

const HistoryPage = () => {

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }
    const partVariants = {
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div variants={containerVariants}
                    initial="hidden"
                    whileInView="show">
            <motion.h1 variants={partVariants} className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Istorija Albanskog Stanovništva u Malesiji</motion.h1>
            <div className="flex md:gap-10 items-center flex-col lg:flex-row">
                <motion.p variants={partVariants} className="text-xl xl:py-10 px-4 leading-8">
                    Albanci u Malesiji imaju dugu i složenu istoriju. Ovaj region je kroz vjekove bio dio različitih država i političkih entiteta. U doba Osmanskog carstva, mnogi Albanci su zadržali svoju kulturu i jezik, uprkos pokušajima asimilacije. Kasnije, sa širenjem Kraljevine Crne Gore, Malesija je postala dio crnogorske države, ali su Albanci i dalje uspeli da očuvaju svoj identitet.
                </motion.p>
                <motion.img variants={partVariants} src={slika4} alt={slika7} className="w-[400px] md:h-[40vh] object-cover xl:mt-10 mb-10"/>
            </div>
            <div className="flex gap-10 items-center flex-col xl:flex-row-reverse">
                <motion.p variants={partVariants} className="text-xl xl:py-10 px-4 leading-8">
                    U 20. vijeku, region je prolazio kroz turbulentne periode, uključujući Drugi svjetski rat i socijalističku eru Jugoslavije. Tokom socijalističkog perioda, postojali su pokušaji homogenizacije stanovništva, ali su Albanci u Malesiji i dalje održavali svoju kulturu, jezik i običaje. Poslije raspada Jugoslavije i sticanja nezavisnosti Crne Gore 2006. godine, Albanci su dobili veće mogućnosti za političku reprezentaciju i očuvanje svog identiteta.
                </motion.p>
                <motion.img variants={partVariants} src={slika2} alt={slika7} className="w-full xl:w-[80%] xl:h-[60vh] object-cover"/>
            </div>
        </motion.div>
    );
};

export default HistoryPage;