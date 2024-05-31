import React from 'react';
import slika2 from '../assets/slika2.jpg';
import slika1 from '../assets/slika1.jpg';
import slika3 from '../assets/slika3.jpg';
import slika4 from '../assets/slika4.jpg';
import shota from '../assets/shota.png';
import burek from '../assets/burek.jpg';
import baklava from '../assets/baklava.jpg';
import wedding from '../assets/wedding.jpg';
import festival from '../assets/festival.png';
import religion from '../assets/religion.jpg';

const CulturePage = () => {

    const cultureData = [
        {
            title: "Tradicionalna nošnja",
            text: "Tradicionalna nošnja Albanaca u Malesiji je živopisna i prepoznatljiva. Muška nošnja obuhvata bele košulje, tamne pantalone, prsluke i kape (tzv. plis). Ženska nošnja uključuje šarene haljine sa bogatim vezom, pregače i marame. Ovi kostimi se nose tokom posebnih prilika kao što su svadbe, verske proslave i kulturni događaji.",
            photo: slika1
        },
        {
            title: "Muzika i ples",
            text: [
                "Muzika i ples igraju centralnu ulogu u kulturnom životu Albanaca u Malesiji. Tradicionalna muzika se izvodi uz instrumente kao što su çiftelija (dvožičani instrument), lahuta (jednožičana tambura) i dajre (tamburinska ploča). Narodne pesme često govore o ljubavi, herojstvu i prirodi.",
                "Plesovi su energični i uključuju grupne igre koje se izvode uz muziku. Poznati plesovi kao što su \"valle\" i \"shota\" izuzetno su popularni i često se izvode tokom svečanosti."
                ],
            photo: shota
        },
        {
            title: "Gastronomija",
            text: "Gastronomija je važan deo društvenih okupljanja i proslava, gde se pripremaju bogati obroci za goste. Tradicionalna albanska kuhinja u Malesiji je raznovrsna i bogata. Neka od najpoznatijih jela uključuju:",
            list: [
                "Fli: Jelo napravljeno od tankih slojeva testa premazanih kajmakom ili jogurtom, koje se peče na otvorenom ognjištu.",
                "Byrek: Pita sa različitim filovima, poput mesa, sira, spanaća ili bundeve.",
                "Tavë kosi: Jagnjetina ili teletina pečena sa jogurtom i pirinčem.",
                "Baklava: Tradicionalni desert sa orasima i medom."
            ],
            photo: baklava
        },
        {
            title: "Verski Običaji",
            text: "Religija igra značajnu ulogu u životu Albanaca u Malesiji. Većina stanovništva je muslimanske veroispovesti, ali postoje i katoličke zajednice. Verski praznici, kao što su Bajram i Božić, proslavljaju se sa velikim poštovanjem i svečanošću.",
            list: [
                "Bajram: Praznik koji označava kraj Ramazana, meseca posta. Tokom Bajrama, porodice se okupljaju, mole i priređuju bogate obroke.",
                "Božić: Proslavlja se među katoličkim Albancima sa tradicionalnim obredima, molitvama i porodičnim okupljanjima."
            ],
            photo: religion
        },
        {
            title: "Porodični Običaji",
            text: "Porodica je centralna jedinica društva među Albancima u Malesiji. Porodične vrednosti su duboko ukorenjene, a stariji članovi porodice uživaju veliko poštovanje. Tradicionalni porodični običaji uključuju:",
            list: [
                "Svadbe: Svadbe su velike i raskošne proslave koje traju nekoliko dana. Ceremonija uključuje mnogo muzike, plesa, hrane i okupljanje šire porodice i prijatelja.",
                "Rođenja: Rođenje deteta se slavi sa velikom radošću, često uz posebne obrede i darivanje."
            ],
            photo: wedding
        },
        {
            title: "Kulturne Manifestacije",
            text: "Kulturne manifestacije su važan deo očuvanja identiteta Albanaca u Malesiji. Festivali, koncerti, izložbe i drugi događaji omogućavaju mladim ljudima da se upoznaju sa svojim kulturnim nasleđem i doprinesu njegovom očuvanju. Ove manifestacije takođe privlače turiste i mogu doprineti ekonomskom razvoju regiona.",
            list: [
                "Dan nezavisnosti Albanije (28. novembar): Praznik koji se proslavlja uz patriotske pesme, plesove i ceremonije.",
                "Lokalni festivali: Festivali i kulturni događaji koji promovišu albansku kulturu, muziku i običaje. Ovi događaji često uključuju nastupe folklornih grupa, izložbe rukotvorina i degustaciju tradicionalnih jela."
            ],
            photo: festival
        },
        {
            title: "Tradicionalna Verovanja i Priče",
            text: "Tradicionalna verovanja i priče zauzimaju važno mesto u kulturnom nasleđu Albanaca u Malesiji. Narodne priče i legende često se prenose sa generacije na generaciju, obogaćujući kolektivnu svest o prošlosti i identitetu. Ove priče često uključuju elemente mitologije, herojstva i moralnih lekcija."
        }
        ];

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Kultura i običaji</h1>
                <h4 className="text-center text-xl py-8 leading-10">
                    Kultura i običaji Albanaca u Malesiji su bogati i raznoliki, čineći važan deo njihovog identiteta i svakodnevnog života. Tradicionalna nošnja, muzika, ples, gastronomija, verski i porodični običaji, kao i kulturne manifestacije, doprinose očuvanju i promociji albanske kulture u ovom regionu. Ove kulturne prakse ne samo da povezuju zajednicu, već i obogaćuju širi društveni i kulturni pejzaž Crne Gore.
                </h4>
            </div>
            <div className="px-2">
                {cultureData.map((item, index) => (
                    <div key={index} className="flex reverse">
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
                                            <li key={index} className="text-xl px-10 leading-8">{text}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="flex flex-col gap-6 justify-center items-center px-10 text-xl py-8 leading-9">{item.text}</p>
                                )}
                            </div>
                            <div>
                                {item.list && (
                                    <ul style={{flex:2}} className="flex flex-col gap-6 justify-start items-start py-8">
                                        {item.list.map((listItem, index) => (
                                            <li key={index} className="text-xl px-10 leading-9">{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CulturePage;