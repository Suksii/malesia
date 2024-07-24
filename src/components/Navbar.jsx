import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = ({goToFond}) => {

    const [toggle, setToggle] = useState(false)
    const [sticky, setSticky] = useState(false)
    const path = useLocation().pathname;

    const navItems = [
        { name: 'Početna', link: '/' },
        { name: 'Istorija', link: '/istorija' },
        { name: 'Kultura', link: '/kultura' },
        { name: 'Ekonomija', link: '/ekonomija' },
        { name: 'Spomenici', link: '/spomenici' },
    ];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 64) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })

    const fondLogo = "https://upload.wikimedia.org/wikipedia/commons/2/23/Coat_of_arms_of_Montenegro.svg";
    const scrollOnTop = (behavior) => {
        window.scrollTo({
            top: 0,
            behavior: behavior
        });
    }

    return (
        <>
            <nav className={`hidden md:flex justify-evenly items-center py-4 shadow_box z-50 ${sticky ? 'sticky top-0 bg-white' : 'bg-transparent'} transition-colors duration-500`}>
                <div className="absolute left-8 cursor-pointer" onClick={goToFond}>
                    <img src={fondLogo} alt="fond" className={`w-12 h-12 ${sticky ? 'block' : 'hidden'}`}/>
                </div>
                    {navItems.map((item, index) => {
                        return (
                            <Link to={item.link}
                                  key={index}
                                  onClick={() => scrollOnTop("instant")}
                                  className={`text-xl font-semibold hover:text-blue-500 duration-500 ${path === item.link ? 'text-blue-500' : ''}`}>
                                {item.name}
                            </Link>
                        );
                    })
                }
            </nav>
            <nav className="flex justify-end md:hidden items-center bg-black px-2 py-4">
                <div className="absolute flex gap-3 left-2 p-2 cursor-pointer text-gray-100" onClick={goToFond}>
                    <img src={fondLogo} alt={"fond"} className="w-12 h-12"/>
                    <hr className="h-12 border-r-2"/>
                    <p className="w-[240px]"><span className="font-semibold">Fond za zaštitu i ostvarivanje manjinskih prava </span>Crne Gore</p>
                </div>
                <div className="z-50">
                    <button className={toggle ? "menu x" : "menu"}
                            onClick={() => setToggle(prevState => !prevState)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div className="relative">
                <div className={`absolute flex flex-col bg-black h-[95vh] text-center left-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} duration-1000 z-50`}>
                    {navItems.map((item, index) => {
                        return (
                            <Link to={item.link}
                                  key={index}
                                  className="text-xl text-white hover:bg-gray-300 hover:text-black w-full flex-grow flex justify-center items-center duration-500"
                                  onClick={() => {
                                      setToggle(false);
                                      scrollOnTop("instant");
                                  }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;