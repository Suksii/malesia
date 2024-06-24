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
                <div className="flex flex-col gap-10">
                    <motion.p variants={partVariants} className="text-xl px-4 leading-8">
                        {/*Albanci u Malesiji imaju dugu i složenu istoriju. Ovaj region je kroz vjekove bio dio različitih država i političkih entiteta. U doba Osmanskog carstva, mnogi Albanci su zadržali svoju kulturu i jezik, uprkos pokušajima asimilacije. Kasnije, sa širenjem Kraljevine Crne Gore, Malesija je postala dio crnogorske države, ali su Albanci i dalje uspjeli da očuvaju svoj identitet.*/}
                        Narod Albanci u Malesiji ima duboke istorijske korene, koji sežu unazad vekovima, obuhvatajući razdoblja različitih političkih i kulturnih transformacija. Tokom srednjeg veka, ovaj region je bio pod uticajem različitih srednjevekovnih albanskih plemena i plemićkih porodica koje su održavale autonomiju kroz sistem plemenske organizacije. Ove porodice su imale značajan uticaj na očuvanje albanskog identiteta, jezika i tradicija.
                    </motion.p>
                    <motion.p variants={partVariants} className="text-xl px-4 leading-8">
                        U vreme Osmanskog carstva, Albanci u Malesiji, kao i širom Balkana, suočili su se sa izazovima vezanim za osmansku vladavinu. Uprkos pokušajima centralizacije i uvođenja osmanskih običaja, mnoge albanske zajednice su uspešno očuvale svoje običaje kroz sistem milleta, koji je omogućavao versku i kulturnu autonomiju unutar Carstva. Malesija je tokom ovog perioda bila poznata po svojim jakim plemenskim vođama koji su često delovali autonomno od centralne osmanske vlasti.
                    </motion.p>
                </div>

                <motion.img variants={partVariants} src={slika4} alt={slika7} className="w-[400px] md:h-[40vh] object-cover xl:mt-10 mb-10"/>
            </div>
            <div className="flex flex-col md:flex-row gap-5 py-6">
                <motion.p variants={partVariants} className="text-xl px-4 leading-8" style={{flex: 1}}>
                    {/*U 20. vijeku, region je prolazio kroz turbulentne periode, uključujući Drugi svjetski rat i socijalističku eru Jugoslavije. Tokom socijalističkog perioda, postojali su pokušaji homogenizacije stanovništva, ali su Albanci u Malesiji i dalje održavali svoju kulturu, jezik i običaje. Poslije raspada Jugoslavije i sticanja nezavisnosti Crne Gore 2006. godine, Albanci su dobili veće mogućnosti za političku reprezentaciju i očuvanje svog identiteta.*/}
                    Sa širenjem Kraljevine Crne Gore u 19. vijeku, Malesija je postala dio crnogorske države. Ovaj period obelježen je nizom sukoba i tenzija između crnogorskih vlasti i albanskih plemena koja su željela da očuvaju svoju autonomiju. Ipak, uprkos političkim previranjima, Albanci su nastavili da njeguju svoju kulturu i tradiciju. Posle Balkanskih ratova i Prvog svetskog rata, granice su se ponovno mijenjale, a Malesija je nastavila da bude područje od strateške i kulturne važnosti.
                </motion.p>
                <motion.p variants={partVariants} className="text-xl px-4 leading-8" style={{flex: 1}}>
                    U 20. vijeku, posebno tokom perioda između dva svjetska rata, Malesija je bila dio Kraljevine Jugoslavije, a kasnije socijalističke Jugoslavije. Tokom ovog perioda, postojali su pokušaji homogenizacije i integracije albanskog stanovništva, ali su Albanci u Malesiji ipak uspjeli da očuvaju svoje kulturne osobenosti. Posebno su značajne bile lokalne inicijative za očuvanje albanskog jezika i kulture, koje su često nailazile na prepreke, ali su postojano doprinosile očuvanju identiteta.
                </motion.p>
            </div>
            <div className="flex gap-10 items-center flex-col xl:flex-row-reverse pt-6">
                <div className="flex py-6 flex-col gap-5 items-center">
                    <motion.p variants={partVariants} className="text-xl px-4 leading-8 text-center" style={{flex: 1}}>
                        Nakon raspada Jugoslavije i proglašenja nezavisnosti Crne Gore 2006. godine, Albanci u Malesiji dobili su veće mogućnosti za političko djelovanje i kulturnu afirmaciju. Tokom ovog perioda, osnovane su brojne kulturne i političke organizacije koje su aktivno radile na unapređenju prava Albanaca i očuvanju njihovog identiteta. Evropska integracija i međunarodna saradnja dodatno su otvorile vrata za unapređenje prava i položaja albanske zajednice u Crnoj Gori.
                    </motion.p>
                    <motion.p variants={partVariants} className="text-xl px-4 leading-8 text-center" style={{flex: 1}}>
                        Kroz sve ove periode, Albanci u Malesiji su pokazali izuzetnu otpornost i posvećenost očuvanju svoje kulturne baštine. Bez obzira na političke i društvene promene, uspeli su da održe svoj jezik, običaje i tradicije, čineći Malesiju značajnim kulturnim centrom za albansku zajednicu.
                    </motion.p>
                </div>
                <motion.img variants={partVariants} src={slika2} alt={slika7} className="w-full xl:w-[70%] xl:h-[55vh] object-cover"/>
            </div>

        </motion.div>

    );
};

export default HistoryPage;