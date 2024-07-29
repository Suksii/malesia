import React, {useState} from 'react';
import { motion } from 'framer-motion';
import spomenik1 from "../assets/spomenik1.jpg";
import spomenik2 from "../assets/spomenik2.jpg";
import skenderbeg1 from "../assets/skenderbeg1.jpg";
import skenderbeg2 from "../assets/skenderbeg2.jpg";
import skenderbeg3 from "../assets/skenderbeg3.jpg";
import bacaKurti1 from "../assets/baca_kurti1.jpg";
import bacaKurti2 from "../assets/baca_kurti2.jpg";
import bacaKurti3 from "../assets/baca_kurti3.jpg";
import bacaKurti4 from "../assets/baca_kurti4.jpg";
import dedvukaj1 from "../assets/dedvukaj1.jpg";
import dedvukaj2 from "../assets/dedvukaj2.jpg";
import dedvukaj3 from "../assets/dedvukaj3.jpg";
import majkaTereza1 from "../assets/majka_tereza1.jpg";
import majkaTereza2 from "../assets/majka_tereza2.jpg";
import majkaTereza3 from "../assets/majka_tereza3.jpg";
import ImageSlider from "../components/ImageSlider.jsx";

const MonumentsPage = () => {

    const monuments = [
        {
            title: 'Spomenik Đerđ Kastrioti Skenderbeu ispred osnovne škole u Zatrijebač koja nosi isto ime.',
            text: [
                'Đurađ Kastriot, poznat kao Skenderbeg, rođen je 6. maja 1405. godine u Sini, a preminuo je 17. januara 1468. u Lješu. Bio je poznat kao borac protiv osmanske dominacije i pokušaja islamizacije. Skender-beg je bio simbol nacionalnog herojstva za albance Đurađ Kastriot Skenderbeg (1405. - 17. januar 1468) bio je plemić iz feudalne porodice Kastrioti, koji je imao kontrolu nad djelovima centralne Albanije i istočne Makedonije tokom 14. i 15. veka. Poput mnogih plemića tog doba, težio je proširenju svoje teritorije, sklapajući saveze i praveći ustupke radi podrške i zaštite. Rođen je u okolini grada Debra, u pograničnom području između današnje Makedonije i Albanije, u selu pod kontrolom svog dede Pavla Kastrioti, koji je bio vazal Osmanskog carstva. Poslan je u Jedrene kao zalog odanosti svog oca Gjona, takođe osmanskog vazala. Nakon obrazovanja i vojne karijere, postao je subaša u Kroji (1437-8), a potom sandžakbeg Debarskog sandžaka 1440. godine. Iako su mu rođaci nudili da se pridruži anti-osmanskoj pobuni u Albaniji (1432-8), ostao je vjeran sultanu kako bi očuvao privid lojalnosti.'
            ],
            images: [
                {
                    id: 1,
                    image: spomenik1
                },
                {
                    id: 2,
                    image: spomenik2
                },
                {
                    id: 3,
                    image: skenderbeg1
                },
                {
                    id: 4,
                    image: skenderbeg2
                },
                {
                    id: 5,
                    image: skenderbeg3
                }
            ]
        },
        {
            title: 'Spomenik Baca Kurti Gjokaj',
            text: [
                <div>Baca Kurti Gjokaj (oko 1807–1881) bio je albanski vođa koji je učestvovao u bici kod Ržanice protiv Kneževine Crne Gore. Baca je rođen oko 1807. godine u selu Milješ (Milesh) u plemenskoj oblasti Gruda, blizu grada Tuzi, u albanskoj planinskoj (Malësor) porodici. Kurti je rođen i pripadao je rimokatolicizmu. Godine 1856. postao je vojvoda Gruda nakon što je ugušio grupu pobunjenika u Fundni. Te godine je ubio i brata Marka Miljanova. Bio je jedan od 15 osmanskih delegata iz severne Albanije poslatih tokom pregovora na Berlinskom kongresu (13. jun – 13. jul 1878). Pridružio se albanskoj nacionalističkoj Ligi iz Prizrena nakon odluke Berlinskog kongresa da preda područja naseljena Albancima, kao što su Hoti, Gruda, Plav, Gusinje, Kastrati, itd., Kneževini Crnoj Gori. Kada je knez Nikola I od Crne Gore ušao na teritoriju koja mu je bila ustupljena Berlinskim kongresom, Baca Kurti i drugi poglavari Malësije su organizovali otpor protiv Crne Gore. Severni albanski planinci su porazili Crnogorce u bici kod Ržanice. Bio je istaknut kao jedan od najboljih zapovednika Čuna Mule tokom bitke. Braćo, neprijatelj nas napada! Ko želi danas da umre za svoju zemlju i za čast svog oružja, neka ide za mnom! — Baca Kurti, tokom bitke kod Ržanice. Mobilisao je ne samo članove svog klana, već i članove drugih gradova Malësije, da se bore protiv crnogorske vojske i da nateraju Crnogorce da napuste albansku teritoriju: svi muškarci od 7 do 70 godina, ujedinjeni, naterali su crnogorske snage na povlačenje. Danas je poznat među Albancima širom sveta, a mnoge pesme i pesme su stvorene u njegovu čast.
                </div>
            ],
            images: [
                {
                    id: 1,
                    image: bacaKurti1
                },
                {
                    id: 2,
                    image: bacaKurti2
                },
                {
                    id: 3,
                    image: bacaKurti3
                },
                {
                    id: 4,
                    image: bacaKurti4
                }
            ]
        },
        {
            title: 'Spomenik Ded Gjo Luli',
            text: [
                'Dedë Gjon Luli Dedvukaj, poznat i kao Ded Gjo Luli i Deda (novembar 1840–24. septembar 1915), bio je albanski gerilski vođa poznat po vođenju Malisorskog ustanka protiv osmanskih snaga. Posthumno je odlikovan titulom "Heroj Albanije." Dedvukaj je bio poglavar plemena Hoti. Dedvukaj je rođen u selu Traboin, tada dijelu sandžaka Skadar u Osmanskom carstvu (sada opština Tuzi, Crna Gora). Pripadao je porodici Dedvukaj iz plemena Hoti i bio je rimokatolik. Ded Gjoni je bio član Lige iz Prizrena i učestvovao je u sukobima u Plavu i Gusinju (1879–80) protiv odluka Berlinskog kongresa, koje su imale za cilj da te teritorije ustupe Crnoj Gori. Osmansko carstvo je kasnije ustupilo Ulcinj kao kompenzaciju 1880. godine. Tokom albanskih ustanaka 1910. i 1911. godine, Dedvukaj i njegovo pleme su se odupirali osmanskoj vlasti, odbijajući da plaćaju poreze ili predaju oružje. Početkom 1911. godine, uz podršku crnogorskog kralja Nikole Petrovića, severna albanska plemena su se pobunila. Dedvukaj je predvodio napade na osmanske stražarske postaje i, posle niza bitaka, simbolično podigao albansku zastavu na planini Bratile prvi put poslije više od četiri vijeka. U Tirani, ulica nosi njegovo ime, a njegova razrušena kuća u Bardhaju je pretvorena u muzej. Gjergj Fishta je napisao ep o njegovoj borbi protiv Osmanlija. U septembru 1915. godine, Dedë Gjon Luli, u dobi od oko 75 godina, bio je u zasjedi i ubijen od strane crnogorskih snaga u Orošu, Mirdite.'
            ],
            images: [
                {
                    id: 1,
                    image: dedvukaj1
                },
                {
                    id: 2,
                    image: dedvukaj2
                },
                {
                    id: 3,
                    image: dedvukaj3
                }
            ]
        },
        {
            title: 'Spomenik Majke Tereze',
            text: [
                'Majka Terezija, rođena kao Anjezë Gonxhe Bojaxhiu, (Skoplje, 27. 8. 1910. — Calcutta, 5. 9. 1997.), pravim imenom Agnesa Gongea Boiagiu, je bila časna sestra, rođena je u Skoplju u albanskoj[2] katoličkoj porodici, koja je osnovala red Misionarke milosrđa i dobila Nobelovu nagradu za mir 1979. za svoj humanitarni rad. Majka Tereza je zbrinjavala siromašne, bolesne, siročiće i umiruće Kalkute. Preko 45 godina služila je siromašnima, bolesnima, siročadi i umirućima. Misionarke ljubavi od početne male zajednice s vremenom su prerasle u zajednicu koja broji 5 000 redovnica u oko 600 misija, škola i skloništa u 120 država svijeta. Papa Ivan Pavao II. proglasio je Majku Tereziju blaženom 19. 10. 2003. godine. Od 1970. godine, međunarodno je prepoznata kao humanitarka i pomoćnica siromašnih i nemoćnih. Dobitnica je Nobelove nagrade za mir 1979., te mnogih drugih međunarodnih nagrada, među kojima se ističu najviše indijsko civilno odličje "Bharat ratna" iz 1980. za njen humanitarni rad, počasno državljanstvo SAD-a, Nagrada Albert Schweitzer itd. Misionarke ljubavi nastavljaju pomagati siromašnima i potrebnima širom svijeta pa tako djeluju i u Hrvatskoj. Majka Terezija više puta boravila je u Hrvatskoj, prvi put još 1928. godine. Župnik njene župe u rodnom Skoplju bio je hrvatski svećenik Franjo Jambreković, koji je utjecao na nju, a u Indiji je surađivala s hrvatskim svećenikom Antom Gabrićem. Skupština grada Zagreba 19. 7. 1990. proglasila ju je počasnom građankom grada Zagreba.'
            ],
            images: [
                {
                    id: 1,
                    image: majkaTereza1
                },
                {
                    id: 2,
                    image: majkaTereza2
                },
                {
                    id: 3,
                    image: majkaTereza3
                }
            ]
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

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
        <motion.div variants={containerVariants} initial="hidden" whileInView="show">
            <motion.h1 variants={partVariants} className="text-2xl font-semibold pb-8 px-2">Spomenici u Malesiji</motion.h1>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" className="px-2">
                {monuments.map((item, index) => (
                    <motion.div variants={partVariants} key={index} className="flex reverse min-h-[400px]">
                        <div className="relative w-full py-[100px]" style={{flex: 2}}>
                            <ImageSlider images={item?.images}
                                         currentIndex={currentIndex}
                                         setCurrentIndex={setCurrentIndex}
                                         imgUrl={item?.images[currentIndex]?.image}
                                         classNameContainer="absolute inset-0 bg-cover bg-center max-h-full"
                                         classNameImage="bg-cover bg-center"
                            />
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-gray-800 text-gray-100 py-4`} style={{flex: 2}}>
                            <h3 className="flex justify-center items-center text-center text-xl font-semibold h-full text-gray-100 tracking-widest uppercase">
                                {item.title}
                            </h3>
                            <div>
                                {Array.isArray(item.text) ? (
                                    <ul style={{flex:2}} className="flex flex-col gap-6 justify-center items-center py-4">
                                        {item.text.map((text, index) => (
                                            <li key={index} className="text-xl px-10 leading-8">{text}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="flex flex-col gap-6 justify-center items-center px-10 text-xl py-8 leading-8" style={{flex:2}}>{item.text}</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MonumentsPage;