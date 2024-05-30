import React from 'react';
import economy1 from '../assets/economy.jpg';
import infrastructure from '../assets/infrastructure.jpg';
import education from '../assets/education.jpg';
const EconomyPage = () => {

    const economy = [
        {
            title: 'Ekonomski Izazovi',
            text: [
                'Malesija se suočava sa nekoliko ekonomskih izazova koji utiču na kvalitet života lokalnog stanovništva. Region je pretežno ruralan, a poljoprivreda je glavna privredna delatnost. Poljoprivrednici se bave uzgojem voća, povrća, stočarstvom i proizvodnjom mlečnih proizvoda. Međutim, nedostatak modernih poljoprivrednih tehnologija i infrastrukture otežava povećanje produktivnosti i konkurentnosti na tržištu.',
                'Osim poljoprivrede, turizam ima potencijal za razvoj. Prirodne lepote Malesije, uključujući planine, šume i reke, mogu privući turiste zainteresovane za ekoturizam, planinarenje i kulturni turizam. Promocija turističkih potencijala i ulaganje u turističku infrastrukturu moglo bi doprineti ekonomskom razvoju regiona.'
            ],
            photo: economy1
        },
        {
            title: 'Infrastruktura',
            text: 'Poboljšanje infrastrukture je ključno za ekonomski razvoj Malesije. Putevi su često u lošem stanju, što otežava transport ljudi i robe. Vodosnabdevanje i kanalizacioni sistemi su takođe nedovoljno razvijeni, što predstavlja izazov za javno zdravlje i kvalitet života. Ulaganja u infrastrukturne projekte, poput izgradnje i obnove puteva, vodovoda i kanalizacije, ključna su za poboljšanje uslova života i podsticanje ekonomskih aktivnosti.',
            photo: infrastructure
        },
        {
            title: 'Obrazovanje i Zapošljavanje',
            text: [
                'Obrazovanje je još jedan važan aspekt koji utiče na socijalni i ekonomski razvoj Malesije. Postoje škole u regionu koje pružaju osnovno i srednje obrazovanje, ali postoji potreba za unapređenjem obrazovnih kapaciteta i kvaliteta nastave. Veće ulaganje u obrazovanje, uključujući obuku nastavnika i modernizaciju škola, može pomoći mladim ljudima da steknu potrebna znanja i veštine za tržište rada.',
                'Zapošljavanje je takođe izazov, s obzirom na ograničene mogućnosti za rad u regionu. Mnogi mladi ljudi odlaze u veće gradove ili inostranstvo u potrazi za boljim prilikama. Razvoj lokalne privrede i podrška preduzetništvu mogu pomoći u stvaranju novih radnih mesta i zadržavanju stanovništva u Malesiji.'
            ],
            photo: education
        }
    ];

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Socijalni i ekonomski aspekti</h1>
                <div className="px-2">
                    {economy.map((item, index) => (
                        <div key={index} className="flex reverse">
                                {/*<h3 className={`flex justify-center items-center text-xl font-semibold h-[300px]`} style={{flex: 1, backgroundImage: `url(${item.photo})`}}>{item.title}</h3>*/}
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
                                        <li key={index} className="text-xl px-10">{text}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="flex flex-col gap-6 justify-center items-center px-10 text-xl py-8" style={{flex:2}}>{item.text}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EconomyPage;