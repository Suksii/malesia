import {useState} from 'react';
import nosnjadzubeleta1 from '../assets/nosnjaa1.png';
import nosnjadzubeleta2 from '../assets/nosnjaa2.jpg';
import nosnjadzubeleta3 from '../assets/nosnjaa3.jpg';
import ImageSlider from "./ImageSlider.jsx";
import {motion} from "framer-motion";

const Dzubeleta = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            id: 1,
            image: nosnjadzubeleta1
        },
        {
            id: 2,
            image: nosnjadzubeleta2
        },
        {
            id: 3,
            image: nosnjadzubeleta3
        }
    ]

    return (
        <>
            <motion.h1 initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1 }}
                       className="text-3xl font-semibold px-2 text-center py-10">
                Džubeleta
            </motion.h1>
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{flex: 3}}
                            className="relative min-h-[600px]">
                    <ImageSlider images={images}
                                 setCurrentIndex={setCurrentIndex}
                                 currentIndex={currentIndex}
                                 imgUrl={images[currentIndex].image}
                                 classNameContainer="absolute inset-0"
                                 classNameImage="bg-cover bg-no-repeat bg-center w-full"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{flex: 5}}
                            className="px-4">
                    <p className="text-xl leading-9">Pri tijelu se nosi pamučna košulja, tj. kmiša, dugih rukava i kragnom ukrašenom od bijelog pamučnog konca, vezenom u floralnom ornamentu. Na donjem dijelu tijela nosi se podsuknja izrađena od bijelog platna i podmetač, odnosno sjednik ili bufač, tanki jastučić proštepan i ispunjen vunom. Preko košulje se nosi jaketa, odnosno krahlolj sa dugačkim rukavima najčešće crvene, crne ili bordo boje. Džupeleta je najreprezentativniji dio malisorske nošnje. Specifičnog je zvonolikog izgleda težine oko 15 kg. Izrađuje se od crnog četvoronitnog tkanog sukna zvanog žgun. Sastoji se od kružne suknje i plastrona koji je pravougaonog oblika, sa ovalno izrezanom gornjom ivicom ukrašen širitom, vezom od raznobojnih perlica u vidu stilizovanih cvjetova. Suknja je na prednjoj strani nešto kraća, ravna i bez ukrasa, a bočno i pozadi se zvonasto širi. Suknja je pri dnu opšivena bijelom suknenom trakom koja pravi kontrast i ističe zvonoliku formu. Postoje i džubelete izrađene sa dugim rukavima. Sa prednje strane, preko džupelete se nosi kecelja, odnosno bofča, izrađena od crvenog vunenog ili pamučnog materijala dužine do ispod koljena. Preko bofče se stavlja još jedna nešto kraća plišana kecelja ili pregača, pshtjelak  koja je ukrašena perlicama u raznim bojama i sitnim geometrijskim ornamentima. Postav je široki crni sukneni pojas, veoma bogato ukrašen crnim plišanim trakama, komadićima kože ili čohe i vezom od raznobojnih niti. Na nogama se nose dokoljenice izrađene od vune u kombinaciji sa suknom, somotom ili plišem u crnoj boji. Donji dio čarapa je od vune, dok je gornji od sukna, somota ili pliša. Preko čarapa nošeni su široki opanci.</p>
                </motion.div>
            </div>
        </>
    );
};

export default Dzubeleta;