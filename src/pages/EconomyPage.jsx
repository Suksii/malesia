import React from 'react';
import economy1 from '../assets/economy.jpg';
import infrastructure from '../assets/infrastructure.jpg';
import education from '../assets/education.jpg';
import { motion } from 'framer-motion';
const EconomyPage = () => {

    const economy = [
        {
            title: 'Ekonomski Izazovi',
            text: [
                'Malesija se suočava sa nekoliko ekonomskih izazova koji utiču na kvalitet života lokalnog stanovništva. Region je pretežno ruralan, a poljoprivreda je glavna privredna djelatnost. Poljoprivrednici se bave uzgojem voća, povrća, stočarstvom i proizvodnjom mliječnih proizvoda. Međutim, nedostatak modernih poljoprivrednih tehnologija i infrastrukture otežava povećanje produktivnosti i konkurentnosti na tržištu.',
                'Osim poljoprivrede, turizam ima potencijal za razvoj. Prirodne ljepote Malesije, uključujući planine, šume i rijeke, mogu privući turiste zainteresovane za ekoturizam, planinarenje i kulturni turizam. Promocija turističkih potencijala i ulaganje u turističku infrastrukturu moglo bi doprinijeti ekonomskom razvoju regiona.'
            ],
            photo: economy1
        },
        {
            title: 'Infrastruktura',
            text: 'Poboljšanje infrastrukture je ključno za ekonomski razvoj Malesije. Putevi su često u lošem stanju, što otežava transport ljudi i robe. Vodosnabdijevanje i kanalizacioni sistemi su takođe nedovoljno razvijeni, što predstavlja izazov za javno zdravlje i kvalitet života. Ulaganja u infrastrukturne projekte, poput izgradnje i obnove puteva, vodovoda i kanalizacije, ključna su za poboljšanje uslova života i podsticanje ekonomskih aktivnosti.',
            photo: infrastructure
        },
        {
            title: 'Obrazovanje i Zapošljavanje',
            text: [
                'Obrazovanje je još jedan važan aspekt koji utiče na socijalni i ekonomski razvoj Malesije. Postoje škole u regionu koje pružaju osnovno i srednje obrazovanje, ali postoji potreba za unapređenjem obrazovnih kapaciteta i kvaliteta nastave. Veće ulaganje u obrazovanje, uključujući obuku nastavnika i modernizaciju škola, može pomoći mladim ljudima da steknu potrebna znanja i vještine za tržište rada.',
                'Zapošljavanje je takođe izazov, s obzirom na ograničene mogućnosti za rad u regionu. Mnogi mladi ljudi odlaze u veće gradove ili inostranstvo u potrazi za boljim prilikama. Razvoj lokalne privrede i podrška preduzetništvu mogu pomoći u stvaranju novih radnih mjesta i zadržavanju stanovništva u Malesiji.'
            ],
            photo: education
        }
    ];

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
        <>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className="text-2xl font-semibold pb-8 xl:pb-4 px-2">Socijalni i ekonomski aspekti</motion.h1>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="px-2">
                {economy.map((item, index) => (
                    <motion.div variants={partVariants} key={index} className="flex reverse">
                        <div className="relative w-full py-[100px] h-[350px]" style={{flex: 1}}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.photo})`}}>
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <h3 className="relative flex justify-center items-center text-xl font-semibold h-full text-gray-100 tracking-widest uppercase">
                                {item.title}
                            </h3>
                        </div>
                        {Array.isArray(item.text) ? (
                            <ul style={{flex:2}} className="flex flex-col gap-6 justify-center items-center py-8">
                                {item.text.map((text, index) => (
                                    <li key={index} className="text-xl px-10 leading-8">{text}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="flex flex-col gap-6 justify-center items-center px-10 text-xl py-8 leading-8" style={{flex:2}}>{item.text}</p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default EconomyPage;