import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useEffect} from "react";

const ImageSlider = ({imgUrl, currentIndex, setCurrentIndex, classNameContainer, classNameImage, images}) => {

    const nextImage = () => {
        if(currentIndex < images.length - 1){
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }
    const previousImage = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(images.length - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);



    return (
        <div className={`${classNameContainer}`}>
            <div className="w-[100%] h-[100%] flex overflow-hidden">
                {images.map((image) => {
                        const titleWords = image?.title?.split(" ") || [];
                        return (
                            <div key={image.id}
                                 className={`flex flex-col justify-center items-center w-[100%] h-[100%] flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out ${classNameImage}`}
                                 style={{backgroundImage:`url(${imgUrl})`, translate: `${-100 * currentIndex}%`}}>
                                <button className="absolute top-0 bottom-0 left-0 p-[1%] z-10 hover:bg-gray-500 hover:bg-opacity-[20%] duration-150"
                                        onClick={previousImage}>
                                    <FaAngleLeft className="text-[2rem] cursor-pointer text-white"/>
                                </button>
                                <button className="absolute top-0 bottom-0 right-0 p-[1%] z-10 hover:bg-gray-500 hover:bg-opacity-[20%] duration-150"
                                        onClick={nextImage}>
                                    <FaAngleRight className="text-[2rem] cursor-pointer text-white"/>
                                </button>
                                <h1 className="font-rockness md:text-center">
                                    {titleWords.map((word, index) => (
                                        <span key={index} className={`text-4xl md:text-8xl ${index === 0 && index === 2 && ' text-yellow-50' } ${index === 1 && 'text-gray-500'}`}>
                                        {word}{" "}
                                    </span>
                                    ))}
                                </h1>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default ImageSlider