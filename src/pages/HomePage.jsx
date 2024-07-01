import React from 'react';
import slika5 from '../assets/slika5.jpg';
import slika7 from '../assets/slika7.jpg';
import slika8 from '../assets/slika8.jpg';
import slika9 from '../assets/slika9.jpg';
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
                    Albanci u Malesiji predstavljaju važan dio multikulturalnog mozaika Crne Gore. Njihova bogata istorija, kultura i tradicija doprinose raznolikosti i bogatstvu zemlje. Iako se suočavaju sa brojnim izazovima, postignuti napreci u pogledu autonomije i političke reprezentacije pružaju optimizam za budućnost. Dalji rad na ekonomskom razvoju, očuvanju kulture i integraciji ključan je za prosperitet ovog regiona i dobrobit njegovih stanovnika.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}>
                    Poboljšanje infrastrukture, podrška obrazovanju i zapošljavanju, kao i očuvanje kulturnog nasleđa, prioriteti su za razvoj Malesije. Kroz zajedničke napore lokalne zajednice, političkih predstavnika i centralne vlasti, moguće je stvoriti bolje uslove za život i rad u ovom regionu. Albanci u Malesiji, uz očuvanje svog identiteta, mogu aktivno doprinijeti razvoju i napretku Crne Gore kao cjelovite i prosperitetne države.
                </motion.p>
            </div>
            <div className="md:px-[5rem] md:pt-10 pb-10">
                <div className="flex gap-12 flex-col lg:flex-row-reverse">
                    <div style={{flex: 1}}>
                        <motion.img initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    src={slika5}
                                    alt={slika5}
                                    className="w-full h-[30vh] lg:h-[50vh] object-cover"/>
                    </div>
                    <div className="flex flex-col gap-12 justify-center md:px-2 px-5" style={{flex: 1}}>
                        <motion.h1  initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-2xl font-semibold px-2">Geografski položaj i demografija</motion.h1>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">Malesija je planinski region koji se prostire između Crne Gore i Albanije. U Crnoj Gori, ovaj region se nalazi južno od glavnog grada Podgorice, a centralno naselje je Tuzi. Tuzi je administrativni centar opštine Tuzi, koja je stekla status samostalne opštine 2018. godine. Malesija je pretežno naseljena albanskim stanovništvom, a poslednji popisi pokazuju da Albanci čine većinu populacije u ovoj opštini.</motion.p>

                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">
                            Geografski, region obuhvata planine, brda i doline, a karakterišu ga i rijeke, šume i poljoprivredno zemljište. Malesija je poznata po svojoj prirodnoj ljepoti i predstavlja važno područje za lokalnu zajednicu, kako u pogledu života, tako i u ekonomskom smislu.
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="md:px-[5rem] md:pt-10 pb-10">
                <div className="flex gap-12 flex-col lg:flex-row">
                    <div style={{flex: 1}}>
                        <motion.img initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    src={slika9}
                                    alt={slika9}
                                    className="w-full h-[30vh] lg:h-[50vh] object-cover"/>
                    </div>

                    <div className="flex flex-col gap-12 justify-center md:px-2 px-5" style={{flex: 1}}>
                        <motion.h1  initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-2xl font-semibold px-2">Reljef
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">Reljef Malesije je pretežno planinski, sa strmim padinama, dubokim dolinama i visokim vrhovima. Najviši vrhovi u Prokletijama, kao što su Zla Kolata (2,534 metara) i Maja e Jezerces (2,694 metara), pružaju spektakularne pejzaže i izazove za planinare. Ovaj teren je takođe ispresecan brojnim rekama i potocima, koje često formiraju duboke kanjone i klisure. Reka Cijevna, koja protiče kroz region, formira jedan od najlepših kanjona u ovom delu Balkana.
                        </motion.p>
                        <motion.h1  initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-2xl font-semibold px-2">Klima
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">Klima u Malesiji varira zavisno od nadmorske visine i specifičnog položaja unutar regiona. U nižim delovima, klima je uglavnom mediteranska, sa toplim i suvim letima i blagim, vlažnim zimama. Na višim nadmorskim visinama, klima postaje planinska, sa hladnim zimama, obilnim snegom i relativno kratkim, svežim letima. Prosečne temperature u zimskim mesecima često padaju ispod nule, dok su letnje temperature prijatne, retko prelazeći 25°C.
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="md:px-[5rem] md:pt-10 pb-10">
                <div className="flex gap-12 flex-col lg:flex-row-reverse">
                    <div style={{flex: 1}}>
                        <motion.img initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    src={slika8}
                                    alt={slika8}
                                    className="w-full h-[30vh] lg:h-[50vh] object-cover"/>
                    </div>
                    <div className="flex flex-col gap-12 justify-center md:px-2 px-5" style={{flex: 1}}>
                        <motion.h1  initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-2xl font-semibold px-2">Flora i fauna
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">Bogata flora i fauna Malesije dodatno doprinose prirodnom bogatstvu regiona. U nižim delovima, možete pronaći mediteranske biljke poput maslina, lovora i različitih vrsta cveća. Planinski delovi su dom raznovrsnim šumama bukve, jele i bora. Ovaj region je takođe stanište brojnih životinjskih vrsta, uključujući medvede, vukove, divokoze i razne vrste ptica, što ga čini značajnim za biodiverzitet.
                        </motion.p>
                        <motion.h1  initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-2xl font-semibold px-2">Turizam i ekonomski potencijal
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  className="text-xl md:leading-8">Prirodne lepote Malesije, uključujući njene planinske pejzaže, kanjone, reke i bogatu biološku raznovrsnost, čine je atraktivnom destinacijom za ekoturizam i avanturistički turizam. Planinarenje, alpinizam, rafting i posmatranje ptica samo su neke od aktivnosti koje privlače turiste. Pored toga, tradicionalni način života i kulturna baština Albanaca u Malesiji pružaju dodatnu vrednost za kulturni turizam.
                        </motion.p>
                    </div>
                </div>
            </div>
            <motion.p initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="w-[90%] md:w-[60%] mx-auto text-center text-2xl pb-12">Malesija, sa svojim specifičnim geografskim položajem, raznolikim reljefom i klimom, predstavlja jedinstvenu regiju koja kombinuje prirodne ljepote sa bogatom kulturnom istorijom, čineći je važnim dijelom crnogorskog i balkanskog nasleđa.
            </motion.p>
            <div className="flex justify-end py-4">
                <p className="w-[80%] lg:w-1/5 text-[17px] italic">Sajt je nastao u okviru projekta "TRADICIJA ALBANACA U MALESIJI KAO BOGASTVO KOJE SPAJA" podržanog od Fonda za zaštitu i ostvarivanje manjinskih prava Crne Gore</p>
            </div>
            <p className="text-center text-xl pt-4 pb-2 font-semibold">Iznijeti stavovi su isključivo odgovornost autora i/ili izdavača i nužno ne izražavaju stavove Fonda.
            </p>
        </>
    );
};

export default HomePage;