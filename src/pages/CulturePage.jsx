import React from 'react';

const CulturePage = () => {

    const cultureData = [
        {
            title: "Tradicionalna nošnja",
            text: "Tradicionalna nošnja Albanaca u Malesiji je živopisna i prepoznatljiva. Muška nošnja obuhvata bele košulje, tamne pantalone, prsluke i kape (tzv. plis). Ženska nošnja uključuje šarene haljine sa bogatim vezom, pregače i marame. Ovi kostimi se nose tokom posebnih prilika kao što su svadbe, verske proslave i kulturni događaji."
        },
        {
            title: "Muzika i ples",
            text: [
                "Muzika i ples igraju centralnu ulogu u kulturnom životu Albanaca u Malesiji. Tradicionalna muzika se izvodi uz instrumente kao što su çiftelija (dvožičani instrument), lahuta (jednožičana tambura) i dajre (tamburinska ploča). Narodne pesme često govore o ljubavi, herojstvu i prirodi.",
                "Plesovi su energični i uključuju grupne igre koje se izvode uz muziku. Poznati plesovi kao što su \"valle\" i \"shota\" izuzetno su popularni i često se izvode tokom svečanosti."
                ]
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
        },
        {
            title: "Verski Običaji",
            text: "Religija igra značajnu ulogu u životu Albanaca u Malesiji. Većina stanovništva je muslimanske veroispovesti, ali postoje i katoličke zajednice. Verski praznici, kao što su Bajram i Božić, proslavljaju se sa velikim poštovanjem i svečanošću.",
            list: [
                "Bajram: Praznik koji označava kraj Ramazana, meseca posta. Tokom Bajrama, porodice se okupljaju, mole i priređuju bogate obroke.",
                "Božić: Proslavlja se među katoličkim Albancima sa tradicionalnim obredima, molitvama i porodičnim okupljanjima."
            ],
        },
        {
            title: "Porodični Običaji",
            text: "Porodica je centralna jedinica društva među Albancima u Malesiji. Porodične vrednosti su duboko ukorenjene, a stariji članovi porodice uživaju veliko poštovanje. Tradicionalni porodični običaji uključuju:",
            list: [
                "Svadbe: Svadbe su velike i raskošne proslave koje traju nekoliko dana. Ceremonija uključuje mnogo muzike, plesa, hrane i okupljanje šire porodice i prijatelja.",
                "Rođenja: Rođenje deteta se slavi sa velikom radošću, često uz posebne obrede i darivanje."
            ],
        },
        {
            title: "Kulturne Manifestacije",
            text: "Kulturne manifestacije su važan deo očuvanja identiteta Albanaca u Malesiji. Festivali, koncerti, izložbe i drugi događaji omogućavaju mladim ljudima da se upoznaju sa svojim kulturnim nasleđem i doprinesu njegovom očuvanju. Ove manifestacije takođe privlače turiste i mogu doprineti ekonomskom razvoju regiona.",
            list: [
                "Dan nezavisnosti Albanije (28. novembar): Praznik koji se proslavlja uz patriotske pesme, plesove i ceremonije.",
                "Lokalni festivali: Festivali i kulturni događaji koji promovišu albansku kulturu, muziku i običaje. Ovi događaji često uključuju nastupe folklornih grupa, izložbe rukotvorina i degustaciju tradicionalnih jela."
            ],
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
                <h4 className="text-center text-xl py-8">
                    Kultura i običaji Albanaca u Malesiji su bogati i raznoliki, čineći važan deo njihovog identiteta i svakodnevnog života. Tradicionalna nošnja, muzika, ples, gastronomija, verski i porodični običaji, kao i kulturne manifestacije, doprinose očuvanju i promociji albanske kulture u ovom regionu. Ove kulturne prakse ne samo da povezuju zajednicu, već i obogaćuju širi društveni i kulturni pejzaž Crne Gore.
                </h4>
            </div>
            <div>
                <h3>Tradicionalna nošnja</h3>
                <p>
                    Tradicionalna nošnja Albanaca u Malesiji je živopisna i prepoznatljiva. Muška nošnja obuhvata bele košulje, tamne pantalone, prsluke i kape (tzv. plis). Ženska nošnja uključuje šarene haljine sa bogatim vezom, pregače i marame. Ovi kostimi se nose tokom posebnih prilika kao što su svadbe, verske proslave i kulturni događaji.
                </p>
                <h3>Muzika i ples</h3>
                <p>
                    Muzika i ples igraju centralnu ulogu u kulturnom životu Albanaca u Malesiji. Tradicionalna muzika se izvodi uz instrumente kao što su çiftelija (dvožičani instrument), lahuta (jednožičana tambura) i dajre (tamburinska ploča). Narodne pesme često govore o ljubavi, herojstvu i prirodi.
                </p>
                <p>
                    Plesovi su energični i uključuju grupne igre koje se izvode uz muziku. Poznati plesovi kao što su "valle" i "shota" izuzetno su popularni i često se izvode tokom svečanosti.
                </p>
                <h3>Gastronomija</h3>
                <p>Tradicionalna albanska kuhinja u Malesiji je raznovrsna i bogata. Neka od najpoznatijih jela uključuju:</p>
                <ul>
                    <li>•	Fli: Jelo napravljeno od tankih slojeva testa premazanih kajmakom ili jogurtom, koje se peče na otvorenom ognjištu.</li>
                    <li>•	Byrek: Pita sa različitim filovima, poput mesa, sira, spanaća ili bundeve.</li>
                    <li>Burek - pita sa mesom ili sirom</li>
                    <li>•	Tavë kosi: Jagnjetina ili teletina pečena sa jogurtom i pirinčem.</li>
                    <li>•	Baklava: Tradicionalni desert sa orasima i medom.</li>
                </ul>
                <p>Gastronomija je važan deo društvenih okupljanja i proslava, gde se pripremaju bogati obroci za goste.</p>
                <h3>Verski Običaji</h3>
                <p>
                    Religija igra značajnu ulogu u životu Albanaca u Malesiji. Većina stanovništva je muslimanske veroispovesti, ali postoje i katoličke zajednice. Verski praznici, kao što su Bajram i Božić, proslavljaju se sa velikim poštovanjem i svečanošću.
                </p>
                <ul>
                    <li>•	Bajram: Praznik koji označava kraj Ramazana, meseca posta. Tokom Bajrama, porodice se okupljaju, mole i priređuju bogate obroke.
                    </li>
                    <li>•	Božić: Proslavlja se među katoličkim Albancima sa tradicionalnim obredima, molitvama i porodičnim okupljanjima.</li>
                </ul>
                <h3>Porodični Običaji</h3>
                <p>Porodica je centralna jedinica društva među Albancima u Malesiji. Porodične vrednosti su duboko ukorenjene, a stariji članovi porodice uživaju veliko poštovanje. Tradicionalni porodični običaji uključuju:</p>
                <ul>
                    <li>•	Svadbe: Svadbe su velike i raskošne proslave koje traju nekoliko dana. Ceremonija uključuje mnogo muzike, plesa, hrane i okupljanje šire porodice i prijatelja.</li>
                    <li>•	Rođenja: Rođenje deteta se slavi sa velikom radošću, često uz posebne obrede i darivanje.</li>
                </ul>
                <h3>Kulturne Manifestacije</h3>
                <p>
                    Kulturne manifestacije su važan deo očuvanja identiteta Albanaca u Malesiji.
                    Festivali, koncerti, izložbe i drugi događaji omogućavaju mladim ljudima da se upoznaju sa svojim kulturnim nasleđem i doprinesu njegovom očuvanju. Ove manifestacije takođe privlače turiste i mogu doprineti ekonomskom razvoju regiona.
                    Neki od najznačajnijih događaja uključuju:
                </p>
                <ul>
                    <li>•	Dan nezavisnosti Albanije (28. novembar): Praznik koji se proslavlja uz patriotske pesme, plesove i ceremonije.</li>
                    <li>•	Lokalni festivali: Festivali i kulturni događaji koji promovišu albansku kulturu, muziku i običaje. Ovi događaji često uključuju nastupe folklornih grupa, izložbe rukotvorina i degustaciju tradicionalnih jela.</li>
                </ul>
                <h3>Tradicionalna Verovanja i Priče</h3>
                <p>
                    Tradicionalna verovanja i priče zauzimaju važno mesto u kulturnom nasleđu Albanaca u Malesiji. Narodne priče i legende često se prenose sa generacije na generaciju, obogaćujući kolektivnu svest o prošlosti i identitetu. Ove priče često uključuju elemente mitologije, herojstva i moralnih lekcija.
                </p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Očuvanje kulture i tradicije</h1>
                <p>
                    Albanci u Malesiji ponosni su na svoju kulturnu baštinu, koja uključuje jezik, običaje, muziku, ples i narodnu nošnju. Očuvanje ovih elemenata identiteta ključno je za održanje kulturnog nasleđa. Organizacija kulturnih manifestacija, festivala i radionica može pomoći u očuvanju i promociji tradicije.
                </p>
                <h3>Jezik</h3>
                <p>
                    Albanski jezik je centralni deo identiteta Albanaca u Malesiji. Očuvanje jezika kroz obrazovni sistem, medije i kulturne događaje ključno je za očuvanje identiteta. Postoje škole u kojima se nastava održava na albanskom jeziku, ali je potrebno raditi na unapređenju kvaliteta nastave i dostupnosti obrazovnih materijala.
                </p>
            </div>
        </div>
    );
};

export default CulturePage;