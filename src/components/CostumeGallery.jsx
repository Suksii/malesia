import React from 'react';
import nosnja5 from '../assets/nosnja5.mp4';
import {motion} from "framer-motion";

const CostumeGallery = ({gallery, title}) => {

    const isVideoGallery = gallery.some(image => image.src === nosnja5);

    return (
        <div>
            <motion.h1  initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-semibold px-2 text-center py-10">{title}
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
                    {isVideoGallery && <motion.video initial={{opacity: 0, y: 50}}
                                   whileInView={{opacity: 1, y: 0}}
                                   transition={{duration: 1}}
                                   src={nosnja5}
                                   controls
                                   className="w-full object-cover py-2"
                    />}
                </div>
            </div>
        </div>
    );
};

export default CostumeGallery;