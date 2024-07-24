import React from 'react';
import nosnja1 from '../assets/nosnja1.jpg';
import nosnja2 from '../assets/nosnja2.jpg';
import nosnja3 from '../assets/nosnja3.jpg';
import nosnja4 from '../assets/nosnja4.jpg';
import nosnja5 from '../assets/nosnja5.mp4';
import nosnja6 from '../assets/nosnja6.jpg';
import nosnja7 from '../assets/nosnja7.jpg';
import nosnja8 from '../assets/nosnja8.jpg';
import nosnja9 from '../assets/nosnja9.jpg';
import nosnja10 from '../assets/nosnja10.jpg';
import nosnja11 from '../assets/nosnja11.jpg';
import {motion} from "framer-motion";

const CostumeGallery = () => {

    const gallery = [
        {
            src: nosnja1,
            alt: 'nosnja1'
        },
        {
            src: nosnja2,
            alt: 'nosnja2',
            text: 'Foto: Kud Ramadan Šarkić'
        },
        {
            src: nosnja3,
            alt: 'nosnja3',
            text: 'Foto: Kud Ramadan Šarkić'
        },
        {
            src: nosnja4,
            alt: 'nosnja4',
            text: 'Foto: Kud Ramadan Šarkić'
        },
        {
            src: nosnja6,
            alt: 'nosnja6',
            text: 'Foto: Kud Ramadan Šarkić'
        },
        {
            src: nosnja7,
            alt: 'nosnja7',
            text: 'Foto: Kud Ramadan Šarkić'
        },
        {
            src: nosnja9,
            alt: 'nosnja9',
            text: 'Foto: Kud Ramadan Šarkić'
        },
        {
            src: nosnja8,
            alt: 'nosnja8'
        },
        {
            src: nosnja10,
            alt: 'nosnja10'
        },
        {
            src: nosnja11,
            alt: 'nosnja11'
        }
    ];

    return (
        <div>
            <motion.h1  initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-semibold px-2 text-center py-10">Albanska narodna nošnja
            </motion.h1>
            <div className="w-full gallery">
                <div className="transition duration-500 ease-in-out transform">
                    {gallery.map((image, index) => {
                        return (
                            <div key={index} className="relative">
                                <motion.img initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1 }}
                                            key={index} src={image.src}
                                            alt={image.alt}
                                            className="w-full object-cover py-2 hover:filter hover:brightness-75 transition duration-500 ease-in-out transform"
                                />
                                {image.text && <p className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-50">{image.text}</p>}
                            </div>
                        );
                    })}
                    <motion.video initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                  src={nosnja5}
                                  controls
                                  className="w-full object-cover py-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default CostumeGallery;