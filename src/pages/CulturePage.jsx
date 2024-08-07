import React from 'react';
import slika1 from '../assets/slika1.jpg';
import shota from '../assets/shota.png';
import baklava from '../assets/baklava.jpg';
import wedding from '../assets/wedding.jpg';
import festival from '../assets/festival.png';
import religion from '../assets/religion.jpg';
import slika10 from '../assets/slika10.jpg';
import slika11 from '../assets/slika11.jpg';
import slika12 from '../assets/slika12.jpg';
import slika13 from '../assets/slika13.jpg';
import slika14 from '../assets/slika14.jpg';
import slika15 from '../assets/slika15.jpg';
import { motion } from 'framer-motion';
import CostumeGallery from "../components/CostumeGallery.jsx";

const CulturePage = () => {

    const gallery = [
        {
            alt: 'slika10',
            src: slika10,
        },
        {
            alt: 'slika11',
            src: slika11,
        },
        {
            alt: 'slika12',
            src: slika12,
        },
        {
            alt: 'slika13',
            src: slika13,
        },
        {
            alt: 'slika14',
            src: slika14,
        },
        {
            alt: 'slika15',
            src: slika15,
        }
    ];


    const cultureData = [
        {
            title: "Tradicionalna nošnja",
            text: "Tradicionalne nošnje su bogato ukrašene i različite su za svaku regiju. One se nose tokom posebnih prilika, poput svadbi i narodnih festivala.",
            photo: slika1
        },
        {
            title: "Muzika i ples",
            text: [
                "Tradicionalna muzika i ples, kao što su polifonija i vallet, dio su svakodnevnog života i svečanosti. Svaka regija ima svoje specifične muzičke stilove i instrumente."
                ],
            photo: shota
        },
        {
            title: "Gostoprimstvo",
            text: [
                "Albanci su poznati po svojoj gostoljubivosti. Gosti su uvek dobrodošli, a domaćin ih dočekuje sa posebnim poštovanjem i pažnjom. Ovo uključuje posluživanje najboljih jela i pića."
            ],
        },
        {
            title: "Kanun",
            text: [
                "Tradicionalni zakonik poznat kao Kanun iz Lekë Dukagjinija igrao je značajnu ulogu u regulisanju društvenih odnosa, uključujući običaje vezane za čast, krvnu osvetu (gjakmarrja) i druge aspekte života."
            ],
        },
        {
            title: "Folklor i Legende",
            text: "Albanski folklor bogat je legendama, mitovima i narodnim pričama koje se prenose usmeno. Junaci iz narodnih pesama, poput Gjergja Kastriota Skenderbega, igraju važnu ulogu u očuvanju nacionalnog identiteta i ponosa."
        },
        {
            title: "Kulinarstvo",
            text: "Albanska kuhinja je raznovrsna i bogata, s posebnim jelima kao što su byrek (pite), tavë kosi (jagnjeće meso s jogurtom), i različiti specijaliteti od mesa i povrća. Neka od najpoznatijih jela uključuju:",
            list: [
                <span><strong>Fli</strong>  -  Jelo napravljeno od tankih slojeva tijesta premazanih kajmakom ili jogurtom, koje se peče na otvorenom ognjištu.</span>,
                <span><strong>Byrek</strong>  -  Pita sa različitim filovima, poput mesa, sira, spanaća ili bundeve.</span>,
                <span><strong>Tavë kosi</strong>  -  Jagnjetina ili teletina pečena sa jogurtom i pirinčem.</span>,
                <span><strong>Baklava</strong>  -  Tradicionalni desert sa orasima i medom.</span>
            ],
            photo: baklava
        },
        {
            title: "Vjerski praznici",
            text: "U Albaniji se poštuju i slave kako islamski tako i hrišćanski praznici. Bajram i Božić su među najvažnijim religijskim događajima, a proslave uključuju specifične običaje, molitve i porodična okupljanja.\n",
            list: [
                <span><strong>Bajram</strong>  -  Praznik koji označava kraj Ramazana, mjeseca posta. Tokom Bajrama, porodice se okupljaju, mole i priređuju bogate obroke.</span>,
                <span><strong>Božić</strong>  -  Proslavlja se među katoličkim Albancima sa tradicionalnim obredima, molitvama i porodičnim okupljanjima.</span>
            ],
            photo: religion
        },
        {
            title: "Porodični Običaji",
            text: "Porodica je centralna institucija u albanskom društvu. Porodične veze su veoma jake, a zajedništvo i međusobna podrška su od velike važnosti. Tradicionalni porodični običaji uključuju:",
            list: [
                <span><strong>Svadbe</strong>  -  Albanska venčanja su veliki društveni događaji sa mnogo gostiju, muzike, plesa i tradicionalnih nošnji. Svaka regija ima svoje specifične običaje, ali svi svadbeni rituali su bogati simbolikom i tradicijom.</span>,
                <span><strong>Rođenja</strong>  -  Rođenje djeteta se slavi sa velikom radošću, često uz posebne obrede i darivanje.</span>
            ],
            photo: wedding
        },
        {
            title: "Kulturne Manifestacije",
            text: "Albanija ima brojne narodne festivale koji su prilika za okupljanje, pesmu, ples i uživanje u tradicionalnim jelima. Među njima se izdvajaju:",
            list: [
                <span><strong>Festa e Nëntorit</strong>  -  (Praznik novembra) koji obeležava Dan nezavisnosti 28. novembra.</span>,
                <span><strong>Dita e Verës</strong>  -  (Dan proleća) koji se slavi 14. marta</span>
            ],
            photo: festival
        },
        {
            title: "Tradicionalna Vjerovanja i Priče",
            text: "Tradicionalna vjerovanja i priče zauzimaju važno mjesto u kulturnom nasleđu Albanaca u Malesiji. Narodne priče i legende često se prenose sa generacije na generaciju, obogaćujući kolektivnu svijest o prošlosti i identitetu. Ove priče često uključuju elemente mitologije, herojstva i moralnih lekcija."
        },
        {
            title: "Jezik",
            text: "Albanski jezik, sa svojim dijalektima Geg i Tosk, ključni je deo kulturnog identiteta. Učenje i očuvanje jezika smatra se važnim zadatkom u svakodnevnom životu."
        },
        {
            title: "Rukotvorine",
            text: "Albanci su poznati po svojim veštinama u rukotvorinama, uključujući tkanje, vezenje i izradu tepiha. Ovi proizvodi su često bogato ukrašeni i imaju značajnu umetničku i kulturnu vrednost.",
        },
        {
            title: "Etiketiranje i poštovanje starijih",
            text: "U albanskoj kulturi, poštovanje starijih je veoma važno. Mlađi članovi porodice i zajednice pokazuju veliko poštovanje prema starijima, a odluke starijih se često smatraju konačnim i mudrim.",

        },
        {
            title: "Običaji vezani za smrt i žalost",
            text: "Tradicionalni običaji vezani za sahrane i žalost uključuju specifične rituale i postupke. Žene često nose crninu kao znak žalosti, a postojanje tačno određenih dana za pomen preminulih (npr. 7, 40 dana) je važan dio običaja."
        },
        {
            title: "Obrazovanje i znanje",
            text: "Obrazovanje se cijeni i smatra se ključnim za napredak i bolji život. Albanci se ponose svojim obrazovnim institucijama i učenjacima koji su doprinosili ne samo lokalnoj zajednici nego i šire."
        },
        {
            title: "Multikulturalizam i tolerancija",
            text: "Albanija je poznata po svojoj vjerskoj toleranciji i harmoniji među različitim religijskim grupama. Muslimani, pravoslavci i katolici žive zajedno u miru, a mješoviti brakovi nisu rijetkost. Ovi dodatni običaji i aspekti dalje osvjetljavaju bogatstvo albanske kulture i tradicije koje se prenose s koljena na koljeno."
        },
        {
            title: "Arhitektura",
            text: "Tradicionalna albanska arhitektura, posebno u gradovima kao što su Berat i Gjirokastër (oba pod zaštitom UNESCO-a), svedoči o dugoj istoriji i kulturnom nasleđu. Kamene kuće sa karakterističnim krovovima i prozorima čuvaju duh prošlih vremena."
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
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className="md:w-[80%] mx-auto">
                <h1 className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Kultura i običaji</h1>
                <h4 className="text-center text-xl py-8 leading-10">
                    Kultura i običaji Albanaca u Malesiji su bogati i raznoliki, čineći važan dio njihovog identiteta i svakodnevnog života. Tradicionalna nošnja, muzika, ples, gastronomija, vjerski i porodični običaji, kao i kulturne manifestacije, doprinose očuvanju i promociji albanske kulture u ovom regionu. Ove kulturne prakse ne samo da povezuju zajednicu, već i obogaćuju širi društveni i kulturni pejzaž Crne Gore.
                </h4>
                <h4 className="text-center text-xl py-8 leading-10">Albanci u Malesiji ponosni su na svoju kulturnu baštinu, koja uključuje jezik, običaje, muziku, ples i narodnu nošnju. Očuvanje ovih elemenata identiteta ključno je za održanje kulturnog nasleđa. Organizacija kulturnih manifestacija, festivala i radionica može pomoći u očuvanju i promociji tradicije.
                </h4>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="px-2">
                {cultureData.map((item, index) => (
                    <motion.div variants={partVariants} key={index} className="flex reverse">
                        <div className="relative w-full py-[100px] h-[350px]" style={{flex: 1}}>
                            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.photo})`}}>
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <h3 className="relative flex justify-center items-center text-center text-xl font-semibold h-full text-gray-100 tracking-widest uppercase">
                                {item.title}
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center" style={{flex:2}}>
                            <div>
                                {Array.isArray(item.text) ? (
                                    <ul style={{flex:2}} className="flex flex-col gap-6 justify-center items-center py-8">
                                        {item.text.map((text, index) => (
                                            <li key={index} className="text-xl md:px-10 md:text-start text-center leading-8">{text}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="flex flex-col gap-6 justify-center items-center md:px-10 text-xl md:text-start text-center py-8 leading-9">{item.text}</p>
                                )}
                            </div>
                            <div>
                                {item.list && (
                                    <ul style={{flex: 2, listStyleType: 'disc'}} className="flex flex-col gap-6 md:px-10 justify-start items-start py-8">
                                        {item.list.map((listItem, index) => (
                                            <li key={index} className="text-xl leading-9">{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
                <h4 className="text-center text-xl py-8 leading-10">
                    Ovi običaji predstavljaju samo dio bogatog kulturnog nasleđa Albanije, koje se čuva i njeguje kroz generacije.
                </h4>
                <CostumeGallery title="Galerija" gallery={gallery}/>
            </motion.div>
        </>
    );
};

export default CulturePage;