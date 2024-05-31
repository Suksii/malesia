import React from 'react';
import slika2 from '../assets/slika2.jpg';
import { motion } from 'framer-motion';

const PoliticsPage = () => {

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
            <motion.h1 variants={partVariants} className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Politička reprezentacija i Autonomija</motion.h1>
            <motion.p variants={partVariants} className="text-xl pt-8 pb-4">
                Politička reprezentacija Albanaca u Malesiji značajno je unapređena sticanjem statusa samostalne opštine Tuzi. Lokalna samouprava omogućava bolje upravljanje lokalnim resursima i donošenje odluka koje odgovaraju potrebama zajednice. Albanske političke partije i organizacije igraju ključnu ulogu u zastupanju interesa zajednice na lokalnom i nacionalnom nivou.
            </motion.p>
            <motion.img variants={partVariants} src={slika2} alt="politics" className="w-[80%] mx-auto object-cover"/>
            <motion.h3 variants={partVariants} className="text-xl font-semibold pt-8 pb-4">Saradnja sa Centralnom Vlašću</motion.h3>
            <motion.p variants={partVariants} className="text-xl">
                Efikasna saradnja između lokalne samouprave i centralne vlasti ključna je za uspešno rešavanje problema i ostvarivanje razvojnih ciljeva. Albanski predstavnici aktivno učestvuju u političkom životu Crne Gore, radeći na unapređenju prava i položaja svoje zajednice. Uključivanje u procese donošenja odluka na nacionalnom nivou omogućava bolje zastupanje interesa Albanaca u Malesiji.
            </motion.p>
        </motion.div>
    );
};

export default PoliticsPage;