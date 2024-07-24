import React, {useState} from 'react';
import { motion } from 'framer-motion';
import spomenik1 from "../assets/spomenik1.jpg";
import spomenik2 from "../assets/spomenik2.jpg";
import skenderbeg1 from "../assets/skenderbeg1.jpg";
import skenderbeg2 from "../assets/skenderbeg2.jpg";
import skenderbeg3 from "../assets/skenderbeg3.jpg";
import ImageSlider from "../components/ImageSlider.jsx";

const MonumentsPage = () => {

    const monuments = [
        {
            title: 'Spomenik Đerđ Kastrioti Skenderbeu ispred osnovne škole u Zatrijebač koja nosi isto ime. I nesto o njemu skini sa interneta',
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
                            <ImageSlider images={item.images}
                                         currentIndex={currentIndex}
                                         setCurrentIndex={setCurrentIndex}
                                         imgUrl={item.images[currentIndex].image}
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