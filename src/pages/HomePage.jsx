import React from 'react';
import slika7 from '../assets/slika7.jpg';
import slika5 from '../assets/slika5.jpg';
import { motion } from "framer-motion";

const HomePage = () => {

    return (
        <>
            <div className="w-full relative">
                <img src={slika7} alt={slika7} className="brightness-75 bg-cover w-full h-[30vh] lg:h-[50vh] filter blur-sm"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2">
                    <motion.h1 initial={{ opacity: 0, y: 50 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 1 }}
                               className="text-3xl md:text-5xl font-bold text-gray-100 text-center backdrop-filter backdrop-blur-none">Albanci u Malesiji</motion.h1>
                </div>
            </div>
            <div className="w-[90%] md:w-[70%] mx-auto text-center text-2xl py-10">
                <motion.p initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }} className="pb-4 md:pb-10">
                    Albanci u Malesiji predstavljaju važan deo multikulturalnog mozaika Crne Gore. Njihova bogata istorija, kultura i tradicija doprinose raznolikosti i bogatstvu zemlje. Iako se suočavaju sa brojnim izazovima, postignuti napreci u pogledu autonomije i političke reprezentacije pružaju optimizam za budućnost. Dalji rad na ekonomskom razvoju, očuvanju kulture i integraciji ključan je za prosperitet ovog regiona i dobrobit njegovih stanovnika.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}>
                    Poboljšanje infrastrukture, podrška obrazovanju i zapošljavanju, kao i očuvanje kulturnog nasleđa, prioriteti su za razvoj Malesije. Kroz zajedničke napore lokalne zajednice, političkih predstavnika i centralne vlasti, moguće je stvoriti bolje uslove za život i rad u ovom regionu. Albanci u Malesiji, uz očuvanje svog identiteta, mogu aktivno doprineti razvoju i napretku Crne Gore kao celovite i prosperitetne države.
                </motion.p>
            </div>
            <div className="md:px-[5rem] md:pt-10 pb-10">
                <motion.h1  initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Geografski položaj i demografija</motion.h1>
                <div className="flex gap-12 flex-col lg:flex-row-reverse">
                    <div style={{flex: 1}}>
                        <motion.img initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    src={slika5}
                                    alt={slika5}
                                    className="w-full h-[30vh] lg:h-[50vh] object-cover"/>
                    </div>
                    <div className="flex flex-col gap-12 items-center justify-center md:px-2 px-5" style={{flex: 1}}>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">Malesija je planinski region koji se prostire između Crne Gore i Albanije. U Crnoj Gori, ovaj region se nalazi južno od glavnog grada Podgorice, a centralno naselje je Tuzi. Tuzi je administrativni centar opštine Tuzi, koja je stekla status samostalne opštine 2018. godine. Malesija je pretežno naseljena albanskim stanovništvom, a poslednji popisi pokazuju da Albanci čine većinu populacije u ovoj opštini.</motion.p>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">
                            Geografski, region obuhvata planine, brda i doline, a karakterišu ga i reke, šume i poljoprivredno zemljište. Malesija je poznata po svojoj prirodnoj lepoti i predstavlja važno područje za lokalnu zajednicu, kako u pogledu života, tako i u ekonomskom smislu.
                        </motion.p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;